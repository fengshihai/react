const cli = require("./common/redis_cli")

const args = process.argv.splice(2)
//验证用户必须输入2个参数
if(!args || args.length<2){
    console.log("参数必须是2个")
    //return 
    process.exit() //退出
}

//实现挂号操作  rpush sickersQueen zhangsan,01 
let lstData = `${args[0]},${args[1]}`  // node guahao.js pengjin 10     ---> pengjin,10

cli.rpush("sickersQueen",lstData,(err)=>{
    if(!err){
        console.log( `${args[0]}成功挂号${args[1]}诊室`)
        process.exit() //退出
    }
})