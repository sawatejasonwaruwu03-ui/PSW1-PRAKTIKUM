1.Style.css termuat 200,berarti css nya berjalan dengan baik.
2.Hasil dari mengganti nama class adalah untuk membuktikan bahwa CSS hanya diterapkan kalau nama class-nya sesuai.
3.Karena .card p memiliki specificity yang lebih tinggi tidak bisa digantikan Jadi, meskipun .notice ditulis lebih dulu dan .card p ditulis setelahnya, .card p tetap menang.
4.Lebar content adalah 240 px, padding kiri dan kanan masing-masing 16 px, serta border kiri dan kanan masing-masing 2 px.
Lebar tanpa margin:
240 + 16 + 16 + 2 + 2 = 276 px.
5.Kasus normal CSS dan class sesuai (card, notice), Tindakan nya adalah Membuka halaman dan memeriksa CSS melalui DevTools,hasilnya adalah CSS berhasil diterapkan pada elemen yang memiliki class yang sesuai
6.Kasus batas: .card diberi width: 240px, padding: 16px, border: 2px,Tindakanya adalah Memeriksa Box Model di DevTools dengan content-box, kemudian border-box,hasilnya adalah content-box menghasilkan 276px, sedangkan border-box menghasilkan 240px
7.Kasus Gagal:Path CSS dibuat salah / class card diubah,Tindakanya adalah Reload halaman dan memeriksa Console/Styles,hasilnya adalah Muncul 404 jika path CSS salah dan gaya tidak muncul
8.Latihan mandiri yang no 2,menambah 1 data yang panjang
Jika teks petunjuk dibuat lebih panjang, teks akan membungkus ke beberapa baris. Lebar .card tetap mengikuti aturan CSS dan tidak berubah secara tidak terduga.Hasil aktual: Teks petunjuk yang panjang membungkus menjadi beberapa baris. Ukuran dan posisi .card tetap sesuai dengan aturan CSS.