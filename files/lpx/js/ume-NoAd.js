const rawBody = $response.body;

if (rawBody) {
    // 1. 高性能转码（解决栈溢出和延迟）
    let decoder = new TextDecoder('utf-8');
    let encoder = new TextEncoder();
    let strData = decoder.decode(rawBody);

    // 2. 检查广告特征
    if (strData.includes("adBannerImg")) {
        console.log("检测到航旅广告，正在进行高速拦截...");

        /** * 核心逻辑：
         * 我们不只是改图片地址，我们要让整个 JSON 变成非法或极简。
         * 航旅的白块来自于它解析到了完整的参数，我们把整个字段内容替换掉。
         */
        
        // 方案 A：精准爆破 JSON 里的关键布局参数（保留长度，防止 Protobuf 校验失败）
        // 匹配整个 JSON 字符串，将其替换为同等长度的空格或简减内容
        strData = strData.replace(/\{"closeClick".*closeExpose":false\}/g, (match) => {
            // 返回一个极简的 JSON，后面用空格补齐，保持字节长度完全一致
            let replacement = '{"autoLayout":false,"effectControl":false}';
            return replacement.padEnd(match.length, ' ');
        });

        // 3. 回传修改后的二进制
        $done({ body: encoder.encode(strData).buffer });
    } else {
        $done({}); // 无广告，直接放行
    }
} else {
    $done({});
}
