CREATE DATABASE burgers_db;

use burgers_db;

create table burgers(
    id int(11) auto_increment PRIMARY KEY,
    burger_name varchar(100) not null,
    devoured boolean default false
);