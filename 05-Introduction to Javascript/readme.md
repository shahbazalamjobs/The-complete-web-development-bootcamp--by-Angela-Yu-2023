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
