# Cara Login Admin & Mengatur Akun Admin

## 0. Contoh tampilan lengkap (isi database)

Agar bisa melihat **contoh tampilan lengkap** (modul, sub modul, materi, soal, progress user), isi database dengan **data contoh** dari file seed:

1. Pastikan sudah menjalankan `database/schema.sql` (buat tabel).
2. Jalankan **seed** (isi semua tabel dengan data contoh):

   ```bash
   mysql -u root -p science_for_life < database/seed.sql
   ```

   Atau lewat phpMyAdmin: pilih database `science_for_life` → Import → pilih file `database/seed.sql` → Go.

**Isi seed:**
- **users**: 1 admin + 2 user (Budi, Siti). Semua password: `admin123`.
- **modules**: 3 modul (Biologi Dasar, Fisika Sehari-hari, Kimia Lingkungan).
- **sub_modules**: 7 sub modul dengan deskripsi & passing grade.
- **materials**: 7 materi (deskripsi + beberapa video URL).
- **questions**: pretest & postest (pilihan ganda + essay) untuk beberapa sub modul.
- **user_progress** & **user_answers**: contoh progress Budi dan Siti.

Setelah seed dijalankan, buka aplikasi untuk melihat dashboard berisi modul, detail modul dengan status (Belum Dimulai / Pretest Selesai / Lulus), dan login admin/user seperti di bawah.

---

## 1. Login sebagai Admin

### Akun default setelah import database

Setelah Anda menjalankan `schema.sql` dan `seed.sql`, gunakan akun berikut:

| Field    | Nilai |
|----------|--------|
| **Email** | `admin@scienceforlife.com` |
| **Password** | `admin123` |

**Langkah:**
1. Buka aplikasi (misal: http://localhost:3000)
2. Klik **Login**
3. Masukkan email: `admin@scienceforlife.com`
4. Masukkan password: `admin123`
5. Klik **Login**

Setelah berhasil, di navbar akan muncul menu **Admin Panel**. Klik untuk masuk ke dashboard admin.

---

## 2. Atur akun admin di mana?

### A. Melalui panel Admin (setelah login sebagai admin)

1. Login dengan akun admin (email & password di atas).
2. Buka **Admin Panel** → **Manajemen User**.
3. Di tabel user Anda bisa:
   - **Edit** user (nama, email, **role**, password baru).
   - Mengubah **role** dari `user` menjadi `admin` untuk menjadikan user tersebut admin.
   - **Hapus** user (kecuali akun Anda sendiri).

Jadi: **atur akun admin = ubah role user menjadi "admin" di Manajemen User.**

### B. Membuat admin baru dari user biasa

1. User mendaftar seperti biasa (Register).
2. Admin login → **Admin Panel** → **Manajemen User**.
3. Cari user tersebut → **Edit** → ubah **Role** menjadi **Admin** → Simpan.

### C. Langsung lewat database (MySQL)

Jika lupa password admin atau ingin mengatur manual:

```sql
-- Lihat semua user
SELECT id, name, email, role FROM users;

-- Ubah role user tertentu jadi admin (ganti 2 dengan id user)
UPDATE users SET role = 'admin' WHERE id = 2;

-- Reset password admin jadi "admin123" (id 1 = admin default)
-- Hash ini untuk password: admin123
UPDATE users 
SET password = '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy' 
WHERE id = 1;
```

---

## 3. Ringkasan lokasi fitur

| Yang ingin dilakukan | Lokasi |
|----------------------|--------|
| Login sebagai admin | Halaman **Login** (email & password admin) |
| Mengatur siapa saja yang jadi admin | **Admin Panel** → **Manajemen User** → Edit user → ubah Role jadi Admin |
| Mengubah password admin | **Admin Panel** → **Manajemen User** → Edit user admin → isi "Password Baru" |
| Menambah admin baru | Daftar user baru → lalu di Manajemen User ubah rolenya jadi Admin |

---

## 4. Jika password admin tidak bisa (hash tidak cocok)

Jalankan script ini di **backend** untuk menghasilkan hash password baru:

```bash
cd backend
node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('admin123', 10));"
```

Copy hash yang keluar, lalu di MySQL:

```sql
UPDATE users SET password = 'HASH_YANG_DICOPY' WHERE email = 'admin@scienceforlife.com';
```

Setelah itu login lagi dengan password `admin123`.
