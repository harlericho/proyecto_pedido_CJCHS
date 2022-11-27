CREATE DATABASE `db_pedidos`;
USE `db_pedidos`;
DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_actualizar` (IN `codigoPedido` VARCHAR(6), IN `fechaPedido` DATE, IN `idPedidocliente` INT, IN `idPedido` INT)   BEGIN
UPDATE pedido SET codigo=codigoPedido,fecha=fechaPedido,id_pedido_cliente=idPedidoCliente WHERE id=idPedido;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crear` (IN `codigoPedido` VARCHAR(6), IN `fechaPedido` DATE, IN `idPedidoCliente` INT)   BEGIN
INSERT INTO pedido (codigo,fecha,id_pedido_cliente) VALUES(codigoPedido,fechaPedido,idPedidoCliente);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_eliminar` (IN `idPedido` INT)   BEGIN
DELETE FROM pedido WHERE id=idPedido;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_listado` ()   BEGIN
SELECT p.id, p.codigo, p.fecha, c.nombres FROM pedido p JOIN cliente c ON p.id_pedido_cliente =c.id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_listar` (IN `idPedido` INT)   BEGIN
SELECT * FROM pedido WHERE id=idPedido;
END$$

DELIMITER ;

CREATE TABLE `cliente` (
  `id` int NOT NULL,
  `dni` varchar(15) NOT NULL,
  `nombres` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cliente`
--

INSERT INTO `cliente` (`id`, `dni`, `nombres`) VALUES
(1, '1001001001', 'carlos'),
(2, '2002002002', 'mary'),
(3, '3003003003', 'liz'),
(4, '4004004004', 'lorena'),
(5, '5005005005', 'pamela'),
(6, '6006006006', 'jorge'),
(7, '7007007007', 'daniel'),
(8, '8008008008', 'viviana'),
(9, '9009009009', 'camila');


-- --------------------------------------------------------

--
-- Table structure for table `pedido`
--

CREATE TABLE `pedido` (
  `id` int NOT NULL,
  `codigo` varchar(6) NOT NULL,
  `fecha` date NOT NULL,
  `id_pedido_cliente` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pedido`
--

INSERT INTO `pedido` (`id`, `codigo`, `fecha`, `id_pedido_cliente`) VALUES
(1, '001', '2022-11-22', 1),
(2, '002', '2022-11-22', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT for table `pedido`
--
ALTER TABLE `pedido`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
COMMIT;
