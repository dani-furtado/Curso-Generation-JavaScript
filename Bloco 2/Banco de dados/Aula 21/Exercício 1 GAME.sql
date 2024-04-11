create database db_generation_game_online;

use db_generation_game_online;

create table tb_personagens (
	id bigint auto_increment,
    nome varchar(255) not null,
	origem varchar(255) not null,
    ataque int not null,
    defesa int not null,
    primary key(id)
);

create table tb_classes (
	id bigint auto_increment,
    vampiro varchar(255) not null,
    lobisomem varchar(255) not null,
    primary key(id)
);

select * from tb_personagens;	
select * from tb_classes;

alter table tb_personagens add categoriaid bigint;
alter table tb_personagens add constraint fk_classes foreign key (categoriaid) references tb_classes(id);

insert into tb_classes(vampiro, lobisomem) values ("Vampiro mestre", "Vampiro mestre");
insert into tb_classes(vampiro, lobisomem) values ("Vampiro guardião", "Lobisomem guardião");
insert into tb_classes(vampiro, lobisomem) values ("Vampiro atacante", "Lobisomem atacante");
insert into tb_classes(vampiro, lobisomem) values ("Vampiro sábio", "Lobisomem sábio");
insert into tb_classes(vampiro, lobisomem) values ("Vampiro maluco", "Lobisomem maluco");

update tb_classes set lobisomem = "Lobisomem mestre" where id = 1;

insert into tb_personagens(nome, origem, ataque, defesa, categoriaid) values ("Eivor", "Noruega", 1500, 1500, 1);
insert into tb_personagens(nome, origem, ataque, defesa, categoriaid) values ("Kassandra", "Cefalônia", 3000, 1500, 2);
insert into tb_personagens(nome, origem, ataque, defesa, categoriaid) values ("Randvi", "Noruega", 2000, 4000, 3);
insert into tb_personagens(nome, origem, ataque, defesa, categoriaid) values ("Edward", "Inglaterra", 2100, 2500, 4);
insert into tb_personagens(nome, origem, ataque, defesa, categoriaid) values ("Haytham ", "Inglaterra", 4000, 1500, 5);
insert into tb_personagens(nome, origem, ataque, defesa, categoriaid) values ("Shay", "Cefalônia", 3650, 1000, 5);
insert into tb_personagens(nome, origem, ataque, defesa, categoriaid) values ("Aveline", "Noruega", 2600, 4000, 2);
insert into tb_personagens(nome, origem, ataque, defesa, categoriaid) values ("Jacob", "Inglaterra", 6000, 2100, 3);

select * from tb_personagens where ataque > 2000;
select * from tb_personagens where defesa between 1000 and 2000;
select * from tb_personagens where nome like "%c%";

select nome, origem, ataque, defesa, categoriaid from tb_personagens inner join tb_classes on tb_personagens.categoriaid = tb_classes.id;
select nome, origem, ataque, defesa, categoriaid from tb_personagens inner join tb_classes on tb_personagens.categoriaid = tb_classes.id where categoriaid = 5;