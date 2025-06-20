let array = [50, 40, 20, 40, 80, 30 ];
for (const element of array) {
    console.log(element);
}

console.log("======== join() ===========");
let arrayNum = [50, 40, 20, 40, 80, 30 ];
console.log(typeof arrayNum);
const joinedElement = arrayNum.join("-");
console.log(joinedElement);
console.log(typeof joinedElement);
//arrayClone.
console.log("======== concat() ===========");
const arrayOne = [1, 2, 3];
const arrayTwoA = [4, 5, 6];
const arrayConcat = arrayOne.concat(arrayTwoA).concat(arrayNum);;
console.log(arrayConcat);

const arrayClone = arrayOne;// Shallow Clone

 

console.log("==== arrayClone===== ");

arrayClone.push(100);

console.log(arrayClone);

console.log("==== arrayOne===== ");

console.log(arrayOne);

 

console.log(`=== Deep Clone ====`);

const arrayThree = [1, 2, 3];

const arrayTwo = [...arrayThree];

console.log(arrayTwo);

arrayTwo.push(2000);

console.log(arrayTwo);

console.log(arrayThree);

console.log(`By default primitive DT will have deep clone`);

 

let numOne = 100;

let numTwo = numOne;

console.log(`====== Merge two arrays using spread operator ... =====`);

const arrayFour = [1, 2, 3];

const arrayFive = [4, 5, 6];

const arraySix = [10, 50, 16];

const mergedArray = [...arrayFour, ...arrayFive, ...arraySix];

console.log(mergedArray);
//set.js
let arrayDuplicate = [50, 40, 30, 50, 40, 30 ];

console.log(arrayDuplicate);

 

let setOfRollNum = new Set();

setOfRollNum.add(101);

setOfRollNum.add(111);

setOfRollNum.add(101);

setOfRollNum.add(113);

setOfRollNum.add(111);

setOfRollNum.add(201);

console.log(setOfRollNum);

 

console.log(`Size is ${setOfRollNum.size}`);

 

setOfRollNum.delete(113);

console.log(setOfRollNum);

 

console.log(`Is element 111 available: ${setOfRollNum.has(1111)} `);

console.log(typeof setOfRollNum);

 

console.log(`===== Set traversing =======`);

for (const element of setOfRollNum) {

    console.log(element); 

}

console.log(`WAP to remove duplicate from the array `);

let arrayForUnique = [50, 40, 30, 50, 40, 40 ];

const arrayUnique = [...new Set(arrayForUnique)];

console.log(arrayUnique);

const myMap = new Map();

myMap.set(101, "Jenny");

myMap.set(223, "Elon");

myMap.set(456, "Stew");

myMap.set(545, "Elon");

console.log(myMap);

myMap.set(456, "Jeff");

console.log(myMap);

 

console.log(`=== After Delete ======`);

 

myMap.delete(101);

console.log(myMap);

 

console.log(`==== Accessing elements ======`);

const valueForKey223 = myMap.get(223);

console.log(valueForKey223);

 

console.log(`=== Traversing ======`);

const keys = myMap.keys();

for (const key of keys) {

    let value = myMap.get(key);

    console.log(`KEY: ${key} ==> VALUE: ${value}`);  

}