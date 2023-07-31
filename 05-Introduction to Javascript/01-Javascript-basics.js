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





