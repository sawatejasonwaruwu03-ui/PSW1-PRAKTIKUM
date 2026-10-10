Guna dalam menggunakan navigasi fleksibel adalah :Flexbox membuat navigasi lebih fleksibel terhadap ukuran layar.
Screenshot 2 — Zoom 200%
Pada zoom 200%, area tampilan website menjadi lebih sempit secara efektif sehingga susunan dan ukuran card dapat berubah. Flexbox menyesuaikan ukuran card berdasarkan ruang yang tersedia, sedangkan overflow-wrap: anywhere membantu menjaga judul tetap berada di dalam card.
Flex-basis: ukuran awal yang dijadikan acuan card.
Ukuran final: ukuran card setelah browser mempertimbangkan lebar container, jarak gap, jumlah card, dan ruang yang tersedia.
Overlay Flexbox digunakan untuk melihat bagaimana elemen di dalam container Flexbox membagi ruang.
.card h2 berarti memilih elemen judul <h2> yang berada di dalam card.
overflow-wrap: anywhere; memungkinkan teks dipotong ke baris berikutnya, bahkan jika satu kata terlalu panjang.
Hasilnya, teks tidak mudah melampaui batas card.
Saat mencoba 360x,text tetap berada dalam border.
Saat mencoba 1200,text tetap berada dalam border.
