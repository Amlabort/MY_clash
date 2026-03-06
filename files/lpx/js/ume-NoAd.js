/*
 * 航旅纵横首页净化 - 高性能二进制版 (解决卡死问题)
 */

const AD_KEYWORDS = ["noTripDutyFreeCard", "weexUrl", "weexParams", "首页无行程免税卡片"];

// 1. 将关键词转为字节数组 (Uint8Array)
const AD_PATTERNS = AD_KEYWORDS.map(str => new TextEncoder().encode(str));

let body = $response.body;

if (body && body.length > 0) {
    try {
        console.log(`[Loon] 开始处理数据，体积: ${body.length} bytes`);
        
        let data = new Uint8Array(body);
        let result = [];
        let lastPos = 0;
        
        // 2. 核心：利用 0x0A (Tag 1) 作为分隔符进行二进制扫描
        // 这种方式不需要转 Hex，直接在内存地址操作
        for (let i = 0; i < data.length; i++) {
            // 寻找卡片起始位 0x0A (通常跟在长度后面)
            if (data[i] === 0x0A && i + 1 < data.length) {
                let segmentLength = data[i + 1];
                let segmentEnd = i + 2 + segmentLength;
                
                if (segmentEnd <= data.length) {
                    let segment = data.slice(i, segmentEnd);
                    
                    // 检查这个二进制片段里是否包含任何一个广告指纹
                    let isAd = AD_PATTERNS.some(pattern => containsBytes(segment, pattern));
                    
                    if (isAd) {
                        console.log("[Loon] 发现并物理剔除一个广告容器块");
                        i = segmentEnd - 1; // 跳过这段数据
                        continue;
                    }
                }
            }
            result.push(data[i]);
        }

        let finalData = new Uint8Array(result);
        console.log(`[Loon] 处理完毕，清理后体积: ${finalData.length}`);
        
        // 3. 必须调用 $done 结束脚本
        $done({ body: finalData.buffer });

    } catch (e) {
        console.log("[Loon] 脚本运行异常: " + e.message);
        $done({});
    }
} else {
    $done({});
}

// --- 高性能二进制搜索辅助函数 ---
function containsBytes(source, target) {
    if (target.length > source.length) return false;
    for (let i = 0; i <= source.length - target.length; i++) {
        let match = true;
        for (let j = 0; j < target.length; j++) {
            if (source[i + j] !== target[j]) {
                match = false;
                break;
            }
        }
        if (match) return true;
    }
    return false;
}
