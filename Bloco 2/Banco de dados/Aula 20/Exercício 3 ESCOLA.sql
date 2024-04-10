create database db_escola;

use db_escola;

create table tb_estudantes(
	id bigint auto_increment,
    nome varchar(255) not null,
    serie int,
    turma varchar(255) not null,
    periodo varchar(255) not null,
    media decimal not null,
    primary key(id)
);

select * from tb_estudantes;

insert into tb_estudantes(nome, serie, turma, periodo, media) values ("José", 6, "B", "Manhã", 8);
insert into tb_estudantes(nome, serie, turma, periodo, media) values ("Monica", 9, "C", "Tarde", 9);
insert into tb_estudantes(nome, serie, turma, periodo, media) values ("Beatriz", 4, "A", "Manhã", 6);
insert into tb_estudantes(nome, serie, turma, periodo, media) values ("Julia", 6, "A", "Manhã", 5);
insert into tb_estudantes(nome, serie, turma, periodo, media) values ("Larissa", 5, "A", "Tarde", 7);
insert into tb_estudantes(nome, serie, turma, periodo, media) values ("Yara", 7, "C", "Manhã", 6);
insert into tb_estudantes(nome, serie, turma, periodo, media) values ("Pedro", 9, "B", "Tarde", 6);
insert into tb_estudantes(nome, serie, turma, periodo, media) values ("Rafael", 8, "C", "Tarde", 7);

select * from tb_estudantes where media > 7;
select * from tb_estudantes where media < 7;

update tb_estudantes set periodo = "tarde" where id = 4;