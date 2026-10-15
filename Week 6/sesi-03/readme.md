1.Menambahkan gambar dan menyesuaikan dengan style.css:Gambar berhasil ditampilkan pada halaman web dan menyesuaikan ukuran wadahnya tanpa mengalami perubahan rasio. Tampilan gambar menjadi lebih responsif pada berbagai ukuran layar.
2.Kandidat resolusi berhasil diterapkan menggunakan atribut srcset dan sizes. Browser membaca dua kandidat gambar, yaitu 320px dan 640px, lalu memilih LOGO-640.png pada pengujian yang dilakukan. Selanjutnya, pemilihan kandidat diperiksa melalui currentSrc di Console.
3.- Lebar container 400px → padding yang diharapkan 16px.
- Lebar container 520px → padding yang diharapkan 24px.
4.-Mengaktifkan prefers-reduced-motion: reduce melalui DevTools.
-Menguji navigasi menggunakan keyboard.
-Menguji tampilan pada zoom browser 200%.