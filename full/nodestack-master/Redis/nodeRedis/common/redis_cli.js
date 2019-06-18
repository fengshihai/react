//使用redis的模块
const redis = require("redis")

//1.redis有密码:
//2.redis无密码(window):
const cli = redis.createClient("6379","localhost")

module.exports = cli