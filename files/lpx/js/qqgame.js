/*
 * QQ游戏中心 每日一键领取 (Loon 脚本)
 *
 * 接口：POST https://ssr.gamecenter.qq.com/kuikly-msr/v1/cgi-bin/welfare-new/exchange-all-gifts
 *   ?from_kuikly=true&g_tk=<g_tk>
 *
 * 工作方式：
 *  1. http-request 模式：打开 QQ 游戏中心礼包页时，抓取 Cookie（含 p_skey）并保存。
 *  2. cron 模式：从 Cookie 的 p_skey 现算 g_tk，调用一键领取，解析每个礼包的结果。
 *
 * 关键点：
 *  - g_tk 由 p_skey 哈希得出，会随登录态变化，不能写死，必须每次现算。
 *  - 返回是 JSON：顶层 code=0 表示请求成功；每个 gift 的 retCode 表示该礼包结果。
 *       retCode 0        -> 领取成功
 *       retCode 200015   -> 未完成任务
 *       retCode 12717011 -> 注册渠道不满足
 */

/* ---------------- 可配置项 ---------------- */
const DEFAULTS = {
  exchangeUrl: "https://ssr.gamecenter.qq.com/kuikly-msr/v1/cgi-bin/welfare-new/exchange-all-gifts",
  appid: "100738178",
  // 请求体（原样来自抓包；appid 若与上面不一致会被自动改写）
  body: '{"areaInfo":{"plat_id":0,"partition":1,"new_role_id":"","area":2,"role_id":"1"},"appid":"100738178","source":0,"miniGameInfo":{"roleName":"","zoneName":"","zoneId":"","hasZoneSvr":false,"roleId":""},"gameType":1}',
  referer: "[kuikly]QQGameCenterActionSheetWelfareTakeAllGiftDialog",
  // 两次请求之间的间隔（毫秒）
  interval: 800,
};

const STORE_KEY = "qqgame_headers";
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
  const pick = (name, aliases) => {
    const keys = (aliases || []).concat([name]);
    for (let i = 0; i < keys.length; i++) {
      const v = parsed[keys[i]];
      if (v !== undefined && v !== null && String(v).length > 0) return String(v);
    }
    return DEFAULTS[name];
  };
  const appid = pick("appid", ["qq-appid"]);
  let body = pick("body", ["qq-body"]);
  // 若配置了不同 appid，同步替换请求体里的 appid
  try {
    const obj = JSON.parse(body);
    if (appid && obj.appid !== appid) {
      obj.appid = appid;
      body = JSON.stringify(obj);
    }
  } catch (e) {
    // 保留原样，发送时再兜底
  }
  return {
    exchangeUrl: pick("exchangeUrl", ["qq-exchange-url"]),
    appid: appid,
    body: body,
    referer: pick("referer", ["qq-referer"]),
    interval: parseInt(pick("interval", ["qq-interval"]), 10) || DEFAULTS.interval,
    _argType: typeof raw,
    _argKeys: Object.keys(parsed).join(",") || "(空)",
  };
}

/* ---------------- QQ g_tk 计算 ---------------- */
/**
 * QQ 的 g_tk 算法：对 skey 做 5381 哈希。
 *   hash = 5381
 *   hash += (hash << 5) + charCode   (每字符)
 *   g_tk = hash & 0x7FFFFFFF
 */
function calcGtk(skey) {
  if (!skey) return 0;
  let hash = 5381;
  for (let i = 0; i < skey.length; i++) {
    hash += (hash << 5) + skey.charCodeAt(i);
    // 防止溢出丢失精度：每步都收敛到 31 位
    hash = hash & 0x7fffffff;
  }
  return hash & 0x7fffffff;
}

/* ---------------- Cookie 工具 ---------------- */
function parseCookie(str) {
  const out = {};
  if (!str) return out;
  String(str)
    .split(";")
    .forEach((pair) => {
      const i = pair.indexOf("=");
      if (i > 0) {
        const k = pair.slice(0, i).trim();
        const v = pair.slice(i + 1).trim();
        if (k) out[k] = v;
      }
    });
  return out;
}

