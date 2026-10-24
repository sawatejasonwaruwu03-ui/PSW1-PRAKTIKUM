1.Git Status:memeriksa perubahan file dan memastikan tidak ada file pribadi atau password yang ikut dilacak.
2.Simulasi review dilakukan untuk memeriksa perubahan kode pada branch fitur-petunjuk dibandingkan dengan branch utama main. Review bertujuan memastikan petunjuk format pada formulir mudah dipahami, kode HTML mudah dibaca, dan informasi bantuan terhubung dengan input yang sesuai.
3.Tugas 5 — Menggabungkan Perubahan (Merge)

Proses penggabungan perubahan dari branch fitur-petunjuk ke branch utama main berhasil dilakukan menggunakan perintah git merge fitur-petunjuk. Git menggunakan metode Fast-forward sehingga perubahan berhasil digabungkan tanpa konflik. Riwayat commit tetap tersimpan dan dapat diperiksa menggunakan perintah git log --oneline --max-count=5. Status repository menunjukkan working tree clean, yang berarti tidak ada perubahan yang belum di-commit. Dengan demikian, proses merge lokal telah berhasil dilakukan sesuai instruksi praktikum.


4.Cascade: browser menentukan aturan CSS mana yang diterapkan.
Specificity: selector yang lebih spesifik biasanya mengalahkan selector yang kurang spesifik.
Urutan deklarasi: jika specificity dan prioritas aturan sama, deklarasi yang ditulis terakhir akan menang.Contoh
1.Aturan pertama membuat teks .notice berwarna merah.
2.Aturan kedua membuat teks .notice berwarna biru.
=Karena kedua selector memiliki tingkat spesifisitas yang sama, aturan yang ditulis paling akhir menang. Jadi, teks menjadi biru.