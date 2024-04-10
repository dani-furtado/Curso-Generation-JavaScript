create database db_quitando;

use db_quitando;

create table tb_produtos(
	id bigint auto_increment,
	nome varchar(255) not null,
    quantidade int,
    preco decimal not null,
    primary key(id)
);

select * from tb_produtos;

insert into tb_produtos(nome, quantidade, preco) values ("Brocolis", 20, 5);
insert into tb_produtos(nome, quantidade, preco) values ("Morango", 40, 9.99);
insert into tb_produtos(nome, quantidade, preco) values ("Ameixa", 40, 5);
insert into tb_produtos(nome, quantidade, preco) values ("Melancia", 6, 15);
insert into tb_produtos(nome, quantidade, preco) values ("Melão", 20, 4.89);
insert into tb_produtos(nome, quantidade, preco) values ("Goiaba", 19, 3.67);

select nome, preco from tb_produtos;

select * from tb_produtos where id = 1;

select * from tb_produtos where preco < 5.00;

select * from tb_produtos where preco > 5.00 AND quantidade < 15;

-- ALTER TABLE - MODIFY

alter table tb_produtos modify preco decimal (6,2);
alter table tb_produtos modify quantidade int not null;
alter table tb_produtos add descricao varchar(255);

update tb_produtos set preco = 9.99 where id = 1;
update tb_produtos set descricao = "Vegetal" where id = 1;
update tb_produtos set descricao = "Fruta" where id = 8;
update tb_produtos set descricao = "Fruta" where id = 14;
update tb_produtos set descricao = "Fruta" where id = 17;
update tb_produtos set descricao = "Fruta" where id = 18;
update tb_produtos set descricao = "Fruta" where id = 19;

-- deletando itens que foram duplicados
delete from tb_produtos where id = 2;
delete from tb_produtos where id = 3;
delete from tb_produtos where id = 4;
delete from tb_produtos where id = 5;
delete from tb_produtos where id = 6;
delete from tb_produtos where id = 7;
delete from tb_produtos where id = 9;
delete from tb_produtos where id = 10;
delete from tb_produtos where id = 11;
delete from tb_produtos where id = 12;
delete from tb_produtos where id = 13;
delete from tb_produtos where id = 15;
delete from tb_produtos where id = 16;

alter table tb_produtos change nome nomeProduto varchar(255); 



