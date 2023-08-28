// Run this code in your browser

//KODE PERTAMA
var bottle = prompt("How many bottle did you buy?");
function milkCost (bottle) {
    var cost = bottle * 1.5;
    alert("Milk cost about " + "$" + cost )
}

milkCost(bottle);



//KODE KEDUA
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
function getMilk(money) {
    console.log("buy " + Math.floor((money/1.5)) +" bottles of milk");
}

getMilk(7);

//Alternatif Kode Ketiga
function getMilk(money) {
    var numberOfBottles = Math.floor((money/1.5))
    console.log("buy " + numberOfBottles + " bottles of milk");
}

getMilk(7);