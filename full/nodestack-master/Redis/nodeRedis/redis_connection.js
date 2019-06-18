//使用redis的模块
const redis = require("redis")

//1.redis有密码:
//2.redis无密码(window):
const cli = redis.createClient("6379","localhost")

//redis的包有一个错误监听的功能
cli.on("error",err=>{
    console.log("redis发生了错误:",err)
})
