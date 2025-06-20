console.log("====== Merge Object ======");

let personJenny = {

    firstName: "Jenny",

    lastName: "Taro",

    age: 49,

    city: "LA",

    isMarried: true

};

const address = {

    street: "Wakad",

    city: "Pune",

    country : "India"

}

 

Object.assign(personJenny, address);

console.table(personJenny);

class Person {

    // Data members

    // constructor

    constructor(fullName, age, city){

        this.fullName = fullName;

        this.age = age;

        this.city = city;

    }

    // Member Functions

    display(){

        console.log(`FullName: ${this.fullName}, AGE: ${this.age}, CITY: ${this.city}`);   

    }

}

const personElon = new Person("Elon Musk", 45, "Pune");

console.log(personElon);

console.log(personElon.fullName);

personElon.display()

 

const personStew = new Person("Stew Job", 56, "LA");

personStew.display();