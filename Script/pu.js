let obj = JSON.parse($response.body);
delete obj.content.place_ad_1;
delete obj.content.place_ad_3;
delete obj.content.place_ad_2;
delete obj.content.articles;
let modifiedBody = JSON.stringify(obj);
console.log('PU_ad_remove success!');
$done({body: modifiedBody});
