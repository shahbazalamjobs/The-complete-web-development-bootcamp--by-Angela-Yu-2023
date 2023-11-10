![image](https://github.com/shahbazalamjobs/The-complete-web-development-bootcamp--by-Angela-Yu-2023/assets/125631878/bbe1269d-a522-46d5-b0cb-1d8f7c488602)

Embedded JavaScript (EJS) is a templating language that lets you embed JavaScript code within HTML markup. It's quite handy for dynamic content generation on the server side. In EJS, you use tags to embed JavaScript code. Here are the basic tags:

1. **Output Tags:** `<%=` and `%>`

   - `<%=` is used to output the result of a JavaScript expression into the HTML. For example: `<p><%= variable %></p>` will print the value of the variable inside the paragraph.

   - `%>` is used to close the JavaScript code block.

2. **Scriptlet Tags:** `<%` and `%>`

   - `<%` and `%>` are used for adding JavaScript code without outputting anything. For example: `<% if (condition) { %> Do something <% } %>`

3. **Comment Tags:** `<%#` and `%>`

   - `<%#` and `%>` are used for adding comments that won't be included in the rendered HTML. For example: `<%# This is a comment %>`

4. **Control Flow Tags:** `<%` and `%>`

   - You can use `<%` and `%>` for control flow statements like if-else and loops. For example:

     ```ejs
     <% if (condition) { %>
       <p>Condition is true</p>
     <% } else { %>
       <p>Condition is false</p>
     <% } %>
     ```

These are the basic tags in EJS. They provide a flexible way to mix JavaScript with HTML for dynamic content generation in server-side applications.
