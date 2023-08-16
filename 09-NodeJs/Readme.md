
# NodeJs

Node.js is an open-source, server-side runtime environment that allows you to execute JavaScript code on the server. It uses the V8 JavaScript engine, which is developed by Google and is also used in the Chrome web browser. Node.js enables developers to build scalable and efficient network applications, including web servers, APIs, and other types of software that handle I/O-intensive operations.

Key features and characteristics of Node.js include:

1. **Non-blocking I/O**: Node.js operates on a non-blocking, event-driven architecture. This means that it can handle multiple connections concurrently without waiting for previous I/O operations to complete, making it well-suited for handling a large number of concurrent requests.

2. **Asynchronous Programming**: Node.js heavily promotes asynchronous programming using callbacks, promises, and async/await syntax. This allows developers to write code that efficiently handles multiple tasks without blocking the execution of other code.

3. **Package Manager**: Node.js comes with the Node Package Manager (NPM), which is a repository of open-source libraries and modules that you can use to enhance the functionality of your applications.

4. **Cross-platform**: Node.js is designed to work across various operating systems, including Windows, macOS, and Linux, making it easy to develop and deploy applications on different platforms.

5. **Scalability**: Due to its event-driven and non-blocking nature, Node.js can handle a large number of concurrent connections and requests, making it suitable for building highly scalable applications.

6. **Real-time Applications**: Node.js is often used for building real-time applications such as chat applications, online gaming, collaborative tools, and more, thanks to its ability to handle asynchronous I/O operations effectively.

7. **Server-side scripting**: Node.js is commonly used for creating web servers and APIs. Developers can build the entire backend of a web application using JavaScript, both handling client requests and connecting to databases.

8. **Community and Ecosystem**: Node.js has a vibrant and active community, along with a vast ecosystem of libraries and frameworks that can streamline development and provide solutions for various use cases.

---

Node.js is chosen for its event-driven, non-blocking architecture, ideal for real-time applications and handling concurrent connections. Unlike traditional server setups, it uses a single language (JavaScript) for both client and server, streamlining development. This unified environment, along with its extensive package ecosystem, boosts productivity, making it a popular choice for building scalable, high-performance applications compared to other technologies.

---

## Simple commands

1. `node -version` : to know the version
2. `node` : to enter Node.js REPL" (Read-Eval-Print Loop)

- The Node.js app where you can write commands is called the "Node.js REPL" (Read-Eval-Print Loop). It provides an interactive environment for executing JavaScript code and seeing the immediate results.

3. `.exit` to exit the REPL or pres `Ctrl + C` to exit
4. `5+8` gives 13
5. `let a = 3` , then `a + 5 ` will give 8

- Inside node REPL is similar to javascript console in the browser , only difference is we are doing it out of browser and using node to run javascript code

- Now create file called index.js and write `console.log("hello world");`,
- Then inside terminal enter to the folder location containing index.js file using comand `cd 'c:/Users/hp/OneDrive/Desktop/08-Nodejs/'`
- After entering the location execute command `node index.js`
- It will give us output `hello world`

---

## Native Modules

- Native modules in Node.js are modules that are implemented in languages other than JavaScript, such as C or C++. These modules are compiled into binary code and can be loaded and used just like regular JavaScript modules in Node.js applications.

- Native modules are used when performance or low-level system interaction is required, as they can interact directly with the underlying system or hardware. They often provide bindings to system libraries or hardware-specific functionalities that are not easily accessible or performant when implemented purely in JavaScript.

- To use a native module in Node.js, you typically write a JavaScript wrapper that provides an interface to the underlying C or C++ code. This wrapper allows you to interact with the native functionality using JavaScript code. Node.js provides the "node-gyp" tool for compiling native modules, and it also offers the "N-API" (Node-API) for creating more stable and consistent interfaces between JavaScript and native code, especially when dealing with compatibility across different versions of Node.js.

--- 

### Importing fs (file system) modules and creating and manipulating text file using nodejs

1. Step 1:
```js
const fs = require("fs");
``` 

The line of code `const fs = require("fs");` is used in Node.js to import and use the "fs" module, which stands for "file system." This module is a core part of Node.js and provides functionalities for interacting with the file system on your computer or server.

   -  `const fs`: This declares a constant variable named `fs`, which will be used to access the functions and methods provided by the "fs" module.
   -  `require("fs")`: The `require` function is used in Node.js to import external modules. In this case, it's importing the "fs" module. The module name is provided as a string ("fs") within the parentheses. <br>

Once you have imported the "fs" module using this line of code, you can use the `fs` variable to access various methods and functions provided by the module. These functions allow you to perform operations such as reading and writing files, creating directories, renaming files, and more, on your system's file system.

2. Step 2:

- Look into `fs.write` method do the change and copy rest of code
  
