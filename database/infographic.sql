-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 25, 2019 at 10:28 PM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `infographic`
--

-- --------------------------------------------------------

--
-- Table structure for table `stats`
--

CREATE TABLE `stats` (
  `id` tinyint(4) NOT NULL,
  `movietitle` varchar(100) DEFAULT NULL,
  `voice` varchar(500) DEFAULT NULL,
  `age` varchar(100) DEFAULT NULL,
  `animal` varchar(500) NOT NULL,
  `revenue` varchar(800) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `stats`
--

INSERT INTO `stats` (`id`, `movietitle`, `voice`, `age`, `animal`, `revenue`) VALUES
(1, 'Beauty & The Beast - 1919', 'Paige O\'Hara', '17 Years Old', 'Philippe', '$722,981,785'),
(2, 'Cinderella - 1950', 'Jennifer Hale', '19 Years Old', 'Jaq & Gus', '$294,292,502'),
(3, 'Sleeping Beauty - 1959', 'Mary Costa', '16 Years Old', 'Woodland Creatures', '$51,600,000'),
(4, 'Snow White & The Seven Dwarfs - 19733', 'Adriana Caselotti', '14 Years Old', 'Woodland Creatures ', '$184,925,486'),
(5, 'The Little Mermaid - 1989', 'Jodi Bennson', '16 Years Old', 'Flounder', '$111,543,479'),
(6, 'Aladdin - 1992', 'Lea Solanga', '15 Years Old', 'Rajah', '$217,350,219'),
(7, 'Pochahontas - 1995', 'Voice by both Ireene Bedard (Voice) & Judy Kuhn (Singing)', '18 Years Old', 'Meeko', '$141,579,773'),
(8, 'Mulan - 1998', 'Voiced by both Ming-Na Wen (Voice) & Lea Salonga (Singing)', '16 Years Old', 'Mushu', '$200,821,936'),
(9, 'The Princess & The Frog - 2009', 'Anika Noni Rose', '19 Years Old', 'Louis', '$104,400,899'),
(10, 'Tangled - 2010', 'Mandy Moree', '18 Years Old', 'Pascal', '$200,821,936'),
(11, 'Brave - 2012', 'Voiced by both Kelly MacDonald (Voice) & Julie Fowlis (Singing) ', '16 Years Old', 'Angus', '$237,283,207'),
(12, 'Moana - 2016', 'Auli`i Cravalho', '16 Years Old', 'Pua & Hei Hei', '$248,757,044');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `stats`
--
ALTER TABLE `stats`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `stats`
--
ALTER TABLE `stats`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
