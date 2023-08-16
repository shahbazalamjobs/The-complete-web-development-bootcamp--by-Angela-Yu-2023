# Express Js

Express.js is a popular web application framework for Node.js, designed to simplify the process of building web applications and APIs. It provides a set of tools and features that help developers handle various aspects of web development, such as routing, middleware, request and response handling, and more. <br>

Key Features and Concepts of Express.js:

1. **Routing**: Express.js allows you to define routes for different URLs and HTTP methods (GET, POST, PUT, DELETE, etc.). Each route can have associated handler functions that execute when a request matches that route.

2. **Middleware**: Middleware functions are executed in a sequence for every incoming request. They can perform various tasks such as authentication, logging, data parsing, and error handling. Middleware functions can be applied globally to the entire application or to specific routes.

3. **Request and Response Handling**: Express provides a simplified way to handle incoming HTTP requests and send responses. It offers methods for setting headers, sending data, and handling different content types.

4. **Templates and Rendering**: Express supports template engines like EJS, Pug (formerly known as Jade), and others. These engines enable you to dynamically generate HTML by injecting data into templates.

5. **Static Files**: You can serve static files (like CSS, JavaScript, images) using Express's built-in middleware. This simplifies the process of delivering client-side assets.

6. **Routing Parameters**: Express allows you to define routes with parameters that can be extracted from the URL. This is useful for creating dynamic routes and handling variable data.

7. **Error Handling**: Express provides mechanisms to handle errors and exceptions, both for synchronous and asynchronous operations. This helps you create more robust applications.

8. **RESTful APIs**: Express is commonly used for building RESTful APIs due to its flexibility in handling routes and HTTP methods.

Getting Started with Express.js:

To use Express.js, you typically need to follow these steps:

1. **Install Express**: Install Express.js as a dependency in your Node.js project using a package manager like npm.

2. **Create an Express App**: Create an instance of an Express application using `express()`.

3. **Define Routes**: Define routes using the HTTP methods (GET, POST, etc.) and associate them with handler functions.

4. **Middleware**: Add middleware functions to handle tasks like parsing request data, authentication, logging, and more.

5. **Start Server**: Start the Express server by listening on a specific port using the `app.listen()` method.

Example Code:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
```

In this example, when a GET request is made to the root URL ('/'), the server responds with "Hello, Express!".

Express.js is known for its simplicity, flexibility, and vibrant ecosystem. It has a large community and a wealth of third-party packages that can be easily integrated to extend its functionality. It's a great choice for building web applications and APIs using Node.js.

---

### Creating server using Express

```js
import express from "express";
const app = express();
const port = 3000;

// app.listen(3000, () => {     // without var port 
//     console.log("Server running on port 3000.");
// });

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});

// o/p: Cannot GET /
```

---

### HTTP Request

HTTP (Hypertext Transfer Protocol) requests are the foundation of communication between a client (typically a web browser or another application) and a server. These requests are used to send and receive data over the internet, allowing users to interact with web applications and retrieve resources from servers. There are several types of HTTP requests, each serving a specific purpose:

1. **GET Request:**
   A GET request is used to retrieve data from a server. It is the most common type of request and is used when you visit a website or access a resource through a URL. GET requests should not have a request body, as they are meant to be idempotent (i.e., multiple requests should have the same effect as a single request).

   Example:
   ```http
   GET /api/posts HTTP/1.1
   Host: example.com
   ```

2. **POST Request:**
   A POST request is used to send data to the server to create or update a resource. It is often used when submitting forms or uploading files. Unlike GET requests, POST requests include a request body containing the data to be sent to the server.

   Example:
   ```http
   POST /api/posts HTTP/1.1
   Host: example.com
   Content-Type: application/json

   {"title": "New Post", "content": "This is a new post."}
   ```

3. **PUT Request:**
   A PUT request is similar to POST but is used to update or create a resource at a specific URL. If the resource already exists, the server updates it; if it doesn't exist, the server creates it.

   Example:
   ```http
   PUT /api/posts/123 HTTP/1.1
   Host: example.com
   Content-Type: application/json

   {"title": "Updated Post", "content": "This post has been updated."}
   ```

4. **PATCH Request:**
   A PATCH request is used to make partial updates to a resource. It only updates the fields provided in the request, leaving other fields unchanged.

   Example:
   ```http
   PATCH /api/posts/123 HTTP/1.1
   Host: example.com
   Content-Type: application/json

   {"content": "Updated content."}
   ```

5. **DELETE Request:**
   A DELETE request is used to delete a resource from the server.

   Example:
   ```http
   DELETE /api/posts/123 HTTP/1.1
   Host: example.com
   ```

6. **OPTIONS Request:**
   An OPTIONS request is used to determine the communication options for a target resource. It is often used in CORS (Cross-Origin Resource Sharing) scenarios.

   Example:
   ```http
   OPTIONS /api/posts HTTP/1.1
   Host: example.com
   ```

These are the fundamental HTTP request methods used for communication between clients and servers. Each method serves a specific purpose and is an integral part of web development when building applications that interact with servers.

---

### Creating server using Express with output

```js

