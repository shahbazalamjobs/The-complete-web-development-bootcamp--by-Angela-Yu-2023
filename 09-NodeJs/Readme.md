
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

### Importing fs (file system) modules

`const fs = require("fs");` <br>

The line of code `const fs = require("fs");` is used in Node.js to import and use the "fs" module, which stands for "file system." This module is a core part of Node.js and provides functionalities for interacting with the file system on your computer or server.

1. `const fs`: This declares a constant variable named `fs`, which will be used to access the functions and methods provided by the "fs" module.

2. `require("fs")`: The `require` function is used in Node.js to import external modules. In this case, it's importing the "fs" module. The module name is provided as a string ("fs") within the parentheses. <br>

Once you have imported the "fs" module using this line of code, you can use the `fs` variable to access various methods and functions provided by the module. These functions allow you to perform operations such as reading and writing files, creating directories, renaming files, and more, on your system's file system.
