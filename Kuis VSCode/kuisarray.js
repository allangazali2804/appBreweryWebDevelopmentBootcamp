let myOddArray = [];
let myEvenArray = [];

for (let i = 1; i < 100; i++) {
    if( i % 2 == 0){
        myEvenArray.push(i);
    } else {
        myOddArray.push(i);
    }
}

console.log(myOddArray);
console.log(myEvenArray);