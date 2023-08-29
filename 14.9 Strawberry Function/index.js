// Run this code on the browser!

let money = prompt("How much money do you have?");
let milkCost = prompt("How much does a bottle of milk cost?");

function getMilk(money, milkCost){
    alert("I'd buy " + calcBottles(money,milkCost) + " bottles of milk.");
    alert("here is your $" + calcChange(money, milkCost) + " change");
}

function calcBottles(startingMoney, costPerBottle){
    return Math.floor(startingMoney/costPerBottle);
}

function calcChange(startingAmount, bottleCost){
    return startingAmount % bottleCost;
}

getMilk(money, milkCost);

/*

Return statement berguna agar perintah pada function yang dipanggil memberikan output. Lihat function kedua dan ketiga 
dipanggil sebagai perintah di function pertama. Dan apabila pada perintah di function kedua dan ketiga tidak terdapat
return dan hanya ada deklarasi variabel, maka outputnya akan undefined.

*/


