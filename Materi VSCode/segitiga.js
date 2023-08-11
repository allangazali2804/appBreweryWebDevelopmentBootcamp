/*
Pembuatan pola segitiga di JavaScript melibatkan pengulangan (looping) dan logika kondisional (if-else) 
untuk menentukan pola yang ingin dibuat. Berikut adalah contoh logika pembuatan pola segitiga dengan 
menggunakan JavaScript:

Tentukan ukuran pola segitiga yang ingin dibuat, misalnya 5.

Buatlah dua loop bersarang untuk mengakses setiap elemen di dalam pola segitiga.

Loop pertama digunakan untuk mengatur baris pola segitiga yang ingin dibuat.

Loop kedua digunakan untuk mengisi setiap kolom di setiap baris pola segitiga.

Gunakan kondisi if-else untuk menentukan karakter yang ingin ditampilkan di setiap baris dan kolom.

Pada setiap iterasi loop kedua, cek apakah nilai indeks kolom saat ini lebih kecil dari nilai indeks baris 
saat ini. Jika i kurang dari j, cetak spasi untuk membuat segitiga ke kiri. Jika i lebih besar dari j, cetak 
bintang (*) untuk membuat segitiga ke kanan.

Setelah selesai mengisi kolom di setiap baris, cetak baris baru (new line) untuk mengakhiri baris saat ini.

Setelah selesai mengisi semua baris, tampilkan pola segitiga yang sudah dibuat.
*/


// Menggunakan fungsi

segitigaSikuSiku = (rows) => {    
    // loop through each row
    for (let i = 1; i <= rows; i++) {
      // create a string to hold the stars for this row
      let stars = '';
      
      // add stars to the string based on the row number
       for (let j = 1; j <= i; j++) {
         stars += '*';
       }
      
      // print the string of stars
      console.log(stars);
    }
  }

  segitigaSikuSiku(7);

  // Tanpa menggunakan fungsi

  let ukuran = 6;
  let pola = '';

  for(let i=0 ; i <= ukuran ; i++){
    for(let j=0 ; j <= i ; j++){
        pola += '*'
    }
    pola += '\n'
  }

  console.log(pola);

  // Pola Segitiga Siku-Siku Terbalik

  let size = 6;
  let pattern = '';

  for(let i=0 ; i <= size ; i++){
    for(let j=6 ; j > i ; j--){
        pattern += '*'
    }
    pattern += '\n'
  }

  console.log(pattern);
