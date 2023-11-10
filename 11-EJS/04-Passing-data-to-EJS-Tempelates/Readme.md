
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


