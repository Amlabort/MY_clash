
$done((response) => {
    let code = Number(response.statusCode);
    // 判断状态码是否是 404 或 403
    if (code === 404 || code === 403) {
        // 改为 200
        response.statusCode = 200;
        response.body = JSON.stringify({});
    }

    // 其他状态码保持原样
    $done(response);
});
