create database db_pizzaria_legal;

use db_pizzaria_legal;

create table tb_pizzas (
	id bigint auto_increment,
    nome varchar(255) not null,
    sabor varchar(255) not null,
	pedaços int not null,
    valor int not null,
    primary key(id)
);

create table tb_categorias (
	id bigint auto_increment,
    doce varchar(255) not null,
    salgada varchar(255) not null,
    primary key(id)
);

alter table tb_pizzas add categoriaid bigint;
alter table tb_pizzas add constraint fk_categorias foreign key (categoriaid) references tb_categorias(id);

select * from tb_pizzas;	
select * from tb_categorias;

insert into tb_categorias(doce, salgada) values ("Chocolate preto", "Catupiry");
insert into tb_categorias(doce, salgada) values ("Chocolate branco", "Cheddar");
insert into tb_categorias(doce, salgada) values ("Nutella", "Pasta de alho");
insert into tb_categorias(doce, salgada) values ("Leite condensado", "Provolone");
insert into tb_categorias(doce, salgada) values ("Sem recheio", "Sem recheio");

insert into tb_pizzas(nome, sabor, pedaços, valor, categoriaid) values ("Margherita", "Queijo, molho e manjericão", 12, 45, 5);
insert into tb_pizzas(nome, sabor, pedaços, valor, categoriaid) values ("Chocolate", "Chocolate + morango", 16, 60, 1);
insert into tb_pizzas(nome, sabor, pedaços, valor, categoriaid) values ("Frango Catupiry", "Frango + catupiry", 14, 60, 3);
insert into tb_pizzas(nome, sabor, pedaços, valor, categoriaid) values ("Paulista", "Molho + queijo + presunto + palmito", 12, 85, 2);
insert into tb_pizzas(nome, sabor, pedaços, valor, categoriaid) values ("Dois amores ", "Chocolate branco + chocolate preto", 16, 100, 1);
insert into tb_pizzas(nome, sabor, pedaços, valor, categoriaid) values ("4 queijos", "Muçarela + gorgonzola + parmesão + catupiry", 16, 120, 3);
insert into tb_pizzas(nome, sabor, pedaços, valor, categoriaid) values ("Vegetariana", "Palmito + milho + ervilha + brocolis", 12, 70, 2);
insert into tb_pizzas(nome, sabor, pedaços, valor, categoriaid) values ("Romeu e julieta", "Queijo + goiabada", 14, 55, 4);

select * from tb_pizzas where valor > 45.00;
select * from tb_pizzas where valor between 50.00 and 100.00;
select * from tb_pizzas where nome like "%M%";

select nome, sabor, pedaços, valor, categoriaid from tb_pizzas inner join tb_categorias on tb_pizzas.categoriaid = tb_categorias.id;
select nome, sabor, pedaços, valor, categoriaid from tb_pizzas inner join tb_categorias on tb_pizzas.categoriaid = tb_categorias.id where categoriaid = 2;