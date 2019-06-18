//使用redis的模块
const redis = require("redis")

//1.redis有密码:
//2.redis无密码(window):
const cli = redis.createClient("6379","localhost")
// 这种方式虽然很好用，但是存在着版本兼容的问题
cli.mget(["node1","node2","node3"],(err,reply)=>{
    if(!err){
        console.log(reply)
    }
})

// 这种方式虽然不是很好用，但是不存在着版本兼容的问题
cli.mget("node1","node2","node3",(err,reply)=>{
    if(!err){
        console.log("~", reply)
    }
})
