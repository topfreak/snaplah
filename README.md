# 📸 Snaplah - Photostrip Creator

> **Ciptakan Photostrip Unikmu, Langsung dari Browser**

Snaplah adalah aplikasi web modern yang memungkinkan Anda membuat photostrip kreatif layaknya di studio foto, langsung dari browser Anda. Pilih frame favorit, berpose dengan timer, dan bagikan hasilnya dalam hitungan menit!

## ✨ Fitur Utama

- 🎨 **Berbagai Frame Kreatif** - Pilihan frame photostrip yang beragam dan menarik
- ⏰ **Timer Otomatis** - Sistem timer untuk membantu Anda berpose dengan sempurna
- 🎛️ **Editor Lengkap** - Atur ulang posisi foto, tambahkan filter estetik, dan sesuaikan layout
- 💾 **Download Instan** - Unduh hasil photostrip Anda dalam kualitas tinggi
- 📱 **Responsive Design** - Bekerja sempurna di desktop, tablet, dan mobile
- 🚀 **Performa Tinggi** - Dibangun dengan teknologi modern untuk pengalaman yang lancar

## 🛠️ Teknologi yang Digunakan

- **Frontend Framework**: React 19.1.0
- **Routing**: React Router DOM 7.6.3
- **Styling**: Tailwind CSS 4.1.11
- **Build Tool**: Vite 7.0.0
- **Icons**: Lucide React 0.525.0
- **Analytics**: Google Analytics 4 (react-ga4)
- **Deployment**: Vercel

## 📦 Instalasi

### Prasyarat
- Node.js (versi 18 atau lebih baru)
- npm atau yarn

### Langkah Instalasi

1. **Clone repository**
   ```bash
   git clone https://github.com/topfreak/snaplah.git
   cd snaplah-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

4. **Buka aplikasi**
   Akses `http://localhost:5173` di browser Anda

## 📋 Scripts Available

```bash
# Menjalankan development server
npm run dev

# Build untuk production
npm run build

# Preview build production
npm run preview

# Linting kode
npm run lint
```

## 🏗️ Struktur Project

```
snaplah-app/
├── public/
│   ├── snaplah.svg          # Logo aplikasi
│   └── topik.png           # Asset gambar
├── src/
│   ├── components/         # Komponen UI
│   │   ├── ComparisonTable.jsx
│   │   ├── CTA.jsx
│   │   ├── FAQ.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── ForWhom.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── InspirationGallery.jsx
│   │   ├── Pricing.jsx
│   │   ├── RouteChangeTracker.jsx
│   │   └── Testimonials.jsx
│   ├── icons/              # Komponen icon
│   │   ├── IconBolt.jsx
│   │   ├── IconCode.jsx
│   │   ├── IconVercel.jsx
│   │   └── IconWind.jsx
│   ├── pages/              # Halaman utama
│   │   ├── HomePage.jsx
│   │   ├── TentangPage.jsx
│   │   ├── BerlanggananPage.jsx
│   │   └── KontakPage.jsx
│   ├── App.jsx             # Komponen utama
│   ├── main.jsx           # Entry point
│   └── index.css          # Styling global
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
└── vercel.json
```

## 🌐 Halaman Aplikasi

- **Home** (`/`) - Halaman utama dengan hero section dan fitur-fitur
- **Tentang** (`/tentang`) - Informasi lengkap tentang aplikasi
- **Berlangganan** (`/berlangganan`) - Paket berlangganan dan pricing
- **Kontak** (`/kontak`) - Halaman kontak dan dukungan

## 🎯 Komponen Utama

### Homepage Components
- **Hero** - Section pembuka dengan CTA utama
- **HowItWorks** - Panduan cara menggunakan aplikasi
- **Features** - Fitur-fitur editing dan kustomisasi
- **InspirationGallery** - Gallery photostrip untuk inspirasi
- **ForWhom** - Target pengguna aplikasi
- **Testimonials** - Testimoni pengguna
- **Pricing** - Paket harga dan berlangganan
- **FAQ** - Pertanyaan yang sering diajukan
- **CTA** - Call-to-action untuk memulai

## 🚀 Deployment

Aplikasi ini dikonfigurasi untuk deployment di Vercel dengan Single Page Application (SPA) routing.

### Deploy ke Vercel
1. Push kode ke repository GitHub
2. Hubungkan repository dengan Vercel
3. Deploy otomatis akan berjalan

### Build Manual
```bash
npm run build
```

File hasil build akan berada di folder `dist/`

## 🎨 Customization

### Tailwind CSS
Konfigurasi Tailwind CSS dapat disesuaikan di `tailwind.config.js`

### Styling
- Global styles: `src/index.css`
- Component-specific styles: Menggunakan Tailwind classes

## 🔧 Development

### Linting
```bash
npm run lint
```

### Code Style
Project ini menggunakan ESLint dengan konfigurasi untuk React dan modern JavaScript.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork repository
2. Buat branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Project ini menggunakan lisensi MIT. Lihat file `LICENSE` untuk detail.

## 👨‍💻 Author

**Taufiq Hidayatullah**
- Universitas: Universitas Amikom Yogyakarta
- Program Studi: S1-Informatika
- Email: topik.id.x@gmail.com

---

**Dibuat dengan ❤️ menggunakan React dan Tailwind CSS**
