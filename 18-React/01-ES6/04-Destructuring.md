Ah, destructuring assignment, a nifty feature in JavaScript! It's like unwrapping a present—let's dive in.

For arrays, you can do something like this:

```javascript
const fruits = ['apple', 'banana', 'orange'];

const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit); // 'apple'
console.log(secondFruit); // 'banana'
console.log(thirdFruit); // 'orange'
```

And for objects:

```javascript
const person = { name: 'John', age: 30, city: 'New York' };

const { name, age, city } = person;

console.log(name); // 'John'
console.log(age); // 30
console.log(city); // 'New York'
```

It's like magic! You extract values from arrays or properties from objects and assign them to variables in one swift move. Great for cleaner and more readable code. Anything else you want to know about destructuring?