/* ---------------- 1. 抓取 Cookie ---------------- */
function captureCookie() {
  const headers = $request.headers || {};
  // 跳过脚本自己发出的请求
  const isSelf = Object.keys(headers).some((k) => k.toLowerCase() === "x-qiandao-script");
  if (isSelf) return false;

  let cookie = "";
  let ua = "";
  Object.keys(headers).forEach((k) => {
    const lk = k.toLowerCase();
    if (lk === "cookie") cookie = headers[k];
    if (lk === "user-agent") ua = headers[k];
  });

  const jar = parseCookie(cookie);
  // 必须有 p_skey 才能算 g_tk
  if (!jar.p_skey) {
    console.log("[QQ] 未发现 p_skey，跳过保存。Cookie 键: " + Object.keys(jar).join(","));
    return false;
  }
  if (!jar.p_uin && !jar.uin) {
    console.log("[QQ] 未发现 p_uin/uin，跳过保存");
    return false;
  }

  const keep = { cookie: cookie, ua: ua };
  $persistentStore.write(JSON.stringify(keep), STORE_KEY);
  const check = $persistentStore.read(STORE_KEY);
  console.log("[QQ] Cookie 已保存，读回校验: " + (check ? "成功" : "失败") +
    " | uin=" + (jar.uin || jar.p_uin) + " | g_tk=" + calcGtk(jar.p_skey));
  return !!check;
}

function handleCapture() {
  captureCookie();
  $done({});
}

