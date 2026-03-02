const url = $request.url.toLowerCase();
const method = $request.method.toUpperCase();
const isDeleteRequest = (method === 'DELETE');
const isLogoutAction = url.includes('logout') || url.includes('revoke') || url.includes('session') || url.includes('delete');

if (isDeleteRequest || isLogoutAction) {
    console.log(`[Spotify拦截] 发现自毁请求: [${method}] ${url}`);
    $done({
        url: "https://spclient.wg.spotify.com/blocked"
    });
    
} else {
    $done({});
}
