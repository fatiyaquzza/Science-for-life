-- Database Schema untuk Science For Life
-- Database: science_for_life

-- Table: users
CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'user') DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: modules
CREATE TABLE IF NOT EXISTS modules (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: sub_modules
CREATE TABLE IF NOT EXISTS sub_modules (
  id INT PRIMARY KEY AUTO_INCREMENT,
  module_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  passing_grade INT DEFAULT 70,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (module_id) REFERENCES modules(id) ON DELETE CASCADE
);

-- Table: materials
CREATE TABLE IF NOT EXISTS materials (
  id INT PRIMARY KEY AUTO_INCREMENT,
  sub_module_id INT NOT NULL,
  description TEXT,
  video_url VARCHAR(255),
  file_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (sub_module_id) REFERENCES sub_modules(id) ON DELETE CASCADE
);

-- Table: questions (untuk pretest dan postest)
CREATE TABLE IF NOT EXISTS questions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  sub_module_id INT NOT NULL,
  type ENUM('pretest', 'postest') NOT NULL,
  question_type ENUM('choice', 'essay') NOT NULL,
  question_text TEXT NOT NULL,
  correct_answer TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (sub_module_id) REFERENCES sub_modules(id) ON DELETE CASCADE
);

-- Table: question_options (untuk soal pilihan ganda)
CREATE TABLE IF NOT EXISTS question_options (
  id INT PRIMARY KEY AUTO_INCREMENT,
  question_id INT NOT NULL,
  option_label CHAR(1) NOT NULL,
  option_text TEXT NOT NULL,
  FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE
);

-- Table: user_progress (tracking status per sub modul)
CREATE TABLE IF NOT EXISTS user_progress (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  sub_module_id INT NOT NULL,
  pretest_done BOOLEAN DEFAULT FALSE,
  pretest_score INT DEFAULT 0,
  postest_done BOOLEAN DEFAULT FALSE,
  postest_score INT DEFAULT 0,
  is_passed BOOLEAN DEFAULT FALSE,
  last_accessed TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (sub_module_id) REFERENCES sub_modules(id) ON DELETE CASCADE,
  UNIQUE KEY unique_user_submodule (user_id, sub_module_id)
);

-- Table: user_answers (menyimpan jawaban user)
CREATE TABLE IF NOT EXISTS user_answers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  question_id INT NOT NULL,
  test_type ENUM('pretest', 'postest') NOT NULL,
  user_answer TEXT,
  is_correct BOOLEAN,
  answered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE
);

-- Insert default admin user (password: admin123)
-- Password hash untuk "admin123" menggunakan bcrypt dengan salt rounds 10
-- Untuk membuat hash baru, gunakan: bcrypt.hash('admin123', 10)
-- Default password: admin123
-- Hash: $2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy
INSERT INTO users (name, email, password, role) VALUES 
('Admin', 'admin@scienceforlife.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'admin')
ON DUPLICATE KEY UPDATE name=name;
