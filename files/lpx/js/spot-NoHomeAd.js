/*
 * Spotify HomeNoAd
 * Loon 专用 · 最小修改版
 * 移除 Spotify Home feed 里的 brand-ad section
 *
 * 已测试环境：Loon / Spotify 9.2.0.2054
 *
 * 只删除 brand-ad section
 * 保留其他首页推荐内容
 *
 * requires-body=true
 * binary-body-mode=true
 */

// 读取 Protobuf varint
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

// ASCII 子串匹配（忽略大小写）
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

// 遍历 Protobuf message 字段
function collectFields(u8, start, end) {
  const fields = [];
  let o = start;

  while (o < end) {
    const tagStart = o;
    const t = readVarint(u8, o, end);
    if (!t) return null;

    o = t.off;
    const field = t.value >>> 3, wire = t.value & 7;
    if (field === 0) return null;

    const f = {
      field, wire,
      start: tagStart,
      end: o,
      payload: null
    };

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
      return null;
    }

    if (o > end) return null;
    f.end = o;
    fields.push(f);
  }

  return fields;
}

// 新增：编码 Protobuf varint
function writeVarint(v) {
  const a = [];
  v >>>= 0;
  while (v >= 128) {
    a.push((v & 127) | 128);
    v >>>= 7;
  }
  a.push(v);
  return Uint8Array.from(a);
}

// 新增：拼接二进制数组
function concat(parts) {
  const out = new Uint8Array(
    parts.reduce((n, p) => n + p.length, 0)
  );
  let o = 0;
  for (const p of parts) {
    out.set(p, o);
    o += p.length;
  }
  return out;
}

// 精确删除 brand-ad section
function stripHomeAds(u8) {
  const fields = collectFields(u8, 0, u8.length);
  if (!fields) return null;

  let dropped = 0;
  const kept = [];

  for (const f of fields) {
    // 只检查顶层字段 1
    if (f.field !== 1 || f.wire !== 2) {
      kept.push(u8.subarray(f.start, f.end));
      continue;
    }

    // 解析内部 section 列表
    const sections = collectFields(
      f.payload, 0, f.payload.length
    );
    if (!sections) return null;

    const remain = [];

    for (const s of sections) {
      let isAd = false;

      // 只检查 section 字段 1
      if (s.field === 1 && s.wire === 2 && s.payload) {
        const inner = collectFields(
          s.payload, 0, s.payload.length
        );

        // 检查 section 第一个标识字段
        if (inner && inner.length &&
            inner[0].field === 1 &&
            inner[0].wire === 2 &&
            inner[0].payload) {
          isAd = hasAscii(
            inner[0].payload,
            0,
            inner[0].payload.length,
            '|brand-ad'
          );
        }
      }

      if (isAd) {
        dropped++;
      } else {
        remain.push(
          f.payload.subarray(s.start, s.end)
        );
      }
    }

    // 没有广告，保留原字段
    if (remain.length === sections.length) {
      kept.push(u8.subarray(f.start, f.end));
      continue;
    }

    // 防止删除全部 section
    if (!remain.length) return null;

    // 重建父字段及长度
    const payload = concat(remain);

    kept.push(concat([
      writeVarint((f.field << 3) | 2),
      writeVarint(payload.length),
      payload
    ]));
  }

  if (!dropped) return null;

  const result = concat(kept);

  // 验证重建后的顶层 Protobuf
  if (!collectFields(result, 0, result.length)) {
    return null;
  }

  console.log(
    `HomeNoAd: 移除 ${dropped} 个 brand-ad section，` +
    `${u8.length} → ${result.length} bytes`
  );

  return result;
}

// Loon 二进制响应入口
try {
  const raw = $response.body;

  if (raw == null ||
      !(raw instanceof ArrayBuffer ||
        ArrayBuffer.isView(raw))) {
    console.log("HomeNoAd: 无二进制响应，原样放行");
    $done({});
  } else {
    const bytes = raw instanceof ArrayBuffer
      ? new Uint8Array(raw)
      : new Uint8Array(
          raw.buffer,
          raw.byteOffset,
          raw.byteLength
        );

    const result = stripHomeAds(bytes);
    $done(result ? { body: result } : {});
  }
} catch (e) {
  console.log("HomeNoAd: " + e);
  $done({});
}
