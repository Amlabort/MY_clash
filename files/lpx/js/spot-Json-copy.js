// spotify-json-refined.js
console.log(`spotify-json-2026.03.01`);

let url = $request.url;
let headers = $request.headers;

// 1. 处理端口号
if (url.includes('com:443')) {
    url = url.replace(/com:443/, 'com');
    console.log(`处理端口号`);
}

// 2. 伪装平台参数
if (url.includes('platform=iphone')) {
    url = url.replace(/platform=iphone/, 'platform=ipad');
    console.log(`伪装平台`);
    
    // 3. 同步修改 User-Agent，防止身份分裂导致掉号
    for (let key in headers) {
        if (key.toLowerCase() === 'user-agent') {
            // 将 iPhone 关键字替换为 iPad
            headers[key] = headers[key].replace(/iPhone/g, 'iPad');
            break;
        }
    }
    console.log('伪装User-Agent');
}

$done({
    url,
    headers
});

