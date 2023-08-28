// Run this code in your browser
//KODE PERTAMA
/* Kode yang salah: Sebuah function seharusnya dipanggil, bukan seperti di bawah. Lalu, dalam melakukan perintah alih-alih
menggunakan keyword deklarasi variabel, seharusnya untuk perintah menggunakan keyword "return"
var bottle = prompt("How many bottle did you buy?");
function milkCost (bottle) {
    var cost = bottle * 1.5;
    alert("Milk cost about " + "$" + cost )
}
*/

//KODE KEDUA
//Kode yang berjalan dengan baik:

//A variable declaration to get the number of bottles of milk the customer bought.
var bottle = prompt("Hello! How many bottles of milk did you buy?");

// A function which contain bottle parameter which is mentioned above.
function milkCost (bottle) {
    return bottle * 1.5;
}

// In order to log it to the console.
console.log(milkCost(bottle));

// Alert function to show to customer the amount of money they need to pay.
alert("Amount of money that you need is about " + "$" + milkCost(bottle));

//KODE KETIGA
/*
function getMilk(money) {
    console.log("buy " + Math.floor((money/1.5)) +" bottles of milk");
}

getMilk(7);
*/

function getMilk(money) {
    var numberOfBottles = Math.floor((money/1.5))
    console.log("buy " + numberOfBottles + " bottles of milk");
}

getMilk(7);