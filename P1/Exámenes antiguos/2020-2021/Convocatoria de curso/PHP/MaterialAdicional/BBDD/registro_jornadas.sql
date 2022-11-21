-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-12-2020 a las 20:56:45
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `registro_jornadas`
--
CREATE DATABASE IF NOT EXISTS `registro_jornadas` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `registro_jornadas`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jornadas`
--

CREATE TABLE `jornadas` (
  `id` int(11) NOT NULL,
  `ip_origen` varchar(20) COLLATE utf8_bin NOT NULL,
  `email_usuario` varchar(150) COLLATE utf8_bin NOT NULL,
  `dia` varchar(11) COLLATE utf8_bin NOT NULL,
  `horas` varchar(10) COLLATE utf8_bin NOT NULL,
  `concepto` varchar(500) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `jornadas`
--

INSERT INTO `jornadas` (`id`, `ip_origen`, `email_usuario`, `dia`, `horas`, `concepto`) VALUES
(1, '::1', 'ramon.ramirez@equisystems.com', '30/11/2020', '8', 'Tareas de mantenimiento semanal'),
(2, '::1', 'ramon.ramirez@equisystems.com', '01/12/2020', '8', 'Trabajos varios solicitados por superiores'),
(3, '::1', 'ramon.ramirez@equisystems.com', '02/12/2020', '8', 'Asistencia a curso de proveedor'),
(4, '::1', 'ramon.ramirez@equisystems.com', '03/12/2020', '8', 'Montaje instalaciones para curso'),
(5, '::1', 'ramon.ramirez@equisystems.com', '04/12/2020', '8', 'Reviso instalaciones con supervisor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jornadas_borradas`
--

CREATE TABLE `jornadas_borradas` (
  `id` int(11) NOT NULL,
  `ip_origen` varchar(20) COLLATE utf8_bin NOT NULL,
  `email_usuario` varchar(150) COLLATE utf8_bin NOT NULL,
  `dia` varchar(11) COLLATE utf8_bin NOT NULL,
  `horas` varchar(10) COLLATE utf8_bin NOT NULL,
  `concepto` varchar(500) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `jornadas_borradas`
--

INSERT INTO `jornadas_borradas` (`id`, `ip_origen`, `email_usuario`, `dia`, `horas`, `concepto`) VALUES
(8, '::1', 'ramon.ramirez@equisystems.com', '05/12/2020', '4', 'Guardias Sabado'),
(9, '::1', 'ramon.ramirez@equisystems.com', '06/12/2020', '3', 'Guardias Domingo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `jornadas`
--
ALTER TABLE `jornadas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `jornadas_borradas`
--
ALTER TABLE `jornadas_borradas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `jornadas`
--
ALTER TABLE `jornadas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
