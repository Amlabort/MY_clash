// 1. 定义广告指纹库（在这里增加新的关键字即可）
const AD_FINGERPRINTS = [
    "noTripDutyFreeCard", // 免税店卡片
    #"dutyfreeMall",       // 商城入口
    #"advertisement",      // 通用广告
    #"icon_index_ad",      // 索引位广告
    #"bannerAd"            // 横幅广告
];

// 2. 预解析为 Hex 特征码
const AD_HEX_PATTERNS = AD_FINGERPRINTS.map(str => 
    Array.from(new TextEncoder().encode(str))
         .map(b => b.toString(16).padStart(2, '0'))
         .join('')
);

let body = $response.body;

if (body) {
    try {
        // 解压数据
        let rawData = $util.gunzip(body);
        let hex = bytesToHex(rawData);

        // 3. 核心切片逻辑：利用 Protobuf 的分段符 0a 进行切分
        // 0a 是 Tag 1 (Card 列表项) 的起始标识
        let segments = hex.split(/(?=0a[0-9a-f]{2,4}0a)/g); 
        console.log(`[UmeTrip] 原始数据包含 ${segments.length} 个数据段`);

        // 4. 执行多特征扫描过滤
        let cleanSegments = segments.filter(seg => {
            // 检查当前段是否包含任何一个广告特征码
            let isAd = AD_HEX_PATTERNS.some(pattern => seg.includes(pattern));
            
            if (isAd) {
                console.log("核心拦截：发现匹配特征码的广告块，已物理切除以塌陷布局");
                return false; // 丢弃
            }
            return true; // 保留
        });

        // 5. 重新封包
        let newHex = cleanSegments.join("");
        let newRawData = hexToBytes(newHex);

        console.log(`[UmeTrip] 净化完毕，剩余数据段: ${cleanSegments.length}`);
        $done({ body: $util.gzip(newRawData) });

    } catch (e) {
        console.log("[UmeTrip] 脚本执行出错: " + e);
        $done({});
    }
} else {
    $done({});
}

// --- 工具函数 ---
function bytesToHex(bytes) {
    return Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('');
}

function hexToBytes(hex) {
    let bytes = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
        bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
    }
    return bytes;
}
