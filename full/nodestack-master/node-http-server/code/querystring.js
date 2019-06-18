const queryString = require("querystring")

let getInfo = "username=pengjin&age=33&gender=male"

let obj = queryString.parse(getInfo)

console.log(obj) 