```js
fs.writeFile("message.txt", "Hello from NodeJs!", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
});
```
- After executing the code, it creates a file calle dmessage.txt by nodejs <br>
 
The given code snippet uses the `fs.writeFile` method from the "fs" module in Node.js to create or overwrite a file named "message.txt" with the content "Hello from NodeJs!". After the operation is complete, a callback function is executed:
  
   - `fs.writeFile("message.txt", "Hello from NodeJs!", (err) => {`: This line initiates the process of writing the specified content to the "message.txt" file. The callback function `(err) => { ... }` is passed as the third argument, which will be executed once the operation is finished.
   - `if (err) throw err;`: Inside the callback, this line checks if there's an error during the file write operation. If an error occurs, it is thrown, potentially halting the program execution and displaying the error message.
   - `console.log("The file has been saved!");`: If the file write operation is successful (no error), this line logs a message indicating that the file has been saved.

In summary, the code writes the specified content to a file named "message.txt," handles potential errors, and logs a success message once the operation is completed.

---

### Reading text file using nodeJs

```js
fs.readFile("message.txt", 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
```

- Gives output the text present inside message.txt 
- `utf-8` argument should be present otherwise will give buffer or cannot see our text <br>

The provided code snippet uses the `fs.readFile` method from the "fs" module in Node.js to read the contents of a file named "message.txt" in UTF-8 encoding. Once the operation is complete, a callback function is executed:

1. `fs.readFile("message.txt", 'utf8', (err, data) => {`: This line initiates the process of reading the "message.txt" file using UTF-8 encoding. The callback function `(err, data) => { ... }` is provided as the third argument, which will be executed once the operation is finished.

2. `if (err) {`: Inside the callback, this line checks if there's an error during the file read operation.

3. `console.error(err);`: If an error occurs, this line logs the error message to the console using `console.error`.

4. `return;`: The `return` statement is used to exit the callback function if an error occurs, preventing the subsequent code from executing.

5. `console.log(data);`: If the file read operation is successful (no error), this line logs the read data (contents of the file) to the console.

In summary, the code reads the contents of the "message.txt" file in UTF-8 encoding, handles potential errors, and logs either the error message or the file contents based on the outcome of the operation.

---

### Node Package Manager (NPM)

npm (Node Package Manager) is a package manager for Node.js, which is a JavaScript runtime environment. npm allows developers to easily install, manage, and share reusable code packages (libraries, frameworks, and tools) that can be used in Node.js applications. It comes pre-installed with Node.js and is used to install, manage, and share code packages in Node.js applications, facilitating development and enhancing code reuse.

- Inside terminal write command `npm init -y`, it creates a `package.json` file for your project, guiding you through setup.
- Write some details like package name, description, author, in rest press enter
```
package name: (03--npm) learning-npm
version: (1.0.0)
description: I'm learning about npm
entry point: (index.js)
test command:
git repository:
keywords:
author: Shahbaz
license: (ISC)
```
- Output: About to write to C:\Users\hp\OneDrive\Desktop\Web Dev\08-NodeJs\03- NPM\package.json:
- It creates a `package.json` file
```json
{
  "name": "learning-npm",
  "version": "1.0.0",
  "description": "I'm learning about npm",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Shahbaz",
  "license": "ISC"
}

Is this OK? (yes) y
```

---

### Install npm packages

- `npm install <package>`: Installs a package and its dependencies for your project.
- `npm install <package1> <package2> <package3>` for installing multiple packages.
- This is a `package.json` file, which is a configuration file used by Node.js projects to specify project details, dependencies, scripts, and more.
  
- Installing package sillyname
- `npm i sillyname` : i short for install
- It install package sillyname with creating module folder with all sillyname files and updates json file with adding
```json
"dependencies": {
    "sillyname": "^0.1.0"
  }
```

- `"name"`: The name of the project.
- `"version"`: The project's version number.
- `"description"`: A brief description of the project.
- `"main"`: The entry point for the project (usually the main JavaScript file).
- `"scripts"`: Defines custom scripts you can run using `npm run`.
- `"author"`: The author of the project.
- `"license"`: The license type for the project.
- `"dependencies"`: Lists external packages that your project depends on, along with their required versions.

---

- Using documentation writing code and then getting output using commonjs module
```js
var generateName = require('sillyname');
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);
```
- "We're importing the 'sillyname' package to create amusing names.
- By calling the 'generateName()' function, we get a random name, which we then display with the sentence 'My name is [random silly name].' using a template literal."

---

- Understanding  tempelate literal
```javascript
const age = 30;
console.log(`I am ${age} years old.`);
```
- In this example, the template literal `${age}` is used to interpolate the value of the `age` variable into the string, resulting in the output: "I am 30 years old."


---

### CJS vs ESM
- CommonJS (CJS) and ECMAScript Modules (ESM) are two different systems for organizing and sharing code in JavaScript. Here's a brief comparison:

