const url = $request.url.toLowerCase();;
const method = $request.method.toUpperCase();

const isDeleteRequest = (method === 'DELETE');
const isLogoutAction = url.includes('logout') || url.includes('revoke') || url.includes('session')|| url.includes('delete');

if (isDeleteRequest || isLogoutAction) {
    console.log(`[Spotify拦截] 发现自毁请求: [${method}] ${url}`);
    
    // 返回假成功
    $done({
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            "status": "success",
            "message": "Token preserved by Interceptor",
            "note": "Blocked local self-destruction"
        })
    });
} else {
    // 正常的 GET/POST 请求（如加载歌单）直接放行
    $done({});
}
