//mengacak angka dari 1-9, karena nilai maksimum dari Math.random(0-0.99(16 tempat desimal))
let randomNumberGenerator = Math.floor(Math.random()*10);
console.log(randomNumberGenerator);

//untuk mengacak angka setara dengan nilai pada dadu tinggal dikalikan dengan 6 dan ditambahkan dengan 1
let diceNumberGenerator = Math.floor((Math.random()*6) + 1);
console.log(diceNumberGenerator);

/* 
Challenge dari lesson kali ini adalah membuat love rng dengan output nilai dari 1-100 + % dan ditampilkan dalam
alert box 
*/
let lovePercentageGenerator = Math.floor((Math.random()*100) + 1);
alert("Your love score is " + lovePercentageGenerator + "%");