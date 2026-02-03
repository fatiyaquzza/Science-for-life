# 🚀 Panduan Setup Science For Life

## 📍 Lokasi Folder

Semua perintah dijalankan dari **folder root** `science-for-life/`

```
science-for-life/          ← DI SINI Anda jalankan semua perintah!
├── backend/
├── frontend/
├── database/
└── package.json
```

---

## 📦 LANGKAH 1: Install Dependencies

### Opsi A: Install Semua Sekaligus (RECOMMENDED)

Dari folder **root** `science-for-life/`, jalankan:

```bash
npm run install:all
```

Script ini akan otomatis install:
- ✅ Dependencies di root (concurrently)
- ✅ Dependencies di backend/
- ✅ Dependencies di frontend/

### Opsi B: Install Manual Satu Per Satu

Jika Opsi A tidak berhasil, install manual:

```bash
# 1. Di folder ROOT (science-for-life/)
npm install

# 2. Masuk ke folder backend
cd backend
npm install

# 3. Masuk ke folder frontend
cd ../frontend
npm install

# 4. Kembali ke root
cd ..
```

---

## 🗄️ LANGKAH 2: Setup Database MySQL

1. **Pastikan MySQL sudah terinstall dan running**

2. **Buka MySQL Command Line atau phpMyAdmin**

3. **Buat database:**
```sql
CREATE DATABASE science_for_life;
```

4. **Import schema:**
   - **Via Command Line:**
   ```bash
   mysql -u root -p science_for_life < database/schema.sql
   ```
   
   - **Via phpMyAdmin:**
     - Pilih database `science_for_life`
     - Klik tab "Import"
     - Pilih file `database/schema.sql`
     - Klik "Go"

---

## ⚙️ LANGKAH 3: Konfigurasi Environment Variables

### Backend (`backend/.env`)

Edit file `backend/.env`:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=masukkan_password_mysql_anda_disini
DB_NAME=science_for_life
JWT_SECRET=ubah_ini_dengan_random_string_untuk_production
GEMINI_API_KEY=masukkan_gemini_api_key_anda_disini
```

**Cara dapat Gemini API Key:**
1. Kunjungi: https://makersuite.google.com/app/apikey
2. Login dengan Google account
3. Buat API key baru
4. Copy dan paste ke `GEMINI_API_KEY`

### Frontend (`frontend/.env`)

File `frontend/.env` sudah dikonfigurasi, tidak perlu diubah:
```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🏃 LANGKAH 4: Menjalankan Aplikasi

### Opsi A: Jalankan Backend & Frontend Bersamaan (RECOMMENDED)

Dari folder **root** `science-for-life/`:

```bash
npm run dev
```

Ini akan menjalankan:
- ✅ Backend di `http://localhost:5000`
- ✅ Frontend di `http://localhost:3000`

### Opsi B: Jalankan Terpisah (2 Terminal)

**Terminal 1 - Backend:**
```bash
# Dari folder root
npm run dev:backend
```

**Terminal 2 - Frontend:**
```bash
# Dari folder root
npm run dev:frontend
```

---

## ✅ Verifikasi Setup

1. **Backend berjalan?**
   - Buka: http://localhost:5000/api/health
   - Harus muncul: `{"message":"Science For Life API is running","status":"OK"}`

2. **Frontend berjalan?**
   - Buka: http://localhost:3000
   - Harus muncul halaman landing page

3. **Database terhubung?**
   - Cek console backend, harus ada: `✅ Database connected successfully`

---

## 🔑 Login Default Admin

Setelah import schema, gunakan:

- **Email:** `admin@scienceforlife.com`
- **Password:** `admin123`

---

## ❓ Troubleshooting

### Error: "Cannot find module"
- Pastikan sudah install dependencies dengan `npm run install:all`
- Atau install manual di setiap folder

### Error: "Database connection failed"
- Pastikan MySQL running
- Cek password di `backend/.env` sudah benar
- Pastikan database `science_for_life` sudah dibuat

### Error: "Port 5000 already in use"
- Ubah PORT di `backend/.env` ke port lain (misal: 5001)
- Jangan lupa update `frontend/.env` juga

### Error: "GEMINI_API_KEY is required"
- Pastikan sudah set API key di `backend/.env`
- Restart backend setelah mengubah `.env`

---

## 📝 Catatan Penting

1. **Semua perintah dijalankan dari folder ROOT** (`science-for-life/`)
2. **Jangan lupa setup `.env`** sebelum menjalankan aplikasi
3. **Database harus dibuat dan di-import schema** terlebih dahulu
4. **MySQL harus running** sebelum menjalankan backend

---

## 🎉 Selesai!

Jika semua langkah sudah dilakukan dengan benar, aplikasi akan berjalan di:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api

Selamat coding! 🚀
