CREATE DATABASE db_pedidos;
USE db_pedidos;

DROP TABLE IF EXISTS cliente;
DROP TABLE IF EXISTS pedido;


CREATE TABLE cliente (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
dni VARCHAR(15) NOT NULL,
nombres VARCHAR(50) NOT NULL);

CREATE TABLE pedido (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
codigo VARCHAR(6) NOT NULL,
fecha DATE NOT NULL,
id_pedido_cliente INT NOT NULL);

ALTER TABLE pedido ADD CONSTRAINT pedido_id_pedido_cliente_cliente_id FOREIGN KEY (id_pedido_cliente) REFERENCES cliente(id);

INSERT INTO cliente (id, dni, nombres) VALUES
(1, '1001001001', 'carlos'),
(2, '2002002002', 'mary');

INSERT INTO pedido (id, codigo, fecha, id_pedido_cliente) VALUES
(1, '001', '2022-11-22', 1),
(2, '003', '2022-11-22', 2);
