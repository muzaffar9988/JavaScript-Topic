const student = {

    firstName: "Jenny",

    lastName: "Taro",

    age: 49,

    city: "LA",

    isMarried: true

}

 

// student = { 

 

// }

student.lastName = "Musk";

console.log(student);

 

Object.freeze(student);

student.age = 150;

console.log(student);