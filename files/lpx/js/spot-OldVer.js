const resStatus = $response.status ? $response.status : $response.statusCode;
if(resStatus !== 200) {
    esponse.status = 200;
    response.body = JSON.stringify({});
}
$done(response);

