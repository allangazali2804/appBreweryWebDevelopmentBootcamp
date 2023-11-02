class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello(firstName, lastName){
        console.log(`Hi, my name is ${firstName} ${lastName}`);
    }
}

const person1 = new Person("Allan", "Gazali");
//console.log(person1);
// console.log(person1.sayHello("Allan", "Gazali"));

class Student extends Person {
    constructor(){
        super();
    }
}

const person2 = new Student();
console.log(person2.sayHello("Yuki", "Carensu"));