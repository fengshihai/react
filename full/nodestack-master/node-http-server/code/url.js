const url = require("url")

let urlInfo = "/b.html?username=sa&age=113"

let GET = url.parse(urlInfo,true)

console.log(GET.query.username,GET.query.age , GET.pathname)