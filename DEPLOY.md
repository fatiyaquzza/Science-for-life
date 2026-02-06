# Panduan Deploy Science For Life ke Server Ubuntu

Dokumen ini berisi langkah-langkah deploy aplikasi Science For Life (frontend React + backend Node.js + MySQL) ke server Ubuntu yang masih kosong.

---

## 1. Persiapan Server Ubuntu

### 1.1 Update sistem
```bash
sudo apt update && sudo apt upgrade -y
```

### 1.2 Install Node.js (LTS)
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v   # cek versi (v20.x)
npm -v
```

### 1.3 Install MySQL Server
```bash
sudo apt install -y mysql-server
sudo systemctl start mysql
sudo systemctl enable mysql
```

Amankan instalasi MySQL (atur password root, hapus user anonim, nonaktifkan login remote root):
```bash
sudo mysql_secure_installation
```
- Set root password: **Ya**, masukkan password kuat dan simpan.
- Remove anonymous users: **Y**
- Disallow root login remotely: **Y**
- Remove test database: **Y**
- Reload privilege tables: **Y**

### 1.4 Install PM2 (process manager untuk Node.js)
```bash
sudo npm install -g pm2
```

### 1.5 (Opsional) Install Nginx sebagai reverse proxy
```bash
sudo apt install -y nginx
```

### 1.6 (Opsional) Install Git jika belum
```bash
sudo apt install -y git
```

---

## 2. Database MySQL

### 2.1 Login ke MySQL
```bash
sudo mysql -u root -p
```

### 2.2 Buat database dan user
Di dalam MySQL shell:
```sql
CREATE DATABASE science_for_life CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'science_user'@'localhost' IDENTIFIED BY 'GANTI_DENGAN_PASSWORD_KUAT';
GRANT ALL PRIVILEGES ON science_for_life.* TO 'science_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

Ganti `GANTI_DENGAN_PASSWORD_KUAT` dengan password yang aman.

### 2.3 Import schema dan seed (dari mesin lokal atau setelah upload project)
Jika project sudah ada di server (misal di `/var/www/scienceforlife`):
```bash
cd /var/www/scienceforlife
mysql -u science_user -p science_for_life < database/schema.sql
mysql -u science_user -p science_for_life < database/seed.sql
```

---

## 3. Upload / Clone Project ke Server

### Opsi A: Clone dari Git
```bash
sudo mkdir -p /var/www
sudo chown $USER:$USER /var/www
cd /var/www
git clone <URL_REPO_ANDA> scienceforlife
cd scienceforlife
```

### Opsi B: Upload manual (SCP/SFTP)
Upload folder project ke `/var/www/scienceforlife` (atau path lain). Pastikan struktur folder:
- `backend/`
- `frontend/`
- `database/`

---

## 4. Backend (Node.js API)

### 4.1 Masuk ke folder backend
```bash
cd /var/www/scienceforlife/backend
```

### 4.2 Install dependency
```bash
npm install
```

### 4.3 Buat file environment
```bash
nano .env
```

Isi dengan (sesuaikan nilai):
```env
PORT=5000
NODE_ENV=production

# Database
DB_HOST=localhost
DB_USER=science_user
DB_PASSWORD=GANTI_DENGAN_PASSWORD_MySQL
DB_NAME=science_for_life

# JWT (buat string acak panjang, contoh: openssl rand -base64 32)
JWT_SECRET=GANTI_DENGAN_STRING_ACAK_PANJANG

# Opsional: Google AI (jika pakai fitur AI Chat)
# GEMINI_API_KEY=your_gemini_api_key
```

Simpan: `Ctrl+O`, Enter, `Ctrl+X`.

### 4.4 Buat akun admin
```bash
node scripts/seedAdmin.js
```
Default akun admin (lihat di isi script): email `adminSFL@gmail.com`, password `admin123`. **Sebaiknya ganti password setelah login pertama.**

### 4.5 Jalankan backend dengan PM2
```bash
pm2 start server.js --name "scienceforlife-api"
pm2 save
pm2 startup
```
Perintah terakhir akan memberi perintah yang harus dijalankan (biasanya copy-paste output-nya) agar PM2 jalan otomatis saat server reboot.

