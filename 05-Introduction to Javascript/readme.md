# Javascript
- Principles of Writing Consistent, Idiomatic JavaScript : https://github.com/rwaldron/idiomatic.js/#spacing

### Alert
- In JavaScript, the `alert()` function is a built-in method that allows you to display a dialog box with a message to the user. The dialog box typically contains an "OK" button, and the message you provide will be shown to the user as a simple notification.

Here's the basic syntax of the `alert()` function:

```javascript
alert(message);
```

- `message`: This is the string or message that you want to display in the alert dialog box.

Example usage:

```javascript
alert("Hello, world!"); // Displays an alert box with the message "Hello, world!"

let age = 25;
alert("Your age is: " + age); // Displays an alert box with the message "Your age is: 25"
```

### Datatypes in Javascript

In JavaScript, there are several data types that define the type of data that a variable or expression can hold. JavaScript is a dynamically typed language, which means that variables can hold values of different types during the program execution. The main data types in JavaScript are as follows:

1. **Primitive Data Types:**
   These data types are immutable, meaning their values cannot be changed once they are created.

   - **Number:** Represents both integer and floating-point numbers. Examples: `5`, `3.14`, `-10`.
   - **String:** Represents a sequence of characters, enclosed in single ('') or double ("") quotes. Examples: `'Hello'`, `"JavaScript"`.
   - **Boolean:** Represents a logical value, either `true` or `false`.
   - **Undefined:** Represents a variable that has been declared but not assigned a value.
   - **Null:** Represents the intentional absence of any object value.
   - **Symbol:** Represents a unique, immutable value used as an identifier for object properties (introduced in ECMAScript 6).

2. **Object Data Type:**
   Objects are more complex data types that can store multiple key-value pairs and represent more elaborate data structures. Objects are created using curly braces `{}`.

   Example:
   ```javascript
   let person = {
       name: "John",
       age: 30,
       isStudent: false
   };
   ```

3. **Array Data Type:**
   Arrays are used to store multiple values in a single variable. They can hold values of different types and are created using square brackets `[]`.

   Example:
   ```javascript
   let numbers = [1, 2, 3, 4, 5];
   let fruits = ["apple", "banana", "orange"];
   ```

4. **Function Data Type:**
   Functions are a special type of object that can be invoked (called) to perform a specific task or return a value.

   Example:
   ```javascript
   function add(a, b) {
       return a + b;
   }
   ```

5. **Date Data Type:**
   Represents a specific date and time. It is often used for working with dates and times.

   Example:
   ```javascript
   let currentDate = new Date();
   ```

JavaScript is a loosely typed language, meaning you do not need to specify the data type explicitly when declaring a variable. The data type of a variable is determined automatically based on the value assigned to it. However, you can use the `typeof` operator to check the type of a variable or expression at runtime.

Example:
```javascript
let num = 10;
let message = "Hello";
console.log(typeof num); // Output: "number"
console.log(typeof message); // Output: "string"
```
---
`typeof` operator is used to determine the data type of a value or variable
```js
let value1 = 42;
let value2 = "Hello";
let value3 = true;
let value4 = { key: "value" };

console.log(typeof value1); // Output: "number"
console.log(typeof value2); // Output: "string"
console.log(typeof value3); // Output: "boolean"
console.log(typeof value4); // Output: "object"

```
### Variable

1. **Variables:**
   - Variables are used to store and manipulate data in JavaScript.
   - They act as named containers that hold values.
   - In JavaScript, you can declare variables using `var`, `let`, or `const` keywords.

2. **Declaring a Variable:**
   - Use `var`, `let`, or `const` to declare a variable, followed by the variable name.
   - Variables declared with `var` and `let` can change their values, while `const` variables are read-only (immutable).

   Example:
   ```javascript
   var age = 30;
   let name = "John";
   const pi = 3.14;
   ```

3. **Assigning Values:**
   - You can assign values to variables using the assignment operator (`=`).

   Example:
   ```javascript
   let num = 42;
   let message = "Hello, world!";
   ```

4. **Changing Values:**
   - Variables declared with `var` or `let` can have their values changed or updated.

   Example:
   ```javascript
   let count = 10;
   count = count + 1; // Now count is 11
   ```

5. **Constant Variables (`const`):**
   - Variables declared with `const` cannot be reassigned after their initial value.

   Example:
   ```javascript
   const appName = "My App";
   // appName = "New App"; // This will result in an error
   ```

