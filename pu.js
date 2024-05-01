const url = $request.url;
const header = $request.headers;
const headopt = header["Operation-Type"] || header["operation-type"];
const ua = header["User-Agent"] || header["user-agent"];
const body = $response.body;

console.log(body);
$done()
