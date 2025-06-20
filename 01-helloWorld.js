console.log("stave jobs");

function sum(n1,n2){
    var result = n1+n2;
    console.log("sum is:", result);
}
sum(10, 20);

var multiply = function(p1,p2){
    var result = p1 * p2;
    console.log("multiply is:", result);
    
}
multiply(5,10);

function addition(sum1, sum2, sum3){
    var result = sum1 + sum2 + sum3;
    console.log("addition is:", result);
    
}
addition(10, 20, 30);
addition(10.40, 99.567, 34.678);

console.log("======== Function with arguments and return value ============");



function square(sum1){
    var result = sum1 * sum1;
    return result;
}
var sumSquare = square(10);
console.log("Square is:", sumSquare);

var sumSquare = square(100);
console.log("Square is:", sumSquare);


var result = square(15);
console.log("Square is:", result);

var result = function(){
    console.log("Muzaffar Ali");
    
}
result();






















