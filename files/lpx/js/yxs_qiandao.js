/*
 * 心悦俱乐部 每日自动领取 (Loon 脚本)
 *
 * 本脚本不包含任何具体 URL 或 MITM 域名：
 *  - 接口地址、任务 ID、batch 请求体等全部通过插件的 argument 参数传入（$argument）。
 *  - MITM 范围在 .plugin 文件中声明。
 *
 * argument 格式：key=value 用 & 连接，多个任务用 | 分隔，batch 请求体为无空格的十六进制。
 *
 * 工作方式：
 *  1. http-request 模式：插件规则匹配到心悦请求时，保存登录头（t-*、x-xy-* 等）。
 *  2. cron 模式：依次调用 receive 接口领取各任务，最后调用 batch 一键领取。
 */

const ARG = parseArgument(typeof $argument !== "undefined" ? $argument : "");
const STORE_KEY = "gift_headers";
const GIFT_ID = 1187;
const GIFT_TYPE = "task";

const isRequest = typeof $request !== "undefined";

function parseArgument(s) {
  const out = {};
  if (!s) return out;
  s.split("&").forEach((pair) => {
    const i = pair.indexOf("=");
    if (i > 0) out[pair.slice(0, i)] = pair.slice(i + 1);
  });
  return out;
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
function buildTaskBytes(taskId) {
  const f1 = [0x08].concat(encodeVarint(GIFT_ID));
  const typeBytes = asciiBytes(GIFT_TYPE);
  const f2 = [0x12, typeBytes.length].concat(typeBytes);
  const idBytes = asciiBytes(taskId);
  const f3 = [0x1a, idBytes.length].concat(idBytes);
  return f1.concat(f2, f3);
}

function bytesToString(bytes) {
  return bytes.map((b) => String.fromCharCode(b)).join("");
}

/*
 * 注意：Loon 若按 UTF-8 编码字符串 body，>127 的字节会被改写，batch 与部分任务可能失败，需实测。
 */
function hexToBodyString(hex) {
  const clean = hex.replace(/\s+/g, "");
  let out = "";
  for (let i = 0; i + 1 < clean.length; i += 2) {
    out += String.fromCharCode(parseInt(clean.substr(i, 2), 16));
  }
  return out;
}

/* ---------------- 1. 抓取登录头 ---------------- */
function captureHeaders() {
  const headers = $request.headers || {};
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
    $httpClient.post({ url: url, headers: headers, body: body, timeout: 15 }, (error, response, data) => {
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

async function runCron() {
  const headers = loadHeaders();
  console.log("[心悦] argument keys: " + Object.keys(ARG).join(",") + " | receive=" + (ARG.receive ? "有" : "无") +
    " | batch=" + (ARG.batch ? "有" : "无") + " | tasks=" + (ARG.tasks || "无") +
    " | batchHex长度=" + (ARG.batchHex ? ARG.batchHex.length : 0) + " | headers=" + (headers ? "有" : "无"));
  if (!headers) {
    console.log("[心悦] 领取失败：未找到登录凭证，请先打开一次心悦 App 的礼包页面");
    $done();
    return;
  }

  const results = [];

  // 逐个领取任务
  const tasks = (ARG.tasks || "").split("|").filter((t) => t.length > 0);
  for (const taskId of tasks) {
    const body = bytesToString(buildTaskBytes(taskId));
    results.push(await postAndCheck("任务 " + taskId, ARG.receive, body, headers));
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
