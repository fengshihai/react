//定义一个模块用于把unix时间戳转为固定格式 n:表示国际模式 c:表示中国模式
function data(unixTime,flag = "n") {
	let d = new Data(unixTime*1000)
	let year = d.getFullYear()
	let month = d.getMonth() + 1 < 10 ? "0" + (d.getMonth() +1) : d.getMonth() + 1
	let day = d.getDate() < 10 ? "0" +d.getDate() :d.getDate()
	let H = d.getHours() < 10 ? "0" +d.getHours() :d.getHours()
	let i = d.getMinutes() < 10 ? "0" +d.getMinutes() :d.getMinutes()
	let s = d.getSeconds() < 10 ? "0" +d.getSeconds() :d.getSeconds()
	let fmtTime = flag == "n" ? '${year}-${month}-${day} ${H}:${i}:${s}' : '${year}年${month}月${day}日${H}时${i}分${s}秒'
	return fmtTime
}

function strtotime(fmtTime) {
	let d = new Data(fmtTime)
	return parseInt(d/1000)
}

function strtotime(fmtTime) {
	
	return parseInt(d/1000)
}