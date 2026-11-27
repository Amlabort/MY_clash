/*
 * 心悦俱乐部 每日自动领取 (Loon 脚本)
 *
 * 工作方式：
 *  1. http-request 模式：插件规则匹配到心悦礼包接口时，保存登录头（t-*、x-xy-* 等）到持久化存储。
 *  2. cron 模式：读取已保存的登录头，依次领取各任务礼包。
 *
 * 关键要点（均经真实接口实测确认）：
 *  - Loon 发送二进制 body 必须用 Uint8Array。用字符串会把 >127 的字节按 UTF-8 撑大
 *    （0xA3 -> C2 A3），服务器解析出错并返回"请绑定游戏角色"。见 Loon 官方 Script API 文档 1.2 节。
 *  - 服务端返回文案的含义：
 *      领取成功                     -> 本次领取成功
 *      很抱歉领取超出账号日限量      -> 任务有效，今天已领过（算成功）
 *      请绑定游戏角色               -> 请求体字节被破坏（或该游戏确实未绑定）
 *      页面失效了请刷新重试          -> 任务ID在当前活动中不存在/已过期
 *      网络繁忙请稍后再试(10003)     -> 任务ID非法
 */

/* ---------------- 可配置项 ---------------- */
const DEFAULTS = {
  receive: "https://bgw.xinyue.qq.com/xyapp.GiftSrv/ReceiveGift",
  // 一键领取（批量）接口
  batch: "https://bgw.xinyue.qq.com/apisix/xinyue/batch",
  // 礼包列表接口（用于动态获取当天的活动/游戏信息）
  getGames: "https://bgw.xinyue.qq.com/xyapp.GiftSrv/GetGamesGifts",
  // 查询礼包列表的请求体：0A 06 "signin" + 10 02 + 10 A3 09 + 10 D6 0B
  getGamesHex: "0A067369676E696E100210A30910D60B",
  // 游戏签到礼包接口（独立接口，每天限1次，需 t-gift-type: signin 头）
  receiveGames: "https://bgw.xinyue.qq.com/xyapp.GiftSrv/ReceiveGamesGift",
  // 签到礼包请求体：0A 06 "signin"（8 字节，纯 ASCII）
  receiveGamesHex: "0A067369676E696E",
  // 默认礼包/活动 ID（即“游戏 ID”）。
  // 1187=英雄杀、2=穿越火线、1=?, 5=? —— 这些是《心悦》平台对所有用户通用的游戏编号，
  // 不是某个人的账号数据，可以安全地作为默认值。
  // 若你的目标游戏不同，请改这里，或让脚本从 GetGamesGifts 列表自动发现（见 dynamicTasks）。
  giftId: 1187,
  // 固定任务ID列表（每个用户相同，属于活动配置，不含个人信息）
  //   写法 "381"       -> gid 用上面的 giftId
  //        "381@2"     -> 指定 gid
  //        "hex:08.."  -> 直接给请求体
  tasks: "381|4156|9733",
  // 动态获取：从 GetGamesGifts 拉取游戏信息，确认已绑定的 gid
  dynamicTasks: true,
  // 游戏(gid)列表。全部为平台通用的游戏编号，不含任何个人信息。
  // 1187=英雄杀、2=穿越火线。
  // 多人使用时不必改这里：脚本会优先用 GetGamesGifts 返回的 gid（各账号已绑定的游戏），
  // 这里的列表只作为“查不到时”的兜底。
  crossGiftIds: "1187|2",
  // 用 batch 打包领取（一次请求）；false 则逐个请求
  useBatch: true,
  // 是否领取游戏签到礼包（ReceiveGamesGift，每天限1次额度）
  enableGamesGift: true,
  // 请求间隔（毫秒）
  interval: 1200,
  // 单个任务重试次数（遇到"网络繁忙"时）
  retries: 2,
  // ===== 角色绑定 =====
  // 说明：BindRole 虽然调用成功（空响应），但实测会导致 App 侧出现
  //      “您的绑定信息已过期，请重新绑定角色”，因此默认关闭。
  //      如需启用，把 enableBind 改成 true，并自行承担风险。
  // 角色列表接口：返回最近绑定的角色
  roleList: "https://bgw.xinyue.qq.com/amp2.RoleSrv/GetRecentRoleList",
  // 绑定接口
  bindRole: "https://bgw.xinyue.qq.com/amp2.RoleSrv/BindRole",
  // 是否在领取前自动绑定角色（默认关闭）
  enableBind: false,
  // 角色列表请求体中的渠道标识
  bindChannel: "xinyue",
  // 请求体固定尾字段（实测值）
  bindSuffix: 1,
};

/*
 * 持久化存储键名。
 * Loon 的持久化存储按设备隔离，多人使用互不影响，因此用一个固定键即可。
 * 每个设备上只保存该设备登录账号的凭证。
 */
