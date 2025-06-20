var num = 100;

var numStr = String(num);

console.log(`Value: ${numStr} and it's type: ${typeof numStr}`);

 

var numOne = 0;

var numBoolean = Boolean(numOne);

console.log(`Value: ${numBoolean} and it's type: ${typeof numBoolean}`);

 

var numTwo = true;

var numTwoBoolean = String(numTwo);

console.log(`Value: ${numTwoBoolean} and it's type: ${typeof numTwoBoolean}`);

 

var numTwoBoolean = Number(numTwo);

console.log(`Value: ${numTwoBoolean} and it's type: ${typeof numTwoBoolean}`);

console.log(`=== if stmt ====`);

var num =0;

if (num>0) {

    console.log(`Bhai number 0 se bada hai`); 

}

console.log("===== END ======");

var square = function(num){

    console.log(`Square is: ${num*num}`); 

    return num*num;

}

var result = square(10);

console.log(result);

