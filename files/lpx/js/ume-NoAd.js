let body = $response.body;

if (body) {
    // 将二进制转为字符串进行操作
    let uint8Array = new Uint8Array(body);
    let strData = String.fromCharCode.apply(null, uint8Array);
    
    if (strData.indexOf("adBannerImg") !== -1) {
        console.log("检测到广告配置字段，正在执行消除...");
        strData = strData.replace(/"adBannerImg":"[^"]+"/g, '"adBannerImg":""');
        strData = strData.replace(/"autoLayout":true/g, '"autoLayout":false');
        strData = strData.replace(/"midBannerImg":"[^"]+"/g, '"midBannerImg":""');
        let resultData = new Uint8Array(strData.length);
        for (let i = 0; i < strData.length; i++) {
            resultData[i] = strData.charCodeAt(i);
        }
        $done({ body: resultData.buffer });
        } else {
        $done({ body });
        }
    } else {
    $done({});
}
    