const STORE_KEY = "xinyue_creds_v2";
const STORE_KEY_LEGACY = "gift_headers"; // 兼容旧版本已保存的数据
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
  // 参数名映射：插件 [Argument] 里的键名 -> 内部字段名
  const aliases = {
    receive: ["xy-receive", "receive", "receiveUrl"],
    batch: ["xy-batch", "batch", "batchUrl"],
    getGames: ["xy-get-games", "getGames"],
    getGamesHex: ["xy-get-games-hex", "getGamesHex"],
    receiveGames: ["xy-receive-games", "receiveGames"],
    receiveGamesHex: ["xy-receive-games-hex", "receiveGamesHex"],
    giftId: ["xy-gift-id", "xy-giftId", "giftId"],
    tasks: ["xy-tasks", "tasks"],
    interval: ["xy-interval", "interval"],
    useBatch: ["xy-use-batch", "useBatch"],
    crossGiftIds: ["xy-cross-gift-ids", "crossGiftIds"],
    dynamicTasks: ["xy-dynamic", "dynamicTasks"],
    retries: ["xy-retries", "retries"],
    roleList: ["xy-role-list", "roleList"],
    bindRole: ["xy-bind-role", "bindRole"],
    enableBind: ["xy-enable-bind", "enableBind"],
    bindChannel: ["xy-bind-channel", "bindChannel"],
  };
  const pick = (name) => {
    for (const k of aliases[name] || [name]) {
      const v = parsed[k];
      if (v !== undefined && v !== null && String(v).length > 0) return String(v);
    }
    return DEFAULTS[name];
  };
  const gid = parseInt(pick("giftId"), 10);
  const itv = parseInt(pick("interval"), 10);
  const rt = parseInt(pick("retries"), 10);
  const ub = pick("useBatch");
  const dt = pick("dynamicTasks");
  return {
    receive: pick("receive"),
    batch: pick("batch"),
    getGames: pick("getGames"),
    getGamesHex: pick("getGamesHex"),
    receiveGames: pick("receiveGames"),
    receiveGamesHex: pick("receiveGamesHex"),
    giftId: isNaN(gid) ? DEFAULTS.giftId : gid,
    tasks: pick("tasks"),
    interval: isNaN(itv) ? DEFAULTS.interval : itv,
    retries: isNaN(rt) ? DEFAULTS.retries : rt,
    useBatch: ub === true || String(ub).toLowerCase() === "true",
    dynamicTasks: dt === true || String(dt).toLowerCase() === "true",
    crossGiftIds: pick("crossGiftIds"),
    // 签到礼包开关：C 里必须显式带上，否则 undefined 会导致整段被跳过
    enableGamesGift: DEFAULTS.enableGamesGift,
    // 角色绑定
    roleList: pick("roleList"),
    bindRole: pick("bindRole"),
    enableBind: DEFAULTS.enableBind,
    bindChannel: pick("bindChannel"),
    _argType: typeof raw,
    _argKeys: Object.keys(parsed).join(",") || "(空)",
  };
}

/* ---------------- 工具 ---------------- */
function bytesToHex(bytes) {
  let s = "";
  for (let i = 0; i < bytes.length; i++) {
    s += (bytes[i] < 16 ? "0" : "") + bytes[i].toString(16).toUpperCase();
  }
  return s;
}

function hexToBytes(hex) {
  const clean = String(hex).replace(/\s+/g, "");
  const out = [];
  for (let i = 0; i + 1 < clean.length; i += 2) {
    out.push(parseInt(clean.substr(i, 2), 16));
  }
  return out;
}

/**
 * 把响应体统一转成字节数组。
 * Loon 的 $httpClient 回调里 data 可能是字符串（每字符一字节）或 Uint8Array，
 * 两种情况都要能处理，否则中文判断会错。
 */
function toBytes(data) {
  if (!data) return [];
  if (typeof data === "string") {
    const out = [];
    for (let i = 0; i < data.length; i++) out.push(data.charCodeAt(i) & 0xff);
    return out;
  }
  if (data.length !== undefined) {
    const out = [];
    for (let i = 0; i < data.length; i++) out.push(data[i] & 0xff);
    return out;
  }
  return [];
}

