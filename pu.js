let obj = JSON.parse($response.body);

delete obj.content.place_ad_3;
delete obj.content.place_ad_2;
delete obj.content.articles;
let modifiedBody = JSON.stringify(obj);
console.log(modifiedBody);
$done({body: modifiedBody});
