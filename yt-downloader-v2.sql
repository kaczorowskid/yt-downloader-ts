-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 14 Lis 2021, 12:04
-- Wersja serwera: 10.4.14-MariaDB
-- Wersja PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `yt-downloader-v2`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `data`
--

CREATE TABLE `data` (
  `id` int(11) NOT NULL,
  `folder_id` int(11) NOT NULL,
  `url` text NOT NULL,
  `thumbnail` text NOT NULL,
  `title` text NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `data`
--

INSERT INTO `data` (`id`, `folder_id`, `url`, `thumbnail`, `title`, `createdAt`, `updatedAt`) VALUES
(102, 114, 'https://www.youtube.com/watch?v=m2uTFF_3MaA', 'https://i.ytimg.com/vi/m2uTFF_3MaA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqrxnHJ3VkhbHHHWjlHCWunKlKSg', 'The Beatles - Yellow Submarine', '2021-11-14', '2021-11-14'),
(103, 114, 'https://www.youtube.com/watch?v=2Q_ZzBGPdqE', 'https://i.ytimg.com/vi/2Q_ZzBGPdqE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0m7YsuX2y4jfGvVuez1_SJx6ruA', 'The Beatles - Help!', '2021-11-14', '2021-11-14'),
(105, 112, 'https://www.youtube.com/watch?v=Z3w5gVM_4y8', 'https://i.ytimg.com/vi/Z3w5gVM_4y8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEyyaAsHu1uYuPQWCLIbfeM8zdTA', 'Queen - I Want To Break Free (Soundtrack Mix)', '2021-11-14', '2021-11-14'),
(106, 112, 'https://www.youtube.com/watch?v=-tJYN-eG1zk', 'https://i.ytimg.com/vi/-tJYN-eG1zk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLClUzRgg7Qr2DylZ8MGOdZbW_OBdA', 'Queen - We Will Rock You (Official Video)', '2021-11-14', '2021-11-14'),
(107, 112, 'https://www.youtube.com/watch?v=HgzGwKwLmgM', 'https://i.ytimg.com/vi/HgzGwKwLmgM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAM8UqmFmnK5DyvGevPbHHZU_blAQ', 'Queen - Don\'t Stop Me Now (Official Video)', '2021-11-14', '2021-11-14');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `folders`
--

CREATE TABLE `folders` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `folders`
--

INSERT INTO `folders` (`id`, `title`, `user_id`, `createdAt`, `updatedAt`) VALUES
(112, 'queen', 32, '2021-11-14', '2021-11-14'),
(114, 'The Beatles ', 32, '2021-11-14', '2021-11-14');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `active` tinyint(1) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `active`, `createdAt`, `updatedAt`) VALUES
(32, 'admin@admin.pl', '$2b$10$tx9yH/g3YL9BPGAkyqEdIOlciljh4HULazHkdJuE57lAjCdaHwc3K', 1, '2021-11-14', '2021-11-14');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `data`
--
ALTER TABLE `data`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `folders`
--
ALTER TABLE `folders`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`) USING HASH;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `data`
--
ALTER TABLE `data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;

--
-- AUTO_INCREMENT dla tabeli `folders`
--
ALTER TABLE `folders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
