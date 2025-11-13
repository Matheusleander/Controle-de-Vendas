create database controle_vendas;
USE controle_vendas;

create table Produtos(
	idProduto int auto_increment primary key,
    nome varchar(45),
    preco decimal(10,2),
    categoria varchar(45),
    descricao varchar(200)
);

create table Vendedores(
	idVendedor int auto_increment primary key,
    nome varchar(45),
    email varchar(50),
    senha varchar(15)
);

CREATE TABLE vendas (
	idVendas INT AUTO_INCREMENT PRIMARY KEY,
	id_vendedor INT,
	id_produto INT,
	quantidade INT,
	valor_total DECIMAL(10,2),
	data_venda DATE,
	foreign key (id_vendedor) references vendedores(idVendedor),
	foreign key (id_produto) references produtos(idProduto)
);


create table Lista(
	idLista int auto_increment primary key,
    id_valortotal decimal(10,2),
	id_datavenda date,
    nome varchar(45),
    quantidade int
);