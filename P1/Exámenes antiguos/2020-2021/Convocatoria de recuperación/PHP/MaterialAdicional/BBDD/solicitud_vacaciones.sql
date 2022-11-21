-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-06-2021 a las 01:51:50
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `solicitud_vacaciones`
--
CREATE DATABASE IF NOT EXISTS `solicitud_vacaciones` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `solicitud_vacaciones`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

CREATE TABLE `empleado` (
  `id` int(11) NOT NULL,
  `contrasenya` varchar(255) COLLATE utf8_bin NOT NULL,
  `nombreCompleto` varchar(300) COLLATE utf8_bin NOT NULL,
  `esAdministrador` tinyint(1) NOT NULL DEFAULT 0,
  `vacacionesDisponibles` int(2) NOT NULL DEFAULT 22
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `empleado`
--

INSERT INTO `empleado` (`id`, `contrasenya`, `nombreCompleto`, `esAdministrador`, `vacacionesDisponibles`) VALUES
(101, '$2y$10$cvT8BNNt8lJ35UcgJYwMEehEE/sTAydrwOjN/srmzWRWnOh28r9eq', 'Alfredo Romero Herrera', 0, 22),
(102, '$2y$10$cvT8BNNt8lJ35UcgJYwMEehEE/sTAydrwOjN/srmzWRWnOh28r9eq', 'Carolina Navarro Sarmiento', 0, 22),
(103, '$2y$10$cvT8BNNt8lJ35UcgJYwMEehEE/sTAydrwOjN/srmzWRWnOh28r9eq', 'Fernando Gutierrez Amador', 1, 22),
(104, '$2y$10$cvT8BNNt8lJ35UcgJYwMEehEE/sTAydrwOjN/srmzWRWnOh28r9eq', 'Manuela Aguilar Fuentes', 1, 4),
(105, '$2y$10$cvT8BNNt8lJ35UcgJYwMEehEE/sTAydrwOjN/srmzWRWnOh28r9eq', 'David Meca Bordas', 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vacaciones`
--

CREATE TABLE `vacaciones` (
  `id` int(11) NOT NULL,
  `idEmpleado` int(11) NOT NULL,
  `inicio` varchar(11) COLLATE utf8_bin NOT NULL,
  `fin` varchar(11) COLLATE utf8_bin NOT NULL,
  `numeroDias` int(11) NOT NULL,
  `estado` varchar(20) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `vacaciones`
--

INSERT INTO `vacaciones` (`id`, `idEmpleado`, `inicio`, `fin`, `numeroDias`, `estado`) VALUES
(3, 104, '01/06/2021', '06/06/2021', 4, 'Aprobado'),
(4, 105, '04/05/2021', '02/06/2021', 22, 'Aprobado'),
(6, 104, '01/08/2021', '19/08/2021', 14, 'Aprobado'),
(7, 101, '01/07/2021', '30/07/2021', 22, 'Solicitado'),
(8, 103, '02/01/2021', '29/01/2021', 20, 'Cancelado'),
(9, 103, '02/04/2021', '29/04/2021', 20, 'Solicitado'),
(10, 102, '06/05/2021', '30/05/2021', 17, 'Rechazado'),
(11, 102, '02/05/2021', '03/05/2021', 1, 'Solicitado'),
(12, 104, '15/06/2021', '17/06/2021', 3, 'Solicitado');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `vacaciones`
--
ALTER TABLE `vacaciones`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `vacaciones`
--
ALTER TABLE `vacaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
