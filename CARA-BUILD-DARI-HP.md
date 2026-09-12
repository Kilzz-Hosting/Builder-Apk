# Cara Build APK KilzzTemp Tanpa PC (via GitHub Actions)

Saya tidak bisa langsung meng-compile APK di sini karena butuh Android SDK + Gradle + koneksi internet penuh, yang tidak tersedia di sandbox ini. Tapi proyek ini sudah saya siapkan supaya kamu bisa build otomatis lewat HP, gratis, pakai GitHub Actions.

## Langkah-langkah

1. Buat akun GitHub (kalau belum ada) via browser HP: https://github.com/signup
2. Buat repository baru (public/private bebas), misal nama `kilzztemp-app`.
3. Upload semua isi folder zip ini ke repo tersebut (bisa lewat GitHub mobile app: tombol "+" > Upload files, tarik/pilih semua file dan folder termasuk `.github`).
4. Buka tab **Actions** di repo tersebut, pilih workflow **"Build KilzzTemp APK"**, klik **Run workflow**.
5. Tunggu ±5-10 menit sampai selesai (centang hijau).
6. Buka hasil run tersebut, scroll ke bagian **Artifacts**, download **KilzzTemp-debug-apk** (berupa file .zip berisi app-debug.apk).
7. Extract, lalu install app-debug.apk di HP Android (aktifkan "Install dari sumber tidak dikenal" kalau diminta).

## Yang sudah disiapkan otomatis
- Nama app: **KilzzTemp**
- Icon & splash screen: diambil dari `resources/icon.png` (gambar yang kamu kirim)
- `minSdkVersion` diset ke 21 (Android 5.0) supaya bisa jalan dari Android 5 sampai Android 10 ke atas

## Alternatif
Kalau tidak mau pakai GitHub, kamu bisa pinjam PC sebentar untuk install Android Studio, lalu jalankan perintah di README.md asli.
