// 获取二进制响应体
let body = $response.body;

// 定义我们计算出的固定偏移量
const targetOffset = 162; 

// 安全检查：验证该位置是否确实是 F2 01
if (body && body.length > targetOffset + 1) {
    if (body[targetOffset] === 0xF2 && body[targetOffset + 1] === 0x01) {
        
        // 执行替换：将 Tag 30 (F2 01) 修改为 Tag 1015 (F7 07)

        body[targetOffset] = 0xF7;
        body[targetOffset + 1] = 0x07;
        
        console.log("成功在偏移量 162 处更改tag值");
    } else {
        console.log("未检测到广告" );
    }
}

$done({ body });
