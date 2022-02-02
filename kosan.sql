-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 15 Jan 2022 pada 16.41
-- Versi server: 10.4.21-MariaDB
-- Versi PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kosan`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `foto_kos`
--

CREATE TABLE `foto_kos` (
  `ID_FOTO` int(10) NOT NULL,
  `ID_KOS` int(10) NOT NULL,
  `NAMA_FOTO` varchar(200) NOT NULL,
  `DESKRIPSI_FOTO` text NOT NULL,
  `STATUS_FOTO` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `foto_kos`
--

INSERT INTO `foto_kos` (`ID_FOTO`, `ID_KOS`, `NAMA_FOTO`, `DESKRIPSI_FOTO`, `STATUS_FOTO`) VALUES
(1, 1, 'location_1.jpg', 'Kos Pak Choliq Foto 1', 'aktif'),
(2, 1, 'location_1.jpg', 'Kos Pak Choliq Foto 2', 'aktif'),
(3, 1, 'location_1.jpg', 'Kos Pak Choliq Foto 3', 'aktif'),
(4, 2, 'location_1.jpg', 'Kos Pak Ju Foto 1', 'aktif'),
(5, 4, 'location_1.jpg', 'Kos Pak Su Foto 1', 'aktif'),
(6, 3, 'location_1.jpg', 'Kos Pak Breng Foto 1', 'aktif'),
(7, 5, 'location_1.jpg', 'Kos Pak To Foto 1', 'aktif'),
(8, 6, 'location_1.jpg', 'Kos Bu Budi Foto 1', 'aktif'),
(9, 7, 'location_1.jpg', 'Kos Putri Murah Foto 1', 'aktif'),
(10, 8, 'location_1.jpg', 'Kos Bupati foto 1', 'aktif'),
(11, 9, 'location_1.jpg', 'Kos Pak Su foto 1', 'aktif'),
(12, 10, 'location_1.jpg', 'Kos Putri Surabaya Mayjend foto 1', 'aktif'),
(13, 11, 'location_1.jpg', 'Kos Putri Surabaya Mayjend foto 1', 'aktif');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kos`
--

