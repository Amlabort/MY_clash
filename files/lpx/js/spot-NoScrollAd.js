// 获取二进制响应体
let body = $response.body;

let MAX=300;
let flag=0;

const targetBytes = new TextEncoder().encode("spotify:section:0JQ5DB6s3cssW5Bo6cGq");

function matchAt(buf, i) {
  for (let j = 0; j < targetBytes.length; j++) {
    if (buf[i + j] !== targetBytes[j]) return false;
  }
  return true;
}
for (let i = 0; i < body.length; i++) {
    if (matchAt(body,i)) {

        body[i] = 0xF7;
        body[i + 1] = 0x07;
        console.log(`改变 ${i} 处值`);
    }
}

for (let i = 0; i < MAX; i++) {
    if (body[i] === 0xF2 && body[i + 1] === 0x01) {

        body[i] = 0xF7;
        body[i + 1] = 0x07;
        console.log(`成功在偏移量 ${i} 处更改tag值`);
        flag=1;
        $done({ body });
        return;
    }
}

if(!flag) console.log(`未检测到广告`);
$done({});



//$done({ body: body.buffer });


