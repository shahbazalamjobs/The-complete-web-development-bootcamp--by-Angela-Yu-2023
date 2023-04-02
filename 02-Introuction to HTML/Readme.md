# HTML
HTML stands for Hypertext Markup Language. 
It is the standard markup language used for creating web pages and applications. 

HTML consists of a series of tags and attributes that are used to structure content and create different elements on a web page, such as headings, paragraphs, images, links, forms, and tables. Web browsers use HTML to interpret and display web pages for users. 

HTML is a foundational technology for front-end web development, and is often used in conjunction with CSS and JavaScript to create responsive, interactive, and dynamic web applications.

| HTML |
| --- |
| HTML stands for Hypertext Markup Language |
| It is the standard markup language used for creating web pages and applications |
| HTML consists of a series of tags and attributes that are used to structure content and create different elements on a web page |
| Tags are used to define specific elements, such as headings, paragraphs, images, links, forms, and tables |
| Attributes provide additional information about a tag and its associated element, such as the source of an image or the destination of a link |
| HTML is a foundational technology for front-end web development |
| Web browsers use HTML to interpret and display web pages for users |
| HTML is often used in conjunction with CSS and JavaScript to create responsive, interactive, and dynamic web applications |


| HTML Topics for Full Stack Developers |
| --- |
| **1. Basic HTML Structure** <br> Understanding the basic structure of an HTML document, including the `<!DOCTYPE>`, `<html>`, `<head>`, and `<body>` tags. |
| **2. Semantic HTML** <br> Using HTML tags that convey the meaning of their content, such as `<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, and `<footer>`. |
| **3. HTML Forms** <br> Creating forms using HTML tags such as `<form>`, `<input>`, `<select>`, `<textarea>`, and `<button>`, and understanding form validation and submission. |
| **4. HTML Tables** <br> Creating tables using HTML tags such as `<table>`, `<th>`, `<tr>`, and `<td>`, and understanding how to style and structure tables. |
| **5. HTML Media** <br> Adding images and multimedia content using HTML tags such as `<img>`, `<audio>`, and `<video>`, and understanding how to optimize media for web use. |
| **6. HTML Accessibility** <br> Ensuring that web content is accessible to all users, including those with disabilities, by using appropriate HTML tags, attributes, and techniques. |
| **7. HTML Best Practices** <br> Following best practices for HTML coding, including using valid HTML markup, separating content and presentation using CSS, and optimizing web page performance. |

**********


The basic HTML structure is the foundation of every HTML document and provides a structure for all web pages. It consists of a few essential elements, which are:

`<!DOCTYPE html>`: This declaration at the beginning of an HTML document tells the browser which version of HTML is being used.

`<html>`: This element is the root element of an HTML document and contains all other elements.

 `<head>`: This element contains meta information about the document, such as the page title, links to stylesheets, and scripts.

`<title>`: This element specifies the title of the document, which is displayed in the browser's title bar and in search engine results.

`<body>`: This element contains the content of the document, such as headings, paragraphs, images, and links.

Here is an example of the basic HTML structure:
```
<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Welcome to my website</h1>
    <p>This is my first web page.</p>
  </body>
