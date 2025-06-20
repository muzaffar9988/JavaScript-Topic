var a = 10;
var b = 5;
var result = a + b;
console.log(`Addition ${result}`);

var result = a - b;
console.log(`Subtraction:  ${result}`);

var result = a * b;
console.log(`Multiplication:  ${result}`);

var result = a / b;
console.log(`Division:  ${result}`);

var result = a % b;
console.log(`Modulus:  ${result}`);

console.log("========== Comparison Operators ================");

var a = 10;

var b = 11;

var c = "10";

var d = 10;

console.log(`== Operator: ${a==b}`);

console.log(`== Operator : ${a==d}`);

console.log(`== Operator: ${a==c}`);


console.log(`=== Operator: ${a===b}`);

console.log(`== Operator : ${a===d}`);

console.log(`== Operator: ${a===c}`);

var a = 10;

var b = 11;

var c = "10";

var d = 10;

console.log(`!= Not Equal Operator: ${a!=b}`);// true

console.log(`!= Not Equal Operator : ${a!=d}`); // false

console.log(`!= Not Equal Operator: ${a!=c}`); // false


console.log(`< less than Operator: ${a < b }`); // true

console.log(`< less than Operator : ${a < d }`); // false

 

console.log(`<= less than equal Operator: ${a <= b }`); // true

console.log(`<= less than  equal Operator : ${a <= d }`); // true

 

console.log(`> greater than Operator: ${a > b }`); // false

console.log(`> greater than Operator : ${a > d }`); // false

 

console.log(`>= greater than equal Operator: ${a >= b }`); // false

console.log(`>= greater than  equal Operator : ${a >= d }`); // true

console.log(`====== NaN =======`);

console.log(0/0);

console.log(`==== String to Number conversion =======`);

 

var num = "Jenny";

var result = +num;

console.log(` Value : ${result} and it's type :${typeof result}`);
