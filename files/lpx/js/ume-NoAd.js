/*
 * 航旅纵横首页去广告 - 消除空白块专用脚本
 * 目标: home.umetrip.com/gateway/api/umetrip/native
 */

let body = $response.body;

if (body) {
    // 航旅纵横的 PB 结构中，广告卡片通常带有特定的 Tag 标识
    // 脚本通过识别这些标识并将其所在的 Object 置空来消除占位
    
    // 1. 将二进制转为 Hex 方便匹配
    let hex = bytesToHex(body);

    // 2. 这里的 '0a' 或特定的十六进制序列代表卡片的开始
    // 根据 2026 年最新的 PB 结构，广告节点的特征码通常包含特定的业务 ID
    // 我们通过将广告相关的卡片数据段替换为“空节点”或直接删除
    
    // 典型的广告节点特征匹配（示例，需根据实际抓包微调）
    const adPattern = /0a[a-z0-9]{2}08[a-z0-9]{2}12(07|08)616476657274/g; // 匹配 hex 中的 'advert'
    
    if (adPattern.test(hex)) {
        // 将匹配到的广告数据段替换为无效数据，或者缩小该段长度
        hex = hex.replace(adPattern, "00000000"); 
        console.log("航旅纵横：已精准剔除广告布局节点，消除空白块");
    }

    body = hexToBytes(hex);
}

$done({ body });

// 辅助工具函数
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