</html>
```

This example includes a `<!DOCTYPE>` declaration, an `<html>` element that encloses the entire document, a `<head>` element with a `<title>` element, and a `<body>` element with some content. This is the basic structure that you will build upon when creating your own HTML documents.



**********

# HTML Tags
 
HTML tags are elements used to structure content and give meaning to text in an HTML document. They are used to define the layout and appearance of a web page, as well as to provide functionality through attributes and events.

HTML tags are enclosed in angle brackets `(< and >)`, with the tag name inside. Some tags require an opening tag `(<tag>)` and a closing tag `(</tag>)` to define the content within, while others are self-closing `(<tag />)` and do not require a closing tag.

- For example, the `<p>` tag is used to define a paragraph of text and requires both an opening and a closing tag:
`<p>This is a paragraph of text.</p>`

- The `<img>` tag, on the other hand, is self-closing and does not require a closing tag:
`<img src="image.jpg" alt="Description of the image" />`
 

- HTML tags can also have attributes that provide additional information about the element, such as id, class, href, src, and alt. Attributes are added to the opening tag and consist of a name and a value, separated by an equals sign:

`<a href="https://www.example.com">Click here to visit Example.com</a>`
- In this example, the <a> tag defines a hyperlink and includes the href attribute, which specifies the URL that the link should point to.

  
 Tag | Description
--- | ---
`<html>` | Defines the root element of an HTML document
`<head>` | Contains metadata about the document that is not displayed in the browser
`<title>` | Defines the title of the document that is displayed in the browser's title bar
`<body>` | Contains the visible content of the document
`<h1>` to `<h6>` | Define six levels of headings (h1 being the most important)
`<p>` | Defines a paragraph of text
`<a>` | Defines a hyperlink to another webpage or resource
`<img>` | Defines an image to be displayed on the page
`<ul>` | Defines an unordered list (a list with bullet points)
`<ol>` | Defines an ordered list (a list with numbers or letters)
`<li>` | Defines a list item within an ordered or unordered list
`<table>` | Defines a table
`<tr>` | Defines a table row
`<th>` | Defines a table header cell
`<td>` | Defines a table data cell
`<form>` | Defines a form for user input
`<input>` | Defines an input field where the user can enter data
`<button>` | Defines a clickable button
`<select>` | Defines a drop-down list
`<option>` | Defines an option in a drop-down list





 
**********

# Semantic HTML
 
Semantic HTML refers to the use of HTML markup to reinforce the meaning of the content on a web page rather than only defining its presentation or appearance. In other words, semantic HTML is all about using HTML elements in a way that accurately reflects the meaning of the content they contain.

For example, using the `<header>` tag for the top section of a page, the `<nav>` tag for the navigation menu, and the `<footer>` tag for the bottom section of a page are all examples of using semantic HTML to reinforce the structure and meaning of the content.

Here are some key benefits of using semantic HTML:

Accessibility: Semantic HTML can make web content more accessible to people using screen readers and other assistive technologies, as it provides more context and structure to the content.

Search Engine Optimization (SEO): Search engines use semantic HTML to better understand the content of a web page and its relevance to user searches, potentially improving its ranking in search results.

Readability and maintainability: Semantic HTML can make code easier to read and maintain by accurately reflecting the meaning and structure of the content.

Some commonly used semantic HTML tags include:

`<header>`: Defines the top section of a page or a section of a page. <br>
`<nav>`: Defines a section for navigation links. <br>
`<article>`: Defines a self-contained section of content, such as a blog post or news article.<br>
`<section>`: Defines a generic section of content.<br>
`<aside>`: Defines content that is tangentially related to the main content of the page, such as a sidebar. <br>
`<footer>`: Defines the bottom section of a page or a section of a page. <br>
By using semantic HTML tags appropriately, developers can create web pages that are more accessible, more easily understood by search engines, and more maintainable over time. <br>
 
 
## Example of using semantic HTML
 ``` 
<header>
  <h1>My Blog</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>
    <h2>My First Post</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in faucibus massa. Donec varius, justo eget tincidunt commodo, sem purus molestie erat, nec elementum leo purus in risus. Ut pharetra augue eu velit pharetra malesuada. Nunc tincidunt tellus vel orci hendrerit dictum.</p>
  </article>
  <aside>
    <h3>Popular Posts</h3>
    <ul>
      <li><a href="#">Post 1</a></li>
      <li><a href="#">Post 2</a></li>
      <li><a href="#">Post 3</a></li>
    </ul>
  </aside>
</main>
<footer>
  <p>Copyright © 2023</p>
