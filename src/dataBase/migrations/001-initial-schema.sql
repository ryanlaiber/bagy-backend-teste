-- Up

CREATE TABLE "clientes" (
	"id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"nome"	TEXT NOT NULL,
	"email"	TEXT NOT NULL UNIQUE,
	"cpf"	TEXT NOT NULL UNIQUE,
	"dataNasc"	TEXT NOT NULL,
	"rua"	TEXT NOT NULL,
	"bairro"	TEXT NOT NULL,
	"cidade"	TEXT NOT NULL,
	"estado"	TEXT NOT NULL,
	"pais"	TEXT NOT NULL,
	"cep"	TEXT NOT NULL,
	"numero"	TEXT NOT NULL
);

CREATE TABLE "produtos" (
	"id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"nome"	TEXT NOT NULL UNIQUE,
	"imagem"	TEXT NOT NULL,
	"descricao"	TEXT NOT NULL,
	"peso"	NUMERIC NOT NULL,
	"preco"	NUMERIC NOT NULL,
	"estoque"	INTEGER NOT NULL
);

CREATE TABLE "pedidos" (
	"id"	INTEGER NOT NULL UNIQUE,
	"dataCriacao"	TEXT,
	"parcelas"	INTEGER NOT NULL,
	"compradorId"	INTEGER NOT NULL,
	"status"	TEXT NOT NULL,
	PRIMARY KEY("id")
);

CREATE TABLE "historicoPedidos" (
	"id"	INTEGER NOT NULL UNIQUE,
  "quantidade" INTEGER NOT NULL,
	"produtoId"	INTEGER NOT NULL,
	"compradorId" INTEGER NOT NULL,
	"pedidoId"	INTEGER NOT NULL,
	PRIMARY KEY("id")
);

CREATE TRIGGER insereData AFTER INSERT   
ON pedidos
BEGIN  
UPDATE pedidos
SET
dataCriacao = datetime('now')
WHERE id = NEW.id;
END;

CREATE TRIGGER updateProdutos AFTER INSERT   
ON historicoPedidos
BEGIN  
UPDATE produtos
SET
estoque = produtos.estoque - NEW.quantidade
WHERE produtos.id = NEW.produtoId;
END;

CREATE TRIGGER deleteCliente BEFORE DELETE   
ON clientes
BEGIN  
DELETE FROM pedidos
WHERE pedidos.compradorId = OLD.id;
DELETE FROM historicoPedidos
WHERE historicoPedidos.compradorId = OLD.id;
END;

-- Down

DROP TABLE clientes;
DROP TABLE produtos;
DROP TABLE pedidos;
DROP TABLE historicoPedidos;