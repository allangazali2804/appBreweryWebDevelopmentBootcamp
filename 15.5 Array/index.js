const guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

//keyword untuk mengakses array > var[i]
console.log(guestList[0]);  

//keyword untuk memberi tahu jumlah item dalam array > var.length
console.log(guestList.length); 


const name = prompt("What is your name?");

// Conditional untuk mengecek apakah nama yang diinput terdapat di dalam array > array.includes(var)
if(guestList.includes(name)){
    alert("Welcome " + name + "!");
} else {
    alert("Sorry, maybe next time, " + name +".");
}