</footer>
``` 
 
**********

# Anchor Tag:
- The anchor tag is represented by the <a> element in HTML.
- The anchor tag is used to create hyperlinks between web pages and other resources on the internet, such as documents or images.
  
  
| Tag | Description |
| --- | --- |
| `<a>` | Represents the anchor tag in HTML |
| `href attribute` | Specifies the URL of the resource to which the hyperlink leads |
| `Visible hyperlink text` | The text between the opening and closing anchor tags that the user clicks on to follow the link |
| `target attribute` | Specifies where the linked resource should open, such as in a new window or tab |
| `title attribute` | attribute	Provides additional information about the hyperlink to the user |
| `Bookmark` | Creates bookmarks within a web page, allowing users to jump to specific sections of the page |
| `Link to specific elements` | Links to specific elements within a web page, such as headings or images, using the id attribute to identify the element |
 
---
1. How to use anchor tag 
  ![image](https://user-images.githubusercontent.com/125631878/226855329-de873234-2557-40fc-85de-9cfb9aae1d7d.png)
   This opens hyperlinked text "website text" to example.com
---  
2. Link new page to main page
   1. Create new page name "Hobbies.html" in same folder of main page 
   2. Add Html boiler plate
   3. Now add the content 
   4. In main page use anchor tag <a>, add text "My hobbies", then add link in href "hobbies.html" 
  
---  
  
![image](https://user-images.githubusercontent.com/125631878/226837759-fc703d2c-b305-415b-8b3a-004aa4d37bb3.png)
**********
  
![image](https://user-images.githubusercontent.com/125631878/226849646-fadc8b0f-5d62-4523-bbad-fdb859660f10.png)
**********

![image](https://user-images.githubusercontent.com/125631878/228936818-e93e954d-87df-4801-9967-405480f324da.png)
  **********

![image](https://user-images.githubusercontent.com/125631878/228937707-47db79a7-7999-4cb8-ac45-8de62cbad1a1.png)
  **********

![image](https://user-images.githubusercontent.com/125631878/228938361-23bb2756-dae5-4af3-8ea0-9780a3ffac83.png)
 **********

![image](https://user-images.githubusercontent.com/125631878/228938624-cf1287e2-929e-4f93-afdc-fcd55706658b.png)

---
  
# Table
-  The <table> HTML element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data. 
- HTML tables are used to display data in a tabular format, with rows and columns.
- Tables are created using the `<table>` tag in HTML, with additional tags used for defining table rows `<tr>`, table headings `<th>` and table data cells `<td>`.
 

![image](https://user-images.githubusercontent.com/125631878/228939097-985fbb00-015d-48ee-826a-7fb25acc2153.png)
  ---
![image](https://user-images.githubusercontent.com/125631878/228939292-c9c0cc2a-8578-4022-a003-cb62847234f3.png)
  ---
![image](https://user-images.githubusercontent.com/125631878/228939569-a675fb86-bbba-4861-b1ba-ba1489447627.png)

  ---
# Understanding This table of table
![image](https://user-images.githubusercontent.com/125631878/228594879-390aa957-50ca-41ef-a85f-9b0ef27f9992.png)
- Here two tables are nested in another table
- Table 1 with HTML CSS and Javascript in 1 column with their respective stars in another column
- Table 2 with ReactJs NodeJs and SQL in one column with their respective stars in another column 
- Then we copy html code of table 1 and table 2 and paste it in another table in its column 1 and column 2
---

# HTML Forms
  
![image](https://user-images.githubusercontent.com/125631878/228599767-3d42ad9b-d906-4e59-a7e3-252e060b9100.png)
---
![image](https://user-images.githubusercontent.com/125631878/228603879-aa0d793b-87fe-4cfb-a2cd-5d87bfef5d78.png)
---
![image](https://user-images.githubusercontent.com/125631878/228924524-da5e5439-4ea4-4fae-b25d-5f3a06f6ccf4.png)
---
![image](https://user-images.githubusercontent.com/125631878/228942306-858795ab-436d-4eef-9494-513ef037699f.png)

* Here Input type is text in email, so if we write wrong email like `abcq78` it will not tell whether its right or wrong but if we change input type to email it will show us the error. <br>
* Also here in name attribute we write yourName, yourEmail, yourMessage which specifies the name of the input field, which is used to identify the field in the form data sent to the server. <br><br> 
  
![image](https://user-images.githubusercontent.com/125631878/228940437-7fde00be-0fd6-4a8e-82bc-10a7a51a32a2.png)

---
![image](https://user-images.githubusercontent.com/125631878/228929961-37f57e3d-d17f-43fa-b09b-18e033ac90ac.png)
---
![image](https://user-images.githubusercontent.com/125631878/228930898-432b4330-48e2-4106-ba6e-f8a421fa2980.png)
---  

- HTML forms are used to collect user input from a web page.
- Forms are created using the <form> element in HTML, which contains input fields and controls.
- Input fields can include text boxes, radio buttons, checkboxes, dropdown menus, and more. Each input field is defined using an appropriate HTML tag, such as `<input>`, `<select>`, or `<textarea>`.
- Form controls include buttons for submitting or resetting the form, as well as hidden fields for storing additional data.
- Form data is typically sent to a server for processing using the HTTP protocol, using either the GET or POST method. The method is specified in the `<form>` element's method attribute.
- The server can respond with a new web page, or use the data to perform some action, such as adding a new user to a database.
- Form validation can be used to ensure that the user has entered valid data before submitting the form. Validation can be performed using JavaScript or server-side code.
  
| Attribute | Description |
| --- | --- |
| `<form>` | Defines the start and end of an HTML form. |
| `action` | Specifies the URL of the script or server page that will handle form data when the form is submitted. |
| `method` | Specifies the HTTP method to be used when submitting the form, usually either GET or POST. |
| `target` | Specifies where the server response should be displayed, such as in a new window or frame. |
| `enctype` | Specifies the encoding type used to submit the form data to the server. The most common value is `application/x-www-form-urlencoded`. |
| `<input>` | Defines an input field within a form. The `type` attribute specifies the type of input, such as text, checkbox, or radio button. |
| `name` | Specifies the name of the input field, which is used to identify the field in the form data sent to the server. |
| `value` | Specifies the initial value of the input field. |
| `required` | Specifies that the input field must be filled in before the form can be submitted. |
| `<label>` | Associates a label with an input field, providing a description or prompt for the field. |
| `for` | Specifies which input field the label is associated with, by referencing the `id` attribute of the input field. |
| `<select>` | Defines a dropdown list of options within a form. |
| `<option>` | Defines an option within a dropdown list. The `value` attribute specifies the value that will be sent to the server if the option is selected. |
| `<textarea>` | Defines a multi-line input field within a form. |
| `rows` | Specifies the number of visible rows in the textarea. |
| `cols` | Specifies the number of visible columns in the textarea. |
| `<button>` | Defines a button within a form, which can be used to submit the form or trigger a JavaScript function. |
| `type` | Specifies the type of button, which can be "submit", "reset", or "button". |
| `onclick` | Specifies a JavaScript function to be executed when the button is clicked. |


- In HTML, the `<label>` element is used to associate a text label with a form control, such as an input field or checkbox. Here's an example of how to use labels with form controls:  
 
   `<label for="name">Name:</label>` <br>
   `<input type="text" id="name" name="name" />`

- In this example, the `<label>` element contains the text "Name:", which serves as a label for the `<input>` element. The for attribute of the `<label>` element specifies that it is associated with the input field whose id attribute is "name". This means that clicking on the label will focus the input field and allow the user to enter their name.

--- 
- Whenever we add a `<form>` tag in the HTML, it is going to ask for some action for submitting that particular form in the backend for future reference. So, for now, we will write it as index.html. All the data submitted in a form will be stored automatically in the backend “index.html” after submitting it.

  The template will look like-
`<form action= “index.html”>` 
---
- To get the input type as an email in the form, the syntax is
  `<input type="email" name="myEmail">`
- The name here is used so that the backend can recognize the tag that we are using.
  
********** 
HTML media refers to the ability of HTML to embed and display various types of media content within a web page, such as images, audio, and video. Here are some examples of HTML media:


 
 ```
 
 <img src="image.jpg" alt="Alternative text for the image">

