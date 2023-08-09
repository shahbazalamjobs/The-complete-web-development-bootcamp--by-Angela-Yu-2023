# Advance Javascript and DOM manipulation 

## EventListners

Event listeners are JavaScript functions that "listen" for specific events on HTML elements and execute code when those events occur.

**Code Example:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Event Listener Example</title>
</head>
<body>

<button id="myButton">Click me!</button>

<script>
  // Get a reference to the button element
  var button = document.getElementById("myButton");

  // Add an event listener for the "click" event
  button.addEventListener("click", function() {
    alert("Button clicked!");
  });
</script>

</body>
</html>
```

**Explanation:**
1. We have an HTML button element with the id "myButton".
2. In the `<script>` section, we use `document.getElementById` to get a reference to the button element.
3. We add an event listener to the button using the `addEventListener` method.
4. The event we're listening for is the "click" event.
5. When the button is clicked, the provided function is executed, which displays an alert saying "Button clicked!".

In this example, the event listener is set up to respond to the "click" event on the button element. You can replace "click" with other events like "mouseover", "keydown", "submit", etc., and provide a function to perform actions when those events occur on the element.


**Example : Click Event on Multiple Buttons**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Click Event on Multiple Buttons</title>
</head>
<body>

<button id="button1">Button 1</button>
<button id="button2">Button 2</button>
<button id="button3">Button 3</button>

<script>
  var buttons = document.querySelectorAll("button");

  // Add a click event listener to each button
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      alert("Button " + button.textContent + " clicked!");
    });
  });
</script>

</body>
</html>
```

**Explanation:**
1. We have three `<button>` elements with different IDs.
2. In the `<script>` section, we use `document.querySelectorAll` to select all buttons on the page.
3. We iterate through each button using the `forEach` method and add a click event listener.
4. When any button is clicked, the event listener function displays an alert indicating which button was clicked.


## `$0` in JavaScript:

1. `$0` is a special variable in the browser's developer console that refers to the last HTML element you selected or inspected in the "Elements" panel. It allows you to quickly access and interact with that element using JavaScript commands.
2. You can type `$0` in the console to see the properties and attributes of the selected element, and you can manipulate it directly using JavaScript code to test and debug your web page's behavior.

---

**Higher-Order Functions:**
- A higher-order function is a function that takes one or more functions as arguments and/or returns a function as its result.
- In other words, it operates on other functions, either by accepting them as parameters or by returning them.
- Higher-order functions enable powerful abstractions and can make your code more modular and reusable.

**Passing Functions as Arguments:**
- In JavaScript, functions are first-class citizens, which means they can be treated like any other value, such as numbers or strings.
- This allows you to pass functions as arguments to other functions.
- When you pass a function as an argument, you're essentially providing a behavior or logic that the receiving function can use.


```javascript
// Higher-order function that takes a function as an argument
function executeTwice(func) {
  func();   // Call the function once
  func();   // Call the function again
}

// Function to be passed as an argument
function greet() {
  console.log("Hello, world!");
}

// Using the higher-order function to execute the passed function twice
executeTwice(greet);

// Output:
// Hello, world!
// Hello, world!
```

**Explanation:**
1. We define a higher-order function `executeTwice` that takes a function `func` as its parameter.
2. Inside `executeTwice`, we call the `func` twice, executing the provided function's logic twice.
3. We define a function `greet` that simply logs "Hello, world!" to the console.
4. When we call `executeTwice(greet)`, we're passing the `greet` function as an argument.
5. As a result, the `greet` function's logic is executed twice within the `executeTwice` function.

In this example, `executeTwice` is a higher-order function, and `greet` is a function that we pass as an argument. This demonstrates how functions can be treated as values and used to encapsulate behaviors that can be reused across different contexts.

