-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-11-2022 a las 16:36:11
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `login`
--
CREATE DATABASE IF NOT EXISTS `login` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `login`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(6) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `usuario` varchar(15) NOT NULL,
  `contrasenya` varchar(256) NOT NULL,
  `fechaRegistro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `nombre`, `usuario`, `contrasenya`, `fechaRegistro`) VALUES
(16, 'jose', 'josea', '$2y$10$gg97XTD2ZQpEVNvqkkJ/oO3cAi300O.g4/J/n0XeEdAtnGZgKHhoG', '2022-11-05'),
(17, 'pepe', 'pepe', '$2y$10$Es9syFOb3xJGuI0YqH/m7.3uXYRyGMzh.f4iUMBP6Wy6ywkVUu1fq', '2022-11-05'),
(18, 'nicola', 'tesla', '$2y$10$gKtHKqblloXMCSIH0SxbTuq.yIlry4Dx7GppRnNUcMLV9pCeLfJIq', '2022-11-05'),
(19, 'juan', 'qq', '$2y$10$L.dl538Zswni/NutJ0egyO7UiITciRMhsfXnsogdzGIxF7eLS71PK', '2022-11-06');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
