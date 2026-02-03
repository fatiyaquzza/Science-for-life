# Science For Life

**Pendidikan untuk Semua**

Platform edukasi interaktif yang membawa ilmu pengetahuan ke kehidupan sehari-hari. Belajar dengan cara yang menyenangkan dan mudah dipahami.

## Tech Stack

- **Frontend**: React.js (JSX) + Vite + React Router v6
- **Backend**: Express.js + Nodemon
- **Database**: MySQL
- **Styling**: Tailwind CSS
- **Font**: Poppins (Google Fonts)
- **AI Integration**: Google Gemini API
- **Colors**: 
  - Primary: #0F5132 (Hijau Tua)
  - Secondary: #2ECC71 (Hijau Terang)
  - Dark: #2F3E34 (Hitam Kehijauan)
  - Light: #EAF7F1 (Putih Kehijauan)

## Struktur Project

```
science-for-life/
├── backend/          # Express.js API
├── frontend/         # React.js App
├── database/         # SQL Schema
└── package.json      # Root scripts
```

## Setup Instructions

> ⚠️ **PENTING:** Semua perintah dijalankan dari folder **ROOT** (`science-for-life/`)

### 1. Install Dependencies

**Dari folder ROOT** (`science-for-life/`), jalankan:

```bash
# Install semua dependencies sekaligus (RECOMMENDED)
npm run install:all
```

Script ini akan otomatis install dependencies di:
- ✅ Root folder (concurrently)
- ✅ Backend folder
- ✅ Frontend folder

**Atau install manual satu per satu:**

```bash
# 1. Di folder ROOT
npm install

# 2. Masuk ke backend
cd backend
npm install

# 3. Masuk ke frontend
cd ../frontend
npm install

# 4. Kembali ke root
cd ..
```

### 2. Database Setup

1. Buat database MySQL dengan nama `science_for_life`
2. Import schema dari `database/schema.sql`:

```bash
mysql -u root -p science_for_life < database/schema.sql
```

### 3. Konfigurasi Environment Variables

**Backend** (`backend/.env`):
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=science_for_life
JWT_SECRET=your_jwt_secret_key_here_change_in_production
GEMINI_API_KEY=your_gemini_api_key_here
```

**Frontend** (`frontend/.env`):
```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Menjalankan Aplikasi

**Dari folder ROOT** (`science-for-life/`):

**Opsi A: Jalankan Bersamaan (RECOMMENDED)**
```bash
npm run dev
```

Ini akan menjalankan backend dan frontend secara bersamaan.

**Opsi B: Jalankan Terpisah (2 Terminal)**

Terminal 1 - Backend:
```bash
npm run dev:backend
```

Terminal 2 - Frontend:
```bash
npm run dev:frontend
```

- ✅ Backend akan berjalan di: `http://localhost:5000`
- ✅ Frontend akan berjalan di: `http://localhost:3000`

> 📖 **Lihat file `SETUP.md` untuk panduan lengkap dan troubleshooting**

## Fitur

### User Features
- ✅ Landing Page dengan modul featured
- ✅ Register & Login dengan JWT authentication
- ✅ Dashboard untuk melihat semua modul
- ✅ Detail modul dengan list sub modul
- ✅ Pretest sebelum belajar materi
- ✅ Materi pembelajaran (video YouTube + PDF)
- ✅ Postest setelah belajar
- ✅ Hasil test dengan passing grade
- ✅ Chat dengan AI untuk materi yang sudah lulus

### Admin Features
- ✅ Admin Dashboard
- ✅ Manajemen Modul (CRUD)
- ✅ Manajemen Sub Modul (CRUD)
- ✅ Manajemen Materi (CRUD dengan upload PDF)
- ✅ Manajemen Soal (Pretest & Postest, Choice & Essay)
- ✅ Manajemen User (Edit & Delete)

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register user baru
- `POST /api/auth/login` - Login (return JWT token)
- `GET /api/auth/me` - Get user info dari token

### Modules
- `GET /api/modules` - Get all modules
- `GET /api/modules/:id` - Get single module
- `POST /api/modules` - Create module (admin only)
- `PUT /api/modules/:id` - Update module (admin only)
- `DELETE /api/modules/:id` - Delete module (admin only)

### Sub Modules
- `GET /api/submodules/module/:moduleId` - Get sub modules by module
- `GET /api/submodules/:id` - Get single sub module
- `POST /api/submodules` - Create sub module (admin only)
- `PUT /api/submodules/:id` - Update sub module (admin only)
- `DELETE /api/submodules/:id` - Delete sub module (admin only)

### Materials
- `GET /api/materials/submodule/:subModuleId` - Get materials by sub module
- `POST /api/materials` - Create material (admin only)
- `PUT /api/materials/:id` - Update material (admin only)
- `DELETE /api/materials/:id` - Delete material (admin only)

### Questions
- `GET /api/questions/submodule/:subModuleId/:type` - Get questions (pretest/postest)
- `POST /api/questions` - Create question (admin only)
- `PUT /api/questions/:id` - Update question (admin only)
- `DELETE /api/questions/:id` - Delete question (admin only)
- `POST /api/questions/submit` - Submit answers dan hitung score

### Progress
- `GET /api/progress/submodule/:subModuleId` - Get user progress
- `GET /api/progress/user/:userId` - Get all user progress

### Users (Admin Only)
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get single user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### AI Chat
- `POST /api/ai/chat` - Send message ke Gemini API

## Database Schema

Lihat `database/schema.sql` untuk struktur lengkap database.

## Default Admin Account

Setelah import schema, buat admin account manual atau gunakan:
- Email: `admin@scienceforlife.com`
- Password: (perlu di-hash dengan bcrypt)

**Catatan**: Password default perlu di-hash. Buat admin baru melalui register atau update langsung di database.

## Production Deployment

1. Build frontend:
```bash
cd frontend
npm run build
```

2. Set environment variables untuk production
3. Gunakan process manager seperti PM2 untuk backend
4. Setup reverse proxy (Nginx) untuk serve static files dan proxy API

## License

MIT

## Author

Science For Life Team
