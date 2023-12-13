## Template literals in ES6:

1. Basic variable interpolation:

```javascript
const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting);
// Output: Hello, John!
```

2. Expression interpolation:

```javascript
const a = 5;
const b = 10;
const sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum);
// Output: The sum of 5 and 10 is 15.
```

3. Multi-line strings:

```javascript
const multiline = `
  This is a
  multi-line
  string using
  template literals.
`;
console.log(multiline);
// Output:
//   This is a
//   multi-line
//   string using
//   template literals.
```

---

Absolutely! Here are a couple more examples showcasing the versatility of template literals:

4. Function invocation:

```javascript
function multiply(a, b) {
  return a * b;
}

const result = `The result of multiplying 3 and 7 is ${multiply(3, 7)}.`;
console.log(result);
// Output: The result of multiplying 3 and 7 is 21.
```

5. Conditional rendering:

```javascript
const isLoggedIn = true;

const loginMessage = `Welcome ${isLoggedIn ? 'back' : 'guest'}!`;
console.log(loginMessage);
// Output: Welcome back!
```

6. Embedded HTML:

```javascript
const title = "My Website";
const content = `<div>
  <h1>${title}</h1>
  <p>This is a simple website created using template literals.</p>
</div>`;

// Now you can inject 'content' into your HTML document.
```

