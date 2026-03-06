/*
 * 航旅纵横首页净化 - Loon 适配版
 */

const AD_FINGERPRINTS = ["noTripDutyFreeCard"];

const AD_HEX_PATTERNS = AD_FINGERPRINTS.map(str => {
    return Array.from(new TextEncoder().encode(str))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
});

// Loon 的 $response.body 默认就是 Uint8Array (二进制)
let body = $response.body;

if (body) {
    try {
        let rawData = body;

        // 适配 Loon 的解压方式
        // Loon 通常会自动解压 Gzip，如果需要手动解压：
        if (typeof $utils !== "undefined" && $utils.gunzip) {
            try {
                rawData = $utils.gunzip(body);
            } catch (e) {
                // 解压失败说明 body 已经是原始数据
            }
        } else if (typeof $util !== "undefined" && $util.gunzip) {
            try {
                rawData = $util.gunzip(body);
            } catch (e) { }
        }

        let hex = bytesToHex(rawData);

        // 核心切片：针对航旅首页 PB 的 0a 标识
        let segments = hex.split(/(?=0a[0-9a-f]{2}0a)/g);
        console.log(`[Loon-UmeTrip] 解析段数: ${segments.length}`);

        let cleanSegments = segments.filter(segHex => {
            let isAd = AD_HEX_PATTERNS.some(pattern => segHex.includes(pattern));
            if (isAd) {
                console.log("[Loon-UmeTrip] 命中指纹，剔除广告卡片");
                return false;
            }
            return true;
        });

        let newHex = cleanSegments.join("");
        let newRawData = hexToBytes(newHex);

        // Loon 会自动处理 Content-Length
        $done({ body: newRawData });

    } catch (e) {
        console.log("[Loon-UmeTrip] 脚本异常: " + e);
        $done({});
    }
} else {
    $done({});
}

// --- 工具函数 ---
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
