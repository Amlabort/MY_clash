/* ============================================================
 * Spotify 账号属性改写 — nebula/v1/configuration/attributes (GET)
 *
 * 响应类型（与 app2smile 的 spotify-proto.js 同一个）：
 *   AccountAttributesResponse { map<string, AccountAttribute> accountAttributes = 1 }
 *   AccountAttribute { oneof value {
 *       bool   boolValue   = 2;
 *       int64  longValue   = 3;
 *       string stringValue = 4;
 *   } }
 *
 * 不依赖 protobufjs：直接按 wire format 读写，Spotify 改 schema 也不会崩。
 * ============================================================ */

const CFG = {
  expiryMonths: 12,        // product-expiry / subscription-enddate（app2smile 用 1 个月）
  debug: true,
  // 服务器会拿这些属性校验账号状态 / 递送给客户端反作弊信号，删掉更安全
  alsoDelete: [
    "payment-state", "last-premium-activation-date",
    "on-demand-trial", "on-demand-trial-in-progress",
    "at-signal", "feature-set-id-masked", "strider-key",
    "is-eligible-for-trial", "is-eligible-for-upsell", "upsell-state",
    "ad-session-persistence", "ad-formats-preroll-video",
  ],
};

const isQuanX = typeof $task !== "undefined";
const status  = $response.status || $response.statusCode || 0;
const method  = ($request.method || "").toUpperCase();
const url     = $request.url || "";
const raw     = isQuanX ? new Uint8Array($response.bodyBytes || []) : $response.body;

function log() { if (CFG.debug) console.log("[attrs] " + Array.prototype.join.call(arguments, " ")); }
function pass() { $done({}); }

if (status !== 200)            { log("skip status", status); pass(); }
else if (method !== "GET")     { log("skip method", method); pass(); }
else if (!raw || raw.length < 4) { log("skip empty body"); pass(); }
else {
  try {
    const bytes = raw[0] === 0x00 ? raw.subarray(5) : raw;   // 兼容 gRPC 帧
    const parsed = readAttributes(bytes);
    if (!parsed.rows.length) {
      log("not an attributes map, first=0x" + bytes[0].toString(16));
      pass();
    } else {
      const map = parsed.map;
      rewrite(map);
      const out = writeAttributes(parsed.rows, map);
      log(parsed.rows.length + " -> " + Object.keys(map).length + " 条属性, " +
          bytes.length + " -> " + out.length + " bytes");
      if (isQuanX) $done({ bodyBytes: out.buffer.slice(out.byteOffset, out.byteOffset + out.byteLength) });
      else $done({ body: out });
    }
  } catch (e) {
    log("error:", e);
    pass();                                   // 解析失败原样放行
  }
}

/* ================= 属性改写（照 app2smile 的表 + 你原来的几项） ================= */
function rewrite(map) {
  const d = new Date();
  d.setMonth(d.getMonth() + CFG.expiryMonths);
  const iso = d.toISOString().replace(/\.\d+Z$/, "Z");

  const S = function (k, v) { map[k] = { stringValue: v }; };
  const B = function (k, v) { map[k] = { boolValue: v }; };

  /* --- 账号身份 --- */
  S("type", "premium");
  S("name", "Spotify Premium");
  S("catalogue", "premium");
  S("financial-product", "pr:premium,tc:0");
  S("player-license", "premium");
  S("player-license-v2", "premium");
  S("product-expiry", iso);
  S("subscription-enddate", iso);
  S("payments-initial-campaign", "prepaid");
  B("unrestricted", true);
  B("on-demand", true);
  B("can_use_superbird", true);
  B("is-eligible-premium-unboxing", true);
  B("your-library-tags", true);
  B("libspotify", true);
  B("mobile", true);
  B("high-bitrate", true);
  B("has-audiobooks-subscription", true);
  B("is-euterpe", true);
  B("is-thalia", true);
  B("is-pigeon", true);

  /* --- 广告 --- */
  B("ads", false);
  B("allow-advertising-id-transmission", false);
  B("restrict-advertising-id-transmission", true);
  S("ab-ad-player-targeting", "0");

  /* --- 播放能力 --- */
  S("loudness-levels", "1:-5.0,0.0,3.0:-2.0");
  S("streaming-rules", "");
  S("mixing-tools", "EDIT");
  S("audio-quality", "1");
  S("shuffle-algorithm", "RANDOM");
  B("pick-and-shuffle", false);
  B("shuffle", false);
  S("smart-shuffle", "AVAILABLE");
  S("jam-social-session", "EXPANDED");
  B("social-session", true);
  B("social-session-free-tier", false);
  S("enable-crossfade-product-state", "1");
  S("enable-gapless-product-state", "1");

  /* --- 离线 --- */
  B("offline", true);
  B("lyrics-offline", true);
  S("offline-backup", "UNRESTRICTED");

  /* --- 关掉会员广告 tab --- */
  S("nft-disabled", "1");

  /* --- 关键：让 customize 的改写生效（有些账号没有这两个属性） --- */
  B("com.spotify.madprops.use.ucs.product.state", true);
  B("com.spotify.madprops.delivered.by.ucs", true);

  /* --- 删除会触发服务端校验 / 反作弊的键 --- */
  for (const k of CFG.alsoDelete) delete map[k];
  for (const k of Object.keys(map)) {
    if (k.indexOf("is-premium-eligible") === 0) delete map[k];
  }
}

