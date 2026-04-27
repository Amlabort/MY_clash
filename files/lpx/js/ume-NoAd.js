const body = $response.body;

function readVarint(buffer, offset) {
  let result = 0;
  let shift = 0;
  let pos = offset;

  while (true) {
    const byte = buffer[pos];

    result |= (byte & 0x7F) << shift;

    if ((byte & 0x80) === 0) break;

    shift += 7;
    pos++;
  }

  return {
    value: result,
    length: pos - offset + 1
  };
}

for (let i = 0; i < buffer.length; i++) {
    if (body[i] === 0x52) {
      const { value, length } = readVarint(buffer, i + 1);

      console.log(`找到 0x52 在偏移 ${i}`);
      console.log(`length = ${value}`);

      if (value > 300) {
        console.log("找到长度 > 300");
        body[i] = 0x7A;
        $done({body});
        return true;
      }
    }
}

console("未找到广告字段");
$done({body});
