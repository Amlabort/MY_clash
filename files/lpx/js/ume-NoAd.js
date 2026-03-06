/*
 * 航旅纵横首页净化 - 零依赖版 (兼容 Loon)
 */

const AD_FINGERPRINTS = [
    "noTripDutyFreeCard",
    "无行程首页商城卡片", 
    "dutyfreeMall"
];

let body = $response.body;

if (body && body.length > 0) {
    try {
        // 直接将 body 处理为 Uint8Array
        let uint8Array = new Uint8Array(body);
        
        // 1. 将二进制转为 Hex 字符串
        let hex = "";
        for (let i = 0; i < uint8Array.length; i++) {
            hex += uint8Array[i].toString(16).padStart(2, '0');
        }

        // 2. 将广告指纹转为 Hex
        const adHex = Array.from(new TextEncoder().encode(AD_KEYWORD))
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');

        if (hex.includes(adHex)) {
            console.log("[Loon] 成功通过二进制搜索定位指纹");

            // 3. 按照 Protobuf 的分段符 0a 切分
            // 这种方法不依赖 $util，直接操作 Hex 字符串
            //let segments = hex.split(/(?=0a[0-9a-f]{2,6}0a)/g);
            let segments = hex.split(/(?=0a)/g); 
            console.log(`[Loon-UmeTrip] 细粒度解析段数: ${segments.length}`);
            
            let cleanSegments = segments.filter(seg => !seg.includes(adHex));

            if (segments.length !== cleanSegments.length) {
                let newHex = cleanSegments.join("");
                
                // 4. 将 Hex 转回 Uint8Array
                let result = new Uint8Array(newHex.length / 2);
                for (let i = 0; i < newHex.length; i += 2) {
                    result[i / 2] = parseInt(newHex.substr(i, 2), 16);
                }

                console.log(`[Loon] 净化成功：切除了 ${segments.length - cleanSegments.length} 个广告块`);
                $done({ body: result.buffer }); // 返回 buffer
            } else {
                $done({});
            }
        } else {
            console.log("[Loon] 未发现指纹，可能是数据已被压缩或格式变动");
            $done({});
        }
    } catch (e) {
        console.log("[Loon] 脚本错误: " + e.message);
        $done({});
    }
} else {
    $done({});
}