6. **Variable Scope:**
   - The scope of a variable determines its accessibility within the code.
   - Variables declared with `var` have function scope, while those declared with `let` or `const` have block scope.

   Example:
   ```javascript
   function exampleFunction() {
       var x = 10; // x is accessible inside this function
       let y = 20; // y is accessible only within this block
       if (true) {
           var z = 30; // z is accessible within the entire function
           console.log(y); // Output: 20
       }
       console.log(z); // Output: 30
   }
   ```
   
---   
### Swap 2 variable values
To swap the values of two variables in JavaScript, you can use a temporary variable to store one of the values temporarily. Here's a simple code example to swap the values of two variables:

```javascript
let a = 10;
let b = 20;

console.log("Before swapping:");
console.log("a:", a); // Output: 10
console.log("b:", b); // Output: 20

// Swapping using a temporary variable
let temp = a;
a = b;
b = temp;

console.log("After swapping:");
console.log("a:", a); // Output: 20
console.log("b:", b); // Output: 10
```

- Values of `a` and `b` are initially set to 10 and 20, respectively.
- We then use the `temp` variable to temporarily store the value of `a`.
- Next, we assign the value of `b` to `a`, effectively swapping their values.
- Finally, we assign the value stored in `temp` (the original value of `a`) to `b`, completing the swap.

After the swapping process, the variables `a` and `b` will hold each other's values.

---

### Naming variables in JavaScript and common naming conventions:

1. **Naming Variables:**
   - Choose meaningful and descriptive names for variables that reflect their purpose.
   - Use camelCase notation, starting with a lowercase letter, for multi-word variable names.
   - Variables must start with a letter, underscore (_), or dollar sign ($) and can be followed by letters, digits, underscores, or dollar signs.

2. **Good Examples:**
   ```javascript
   let firstName = "John";
   let itemCount = 10;
   let isValidUser = true;
   ```

3. **Bad Examples:**
   ```javascript
   let x = "John"; // Not descriptive
   let count_1 = 5; // Contains underscore
   let user$ = "Alice"; // Contains dollar sign
   ```

4. **Constants:**
   - For constants, use UPPERCASE letters with underscores for separating words.
   - Constants are typically declared using the `const` keyword.
  
   ```javascript
   const PI = 3.14;
   const MAX_SIZE = 100;
   ```

5. **Avoid Reserved Keywords:**
   - Do not use JavaScript reserved keywords as variable names since they have special meanings in the language.

   ```javascript
   // Bad: Reserved keyword as variable name
   let function = "test";
   ```

6. **Use Meaningful Abbreviations (If Necessary):**
   - Only use abbreviations that are widely recognized and make the code more readable.
   - Avoid cryptic or ambiguous abbreviations.

   ```javascript
   // Good: Abbreviation for "index"
   let idx = 0;
   ```

7. **Consistency:**
   - Be consistent with your naming conventions throughout the codebase.
   - Use the same naming style for variables of similar types or purposes.

   ```javascript
   let firstName = "John";
   let lastName = "Doe";
   let age = 30;

   let isValid = true;
   let hasPermission = false;
   ```

---

1. **Valid Variable Names:**
   - Must start with a letter (a-z, A-Z) or an underscore (_).
   - Can be followed by letters, digits (0-9), underscores (_), or dollar signs ($).
   - Variable names are case-sensitive, so `myVar`, `MyVar`, and `MYVAR` are considered different variables.
   - Cannot be a JavaScript reserved keyword (e.g., `if`, `else`, `while`, `function`, etc.).

2. **Examples of Valid Variable Names:**
   ```javascript
   let age = 25;
   let firstName = "John";
   let _count = 10;
   let $price = 19.99;
   let thisIsAValidVariableName = true;
   ```

3. **Invalid Variable Names:**
   ```javascript
   // These are invalid variable names in JavaScript
   let 123invalid = "Invalid"; // Cannot start with a digit
   let my-var = "Invalid"; // Hyphens are not allowed
   let if = 42; // "if" is a reserved keyword
   ```
---

### String concatenation 

1. **Using the `+` Operator:**
   You can use the `+` operator to concatenate two or more strings.

   Example:
   ```javascript
   let firstName = "John";
   let lastName = "Doe";
   let fullName = firstName + " " + lastName;
   console.log(fullName); // Output: "John Doe"
   ```

2. **Using the `+=` Operator:**
   The `+=` operator is a shorthand for concatenation and assignment. It appends a string to an existing variable.

   Example:
   ```javascript
   let message = "Hello, ";
   message += "world!";
   console.log(message); // Output: "Hello, world!"
   ```

