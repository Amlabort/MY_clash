/*
 * 心悦俱乐部 每日自动领取 (Loon 脚本)
 *
 * 用法：
 *  1. http-request 模式：插件规则匹配到心悦请求时，保存登录头（t-*、x-xy-* 等）到持久化存储。
 *  2. cron 模式：读取已保存的登录头，依次领取各任务，最后执行一次 batch 一键领取。
 *
 * 配置方式：直接改下面的 DEFAULTS。
 *  （本版 Loon 脚本引擎不注入 $argument，插件 [Argument] 的配置无法传入脚本，
 *    因此接口地址、任务 ID、batch 请求体都写在这里。若 $argument 可用仍会优先使用。）
 *
 * 更换任务 / batch 请求体时：改 DEFAULTS.tasks 与 DEFAULTS.batchHex 即可。
 */

/* ---------------- 可配置项 ---------------- */
const DEFAULTS = {
  // 单任务领取接口
  receive: "https://bgw.xinyue.qq.com/xyapp.GiftSrv/ReceiveGift",
  // 一键领取（批量）接口
  batch: "https://bgw.xinyue.qq.com/apisix/xinyue/batch",
  // 要逐个领取的任务，用 | 分隔。写法：
  //   "381"           任务 381（礼包ID 默认 1187）
  //   "381@2"         任务 381，礼包ID 2（批量响应里那个"type 2"的任务用这个）
  //   "hex:08A309..." 直接给请求体十六进制
  tasks: "381|4156",
  // 一键领取的请求体（protobuf 的十六进制，无空格）
  batchHex:
    "12210A0C436F6E74656E742D5479706512116170706C69636174696F6E2F70726F746F1898752251099A9999999999F13F1204504F53541A1F2F78796170702E476966745372762F5265636569766547616D65734769667422150A0B742D676966742D7479706512067369676E696E32080A067369676E696E223B099A9999999999F13F1204504F53541A1A2F78796170702E476966745372762F5265636569766547696674320E080212047461736B1A0439373333",
};

const STORE_KEY = "gift_headers";
const GIFT_ID = 1187;
const GIFT_TYPE = "task";

const isRequest = typeof $request !== "undefined";

const ARG = buildArg();

