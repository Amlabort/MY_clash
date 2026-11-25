/*
 * 心悦俱乐部 每日自动领取 (Loon 脚本)
 *
 * 工作原理：
 *  1. http-request 模式：插件规则匹配到心悦礼包接口时，保存登录头（t-*、x-xy-* 等）到持久化存储。
 *  2. cron 模式：读取已保存的登录头，依次领取各游戏任务礼包。
 *
 * 重要经验（已用真实接口实测验证）：
 *  - 请求体必须保持「原始字节」。Loon 的 body 按 UTF-8 编码字符串发送，
 *    一旦出现 >127 的字节（如 0xA3），会被撑成 C2 A3，服务器解析出错并返回"请绑定游戏角色"。
 *    因此礼包类型必须用 giftId=2（编码为 08 02），任务ID 是数字，整体保持纯 ASCII。
 *  - 服务器返回文案的含义：
 *      领取成功                    -> 本次领取成功
 *      很抱歉领取超出账号日限量     -> 今天已经领过（不是错误）
 *      请绑定游戏角色              -> 请求体字节被破坏（或该游戏未绑定）
 *      网络繁忙请稍后再试           -> 触发频率限制，需要间隔后重试
 */

/* ---------------- 可配置项 ---------------- */
const DEFAULTS = {
  // 单任务领取接口
  receive: "https://bgw.xinyue.qq.com/xyapp.GiftSrv/ReceiveGift",
  // 游戏签到礼包接口（可选，当前返回"网络繁忙"，保留以便后续启用）
  receiveGames: "https://bgw.xinyue.qq.com/xyapp.GiftSrv/ReceiveGamesGift",
  receiveGamesHex: "0A067369676E696E",
  // 礼包类型 ID。2 = 任务礼包（编码 08 02，纯 ASCII，推荐）
  giftId: 2,
  // 要领取的任务，用 | 分隔。写法：
  //   "381"     任务 381（使用上面的 giftId）
  //   "381@2"   任务 381，礼包ID 2
  //   "hex:08..." 直接指定请求体十六进制（必须全为 ASCII 字节，即每字节 < 80）
  // 注意：@1187 会产生 0xA3（>127），Loon 会按 UTF-8 撑大导致失败，脚本会主动拦截并告警
  tasks: "381|4156|9733",
  // 每个请求之间的间隔（毫秒），避免触发"网络繁忙"频率限制
  interval: 1200,
  // 是否启用 ReceiveGamesGift（当前实测返回"网络繁忙"，默认关闭）
  enableGamesGift: false,
};

const STORE_KEY = "gift_headers";
const isRequest = typeof $request !== "undefined";

/* ---------------- 参数与配置 ---------------- */
const C = buildConfig();

function buildConfig() {
  const raw = typeof $argument !== "undefined" ? $argument : null;
  let parsed = {};
  if (raw && typeof raw === "object") {
    parsed = raw;
  } else if (typeof raw === "string" && raw.length > 0) {
    raw.split("&").forEach((pair) => {
      const i = pair.indexOf("=");
      if (i > 0) parsed[pair.slice(0, i)] = pair.slice(i + 1);
    });
  }
  const pick = (name) => {
    const v = parsed["xy-" + name] || parsed[name];
    return v !== undefined && v !== null && String(v).length > 0 ? String(v) : DEFAULTS[name];
  };
  return {
    receive: pick("receive"),
    receiveGames: pick("receiveGames"),
    receiveGamesHex: pick("receiveGamesHex"),
    giftId: parseInt(pick("giftId"), 10) || DEFAULTS.giftId,
    tasks: pick("tasks"),
    interval: parseInt(pick("interval"), 10) || DEFAULTS.interval,
    enableGamesGift: DEFAULTS.enableGamesGift,
  };
}

/* ---------------- 工具 ---------------- */
function bytesToHex(bytes) {
  return bytes
    .map((b) => (b < 16 ? "0" : "") + b.toString(16).toUpperCase())
    .join("");
}

function bytesToString(bytes) {
  return bytes.map((b) => String.fromCharCode(b)).join("");
}

function hexToBytes(hex) {
  const clean = String(hex).replace(/\s+/g, "");
  const out = [];
  for (let i = 0; i + 1 < clean.length; i += 2) {
    out.push(parseInt(clean.substr(i, 2), 16));
  }
  return out;
}

/** 校验请求体是否全为 ASCII（每字节 < 128），否则 Loon 会改写字节 */
function isAsciiSafe(bytes) {
  return bytes.every((b) => b >= 0 && b < 128);
}