3. **Using Template Literals (ES6+):**
   Template literals allow you to embed expressions within backticks (`) and use placeholders `${}` to insert variables or expressions directly into the string.

   Example:
   ```javascript
   let name = "Alice";
   let greeting = `Hello, ${name}!`;
   console.log(greeting); // Output: "Hello, Alice!"
   ```

---

## String Length

- JavaScript provides a `length` property for strings to determine their length.
- The `length` property returns the number of characters in the string, including spaces and special characters.
- To get the length of a string, access the `length` property of the string variable.

```js
let myString = "Hello, World!";
let lengthOfString = myString.length;
console.log(lengthOfString); // Output: 13
```
---

## UpperCase and LowerCase
- We can convert strings to uppercase and lowercase using the `toUpperCase()` and `toLowerCase()` methods, respectively.
- These methods return new strings with all alphabetic characters in the original string converted to the desired case, while non-alphabetic characters remain unchanged.

Here's how to use `toUpperCase()` and `toLowerCase()`:

1. To convert a string to uppercase:
```javascript
let originalString = "Hello, World!";
let upperCaseString = originalString.toUpperCase();

console.log(upperCaseString); // Output: HELLO, WORLD!
```

2. To convert a string to lowercase:
```javascript
let originalString = "Hello, World!";
let lowerCaseString = originalString.toLowerCase();

console.log(lowerCaseString); // Output: hello, world!
```
---
- Basic arithmetic operations like addition, subtraction, multiplication, division, and more using standard arithmetic operators.

1. Addition (+):
```javascript
let num1 = 5;
let num2 = 10;
let sum = num1 + num2;

console.log(sum); // Output: 15
```

2. Subtraction (-):
```javascript
let num1 = 20;
let num2 = 8;
let difference = num1 - num2;

console.log(difference); // Output: 12
```

3. Multiplication (*):
```javascript
let num1 = 4;
let num2 = 6;
let product = num1 * num2;

console.log(product); // Output: 24
```

4. Division (/):
```javascript
let num1 = 15;
let num2 = 3;
let quotient = num1 / num2;

console.log(quotient); // Output: 5
```

5. Modulus (%):
```javascript
let num1 = 17;
let num2 = 5;
let remainder = num1 % num2;

console.log(remainder); // Output: 2
```

6. Exponentiation (**):
```javascript
let base = 2;
let exponent = 3;
let result = base ** exponent;

console.log(result); // Output: 8 (2^3)
```

---

**Increment (++) Operator:**

1. Prefix Increment (`++variable`): The variable is increased by 1 before its current value is used.

```javascript
var num = 5;
var result = ++num;

console.log(result); // Output: 6
console.log(num);    // Output: 6 (num was incremented by 1)
```

2. Postfix Increment (`variable++`): The current value of the variable is used, and then it is increased by 1.

```javascript
var num = 5;
var result = num++;

console.log(result); // Output: 5 (num's current value was used)
console.log(num);    // Output: 6 (num was incremented by 1)
```

**Decrement (--) Operator:**

1. Prefix Decrement (`--variable`): The variable is decreased by 1 before its current value is used.

```javascript
var num = 10;
var result = --num;

console.log(result); // Output: 9
console.log(num);    // Output: 9 (num was decremented by 1)
```

2. Postfix Decrement (`variable--`): The current value of the variable is used, and then it is decreased by 1.

```javascript
var num = 10;
var result = num--;

console.log(result); // Output: 10 (num's current value was used)
console.log(num);    // Output: 9 (num was decremented by 1)
```

---

**Increment using `+=`:**

```javascript
let num = 10;
num += 5; // Equivalent to: num = num + 5;

console.log(num); // Output: 15
```

**Decrement using `-=`:**

```javascript
let num = 20;
num -= 5; // Equivalent to: num = num - 5;

console.log(num); // Output: 15
```
---
- In JavaScript, a function is a reusable block of code that can be defined once and executed (called) multiple times.
- Functions are essential building blocks in JavaScript programming and are used to encapsulate a set of instructions that perform a specific task or calculation.
- They help in organizing code, promoting code reusability, and improving code maintainability.
  
**Creating a Function:**

You can define a function using the `function` keyword, followed by the function name, a pair of parentheses `()`, and a set of curly braces `{}` containing the function's code.

```javascript
// Function without parameters and return value
function sayHello() {
  console.log("Hello, World!");
}

// Function with parameters and return value
function addNumbers(a, b) {
  return a + b;
}
```

**Calling a Function:**

Once a function is defined, you can call it by using its name followed by a pair of parentheses `()`. If the function takes parameters, you pass the values inside the parentheses.

```javascript
// Calling a function without parameters
sayHello(); // Output: Hello, World!

// Calling a function with parameters
let result = addNumbers(5, 10);
console.log(result); // Output: 15
```

- In this example, `sayHello()` is called without any parameters, and it logs "Hello, World!" to the console.
- The `addNumbers(a, b)` function is called with two parameters (`5` and `10`), and it returns the sum of the two numbers, which is then logged to the console.

---
Challenge: https://stanford.edu/~cpiech/karel/ide.html
- Move Karel Diagonally and placing the beeper
```js
/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   
   putBeeperThenTurnLeft();
   putBeeperThenTurnLeft();
   putBeeperThenTurnLeft();
   putBeeperThenTurnLeft();
   putBeeper();
}

