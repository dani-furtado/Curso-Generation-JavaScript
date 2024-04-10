DROP DATABASE db_quitanda;

create database db_quitanda;

use db_quitanda;

create table tb_produtos(
	id bigint auto_increment,
    nome varchar(255) not null,
    quantidade int,
    datavalidade date,
    preco decimal (6,2) not null,
    primary key(id)
);

INSERT INTO tb_produtos(nome, quantidade, datavalidade, preco) 
values ("tomate",100, "2023-12-15", 8.00);
INSERT INTO tb_produtos(nome, quantidade, datavalidade, preco) 
values ("maçã",20, "2023-12-15", 5.00);
INSERT INTO tb_produtos(nome, quantidade, datavalidade, preco) 
values ("laranja",50, "2023-12-15", 10.00);
INSERT INTO tb_produtos(nome, quantidade, datavalidade, preco) 
values ("banana",200, "2023-12-15", 12.00);
INSERT INTO tb_produtos(nome, quantidade, datavalidade, preco) 
values ("uva",1200, "2023-12-15", 30.00);
INSERT INTO tb_produtos(nome, quantidade, datavalidade, preco) 
values ("pêra",500, "2023-12-15", 2.99);

create table tb_categorias(
	id bigint auto_increment primary key,
    descricao varchar(255) not null
);

INSERT INTO tb_categorias (descricao)
VALUES ("Frutas");
INSERT INTO tb_categorias (descricao)
VALUES ("Verduras");
INSERT INTO tb_categorias (descricao)
VALUES ("Legumes");
INSERT INTO tb_categorias (descricao)
VALUES ("Temperos");
INSERT INTO tb_categorias (descricao)
VALUES ("Ovos");
INSERT INTO tb_categorias (descricao)
VALUES ('Outros');

select * from tb_produtos;
select * from tb_categorias;

alter table tb_produtos add categoriaid bigint;
alter table tb_produtos add constraint fk_produtos_categorias foreign key (categoriaid) references tb_categorias (id);

UPDATE tb_produtos SET categoriaid = 3 WHERE id = 1;
UPDATE tb_produtos SET categoriaid = 1 WHERE id = 2;
UPDATE tb_produtos SET categoriaid = 1 WHERE id = 3;
UPDATE tb_produtos SET categoriaid = 1 WHERE id = 4;
UPDATE tb_produtos SET categoriaid = 1 WHERE id = 5;
UPDATE tb_produtos SET categoriaid = 1 WHERE id = 6;

INSERT INTO tb_produtos (nome, quantidade, datavalidade, preco, categoriaid)
VALUES ("Batata doce", 2000, "2022-03-09", 10.00, 3);
INSERT INTO tb_produtos (nome, quantidade, datavalidade, preco, categoriaid)
VALUES ("Alface", 300, "2022-03-10", 7.00, 2);
INSERT INTO tb_produtos (nome, quantidade, datavalidade, preco, categoriaid)
VALUES ("Cebola", 1020, "2022-03-08", 5.00, 3);
INSERT INTO tb_produtos (nome, quantidade, datavalidade, preco, categoriaid)
VALUES("Ovo Branco", 1000, "2022-03-07", 15.00, 5);
INSERT INTO tb_produtos (nome, quantidade, datavalidade, preco, categoriaid)
VALUES("Agrião", 1500, "2022-03-06", 3.00, 2);
INSERT INTO tb_produtos (nome, quantidade, datavalidade, preco, categoriaid)
VALUES("Cenoura", 1800, "2022-03-09", 3.50, 3);
INSERT INTO tb_produtos (nome, quantidade, datavalidade, preco, categoriaid)
VALUES ("Pimenta", 1100, "2022-03-15", 10.00, 4);
INSERT INTO tb_produtos (nome, quantidade, datavalidade, preco, categoriaid)
VALUES ("Alecrim", 130, "2022-03-10", 5.00, 4);
INSERT INTO tb_produtos (nome, quantidade, datavalidade, preco, categoriaid)
VALUES ("Manga", 200, "2022-03-07", 5.49, 1);
INSERT INTO tb_produtos (nome, quantidade, datavalidade, preco, categoriaid)
VALUES ("Couve", 100, "2022-03-12", 1.50, 2);
INSERT INTO tb_produtos (nome, quantidade, datavalidade, preco, categoriaid)
VALUES("Rabanete", 1200, "2022-03-15", 13.00, 3);
INSERT INTO tb_produtos (nome, quantidade, datavalidade, preco, categoriaid)
VALUES ("Grapefruit", 3000, "2022-03-13", 50.00, 1);
INSERT INTO tb_produtos (nome, quantidade, preco)
VALUES("Sacola Cinza", 1118, 0.50);
INSERT INTO tb_produtos (nome, quantidade, preco)
VALUES("Sacola Verde", 1118, 0.50);

select * from tb_produtos order by nome asc;
select * from tb_produtos order by nome desc;
select * from tb_produtos order by nome, preco asc;
select * from tb_produtos where preco in (5.00, 10.00, 15.00);
select * from tb_produtos where preco between 5.00 and 15.00;
select * from tb_produtos where nome like "%ra%";
select avg(preco) as media from tb_produtos;

select nome, preco, quantidade, tb_categorias.descricao from tb_produtos inner join tb_categorias on tb_produtos.categoriaid = tb_categorias.id;
select nome, preco, quantidade, tb_categorias.descricao from tb_produtos left join tb_categorias on tb_produtos.categoriaid = tb_categorias.id;
select nome, preco, quantidade, tb_categorias.descricao from tb_produtos right join tb_categorias on tb_produtos.categoriaid = tb_categorias.id;

select tb_categorias.descricao avg(preco) Preço_Médio from tb_produtos inner join tb_categorias on tb_produtos.categoriaid = tb_produtos.categoriaid group by tb_categorias.descricao;