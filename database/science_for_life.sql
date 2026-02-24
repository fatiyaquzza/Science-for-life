-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 22, 2026 at 06:20 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `science_for_life`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_feedback`
--

CREATE TABLE `contact_feedback` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `subject` varchar(200) DEFAULT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_feedback`
--

INSERT INTO `contact_feedback` (`id`, `name`, `email`, `subject`, `message`, `created_at`) VALUES
(1, 'yy', 'y@gmail.com', 'zzz', 'tes', '2026-02-05 14:29:26');

-- --------------------------------------------------------

--
-- Table structure for table `materials`
--

CREATE TABLE `materials` (
  `id` int(11) NOT NULL,
  `sub_module_id` int(11) NOT NULL,
  `description` text DEFAULT NULL,
  `video_url` varchar(255) DEFAULT NULL,
  `file_url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `materials`
--

INSERT INTO `materials` (`id`, `sub_module_id`, `description`, `video_url`, `file_url`, `created_at`) VALUES
(8, 8, 'Bahaya di Balik Skincare dan Kosmetik : Kenapa Gen Z wajib Waspada?\r\n\r\nSiapa di antara kalian yang tidak suka tampil on-point? Mulai dari skincare yang berlapis-lapis sampai makeup yang bikin selfi makin estetik, rasanya kosmetik sudah jadi bagian penting dari gaya hidup kita. Tapi pernahkah kamu berhenti sejenak dan bertanya, “Apa sih sebenarnya yang terkandung dalam produk yang aku pakai setiap hari?”\r\nDi balik kemasan yang cantik, banyak produk kosmetik menyimpan bahan-bahan berbahaya yang bisa mengancam kesehatan kulit bahkan tubuh kita dalam jangka panjang. Memangnya kenapa kita harus khawatir? Karena kulit kita adalah organ terbesar yang bisa menyerap apapun yang kita oleskan di permukaannya. Jadi, apa yang ada di produk kosmetikmu, bisa jadi ada di dalam tubuhmu. \r\nKosmetik telah menjadi kebutuhan penting dalam kehidupn modern, terutama di kalangan wanita yang menginginkan penampilan yang lebih cerah dan menarik. Salah satu produk kosmetik yang popular adalah krim pemutih wajah, yang banyak di pasarkan sebagai Solusi untuk mengatasi berbagai masalah kulit, seperti noda hitam dan hiperpigmentasi (Peran et al., 2024 :511)\r\nKenali bahan-bahan berbahaya yang sering mengintai\r\n\r\n1.	Merkuri\r\nPenjelasan merkuri secara kimia:\r\n- Merkuri dengan simbol kimia Hg dan nomor atom 80, adalah salah satu unsur dalam tabel periodic, tepatnya termasuk dalam golongan logam transisi. Namanya berasal dari Bahasa Yunani , hydrargyrum, yang bearti “perak cair” yang menggambarkan sifat fisiknya yang paling khas.\r\n\r\n\r\n\r\n\r\n\r\nhttps://share.google/images/ubnFYa81h8hmB6weN\r\nGambar Merkuri anorganik\r\n\r\nMerkuri adalah logam berat dengan tingkat toksisitas tinggi yang dapat merusak organ tubuh, termasuk ginjal, saraf dan otak, serta menimbulkan efek kesehatan kronis seperti iritasi kulit, keracunan, dan kanker kulit. Dalam kontesk kosmetik, merkuri yang digunakan sebagai bahan pemutih kulit, memiliki potensi toksik yang siginifikan. Merkuri dalam kosmetik umumnya digunakan dalam bentuk merkuri anorganik, yang terkenal dengan kemampuannya untuk mencerahkan kulit dengan cepat. Namun, meskipun memberikan hasil instan, penggunaan merkuri dalam kosmetik dapat berbahaya dalam jangka panjang. Paparan merkuri yang terus menerus dapat menyebabkan kerusakan pada beberapa organ tubuh, terutama ginjal dan sistem saraf. Efek langsung yang dapat dirasakan konsumen adalah iritasi kulit, ruam, atau perubahan warna kulit. Dalam jangka panjang, merkuri dapart menyebabkan keracunan merkuri yang ditandai dengan gejala seperti tremor, gangguan penglihatan, insomnia dan kerusakan otak. Merkuri dapat terakumulasi dalam tubuh dan menyebabkan kerusakan permanen pada organ-organ vital, terutama ginjal dan otak, karena logam ini mudah diserap melalui kulit dan langsung masuk ke dalam aliran darah (Peran et al., 2024 :511-513).\r\nLidyawati (2022) dalam penelitiannya juga mencatat bahwa kosmetik yang mengandung merkuri dapat menyebabkan pengelupasan kulit dan meningkatkan sensitivitas kulit terhadap sinar matahari, yang berbahaya bagi kesehatan kulit dalam jangka panjang. Merkuri juga dapat berbahaya bagi Wanita hamil karena senyawa ini dapat melintasi plasenta dan mempengaruhi perkembangan janin, yang mengarah pada keterlambatan perkembangan kognitif dan motorik setelah kelahiran. \r\nDalam dosis yang tinggi, merkuri menyebabkan kerusakan pada struktur sel ginjal, mengarah pada penurunan fungsi ginjal yang permanen. Paparan merkuri dalam kosmetik juga berhubungan langsung dengan penghambatan produksi melanin, yang berfungsi untuk melindungi kulit dari paparan sinar ultraviolet (UV). Oleh karena itu, produksi kosmetik yang mengandung merkuri dapat mengurangi kemamuan kulit untuk melindungi dirinya sendiri dari kerusakan akibat sinar UV yang dapat menyebabkan kerusakan kulit jangka panjang, termasuk munculnya bintik-bintik hitam dan kanker kulit. Penurunan kadar melanin akibat penggunaan kosmetik bermerkuri membuat kulit lebih rentan terhadap radiasi UV yang berbahaya, yang mengarah pada kerusakan jaringan kulit dan kemungkinan berkembangnya kanker kulit. Dengan demikian, penggunaan kosmetik bermerkuri tidak hanya menyebabkan kerusakan langsung pada kulit, tetapi juga meningkatkan resiko kanker kulit dalam jangka panjang. \r\n2.	Hidrokuinon\r\nHidrokuinon merupakan bahan yang sering ditambahkan dalam krim pemutih dengan tujuan untuk memutihkan kulit. Menurut peraturan BPOM No. 23 Tahun 2019, hydroquinone telah dilarang penggunaannya sebagai pemutih atau pencerah dalam kosmetik. Penggunaan hidrokuinon hanya bisa digunakan untuk kuku dengan kadar 0,02%, serta pengoksidasi pewarna rambut dengan kadar maksimal 0,3%. Mekanisme  hidrokuinon dalam memutihkan kulit adalah efek toksik hydroquinone terhadap melanosit, dan melalui penghambatan proses pembentukan melanin (Kurniawan et al., 2022: 768).\r\nPemakaian senyawa hydroquinone dalam kosmetika kecantikan berperan sebagai penghilang flek atau bercak hitam pada wajah. Karena daya kerja yang dihasilkan senyawa hidrokuinon sangat lambat, sehingga untuk mempercepat kerjanya dilakukan dengan cara peningkatan kadar hidrokuinon tersebut sehingga dapat menimbulkan efek negatif bagi pemakainya. Efek negatif yang ditimbulkan oleh hidrokuinon apabila kadarnya melebihi 5% dapat menyebabkan kemerahan dan rasa terbakar pada kulit. Dalam jangka panjang pemakaian hydroquinone melebihi kadar yang ditentukan dapat mengakibatkan kelainan ginjal, kanker darah dan kanker hati. Kadar hidrokuinon yang diperbolehkan menurut BPOM RI adalah sebesar 2%.\r\nHidrokuinon adalah pemutih kulit yang bekerja dengan menghambat aktivitas enzim tyrosinase dalam melanogenase. Pada proses ini, pembentukan melanin dihambat dengan cara menghancurkan sel melanosit, meningkatka kerusakan melanosom serta merusak membran organel, sehingga melanin yang terbentuk menjadi kurang.\r\n\r\n3.	Rhodamin B.\r\nProduk kosmetik yang mengandung zat warna sintesis yang berbahaya salah satunya adalah rhodamin B. Rhodamin B sering disalahgunakan pada industri kosmetik yaitu sebagai pewarna dekoratif pada kosmetik seperti blush on, eye shadow dan lipstik yang dapat berefek karsinogenik (Mukti et al., 2022). Bahan pewarna ini dilarang digunakan dalam kosmetik karena dapat menimbulkan rasa terbakar, gatal, dan iritasi pada kulit, serta bersifat karsinogenik jika digunakan dalam jangka panjang. Larangan penggunaan Rhodamin B tercantum dalam Permenkes RI No. 445/Menkes/Per/V/1998 karena termasuk zat pewarna sintetis berbahaya. Rhodamin B berbentuk serbuk kristal hijau hingga ungu kemerahan, tidak berbau, dan mudah larut (Annisa et al., 2023).\r\n\r\nGambar 1.1 Dampak Skincare dan Kosmetik Berbahan Kimia Berbahaya', 'https://youtu.be/cCDXXEc4s-E?si=D0LlhbBU-vKl2_vO', '/uploads/materials/material-1770310355085-425473575.pdf', '2026-02-05 16:52:35'),
(9, 9, 'Reaksi di Tubuh: \"Apa yang Terjadi Setelah Makan Itu?\"\r\n\r\nTak Banyak yang Tahu, Minyak Goreng Berulang Kali Bisa Menghasilkan Zat Beracun\r\nOrang Indonesia tentu sudah tidak asing lagi dengan gorengan. Camilan renyah ini menjadi favorit banyak orang karena rasanya yang gurih, pilihan jenisnya beragam, harganya ramah di kantong, dan mudah ditemukan mulai dari pinggir jalan hingga restoran. Namun, di balik kelezatan gorengan, ada satu kebiasaan umum yang jarang diperhatikan, yaitu penggunaan minyak goreng secara berulang kali. Banyak penjual maupun rumah tangga memilih untuk memakai kembali minyak yang sama demi menghemat biaya atau karena merasa minyak masih bisa digunakan. Padahal, pemanasan minyak berulang kali dapat memicu perubahan struktur kimia lemak dan pembentukan senyawa berbahaya. Pertanyaannya, reaksi kimia apa yang sebenarnya terjadi pada minyak goreng ketika digunakan berkali-kali?\r\n\r\nBahaya Minyak Goreng yang Dipakai Berulang Kali\r\nMinyak makan yang digunakan berulang kali, seperti pada proses menggoreng pisang, tempe mendoan, bakwan, tahu isi dapat meningkatkan risiko bagi kesehatan tubuh. Pemanasan minyak secara berulang membuat struktur kimia lemak berubah, membentuk senyawa berbahaya seperti peroksida dan asam lemak trans. Penggorengan berulang kali pada suhu tinggi juga mempercepat oksidasi dan polimerisasi, yang memicu pembentukan radikal bebas. Senyawa ini dapat berdampak pada kesehatan seperti meningkatkan risiko penyakit degeneratif, diabetes tipe 2, obesitas, meningkatkan kadar kolesterol jahat, dan kanker. Menurut penelitian dari jurnal Diskursus Ilmiah Kesehatan tahun 2023 menyimpulkan bahwa terdapat kerusakan kimia pada sampel minyak goreng yag sudah digunakan berulang kali yang dilihat dari hasil kadar air, asam lemak bebas dan bilangan peroksida yang melebihi standar SNI minyak 2019. Menurut SNI 2019, kadar asam lemak bebas dalam minyak goreng sebaiknya tidak lebih dari 0,15%. Kerusakan ini terjadi disebabkan oleh proses oksidasi. \r\n\r\nKenapa kadar air berbahaya dalam minyak ?\r\nTingginya kadar air dalam minyak goreng disebabkan oleh banyaknya kadar air yang terkandung dalam makanan yang digoreng. Jika kadar air dalam minyak terlalu tinggi, minyak akan mengalami reaksi yang disebut hidrolisis. Sederhananya, air akan memecah minyak menjadi dua bagian yaitu gliserol (proses hidrolisis gliserida) dan asam lemak bebas. Asam lemak bebas inilah yang membuat minyak menjadi bau dan berasa tidak enak. Selain itu, Minyak goreng pada dasarnya tersusun dari trigliserida, yaitu gabungan antara gliserol dan asam lemak. Jika minyak dipanaskan terus-menerus, ikatan dalam trigliserida bisa terputus yang kemudian bereaksi dengan kadar air yang ada di dalam minyak membentuk gliserol dan membentuk asam lemak bebas. Asam lemak bebas inilah yang membuat minyak menjadi bau dan berasa tidak enak. \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nTanda- Tanda Minyak yang sudah digunakan berulang kali\r\nSelain cita rasa yang gurih, kualitas minyak yang digunakan untuk menggoreng juga patut diperhatikan, karena minyak yang sudah rusak dapat menurunkan mutu pangan dan berdampak pada kesehatan. Adapun cara mengenali minyak goreng yang sudah tidak layak digunakan adalah sebagai berikut:\r\n1)	Warna Gelap – Minyak berubah menjadi cokelat tua atau kehitaman karena oksidasi dan bercampur sisa makanan.\r\n2)	Bau Tengik atau Menyengat – Aroma apek, gosong, atau menyengat menandakan kerusakan minyak.\r\n3)	Busa Berlebihan Saat Dipanaskan – Timbul banyak busa akibat senyawa hasil penguraian lemak dan sisa makanan.\r\n4)	Tekstur Lebih Kental dan Lengket – Terjadi polimerisasi lemak karena pemanasan berulang.\r\n5)	Asap Cepat Keluar Meski Api Rendah – Titik asap menurun sehingga minyak mudah berasap.\"', 'https://youtu.be/wY_SNHXfYXo?si=RCTYVGB6Oh_7N26a', '/uploads/materials/material-1770310428464-23991326.pdf', '2026-02-05 16:53:48');

-- --------------------------------------------------------

--
-- Table structure for table `modules`
--

CREATE TABLE `modules` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `modules`
--

INSERT INTO `modules` (`id`, `name`, `description`, `image_url`, `created_at`) VALUES
(4, 'Reaksi Kimia dalam Pangan dan Dampaknya terhadap Tubuh', 'Ini membahas berbagai reaksi kimia yang terjadi pada bahan pangan selama proses pengolahan, penyimpanan, dan konsumsi, serta dampaknya terhadap mutu pangan dan kesehatan tubuh. Pembahasan difokuskan pada contoh nyata yang dekat dengan kehidupan sehari-hari, seperti penggunaan minyak goreng berulang, pemanasan bahan pangan, serta peran bahan tambahan pangan. Melalui modul ini, peserta didik diharapkan mampu memahami keterkaitan antara konsep kimia pangan dengan fenomena yang terjadi setelah makanan dikonsumsi.', '/uploads/modules/module-1770311717732-169258447.jpg', '2026-02-05 16:41:53'),
(5, 'Reaksi Kimia dalam Skincare dan Kosmetik dan Dampaknya terhadap Tubuh', 'Modul ini membahas berbagai reaksi kimia yang terjadi pada kulit akibat skincare dan  kosmetik, terutama yang mengandung bahan berbahaya seperti merkuri, hidrokuinon, dan rhodamin B. Peserta akan memahami dampak bahan kimia ini terhadap kulit dan kesehatan tubuh, gejala yang muncul, serta cara deteksi dan pencegahan penggunaan kosmetik berbahaya.', '/uploads/modules/module-1770311681666-936063471.jpg', '2026-02-05 16:44:07');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `sub_module_id` int(11) NOT NULL,
  `type` enum('pretest','postest') NOT NULL,
  `question_type` enum('choice') NOT NULL,
  `question_text` text NOT NULL,
  `correct_answer` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `sub_module_id`, `type`, `question_type`, `question_text`, `correct_answer`, `created_at`) VALUES
(14, 8, 'pretest', 'choice', 'Merkuri dalam krim pemutih kulit bersifat toksik karena kemampuannya untuk...', 'B', '2026-02-05 16:56:16'),
(15, 8, 'pretest', 'choice', 'Seseorang menggunakan krim pemutih bermerkuri secara rutin selama 6 bulan. Dampak jangka panjang yang paling mungkin terjadi adalah...', 'B', '2026-02-05 16:57:12'),
(16, 8, 'pretest', 'choice', 'Hydroquinone bekerja dengan menghambat aktivitas tyrosinase. Implikasi biokimia dari proses ini adalah', 'A', '2026-02-05 16:58:28'),
(17, 8, 'pretest', 'choice', 'Jika kadar Hydroquinone melebihi batas BPOM (>2%), efek negatif yang tidak mungkin terjadi adalah...', 'D', '2026-02-05 16:59:15'),
(18, 8, 'pretest', 'choice', 'Rhodamin B ilegal sering ditambahkan pada kosmetik untuk pewarnaan. Mengapa penggunaannya berbahaya bagi kulit dan tubuh...', 'B', '2026-02-05 17:00:28'),
(19, 8, 'postest', 'choice', 'Merkuri dalam krim pemutih kulit bersifat toksik karena kemampuannya untuk...', 'B', '2026-02-05 17:01:27'),
(20, 8, 'postest', 'choice', 'Seseorang menggunakan krim pemutih bermerkuri secara rutin selama 6 bulan. Dampak jangka panjang yang paling mungkin terjadi adalah...', 'B', '2026-02-05 17:02:15'),
(21, 8, 'postest', 'choice', 'Hydroquinone bekerja dengan menghambat aktivitas tyrosinase. Implikasi biokimia dari proses ini adalah', 'A', '2026-02-05 17:02:37'),
(22, 8, 'postest', 'choice', 'Jika kadar Hydroquinone melebihi batas BPOM (>2%), efek negatif yang tidak mungkin terjadi adalah...', 'D', '2026-02-05 17:03:05'),
(23, 8, 'postest', 'choice', 'Rhodamin B ilegal sering ditambahkan pada kosmetik untuk pewarnaan. Mengapa penggunaannya berbahaya bagi kulit dan tubuh...', 'B', '2026-02-05 17:03:31'),
(24, 9, 'pretest', 'choice', 'Minuman sari buah jeruk kemasan memiliki pH 3,4 dan disimpan pada suhu ruang selama 6 bulan. Label komposisinya mencantumkan natrium benzoat sebagai bahan tambahan pangan. Dalam larutan berpH asam, ion benzoat hasil disosiasi natrium benzoat akan terprotonasi membentuk asam benzoat. Asam benzoat merupakan asam lemah  dengan kesetimbangan disosiasi sebagai berikut: \n \nC6H5COOH   ⇌   C6H5COO−  +   H+\n\nBerdasarkan kesetimbangan tersebut, mekanisme yang paling tepat yang menjelaskan efektivitas natrium benzoat sebagai pengawet pada minuman tersebut adalah… ', 'C', '2026-02-05 17:07:10'),
(25, 9, 'pretest', 'choice', 'Susu UHT yang belum dibuka dapat disimpan dalam waktu lama pada suhu ruang. Namun, setelah kemasan dibuka, masa simpannya menjadi jauh lebih singkat. Secara kimia pangan, kondisi tersebut paling tepat disebabkan oleh...', 'C', '2026-02-05 17:07:57'),
(26, 9, 'pretest', 'choice', 'Pemanasan bahan pangan pada suhu tinggi dapat memicu terjadinya reaksi Maillard. Dampak utama reaksi tersebut terhadap produk pangan adalah...', 'B', '2026-02-05 17:08:56'),
(27, 9, 'pretest', 'choice', 'Dalam proses penyimpanan minyak goreng yang digunakan berulang kali, sering terjadi peningkatan asam lemak bebas. Fenomena tersebut secara kimia berkaitan dengan...', 'B', '2026-02-05 17:09:44'),
(28, 9, 'pretest', 'choice', 'Proses pemanasan pada bahan pangan berprotein, seperti telur atau susu, dapat menyebabkan perubahan tekstur dari cair menjadi lebih padat. Perubahan tersebut terjadi karena...', 'A', '2026-02-05 17:10:39'),
(29, 9, 'postest', 'choice', 'Minuman sari buah jeruk kemasan memiliki pH 3,4 dan disimpan pada suhu ruang selama 6 bulan. Label komposisinya mencantumkan natrium benzoat sebagai bahan tambahan pangan. Dalam larutan berpH asam, ion benzoat hasil disosiasi natrium benzoat akan terprotonasi membentuk asam benzoat. Asam benzoat merupakan asam lemah  dengan kesetimbangan disosiasi sebagai berikut: \n \nC6H5COOH   ⇌   C6H5COO−  +   H+\n\nBerdasarkan kesetimbangan tersebut, mekanisme yang paling tepat yang menjelaskan efektivitas natrium benzoat sebagai pengawet pada minuman tersebut adalah… ', 'C', '2026-02-05 17:11:18'),
(30, 9, 'postest', 'choice', 'Susu UHT yang belum dibuka dapat disimpan dalam waktu lama pada suhu ruang. Namun, setelah kemasan dibuka, masa simpannya menjadi jauh lebih singkat. Secara kimia pangan, kondisi tersebut paling tepat disebabkan oleh...', 'C', '2026-02-05 17:11:39'),
(31, 9, 'postest', 'choice', 'Pemanasan bahan pangan pada suhu tinggi dapat memicu terjadinya reaksi Maillard. Dampak utama reaksi tersebut terhadap produk pangan adalah...', 'B', '2026-02-05 17:12:02'),
(32, 9, 'postest', 'choice', 'Dalam proses penyimpanan minyak goreng yang digunakan berulang kali, sering terjadi peningkatan asam lemak bebas. Fenomena tersebut secara kimia berkaitan dengan...', 'B', '2026-02-05 17:13:07'),
(33, 9, 'postest', 'choice', 'Proses pemanasan pada bahan pangan berprotein, seperti telur atau susu, dapat menyebabkan perubahan tekstur dari cair menjadi lebih padat. Perubahan tersebut terjadi karena...', 'A', '2026-02-05 17:13:30');

-- --------------------------------------------------------

--
-- Table structure for table `question_options`
--

CREATE TABLE `question_options` (
  `id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `option_label` char(1) NOT NULL,
  `option_text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `question_options`
--

INSERT INTO `question_options` (`id`, `question_id`, `option_label`, `option_text`) VALUES
(49, 15, 'A', 'Kulit menjadi lebih tahan terhdap sinar matahari'),
(50, 15, 'B', 'Penumpukan  erkuri di ginjal → gangguan fungsi ginjal'),
(51, 15, 'C', 'Produksi melanin meningkat → kulit lebih gelap'),
(52, 15, 'D', 'Kulit menjadi lembab dan elastis'),
(53, 16, 'A', 'Produksi melanin berkurang → kulit lebih cerah tetapi rentan terhadap UV'),
(54, 16, 'B', 'Produksi kulit menjadi lebih kuat'),
(55, 16, 'C', 'Sel kulit mati lebih terkelupas'),
(56, 16, 'D', 'Kulit mendapatkan perlindungan alami dari radiasi'),
(57, 17, 'A', 'Kemerahan dan rasa terbakar'),
(58, 17, 'B', 'Kerusakan ginjal dan hati'),
(59, 17, 'C', 'Tremor dan gangguan saraf'),
(60, 17, 'D', 'Potensi kanker darah'),
(61, 18, 'A', 'Senyawa ini aman jika dioleskan tipis-tipis'),
(62, 18, 'B', 'Dapat menyebabkan iritasi, alergi, dan berpotensi karsinogenik jika terserap '),
(63, 18, 'C', 'Membuat kulit lebih cerah tanpa resiko'),
(64, 18, 'D', 'Merangsang produksi melanin alami'),
(65, 19, 'A', 'Menghambat enzim tyrosinase pada melanosit'),
(66, 19, 'B', 'Mengikat protein kulit dan menembus aliran darah'),
(67, 19, 'C', 'Meningkatkan produksi kolagen kulit'),
(68, 19, 'D', 'Menyerap sinar UV'),
(69, 14, 'A', 'Menghambat enzim tyrosinase pada melanosit'),
(70, 14, 'B', 'Mengikat protein kulit dan menembus aliran darah'),
(71, 14, 'C', 'Meningkatkan produksi kolagen kulit'),
(72, 14, 'D', 'Menyerap sinar UV'),
(73, 20, 'A', 'Kulit menjadi lebih tahan terhdap sinar matahari'),
(74, 20, 'B', 'Penumpukan  erkuri di ginjal → gangguan fungsi ginjal'),
(75, 20, 'C', 'Produksi melanin meningkat → kulit lebih gelap'),
(76, 20, 'D', 'Kulit menjadi lembab dan elastis'),
(77, 21, 'A', 'Produksi melanin berkurang → kulit lebih cerah tetapi rentan terhadap UV'),
(78, 21, 'B', 'Produksi kulit menjadi lebih kuat'),
(79, 21, 'C', 'Sel kulit mati lebih terkelupas'),
(80, 21, 'D', 'Kulit mendapatkan perlindungan alami dari radiasi'),
(81, 22, 'A', 'Kemerahan dan rasa terbakar'),
(82, 22, 'B', 'Kerusakan ginjal dan hati'),
(83, 22, 'C', 'Tremor dan gangguan saraf'),
(84, 22, 'D', 'Potensi kanker darah'),
(85, 23, 'A', 'Senyawa ini aman jika dioleskan tipis-tipis'),
(86, 23, 'B', 'Dapat menyebabkan iritasi, alergi, dan berpotensi karsinogenik jika terserap '),
(87, 23, 'C', 'Membuat kulit lebih cerah tanpa resiko'),
(88, 23, 'D', 'Merangsang produksi melanin alami'),
(97, 25, 'A', 'Terjadinya reaksi Maillard akibat paparan oksigen setelah kemasan dibuka'),
(98, 25, 'B', 'Menurunnya stabilitas protein susu karena perubahan pH secara spontan'),
(99, 25, 'C', 'Hilangnya efek sterilisasi sehingga terjadi pertumbuhan mikroorganisme yang memicu reaksi degradasi komponen susu'),
(100, 25, 'D', 'Terjadinya hidrolisis lemak oleh enzim alami susu akibat pemanasan UHT'),
(101, 26, 'A', 'Meningkatkan kadar vitamin larut air '),
(102, 26, 'B', 'Menyebabkan terbentuknya warna cokelat dan senyawa flavor'),
(103, 26, 'C', 'Menghambat reaksi oksidasi lemak'),
(104, 26, 'D', 'Menurunkan kadar air bahan pangan secara signifikan'),
(105, 27, 'A', 'Reaksi esterifikasi antara asam lemak dan gliserol'),
(106, 27, 'B', 'Reaksi hidrolisis trigliserida akibat adanya air dan panas'),
(107, 27, 'C', 'Reaksi netralisasi oleh senyawa basa'),
(108, 27, 'D', 'Proses denaturasi protein dalam minyak'),
(109, 28, 'A', 'Protein mengalami denaturasi sehingga struktur tersier dan sekunder berubah'),
(110, 28, 'B', 'Terbentuknya ikatan glikosidik antar molekul protein'),
(111, 28, 'C', 'Terjadinya reaksi hidrolisis protein menjadi asam amino'),
(112, 28, 'D', 'Protein bereaksi dengan lemak membentuk emulsi stabil'),
(113, 24, 'A', 'Karena pada pH rendah, fungsi natrium benzoat membantu mempertahankan warna minuman selama masa simpan'),
(114, 24, 'B', 'Karena pada pH tinggi, natrium benzoat lebih banyak berada dalam bentuk ion sehingga menjaga cita rasa produk'),
(115, 24, 'C', 'Karena pada pH rendah, fungsi natrium benzoat sebagai pengawet bekerja lebih efektif karena mampu menghambat pertumbuhan mikroorganisme'),
(116, 24, 'D', 'Karena pada pH rendah, fungsi natrium benzoat adalah menjaga kualitas gizi produk selama penyimpanan'),
(117, 29, 'A', 'Karena pada pH rendah, fungsi natrium benzoat membantu mempertahankan warna minuman selama masa simpan'),
(118, 29, 'B', 'Karena pada pH tinggi, natrium benzoat lebih banyak berada dalam bentuk ion sehingga menjaga cita rasa produk'),
(119, 29, 'C', 'Karena pada pH rendah, fungsi natrium benzoat sebagai pengawet bekerja lebih efektif karena mampu menghambat pertumbuhan mikroorganisme'),
(120, 29, 'D', 'Karena pada pH rendah, fungsi natrium benzoat adalah menjaga kualitas gizi produk selama penyimpanan'),
(121, 30, 'A', 'Terjadinya reaksi Maillard akibat paparan oksigen setelah kemasan dibuka'),
(122, 30, 'B', 'Menurunnya stabilitas protein susu karena perubahan pH secara spontan'),
(123, 30, 'C', 'Hilangnya efek sterilisasi sehingga terjadi pertumbuhan mikroorganisme yang memicu reaksi degradasi komponen susu'),
(124, 30, 'D', 'Terjadinya hidrolisis lemak oleh enzim alami susu akibat pemanasan UHT'),
(125, 31, 'A', 'Meningkatkan kadar vitamin larut air '),
(126, 31, 'B', 'Menyebabkan terbentuknya warna cokelat dan senyawa flavor'),
(127, 31, 'C', 'Menghambat reaksi oksidasi lemak'),
(128, 31, 'D', 'Menurunkan kadar air bahan pangan secara signifikan'),
(129, 32, 'A', 'Reaksi esterifikasi antara asam lemak dan gliserol'),
(130, 32, 'B', 'Reaksi hidrolisis trigliserida akibat adanya air dan panas'),
(131, 32, 'C', 'Reaksi netralisasi oleh senyawa basa'),
(132, 32, 'D', 'Proses denaturasi protein dalam minyak'),
(133, 33, 'A', 'Protein mengalami denaturasi sehingga struktur tersier dan sekunder berubah'),
(134, 33, 'B', 'Terbentuknya ikatan glikosidik antar molekul protein'),
(135, 33, 'C', 'Terjadinya reaksi hidrolisis protein menjadi asam amino'),
(136, 33, 'D', 'Protein bereaksi dengan lemak membentuk emulsi stabil');

-- --------------------------------------------------------

--
-- Table structure for table `sub_modules`
--

CREATE TABLE `sub_modules` (
  `id` int(11) NOT NULL,
  `module_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `passing_grade` int(11) DEFAULT 70,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sub_modules`
--

INSERT INTO `sub_modules` (`id`, `module_id`, `name`, `description`, `passing_grade`, `created_at`) VALUES
(8, 5, 'Bahan Berbahaya dalam Kosmetik ', 'Submodul ini fokus pada tiga bahan kimia yang sering ditemukan dalam skincare dan kosmetik ilegal atau tidak aman: Merkuri, Hidrokuinon, dan Rhodamin B. Materi mengulas reaksi kimia yang terjadi pada kulit, efek toksik, risiko jangka panjang, serta rekomendasi penggunaan kosmetik yang aman.', 60, '2026-02-05 16:44:57'),
(9, 4, 'Reaksi Kimia pada Lemak dan Protein dalam Pangan', 'Submodul ini mengkaji reaksi kimia yang melibatkan komponen utama pangan, khususnya lemak dan protein, seperti oksidasi, hidrolisis, polimerisasi, denaturasi, dan reaksi Maillard. Pembahasan diarahkan pada perubahan mutu pangan akibat reaksi-reaksi tersebut serta implikasinya terhadap keamanan pangan dan kesehatan tubuh.', 60, '2026-02-05 16:45:36');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','user') DEFAULT 'user',
  `job` varchar(100) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `job`, `address`, `created_at`) VALUES
(1, 'Admin Science For Life', 'adminSFL@gmail.com', '$2a$10$wmnB4uquEv0OHhtBCQA.1.jFpJqHOaGTP9mzfx7I3uo6fzwwpTGIu', 'admin', 'Admin', 'Kantor Pusat Science For Life', '2026-02-04 13:48:23'),
(4, 'tes-revisi', 'tes@gmail.com', '$2a$10$e40AageTQ.1br.TCgQJAO.ie2IK/x3zP8teVVEM7FSMhX7xuMxUbu', 'user', 'tukang testing', 'Jl.Testing Lr.Fix', '2026-02-04 13:53:40');

-- --------------------------------------------------------

--
-- Table structure for table `user_answers`
--

CREATE TABLE `user_answers` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `test_type` enum('pretest','postest') NOT NULL,
  `user_answer` text DEFAULT NULL,
  `is_correct` tinyint(1) DEFAULT NULL,
  `answered_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_answers`
--

INSERT INTO `user_answers` (`id`, `user_id`, `question_id`, `test_type`, `user_answer`, `is_correct`, `answered_at`) VALUES
(33, 4, 14, 'pretest', 'A', 0, '2026-02-06 01:44:35'),
(34, 4, 15, 'pretest', 'B', 1, '2026-02-06 01:44:35'),
(35, 4, 16, 'pretest', 'B', 0, '2026-02-06 01:44:35'),
(36, 4, 17, 'pretest', 'D', 1, '2026-02-06 01:44:35'),
(37, 4, 18, 'pretest', 'A', 0, '2026-02-06 01:44:35'),
(38, 4, 19, 'postest', 'A', 0, '2026-02-06 09:44:48'),
(39, 4, 20, 'postest', 'D', 0, '2026-02-06 09:44:49'),
(40, 4, 21, 'postest', 'D', 0, '2026-02-06 09:44:49'),
(41, 4, 22, 'postest', 'A', 0, '2026-02-06 09:44:49'),
(42, 4, 23, 'postest', 'B', 1, '2026-02-06 09:44:49'),
(53, 4, 19, 'postest', 'A', 0, '2026-02-21 07:13:29'),
(54, 4, 20, 'postest', 'C', 0, '2026-02-21 07:13:29'),
(55, 4, 21, 'postest', 'C', 0, '2026-02-21 07:13:29'),
(56, 4, 22, 'postest', 'A', 0, '2026-02-21 07:13:29'),
(57, 4, 23, 'postest', 'B', 1, '2026-02-21 07:13:29');

-- --------------------------------------------------------

--
-- Table structure for table `user_progress`
--

CREATE TABLE `user_progress` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `sub_module_id` int(11) NOT NULL,
  `pretest_done` tinyint(1) DEFAULT 0,
  `pretest_score` int(11) DEFAULT 0,
  `postest_done` tinyint(1) DEFAULT 0,
  `postest_score` int(11) DEFAULT 0,
  `is_passed` tinyint(1) DEFAULT 0,
  `last_accessed` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_progress`
--

INSERT INTO `user_progress` (`id`, `user_id`, `sub_module_id`, `pretest_done`, `pretest_score`, `postest_done`, `postest_score`, `is_passed`, `last_accessed`) VALUES
(9, 4, 8, 1, 40, 1, 0, 0, '2026-02-22 04:22:31'),
(11, 4, 9, 1, 0, 0, 0, 0, '2026-02-22 04:22:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_feedback`
--
ALTER TABLE `contact_feedback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `materials`
--
ALTER TABLE `materials`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sub_module_id` (`sub_module_id`);

--
-- Indexes for table `modules`
--
ALTER TABLE `modules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sub_module_id` (`sub_module_id`);

--
-- Indexes for table `question_options`
--
ALTER TABLE `question_options`
  ADD PRIMARY KEY (`id`),
  ADD KEY `question_id` (`question_id`);

--
-- Indexes for table `sub_modules`
--
ALTER TABLE `sub_modules`
  ADD PRIMARY KEY (`id`),
  ADD KEY `module_id` (`module_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_answers`
--
ALTER TABLE `user_answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `question_id` (`question_id`);

--
-- Indexes for table `user_progress`
--
ALTER TABLE `user_progress`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_user_submodule` (`user_id`,`sub_module_id`),
  ADD KEY `sub_module_id` (`sub_module_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_feedback`
--
ALTER TABLE `contact_feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `materials`
--
ALTER TABLE `materials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `modules`
--
ALTER TABLE `modules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `question_options`
--
ALTER TABLE `question_options`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=137;

--
-- AUTO_INCREMENT for table `sub_modules`
--
ALTER TABLE `sub_modules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user_answers`
--
ALTER TABLE `user_answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `user_progress`
--
ALTER TABLE `user_progress`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `materials`
--
ALTER TABLE `materials`
  ADD CONSTRAINT `materials_ibfk_1` FOREIGN KEY (`sub_module_id`) REFERENCES `sub_modules` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`sub_module_id`) REFERENCES `sub_modules` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `question_options`
--
ALTER TABLE `question_options`
  ADD CONSTRAINT `question_options_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sub_modules`
--
ALTER TABLE `sub_modules`
  ADD CONSTRAINT `sub_modules_ibfk_1` FOREIGN KEY (`module_id`) REFERENCES `modules` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_answers`
--
ALTER TABLE `user_answers`
  ADD CONSTRAINT `user_answers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_answers_ibfk_2` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_progress`
--
ALTER TABLE `user_progress`
  ADD CONSTRAINT `user_progress_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_progress_ibfk_2` FOREIGN KEY (`sub_module_id`) REFERENCES `sub_modules` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
