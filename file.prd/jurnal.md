# Jurnal Vibecoding & Rekayasa Perangkat Lunak

**Nama:** [M.Sovra Aludjava Pasopati]
**Kelas:** [11 B]
**Nama Proyek:** Dashboard Cuaca (Weather Dashboard)
**Link Vercel:** [-]

---

### 1. Definisi Stack & Arsitektur

* **Lingkungan Pengembangan:** ReactJS dengan Vite
* **Routing:** `react-router-dom` (opsional, untuk navigasi halaman jika ada)
* **Styling:** CSS Modules
* **Manajemen State:** `useState`
* **AI Code Editor / LLM Assistant:** [Tulis AI yang kamu gunakan, misal: ChatGPT / Trae / Claude]

#### Alasan Pemisahan Komponen:
Saya memisahkan antarmuka dashboard ini menjadi komponen-komponen kecil seperti `Sidebar` (untuk daftar pilihan kota), `MainWidget` (untuk informasi utama cuaca saat ini), dan `ForecastCard` (untuk prakiraan cuaca beberapa hari ke depan). Alasan utamanya adalah agar kode menjadi lebih modular, rapi, dan mudah di-maintain. Selain itu, dengan menggunakan CSS Modules, saya dapat memastikan bahwa gaya (*styling*) pada `MainWidget` tidak akan bocor atau merusak tampilan komponen `ForecastCard`, karena *class name* yang dihasilkan akan terisolasi secara unik.

**Struktur folder `src/` milik saya:**
```text
src/
├── components/
│   ├── Sidebar/
│   │   ├── Sidebar.jsx
│   │   └── Sidebar.module.css
│   ├── MainWidget/
│   │   ├── MainWidget.jsx
│   │   └── MainWidget.module.css
│   └── Forecast/
│       ├── ForecastCard.jsx
│       └── ForecastCard.module.css
├── data/
│   └── weatherData.js
├── App.jsx
└── App.module.css

---

### 2. Strategi Prompting

Prompt 1 (Fokus pada Logika / State):
"Saya memiliki sebuah file data statis lokal bernama weatherData.js yang berisi objek cuaca untuk beberapa kota seperti Jakarta dan Bandung. Di komponen App.jsx, buatkan logika useState untuk menyimpan nama kota yang sedang aktif dipilih oleh pengguna. Berikan juga fungsi handler sederhana agar ketika pengguna mengklik salah satu kota di komponen Sidebar, data cuaca di komponen MainWidget otomatis ikut berubah sesuai kota yang dipilih."

Prompt 2 (Fokus pada UI / Routing):
"Saya ingin membuat layout dashboard cuaca yang responsif menggunakan CSS Grid dan Flexbox. Buat komponen layout utama yang membagi halaman menjadi dua kolom: sebelah kiri untuk Sidebar (pilihan kota) dan sebelah kanan untuk ringkasan cuaca. Terapkan metode CSS Modules. Berikan contoh kode file JSX dan file .module.css-nya dengan desain yang modern atau memiliki tema gradasi warna biru gelap."

Hasil Evaluasi Prompt:
AI memberikan struktur komponen dan CSS Modules yang cukup rapi pada percobaan pertama. Namun, untuk bagian pemetaan (mapping) class pada CSS Modules, AI sempat menggunakan sintaks penulisan class standar (className="weatherCard") dan bukan sintaks module (className={styles.weatherCard}). Saya harus memberikan prompt koreksi seperti: "Perbaiki kodenya agar menggunakan objek styles dari CSS Modules untuk pemanggilan class-nya." Setelah dikoreksi, barulah AI memberikan kode yang benar dan terisolasi dengan tepat.

---

### 3. Log Problem Solving
Deskripsi Error / Bug: Saat saya mencoba memilih kota yang baru di komponen Sidebar, data cuaca di komponen MainWidget tidak berubah dan layar justru menjadi blank (putih kosong) atau menampilkan error undefined.

Langkah Investigasi:
Saya melakukan pemeriksaan dengan memasang console.log(selectedCity) dan console.log(weatherData[selectedCity]) di dalam komponen utama sebelum fungsi return. Dari hasil inspect element di konsol browser, saya melihat bahwa state nama kota berubah (misal: dari "Jakarta" menjadi "Bandung"), tetapi data yang dikirim ke komponen bernilai undefined karena terjadi salah ketik (typo) pada pencocokan huruf kapital (case-sensitive) antara key yang ada di file data statis (weatherData.js) dengan teks string yang dikirim dari tombol di komponen Sidebar.

Kolaborasi dengan AI:
Saya memberikan instruksi perbaikan ke AI seperti ini: "Saat tombol kota diklik, state city sudah berubah tetapi data cuacanya tidak mau muncul dan menjadi undefined. Ini file data statis weatherData.js milik saya dan ini kode Sidebar.jsx saya. Bagaimana cara memastikan pencocokan data ini aman dari masalah huruf kapital (case-sensitive) agar tidak error?"

Solusi Akhir:
Logika pemecahannya adalah dengan melakukan standarisasi format string pada data. Di dalam fungsi handler pembacaan data, string nama kota diubah terlebih dahulu menjadi huruf kecil semua menggunakan fungsi .toLowerCase() sebelum dicocokkan dengan key yang ada di objek data statis lokal, sehingga sistem pencarian data cuaca menjadi lebih fleksibel dan tidak mudah rusak karena salah ketik huruf kapital.