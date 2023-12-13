# Filter

Certainly! The `filter` method in ES6 is used to create a new array with all elements that pass the test implemented by the provided function. The original array remains unchanged, and a new array is returned with only the elements that satisfy the specified condition.

Here's the basic syntax and an example:

**Syntax:**
```javascript
const newArray = array.filter((currentValue, index, array) => {
  // Return true to keep the element, false to discard it
});
```

- `currentValue`: The current element being processed in the array.
- `index`: The index of the current element being processed.
- `array`: The array `filter` was called upon.

**Example:**
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter to create a new array with only even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
```

In this example, the `filter` method is used to create a new array (`evenNumbers`) containing only the even elements from the `numbers` array. The arrow function `(num) => num % 2 === 0` tests if each element is an even number, and only those that pass the test are included in the new array.

Here are a few more examples:

1. **Filtering strings by length:**
   ```javascript
   const words = ['apple', 'banana', 'kiwi', 'orange'];

   const shortWords = words.filter((word) => word.length < 6);

   console.log(shortWords); // Output: ['kiwi']
   ```

2. **Filtering objects by a property:**
   ```javascript
   const products = [
     { name: 'Laptop', price: 1000 },
     { name: 'Phone', price: 500 },
     { name: 'Tablet', price: 300 },
   ];

   const affordableProducts = products.filter((product) => product.price < 700);

   console.log(affordableProducts);
   // Output: [{ name: 'Phone', price: 500 }, { name: 'Tablet', price: 300 }]
   ```

3. **Filtering based on index:**
   ```javascript
   const numbers = [1, 2, 3, 4, 5];

   const filteredByIndex = numbers.filter((num, index) => index % 2 === 0);

   console.log(filteredByIndex); // Output: [1, 3, 5]
   ```

The `filter` method is a powerful tool for selectively extracting elements from an array based on specific conditions.

---


Absolutely, here are a few more examples of using the `filter` method in ES6:

1. **Filtering non-prime numbers:**
   ```javascript
   function isPrime(num) {
     for (let i = 2; i < num; i++)
       if (num % i === 0) return false;
     return num !== 1;
   }

   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

   const primeNumbers = numbers.filter(isPrime);

   console.log(primeNumbers); // Output: [2, 3, 5, 7]
   ```

   In this example, the `isPrime` function is used as the filtering condition to keep only prime numbers.

2. **Filtering unique values:**
   ```javascript
   const duplicates = [1, 2, 2, 3, 4, 4, 5];

   const uniqueValues = duplicates.filter((value, index, array) => array.indexOf(value) === index);

   console.log(uniqueValues); // Output: [1, 2, 3, 4, 5]
   ```

   This example filters out duplicate values, keeping only the first occurrence of each unique value.

3. **Filtering by type:**
   ```javascript
   const mixedArray = [1, 'two', 3, 'four', 5];

   const numbersOnly = mixedArray.filter((value) => typeof value === 'number');

   console.log(numbersOnly); // Output: [1, 3, 5]
   ```

   Filtering out non-numeric values from an array.

4. **Filtering falsy values:**
   ```javascript
   const values = [0, 'hello', '', false, true, null, undefined];

   const truthyValues = values.filter(Boolean);

   console.log(truthyValues); // Output: ['hello', true]
   ```

   Using the `Boolean` function as the filter condition to keep only truthy values.

These examples showcase the flexibility of the `filter` method in creating new arrays based on specific criteria. It's a handy tool for refining arrays based on your application's needs.
