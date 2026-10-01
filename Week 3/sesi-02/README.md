1.Peran id:nama pengenal khusus yang diberikan kepada suatu bagian HTML.
2.name:untuk digunakan sebagai nama data yang akan dikirim ketika form diproses.
3.type:untuk menentukan jenis input.
4.http://127.0.0.1:5500/psw1-week-03/sesi-02/index.html?nama=fufuafa&email=fufufafa%40awikwok.com&prodi=trpl&mode=daring&catatan=HIDUP+JOKOWE%21(Merupakan Pasangan Nama-Nilai yang Terlihat.)
5.http://127.0.0.1:5500/psw1-week-03/sesi-02/index.html?email=fufuafa%40awikwom.com&prodi=trpl&mode=daring&catatan=ada-ada(Jika input name dihapus,maka nama tidak muncul di URL website)
6.http://127.0.0.1:5500/psw1-week-03/sesi-02/index.html?nama=fufufafa&email=fufuafa%40awikwom.com&prodi=trpl&mode=luring&catatan=ada-ada(Jika input name ada,nama ada di URL website.)
7.penambahan disabled membuat form nama tidak bisa di gunakan.
8.Tombol submit dapat bekerja.
9.Uji label:Saat menekan nama lengkap maka akan di tujukan dalam pengisian form
 Radio:Tombol untuk memilih mode kehadiran dapat di pilih hanya 1 saja.
Checkbox:Untuk memilih dari topik yang diminati bisa memilih lebih dari 1 pilihan.
Data yang tersimpan:Jika kita mengisi form dan membuka devtools,buka dalam console
lalu 
"const form = document.querySelector("form");
[...new FormData(form).entries()];"
maka akan ada penjelasan mengenai apa yang kita isi

PERTANYAAN LAPORAN
1.Mengapa telepon bukan kuantitas number?
=karena nomor telepon adalah identitas/code bukan angka untuk perhitungan.
2.Apa beda label pilihan dan legend kelompok?
= label digunakan untuk menjelaskan satu inputan tertentu.
legend kelompok untuk memberi judul pada satu kelompok inputan.
3.Apa beda id dan name?
=id digunakan untuk identitas suatu elemen.name digunakan untuk nama data yang dikirim ketika form disubmit.
4.Apa yang terjadi pada checkbox tidak dicentang?
=data tidak akan dikirim sebagai data ketika form disbubmit.