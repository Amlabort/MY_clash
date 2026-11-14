// 移除 Spotify Home feed 里的 brand-ad section


function readVarint(u8, o, end) {
  let v = 0, shift = 0;
  for (let n = 0; n < 10; n++) {
    if (o >= end) return null;
    const b = u8[o++];
    v |= (b & 0x7f) << shift;
    if (!(b & 0x80)) return { value: v >>> 0, off: o };
    shift += 7;
  }
  return null;
}

// 段内是否含 ASCII 子串（大小写不敏感），和 Feeds.m 的 contains() 一样
function hasAscii(u8, from, to, needle) {
  outer: for (let i = from; i + needle.length <= to; i++) {
    for (let k = 0; k < needle.length; k++) {
      let c = u8[i + k];
      if (c >= 0x41 && c <= 0x5a) c += 0x20;
      if (c !== needle.charCodeAt(k)) continue outer;
    }
    return true;
  }
  return false;
}

// 遍历一条 message，返回字段列表 {field, wire, start, end, payload}
function collectFields(u8, start, end) {
  const fields = [];
  let o = start;
  while (o < end) {
    const tagStart = o;
    const t = readVarint(u8, o, end);
    if (!t) return null;
    o = t.off;
    const field = t.value >>> 3, wire = t.value & 7;
    const f = { field, wire, start: tagStart, end: o, payload: null };
    if (wire === 0) {
      const v = readVarint(u8, o, end);
      if (!v) return null;
      o = v.off;
    } else if (wire === 1) {
      o += 8;
    } else if (wire === 2) {
      const l = readVarint(u8, o, end);
      if (!l || l.off + l.value > end) return null;
      f.payload = u8.subarray(l.off, l.off + l.value);
      o = l.off + l.value;
    } else if (wire === 5) {
      o += 4;
    } else {
      return null; // wire 3/4/6/7：无法安全解析，整条放行
    }
    if (o > end) return null;
    f.end = o;
    fields.push(f);
  }
  return fields;
}

// 返回去掉广告后的字节；没有广告或解析失败返回 null（原样放行）
function stripHomeAds(u8) {
  const fields = collectFields(u8, 0, u8.length);
  if (!fields) return null;
  const kept = [];
  let dropped = 0;
  for (const f of fields) {
    if (f.field === 1 && f.wire === 2 && f.payload &&
        hasAscii(f.payload, 0, f.payload.length, 'brand-ad')) {
      dropped++;
      continue;
    }
    kept.push(u8.subarray(f.start, f.end));
  }
  if (!dropped) return null;
  console.log(`HomeNoAd: 移除 ${dropped} 个 brand-ad section`);
  const out = new Uint8Array(kept.reduce((n, s) => n + s.length, 0));
  let p = 0;
  for (const s of kept) { out.set(s, p); p += s.length; }
  return out;
}

// ---- 输入/输出适配：$response.body 可能是 base64 字符串或原始字节 ----
function bodyToBytes(body) {
  if (typeof body !== 'string') return { bytes: new Uint8Array(body), wasBase64: false };
  if (/^[A-Za-z0-9+/]*={0,2}$/.test(body) && body.length % 4 === 0) {
    try {
      const bin = atob(body);
      const u8 = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
      return { bytes: u8, wasBase64: true };
    } catch (e) { /* 当作原始字节处理 */ }
  }
  const u8 = new Uint8Array(body.length);
  for (let i = 0; i < body.length; i++) u8[i] = body.charCodeAt(i) & 0xff;
  return { bytes: u8, wasBase64: false };
}

function bytesToBody(bytes, wasBase64) {
  let s = '';
  for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
  return wasBase64 ? btoa(s) : s;
}

// ---- 入口 ----
const { bytes, wasBase64 } = bodyToBytes($response.body);
const stripped = stripHomeAds(bytes);
if (stripped) {
  $done({ body: bytesToBody(stripped, wasBase64) });
} else {
  console.log('HomeNoAd: 未检测到 brand-ad section');
  $done({});
}
