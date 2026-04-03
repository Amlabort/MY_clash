const resStatus = $response.status ? $response.status : $response.statusCode;
if(resStatus !== 200) {
    console.log(`$response.status不为200:${resStatus}`);
    $response.status = 200;
    //$response.body = JSON.stringify({});
}
$done($response);

