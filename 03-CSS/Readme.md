# Introduction to CSS

- CSS stands for Cascading Style Sheets. It is a styling language used to describe the presentation of a document written in HTML or XML. CSS can be used to control the layout, colors, fonts, and other visual aspects of web pages.

- CSS is an important part of modern web development because it allows designers and developers to separate the presentation of a web page from its content. This separation makes it easier to maintain and update web pages, as changes to the visual design can be made in the CSS file without affecting the underlying HTML content.

- CSS works by selecting HTML elements and applying styles to them. Styles can be applied to elements based on their tag names, class names, IDs, or other attributes. CSS also supports a wide range of selectors and styling properties that allow for fine-grained control over the appearance of web pages.

- CSS is typically included in an HTML document using a <link> tag in the <head> section of the document. External CSS files can also be linked to multiple HTML documents, allowing for consistent styling across an entire website.

- Overall, CSS is an essential tool for creating modern, responsive, and visually appealing web pages.


| Concept/Feature | Description |
| --- | --- |
| CSS | Stands for Cascading Style Sheets, used for styling HTML or XML documents. |
| Separation of presentation from content | CSS allows designers to separate the presentation (visual design) of a web page from its content, making it easier to maintain and update. |
| Selectors | Used to select HTML elements to apply styles to. Examples include tag names, class names, and IDs. |
| Styling properties | Used to apply visual styles to HTML elements, such as font, color, padding, and margin. |
| Cascading | Refers to the way styles are applied in a hierarchical manner, with styles defined closer to an element taking precedence over more general styles. |
| Inheritance | Allows styles to be inherited by child elements from their parent elements. |
| Box model | Refers to the way HTML elements are rendered as rectangular boxes with content, padding, borders, and margin. |
| Layout | Refers to the arrangement of HTML elements on a web page. CSS provides a range of layout options, such as float, display, and flexbox. |
| Media queries | Used to apply different styles to a web page based on the size or orientation of the device it's being viewed on. |
| External CSS | Can be linked to HTML documents using a <link> tag in the <head> section, allowing for consistent styling across multiple pages. |

**********

![image](https://user-images.githubusercontent.com/125631878/229371302-bc9478a4-aba9-4cbb-b4a9-d0d84d76434d.png)
<br> 
- Here we made whole website background light sky blue color using html tag body which is not appropriate as HTML tags like body should not be used for styling purposes.<br> 
- For this we use external styling sheets

## Writing CSS code in HTML page only 
- Write `<sheet>` tag between `<head>` tag of html code snippet
- In order to select HTML tag, specify the name of the element you want to change (which in this case is body)
   ```
    <style>
                body {
                        background-color: #DAF5FF;
                }                           
    </style>
   ```
   ![image](https://user-images.githubusercontent.com/125631878/229371008-2f0cbd29-ee9f-47d5-810e-ea93392f73b2.png)
   
- If want to change whole horizontal rows `<hr>` color using css
     ```  
        hr {
                           background-color: white;
        }
    ```
   
   Code: <br> 
   ![image](https://user-images.githubusercontent.com/125631878/229371603-965a9e8c-092e-4784-a4a0-69f0ed7c022b.png) 
   
   Output: <br>
   ![image](https://user-images.githubusercontent.com/125631878/229371693-30219604-08bf-4cbc-895b-f8305c594bd4.png)
   
   
   ```  
    hr {
                        background-color: white;
                        border-style: none;
                        height: 2px;
       }
  ```
  [Note]: Instead of changing attributes of all `<hr>` in HTML we can simply do once by changing hr attribute in `<style>` tag inside `<head>` tag
  
  Default CSS of `<hr>`
  ![image](https://user-images.githubusercontent.com/125631878/229372206-e510a512-ce44-435c-a4eb-e46e614a2516.png)

  ![image](https://user-images.githubusercontent.com/125631878/229372115-9d1d15ec-05e7-4560-b4f7-78c136d8c40f.png)



  ![image](https://user-images.githubusercontent.com/125631878/229370126-113382c6-3656-4804-9140-057b70c01504.png)
  

   
**********

  ## Explanation
- To change the background color of a website using CSS, you can use the background-color property. Here's an example:
   ```
    body {
    background-color: #f1f1f1;
   }
   ```
   - In this example, the body selector targets the entire webpage and sets the background-color property to #f1f1f1, which is a light gray color. You can replace this color value with any other color you want.


- If you only want to change the background color of a specific element, you can use the same property on that element. For example:
  ```
     .header {
     background-color: #333;
   }
  ``` 
  
   - In this example, the .header selector targets a specific element with the class name header, and sets the background-color property to #333, which is a dark gray color.

All modern web browsers come with a set of default CSS styles. These styles are known as User Agent Stylesheets, and they provide a consistent visual appearance for HTML elements across different web pages.

**********


# Default CSS in browser   
| CSS Property | Default Value | Description |
| --- | --- | --- |
| `font-family` | `sans-serif` | The default font family used for most HTML elements. This is typically a generic sans-serif font like Arial or Helvetica. |
| `font-size` | `16px` | The default font size used for most HTML elements. |
| `margin` | Varies by element | Most HTML elements have default margin values, which can vary between browsers. |
| `padding` | Varies by element | Most HTML elements have default padding values, which can vary between browsers. |
| `color` | `#000` | The default text color for most HTML elements. |
| `background-color` | `transparent` | The default background color for most HTML elements. |
| `text-decoration` | `underline` | Links are typically underlined by default. |
| `text-align` | `left` | The default text alignment for most HTML elements. |
| `border` | Varies by element | Most HTML elements have default border styles, widths, and colors, which can vary between browsers. |
| `outline` | None | The default outline style for most HTML elements. |
| `list-style` | `disc` | The default bullet style used for unordered lists. |
| `display` | Varies by element | Most HTML elements have default display values, which can vary between browsers. |
| `float` | `none` | The default float value for most HTML elements. |
| `clear` | `none` | The default clear value for most HTML elements. |





**********
## Writing CSS code in HTML page only   
- Remember to save your CSS file and link it to your HTML document using the link tag in the head section of your HTML document for the changes to take effect.
  
  
