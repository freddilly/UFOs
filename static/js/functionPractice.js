
// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
} 

//Takes two numbers and adds them
function addition(a, b) {
    return a + b;
}

//addition function as an arrow function
addition = (a,b) => a+b;

//Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c,d) * 2;
    return total;
}

//doubleAddition as an arrow function
doubleAddition1 = (c,d) => addition(c,d)*2

//simple JavaScript print statement
function printHello() {
    return "Hello there!";
}

//same function but in Arrow form
printHello = () => "Hello there!";

let friends = ["Sarah","Greg","Cindy","Jeff"];

function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }

 //Loop through vegetables array
 let vegetables = ["Carrots","Peas","Lettuce","Tomatoes"];

 for (var i = 0; i < vegetables.length; i++){
     console.log("I love" + vegetables[i]);
 }

 //Loop through numbers
 for (var i = 0; i < 5; i++){
     console.log("I am " + i);
 }