// Alert use 
alert("Hello");  //   ; use is not necessary

// Primitive Data types 
// 1. Number:
let age = 25;
let pi = 3.14;

// 2. String:
let name = "Alice";
let message = 'Hello, world!';

// 3. Boolean:
let isLogged = true;
let isOpen = false;

// 4. Undefined:
let undefinedVariable;

// 5. Null:
let score = null;

// 6. Symbol:
const symbolKey = Symbol("unique");

/* ----------------  */

// Invalid variables names in javascript
let 123invalid = "Invalid"; // Cannot start with a digit
let my-var = "Invalid"; // Hyphens are not allowed
let if = 42; // "if" is a reserved keyword

/* ----------------  */

// String Concatenation
alert("Hello" + " World"); //  Hello World
---
var message = "Hello"
var name = "Shahbaz"
alert(message + " there, " + name); // Hello there, Shahbaz

/* ---------------- */

// String Length
var message = "Hello world"
alert(message.length) // 11 characters

/* ---------------- */
// Input message: "essay, an analytic, interpretative, or critical literary composition"

var tweet = prompt("compose your tweet")
var length = tweet.length
alert("Your tweet has " + length + " characters, you have " + (140 - length) + " characters remaining")

// Output: Your tweet has 68 characters, you have 72 characters remaining

/* ---------------- */

// Slicing string

// Input: "usually much systematic and formal than a dissertation shorter and less "
var message = "usually much systematic and formal than a dissertation shorter and less ";
alert(message.slice(0,20))

// Output: usually much systema

/* ---------------- */

// Shortcut slicing with user entering message then get slice to 51 characters
alert(prompt("Compose your tweet").slice(0,50));

/* ---------------- */

var message = "usually much shorter";
message = message.toUpperCase()
//Output: USUALLY MUCH SHORTER

/* ---------------- */

var message = "usually much shorter";
message = message.toLowerCase()
//Output: usually much shorter


/* ---------------- */
// Enter your Name, then change first character to uppercase and rest characters to lowercasr
message = prompt("Enter your message: ")

var firstChar = message.slice(0,1)
var secondChar = message.slice(1)

firstChar = firstChar.toUpperCase()
secondChar = secondChar.toLowerCase()

message = firstChar + secondChar

alert("Hello, " + message)

/* ---------------- */
// Challenge: Take dogs age input and give to output human equivakent age using formula -> human age = (dogs age - 2) x 4 + 21

var dogAge = prompt("Enter dog's age: ");
var humanAge =  (dogAge - 2) * 4 + 21;
alert("Yours age is " + humanAge + " when, dogs age is " + dogAge)

/* ---------------- */

// Functions
// Syntax
function functionName(parameter1, parameter2, ...) {
  // Function code or instructions go here
  // ...
  // Optionally, use 'return' statement to send a value back
  return result;
}

// function to add numbers
function addNumbers(a, b) {
  return a + b;
}

let result = addNumbers(5, 10);
console.log(result); // Output: 15




// Function to leave house till market then take money and give to output the no. of bottles and then return tohouse

function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("Buy " + Math.floor(money / 1.5) + " bottles of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(10);

// Price of 1 bottle of milk = 1.5$

/* ---------------- */
// Challenge: input your age then chec how many days, weeks, months left to reach age of 90
function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    var yearsLeft = 90 - age;
    var noOfDays = yearsLeft * 365;
    var noOfMonths = yearsLeft * 12;
    var noOfWeeks = yearsLeft * 52;
    console.log("You have " + noOfDays + " days, " + noOfWeeks + " weeks, and " + noOfMonths + " months left.")
    
/*************Don't change the code below**********/
}