### Debugger
![image](https://github.com/shahbazalamjobs/The-complete-web-development-bootcamp--by-Angela-Yu-2023/assets/125631878/e1581820-29c2-4886-8975-ba330cbcc59b)


---

### `this` keyword in Javascript: 
In JavaScript, the `this` keyword refers to the current execution context, which is often determined by how a function is called. It is a special keyword that holds a reference to an object, and its value can change depending on how a function is invoked.

Here are some common scenarios where the value of `this` can change:

1. Global Context: In the global context (outside of any function), `this` refers to the global object, which is `window` in a browser environment or `global` in Node.js.

```javascript
console.log(this); // Refers to the global object (window in browsers)
```

2. Function Invocation: When a function is called as a standalone function, `this` still refers to the global object (window).

```javascript
function showThis() {
  console.log(this);
}

showThis(); // Refers to the global object (window in browsers)
```

3. Method Invocation: When a function is called as a method of an object, `this` refers to the object that the method belongs to.

```javascript
const person = {
  name: "John",
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

person.greet(); // Refers to the 'person' object, output: "Hello, my name is John"
```

4. Constructor Functions: When a function is used as a constructor to create new objects, `this` refers to the newly created instance.

```javascript
function Car(make) {
  this.make = make;
}

const myCar = new Car("Toyota");
console.log(myCar.make); // Refers to 'myCar' instance, output: "Toyota"
```

5. Explicit Binding: You can explicitly set the value of `this` using methods like `call()` or `apply()`.

```javascript
function greet() {
  console.log("Hello, " + this.name);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

greet.call(person1); // Explicitly bind 'this' to 'person1', output: "Hello, Alice"
greet.call(person2); // Explicitly bind 'this' to 'person2', output: "Hello, Bob"
```

6. Arrow Functions: Arrow functions do not have their own `this` context; they inherit it from the surrounding scope.

```javascript
const obj = {
  foo: function() {
    setTimeout(() => {
      console.log(this); // Inherited from 'obj'
    }, 100);
  }
};

obj.foo(); // Refers to 'obj' when arrow function is used
```

---

### EventListerners in more detail

Certainly! Here's an explanation of event listeners in JavaScript in simple bullet points:

- **Event Listeners**: Event listeners are pieces of code that wait for specific actions (events) to occur, like clicking a button or moving the mouse, and then respond by executing some code.

- **Events**: Events are actions that happen in a web page, such as clicking a button, submitting a form, moving the mouse, pressing a key, etc.

- **Attaching Listeners**: You can attach an event listener to an HTML element (like a button) using JavaScript. This listener "listens" for a particular event to happen to that element.

- **Callback Function**: When the specified event occurs, the listener calls a function (known as a "callback" function) that you provide. This function contains the code you want to run in response to the event.

- **Example**: Let's say you have an HTML button with the id "myButton" and you want to show an alert when it's clicked:

  ```javascript
  const button = document.getElementById("myButton"); // Get the button element
  button.addEventListener("click", function() {
    alert("Button clicked!"); // This function will be called when the button is clicked
  });
  ```

- **Event Types**: There are various types of events, such as "click," "mouseover," "submit," "keydown," and more. You choose the event type that you want to listen for.
- **Removing Listeners**: You can also remove event listeners if you no longer want them to respond to events. This is important to prevent memory leaks and unnecessary actions.
- **Event Object**: When an event occurs, an event object is created. This object holds information about the event, like which element triggered it and any associated data.
- **Benefits**: Event listeners are essential for making web pages interactive. They allow you to respond to user actions and create dynamic and engaging user experiences.
- **Event Bubbling**: Events can "bubble up" from a nested element to its parent elements. This means that if you have an event listener on a parent element, it might be triggered when a child element's event occurs.
- **Event Delegation**: You can use event delegation to attach a single listener to a parent element and capture events from its children. This can be more efficient when dealing with dynamic or large numbers of elements.

Overall, event listeners provide a way to make your web page responsive and interactive by allowing you to respond to user actions and trigger specific behaviors in your JavaScript code.


--- 

## Methods vs Functions
- The terms "methods" and "functions" are related concepts in programming, but they have distinct meanings and are used in different contexts:

**Functions:**
- A function is a self-contained block of code that performs a specific task and can be called (invoked) by its name.
- Functions are generally standalone units of code that can take input parameters and return a value.
- They can be defined globally or within other functions, and they are not tied to any particular object.
- Functions can be called from anywhere in the code where they are in scope.

**Methods:**
- A method is a function that is associated with an object or a class.
- Methods are actions that an object can perform, and they are called on that object.
- Methods are defined within a class or an object's prototype, and they can access the object's data (properties) using the `this` keyword.
- When a method is called, it operates on the specific instance of the object it's called on.

In summary:

- Functions are standalone blocks of code that can take inputs and produce outputs, and they are not tied to any specific object.
- Methods are functions associated with objects or classes, and they operate on the data contained within those objects.

Here's an example to illustrate the difference:

```javascript
// Function example
function add(a, b) {
  return a + b;
}

const result = add(2, 3); // Calling the function

// Method example
const person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
};

const fullName = person.getFullName(); // Calling the method on the 'person' object
```

In this example, `add` is a function that takes two parameters and returns their sum. `getFullName` is a method associated with the `person` object, and it returns the full name of the person using the object's properties.

---

## Objects their methods and dot notation 

Certainly! Let's delve into objects, their methods, and how dot notation is used with objects in JavaScript:

1. **Objects:**
   - Objects are data structures that store related data and behaviors (methods) together.
   - They are represented by key-value pairs, where each key is a property and each value can be of any data type, including other objects or functions.

2. **Methods:**
   - Methods are functions that are defined within objects and can be called on those objects.
   - They allow objects to perform actions or computations based on their internal data (properties).
   - Methods are accessed and called using dot notation.

3. **Dot Notation:**
   - Dot notation is a way to access properties and methods of an object.
   - It uses a dot (`.`) followed by the property or method name to access it.
   - Dot notation is used to both retrieve the value of a property and invoke a method on an object.

Here's an example illustrating objects, their methods, and dot notation:

```javascript
// Creating an object representing a person
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
  greet() {
    console.log(`Hello, my name is ${this.getFullName()} and I'm ${this.age} years old.`);
  }
};

// Accessing properties using dot notation
console.log(person.firstName); // Output: John
console.log(person.age);       // Output: 30

// Calling a method using dot notation
const fullName = person.getFullName(); // Calling the getFullName method

// Calling another method using dot notation
person.greet(); // Output: Hello, my name is John Doe and I'm 30 years old.
```

In this example:
- `person` is an object with properties (`firstName`, `lastName`, `age`) and methods (`getFullName`, `greet`).
- Dot notation is used to access properties like `person.firstName` and to call methods like `person.getFullName()` and `person.greet()`.

Remember that methods can access other properties and methods of the same object using `this`, which refers to the object itself. Objects and dot notation provide a powerful way to organize data and behaviors in your JavaScript code.
