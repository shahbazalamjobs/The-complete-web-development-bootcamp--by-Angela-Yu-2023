
## Let and const

`let` and `const` are both variable declaration keywords introduced in ECMAScript 6 (ES6) to provide block-scoped variables in JavaScript.

1. **`let`:** 
   - Variables declared with `let` can be reassigned.
   - They have block scope, meaning they are only accessible within the block (pair of curly braces) where they are defined.
   - Example:
     ```javascript
     let x = 10;
     if (true) {
       let x = 20; // This is a different variable with the same name but different scope
       console.log(x); // Output: 20
     }
     console.log(x); // Output: 10
     ```

2. **`const`:**
   - Variables declared with `const` are constants and cannot be reassigned after declaration.
   - They also have block scope.
   - Example:
     ```javascript
     const y = 30;
     // y = 40; // This will result in an error, as you cannot reassign a const variable
     ```

Using `const` is preferred when you want to declare a variable that should not be reassigned, as it helps in writing more maintainable and error-resistant code. However, keep in mind that `const` only makes the variable itself immutable, not necessarily the value it holds. If the variable is an object or an array, the properties or elements of the object or array can still be modified.

```javascript
const myArray = [1, 2, 3];
myArray.push(4); // This is allowed, as it doesn't reassign myArray, just modifies its content.
```
