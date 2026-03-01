const url = $request.url.toLowerCase();
const method = $request.method.toUpperCase();
const isDeleteRequest = (method === 'DELETE');
const isLogoutAction = url.includes('logout') || url.includes('revoke') || url.includes('session') || url.includes('delete');

if (isDeleteRequest || isLogoutAction) {
    console.log(`[Spotify拦截] 发现自毁请求: [${method}] ${url}`);
    
    // gRPC 空响应的 base64: 5字节 \x00\x00\x00\x00\x00
    $done({
        response: {
            status: 200,
            headers: {
                "Content-Type": "application/grpc",
                "grpc-status": "0",
                "grpc-message": ""
            },
            body: "AAAAAAAA"  // base64 of \x00\x00\x00\x00\x00
        }
    });
} else {
    $done({});
}
