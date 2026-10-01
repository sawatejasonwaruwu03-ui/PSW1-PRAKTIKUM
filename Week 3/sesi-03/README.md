1.Jika mengisi tiket 0,maka tidak bisa mengsubmit formulir tersebut karena minimum mengisi tiket adalah 1
2.Jika mengisi tiket 1 dan 5,itu bisa mengsubmit
3.Jika mengisi tiket 6 tidak bisa mengsubmit karena lebih dari batasan isianya.
4.Jika mengisi tiket 1.5 tidak bisa karena tidak kelipatan 1.

5.Jika mengisi 0: gagal karena hanya terdiri dari 1 angka, bukan 6 angka.
6.Jika mengisi 12345:gagal karena hanya terdiri dari 5 angka, sedangkan harus tepat 6 angka.
7.Jika mengisi abc123:gagal karena mengandung huruf a, b, dan c, sedangkan pattern hanya menerima angka 0–9.
8.Jika mengisi 001234:berhasil karena terdiri dari tepat 6 angka dan angka 0 di depan tetap.
9.Tidak mengalami kendala

10.Jika required di hapus maka bagian yang required nya tidak harus/wajib di isi,begitupun sebaliknya jika required di biarkan maka bagian tersebut wajib di isi.

11.Server tetap perlu melakukan validasi karena validasi  dapat diubah oleh pengguna. Oleh karena itu, server harus memeriksa kembali data yang dikirim sebelum data diproses atau disimpan.
