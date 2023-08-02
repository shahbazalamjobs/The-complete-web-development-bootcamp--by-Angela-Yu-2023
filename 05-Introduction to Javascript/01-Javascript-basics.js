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

/* ---------------- */


// Math.random()
// Returns a random number between 0 (inclusive) and 1 (exclusive)
let randomNum = Math.random();
console.log(randomNum);

// JavaScript Random Integers
// Math.random() used with Math.floor() can be used to return random integers

// Returns a random integer from 0 to 9
let randomInteger1 = Math.floor(Math.random() * 10);
console.log(randomInteger1);

// Returns a random integer from 0 to 10
let randomInteger2 = Math.floor(Math.random() * 11);
console.log(randomInteger2);

// Returns a random integer from 0 to 99
let randomInteger3 = Math.floor(Math.random() * 100);
console.log(randomInteger3);

// Returns a random integer from 0 to 100
let randomInteger4 = Math.floor(Math.random() * 101);
console.log(randomInteger4);

// Returns a random integer from 1 to 10
let randomInteger5 = Math.floor(Math.random() * 10) + 1;
console.log(randomInteger5);

// Returns a random integer from 1 to 100
let randomInteger6 = Math.floor(Math.random() * 100) + 1;
console.log(randomInteger6);

// A Proper Random Function
// Function to return a random number between min (included) and max (excluded)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Function to return a random number between min and max (both included)
function getRndIntegerInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage of the custom random functions
let randomNum1 = getRndInteger(5, 15);
console.log(randomNum1);

let randomNum2 = getRndIntegerInclusive(20, 30);
console.log(randomNum2);

/* ---------------- */

// if, else, and else if statements:

// Example of the if Statement
let hour = 14;
let greeting;

if (hour < 18) {
  greeting = "Good day";
}

console.log(greeting); // Output: "Good day"

// Example of the else Statement
let hour2 = 20;

if (hour2 < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting); // Output: "Good evening"

// Example of the else if Statement
let time = 15;

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting); // Output: "Good day"


/* ---------------- */

// If else condition 

prompt("Enter boys Name: ");
prompt("Enter girls Name: ");

var loveScore = Math.random() * 100 + 1;
Math.floor(loveScore);

if(loveScore > 70){
  alert("The love score is " + loveScore + " it's like as Kanye loves Kanye" );
}
else {
  alert("The love score is " + loveScore);
}

/* ---------------- */

// Comparators use

prompt("Enter boys Name: ");
prompt("Enter girls Name: ");

var loveScore = Math.random() * 100 + 1;
Math.floor(loveScore);

if(loveScore > 30 && loveScore <= 70){
  alert("The love score is " + loveScore + " it's like as Kanye loves Kanye" );
}
else if(loveScore > 20) {
  alert("The love score is mid: " + loveScore);
}
else {
  alert("The lovescore is: " + loveScore );
}


/* ---------------- */

/* BMI calculator using if-else
- BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."
- BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight.
- BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."
*/

function bmiCalculator (weight, height) {
    var bmi = weight / (height * height) ;
    var interpretation = 0;
    if(bmi < 18.5){
         interpretation =  "Your BMI is " + bmi + ", so you are underweight.";   
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
         interpretation =  "Your BMI is " + bmi + ", so you have a normal weight.";   
    }
    else {
         interpretation =  "Your BMI is " + bmi + ", so you are overweight.";   
    }
    return interpretation;
}


/* ---------------- */

/*
Check year is leap or not 
A year is a leap year if it is evenly divisible by 4 ;
except if that year is also evenly divisible by 100;
unless that year is also evenly divisible by 400.
*/

// 1st sol
function isLeap(year) {
    
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("Leap year.");
    } else {
        console.log("Not leap year.");
    }  
}

// 2nd sol
function isLeap(year) {     
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return "Leap year.";
            }
            else 
                return "Not leap year.";
        }
        else
            return "Leap year.";
    }
    else 
        return "Not leap year.";
}

/* ---------------- */

// Use of array and check if one element is present or not using includes()

var names = ["Shahbaz", "Akshay", "Ajay", "SRK", "Amitabh"];
var yourName = prompt("Enter your name to check if your name is in list: ")
if(names.includes(yourName)){
    console.log("Yes it is present");    
}
else
    console.log("No it is not");

/* ---------------- */

// Print no.s from 1 to 100, and print Fizz when no. divisible by 3 comes and Buzz when no. divisible by 5 comes and FizzBuzz when multiple of 15 comes 

// Error in the code below

var output = [];
var num = 1;

function fizzBuzz(num){
    output.push(num);
    console.log(output);
    num += 1;

    if(num === 101){    // This condition does not work properly .. see below code for correct sol
        return;
    }
    fizzBuzz(num);
}

/*
The code you've provided seems to be an implementation of the FizzBuzz problem using recursion. However, there is an issue with the scope of the num variable inside the function. It appears that you are passing num as an argument to the fizzBuzz function, but you are also using a global variable num. This can lead to unexpected behavior.
To fix this, you can remove the argument from the function and use the global num variable directly. Here's the corrected code:
*/

var output = [];
var num = 1;

function fizzBuzz() {
    if (num % 3 === 0 && num % 5 === 0) {
        output.push("FizzBuzz");
    } else if (num % 3 === 0) {
        output.push("Fizz");
    } else if (num % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(num);
    }

    num += 1;

    if (num <= 100) {    // Base condition should be well defined like <= 100 and not like above
        fizzBuzz();
    } else {
        console.log(output);
    }
}

fizzBuzz();


/* ---------------- */

/*

You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.   

Example Input : ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
Example Output : Michael is going to buy lunch today!

*/

function whosPaying(names) {    
    var elements = names.length;    // dont use () with length like length()   & we can also use let in place of var
    var randomNameIndex = Math.floor(Math.random() * elements) ;    // Dont forget Math.floor to make fraction a whole no
    return names[randomIndex] + " is going to buy lunch today!";    
}

/* ---------------- */

// Use of while loop 

var output = [];
var num = 1;

function fizzBuzz() {

    while(num <= 100) {

        if (num % 3 === 0 && num % 5 === 0) {
            output.push("FizzBuzz");
        } else if (num % 3 === 0) {
            output.push("Fizz");
        } else if (num % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(num);
        }    
        num++;
    }
    console.log(output);        
}
              

fizzBuzz();


/* ---------------- */

// To print n no.s of bottle etc etc ... from n = 99 to n = 1 using loop

var i = 99;
var j = i - 1;
while (i > 0) {
    console.log(i + " bottles of beer on the wall " + i + " bottles of beer\n");
    console.log("Take one down and pass it around "  + j + " bottles of beer on the wall\n");
    console.log("\n");
    i--;

    if(i === 1) {
        console.log(i + " bottles of beer on the wall " + i + " bottles of beer\n");
        console.log("Take one down and pass it around no bottles of beer on the wall\n");
        break;
    }

}






/* ---------------- */



