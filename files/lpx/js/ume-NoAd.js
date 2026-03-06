
const AD_FINGERPRINTS = ["noTripDutyFreeCard"];

// 预转 Hex 特征码
const AD_HEX_PATTERNS = AD_FINGERPRINTS.map(str => {
    return Array.from(new TextEncoder().encode(str))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
});

let body = $response.body;

if (body) {
    try {
        let rawData = body;

        // 兼容性解压逻辑
        if (typeof $util !== "undefined" && typeof $util.gunzip === "function") {
            try {
                rawData = $util.gunzip(body);
                console.log("[UmeTrip] 使用 $util 成功解压");
            } catch (e) {
                console.log("[UmeTrip] 尝试解压失败，可能数据未压缩");
            }
        }

        let hex = bytesToHex(rawData);

        // 核心切片：保留 0a 分隔符进行切割
        let segments = hex.split(/(?=0a[0-9a-f]{2}0a)/g);
        console.log(`[UmeTrip] 原始段数: ${segments.length}`);

        let cleanSegments = segments.filter(segHex => {
            return !AD_HEX_PATTERNS.some(pattern => segHex.includes(pattern));
        });

        let newHex = cleanSegments.join("");
        let newRawData = hexToBytes(newHex);

        console.log(`[UmeTrip] 净化完毕，剩余段数: ${cleanSegments.length}`);
        
        // 兼容性压缩回传
        let finalBody = newRawData;
        if (typeof $util !== "undefined" && typeof $util.gzip === "function") {
            finalBody = $util.gzip(newRawData);
        }

        $done({ body: finalBody });

    } catch (e) {
        console.log("[UmeTrip] 核心逻辑异常: " + e.message);
        $done({});
    }
} else {
    $done({});
}

// --- 标准工具函数 (必须包含在脚本内) ---
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