CREATE TABLE `kos` (
  `ID_KOS` int(10) NOT NULL,
  `NAMA_KOS` varchar(200) NOT NULL,
  `KATEGORI_KOS` varchar(50) NOT NULL,
  `DESKRIPSI_KOS` text NOT NULL,
  `KEL_KOS` varchar(50) NOT NULL,
  `KEC_KOS` varchar(50) NOT NULL,
  `KOTA_KOS` varchar(50) NOT NULL,
  `LAT_KOS` varchar(30) NOT NULL,
  `LNG_KOS` varchar(30) NOT NULL,
  `SISA_KOS` varchar(20) NOT NULL,
  `STATUS_KOS` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `kos`
--

INSERT INTO `kos` (`ID_KOS`, `NAMA_KOS`, `KATEGORI_KOS`, `DESKRIPSI_KOS`, `KEL_KOS`, `KEC_KOS`, `KOTA_KOS`, `LAT_KOS`, `LNG_KOS`, `SISA_KOS`, `STATUS_KOS`) VALUES
(1, 'Kost Pak Choliq', 'Kost', 'Kos Pak Choliq dekat dengan Mall, Tempat Perbelanjaan, dan Restoran.', 'Pakis', 'Sawahan', 'Surabaya', '-7.291099', '112.729083', '5 Tersisa', 'aktif'),
(2, 'Kost Pak Ju', 'Kost', 'Kos Pak Ju dekat dengan Mall, Tempat Perbelanjaan, dan Restoran.', 'Pakis', 'Sawahan', 'Surabaya', '-7.2903119', '112.7290739', '4 Tersisa', 'aktif'),
(3, 'Kost Pak Breng', 'Kost', 'Kos Pak Breng dekat dengan Mall, Tempat Perbelanjaan, dan Restoran.', 'Darmo', 'Wonokromo', 'Surabaya', '-7.295749', '112.739639', '2 Tersisa', 'aktif'),
(4, 'Kost Pak Su', 'Kost', 'Kos Pak Su dekat dengan Mall, Tempat Perbelanjaan, dan Restoran.', 'Pakis', 'Sawahan', 'Surabaya', '-7.291280', '112.728951', '5 Tersisa', 'aktif'),
(5, 'Kost Pak To', 'Kost', 'Kos Pak To dekat dengan Mall, Tempat Perbelanjaan, dan Restoran.', 'Pakis', 'Sawahan', 'Surabaya', '-7.2903496', '112.7268995', '10 Tersisa', 'aktif'),
(6, 'Kost Bu Budi', 'Kost', 'Kos Bu Budi dekat dengan Mall, Tempat Perbelanjaan, dan Restoran.', 'Pakis', 'Sawahan', 'Surabaya', '-7.2917419', '112.726734', '1 Tersisa', 'aktif'),
(7, 'Kost Putri Murah', 'Kost', 'Kos Putri Murah dekat dengan Mall, Tempat Perbelanjaan, dan Restoran.', 'Sawunggaling', 'Wonokromo', 'Surabaya', '-7.2933166', '112.7253787', '2 Tersisa', 'aktif'),
(8, 'Kost Bupati', 'Kost', 'Kos Bupati dekat dengan Mall, Tempat Perbelanjaan, dan Restoran.', 'Pakis', 'Sawahan', 'Surabaya', '-7.2879624', '112.7259828', '5 Tersisa', 'aktif'),
(9, 'Rumah Kos\n', 'Kost', 'Rumah kos\ndekat dengan Mall, Tempat Perbelanjaan, dan Restoran.', 'Pakis', 'Sawahan', 'Surabaya', '-7.2915788', '112.7268009', '3 Tersisa', 'aktif'),
(10, 'Kost Putri Surabaya Mayjend\r\n', 'Kost', 'Kost Putri Surabaya Mayjend dekat dengan Mall, Tempat Perbelanjaan, dan Restoran.', 'Sawunggaling', 'Wonokromo', 'Surabaya', '-7.2929379', '112.7258435', '1 Tersisa', 'aktif'),
(11, 'Kost Putri Surabaya Mayjend\r\n', 'Kost', 'Kost Putri Surabaya Mayjend dekat dengan Mall, Tempat Perbelanjaan, dan Restoran.', 'Sawunggaling', 'Wonokromo', 'Surabaya', '-7.2929379', '112.7258435', '1 Tersisa', 'aktif');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sewa_kos`
--

CREATE TABLE `sewa_kos` (
  `ID_SEWAKOS` int(10) NOT NULL,
  `ID_KOS` int(10) DEFAULT NULL,
  `HARGA_SEWAKOS` float(9,0) NOT NULL,
  `TYPE_SEWAKOS` varchar(20) NOT NULL,
  `STATUS_SEWAKOS` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `sewa_kos`
--

INSERT INTO `sewa_kos` (`ID_SEWAKOS`, `ID_KOS`, `HARGA_SEWAKOS`, `TYPE_SEWAKOS`, `STATUS_SEWAKOS`) VALUES
(1, 1, 300000, 'murah', 'aktif'),
(2, 1, 550000, 'mahal', 'aktif'),
(3, 1, 400000, 'menengah', 'aktif'),
(4, 2, 400000, 'menengah', 'aktif'),
(5, 3, 300000, 'murah', 'aktif'),
(6, 4, 550000, 'mahal', 'aktif'),
(7, 5, 400000, 'menengah', 'aktif'),
(8, 6, 400000, 'menengah', 'aktif'),
(9, 7, 300000, 'murah', 'aktif'),
(10, 8, 550000, 'mahal', 'aktif'),
(11, 9, 400000, 'menengah', 'aktif'),
(12, 10, 400000, 'menengah', 'aktif'),
(13, 11, 400000, 'menengah', 'aktif');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `foto_kos`
--
ALTER TABLE `foto_kos`
  ADD PRIMARY KEY (`ID_FOTO`),
  ADD KEY `FK_RELATIONSHIP_1` (`ID_KOS`);

--
-- Indeks untuk tabel `kos`
--
ALTER TABLE `kos`
  ADD PRIMARY KEY (`ID_KOS`);

--
-- Indeks untuk tabel `sewa_kos`
--
ALTER TABLE `sewa_kos`
  ADD PRIMARY KEY (`ID_SEWAKOS`),
  ADD KEY `FK_RELATIONSHIP_2` (`ID_KOS`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `foto_kos`
--
ALTER TABLE `foto_kos`
  MODIFY `ID_FOTO` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `kos`
--
ALTER TABLE `kos`
  MODIFY `ID_KOS` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `sewa_kos`
--
ALTER TABLE `sewa_kos`
  MODIFY `ID_SEWAKOS` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `foto_kos`
--
ALTER TABLE `foto_kos`
  ADD CONSTRAINT `FK_RELATIONSHIP_1` FOREIGN KEY (`ID_KOS`) REFERENCES `kos` (`ID_KOS`);

--
-- Ketidakleluasaan untuk tabel `sewa_kos`
--
ALTER TABLE `sewa_kos`
  ADD CONSTRAINT `FK_RELATIONSHIP_2` FOREIGN KEY (`ID_KOS`) REFERENCES `kos` (`ID_KOS`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
