// adding elements > array.push() 
// removing elements > array.pop()

/*
1. Challenge pertama, menambah isi array secara otomatis dan diisi dengan angka yang dimulai dari angka 1 dan
selalu bertambah setiap function dipanggil.
*/

// a) buat sebuah variabel yang bernama output dengan struktur data berupa array dan kosong.
let output = []; 

// b) buat sebuah variabel yang bernama count yang menampung angka 1.
let count = 1;

/*
c) buat sebuah function bernama fizzBuzz sehingga setiap dipanggil akan memberikan output yang berisi array dengan
angka yang selalu bertambah satu dengan variabel di dalamnya adalah output dan count yang telah dideklarasikan di awal.
*/

function fizzBuzz() {
    output.push(count);
    count++
    console.log(output);
}

/*
2. Challenge kedua, membuat sebuah program yang akan mencetak string Fizz apabila nilai dari count habis dibagi dengan 3,
string Buzz apabila habis dibagi 5, dan string FizzBuzz apabila habis dibagi 3 dan 5.
*/

function fizzBuzz() {
    if(count % 3 === 0 && count % 5 === 0){
        output.push("FizzBuzz")
    } else if (count % 3 === 0){
        output.push("Fizz")
    } else if (count % 5 === 0){
        output.push("Buzz")
    } else {
        output.push(count);
    }

    count++;
    console.log(output);
}

/* 
Alasan kenapa if statement didahului oleh kondisi habis dibagi 3 dan 5 adalah karena jika didahului oleh kondisi habis dibagi
3, maka jika nilai count adalah 15, kondisi habis dibagi 3 yang akan dijalankan, karena aliran dari conditional statement
berupa waterfall, yang berada di atas akan dijalankan terlebih dahulu.
*/