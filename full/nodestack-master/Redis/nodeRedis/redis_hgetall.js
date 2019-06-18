//使用redis的模块
const redis = require("redis")

//1.redis有密码:
//2.redis无密码(window):
const cli = redis.createClient("6379","localhost")


cli.hgetall("user:pengjin",(err,v)=>{
    if(!err){
        console.log(v)
    }
})