//使用redis的模块
const redis = require("redis")

//1.redis有密码:
//2.redis无密码(window):
const cli = redis.createClient("6379","localhost")


//cli.hmset("user:zhangsan",{"name":"zhangsan","jober":"teacher"},redis.print) //某些低版本不支持
cli.hmset("user:ls",["name","lisi","jober","teacher"],redis.print)