function putBeeperThenTurnLeft(){
   putBeeper();
   move();
   turnLeft();
   move();
   turnRight();
}
```
---


- The first parameter should be the weight and the second should be the height.
- If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
- var bmi = bmiCalculator(65, 1.8); 
- bmi should equal 20 when it's rounded to the nearest whole number.


```js
function bmiCalculator(weight, height){
    var bmi = weight / (height * height);  // height ** 2 doesn't work
    return Math.round(bmi);
}
```
---

```js
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
```
---
### Comparison Types

It appears that the provided content explains JavaScript Comparison and Logical Operators. It covers comparison operators, logical operators, and the conditional (ternary) operator. Here's a summary of the content:

**Comparison Operators:**
Comparison operators are used to determine equality or difference between variables or values.

- `==`: Equal to
- `===`: Equal value and equal type
- `!=`: Not equal
- `!==`: Not equal value or not equal type
- `>`: Greater than
- `<`: Less than
- `>=`: Greater than or equal to
- `<=`: Less than or equal to

**Logical Operators:**
Logical operators are used to determine the logic between variables or values.

- `&&`: And (both conditions must be true)
- `||`: Or (at least one condition must be true)
- `!`: Not (negates the result)

**Conditional (Ternary) Operator:**
JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.

Syntax: `variablename = (condition) ? value1 : value2`

**Comparing Different Types:**
When comparing data of different types, JavaScript may convert one of the values to another type to perform the comparison. This can lead to unexpected results, so it's essential to be cautious when comparing different types.

**The Nullish Coalescing Operator (??):**
The `??` operator returns the first argument if it is not nullish (null or undefined). Otherwise, it returns the second argument.

```js
// Comparison Operators
let x = 5;
let y = 8;

console.log(x == 8);      // Output: false
console.log(x == 5);      // Output: true
console.log(x == "5");    // Output: true
console.log(x === 5);     // Output: true
console.log(x === "5");   // Output: false
console.log(x != 8);      // Output: true
console.log(x !== 5);     // Output: false
console.log(x !== "5");   // Output: true
console.log(x !== 8);     // Output: true
console.log(x > 8);       // Output: false
console.log(x < 8);       // Output: true
console.log(x >= 8);      // Output: false
console.log(x <= 8);      // Output: true

// Logical Operators
console.log((x < 10 && y > 1));    // Output: true (both conditions are true)
console.log((x == 5 || y == 5));   // Output: false (both conditions are false)
console.log(!(x == y));           // Output: true (negating false)

// Conditional (Ternary) Operator
let age = 17;
let voteable = (age < 18) ? "Too young" : "Old enough";
console.log(voteable);    // Output: "Too young" (age is less than 18)

// Comparing Different Types
let num1 = 2;
let num2 = "12";
console.log(num1 < num2);          // Output: true (string "12" converts to number 12)
console.log(num1 > num2);          // Output: false (string "12" converts to number 12)
console.log(num1 == num2);         // Output: false (string "12" does not equal number 2)
console.log("2" < "12");           // Output: false (comparing strings, "2" > "1" alphabetically)

// The Nullish Coalescing Operator (??)
let name = null;
let text = "missing";
let result = name ?? text;
console.log(result);    // Output: "missing" (name is null, so the result is "missing")
```
---

## `if`, `else`, and `else if` statements:

```javascript
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
```

---

In JavaScript, `==` and `===` are comparison operators used to compare two values. However, they have different behaviors and are used in different contexts.

**`==` (Equality Operator):**

- The `==` operator checks for equality of values, allowing for type coercion (implicit type conversion) if the operands have different data types.
- If the operands have the same data type, `==` performs a simple value comparison.
- If the operands have different data types, JavaScript attempts to convert one or both of the operands to a common data type before comparison.
- This can sometimes lead to unexpected results, as certain values may be considered equal when their data types differ.
- For example, `"5" == 5` is `true` because the string `"5"` is converted to a number before comparison.

**`===` (Strict Equality Operator):**

- The `===` operator checks for equality of values and data types, without performing type coercion.
- It requires both operands to have the same data type and the same value to be considered equal.
- This is considered the safer and more reliable equality check, as it ensures that no implicit type conversion takes place.
- For example, `"5" === 5` is `false` because the data types (string and number) are different, even though their values are both `5`.

Example:

```javascript
let num = 5;
let str = "5";