Cek status:
```bash
pm2 status
pm2 logs scienceforlife-api
```

API berjalan di: `http://localhost:5000` (atau `http://IP_SERVER:5000` dari luar jika firewall mengizinkan).

---

## 5. Frontend (React / Vite)

### 5.1 Build production
```bash
cd /var/www/scienceforlife/frontend
npm install
```

Buat file environment frontend:
```bash
nano .env
```

Isi (ganti dengan URL server/domain Anda):
```env
VITE_API_URL=http://IP_ATAU_DOMAIN_SERVER:5000/api
```
Contoh pakai domain: `VITE_API_URL=https://api.domainanda.com/api`

Lalu build:
```bash
npm run build
```

Output ada di folder `frontend/dist/`.

### 5.2 Menjalankan frontend

**Opsi A: Pakai Nginx (disarankan)**  
Nginx dipakai untuk:
- Menyajikan file static dari `frontend/dist`
- Reverse proxy ke backend di `http://localhost:5000`

**Opsi B: Serve static dengan `serve` (cepat untuk testing)**  
```bash
sudo npm install -g serve
serve -s /var/www/scienceforlife/frontend/dist -l 3000
```
Akses: `http://IP_SERVER:3000`. Agar jalan terus, jalankan dengan PM2:
```bash
pm2 serve /var/www/scienceforlife/frontend/dist 3000 --name "scienceforlife-web"
pm2 save
```

---

## 6. Konfigurasi Nginx (Satu domain untuk web + API)

Asumsi:
- Domain: `scienceforlife.com`
- Frontend (static): root
- API: `http://localhost:5000`

### 6.1 Buat konfigurasi site
```bash
sudo nano /etc/nginx/sites-available/scienceforlife
```

Isi (ganti `scienceforlife.com` dengan domain Anda):
```nginx
server {
    listen 80;
    server_name scienceforlife.com www.scienceforlife.com;
    root /var/www/scienceforlife/frontend/dist;
    index index.html;

    # Frontend (SPA - semua path ke index.html)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Proxy API ke backend Node
    location /api {
        proxy_pass http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Uploads (file dari backend)
    location /uploads {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
    }
}
```

### 6.2 Aktifkan site dan tes Nginx
```bash
sudo ln -s /etc/nginx/sites-available/scienceforlife /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 6.3 Set environment frontend untuk production
Karena API di belakang Nginx, frontend harus memanggil API lewat domain yang sama. Di `frontend/.env` (sebelum build):
```env
VITE_API_URL=/api
```
Lalu build ulang:
```bash
cd /var/www/scienceforlife/frontend && npm run build
```

Dengan begitu, request dari browser ke `/api/...` akan di-proxy Nginx ke `http://127.0.0.1:5000/api/...`.

---

## 7. SSL (HTTPS) dengan Certbot (opsional tapi disarankan)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d scienceforlife.com -d www.scienceforlife.com
```

Ikuti petunjuk. Setelah selesai, Nginx akan otomatis pakai HTTPS. Jika frontend sebelumnya pakai `VITE_API_URL=/api`, tidak perlu diubah.

---

## 8. Ringkasan perintah setelah setup

| Tugas              | Perintah |
|--------------------|----------|
| Cek API            | `pm2 status` / `pm2 logs scienceforlife-api` |
| Restart API        | `pm2 restart scienceforlife-api` |
| Restart Nginx      | `sudo systemctl reload nginx` |
| Update project     | `cd /var/www/scienceforlife && git pull` lalu `cd backend && npm install`, `cd frontend && npm run build` |
| Lihat log error    | `pm2 logs scienceforlife-api --err` |

---

## 9. Checklist sebelum go-live

- [ ] `.env` backend dan frontend tidak di-commit (sudah di `.gitignore`)
- [ ] Password MySQL dan JWT_SECRET kuat dan aman
- [ ] Akun admin default (dari seed) sudah diganti password
- [ ] Firewall: port 80/443 terbuka; port 5000/3000 tidak perlu dibuka jika pakai Nginx
- [ ] Backup database rutin: `mysqldump -u science_user -p science_for_life > backup.sql`

Setelah langkah ini, aplikasi Science For Life siap diakses lewat browser (domain atau IP sesuai konfigurasi Anda).
