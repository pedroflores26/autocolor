-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 15/04/2026 às 22:11
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `autocolor final`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `cores`
--

CREATE TABLE `cores` (
  `id` int(11) NOT NULL,
  `modelo_id` int(11) NOT NULL,
  `ano` varchar(20) DEFAULT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `hex` varchar(7) DEFAULT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  `codigo_fabrica` varchar(20) DEFAULT NULL,
  `descricao` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `cores`
--

INSERT INTO `cores` (`id`, `modelo_id`, `ano`, `nome`, `hex`, `tipo`, `codigo_fabrica`, `descricao`) VALUES
(1, 1, '1960', 'Azul Geleira', '#CFE4F2', 'Sólido', 'VW001', 'Azul pastel clássico'),
(2, 2, '1960', 'Azul Geleira', '#CFE4F2', 'Sólido', 'VW001', 'Muito usado em Kombi'),
(3, 1, '1970', 'Branco Lótus', '#F5F5F5', 'Sólido', 'VW002', 'Branco clássico VW'),
(4, 1, '1970', 'Vermelho Coral', '#C94A3F', 'Sólido', 'VW003', 'Tom telha antigo'),
(5, 3, '1980', 'Bege Ipanema', '#D6C3A3', 'Sólido', 'VW004', 'Cor clássica da linha BX'),
(6, 3, '1980', 'Verde Cristal', '#CFE8D5', 'Metálico', 'VW005', 'Verde claro elegante'),
(7, 3, '1990', 'Vermelho Tornado', '#B11226', 'Sólido', 'VW006', 'Vermelho esportivo'),
(8, 4, '1990', 'Azul Mônaco', '#1C2F5A', 'Metálico', 'VW007', 'Azul escuro sofisticado'),
(9, 4, '2000', 'Prata Reflex', '#C0C0C0', 'Metálico', 'VW008', 'Prata mais famoso'),
(10, 5, '2000', 'Azul Indigo', '#2F3E8F', 'Metálico', 'VW009', 'Azul com reflexo roxo'),
(11, 7, '2020', 'Cinza Moonstone', '#8A8D91', 'Sólido', 'VW010', 'Cinza premium'),
(12, 7, '2022', 'Vermelho Sunset', '#D33A2C', 'Perolizado', 'VW011', 'Vermelho moderno'),
(13, 8, '2021', 'Bronze Namíbia', '#8C6B3F', 'Metálico', 'VW012', 'Cor lançamento'),
(14, 9, '2021', 'Bege Mojave', '#C2A77D', 'Metálico', 'VW013', 'Tom areia'),
(15, 10, '2021', 'Cinza Platinum', '#6E6E6E', 'Metálico', 'VW014', 'Cinza moderno');

-- --------------------------------------------------------

--
-- Estrutura para tabela `marcas`
--

CREATE TABLE `marcas` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `marcas`
--

INSERT INTO `marcas` (`id`, `nome`) VALUES
(1, 'Volkswagen');

-- --------------------------------------------------------

--
-- Estrutura para tabela `modelos`
--

CREATE TABLE `modelos` (
  `id` int(11) NOT NULL,
  `marca_id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `modelos`
--

INSERT INTO `modelos` (`id`, `marca_id`, `nome`) VALUES
(1, 1, 'Fusca'),
(2, 1, 'Kombi'),
(3, 1, 'Gol'),
(4, 1, 'Golf'),
(5, 1, 'Polo'),
(6, 1, 'Jetta'),
(7, 1, 'Nivus'),
(8, 1, 'T-Cross'),
(9, 1, 'Taos'),
(10, 1, 'Amarok');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `cores`
--
ALTER TABLE `cores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `modelo_id` (`modelo_id`);

--
-- Índices de tabela `marcas`
--
ALTER TABLE `marcas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nome` (`nome`);

--
-- Índices de tabela `modelos`
--
ALTER TABLE `modelos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `marca_id` (`marca_id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cores`
--
ALTER TABLE `cores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `marcas`
--
ALTER TABLE `marcas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `modelos`
--
ALTER TABLE `modelos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `cores`
--
ALTER TABLE `cores`
  ADD CONSTRAINT `cores_ibfk_1` FOREIGN KEY (`modelo_id`) REFERENCES `modelos` (`id`) ON DELETE CASCADE;

--
-- Restrições para tabelas `modelos`
--
ALTER TABLE `modelos`
  ADD CONSTRAINT `modelos_ibfk_1` FOREIGN KEY (`marca_id`) REFERENCES `marcas` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
