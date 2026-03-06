/*
 * 航旅纵横首页净化 - Loon 终极无损版
 */

const AD_KEYWORD = "noTripDutyFreeCard"; // 广告指纹

let body = $response.body;

if (body && body.length > 0) {
    try {
        // 1. Loon 环境下强制解压 (确保我们处理的是明文二进制)
        let rawData = $util.gunzip(body);
        let hex = bytesToHex(rawData);

        // 2. 将广告指纹转为 Hex
        const adHex = stringToHex(AD_KEYWORD);

        if (hex.includes(adHex)) {
            console.log("[Loon] 发现广告指纹，准备执行精准切除...");

            // 3. 找到广告卡片的范围
            // 在 PB 中，卡片通常包裹在 0a 开头的结构里
            // 我们寻找包含 adHex 的最近一个 0a...0a 区间
            let parts = hex.split(/(?=0a[0-9a-f]{2}0a)/);
            let cleanParts = parts.filter(p => !p.includes(adHex));

            if (parts.length !== cleanParts.length) {
                let newHex = cleanParts.join("");
                let modifiedData = hexToBytes(newHex);

                // 4. 关键：必须重新压回 Gzip，否则 App 会报 -102
                let finalBody = $util.gzip(modifiedData);
                
                console.log(`[Loon] 成功切除广告，数据体积从 ${body.length} 优化至 ${finalBody.length}`);
                $done({ body: finalBody });
            } else {
                $done({});
            }
        } else {
            console.log("[Loon] 未发现指定广告指纹");
            $done({});
        }
    } catch (e) {
        console.log("[Loon] 脚本执行异常: " + e);
        $done({});
    }
} else {
    $done({});
}

// --- 工具函数 ---
function stringToHex(str) {
    return Array.from(new TextEncoder().encode(str)).map(b => b.toString(16).padStart(2, '0')).join('');
}
function bytesToHex(bytes) {
    return Array.from(new Uint8Array(bytes), b => b.toString(16).padStart(2, '0')).join('');
}
function hexToBytes(hex) {
    let bytes = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
        bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
    }
    return bytes;
}