function buildArg() {
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
  // 兼容 xy-receive / receive 两种键名
  const pick = (name) => {
    const v = parsed["xy-" + name] || parsed[name];
    return v && String(v).length > 0 ? String(v) : DEFAULTS[name];
  };
  return {
    receive: pick("receive"),
    batch: pick("batch"),
    tasks: pick("tasks"),
    batchHex: pick("batchHex"),
    _empty: Object.keys(parsed).length === 0,
    _rawType: typeof raw,
  };
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

/** 按抓包结构拼出单任务领取的请求体字节 */
function buildTaskBytes(taskId, giftId) {
  const id = typeof giftId === "number" && !isNaN(giftId) ? giftId : GIFT_ID;
  const f1 = [0x08].concat(encodeVarint(id));
  const typeBytes = asciiBytes(GIFT_TYPE);
  const f2 = [0x12, typeBytes.length].concat(typeBytes);
  const idBytes = asciiBytes(taskId);
  const f3 = [0x1a, idBytes.length].concat(idBytes);
  return f1.concat(f2, f3);
}

function bytesToHex(bytes) {
  return bytes.map((b) => (b < 16 ? "0" : "") + b.toString(16).toUpperCase()).join("");
}

/**
 * 解析一个任务配置项，支持三种写法：
 *   "381"            -> 任务ID 381，礼包ID 用 GIFT_ID(1187)
 *   "381@2"          -> 任务ID 381，礼包ID 2
 *   "hex:08A309..."  -> 直接使用原始请求体十六进制
 */
function parseTaskEntry(entry) {
  const e = String(entry).trim();
  if (/^hex:/i.test(e)) {
    return { label: "自定义请求体", hex: e.slice(4) };
  }
  const parts = e.split("@");
  const taskId = parts[0];
  const giftId = parts.length > 1 ? parseInt(parts[1], 10) : GIFT_ID;
  return { label: "任务 " + taskId, hex: bytesToHex(buildTaskBytes(taskId, giftId)) };
}

function bytesToString(bytes) {
  return bytes.map((b) => String.fromCharCode(b)).join("");
}

/*
 * 把十六进制字符串还原成 body 字符串。
 * 注意：Loon 若按 UTF-8 编码字符串 body，>127 的字节会被改写，batch 与部分任务可能失败，需实测。
 */
function hexToBodyString(hex) {
  const clean = String(hex).replace(/\s+/g, "");
  let out = "";
  for (let i = 0; i + 1 < clean.length; i += 2) {
    out += String.fromCharCode(parseInt(clean.substr(i, 2), 16));
  }
  return out;
}

/* ---------------- 1. 抓取登录头 ---------------- */
function captureHeaders() {
  const headers = $request.headers || {};
  // 跳过脚本自己发出的请求，避免抓取规则拦截本脚本的 httpClient 请求造成循环/卡住
  const isSelf = Object.keys(headers).some(
    (k) => k.toLowerCase() === "x-qiandao-script" && String(headers[k]) === "1"
  );
  if (isSelf) {
    return false;
  }
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
  // 大小写不敏感地检查登录令牌是否存在
  const hasToken = Object.keys(keep).some((k) => k.toLowerCase() === "t-access-token");
  if (!hasToken) {
    console.log("[心悦] 抓取到的请求头中没有 t-access-token，未保存。收到的头: " + Object.keys(headers).join(","));
    return false;
  }
  const saved = $persistentStore.write(JSON.stringify(keep), STORE_KEY);
  // 写入后立即读回校验，确认确实持久化
  const check = $persistentStore.read(STORE_KEY);
  console.log("[心悦] 凭证写入: " + saved + "，读回校验: " + (check ? "成功" : "失败"));
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

function postAndCheck(name, url, body, headers) {
  return new Promise((resolve) => {
    if (!url || !body) {
      resolve({ name: name, ok: false, msg: "缺少参数（url 或 body）" });
      return;
    }
    console.log("[心悦] 发起请求 " + name + " -> " + url + "，body长度=" + body.length);
    // 打上自定义头，让抓取规则识别并跳过本脚本自己的请求；不传 timeout 用默认值
    const h = Object.assign({}, headers, { "X-Qiandao-Script": "1" });
    $httpClient.post({ url: url, headers: h, body: body }, (error, response, data) => {
      if (error) {
        resolve({ name: name, ok: false, msg: "请求失败：" + error });
        return;
      }
      const status = response && response.status;
      const text = data || "";
      // 成功响应的 protobuf 中包含 UTF-8 文本 "领取成功"
      const ok = status === 200 && text.indexOf("领取成功") !== -1;
      resolve({
        name: name,
        ok: ok,
        msg: "HTTP " + status + "，" + (ok ? "领取成功" : "未识别的响应: " + text.slice(0, 60)),
      });
    });
  });
}

/* 连通性诊断：逐层验证 GET、域名、POST、二进制 body 四个环节 */
function diagGet(label, url) {
  return new Promise((resolve) => {
    $httpClient.get(url, (error, response) => {
      console.log("[心悦][诊断] GET " + label + " -> " + (error ? "错误: " + error : "HTTP " + (response && response.status)));
      resolve();
    });
  });
}

function diagPost(label, url, body, headers) {
  return new Promise((resolve) => {
    const h = Object.assign({}, headers, { "X-Qiandao-Script": "1" });
    $httpClient.post({ url: url, headers: h, body: body }, (error, response) => {
      console.log("[心悦][诊断] POST " + label + "(body长度=" + body.length + ") -> " +
        (error ? "错误: " + error : "HTTP " + (response && response.status)));
      resolve();
    });
  });
}

async function diagnose(headers) {
  await diagGet("baidu", "https://www.baidu.com");
  await diagGet("xinyue根路径", "https://bgw.xinyue.qq.com/");
  // 纯 ASCII 的 body，只验证 POST 通道本身是否通
  await diagPost("ASCII 测试体", ARG.receive || DEFAULTS.receive, "08", headers);
}

async function runCron() {
  const headers = loadHeaders();
  console.log("[心悦] $argument 类型=" + ARG._rawType + "，是否为空=" + ARG._empty +
    " | receive=" + ARG.receive + " | batch=" + ARG.batch + " | tasks=" + ARG.tasks +
    " | batchHex长度=" + ARG.batchHex.length + " | headers=" + (headers ? "有" : "无"));
  if (!headers) {
    console.log("[心悦] 领取失败：未找到登录凭证，请先打开一次心悦 App 的礼包页面");
    $done();
    return;
  }

  const results = [];

  // 先做连通性诊断
  await diagnose(headers);

  // 逐个领取任务
  const tasks = (ARG.tasks || "").split("|").filter((t) => t.trim().length > 0);
  for (const entry of tasks) {
    const spec = parseTaskEntry(entry);
    const body = hexToBodyString(spec.hex);
    results.push(await postAndCheck(spec.label, ARG.receive, body, headers));
  }

  // 最后执行一次 batch（一键领取）
  const batchBody = hexToBodyString(ARG.batchHex || "");
  results.push(await postAndCheck("一键领取(batch)", ARG.batch, batchBody, headers));

  console.log("[心悦] 每日领取结果:\n" + results.map((r) => r.name + " -> " + (r.ok ? "成功" : "失败") + "，" + r.msg).join("\n"));
  $done();
}

if (isRequest) {
  handleCapture();
} else {
  runCron();
}
