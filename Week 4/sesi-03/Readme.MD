width:Lebar main mengikuti ukuran browser.
max-width: Lebar main punya batas maksimum sehingga tidak menjadi terlalu lebar pada layar besar.
Browser kecil =main ikut mengecil
Browser besar =main membesar
Ketika nilai --brand diubah, semua komponen yang menggunakan var(--brand) ikut berubah secara otomatis.
Mengubah font-size dari 1 menjadi 1.5 membuat huruf di website menjadi lebih besar
font-size: 1rem menghasilkan ukuran teks sekitar 16px pada Computed.
font-size: 1.5rem menghasilkan ukuran teks sekitar 24px pada Computed.
Masalah  yang diperbaiki adalah aturan width: 240px pada main yang membuat ukuran wadah terlalu kecil. Aturan tersebut dihapus dan diganti dengan width: 90% serta max-width: 60rem agar wadah responsif dan dapat membesar sesuai ukuran layar.
