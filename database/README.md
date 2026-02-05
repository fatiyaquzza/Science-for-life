# Database - Science For Life

## Isi Folder

| File | Fungsi |
|------|--------|
| **schema.sql** | Struktur tabel + admin default |
| **seed.sql** | Data contoh (modul, soal, user) |
| **README.md** | Panduan ini |

---

## Setup (Clone di Laptop Baru)

**Prasyarat:** XAMPP MySQL sudah running.

### 1. Buat database

Buka phpMyAdmin (`http://localhost/phpmyadmin`) → tab **SQL** → paste & jalankan:

```sql
CREATE DATABASE IF NOT EXISTS science_for_life;
```

### 2. Import schema

Pilih database `science_for_life` → tab **Import** → pilih `schema.sql` → **Go**.

### 3. Import seed

Tab **Import** → pilih `seed.sql` → **Go**.

### 4. Seed admin (untuk login)

```bash
cd backend && npm run seed:admin
```

Login admin: `adminSFL@gmail.com` / `admin123`

---

## Via Command Line

```bash
# Buat database
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS science_for_life;"

# Import schema
mysql -u root -p science_for_life < database/schema.sql

# Import seed
mysql -u root -p science_for_life < database/seed.sql
```

*(Tekan Enter saat diminta password; kosongkan jika XAMPP default)*

---

## Konfigurasi Backend

Pastikan `.env` backend:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=science_for_life
```
