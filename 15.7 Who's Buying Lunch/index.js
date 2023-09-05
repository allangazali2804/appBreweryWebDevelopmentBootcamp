/*
1. Challengenya adalah mengacak nama dari sebuah array sehingga outputnya akan memberikan salah satu nilai dari array.
*/

function whosPaying(names) {
    // mengetahui jumlah item di dalam sebuah array.
    const numberOfPeople = names.length;
    // mengacak angka yang sesuai dengan jumlah item di dalam array
    const personToPay = Math.floor(Math.random() * numberOfPeople);
    // mengakses item di dalam array
    const randomPerson = names[personToPay];
    //memberikan output berupa item dalam array dan sejumlah string dengan keyword return
    return randomPerson + " is going to buy lunch today!";
}

alert(whosPaying(["Allan", "Yuki", "Kaze", "Hi", "Tsuchi", "Mizu", "Kaminari"]));