/* ================= 最小 wire-format 读写 ================= */
function pbVarint(b, i) {
  let r = 0, s = 0, x;
  do { x = b[i++]; r += (x & 0x7f) * Math.pow(2, s); s += 7; } while (x & 0x80);
  return [r, i];
}
function pbFields(b) {
  const out = []; let i = 0;
  while (i < b.length) {
    let k, v; [k, i] = pbVarint(b, i);
    const n = Math.floor(k / 8), w = k & 7;
    if (w === 0)      { [v, i] = pbVarint(b, i); }
    else if (w === 2) { let l; [l, i] = pbVarint(b, i); v = b.subarray(i, i + l); i += l; }
    else if (w === 5) { v = b.subarray(i, i + 4); i += 4; }
    else if (w === 1) { v = b.subarray(i, i + 8); i += 8; }
    else throw new Error("wire " + w + " at " + i);
    out.push({ n: n, w: w, v: v });
  }
  return out;
}
function pbVarintBytes(v) {
  const o = [];
  while (v >= 0x80) { o.push((v % 128) | 0x80); v = Math.floor(v / 128); }
  o.push(v);
  return Uint8Array.from(o);
}
function pbEncode(fields) {
  const cs = [];
  for (const f of fields) {
    cs.push(pbVarintBytes(f.n * 8 + f.w));
    if (f.w === 0) cs.push(pbVarintBytes(f.v));
    else cs.push(pbVarintBytes(f.v.length), f.v);
  }
  let n = 0; for (const c of cs) n += c.length;
  const out = new Uint8Array(n); let o = 0;
  for (const c of cs) { out.set(c, o); o += c.length; }
  return out;
}
function utf8Encode(s) {
  const out = [];
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    if (c < 0x80) out.push(c);
    else if (c < 0x800) out.push(0xc0 | (c >> 6), 0x80 | (c & 63));
    else out.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 63), 0x80 | (c & 63));
  }
  return Uint8Array.from(out);
}
function utf8Decode(b) {
  let s = "";
  for (let i = 0; i < b.length;) {
    const c = b[i++];
    if (c < 0x80) s += String.fromCharCode(c);
    else if (c < 0xe0) s += String.fromCharCode(((c & 31) << 6) | (b[i++] & 63));
    else if (c < 0xf0) s += String.fromCharCode(((c & 15) << 12) | ((b[i++] & 63) << 6) | (b[i++] & 63));
    else { const cp = ((c & 7) << 18) | ((b[i++] & 63) << 12) | ((b[i++] & 63) << 6) | (b[i++] & 63); s += String.fromCodePoint(cp); }
  }
  return s;
}

/* ================= 属性表 <-> 对象 ================= */
function readAttributes(bytes) {
  const rows = [], map = {};
  for (const f of pbFields(bytes)) {
    if (f.n !== 1 || f.w !== 2) continue;
    const e = pbFields(f.v);
    let key = null, attr = null;
    for (const x of e) {
      if (x.n === 1 && x.w === 2) key = utf8Decode(x.v);
      if (x.n === 2 && x.w === 2) attr = x.v;
    }
    if (!key) continue;
    const row = { key: key, entry: e, kind: null, value: null };
    if (attr) for (const a of pbFields(attr)) {
      if (a.n === 2) { row.kind = "bool"; row.value = a.v !== 0; }
      else if (a.n === 3) { row.kind = "long"; row.value = a.v; }
      else if (a.n === 4) { row.kind = "str"; row.value = utf8Decode(a.v); }
    }
    rows.push(row);
    if (row.kind === "bool")      map[key] = { boolValue: row.value };
    else if (row.kind === "long") map[key] = { longValue: row.value };
    else if (row.kind === "str")  map[key] = { stringValue: row.value };
    else                          map[key] = {};
  }
  return { rows: rows, map: map };
}

function entryFor(oldEntry, key, val) {
  const fields = oldEntry ? oldEntry.filter(function (x) { return x.n !== 2; }) : [];
  if (!fields.some(function (x) { return x.n === 1 && x.w === 2; }))
    fields.unshift({ n: 1, w: 2, v: utf8Encode(key) });

  const attr = [];
  if (oldEntry) {                       // 保留 2~4 以外的未知子字段
    const old = oldEntry.filter(function (x) { return x.n === 2 && x.w === 2; })[0];
    if (old) for (const x of pbFields(old.v)) if (x.n < 2 || x.n > 4) attr.push(x);
  }
  if (val.boolValue !== undefined)        attr.push({ n: 2, w: 0, v: val.boolValue ? 1 : 0 });
  else if (val.longValue !== undefined)   attr.push({ n: 3, w: 0, v: val.longValue || 0 });
  else if (val.stringValue !== undefined) attr.push({ n: 4, w: 2, v: utf8Encode(val.stringValue || "") });

  fields.push({ n: 2, w: 2, v: pbEncode(attr) });
  return fields;
}

function writeAttributes(rows, map) {
  const out = [], seen = {};
  for (const r of rows) {
    if (!(r.key in map)) continue;              // 被删掉的
    seen[r.key] = 1;
    out.push({ n: 1, w: 2, v: pbEncode(entryFor(r.entry, r.key, map[r.key])) });
  }
  for (const k in map) {                        // 新加的
    if (seen[k]) continue;
    out.push({ n: 1, w: 2, v: pbEncode(entryFor(null, k, map[k])) });
  }
  return pbEncode(out);
}
