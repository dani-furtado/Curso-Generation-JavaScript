create database db_loja;

use db_loja;

create table tb_produtos(
	id bigint auto_increment,
	produto varchar(255) not null,
    cor varchar(255) not null,
    tamanho int,
    categoria varchar(255) not null,
    valor decimal not null,
    primary key(id)
);

select * from tb_produtos;

insert into tb_produtos(produto, cor, tamanho, categoria, valor) values ("Calça", "Branco", "40", "Social", 80);
insert into tb_produtos(produto, cor, tamanho, categoria, valor) values ("Calça", "Preto", "42", "Social", 120);
insert into tb_produtos(produto, cor, tamanho, categoria, valor) values ("Bermuda", "Azul", "42", "Esportiva", 160);
insert into tb_produtos(produto, cor, tamanho, categoria, valor) values ("Sapato", "Marrom", "44", "Social", 300);
insert into tb_produtos(produto, cor, tamanho, categoria, valor) values ("Sapato", "Branco", "40", "Esportiva", 350);
insert into tb_produtos(produto, cor, tamanho, categoria, valor) values ("Blazer", "Preto", "42", "Social", 500);
insert into tb_produtos(produto, cor, tamanho, categoria, valor) values ("Blazer", "Branco", "44", "Social", 510);
insert into tb_produtos(produto, cor, tamanho, categoria, valor) values ("Jaqueta", "Jeans", "42", "Casual", 600);

select * from tb_produtos where valor > 500;
select * from tb_produtos where valor < 500;

update tb_produtos set valor = 350 where id = 1;
update tb_produtos set valor = 300 where id = 2;
