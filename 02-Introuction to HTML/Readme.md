# HTML

# Anchor Tag:
- The anchor tag is represented by the <a> element in HTML.
- The anchor tag is used to create hyperlinks between web pages and other resources on the internet, such as documents or images.
  
 ---
  
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
  
![image](https://user-images.githubusercontent.com/125631878/227138836-a1a80d11-6e7d-46fc-86df-48f7b331ee7d.png)
  **********

![image](https://user-images.githubusercontent.com/125631878/227138920-b9ccad75-d1e2-4390-9126-bdcf830b5f4a.png)
  **********

![image](https://user-images.githubusercontent.com/125631878/227139103-4f61021e-faac-420d-82a4-f906ce6a45ef.png)
 **********

![image](https://user-images.githubusercontent.com/125631878/227139192-15e23329-0312-41d5-8b67-31062c42c8e8.png)

---
  
  # Table
-  `The <table> HTML element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data. `
- `HTML tables are used to display data in a tabular format, with rows and columns.`
- `Tables are created using the <table> tag in HTML, with additional tags used for defining table rows (<tr>), table headings (<th>) and table data cells (<td>).`
 

![image](https://user-images.githubusercontent.com/125631878/228592462-f4a46665-b1f9-4bde-b268-9fd7d29d7de3.png)
  ---
![image](https://user-images.githubusercontent.com/125631878/228591119-9e37ea55-5551-4871-8569-666cb37f05f6.png)
  ---
![image](https://user-images.githubusercontent.com/125631878/228592935-764b8c4c-a69e-4c06-a2e3-681c83f4d1b1.png)

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
![image](https://user-images.githubusercontent.com/125631878/228927641-44d20164-338f-4acc-8199-f41426c96b62.png)
---
![image](https://user-images.githubusercontent.com/125631878/228929961-37f57e3d-d17f-43fa-b09b-18e033ac90ac.png)
---
![image](https://user-images.githubusercontent.com/125631878/228930716-23c26d04-3717-43e3-95b7-bfb0fd45dc6e.png)
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
  
