-- ============================================================
-- SEED DATA - Science For Life (Contoh Data Lengkap)
-- Jalankan SETELAH schema.sql
-- Usage: mysql -u root -p science_for_life < database/seed.sql
-- ============================================================

-- Kosongkan data lama (agar seed bisa dijalankan ulang)
-- Urutan: hapus tabel anak dulu, baru tabel induk (supaya tidak error foreign key)
DELETE FROM user_answers;
DELETE FROM user_progress;
DELETE FROM question_options;
DELETE FROM questions;
DELETE FROM materials;
DELETE FROM sub_modules;
DELETE FROM modules;
DELETE FROM users;

-- ============================================================
-- 1. USERS (Admin + User contoh)
-- PENTING: Setelah import seed, jalankan: cd backend && npm run seed:admin
-- Agar admin bisa login: adminSFL@gmail.com / admin123
-- User Budi & Siti password: admin123
-- ============================================================
INSERT INTO users (id, name, email, password, role, created_at) VALUES
(1, 'Admin Science For Life', 'adminSFL@gmail.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'admin', NOW()),
(2, 'Budi Santoso', 'budi@example.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'user', NOW()),
(3, 'Siti Aminah', 'siti@example.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'user', NOW());

-- ============================================================
-- 2. MODULES (Modul pembelajaran)
-- ============================================================
INSERT INTO modules (id, name, description, image_url, created_at) VALUES
(1, 'Biologi Dasar', 'Mempelajari konsep dasar biologi: sel, organ, sistem tubuh, dan ekosistem. Cocok untuk pemula yang ingin memahami kehidupan dari tingkat sel hingga lingkungan.', NULL, NOW()),
(2, 'Fisika Sehari-hari', 'Fisika dalam kehidupan sehari-hari: gaya, gerak, energi, listrik, dan optik. Belajar sains dengan contoh nyata di sekitar kita.', NULL, NOW()),
(3, 'Kimia Lingkungan', 'Dasar-dasar kimia dan dampaknya terhadap lingkungan: zat kimia, reaksi, polusi, dan keberlanjutan.', NULL, NOW());

-- ============================================================
-- 3. SUB_MODULES (Sub modul per modul)
-- ============================================================
INSERT INTO sub_modules (id, module_id, name, description, passing_grade, created_at) VALUES
-- Biologi Dasar
(1, 1, 'Struktur dan Fungsi Sel', 'Mengenal bagian-bagian sel (membran, sitoplasma, nukleus) dan fungsinya bagi kehidupan.', 70, NOW()),
(2, 1, 'Sistem Pencernaan Manusia', 'Organ pencernaan dari mulut hingga usus dan proses pencernaan makanan.', 70, NOW()),
(3, 1, 'Ekosistem dan Rantai Makanan', 'Komponen ekosistem, produsen, konsumen, dan aliran energi.', 70, NOW()),
-- Fisika Sehari-hari
(4, 2, 'Gaya dan Gerak', 'Hukum Newton, jenis gaya, dan aplikasinya dalam kehidupan.', 70, NOW()),
(5, 2, 'Energi dan Usaha', 'Bentuk energi, transformasi energi, dan konsep usaha.', 70, NOW()),
-- Kimia Lingkungan
(6, 3, 'Struktur Atom dan Unsur', 'Partikel dasar atom, tabel periodik, dan sifat unsur.', 70, NOW()),
(7, 3, 'Reaksi Kimia Sederhana', 'Jenis reaksi kimia dan persamaan reaksi dasar.', 70, NOW());

-- ============================================================
-- 4. MATERIALS (Materi per sub modul)
-- ============================================================
INSERT INTO materials (id, sub_module_id, description, video_url, file_url, created_at) VALUES
(1, 1, 'Sel adalah unit terkecil kehidupan. Setiap makhluk hidup terdiri dari satu atau banyak sel. Sel memiliki membran sel yang membungkus sitoplasma dan nukleus. Nukleus mengendalikan aktivitas sel dan menyimpan informasi genetik (DNA). Organel seperti mitokondria berperan dalam menghasilkan energi.', 'https://www.youtube.com/watch?v=8IlzKri08kk', NULL, NOW()),
(2, 2, 'Sistem pencernaan manusia terdiri dari saluran pencernaan (mulut, kerongkongan, lambung, usus halus, usus besar) dan kelenjar pencernaan (hati, pankreas). Makanan dicerna secara mekanik (mengunyah) dan kimiawi (enzim). Nutrisi diserap di usus halus.', 'https://www.youtube.com/watch?v=Og5xAdC8EUI', NULL, NOW()),
(3, 3, 'Ekosistem adalah hubungan antara makhluk hidup dan lingkungannya. Produsen (tumbuhan) membuat makanan melalui fotosintesis. Konsumen memakan produsen atau konsumen lain. Rantai makanan menunjukkan aliran energi dari produsen ke konsumen.', NULL, NULL, NOW()),
(4, 4, 'Gaya adalah tarikan atau dorongan. Hukum Newton I: benda diam tetap diam, benda bergerak tetap bergerak lurus beraturan jika resultan gaya nol. Hukum Newton II: F = m × a. Hukum Newton III: aksi-reaksi.', 'https://www.youtube.com/watch?v=QfC1MxJDqOU', NULL, NOW()),
(5, 5, 'Energi tidak dapat diciptakan atau dimusnahkan, hanya berubah bentuk. Bentuk energi: kinetik, potensial, kimia, listrik, panas. Usaha = Gaya × jarak (W = F × s).', NULL, NULL, NOW()),
(6, 6, 'Atom terdiri dari proton (positif), neutron (netral), dan elektron (negatif). Nomor atom = jumlah proton. Massa atom ≈ proton + neutron. Tabel periodik menyusun unsur berdasarkan nomor atom dan sifat periodik.', NULL, NULL, NOW()),
(7, 7, 'Reaksi kimia melibatkan pemutusan dan pembentukan ikatan. Jenis reaksi: kombinasi, dekomposisi, penggantian tunggal, penggantian ganda. Persamaan reaksi harus setara (jumlah atom ruas kiri = kanan).', NULL, NULL, NOW());

-- ============================================================
-- 5. QUESTIONS (Pretest & Postest) + OPTIONS
-- Sub modul 1: Struktur dan Fungsi Sel
-- ============================================================
INSERT INTO questions (id, sub_module_id, type, question_type, question_text, correct_answer, created_at) VALUES
-- Pretest Sub Modul 1
(1, 1, 'pretest', 'choice', 'Bagian sel yang mengendalikan aktivitas sel dan menyimpan DNA adalah...', 'C', NOW()),
(2, 1, 'pretest', 'choice', 'Organel yang berfungsi sebagai "pusat energi" sel adalah...', 'B', NOW()),
(3, 1, 'pretest', 'essay', 'Jelaskan secara singkat perbedaan antara sel hewan dan sel tumbuhan!', 'Sel tumbuhan memiliki dinding sel dan kloroplas; sel hewan tidak.', NOW()),
-- Postest Sub Modul 1
(4, 1, 'postest', 'choice', 'Membran sel berfungsi untuk...', 'A', NOW()),
(5, 1, 'postest', 'choice', 'Unit terkecil kehidupan yang mampu melakukan proses kehidupan disebut...', 'B', NOW()),
(6, 1, 'postest', 'essay', 'Sebutkan 3 organel sel dan fungsinya!', 'Contoh: Nukleus (mengendalikan sel), Mitokondria (menghasilkan energi), Ribosom (sintesis protein).', NOW());

-- Options untuk soal choice (pretest 1)
INSERT INTO question_options (question_id, option_label, option_text) VALUES
(1, 'A', 'Sitoplasma'),
(1, 'B', 'Membran sel'),
(1, 'C', 'Nukleus'),
(1, 'D', 'Ribosom');
-- Options pretest 2
INSERT INTO question_options (question_id, option_label, option_text) VALUES
(2, 'A', 'Nukleus'),
(2, 'B', 'Mitokondria'),
(2, 'C', 'Kloroplas'),
(2, 'D', 'Ribosom');
-- Options postest 4
INSERT INTO question_options (question_id, option_label, option_text) VALUES
(4, 'A', 'Mengatur keluar masuk zat'),
(4, 'B', 'Menyimpan DNA'),
(4, 'C', 'Menghasilkan energi'),
(4, 'D', 'Tempat fotosintesis');
-- Options postest 5
INSERT INTO question_options (question_id, option_label, option_text) VALUES
(5, 'A', 'Jaringan'),
(5, 'B', 'Sel'),
(5, 'C', 'Organ'),
(5, 'D', 'Sistem organ');

-- ============================================================
-- Soal Sub Modul 2: Sistem Pencernaan
-- ============================================================
INSERT INTO questions (id, sub_module_id, type, question_type, question_text, correct_answer, created_at) VALUES
(7, 2, 'pretest', 'choice', 'Enzim yang berfungsi mencerna amilum (pati) di mulut adalah...', 'B', NOW()),
(8, 2, 'pretest', 'choice', 'Organ tempat penyerapan sari makanan yang paling banyak terjadi adalah...', 'C', NOW()),
(9, 2, 'postest', 'choice', 'Lambung menghasilkan asam klorida (HCl) dan enzim pepsin untuk mencerna...', 'A', NOW()),
(10, 2, 'postest', 'choice', 'Usus besar berfungsi terutama untuk...', 'D', NOW());

INSERT INTO question_options (question_id, option_label, option_text) VALUES
(7, 'A', 'Pepsin'),
(7, 'B', 'Amilase'),
(7, 'C', 'Lipase'),
(7, 'D', 'Tripsin'),
(8, 'A', 'Lambung'),
(8, 'B', 'Usus besar'),
(8, 'C', 'Usus halus'),
(8, 'D', 'Kerongkongan'),
(9, 'A', 'Protein'),
(9, 'B', 'Karbohidrat'),
(9, 'C', 'Lemak'),
(9, 'D', 'Vitamin'),
(10, 'A', 'Mencerna protein'),
(10, 'B', 'Menyerap glukosa'),
(10, 'C', 'Memproduksi enzim'),
(10, 'D', 'Menyerap air dan membentuk feses');

-- ============================================================
-- Soal Sub Modul 4: Gaya dan Gerak (Fisika)
-- ============================================================
INSERT INTO questions (id, sub_module_id, type, question_type, question_text, correct_answer, created_at) VALUES
(11, 4, 'pretest', 'choice', 'Hukum Newton I menyatakan bahwa...', 'A', NOW()),
(12, 4, 'pretest', 'choice', 'Rumus Hukum Newton II adalah...', 'C', NOW()),
(13, 4, 'postest', 'choice', 'Ketika kita mendorong dinding, dinding mendorong kita kembali. Ini adalah contoh...', 'B', NOW()),
(14, 4, 'postest', 'essay', 'Jelaskan perbedaan antara gaya dan massa!', 'Gaya adalah tarikan atau dorongan (satuan Newton); massa adalah jumlah zat dalam benda (satuan kg).', NOW());

INSERT INTO question_options (question_id, option_label, option_text) VALUES
(11, 'A', 'Benda tetap diam atau bergerak lurus beraturan jika resultan gaya = 0'),
(11, 'B', 'F = m × a'),
(11, 'C', 'Aksi = - reaksi'),
(11, 'D', 'Energi kekal'),
(12, 'A', 'F = m × g'),
(12, 'B', 'W = F × s'),
(12, 'C', 'F = m × a'),
(12, 'D', 'v = s / t'),
(13, 'A', 'Hukum Newton I'),
(13, 'B', 'Hukum Newton III'),
(13, 'C', 'Hukum Newton II'),
(13, 'D', 'Hukum gravitasi');

-- ============================================================
-- 6. USER_PROGRESS (Contoh progress user Budi & Siti)
-- ============================================================
INSERT INTO user_progress (user_id, sub_module_id, pretest_done, pretest_score, postest_done, postest_score, is_passed, last_accessed) VALUES
-- Budi: selesai pretest & postest sub modul 1, lulus
(2, 1, TRUE, 85, TRUE, 90, TRUE, NOW()),
-- Budi: selesai pretest sub modul 2, belum postest
(2, 2, TRUE, 75, FALSE, 0, FALSE, NOW()),
-- Siti: selesai pretest sub modul 1 saja
(3, 1, TRUE, 70, FALSE, 0, FALSE, NOW()),
-- Siti: lulus sub modul 4 (Fisika)
(3, 4, TRUE, 80, TRUE, 85, TRUE, NOW());

-- ============================================================
-- 7. USER_ANSWERS (Contoh jawaban - opsional, untuk riwayat)
-- ============================================================
INSERT INTO user_answers (user_id, question_id, test_type, user_answer, is_correct, answered_at) VALUES
(2, 1, 'pretest', 'C', TRUE, NOW()),
(2, 2, 'pretest', 'B', TRUE, NOW()),
(2, 3, 'pretest', 'Sel tumbuhan punya dinding sel dan kloroplas.', TRUE, NOW()),
(2, 4, 'postest', 'A', TRUE, NOW()),
(2, 5, 'postest', 'B', TRUE, NOW()),
(2, 6, 'postest', 'Nukleus, Mitokondria, Ribosom', TRUE, NOW());

-- ============================================================
-- Selesai. Reset AUTO_INCREMENT agar ID berikutnya rapi (opsional)
-- ============================================================
ALTER TABLE users AUTO_INCREMENT = 10;
ALTER TABLE modules AUTO_INCREMENT = 10;
ALTER TABLE sub_modules AUTO_INCREMENT = 10;
ALTER TABLE materials AUTO_INCREMENT = 10;
ALTER TABLE questions AUTO_INCREMENT = 20;
ALTER TABLE question_options AUTO_INCREMENT = 50;
