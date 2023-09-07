function ninetyLyricsWhile() {
    let count = prompt("How many bottles are there?");
    let number = 0;
    while (count > number){
        if(count > 2 ){
            console.log(count + " bottles of beer on the wall, " + count + " bottles of beer");
            console.log("Take one down and pass it around, " + (count-1) + " bottles of beer on the wall.");
        } else if(count === 2){
            console.log(count + " bottles of beer on the wall, " + count + " bottles of beer");
            console.log("Take one down and pass it around, " + (count-1) + " bottle of beer on the wall.");
        } else if(count === 1) {
            console.log(count + " bottle of beer on the wall, " + count + " bottle of beer");
            console.log("Take one down and pass it around," + " no more bottle of beer on the wall.")
        }
        count--;    
    }
}

function ninetyLyricsFor(){
    for(let count = prompt("How many bottles?"); count >  0; count--){
        if(count > 2){
            console.log(count + " bottles of beer on the wall, " + count + " bottles of beer");
            console.log("Take one down and pass it around, " + (count-1) + " bottles of beer on the wall.");
        } else if(count === 2){
            console.log(count + " bottles of beer on the wall, " + count + " bottles of beer");
            console.log("Take one down and pass it around, " + (count-1) + " bottle of beer on the wall.");
        } else if(count === 1){
            console.log(count + " bottle of beer on the wall, " + count + " bottle of beer");
            console.log("Take one down and pass it around," + " no more bottle of beer on the wall.");
        }
    }
}
