create table users (
    id int unsigned primary key not null auto_increment,
    `name` varchar(10) not null,
    `age` tinyint default 0 
)engine=innodb charset=utf8;