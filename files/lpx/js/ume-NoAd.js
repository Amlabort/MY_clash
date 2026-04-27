//const body = $response.body;
const body = $response.body || $response.bodyBytes || LOONResponseBody;

if (!body || body.length === 0) {
  console.log("body 为空或不存在");
  $done({});
  return;
}

function readVarint(buffer, offset) {
  let result = 0;
  let shift = 0;
  let pos = offset;

  while (true) {
    const byte = buffer[pos];

    result |= (byte & 0x7F) << shift;
    pos++;

    if ((byte & 0x80) === 0) break;

    shift += 7;

  }

  return {
    value: result,
    length: pos - offset + 1
  };
}

for (let i = 0; i < body.length; i++) {
    if (body[i] === 0x52) {
      const { value, length } = readVarint(body, i + 1);

      console.log(`找到 0x52 在偏移 ${i}`);
      console.log(`length = ${value}`);

      if (value > 300) {
        console.log("找到长度 > 300");
        body[i] = 0x7A;
        body[i+1] = 0x00;
        $done({body});
        return true;
      }
    }
}

console.log("未找到广告字段");
$done({body});
