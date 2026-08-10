let body = $response.body;

let flag = 0;

console.log(`HomeNoAd`);

try {

    let obj = JSON.parse(body);


    if (obj.data && Array.isArray(obj.data)) {

        // 删除 data 前5项中的广告字段
        for (let i = 0; i < Math.min(5, obj.data.length); i++) {

            if (obj.data[i].ad_info) {
                delete obj.data[i].ad_info;
                flag = 1;
                console.log(`删除 data[${i}].ad_info`);
            }


            if (obj.data[i].adjson) {
                delete obj.data[i].adjson;
                flag = 1;
                console.log(`删除 data[${i}].adjson`);
            }

        }

    }


    if (flag) {
        console.log(`去广告成功`);
        $done({
            body: JSON.stringify(obj)
        });
    }
    else {
        console.log(`未检测到广告`);
        $done({});
    }


}
catch(e) {

    console.log(`JSON解析失败 ${e}`);
    $done({});
}


// let body = $response.body;

// console.log("长度：" + body.length);
// console.log("前200字符：" + body.substring(0, 200));

// $done({});
