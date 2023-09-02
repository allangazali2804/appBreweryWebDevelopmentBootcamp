if (track === clear) {goStraight();}
else {turnRight();}

// if: keyword untuk menciptakan control flow
// (track === clear) : kondisi TRUE sehingga,
// {goStraight();} : perintah ini akan dieksekusi
// else: keyword yang menjalankan perintah dibawah apabila kondisi pada parentheses di IF bernilai berlawanan 
// {turnRight();}: perintah inilah yang akan dieksekusi.

if (track === clear) {
    goStraight();
} else {
    turnRight();
}

// struktur kode seperti di atas akan jauh lebih sering ditemui ketika menjalankan control flow.

/* 
Challenge dari lesson kali ini adalah membuat love rng dengan output nilai dari 1-100 + % dan ditampilkan dalam
alert box 
*/
let lovePercentageGenerator = Math.floor((Math.random()*100) + 1);

if (lovePercentageGenerator > 80) {
    alert("Aww! So cute! Your love score is " + lovePercentageGenerator + "%" + ", your love live is going to be great!");
} else if (lovePercentageGenerator > 50 && lovePercentageGenerator < 80) {
    alert("Wow your love score is " + lovePercentageGenerator + "%");
} else {
    alert("Your love score is " + lovePercentageGenerator + "%");
}