/** 按 UTF-8 解码字节数组为字符串 */
function utf8Decode(bytes) {
  let out = "";
  for (let i = 0; i < bytes.length; ) {
    const b = bytes[i];
    try {
      if (b < 0x80) {
        out += String.fromCharCode(b);
        i += 1;
      } else if (b >= 0xc0 && b < 0xe0 && i + 1 < bytes.length) {
        out += String.fromCharCode(((b & 0x1f) << 6) | (bytes[i + 1] & 0x3f));
        i += 2;
      } else if (b >= 0xe0 && b < 0xf0 && i + 2 < bytes.length) {
        out += String.fromCharCode(
          ((b & 0x0f) << 12) | ((bytes[i + 1] & 0x3f) << 6) | (bytes[i + 2] & 0x3f)
        );
        i += 3;
      } else if (b >= 0xf0 && i + 3 < bytes.length) {
        const cp =
          ((b & 0x07) << 18) |
          ((bytes[i + 1] & 0x3f) << 12) |
          ((bytes[i + 2] & 0x3f) << 6) |
          (bytes[i + 3] & 0x3f);
        // protobuf 二进制里常出现非法码点，必须兜住，否则整脚本崩溃
        if (cp > 0x10ffff || (cp >= 0xd800 && cp <= 0xdfff)) {
          out += "\ufffd";
        } else if (typeof String.fromCodePoint === "function") {
          try {
            out += String.fromCodePoint(cp);
          } catch (e) {
            out += "\ufffd";
          }
        } else {
          out += "?";
        }
        i += 4;
      } else {
        i += 1;
      }
    } catch (e) {
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
  let v = n;
  while (v > 0x7f) {
    out.push((v & 0x7f) | 0x80);
    v = Math.floor(v / 128);
  }
  out.push(v);
  return out;
}

function asciiBytes(s) {
  const out = [];
  for (let i = 0; i < s.length; i++) out.push(s.charCodeAt(i));
  return out;
}

/**
 * 构造 ReceiveGift 请求体：
 *   field1 varint 礼包/活动ID
 *   field2 string "task"
 *   field3 string 任务ID
 * 例：ID=1187、任务381 -> 08 A3 09 12 04 task 1A 03 381（14 字节）
 */
function buildTaskBody(taskId, giftId) {
  const f1 = [0x08].concat(encodeVarint(giftId));
  const typeBytes = asciiBytes("task");
  const f2 = [0x12, typeBytes.length].concat(typeBytes);
  const idBytes = asciiBytes(taskId);
  const f3 = [0x1a, idBytes.length].concat(idBytes);
  return f1.concat(f2, f3);
}

/** 解析任务配置项，返回 { label, taskId, giftId, bytes } */
function parseTaskEntry(entry) {
  const e = String(entry).trim();
  if (/^hex:/i.test(e)) {
    return { label: "自定义请求体", taskId: null, giftId: null, bytes: hexToBytes(e.slice(4)) };
  }
  const parts = e.split("@");
  const taskId = parts[0];
  const giftId = parts.length > 1 ? parseInt(parts[1], 10) : C.giftId;
  const gid = isNaN(giftId) ? C.giftId : giftId;
  return {
    label: "任务 " + taskId + (parts.length > 1 ? "(ID" + gid + ")" : ""),
    taskId: taskId,
    giftId: gid,
    bytes: buildTaskBody(taskId, gid),
  };
}

/* ---------------- batch（一键领取）编码/解析 ---------------- */
function pbTag(field, wire) {
  return encodeVarint(field * 8 + wire);
}

function pbString(field, str) {
  const b = asciiBytes(str);
  return pbTag(field, 2).concat(encodeVarint(b.length), b);
}

function pbMessage(field, bytes) {
  return pbTag(field, 2).concat(encodeVarint(bytes.length), bytes);
}

/**
 * batch 子请求必需的 8 字节小端 double（field1, wire1）。
 * 抓包原始值为 1.1，编码为 9A 99 99 99 99 99 F1 3F。
 * 实测该字段不可省略（省掉会 upstream timeout），且值必须是 1.0~1.1 这一档。
 */
function batchDoubleBytes() {
  // 1.1 的 IEEE754 小端字节，与抓包逐字节一致
  return [0x9a, 0x99, 0x99, 0x99, 0x99, 0x99, 0xf1, 0x3f];
}

/**
 * 构造一个 ReceiveGift 子请求。
 * 结构：field1 double(1.0) + field2 "POST" + field3 路径 + field6 请求体
 */
function buildBatchSubRequest(path, requestBody, headerEntries) {
  let inner = [];
  // field1, wire1 (64bit double)
  inner = inner.concat(pbTag(1, 1), batchDoubleBytes());
  inner = inner.concat(pbString(2, "POST"));
  inner = inner.concat(pbString(3, path));
  (headerEntries || []).forEach(([k, v]) => {
    inner = inner.concat(pbMessage(4, pbString(1, k).concat(pbString(2, v))));
  });
  if (requestBody && requestBody.length) {
    inner = inner.concat(pbMessage(6, requestBody));
  }
  return inner;
}

/** 构造完整的 batch 请求体：顶层 field2 头 + 每个子请求作为一个 field4 */
function buildBatchBody(subs) {
  let body = pbMessage(2, pbString(1, "Content-Type").concat(pbString(2, "application/proto")));
  subs.forEach((s) => {
    body = body.concat(pbMessage(4, s));
  });
  return body;
}

/** 读取 varint，返回 [值, 新位置] */
function readVarint(bytes, pos) {
  let result = 0;
  let shift = 0;
  let b;
  do {
    if (pos >= bytes.length) return [result, pos];
    b = bytes[pos++];
    result += (b & 0x7f) * Math.pow(2, shift);
    shift += 7;
  } while (b & 0x80);
  return [result, pos];
}

/**
 * 解析 GetGamesGifts 响应，提取本账号当天有礼包的游戏。
 * 结构：顶层 f3 → f2（游戏列表）→ 每项 { f3=gid, f7=礼包信息{f1=活动ID, f4=礼包名} }
 * 注意：这里只用来确认“该账号有哪些 gid”，f1 里的数字是活动ID，不是领取任务ID。
 * 只有带 f7（活动信息）的才算真正参与活动的游戏；没有 f7 的通常是未绑定的游戏，跳过。
 * 返回 [{gid, taskId, name}]
 */
function parseGameList(bytes) {
  const result = [];
  try {
    const top = pbParse(bytes);
    const f3 = top.filter((x) => x.field === 3 && x.wire === 2)[0];
    if (!f3 || !f3.bytes) return result;
    const inner = pbParse(f3.bytes);
    const f2 = inner.filter((x) => x.field === 2 && x.wire === 2)[0];
    if (!f2 || !f2.bytes) return result;
    const games = pbParse(f2.bytes);
    games.forEach((g) => {
      if (g.wire !== 2 || !g.bytes) return;
      const gf = pbParse(g.bytes);
      const gidF = gf.filter((x) => x.field === 3 && x.wire === 0)[0];
      const gid = gidF ? gidF.value : 0;
      if (!gid) return;

      // 必须有活动信息(f7)才算有效游戏；否则多半是“未绑定/无活动”，跳过
      const f7 = gf.filter((x) => x.field === 7 && x.wire === 2)[0];
      if (!f7 || !f7.bytes) return;

      const f7f = pbParse(f7.bytes);
      const taskF = f7f.filter((x) => x.field === 1 && x.wire === 2)[0];
      const nameF = f7f.filter((x) => x.field === 4 && x.wire === 2)[0];
      const taskId = taskF && taskF.bytes ? asciiOf(taskF.bytes).replace(/[^0-9]/g, "") : "";
      const name = nameF && nameF.bytes ? utf8Decode(Array.prototype.slice.call(nameF.bytes)) : "";
      result.push({ gid: gid, taskId: taskId, name: name });
    });
  } catch (e) {
    console.log("[心悦] 解析游戏列表出错: " + e);
  }
  return result;
}

/** 字节数组按 ASCII 转字符串 */
function asciiOf(bytes) {
  let s = "";
  for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
  return s;
}

/** 极简 protobuf 解析：返回 [{field, wire, value?|bytes?}] */
function pbParse(bytes) {
  const fields = [];
  let pos = 0;
  while (pos < bytes.length) {
    let tagVal;
    const r = readVarint(bytes, pos);
    tagVal = r[0];
    pos = r[1];
    if (tagVal === 0) break;
    const wire = tagVal & 7;
    const field = Math.floor(tagVal / 8);
    if (wire === 0) {
      const v = readVarint(bytes, pos);
      fields.push({ field: field, wire: wire, value: v[0] });
      pos = v[1];
    } else if (wire === 2) {
      const l = readVarint(bytes, pos);
      const len = l[0];
      pos = l[1];
      fields.push({ field: field, wire: wire, bytes: bytes.slice(pos, pos + len) });
      pos += len;
    } else if (wire === 1) {
      fields.push({ field: field, wire: wire, bytes: bytes.slice(pos, pos + 8) });
      pos += 8;
    } else if (wire === 5) {
      fields.push({ field: field, wire: wire, bytes: bytes.slice(pos, pos + 4) });
      pos += 4;
    } else {
      break;
    }
  }
  return fields;
}

/**
 * 解析 batch 响应。
 * 顶层是可重复的 field2，每个是一段子响应：
 *   field1 = 状态码，field2 = "OK"，field3 = 响应头，field4 = 响应体
 * 返回 [{status, text}]
 */
function parseBatchResponse(bytes) {
  const results = [];
  const top = pbParse(bytes);
  top.forEach((f) => {
    if (f.field === 2 && f.wire === 2 && f.bytes && f.bytes.length > 0) {
      const sub = pbParse(f.bytes);
      const statusField = sub.filter((x) => x.field === 1 && x.wire === 0)[0];
      const bodyField = sub.filter((x) => x.field === 4 && x.wire === 2)[0];
      const status = statusField ? statusField.value : 0;
      const text = bodyField ? utf8Decode(bodyField.bytes) : "";
      // 只收录看起来像真实子响应的（有状态码或有文本）
      if (status || text) results.push({ status: status, text: text });
    }
  });
  return results;
}

/* ---------------- 1. 抓取登录头 ---------------- */
/** 从请求头里取某个头（名称大小写不敏感） */
function pickHeaderCI(headers, name) {
  const target = name.toLowerCase();
  const keys = Object.keys(headers || {});
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].toLowerCase() === target) return headers[keys[i]];
  }
  return "";
}

