# Science For Life

Platform pembelajaran sains interaktif (modul, pretest/postest, materi, AI chat). Stack: **React (Vite)** + **Node.js (Express)** + **MySQL**.

---

## Requirements

- **Node.js** 18+ (disarankan 20 LTS)
- **MySQL** 8.x
- **npm** (bawaan Node)

---

## Setup Cepat

### 1. Clone & install dependency

```bash
git clone <url-repo> scienceforlife && cd scienceforlife
cd backend && npm install
cd ../frontend && npm install
```

### 2. Database

Buat database dan user di MySQL, lalu import schema + seed:

```bash
mysql -u root -p -e "CREATE DATABASE science_for_life;"
mysql -u root -p science_for_life < database/schema.sql
mysql -u root -p science_for_life < database/seed.sql
```

### 3. Environment

**Backend** (`backend/.env`):

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=science_for_life
JWT_SECRET=your_jwt_secret_min_32_chars
```

**Frontend** (`frontend/.env`):

```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Akun admin (opsional)

```bash
cd backend && node scripts/seedAdmin.js
```

Default: email `adminSFL@gmail.com`, password `admin123` (lihat di `backend/scripts/seedAdmin.js`).

### 5. Jalankan

**Terminal 1 – Backend:**

```bash
cd backend && npm run dev
```

**Terminal 2 – Frontend:**

```bash
cd frontend && npm run dev
```

Buka **http://localhost:5173**. API di **http://localhost:5000**.

---

## Scripts

| Lokasi   | Perintah             | Keterangan              |
|----------|----------------------|-------------------------|
| Backend  | `npm run dev`        | API dengan nodemon      |
| Backend  | `npm start`          | API production          |
| Backend  | `npm run seed:admin` | Buat/update akun admin |
| Frontend | `npm run dev`        | Dev server (Vite)      |
| Frontend | `npm run build`      | Build production        |
| Frontend | `npm run preview`    | Preview build           |

---

## Struktur Project

```
scienceforlife/
├── backend/          # API Express (auth, modul, soal, progress, contact, AI)
├── frontend/         # React + Vite + Tailwind
├── database/        # schema.sql, seed.sql
├── DEPLOY.md         # Panduan deploy ke server Ubuntu
└── README.md
```

---

## Deploy

Langkah lengkap (Ubuntu, MySQL, Nginx, PM2, SSL) ada di **[DEPLOY.md](./DEPLOY.md)**.