/**
 * Loon 把响应体按「每字符一字节」返回，中文会变成 latin1 乱码。
 * 这里按 UTF-8 还原，用于读取"领取成功"等文案。
 */
function utf8Decode(s) {
  if (!s) return "";
  const bytes = [];
  for (let i = 0; i < s.length; i++) bytes.push(s.charCodeAt(i) & 0xff);
  let out = "";
  for (let i = 0; i < bytes.length; ) {
    const b = bytes[i];
    if (b < 0x80) {
      out += String.fromCharCode(b);
      i += 1;
    } else if (b >= 0xc0 && b < 0xe0) {
      out += String.fromCharCode(((b & 0x1f) << 6) | (bytes[i + 1] & 0x3f));
      i += 2;
    } else if (b >= 0xe0 && b < 0xf0) {
      out += String.fromCharCode(
        ((b & 0x0f) << 12) | ((bytes[i + 1] & 0x3f) << 6) | (bytes[i + 2] & 0x3f)
      );
      i += 3;
    } else if (b >= 0xf0) {
      i += 4;
    } else {
      i += 1;
    }
  }
  return out;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/* ---------------- protobuf 编码 ---------------- */
function encodeVarint(n) {
  const out = [];
  while (n > 0x7f) {
    out.push((n & 0x7f) | 0x80);
    n = Math.floor(n / 128);
  }
  out.push(n);
  return out;
}

function asciiBytes(s) {
  const out = [];
  for (let i = 0; i < s.length; i++) out.push(s.charCodeAt(i));
  return out;
}

/**
 * 构造 ReceiveGift 请求体：
 *   field1 varint  giftId
 *   field2 string  "task"
 *   field3 string  任务ID
 * 例：giftId=2、任务381 -> 08 02 12 04 task 1A 03 381（13 字节，纯 ASCII）
 */
function buildTaskBody(taskId, giftId) {
  const f1 = [0x08].concat(encodeVarint(giftId));
  const typeBytes = asciiBytes("task");
  const f2 = [0x12, typeBytes.length].concat(typeBytes);
  const idBytes = asciiBytes(taskId);
  const f3 = [0x1a, idBytes.length].concat(idBytes);
  return f1.concat(f2, f3);
}

/** 解析任务配置项，返回 { label, bytes } */
function parseTaskEntry(entry) {
  const e = String(entry).trim();
  if (/^hex:/i.test(e)) {
    return { label: "自定义请求体", bytes: hexToBytes(e.slice(4)) };
  }
  const parts = e.split("@");
  const taskId = parts[0];
  const giftId = parts.length > 1 ? parseInt(parts[1], 10) : C.giftId;
  return { label: "任务 " + taskId, bytes: buildTaskBody(taskId, giftId) };
}

/* ---------------- 1. 抓取登录头 ---------------- */
function captureHeaders() {
  const headers = $request.headers || {};
  // 跳过脚本自己发出的请求，避免抓取规则拦截本脚本请求
  const isSelf = Object.keys(headers).some(
    (k) => k.toLowerCase() === "x-qiandao-script"
  );
  if (isSelf) return false;

  const keep = {};
  for (const k in headers) {
    const lk = k.toLowerCase();
    if (
      lk === "user-agent" ||
      lk === "content-type" ||
      lk === "accept" ||
      lk.indexOf("t-") === 0 ||
      lk.indexOf("x-xy") === 0
    ) {
      keep[k] = headers[k];
    }
  }
  const hasToken = Object.keys(keep).some((k) => k.toLowerCase() === "t-access-token");
  if (!hasToken) {
    console.log("[心悦] 未找到 t-access-token，跳过保存。收到的头: " + Object.keys(headers).join(","));
    return false;
  }
  $persistentStore.write(JSON.stringify(keep), STORE_KEY);
  const check = $persistentStore.read(STORE_KEY);
  console.log("[心悦] 凭证已保存，读回校验: " + (check ? "成功" : "失败"));
  return !!check;
}

function handleCapture() {
  captureHeaders();
  $done({});
}

/* ---------------- 2. 定时领取 ---------------- */
function loadHeaders() {
  const raw = $persistentStore.read(STORE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

/** 根据响应文案判断结果类型 */
function classify(status, text) {
  if (status !== 200) {
    if (text.indexOf("网络繁忙") !== -1) return { type: "busy", ok: false, msg: "网关繁忙（HTTP " + status + "）" };
    return { type: "error", ok: false, msg: "HTTP " + status + "，" + (text.slice(0, 60) || "无内容") };
  }
  if (text.indexOf("领取成功") !== -1) return { type: "success", ok: true, msg: "领取成功" };
  if (text.indexOf("超出账号日限量") !== -1) return { type: "already", ok: true, msg: "今日已领过" };
  if (text.indexOf("已领取") !== -1 || text.indexOf("已经领取") !== -1) {
    return { type: "already", ok: true, msg: "今日已领过" };
  }
  if (text.indexOf("请绑定游戏角色") !== -1) {
    return { type: "unbound", ok: false, msg: "提示未绑定角色（通常是请求体字节被改写或该游戏未绑定）" };
  }
  if (text.indexOf("网络繁忙") !== -1) return { type: "busy", ok: false, msg: "网络繁忙，需稍后重试" };
  const readable = text.replace(/[^\u4e00-\u9fffA-Za-z0-9]/g, "");
  return { type: "unknown", ok: false, msg: readable ? readable.slice(0, 80) : "无法识别的响应" };
}

function postOnce(url, bodyStr, headers) {
  return new Promise((resolve) => {
    const h = Object.assign({}, headers, { "X-Qiandao-Script": "1" });
    $httpClient.post({ url: url, headers: h, body: bodyStr }, (error, response, data) => {
      if (error) {
        resolve({ error: String(error) });
        return;
      }
      resolve({
        status: response && response.status,
        text: utf8Decode(data || ""),
        hex: bytesToHex([].slice.call((data || "").slice(0, 32)).map((c) => c.charCodeAt(0) & 0xff)),
      });
    });
  });
}

async function claimTask(name, bytes, headers) {
  // 前置校验：含高位字节时明确告警，避免发出被破坏的请求
  if (!isAsciiSafe(bytes)) {
    const bad = bytes.filter((b) => b >= 128).map((b) => "0x" + b.toString(16).toUpperCase());
    return {
      name: name,
      ok: false,
      msg: "请求体含高位字节(" + bad.join(",") + ")，Loon 会按 UTF-8 改写导致失败，已跳过",
    };
  }
  const bodyStr = bytesToString(bytes);
  const hex = bytesToHex(bytes);
  console.log("[心悦] " + name + " 发送 " + bytes.length + " 字节: " + hex);

  let result = null;
  for (let attempt = 1; attempt <= 3; attempt++) {
    const r = await postOnce(C.receive, bodyStr, headers);
    if (r.error) {
      result = { name: name, ok: false, msg: "请求失败: " + r.error };
      break;
    }
    const c = classify(r.status, r.text);
    result = { name: name, ok: c.ok, msg: c.msg };
    if (c.type !== "busy") break;
    if (attempt < 3) {
      console.log("[心悦] " + name + " 第 " + attempt + " 次返回繁忙，等待重试");
      await sleep(C.interval * attempt);
    }
  }
  console.log("[心悦] " + name + " 结果: " + (result.ok ? "成功" : "失败") + "，" + result.msg);
  return result;
}

async function runCron() {
  const headers = loadHeaders();
  console.log(
    "[心悦] 启动: receive=" + C.receive + " | giftId=" + C.giftId +
    " | tasks=" + C.tasks + " | 凭证=" + (headers ? "有" : "无")
  );
  if (!headers) {
    console.log("[心悦] 未找到登录凭证，请先打开一次心悦 App 的礼包页面");
    $done();
    return;
  }

  const results = [];
  const tasks = (C.tasks || "").split("|").filter((t) => t.trim().length > 0);

  for (let i = 0; i < tasks.length; i++) {
    const spec = parseTaskEntry(tasks[i]);
    results.push(await claimTask(spec.label, spec.bytes, headers));
    if (i < tasks.length - 1) await sleep(C.interval);
  }

  // 可选：游戏签到礼包
  if (C.enableGamesGift) {
    await sleep(C.interval);
    results.push(await claimTask("游戏签到礼包", hexToBytes(C.receiveGamesHex), headers));
  }

  const success = results.filter((r) => r.ok).length;
  console.log(
    "[心悦] 完成，共 " + results.length + " 项，成功 " + success + " 项:\n" +
    results.map((r) => "  " + r.name + " -> " + (r.ok ? "成功" : "失败") + "，" + r.msg).join("\n")
  );
  $done();
}

if (isRequest) {
  handleCapture();
} else {
  runCron();
}
