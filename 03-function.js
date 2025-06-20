console.log("======== Function with no arguments and no return value ============");
function dayOfTheWeek(){
    console.log("Today is Thursday..."); 
}
dayOfTheWeek();
dayOfTheWeek();
dayOfTheWeek();

console.log("======== Function with arguments and no return value ============");

function addition(n1, n2, n3){
    var result = n1 + n2 + n3;
    console.log(result);
}
addition(60, 70, 40);
addition(10.40, 99.567, 34.678);

console.log("======== Function with arguments and return value ============");
function square(num){
    var result = num * num;
    return result;
}
var squareValue =  square(15);
console.log("Square is: ", squareValue);

var returnValue = square(11);
console.log("Square is: ", returnValue);

console.log("================task1==================");

function myName(){
    console.log("My name is Muzaffar Ali!");
}
myName();

function developer(){
    console.log("I am Mern full stack developer!");
}
developer();

function personalDetails(firstName, lastName, collageName){
    var result = firstName +  " " + lastName + " " + collageName
    console.log(result);
    
}
personalDetails("Muzaffar", "Ali", "chandigarhUniversity");

function addThreeValues(n1, n2, n3){
    var result = n1+n2+n3;
    console.log("addition of three parameteres is:", result);
}
addThreeValues(10.23,600,40);

console.log("==================Task2======================");

function bankDetails(bankName, accountNum, location, pinCode){
    console.log("Bank Name:", bankName + " " + "Bank Account Number:", accountNum + " " + "Location:", location + " " + "Pincode:",pinCode);
    

}
bankDetails("CITI Bank", 3456782345, 'Pune', 431202);
bankDetails("Axis Bank", 3456782345, 'Pune', 431202);
bankDetails("HDFC Bank", 3456782345, 'Pune', 631202);
