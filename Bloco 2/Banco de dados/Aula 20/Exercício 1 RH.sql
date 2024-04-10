create database db_rh;

use db_rh;

create table tb_informações(
	id bigint auto_increment,
	nome varchar(255) not null,
    matricula int,
    cargo varchar(255) not null,
    inicio date,
    salario decimal not null,
    primary key(id)
);

select * from tb_informações;

insert into tb_informações(nome, matricula, cargo, inicio, salario) values ("João", 1560, "Analista Administrativo", "2020-01-02", 2500);
insert into tb_informações(nome, matricula, cargo, inicio, salario) values ("Maria", 1687, "Gerente", "2015-06-17", 8000);
insert into tb_informações(nome, matricula, cargo, inicio, salario) values ("Joana", 2536, "Estagiária", "2023-07-23", 1800);
insert into tb_informações(nome, matricula, cargo, inicio, salario) values ("Amanda", 2687, "Analista Financeira", "2022-04-26", 3000);
insert into tb_informações(nome, matricula, cargo, inicio, salario) values ("Pedro", 3000, "Auxiliar Administrativo", "2024-03-15", 2000);

select * from tb_informações where salario > 2000;
select * from tb_informações where salario < 2000;

update tb_informações set salario = 3000 where id = 1;