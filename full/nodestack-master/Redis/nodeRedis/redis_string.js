//使用redis的模块
const redis = require("redis")

//1.redis有密码:
//2.redis无密码(window):
const cli = redis.createClient("6379","localhost")


//console.log( typeof redis.print ) //function

/**
  redis.print帮我们完成一个回调函数包含俩个参数:
  1.err 对象 如果发生错误时产生，如果没有错误就是null 
  2.reply 对象(负责获取redis当中value，如果value获取不到并且没有错误就返回replay:ok，如果reply可以获取到value)
  value : array object string boolean
 */

//cli.set("nodejs","redis_value")
//cli.set("pengjin","q234234234",redis.print )

cli.set("pengjin","q234234234",(err,reply)=>{
    if(!err){
        console.log("set success,reply=",reply)
    }
} )
