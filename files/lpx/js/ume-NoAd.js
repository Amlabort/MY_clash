/*
 * 航旅纵横首页净化 - 零依赖版 (兼容 Loon)
 */

const AD_FINGERPRINTS = [
    "noTripDutyFreeCard",
    "无行程首页商城卡片", 
    "dutyfreeMall"
];

const AD_HEX_PATTERNS = AD_FINGERPRINTS.map(str => 
    Array.from(new TextEncoder().encode(str))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('')
);

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
        
        let segments = hex.split(/(?=0a[0-9a-f]{2,4}0a)/g);

        let cleanSegments = segments.filter(seg => {
            // 检查当前段落是否包含指纹库里的【任何一个】
            let isAd = AD_HEX_PATTERNS.some(pattern => seg.includes(pattern));
            if (isAd) {
                console.log("[Loon] 命中指纹，整块容器切除");
                return false;
            }
            return true;
        });
        
        if (segments.length !== cleanSegments.length) {
            let newHex = cleanSegments.join("");
            let result = new Uint8Array(newHex.length / 2);
            for (let i = 0; i < newHex.length; i += 2) {
                result[i / 2] = parseInt(newHex.substr(i, 2), 16);
            }
            console.log(`[Loon] 净化成功：切除了 ${segments.length - cleanSegments.length} 个完整容器块`);
            $done({ body: result.buffer });
        } else {
            $done({});
        }

    } catch (e) {
        console.log("[Loon] 脚本错误: " + e.message);
        $done({});
    }
} else {
    $done({});
}
