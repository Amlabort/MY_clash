// 获取二进制响应体
let body = new Uint8Array($response.body);

let MAX=300;
let flag=0;

for (let i = 0; i < MAX; i++) {
    if (body[i] === 0xF2 && body[i + 1] === 0x01) {

        body[i] = 0xF7;
        body[i + 1] = 0x07;
        console.log(`成功在偏移量 ${i} 处更改tag值`);
        flag=1;
        break;
    }
}

if(!flag) console.log(`未检测到广告`);


//$done({ body });
$done({ body: body.buffer });


