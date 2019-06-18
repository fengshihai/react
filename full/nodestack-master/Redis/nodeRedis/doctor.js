const cli = require("./common/redis_cli")


cli.lpop("sickersQueen",(err,v)=>{
    if(!err){
        if(v){
            let args = v.split(",") 
            console.log(`${args[0]}请到${args[1]}诊室就诊`)
        }else{
            console.log("医生已经下班~!")
        }

        process.exit()
    }
})