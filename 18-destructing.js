console.log(`======== Object Destructuring ============`);

let person = {

    firstName: "Jenny",

    lastName: "Taro",

    age: 49,

    city: "LA",

    isMarried: true,

    country: "USA"

}
let { firstName, lastName, isMarried, country = "India", pin=112245 } = person;
console.log(firstName, lastName, isMarried, country, pin);

 

console.log(`======== Array Destructuring ============`);

const array = [10, 20, 30, 40];

let [n1, n2, n3, n4, n5=0] = array;

console.log(n1, n2, n3, n4, n5);
// practice 
// const muzaffarInfo = {
//     firstName1: "Muzaffar",
//     lastName2: "Khan",
//     age: 30,
//     city: "Mumbai",
//     isMarried: false,
//     country: "India",
//     weight :80,
    
// }
// let {firstName1, lastName2, age, city, weight =70, pin1} = muzaffarInfo;
// console.log(firstName, lastName, age, city, weight, pin1);

console.log("IIFE - Immediately Invoked Function Expression or self invoked Function");

(function(){

    console.log("===== IIFE =======");

})();