function captureHeaders() {
  const headers = $request.headers || {};
  // 跳过脚本自己发出的请求
  const isSelf = Object.keys(headers).some((k) => k.toLowerCase() === "x-qiandao-script");
  if (isSelf) return false;

  const keep = {};
  for (const k in headers) {
    const lk = k.toLowerCase();
    if (
      lk === "user-agent" ||
      lk === "content-type" ||
      lk === "accept" ||
      lk === "cookie" ||
      lk.indexOf("t-") === 0 ||
      lk.indexOf("x-xy") === 0
    ) {
      keep[k] = headers[k];
    }
  }
  const token = pickHeaderCI(keep, "t-access-token");
  if (!token) {
    console.log("[心悦] 未发现 t-access-token，跳过保存。头: " + Object.keys(headers).join(","));
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
/** 读取已保存的凭证（优先新键，兼容旧键） */
function loadHeaders() {
  return readStore(STORE_KEY) || readStore(STORE_KEY_LEGACY);
}

function readStore(key) {
  const raw = $persistentStore.read(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

/**
 * 从领取响应的 protobuf 里提取道具明细。
 * protobuf 里的道具形如：field2=道具名(UTF-8), field4=数量,
 * 例如 1A 66 { 08 01  10 07  50 03  62 5E { 0A 5C { 12 0F "宝具石碎片" 20 03 32 47 "图片URL" } } }
 * 返回 [{name, count}]
 */
function extractRewards(bytes) {
  const found = [];

  const walk = (buf, depth) => {
    if (depth > 6 || found.length > 20) return;
    let fields;
    try {
      fields = pbParse(buf);
    } catch (e) {
      return;
    }
    const nameF = fields.filter((x) => x.field === 2 && x.wire === 2)[0];
    const numF = fields.filter((x) => x.field === 4 && x.wire === 0)[0];
    if (nameF && nameF.bytes && numF) {
      const name = utf8Decode(Array.prototype.slice.call(nameF.bytes)).trim();
      // 只认像道具名的文本：含中文或字母数字，长度合理，且不是 URL
      if (
        name &&
        name.length <= 40 &&
        /[\u4e00-\u9fffA-Za-z]/.test(name) &&
        name.indexOf("http") !== 0 &&
        name.indexOf("://") === -1
      ) {
        found.push({ name: name, count: numF.value });
      }
    }
    fields.forEach((f) => {
      if (f.wire === 2 && f.bytes && f.bytes.length > 4) walk(f.bytes, depth + 1);
    });
  };

  try {
    walk(bytes, 0);
  } catch (e) {
    // 忽略解析失败，不影响主流程
  }
  return found;
}

/** 根据文案判断结果 */
function classify(status, text) {
  if (status !== 200) {
    return { type: "error", ok: false, msg: "HTTP " + status + "，" + (text.slice(0, 60) || "无内容") };
  }
  if (text.indexOf("领取成功") !== -1) return { type: "success", ok: true, msg: "领取成功" };
  if (text.indexOf("超出账号日限量") !== -1) return { type: "already", ok: true, msg: "今日已领过" };
  if (text.indexOf("已领取") !== -1 || text.indexOf("已参与") !== -1) {
    return { type: "already", ok: true, msg: "今日已领过" };
  }
  if (text.indexOf("请绑定游戏角色") !== -1) return { type: "unbound", ok: false, msg: "该游戏未绑定角色" };
  if (text.indexOf("绑定上限") !== -1) {
    return { type: "limit", ok: false, msg: "该账号的游戏绑定名额已满（需在App解绑不玩的游戏）" };
  }
  if (text.indexOf("页面失效") !== -1) return { type: "invalid", ok: false, msg: "任务ID失效/不存在" };
  if (text.indexOf("网络繁忙") !== -1) return { type: "busy", ok: false, msg: "网络繁忙或任务ID非法" };
  const readable = text.replace(/[^\u4e00-\u9fffA-Za-z0-9]/g, "");
  return { type: "unknown", ok: false, msg: readable ? readable.slice(0, 80) : "无法识别的响应" };
}

/**
 * 发送一次 POST。关键：body 用 Uint8Array，保证二进制字节原样发送。
 * extraHeaders：可选，额外请求头（如签到礼包需要的 t-gift-type）
 */
function postOnce(url, bytes, headers, extraHeaders) {
  return new Promise((resolve) => {
    const h = Object.assign({}, headers, extraHeaders || {}, { "X-Qiandao-Script": "1" });
    // Uint8Array 是 Loon 官方要求的二进制 body 类型
    const body = new Uint8Array(bytes);
    $httpClient.post({ url: url, headers: h, body: body }, (error, response, data) => {
      if (error) {
        resolve({ error: String(error) });
        return;
      }
      const respBytes = toBytes(data);
      resolve({
        status: response && response.status,
        text: utf8Decode(respBytes),
        bytes: respBytes,
        hex: bytesToHex(respBytes.slice(0, 40)),
      });
    });
  });
}

async function claimTask(name, bytes, headers) {
  console.log("[心悦] " + name + " 发送 " + bytes.length + " 字节: " + bytesToHex(bytes));
  let last = null;
  for (let attempt = 1; attempt <= Math.max(1, C.retries); attempt++) {
    const r = await postOnce(C.receive, bytes, headers);
    if (r.error) {
      last = { name: name, ok: false, msg: "请求失败: " + r.error, rewards: [] };
      break;
    }
    const c = classify(r.status, r.text);
    const rewards = c.type === "success" ? extractRewards(r.bytes || []) : [];
    last = { name: name, ok: c.ok, msg: c.msg, rewards: rewards };
    if (!c.ok && (c.type === "unbound" || c.type === "unknown") && r.hex) {
      last.msg += "（响应hex=" + r.hex + "）";
    }
    if (c.type !== "busy") break;
    if (attempt < Math.max(1, C.retries)) {
      console.log("[心悦] " + name + " 第 " + attempt + " 次繁忙，等待后重试");
      await sleep(C.interval * attempt);
    }
  }
  console.log("[心悦] " + name + " -> " + (last.ok ? "成功" : "失败") + "，" + last.msg +
    (last.rewards && last.rewards.length ? "，获得: " + formatRewards(last.rewards) : ""));
  return last;
}

/** 把道具列表格式化成 "名称x数量、名称x数量" */
function formatRewards(rewards) {
  if (!rewards || !rewards.length) return "";
  return rewards.map((x) => x.name + (x.count > 1 ? "×" + x.count : "")).join("、");
}

/** 单次 batch 最多打包多少个子请求（避免请求体过大被网关拒绝） */
const BATCH_CHUNK = 12;

/** 用 batch 分批领取全部任务 */
async function claimByBatch(specs, headers) {
  const results = [];
  for (let start = 0; start < specs.length; start += BATCH_CHUNK) {
    const chunk = specs.slice(start, start + BATCH_CHUNK);
    const subs = chunk.map((s) =>
      buildBatchSubRequest("/xyapp.GiftSrv/ReceiveGift", s.bytes, [])
    );
    const body = buildBatchBody(subs);
    console.log("[心悦] batch 第 " + (Math.floor(start / BATCH_CHUNK) + 1) + " 批: " +
      chunk.length + " 个子请求，" + body.length + " 字节");

    const r = await postOnce(C.batch, body, headers);
    if (r.error) {
      chunk.forEach((s) => results.push({ name: s.label, ok: false, msg: "batch 请求失败: " + r.error }));
    } else {
      const subResults = parseBatchResponse(r.bytes || []);
      console.log("[心悦] 本批返回 " + subResults.length + " 段子响应");
      chunk.forEach((s, i) => {
        const sub = subResults[i];
        if (!sub) {
          results.push({ name: s.label, ok: false, msg: "batch 未返回子响应", rewards: [] });
        } else {
          const c = classify(sub.status === 0 ? 200 : sub.status, sub.text);
          // 子响应里也可能带道具结构
          const rewards = c.type === "success" && sub.bytes ? extractRewards(sub.bytes) : [];
          results.push({ name: s.label, ok: c.ok, msg: c.msg, rewards: rewards });
          if (rewards.length) {
            console.log("[心悦] " + s.label + " -> 获得: " + formatRewards(rewards));
          }
        }
      });
    }
    if (start + BATCH_CHUNK < specs.length) await sleep(C.interval);
  }
  return results;
}

/**
 * 领取游戏签到礼包（ReceiveGamesGift）。
 * 特点：
 *  - 必须带请求头 t-gift-type: signin
 *  - 请求体固定 8 字节：0A 06 "signin"
 *  - 服务端限流每天 1 次（响应头 X-RateLimit-Limit: 1）
 *  - 成功时返回礼包列表（f3.f8 = 当天可领道具），失败常返回"网络繁忙10014"
 * 返回 {name, ok, msg, rewards}
 */
async function claimGamesGift(headers) {
  const name = "游戏签到礼包";
  const bytes = hexToBytes(C.receiveGamesHex || DEFAULTS.receiveGamesHex);
  console.log("[心悦] " + name + " 发送 " + bytes.length + " 字节: " + bytesToHex(bytes));
  const r = await postOnce(C.receiveGames, bytes, headers, { "t-gift-type": "signin" });
  if (r.error) {
    console.log("[心悦] " + name + " -> 失败，" + String(r.error));
    return { name: name, ok: false, msg: "请求失败: " + r.error, rewards: [] };
  }

  const c = classify(r.status, r.text);
  console.log("[心悦] " + name + " HTTP " + r.status + "，响应 " + (r.bytes ? r.bytes.length : 0) + " 字节");

  // 成功时从响应里提取当天礼包
  let rewards = [];
  if (c.ok) {
    rewards = parseGamesGiftItems(r.bytes || []);
  }
  const msg = c.ok
    ? "领取成功" + (rewards.length ? "，获得: " + formatRewards(rewards) : "")
    : c.msg;
  console.log("[心悦] " + name + " -> " + (c.ok ? "成功" : "失败") + "，" + msg);
  return { name: name, ok: c.ok, msg: msg, rewards: rewards };
}

/**
 * 解析 ReceiveGamesGift 响应里的当天礼包。
 * 结构：顶层 f3 → 内部若干 f8 项，每项 { f2: 道具名, f3: "第N天", f4: 数量 }
 */
function parseGamesGiftItems(bytes) {
  const items = [];
  try {
    const top = pbParse(bytes);
    const f3 = top.filter((x) => x.field === 3 && x.wire === 2)[0];
    if (!f3 || !f3.bytes) return items;
    const inner = pbParse(f3.bytes);
    inner.forEach((x) => {
      if (x.field !== 8 || x.wire !== 2 || !x.bytes) return;
      const p = pbParse(x.bytes);
      const nameF = p.filter((y) => y.field === 2 && y.wire === 2)[0];
      const cntF = p.filter((y) => y.field === 4 && y.wire === 0)[0];
      const dayF = p.filter((y) => y.field === 3 && y.wire === 2)[0];
      if (!nameF || !nameF.bytes) return;
      const nm = utf8Decode(Array.prototype.slice.call(nameF.bytes)).trim();
      if (!nm || nm.length > 40) return;
      items.push({
        name: nm,
        count: cntF ? cntF.value : 1,
        day: dayF ? utf8Decode(Array.prototype.slice.call(dayF.bytes)) : "",
      });
    });
  } catch (e) {
    // 忽略解析失败
  }
  return items;
}

/* ---------------- 角色绑定 ---------------- */

/**
 * 构造 GetRecentRoleList 请求体（实测 20 字节）：
 *   f2 = "ios"      设备类型
 *   f4 = "xinyue"   渠道标识
 *   f5 = gid        1187=英雄杀
 *   f7 = 1
 *   f8 = 1
 */
function buildRoleListBody(gid) {
  let b = [];
  b = b.concat(pbString(2, "ios"));
  b = b.concat(pbString(4, C.bindChannel || "xinyue"));
  b = b.concat(pbTag(5, 0), encodeVarint(gid));
  b = b.concat(pbTag(7, 0), encodeVarint(1));
  b = b.concat(pbTag(8, 0), encodeVarint(1));
  return b;
}

/**
 * 构造 BindRole 请求体（实测 136 字节）：
 *   f1 = "xinyue"   渠道
 *   f3 = "ios"      设备
 *   f4 = {角色对象}  从 GetRecentRoleList 响应的 f3 原样取
 *   f5 = gid
 *   f6 = 1
 */
function buildBindBody(gid, roleBytes) {
  let b = [];
  b = b.concat(pbString(1, C.bindChannel || "xinyue"));
  b = b.concat(pbString(3, "ios"));
  b = b.concat(pbMessage(4, roleBytes));
  b = b.concat(pbTag(5, 0), encodeVarint(gid));
  b = b.concat(pbTag(6, 0), encodeVarint(DEFAULTS.bindSuffix));
  return b;
}

/**
 * 自动绑定角色：先查最近角色，再用它绑定。
 * 成功时 BindRole 返回空响应体（实测）。
 * 返回 true 表示绑定请求已发出（无论服务端是否已绑定过）。
 */
async function autoBindRole(gid, headers) {
  const name = "角色绑定(gid=" + gid + ")";
  try {
    // 1. 查最近角色
    const listBody = buildRoleListBody(gid);
    console.log("[心悦] " + name + " 查询最近角色...");
    const lr = await postOnce(C.roleList, listBody, headers);
    if (lr.error) {
      console.log("[心悦] " + name + " 查询失败: " + lr.error);
      return { name: name, ok: false, msg: "查询角色失败: " + lr.error, rewards: [] };
    }

    // 解析响应，取第一个含角色对象的字段（实测是 f3）
    const top = pbParse(lr.bytes || []);
    let roleBytes = null;
    const cand = top.filter((x) => x.field === 3 && x.wire === 2)[0];
    if (cand && cand.bytes) {
      roleBytes = Array.prototype.slice.call(cand.bytes);
    }
      if (!roleBytes) {
        // 可能是错误码：300015=无绑定区服，400000=需要用户在App里授权
        const codeF = top.filter((x) => x.field === 1 && x.wire === 0)[0];
        const msgF = top.filter((x) => x.field === 2 && x.wire === 2)[0];
        const errMsg = msgF ? utf8Decode(Array.prototype.slice.call(msgF.bytes)) : "";
        const code = codeF ? codeF.value : 0;
        let friendly = errMsg;
        if (code === 400000) {
          friendly = "该游戏未绑定（需在App内授权/绑定一次）";
        } else if (code === 300015) {
          friendly = "无绑定区服（需在App内绑定角色）";
        }
        console.log("[心悦] " + name + " 跳过: code=" + code + " " + friendly);
        return { name: name, ok: false, msg: friendly, rewards: [] };
      }

    // 从角色对象里读出可读信息，便于日志确认
    const rf = pbParse(roleBytes);
    const pickStr = (n) => {
      const x = rf.filter((y) => y.field === n && y.wire === 2)[0];
      return x && x.bytes ? utf8Decode(Array.prototype.slice.call(x.bytes)) : "";
    };
    const zoneB64 = pickStr(6);
    const nameB64 = pickStr(8);
    let zone = zoneB64;
    let roleName = nameB64;
    try {
      zone = base64Decode(zoneB64) || zoneB64;
      roleName = base64Decode(nameB64) || nameB64;
    } catch (e) {
      // 保留原文
    }
    console.log("[心悦] " + name + " 找到角色: " + roleName + "（" + zone + "）");

    // 2. 绑定
    const bindBody = buildBindBody(gid, roleBytes);
    const br = await postOnce(C.bindRole, bindBody, headers);
    if (br.error) {
      console.log("[心悦] " + name + " 绑定请求失败: " + br.error);
      return { name: name, ok: false, msg: "绑定请求失败: " + br.error, rewards: [] };
    }
    // 实测成功时响应体为空
    const bodyLen = br.bytes ? br.bytes.length : 0;
    if (bodyLen === 0) {
      console.log("[心悦] " + name + " 绑定成功（空响应）");
      return { name: name, ok: true, msg: "已绑定 " + roleName, rewards: [] };
    }
    const c = classify(br.status, br.text);
    console.log("[心悦] " + name + " 绑定额外响应: " + c.msg);
    return { name: name, ok: true, msg: "绑定返回: " + c.msg + "（角色 " + roleName + "）", rewards: [] };
  } catch (e) {
    console.log("[心悦] " + name + " 异常: " + e);
    return { name: name, ok: false, msg: "绑定异常: " + e, rewards: [] };
  }
}

/** base64 解码（用于还原区服/角色名） */
function base64Decode(str) {
  if (!str) return "";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  const clean = String(str).replace(/[^A-Za-z0-9+/]/g, "");
  const bytes = [];
  for (let i = 0; i + 3 < clean.length; i += 4) {
    const n =
      (chars.indexOf(clean[i]) << 18) |
      (chars.indexOf(clean[i + 1]) << 12) |
      (chars.indexOf(clean[i + 2]) << 6) |
      chars.indexOf(clean[i + 3]);
    bytes.push((n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff);
  }
  const rest = clean.length % 4;
  if (rest === 2) {
    const n = (chars.indexOf(clean[clean.length - 2]) << 18) | (chars.indexOf(clean[clean.length - 1]) << 12);
    bytes.push((n >> 16) & 0xff);
  } else if (rest === 3) {
    const n =
      (chars.indexOf(clean[clean.length - 3]) << 18) |
      (chars.indexOf(clean[clean.length - 2]) << 12) |
      (chars.indexOf(clean[clean.length - 1]) << 6);
    bytes.push((n >> 16) & 0xff, (n >> 8) & 0xff);
  }
  return utf8Decode(bytes);
}

/** 先查礼包列表，动态获取当天各游戏的任务ID */
async function fetchDynamicTaskIds(headers) {
  const bytes = hexToBytes(C.getGamesHex || DEFAULTS.getGamesHex);
  console.log("[心悦] 查询礼包列表: " + (C.getGames || DEFAULTS.getGames));
  const r = await postOnce(C.getGames || DEFAULTS.getGames, bytes, headers);
  if (r.error || !r.bytes || !r.bytes.length) {
    console.log("[心悦] 查询失败: " + (r.error || "无响应"));
    return [];
  }
  const list = parseGameList(r.bytes);
  if (list.length) {
    console.log("[心悦] 动态获取到 " + list.length + " 个任务:\n" +
      list.map((x) => "  gid=" + x.gid + " task=" + x.taskId + " " + x.name).join("\n"));
  } else {
    console.log("[心悦] 未从列表解析出任务（响应 " + r.bytes.length + " 字节）");
  }
  return list;
}

/**
 * 组装任务清单：
 *  1) 固定任务（C.tasks）
 *  2) 列表动态任务（dynamicTasks）—— 带该账号自己的 gid
 *  3) 固定任务里未指定 gid 的，与传入的 gidList 交叉组合
 * gidList 由调用方根据该账号实际情况给出，避免试探其他账号才绑的游戏。
 * 去重后返回 [{label, bytes}]
 */
function buildSaturationSpecs(dynamicList, gidList) {
  const seen = {};
  const specs = [];

  const add = (label, bytes, key) => {
    if (seen[key]) return;
    seen[key] = true;
    specs.push({ label: label, bytes: bytes });
  };

  const gids = Array.isArray(gidList) && gidList.length
    ? gidList
    : (C.crossGiftIds || "")
        .split("|")
        .map((s) => parseInt(s, 10))
        .filter((n) => !isNaN(n) && n >= 0);

  // 收集所有任务ID：固定任务里没指定 gid 的 + 动态任务
  const plainIds = [];

  (C.tasks || "")
    .split("|")
    .filter((t) => t.trim().length > 0)
    .forEach((entry) => {
      const e = entry.trim();
      if (/^hex:/i.test(e)) {
        add("自定义请求体", hexToBytes(e.slice(4)), "hex:" + e);
        return;
      }
      const parts = e.split("@");
      if (parts.length > 1) {
        // 显式指定 gid，只按该组合领取
        const gid = parseInt(parts[1], 10);
        const tid = parts[0];
        add("任务" + tid + "@" + gid, buildTaskBody(tid, gid), tid + "@" + gid);
      } else {
        plainIds.push(e);
      }
    });

  // 动态任务：列表已明确给出 gid，只按该 gid 领取，不再参与交叉（避免已知无效的组合）
  if (C.dynamicTasks && dynamicList && dynamicList.length) {
    dynamicList.forEach((d) => {
      if (d.taskId) {
        add("任务" + d.taskId + "@" + d.gid + (d.name ? "(" + d.name + ")" : ""),
          buildTaskBody(d.taskId, d.gid), d.taskId + "@" + d.gid);
      }
    });
  }

  // 交叉组合：只针对固定任务里未指定 gid 的 ID
  plainIds.forEach((tid) => {
    gids.forEach((gid) => {
      add("任务" + tid + "@" + gid, buildTaskBody(tid, gid), tid + "@" + gid);
    });
  });

  return specs;
}

async function runCron() {
  const headers = loadHeaders();
  console.log(
    "[心悦] 启动: 固定任务=" + C.tasks + " | 动态=" + C.dynamicTasks +
    " | 交叉gid=" + C.crossGiftIds + " | 模式=" + (C.useBatch ? "batch" : "逐个") +
    " | 凭证=" + (headers ? "有" : "无")
  );
  if (!headers) {
    console.log("[心悦] 未找到登录凭证，请先打开一次心悦 App 的礼包页面");
    $done();
    return;
  }

  // ========== 1. 先查礼包列表：拿到本账号实际可领的游戏(gid)与任务 ==========
  let dynamicList = [];
  if (C.dynamicTasks) {
    dynamicList = await fetchDynamicTaskIds(headers);
    await sleep(C.interval);
  }

  // ========== 2. 确定要处理的 gid ==========
  // 优先级：列表里该账号真实存在的 gid > 配置的兜底列表
  // 这样多人使用时每个人只会处理自己账号绑定过的游戏，不会去试探别人的。
  const fallbackGids = (C.crossGiftIds || "")
    .split("|")
    .map((s) => parseInt(s, 10))
    .filter((n) => !isNaN(n) && n >= 0);
  const dynamicGids = [];
  dynamicList.forEach((x) => {
    if (x.gid && dynamicGids.indexOf(x.gid) === -1) dynamicGids.push(x.gid);
  });
  const gidList = dynamicGids.length > 0 ? dynamicGids : fallbackGids;
  console.log(
    "[心悦] 本账号游戏 gid: " + gidList.join(",") +
    (dynamicGids.length ? "（来自礼包列表）" : "（来自默认配置）")
  );

  // ========== 3. 自动绑定这些游戏的角色 ==========
  const preResults = [];
  if (C.enableBind) {
    for (let i = 0; i < gidList.length; i++) {
      preResults.push(await autoBindRole(gidList[i], headers));
      if (i < gidList.length - 1) await sleep(C.interval);
    }
    await sleep(C.interval);
  }

  // ========== 4. 组装任务并领取 ==========
  const specs = buildSaturationSpecs(dynamicList, gidList);
  console.log("[心悦] 本轮共 " + specs.length + " 个领取请求");

  if (specs.length === 0) {
    console.log("[心悦] 没有可领取的任务");
    $done();
    return;
  }

  // 3. 执行领取
  let results = [];
  if (C.useBatch) {
    results = await claimByBatch(specs, headers);
    const allFailed = results.every((r) => !r.ok && r.msg.indexOf("batch") !== -1);
    if (allFailed) {
      console.log("[心悦] batch 整体失败，回退为逐个领取");
      results = [];
      for (let i = 0; i < specs.length; i++) {
        results.push(await claimTask(specs[i].label, specs[i].bytes, headers));
        if (i < specs.length - 1) await sleep(C.interval);
      }
    }
  } else {
    for (let i = 0; i < specs.length; i++) {
      results.push(await claimTask(specs[i].label, specs[i].bytes, headers));
      if (i < specs.length - 1) await sleep(C.interval);
    }
  }

  // 3.5 游戏签到礼包（独立接口，每天限 1 次，必须带 t-gift-type: signin）
  if (C.enableGamesGift) {
    await sleep(C.interval);
    results.push(await claimGamesGift(headers));
  }

  // 4. 汇总（把绑定结果也并入统计）
  const all = preResults.concat(results);
  const success = all.filter((r) => r.ok && r.msg.indexOf("领取成功") !== -1);
  const already = all.filter((r) => r.ok && r.msg.indexOf("领取成功") === -1);
  const failed = all.filter((r) => !r.ok);

  if (preResults.length) {
    console.log("[心悦] 角色绑定结果:\n" + preResults.map((r) => "  " + r.name + " -> " + (r.ok ? "成功" : "失败") + "，" + r.msg).join("\n"));
  }

  console.log(
    "[心悦] 完成：共 " + all.length + " 项 | 新领到 " + success.length +
    " 项 | 已领过 " + already.length + " 项 | 失败 " + failed.length + " 项"
  );

  if (success.length) {
    console.log("[心悦] 本次领取明细:");
    success.forEach((r) => {
      const items = formatRewards(r.rewards);
      console.log("  " + r.name + "：" + (items || "成功（接口未返回道具明细）"));
    });
  } else {
    console.log("[心悦] 本次没有新领到的礼包（均已领过或条件未达成）");
  }

  // 汇总所有道具，便于一眼看清拿到了什么
  const allRewards = [];
  all.forEach((r) => {
    if (r.rewards && r.rewards.length) {
      r.rewards.forEach((x) => {
        const idx = allRewards.findIndex((y) => y.name === x.name);
        if (idx >= 0) allRewards[idx].count += x.count;
        else allRewards.push({ name: x.name, count: x.count });
      });
    }
  });
  if (allRewards.length) {
    console.log("[心悦] 道具合计: " + formatRewards(allRewards));
  }

  if (failed.length) {
    console.log("[心悦] 失败明细:\n" + failed.slice(0, 15).map((r) => "  " + r.name + "：" + r.msg).join("\n"));
  }
  $done();
}

if (isRequest) {
  handleCapture();
} else {
  runCron();
}
