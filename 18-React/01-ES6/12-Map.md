# Map

Certainly! In ES6, the `map` method is used to create a new array by applying a provided function to every element in the calling array. The original array remains unchanged, and a new array is returned with the results of applying the function to each element.

Here's the basic syntax and an example:

**Syntax:**
```javascript
const newArray = array.map((currentValue, index, array) => {
  // Return the result of applying a function to each element
});
```

- `currentValue`: The current element being processed in the array.
- `index`: The index of the current element being processed.
- `array`: The array `map` was called upon.

**Example:**
```javascript
const numbers = [1, 2, 3, 4];

// Using map to create a new array of doubled values
const doubled = numbers.map((num) => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8]
```

In this example, the `map` method is used to create a new array (`doubled`) where each element is the result of doubling the corresponding element in the `numbers` array.

The arrow function `(num) => num * 2` takes each element (`num`) from the original array and multiplies it by 2. The resulting array (`doubled`) contains the doubled values.


---


Certainly! Here are a few more examples of using the `map` method in ES6:

1. **Transforming strings to uppercase:**
   ```javascript
   const words = ['hello', 'world', 'map'];

   const uppercaseWords = words.map((word) => word.toUpperCase());

   console.log(uppercaseWords); // Output: ['HELLO', 'WORLD', 'MAP']
   ```

2. **Calculating square roots:**
   ```javascript
   const numbers = [4, 9, 16, 25];

   const squareRoots = numbers.map((num) => Math.sqrt(num));

   console.log(squareRoots); // Output: [2, 3, 4, 5]
   ```

3. **Extracting property values from objects:**
   ```javascript
   const users = [
     { id: 1, name: 'John' },
     { id: 2, name: 'Alice' },
     { id: 3, name: 'Bob' },
   ];

   const userIds = users.map((user) => user.id);

   console.log(userIds); // Output: [1, 2, 3]
   ```

4. **Formatting data:**
   ```javascript
   const data = [
     { firstName: 'John', lastName: 'Doe' },
     { firstName: 'Alice', lastName: 'Smith' },
   ];

   const formattedData = data.map((person) => `${person.firstName} ${person.lastName}`);

   console.log(formattedData); // Output: ['John Doe', 'Alice Smith']
   ```

5. **Generating a new array with indices:**
   ```javascript
   const fruits = ['apple', 'banana', 'orange'];

   const fruitWithIndex = fruits.map((fruit, index) => `${index + 1}. ${fruit}`);

   console.log(fruitWithIndex);
   // Output: ['1. apple', '2. banana', '3. orange']
   ```

These examples demonstrate the versatility of the `map` method for various transformations and operations on array elements. It's a powerful tool for creating new arrays based on the values of an existing array.