console.log(num == str);  // Output: true (Equality with type coercion)
console.log(num === str); // Output: false (Strict equality, different data types)
```

In this example, `num == str` is `true` because the `==` operator performs type coercion and considers the string `"5"` equal to the number `5`. However, `num === str` is `false` because the `===` operator checks for both value and data type, which are different in this case.

It is generally recommended to use `===` (strict equality) whenever possible to avoid unexpected behavior caused by type coercion.

---

- When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.
- To secure a proper result, variables should be converted to the proper type before comparison
  
---

In JavaScript, when you compare two strings using comparison operators such as `<`, `>`, `<=`, `>=`, or `===`, the comparison is done based on their Unicode character codes (ASCII values) rather than their numeric values. This means that JavaScript performs a lexicographic (dictionary-style) comparison on the characters of the strings.

Here's what happens in the comparison "2" > "12":

1. JavaScript compares the first characters of both strings, which are "2" and "1".
2. Since "1" has a smaller Unicode character code than "2", JavaScript determines that "1" is less than "2".
3. Therefore, the string "2" is greater than the string "12" because the first character "2" is greater than the first character "1".

This behavior can sometimes lead to unexpected results, especially when you are comparing numbers represented as strings. For example, if you compare "2" and "12" as numbers, you would expect "2" to be less than "12". However, as strings, "2" is greater than "12" due to their lexicographic comparison.

To ensure proper comparison results, especially when dealing with numbers represented as strings, you should convert the strings to their corresponding numeric values before doing the comparison. This can be achieved using functions like `parseInt()` or `parseFloat()`:

```javascript
let num1 = "2";
let num2 = "12";

// Convert the strings to numbers before comparison
let numericNum1 = parseInt(num1);
let numericNum2 = parseInt(num2);

console.log(numericNum1 < numericNum2); // Output: true
```

In this example, both "2" and "12" are converted to their numeric values before comparison, so the result is `true`, indicating that 2 is indeed less than 12.

---

### Array

- An array is a fundamental data structure in JavaScript used to store a collection of elements. These elements can be of any data type, such as numbers, strings, objects, or even other arrays. 
- Arrays are indexed, starting from 0 for the first element, 1 for the second element, and so on.

### Creating an Array:
You can create an array using square brackets `[]` and separating elements with commas.

```javascript
// Creating an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Creating an array of strings
const fruits = ["apple", "banana", "orange"];
```

### Accessing Array Elements:
You can access array elements using their index inside square brackets.

```javascript
console.log(numbers[0]); // Outputs: 1
console.log(fruits[1]);  // Outputs: "banana"
```

### Modifying Array Elements:
You can modify array elements by assigning new values to specific indexes.

```javascript
numbers[2] = 10;
fruits[0] = "grape";
```

### Array Methods:
JavaScript provides various methods for working with arrays. Here are a few examples:

```javascript
// Adding elements to the end of an array
fruits.push("pear");

// Removing the last element from an array
fruits.pop();

// Adding elements to the beginning of an array
fruits.unshift("kiwi");

// Removing the first element from an array
fruits.shift();

// Finding the index of an element in an array
const index = fruits.indexOf("banana");

// Slicing an array to create a new array
const slicedFruits = fruits.slice(1, 3); // Creates a new array containing "banana" and "orange"
```

### Iterating Over an Array:
You can use loops or higher-order functions like `forEach` to iterate over the elements of an array.

Using a for loop:

```javascript
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

Using the `forEach` method:

```javascript
fruits.forEach(function(fruit) {
  console.log(fruit);
});
```

Arrays allow you to store and manipulate collections of data efficiently.
---

- Certainly! The `includes()` method is used to check if an element exists in an array. 
```javascript
const numbers = [1, 2, 3, 4, 5];
const targetNumber = 3;

if (numbers.includes(targetNumber)) {
  console.log(`The array includes ${targetNumber}.`);
} else {
  console.log(`The array does not include ${targetNumber}.`);
}
```

- In this example, the `includes()` method is used to check if the `targetNumber` (which is `3` in this case) exists in the `numbers` array. The output will vary depending on whether the target number is found in the array or not.
