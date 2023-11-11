
1. **Passing data from server to EJS:**
   - In your server code (let's say using Node.js and Express), you render an EJS file using `res.render('yourEJSFile', { key: 'value' })`.
   - In your EJS file, you can then access the passed data using `<%= key %>`. For example, if you passed `{ name: 'ChatGPT' }`, in your EJS file you would use `<%= name %>` to display "ChatGPT".

   **Example:**
   ```javascript
   // Server-side code
   app.get('/example', function(req, res) {
       res.render('example', { message: 'Hello, world!' });
   });
   ```

   ```ejs
   <!-- EJS file (example.ejs) -->
   <h1><%= message %></h1>
   ```

2. **Passing data from EJS to server:**
   - When a user interacts with your rendered EJS page (e.g., submitting a form), the data is typically sent to the server via an HTTP request (POST or GET).
   - You can access this data on the server using middleware like `body-parser` (for POST requests) or directly from the query parameters (for GET requests).
   
   **Example (using body-parser for POST):**
   ```javascript
   const bodyParser = require('body-parser');

   // Parse URL-encoded bodies (as sent by HTML forms)
   app.use(bodyParser.urlencoded({ extended: true }));

   app.post('/submitForm', function(req, res) {
       const formData = req.body;
       // Do something with the form data
       res.send('Form submitted successfully!');
   });
   ```

   In your EJS file, the form might look like this:
   ```html
   <form action="/submitForm" method="post">
       <label for="username">Username:</label>
       <input type="text" id="username" name="username">
       <button type="submit">Submit</button>
   </form>
   ```

   
## Use of local 

- Using locals allows you to inject dynamic content into your templates.
- For example, you might fetch some data from a database or perform some server-side logic, and then pass the result to the template using locals.
- This separation of concerns helps keep your server-side and client-side code modular and maintainable.

```js
// server.js file 
app.get('/fruits', (req, res) => {
  // Some server-side logic to fetch fruits from a database or another source
  const fruits = ['Apple', 'Banana', 'Orange', 'Grapes'];

  // Render the 'fruits' template and pass the 'fruits' array to it using 'locals'
  res.render('fruits', { fruits: fruits });
});
```

```ejs
<!-- fruits.ejs file -->
<body>
  <% if (locals.fruits) { %>
    <h1>List of Fruits:</h1>
    <ul>
      <% locals.fruits.forEach(fruit => { %>
        <li><%= fruit %></li>
      <% }); %>
    </ul>
  <% } else { %>
    <p>No fruits available.</p>
  <% } %>
</body>
```
- `locals.fruits` dynamically generate the HTML content based on the array of fruits received from the server.
