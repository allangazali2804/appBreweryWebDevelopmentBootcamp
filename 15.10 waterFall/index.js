function waterFall(){
    let array = [];
    let variable = 0;
    let number = prompt("Input your number!");
    
    while(variable < number) {
    variable++;
    array.push(variable);
    console.log(array); //console.log berada di dalam conditional while sehingga akan terdapat sekian banyak log
    }
}

function waterFall(){
    let array = [];
    let variable = 0;
    let number = prompt("Input your number!");
    
    while(variable < number){
    
    variable++;  //variable++ tepat berada di atas perintah, maka hasilnya akan dimulai dari angka 1
    array.push(variable);
        
    }
    
    console.log(array); //console.log tidak berada di dalam conditional while, sehingga hanya akan ada satu
}

function waterFall(){
    let array = [];
    let variable = 0;
    let number = prompt("Input your number!");
    
    while(variable < number){
    
    array.push(variable);
    variable++;  //variable++ berada di bawah perintah, maka hasilnya akan dimulai dari angka 0

    }
    
    console.log(array);  
}