<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>

<video controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>

<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>

 
 ```
 
| HTML Media	| Description |
|---|---|
| `<img>` |	Inserts an image into the web page.|
| `<audio>` |	Embeds audio content into the web page.|
| `<video>` |	Embeds video content into the web page.|
| `<figure>` |	Groups related media content and their captions.|
| `<figcaption>` |	Defines the caption for a <figure> element.|
| `<source>`	| Specifies multiple sources for media elements like <audio> and <video>.|
| `<track>` |	Adds timed text tracks to media elements like <audio> and <video>.|
 
 

**********
 

| HTML Best Practices       | Description           |
|---------------------------|-----------------------|
| Use proper document structure | Use the correct HTML structure, including the <html>, <head>, and <body> tags. |
| Use semantic HTML | Use HTML tags that accurately describe the content they contain, such as <nav>, <header>, <footer>, and <main>. |
| Use valid HTML | Ensure that your HTML code conforms to the HTML standard and is free of errors. Use a validator tool to check your code. |
| Use alt attributes for images | Use descriptive alt attributes for images to ensure that users with visual impairments can understand the content. |
| Use descriptive and concise titles | Use concise and descriptive titles for your web pages that accurately reflect their content. |
| Use CSS for presentation | Use CSS to style your HTML elements rather than using inline styles or deprecated HTML attributes. |
| Optimize images and other media | Optimize images and other media to reduce page load times and improve the user experience. Use the appropriate file formats and compression techniques. |
| Use responsive design | Ensure that your web pages are optimized for different screen sizes and devices. Use responsive design techniques such as media queries and flexible layouts. |
| Test your code | Test your HTML code in different browsers and devices to ensure that it works correctly and looks good. Use developer tools and testing frameworks to automate your testing. |
| Keep your code organized | Use consistent and readable code formatting and commenting to make your code easier to maintain and update. |

 
 **********
 
# Launch Website in Github

1. Create new repository
2. Upload all the files
3. Go to setting
4. Then Pages
5. In branch select main
![image](https://user-images.githubusercontent.com/125631878/228950970-c42ffa5c-bbf1-475b-ad91-021c575e9897.png)

6. On that same page you will get website link
![image](https://user-images.githubusercontent.com/125631878/228951355-d62e86d6-6ced-429c-8368-2a77c588de0b.png)

| My first website Link using HTML only:| https://shahbazalamjobs.github.io/FirstWebsite// |
|---|---|