/* ---------------- 2. 定时领取 ---------------- */
function loadCred() {
  const raw = $persistentStore.read(STORE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

/** 解析返回 JSON，汇总每个礼包的结果与获得的道具 */
function summarize(json) {
  const lines = [];
  const gotList = [];
  let okCount = 0;
  let failCount = 0;

  if (!json || typeof json !== "object") {
    return { ok: false, msg: "响应不是 JSON", lines: [], gotList: [], okCount: 0, failCount: 0 };
  }
  if (json.code !== 0 && json.code !== undefined) {
    return {
      ok: false,
      msg: "接口返回 code=" + json.code + " " + (json.message || json.msg || ""),
      lines: [],
      gotList: [],
      okCount: 0,
      failCount: 0,
    };
  }

  const gifts = (json.data && json.data.gifts) || [];
  gifts.forEach((item) => {
    const gift = item.gift || {};
    const name = gift.name || "(未命名)";
    const retCode = item.retCode;
    const prompt = item.promptMsg || "";

    // 提取该礼包包含的道具：
    //  - 普通礼包：props 就是该礼包内容
    //  - 周签到礼包（isSign）：只有当 retCode===0（本次真的领到）时，
    //    才把 weekItems 里 got 的项视为本次获得；否则只提示进度
    let props = [];

    if (gift.isSign && Array.isArray(gift.weekItems) && gift.weekItems.length) {
      if (retCode === 0) {
        // 本次签到成功，got 的项即为累计已签到的奖励
        props = gift.weekItems
          .filter((w) => w.got)
          .map((w) => w.name + "（第" + w.signDate + "天）");
      } else {
        // 没领成功，只显示进度，不当作获得
        const gotCount = gift.weekItems.filter((w) => w.got).length;
        const next = (gift.nextSignProps || []).map((p) => p.name);
        props = ["本周进度 " + gotCount + "/" + gift.weekItems.length +
          (next.length ? "，下次可领 " + next.join("、") : "")];
      }
    } else {
      props = (gift.props || []).map((p) => p.name).filter(Boolean);
    }

    const propText = props.length ? props.join("、") : "";

    if (retCode === 0) {
      okCount++;
      gotList.push({ name: name, items: props });
      lines.push("  ✅ " + name + (propText ? " -> " + propText : ""));
    } else {
      failCount++;
      lines.push("  ❌ " + name + " -> " + (prompt || "retCode " + retCode) +
        (propText ? "（可领奖励: " + propText + "）" : ""));
    }
  });

  return {
    ok: okCount > 0,
    msg: "成功 " + okCount + " 项，未达成 " + failCount + " 项",
    lines: lines,
    gotList: gotList,
    okCount: okCount,
    failCount: failCount,
  };
}

/**
 * 把响应 data 统一转成字符串。
 * Loon 两种情况都可能出现：response.data 为 Uint8Array（二进制）或 String。
 * 字符串时直接使用（Loon 已按 UTF-8 解码好）；只有 Uint8Array 才需要手动解码。
 */
function toText(data) {
  if (!data) return "";
  if (typeof data === "string") return data;
  if (data.length === undefined) return String(data);

  const bytes = [];
  for (let i = 0; i < data.length; i++) bytes.push(data[i] & 0xff);
  let s = "";
  for (let i = 0; i < bytes.length; ) {
    const b = bytes[i];
    try {
      if (b < 0x80) {
        s += String.fromCharCode(b);
        i += 1;
      } else if (b >= 0xc0 && b < 0xe0 && i + 1 < bytes.length) {
        s += String.fromCharCode(((b & 0x1f) << 6) | (bytes[i + 1] & 0x3f));
        i += 2;
      } else if (b >= 0xe0 && b < 0xf0 && i + 2 < bytes.length) {
        s += String.fromCharCode(
          ((b & 0x0f) << 12) | ((bytes[i + 1] & 0x3f) << 6) | (bytes[i + 2] & 0x3f)
        );
        i += 3;
      } else if (b >= 0xf0 && i + 3 < bytes.length) {
        const cp =
          ((b & 0x07) << 18) |
          ((bytes[i + 1] & 0x3f) << 12) |
          ((bytes[i + 2] & 0x3f) << 6) |
          (bytes[i + 3] & 0x3f);
        if (cp > 0x10ffff || (cp >= 0xd800 && cp <= 0xdfff)) {
          s += "\ufffd";
        } else {
          try {
            s += String.fromCodePoint(cp);
          } catch (e) {
            s += "\ufffd";
          }
        }
        i += 4;
      } else {
        i += 1;
      }
    } catch (e) {
      i += 1;
    }
  }
  return s;
}

function doExchange(cred, gtk) {
  return new Promise((resolve) => {
    const url = C.exchangeUrl + "?from_kuikly=true&g_tk=" + gtk;
    const headers = {
      Host: "ssr.gamecenter.qq.com",
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Origin": "https://ssr.gamecenter.qq.com",
      "Cookie": cred.cookie,
      "User-Agent": cred.ua || "Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 QQ/9.2.95",
      "Referer": C.referer,
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "X-Qiandao-Script": "1",
    };
    $httpClient.post({ url: url, headers: headers, body: C.body }, (error, response, data) => {
      if (error) {
        resolve({ error: String(error) });
        return;
      }
      const status = response && response.status;
      const text = toText(data);
      let json = null;
      try {
        json = JSON.parse(text);
      } catch (e) {
        json = null;
      }
      resolve({ status: status, json: json, raw: json ? "" : text.slice(0, 160) });
    });
  });
}

async function runCron() {
  const cred = loadCred();
  console.log("[QQ] 启动: appid=" + C.appid + " | 凭证=" + (cred ? "有" : "无") +
    " | 参数类型=" + C._argType + " 键=[" + C._argKeys + "]");
  if (!cred) {
    console.log("[QQ] 未找到 Cookie，请先打开一次 QQ 游戏中心的礼包页面");
    $done();
    return;
  }

  const jar = parseCookie(cred.cookie);
  const skey = jar.p_skey;
  if (!skey) {
    console.log("[QQ] 已保存的 Cookie 里没有 p_skey，请重新在 App 打开礼包页抓取");
    $done();
    return;
  }
  const gtk = calcGtk(skey);
  console.log("[QQ] 计算得到 g_tk=" + gtk + "，开始一键领取");

  const r = await doExchange(cred, gtk);
  if (r.error) {
    console.log("[QQ] 请求失败: " + r.error);
    $done();
    return;
  }
  console.log("[QQ] HTTP " + r.status);
  if (!r.json) {
    console.log("[QQ] 响应非 JSON: " + r.raw);
    $done();
    return;
  }

  const s = summarize(r.json);
  console.log("[QQ] " + s.msg);
  if (s.lines.length) console.log(s.lines.join("\n"));

  // 汇总本次实际获得的道具
  if (s.gotList && s.gotList.length) {
    console.log("[QQ] 本次领取成功明细:");
    s.gotList.forEach((g) => {
      console.log("  " + g.name + "：" + (g.items && g.items.length ? g.items.join("、") : "（无道具明细）"));
    });
  } else {
    console.log("[QQ] 本次没有新领取成功的礼包（均已领过或条件未达成）");
  }
  $done();
}

if (isRequest) {
  handleCapture();
} else {
  runCron();
}