CommonJS (CJS):
- **Usage**: CommonJS is the module system primarily used in Node.js for server-side JavaScript.
- **Import/Export**: Imports and exports are synchronous and use `require()` to import and `module.exports` or `exports` to export.
- **Dynamic Loading**: Modules are loaded synchronously, making it less suitable for browser-based environments due to potential performance bottlenecks.

ECMAScript Modules (ESM):
- **Usage**: ESM is the official module system defined in the ECMAScript (JavaScript) specification, usable both in browsers and Node.js.
- **Import/Export**: Imports and exports are asynchronous and use `import` and `export` statements.
- **Static Analysis**: ESM allows for static analysis, enabling tools to optimize and tree-shake code during bundling for better performance.
- **Browser Support**: ESM is now widely supported in modern browsers, making it suitable for front-end development as well.

In summary, CommonJS (CJS) is the traditional module system used in Node.js, while ECMAScript Modules (ESM) is the newer, more modern module system defined by the JavaScript specification, suitable for both browsers and Node.js.

---

### Why json file is created

When you install npm packages in your project, a `package.json` file is created or updated to keep track of the packages you've installed and their versions. This file serves several important purposes:

1. **Dependency Tracking**: The `package.json` file lists the dependencies your project relies on. This ensures that other developers working on the project or deploying it can easily install the same set of dependencies.

2. **Version Control**: By specifying the exact versions of the dependencies in the `package.json` file, you ensure consistency across different environments and avoid potential compatibility issues.

3. **Reproducibility**: Having a `package.json` file makes it easier to recreate the exact development environment and reproduce the behavior of your application. This is crucial when sharing code with others or deploying to different servers.

4. **npm Scripts**: The `package.json` file also allows you to define custom npm scripts, which are commands that can be executed using the `npm run` command. This simplifies tasks like building, testing, and deployment.

5. **Project Metadata**: The `package.json` file contains essential metadata about your project, such as its name, version, description, author, and license. This information helps identify and manage your project.

Overall, the `package.json` file acts as a central configuration file for your Node.js project, enabling consistent development practices, version control, and easy collaboration. It's automatically created or updated when you install or remove npm packages to ensure your project's dependencies are accurately tracked.

---

CommonJS (CJS) and ECMAScript Modules (ESM) are two different module systems used in JavaScript for structuring and organizing code in a modular way. Each system has its own features, advantages, and use cases. Let's explore the differences between CommonJS and ESM:

1. **Syntax:**
   - **CommonJS:** In CommonJS, modules are imported and exported using the `require()` and `module.exports` syntax, respectively. For example:
     ```javascript
     // Importing
     const moduleA = require('./moduleA');
     
     // Exporting
     module.exports = { someFunction };
     ```

   - **ESM:** In ECMAScript Modules, modules are imported and exported using the `import` and `export` keywords. For example:
     ```javascript
     // Importing
     import { someFunction } from './moduleA';
     
     // Exporting
     export { someFunction };
     ```

2. **Loading Behavior:**
   - **CommonJS:** Modules in CommonJS are loaded synchronously, which means that the entire module is loaded and executed before the rest of the code continues. This can lead to potential performance bottlenecks, especially in server-side environments.
   
   - **ESM:** Modules in ESM are loaded asynchronously by default, allowing for better parallelism and performance in applications, particularly in web browsers. <br>



| Aspect                 | CommonJS                             | ESM                                          |
|------------------------|-------------------------------------|----------------------------------------------|
| Loading Behavior       | Synchronously loaded, potential bottlenecks | Asynchronously loaded, better parallelism    |
| Static Analysis        | Evaluated at runtime, limits optimizations | Evaluated statically, advanced optimizations |
| Circular Dependencies | Handled with cached modules          | Trickier due to static analysis               |
| Browser Compatibility | Primarily for servers, needs bundling | Natively works in modern browsers            |
| Migration and Compatibility | Traditional in Node.js, transitioning to ESM | Modern standard, more future-proof        |

<br>

- In summary, while CommonJS has been widely used, especially in server-side JavaScript with Node.js, ECMAScript Modules (ESM) offer a more modern and browser-compatible approach to modular code.
- The choice between the two largely depends on the target environment and the specific requirements of the project.

---

### Implementing superheroes name generator using esm modules

```js
import superheroes from "superheroes";
var name = superheroes.random();
console.log("My name is " + name + " and I am happy about it.");
//=> 'Spider-Ham'
```

It can also work like this: 
```js
import a from "superheroes";
var name = a.random();
console.log("My name is " + name + " and I am happy about it.");
```

- Its like `import` variableName from `"superheroes"`


---

## Qr code generator

```js
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";

inquirer
    .prompt([
        {
            "message": "Type in your URL: ",
            "name": "URL",
        }

    ])
    .then((answers) => {
        const url = answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr_img.png'));

        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    })

    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
```
