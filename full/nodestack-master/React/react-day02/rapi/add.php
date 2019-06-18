<?php 
//在php中告诉浏览我们的编码为utf-8 
header("Content-type:text/html;charset=utf-8");
//连接数据库
//PDO(连接字符串,mysql用户名,mysql密码)
$pdo = new PDO("mysql:host=localhost;dbname=nodestack;charset=utf8","root","root");
//预处理sql语句,返回预处理的对象
$stmt = $pdo -> prepare("insert into users(name,age)values(:name,:age)");
//执行预处理操作 
$bool = $stmt -> execute([":name"=>$_POST["name"],":age"=>$_POST["age"]]);
if($bool === true ){
    echo json_encode( ["status"=>'success'] );
}else{
    echo json_encode( ["status"=>'failed'] );
}





