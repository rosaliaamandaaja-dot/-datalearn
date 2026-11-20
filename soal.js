const SOAL=[
{q:"Perangkat lunak untuk membuat dan mengelola basis data disebut…",o:["Spreadsheet","DBMS","Browser","Kompiler"],a:1,p:"DBMS adalah pengelola. Basis data adalah isinya."},
{q:"Kolom yang paling cocok menjadi primary key pada tabel Mahasiswa adalah…",o:["Nama","Alamat","NIM","Prodi"],a:2,p:"NIM unik dan tidak boleh kosong. Nama bisa kembar."},
{q:"Foreign key berfungsi untuk…",o:["Mempercepat internet","Menghubungkan tabel ke primary key tabel lain","Menghapus data ganda otomatis","Mengubah tipe data"],a:1,p:"FK merujuk ke PK tabel lain sehingga dua tabel terhubung."},
{q:"Pada ERD notasi Chen, relasi digambar dengan…",o:["Persegi panjang","Elips","Belah ketupat","Segitiga"],a:2,p:"Entitas persegi panjang, atribut elips, relasi belah ketupat."},
{q:"Alamat yang dipecah menjadi Jalan, Kota, dan Kode Pos adalah atribut…",o:["Kunci","Turunan","Bernilai banyak","Gabungan (komposit)"],a:3,p:"Atribut yang bisa dipecah menjadi bagian disebut gabungan."},
{q:"Satu Prodi punya banyak Mahasiswa, tiap Mahasiswa hanya satu Prodi. Kardinalitasnya…",o:["1:1","1:M","M:M","M:1:M"],a:1,p:"Satu ke banyak. FK kode_prodi ada di tabel Mahasiswa."},
{q:"Relasi many-to-many saat dijadikan tabel menghasilkan…",o:["Satu kolom tambahan","Tabel penghubung dengan PK gabungan","Tabel tanpa kunci","Tidak perlu diubah"],a:1,p:"M:M dipecah menjadi tabel penghubung berisi dua FK."},
{q:"CREATE TABLE termasuk kelompok perintah…",o:["DDL","DML","DCL","TCL"],a:0,p:"DDL mendefinisikan struktur: CREATE, ALTER, DROP."},
{q:"Apa akibat UPDATE mahasiswa SET nama='A'; tanpa WHERE?",o:["Tidak terjadi apa-apa","Hanya baris pertama berubah","Semua baris berubah","Tabel terhapus"],a:2,p:"Tanpa WHERE, semua baris terpengaruh. Selalu periksa WHERE."},
{q:"Perintah untuk membatalkan perubahan dalam transaksi adalah…",o:["COMMIT","GRANT","ROLLBACK","SELECT"],a:2,p:"COMMIT menyimpan permanen, ROLLBACK membatalkan."}];
