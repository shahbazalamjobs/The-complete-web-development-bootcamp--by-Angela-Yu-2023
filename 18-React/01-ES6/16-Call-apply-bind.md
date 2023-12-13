
# Call Apply Bind

In ES6 and beyond, `call`, `apply`, and `bind` methods are not specific to ES6, but they are part of JavaScript and can be used with ES6 syntax. These methods are used for function invocation and managing the `this` context. Here's a brief overview of each:

1. **`call`:**
   - The `call` method is used to invoke a function immediately with a specified `this` value and arguments provided individually.
   - Syntax: `function.call(thisArg, arg1, arg2, ...)`

   ```javascript
   function greet(name) {
     console.log(`Hello, ${name}! My name is ${this.name}.`);
   }

   const person = { name: 'John' };

   greet.call(person, 'Alice');
   // Output: Hello, Alice! My name is John.
   ```

2. **`apply`:**
   - The `apply` method is similar to `call`, but it accepts arguments as an array.
   - Syntax: `function.apply(thisArg, [arg1, arg2, ...])`

   ```javascript
   function greet(name) {
     console.log(`Hello, ${name}! My name is ${this.name}.`);
   }

   const person = { name: 'John' };

   greet.apply(person, ['Alice']);
   // Output: Hello, Alice! My name is John.
   ```

3. **`bind`:**
   - The `bind` method creates a new function with a specified `this` value and initial arguments. It does not invoke the function immediately but returns a new function that can be called later.
   - Syntax: `function.bind(thisArg, arg1, arg2, ...)`

   ```javascript
   function greet(name) {
     console.log(`Hello, ${name}! My name is ${this.name}.`);
   }

   const person = { name: 'John' };

   const greetPerson = greet.bind(person);
   greetPerson('Alice');
   // Output: Hello, Alice! My name is John.
   ```

   In this example, `greet.bind(person)` creates a new function `greetPerson` with `this` set to `person`. When `greetPerson` is later invoked with the argument `'Alice'`, it still remembers the `this` context from the `bind` call.

These methods are not specific to ES6 but are essential tools in JavaScript for managing function contexts and arguments during invocation. They can be particularly useful in situations where you need to control the context in which a function is called.
