function ninetyLyrics() {
    let count = prompt("How many lines do you want?");
    let number = 1;
    while (count > number){
        //Apabila count-- berada di atas perintah maka nilainya akan dimulai dari jumlah dikurangi satu pada prompt. 
        count--;
        console.log(count + " bottles of beer on the wall, " + count + " bottles of beer");
        console.log("Take one down and pass it around, " + (count-1) + " bottles of beer on the wall.")
    }
}

function ninetyLyricsFall() {
    let count = prompt("How many lines do you want?");
    let number = 1;
    while (count > number){
        console.log(count + " bottles of beer on the wall, " + count + " bottles of beer");
        console.log("Take one down and pass it around, " + (count-1) + " bottles of beer on the wall.")
        //Apabila count-- berada di bawah perintah maka nilainya akan persis dimulai dari jumlah pada prompt. 
        count--;    
    }
}

function ninetyLyrics() {
    let count = prompt("How many lines do you want?");
    let number = 1;
    while (count > number){
        count--;
    }   

    //Apabila posisi console.log berada di luar while conditional hasilnya tidak seperti yang diharapkan.
    console.log(count + " bottles of beer on the wall, " + count + " bottles of beer");
    console.log("Take one down and pass it around, " + (count-1) + " bottles of beer on the wall.")
}