import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World! ff</h1>");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
});

// o/p: Hello, express!
```

### Express.js Route Handler Explanation

The given code snippet represents a route handler in an Express.js application. This handler is responsible for processing an HTTP GET request made to the root path ("/") of the server. Let's break down the code step by step:

1. **Route Definition:**
    ```javascript
    app.get("/", (req, res) => {
        // Route handler logic
    });
    ```
    In this section, a route handler is defined using the `app.get()` method. This method specifies that the handler will respond to HTTP GET requests targeting the root path ("/").

2. **Callback Function:**
    ```javascript
    (req, res) => {
        // Callback function logic
    }
    ```
    Within the route handler, an arrow function is used as the callback. This function takes two parameters: `req` (request) and `res` (response). These parameters represent the incoming request from the client and the response that will be sent back to the client.

3. **Sending Response:**
    ```javascript
    res.send("<h1>Hello World! ff</h1>");
    ```
    Inside the callback function, the `res` (response) object is utilized to send a response to the client. The `send` method is employed to send an HTML response, in this case, containing the text "Hello World! ff" wrapped in an `<h1>` (header) HTML element.

In summary, when a client, such as a web browser, sends an HTTP GET request to the root path ("/") of the server, the Express.js application responds with an HTML page that displays the text "Hello World! ff" in a prominent header ("h1") format.


---

- Installing nodemon globally: dont have to restart the server for every changes, only refresh required
- Install: `npm i nodemon`
- Use it : `nodemon index.js`

---

### Endpoints

- Endpoints in Express.js are specific URLs that your application exposes to handle incoming HTTP requests.
- Each endpoint corresponds to a unique route and serves a particular purpose or functionality.
- Express defines endpoints using HTTP methods (GET, POST, PUT, DELETE, etc.) and route paths.
- They are often organized based on resources and can include dynamic parameters.
- Middleware can be used for additional processing, and response data is sent back to clients from endpoint handlers.
- Endpoints enable you to create a structured and feature-rich API or web application.

- Endpoints in Express.js are like different doors in a building.
- When you want something from a specific room, you go through the right door.
- Each door (endpoint) leads to a different place (function) where you get what you need.
- These endpoints help your web app understand what users want and serve them accordingly.

Sure, let's consider a simple website for a bakery named "Sweet Delights." This website will have a few pages with different content. Here's an example of how the website's structure and content might look:

1. Home Page ("/")
2. Menu Page ("/menu")
3. About Page ("/about")
4. Contact Page ("/contact")
5. Order Page ("/order")
6. Gallery Page ("/gallery")

Each of these pages corresponds to a different endpoint in the Express.js application that serves the website. For instance:

```javascript
const express = require('express');
const app = express();

// Define routes for different pages
app.get('/', (req, res) => {
  // Logic for rendering the home page
});

app.get('/menu', (req, res) => {
  // Logic for rendering the menu page
});

app.get('/about', (req, res) => {
  // Logic for rendering the about page
});

app.get('/contact', (req, res) => {
  // Logic for rendering the contact page
});

app.get('/order', (req, res) => {
  // Logic for rendering the order page
});

app.get('/gallery', (req, res) => {
  // Logic for rendering the gallery page
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
```

In this example, each endpoint handles a specific page's logic and content rendering, allowing users to navigate the different sections of the Sweet Delights Bakery website.

---

### Create server to handle endpoints "/", "/about", "/contact"

```js
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1> Hello! this is the root page </h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact</h1> <p>Hello! My phone no. is 99864778</p>");
});


app.get("/about", (req, res) => {
    res.send("<h1>About</h1> <p>Hello I am a full stack developer</p>");
});


app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});

```

---

### Postman

1. Postman is a popular software tool used by developers and API (Application Programming Interface) testers to interact with APIs.
2. It provides a user-friendly interface for making requests to APIs, testing endpoints, and viewing responses.
3. With Postman, you can create, send, and manage HTTP requests, as well as organize and save API endpoints for future use.
