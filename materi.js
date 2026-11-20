const MATERI=[
{judul:"Konsep Dasar Basis Data",ringkas:"Data, DBMS, tabel, kunci, dan tahap perancangan.",poin:[
{t:"Data, informasi, dan basis data",h:`<p><b>Data</b> adalah fakta mentah, misalnya "Rina" atau "85". <b>Informasi</b> adalah data yang sudah bermakna: "Rina mendapat nilai 85". <b>Basis data</b> adalah kumpulan data yang saling berhubungan dan disimpan terorganisasi agar mudah dikelola dan dicari.</p><div class="tip">Analogi: basis data seperti lemari arsip yang rapi. Mencari satu berkas jadi cepat.</div><p>Tanpa basis data muncul data ganda, data tidak konsisten, dan sulit dicari. Basis data mengurangi masalah itu.</p>`},
{t:"DBMS",h:`<p><b>DBMS (Database Management System)</b> adalah perangkat lunak untuk membuat, mengelola, dan mengamankan basis data. Contoh: MySQL, MariaDB, PostgreSQL, SQL Server, Oracle.</p><ul><li>Mendefinisikan struktur data</li><li>Menyimpan, mengubah, menghapus, dan mengambil data</li><li>Mengatur hak akses dan keamanan</li><li>Menjaga konsistensi serta backup data</li></ul><div class="awas">Kesalahan umum: menyamakan DBMS dengan basis data. DBMS pengelolanya, basis data isinya.</div>`},
{t:"Tabel, baris, dan kolom",h:`<p>Basis data relasional menyimpan data dalam <b>tabel</b>. <b>Kolom</b> (field) adalah jenis informasi, <b>baris</b> (record) adalah satu data lengkap.</p><table><tr><th>NIM</th><th>Nama</th><th>Prodi</th></tr><tr><td>2405903040082</td><td>Rina</td><td>Teknologi Informasi</td></tr><tr><td>2405903040091</td><td>Budi</td><td>Teknologi Informasi</td></tr></table><p>Antartabel dihubungkan dengan kunci, sehingga data tidak perlu ditulis berulang.</p>`},
{t:"Jenis kunci (key)",h:`<ul><li><b>Primary key (PK):</b> identitas unik baris, tidak boleh kosong. Contoh: NIM.</li><li><b>Candidate key:</b> atribut yang layak jadi PK.</li><li><b>Alternate key:</b> candidate key yang tidak dipilih jadi PK.</li><li><b>Composite key:</b> PK dari lebih dari satu atribut, misalnya (NIM, KodeMK).</li><li><b>Foreign key (FK):</b> atribut yang merujuk ke PK tabel lain.</li></ul><div class="awas">Nama tidak cocok jadi PK karena bisa kembar.</div>`},
{t:"Tahapan perancangan basis data",h:`<ol><li><b>Analisis kebutuhan:</b> data apa yang perlu disimpan.</li><li><b>Perancangan konseptual:</b> membuat ERD.</li><li><b>Perancangan logis:</b> mengubah ERD menjadi tabel dengan PK dan FK, termasuk normalisasi.</li><li><b>Perancangan fisik:</b> menentukan tipe data dan menulis SQL.</li><li><b>Implementasi:</b> mengisi data, menguji, dan merawat.</li></ol><div class="tip">ERD ada di tahap kedua. Itulah mengapa Bab 2 sangat penting.</div>`}]},
{judul:"Entity Relationship Diagram",ringkas:"Entitas, atribut, relasi, kardinalitas, PK/FK, dan langkah merancang.",poin:[
{t:"Apa itu ERD dan simbolnya",h:`<p><b>ERD</b> adalah diagram yang menggambarkan struktur basis data secara konseptual, dibuat sebelum tabel dan SQL. Ibarat denah sebelum membangun rumah.</p><table><tr><th>Komponen</th><th>Simbol (notasi Chen)</th></tr><tr><td>Entitas</td><td>Persegi panjang</td></tr><tr><td>Atribut</td><td>Elips</td></tr><tr><td>Atribut kunci</td><td>Elips, nama bergaris bawah</td></tr><tr><td>Relasi</td><td>Belah ketupat</td></tr><tr><td>Atribut bernilai banyak</td><td>Elips ganda</td></tr><tr><td>Atribut turunan</td><td>Elips garis putus-putus</td></tr></table><div class="awas">Kesalahan umum: menggambar relasi dengan persegi panjang atau lupa menarik garis penghubung.</div>`},
{t:"Entitas",h:`<p><b>Entitas</b> adalah objek yang datanya perlu disimpan, berwujud (Mahasiswa, Buku) atau abstrak (Mata Kuliah, Pesanan). Entitas kuat punya kunci sendiri, entitas lemah bergantung pada entitas lain.</p><div class="tip">Cari kata benda penting pada kasus, lalu tanya: apakah saya menyimpan banyak data tentangnya? Kalau ya, itu entitas.</div><div class="awas">Nama orang (misalnya "Rina") bukan entitas. Entitasnya Mahasiswa.</div>`},
{t:"Atribut dan jenisnya",h:`<table><tr><th>Jenis</th><th>Penjelasan</th><th>Contoh</th></tr><tr><td>Kunci</td><td>Pengenal unik</td><td>NIM</td></tr><tr><td>Sederhana</td><td>Tidak bisa dipecah</td><td>Jenis kelamin</td></tr><tr><td>Gabungan</td><td>Bisa dipecah</td><td>Alamat: jalan, kota</td></tr><tr><td>Bernilai banyak</td><td>Beberapa nilai</td><td>Nomor telepon</td></tr><tr><td>Turunan</td><td>Dihitung dari atribut lain</td><td>Umur dari tanggal lahir</td></tr></table><div class="awas">NISN atau NIM adalah atribut, bukan relasi. Atribut berupa jenis informasi (nama, alamat), bukan isi datanya.</div>`},
{t:"Relasi",h:`<p><b>Relasi</b> adalah hubungan antarentitas, diberi nama kata kerja: Mahasiswa <i>mengambil</i> Mata Kuliah, Dosen <i>mengajar</i> Mata Kuliah.</p><ul><li><b>Unary:</b> entitas berhubungan dengan dirinya sendiri.</li><li><b>Binary:</b> dua entitas (paling umum).</li><li><b>Ternary:</b> tiga entitas sekaligus.</li></ul><p>Relasi boleh punya atribut. Contoh: relasi "mengambil" punya atribut Nilai dan Semester.</p>`},
{t:"Kardinalitas",h:`<table><tr><th>Jenis</th><th>Arti</th><th>Contoh</th></tr><tr><td>1:1</td><td>Satu ke satu</td><td>Dosen dan ruang kerja pribadi</td></tr><tr><td>1:M</td><td>Satu ke banyak</td><td>Prodi dan Mahasiswa</td></tr><tr><td>M:M</td><td>Banyak ke banyak</td><td>Mahasiswa dan Mata Kuliah</td></tr></table><div class="tip"><b>Teknik dua pertanyaan:</b> (1) satu A berhubungan dengan berapa B? (2) satu B berhubungan dengan berapa A? Jawaban "satu, banyak" berarti 1:M.</div><div class="awas">Membaca hanya satu arah membuat 1:M tertukar dengan M:M.</div>`},
{t:"Primary key dan foreign key pada ERD",h:`<p>Setiap entitas wajib punya PK. Saat ERD diubah menjadi tabel, FK ditentukan oleh kardinalitas:</p><table><tr><th>Kardinalitas</th><th>Penempatan kunci</th></tr><tr><td>1:M</td><td>PK sisi "satu" menjadi FK di tabel sisi "banyak"</td></tr><tr><td>1:1</td><td>PK salah satu tabel menjadi FK di tabel lain</td></tr><tr><td>M:M</td><td>Buat tabel penghubung, PK gabungan dari kedua PK</td></tr></table><p>Contoh: Mahasiswa (NIM) dan Mata Kuliah (KodeMK) menjadi tabel KRS dengan PK (NIM, KodeMK) dan atribut Nilai.</p>`},
{t:"Langkah merancang ERD",h:`<ol><li>Baca kasus dua kali, garis bawahi kata benda dan kata kerja.</li><li>Tentukan entitas.</li><li>Tentukan atribut tiap entitas.</li><li>Tentukan PK.</li><li>Tentukan relasi dan namanya.</li><li>Tentukan kardinalitas dengan teknik dua pertanyaan.</li><li>Gambar ERD.</li><li>Ubah ke tabel (FK dan tabel penghubung).</li><li>Periksa ulang.</li></ol><div class="tip">Daftar periksa: semua entitas punya PK, tidak ada nama orang sebagai atribut, relasi berbentuk belah ketupat, semua entitas terhubung garis, kardinalitas tertulis di kedua sisi.</div>`},
{t:"Kesalahan umum pada ERD",h:`<table><tr><th>Kesalahan</th><th>Perbaikan</th></tr><tr><td>Atribut ditulis sebagai relasi</td><td>Tanyakan: ini objek berdata banyak atau satu informasi?</td></tr><tr><td>Nama orang jadi atribut</td><td>Pakai jenis informasi: Nama, Alamat, Kelas</td></tr><tr><td>Relasi digambar persegi panjang</td><td>Pakai belah ketupat</td></tr><tr><td>Garis penghubung tidak dibuat</td><td>Pakai daftar periksa</td></tr><tr><td>Kardinalitas salah arah</td><td>Teknik dua pertanyaan</td></tr></table>`}]},
{judul:"Perintah SQL",ringkas:"DDL, DML, DCL, dan TCL dengan contoh MySQL.",poin:[
{t:"Pengenalan SQL",h:`<p><b>SQL (Structured Query Language)</b> adalah bahasa standar untuk mengelola basis data relasional.</p><table><tr><th>Kelompok</th><th>Fungsi</th><th>Perintah</th></tr><tr><td>DDL</td><td>Mendefinisikan struktur</td><td>CREATE, ALTER, DROP</td></tr><tr><td>DML</td><td>Mengelola isi data</td><td>INSERT, SELECT, UPDATE, DELETE</td></tr><tr><td>DCL</td><td>Hak akses</td><td>GRANT, REVOKE</td></tr><tr><td>TCL</td><td>Transaksi</td><td>COMMIT, ROLLBACK, SAVEPOINT</td></tr></table><div class="tip">Akhiri perintah dengan titik koma (;). Contoh memakai MySQL.</div>`},
{t:"DDL: membuat struktur",h:`<pre>CREATE DATABASE akademik;
USE akademik;

CREATE TABLE prodi (
  kode_prodi CHAR(4) PRIMARY KEY,
  nama_prodi VARCHAR(50) NOT NULL
);
CREATE TABLE mahasiswa (
  nim VARCHAR(15) PRIMARY KEY,
  nama VARCHAR(50) NOT NULL,
  kode_prodi CHAR(4),
  FOREIGN KEY (kode_prodi) REFERENCES prodi(kode_prodi)
);
ALTER TABLE mahasiswa ADD alamat VARCHAR(100);
DROP TABLE mahasiswa;</pre><div class="awas">Buat tabel induk (prodi) lebih dulu daripada tabel anak (mahasiswa). Saat menghapus, urutannya dibalik.</div>`},
{t:"DML: mengelola data",h:`<pre>INSERT INTO prodi VALUES ('TI01','Teknologi Informasi');
INSERT INTO mahasiswa (nim,nama,kode_prodi)
VALUES ('2405903040082','Rina','TI01');

SELECT nim, nama FROM mahasiswa WHERE kode_prodi='TI01';
SELECT * FROM mahasiswa ORDER BY nama ASC;

UPDATE mahasiswa SET nama='Rina Amanda'
WHERE nim='2405903040082';
DELETE FROM mahasiswa WHERE nim='2405903040082';

SELECT m.nim, m.nama, p.nama_prodi
FROM mahasiswa m
JOIN prodi p ON m.kode_prodi = p.kode_prodi;</pre><div class="awas">UPDATE atau DELETE tanpa WHERE mengenai semua baris. Selalu periksa WHERE.</div>`},
{t:"DCL: hak akses",h:`<pre>CREATE USER 'asisten'@'localhost' IDENTIFIED BY 'sandi123';
GRANT SELECT, INSERT ON akademik.* TO 'asisten'@'localhost';
REVOKE INSERT ON akademik.* FROM 'asisten'@'localhost';</pre><p><b>GRANT</b> memberi hak, <b>REVOKE</b> mencabutnya. Berikan hak sekecil yang dibutuhkan.</p>`},
{t:"TCL: transaksi",h:`<p>Transaksi adalah rangkaian perintah yang dianggap satu kesatuan: semua berhasil atau semua dibatalkan.</p><pre>START TRANSACTION;
UPDATE rekening SET saldo = saldo - 500000 WHERE id = 1;
UPDATE rekening SET saldo = saldo + 500000 WHERE id = 2;
COMMIT;   -- simpan permanen
-- ROLLBACK;  -- batalkan</pre><p>Sifat ACID: Atomicity, Consistency, Isolation, Durability.</p>`}]}];
const KASUS=[
{n:"Perpustakaan",d:"Anggota dapat meminjam banyak buku, dan satu buku dapat dipinjam banyak anggota pada waktu berbeda. Saat meminjam dicatat tanggal pinjam dan tanggal kembali.",e:"Anggota, Buku",a:"Anggota: id_anggota (PK), nama, prodi. Buku: kode_buku (PK), judul, pengarang.",r:"Anggota meminjam Buku (atribut: tgl_pinjam, tgl_kembali).",c:"M:M",t:"anggota, buku, peminjaman (id_anggota FK, kode_buku FK, tgl_pinjam, tgl_kembali).",f:"Fokus: M:M selalu menjadi tabel penghubung."},
{n:"Toko Online",d:"Pelanggan membuat banyak pesanan. Satu pesanan milik satu pelanggan dan berisi beberapa produk dengan jumlah tertentu. Produk dikelompokkan dalam kategori.",e:"Pelanggan, Pesanan, Produk, Kategori",a:"Pelanggan: id_pelanggan (PK), nama, alamat. Pesanan: id_pesanan (PK), tgl_pesan. Produk: id_produk (PK), nama, harga. Kategori: id_kategori (PK), nama.",r:"Pelanggan membuat Pesanan. Pesanan berisi Produk (atribut: jumlah). Kategori memuat Produk.",c:"Pelanggan–Pesanan 1:M. Pesanan–Produk M:M. Kategori–Produk 1:M.",t:"detail_pesanan (id_pesanan FK, id_produk FK, jumlah). FK id_pelanggan di pesanan, id_kategori di produk.",f:"Fokus: 1:M dan M:M dalam satu diagram."},
{n:"Sistem Akademik",d:"Mahasiswa terdaftar pada satu program studi. Dosen mengajar mata kuliah. Mahasiswa mengambil banyak mata kuliah dan memperoleh nilai.",e:"Prodi, Mahasiswa, Dosen, Mata Kuliah",a:"PK: kode_prodi, nim, nidn, kode_mk.",r:"Prodi memiliki Mahasiswa. Dosen mengajar Mata Kuliah. Mahasiswa mengambil Mata Kuliah (atribut: nilai).",c:"Prodi–Mahasiswa 1:M. Dosen–Mata Kuliah 1:M. Mahasiswa–Mata Kuliah M:M.",t:"krs (nim FK, kode_mk FK, nilai). FK kode_prodi di mahasiswa, nidn di mata_kuliah.",f:"Kasus ini sama dengan basis data contoh pada Bab 3."}];

const LATIHAN=[
{opsi:["Anggota","Buku","Judul buku","Rina","Tanggal pinjam"],benar:["Anggota","Buku"],rel:[["Anggota – Buku (meminjam)","M:M"]]},
{opsi:["Pelanggan","Pesanan","Produk","Kategori","Harga","Alamat"],benar:["Pelanggan","Pesanan","Produk","Kategori"],rel:[["Pelanggan – Pesanan","1:M"],["Pesanan – Produk","M:M"],["Kategori – Produk","1:M"]]},
{opsi:["Prodi","Mahasiswa","Dosen","Mata Kuliah","Nilai","Budi"],benar:["Prodi","Mahasiswa","Dosen","Mata Kuliah"],rel:[["Prodi – Mahasiswa","1:M"],["Dosen – Mata Kuliah","1:M"],["Mahasiswa – Mata Kuliah","M:M"]]}];
