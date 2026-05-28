# Product Requirement Document (PRD)
## Mini Project 3 — Dashboard Cuaca (Weather Dashboard)

### 1. RINGKASAN PROYEK
* **Nama Proyek:** Mini Project 3 — Weather Dashboard
* **Teknologi:** ReactJS (Vite) & CSS Modules
* **Tujuan Utama:** Membangun antarmuka *dashboard* berbasis komponen dengan visual terisolasi menggunakan **CSS Modules** dan mengelola alur data menggunakan **Data Statis Lokal** (tanpa API *fetching*).

---

### 2. FITUR & KEBUTUHAN FUNGSIONAL

#### Fitur A: Layout Dashboard Cuaca (Multi-Widget)
* **User Story:** Sebagai pengguna, saya ingin melihat informasi cuaca saat ini beserta prakiraan cuaca beberapa hari ke depan dalam satu layar yang terorganisir dengan baik.
* **Kebutuhan Teknis:**
  * Menampilkan **Main Widget** (Kota saat ini, suhu besar, status cuaca: Cerah/Hujan, kelembaban, dan kecepatan angin).
  * Menampilkan **Forecast Widget** (Prakiraan cuaca 3-5 hari ke depan dalam bentuk kartu kecil horizontal/vertikal).
  * Menampilkan **Search/Switch Bar** (Komponen statis untuk mensimulasikan perpindahan data cuaca antar kota pilihan).

#### Fitur B: Isolasi Gaya dengan CSS Modules
* **User Story:** Sebagai pengembang, saya ingin memastikan gaya (*styling*) satu komponen tidak bocor atau merusak komponen lainnya.
* **Kebutuhan Teknis:**
  * Setiap komponen wajib memiliki file *.module.css* sendiri (misal: `HeroWidget.module.css`).
  * Menggunakan *class mapping* di React (`className={styles.card}`) untuk memastikan nama *class* di-render secara unik oleh Webpack/Vite.

#### Fitur C: Pengelolaan Data Statis Lokal (State Management)
* **User Story:** Sebagai pengguna, saya ingin bisa memilih nama kota dari daftar untuk melihat simulasi perubahan data cuaca secara instan.
* **Kebutuhan Teknis:**
  * Membuat file tiruan data (`weatherData.js`) yang berisi *array of objects* data cuaca beberapa kota (misal: Jakarta, Bandung, Tokyo).
  * Menggunakan `useState` untuk menyimpan data kota yang sedang aktif/dipilih oleh pengguna.

---

### 3. STRUKTUR DATA LOKAL (MOCK DATA)
Data statis akan disimpan di file terpisah (contoh: `src/data/weatherData.js`):

```javascript
export const weatherData = {
  Jakarta: {
    temp: "32°C",
    condition: "Cerah Berawan",
    humidity: "75%",
    wind: "12 km/h",
    forecast: [
      { day: "Besok", temp: "31°C", cond: "Hujan Ringan" },
      { day: "Kamis", temp: "33°C", cond: "Cerah" },
      { day: "Jumat", temp: "30°C", cond: "Berawan" }
    ]
  },
  Bandung: {
    temp: "24°C",
    condition: "Hujan Petir",
    humidity: "85%",
    wind: "18 km/h",
    forecast: [
      { day: "Besok", temp: "23°C", cond: "Hujan Ringan" },
      { day: "Kamis", temp: "25°C", cond: "Berawan" },
      { day: "Jumat", temp: "24°C", cond: "Hujan Petir" }
    ]
  }
};