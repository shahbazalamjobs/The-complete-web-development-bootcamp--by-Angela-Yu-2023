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


## Changing background color
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
   
CSS is added to HTML pages to format the document according to information in the style sheet. There are three ways to insert CSS in HTML documents.
1. Internal CSS:
- You can add CSS to an HTML page using the <style> element in the <head> section of your HTML document.
   
![image](https://user-images.githubusercontent.com/125631878/230059319-8b12a553-ee73-4f9d-88b6-63a6a65983e0.png)

- In this example, the `<style>` element is used to define a CSS rule that sets the color of the `<h1>` element to blue.   
---

2. External CSS:
 - Another way to add CSS to an HTML document is by creating an external CSS file and linking it to the HTML document using the `<link>` element in the `<head>` section of your HTML document.

HTML code:
![image](https://user-images.githubusercontent.com/125631878/230060845-14156de5-e77c-4c76-af7e-f0ea2edbd648.png)
   
CSS code:
![image](https://user-images.githubusercontent.com/125631878/230060661-c0b02f0f-19bf-4e21-9afb-cf7edb9bccca.png)

   
3. Inline CSS:
 - Finally, you can add CSS directly to an HTML element using the style attribute.

![image](https://user-images.githubusercontent.com/125631878/230061561-5926dd00-7e71-4999-8392-5ede1e3378b7.png)
   
**********



## Writing CSS code in HTML page only 
   
- Write `<sheet>` tag between `<head>` tag of html code snippet
![image](https://user-images.githubusercontent.com/125631878/229580893-b83815e7-3efb-4bdc-b372-5b69d44cf667.png)

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
   
   Output: <br>
   ![image](https://user-images.githubusercontent.com/125631878/229371693-30219604-08bf-4cbc-895b-f8305c594bd4.png)
   

  [Note]: Instead of changing attributes of all `<hr>` in HTML we can simply do once by changing hr attribute in `<style>` tag inside `<head>` tag

   
 
   # Default CSS in browser 
     Most modern web browsers come with default CSS styles that are applied to HTML elements unless overridden by custom styles. The default styles may vary slightly between different browsers, 
   
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
   
   
   
- Default CSS of `<hr>`
   
  ![image](https://user-images.githubusercontent.com/125631878/229372206-e510a512-ce44-435c-a4eb-e46e614a2516.png)
   

   | Value | Description |
   | --- | --- |
   | `none` | No border is displayed. |
   | `hidden` | Same as `none`, except that it still takes up space. |
   | `dotted` | The border is a series of dots. |
   | `dashed` | The border is a series of short dashes. |
   | `solid` | The border is a solid line. |
   | `double` | The border is a double line. |
   | `groove` | The border looks like it is carved into the page. |
   | `ridge` | The border looks like a ridge. |
   | `inset` | The border looks like it is pressed into the page. |
   | `outset` | The border looks like it is coming out of the page. |

   
   |The border-style property may be specified using one, two, three, or four values.|
   |---|
   |When one value is specified, it applies the same style to all four sides.|
   |When two values are specified, the first style applies to the top and bottom, the second to the left and right.|
   |When three values are specified, the first style applies to the top, the second to the left and right, the third to the bottom.|
   |When four values are specified, the styles apply to the top, right, bottom, and left in that order (clockwise).|
    
   
- Inset border-style
  
   Displays a border that makes the element appear embedded.When applied to a table cell with border-collapse set to collapsed.Displays a border with a carved appearance.
  ![image](https://user-images.githubusercontent.com/125631878/229372397-8d2b7ace-739c-4ea6-a5a3-30b1c1291a0f.png)

  
   Code: <br> 
  ![image](https://user-images.githubusercontent.com/125631878/230065568-af134f66-dcea-4a4e-adb1-fb0b54ab6573.png) 
 
 
We want single line broder with white color. We can do this by changing border style to none. So, we can overwrite the default browser value by specifying a new value for it using CSS
   
   ```  
    hr {
         background-color: white;
         border-style: none;                      
    }
   ```
   ![image](https://user-images.githubusercontent.com/125631878/229373522-df38a887-e97d-4f29-a721-77ea539ea1bb.png)
   
   - Now whole border is gone completely gone. (The border is also a rectangle type but here its height has become 0 pixel).
   - To make them appear use pesticide extension.
   - We can see using pesticide that the pixel of hr has become 0 because of none border style.
   - So use the height property of css to change height of hr element. (Change height to 2 px)
   
   ![image](https://user-images.githubusercontent.com/125631878/229374160-dd39a567-c2a2-4203-9638-e1551219a0fa.png)


- Now height = 2px 
   ```  
    hr {
         background-color: white;
         border-style: none;
         height: 2px;
    }
   ```
   
![image](https://user-images.githubusercontent.com/125631878/229375157-7f3d212c-dd48-4683-a279-8b43a7cf1ddb.png)

**********

- We can also change height of image

    ``` 
    img {
       height: 20px;
    }
    ```

![image](https://user-images.githubusercontent.com/125631878/229375452-af322cef-3422-43da-89d4-856ddcb99cc6.png)

**********

We can also change the width of the hr
    ```
    hr {
         background-color: white;
         border-style: none;
         height: 2px;
         width: 100px;
    }
    ```

![image](https://user-images.githubusercontent.com/125631878/229375751-327357da-9931-4f12-bdb4-12c55aee43f3.png)

We can also use % to change width like
   ```
   hr {
         background-color: white;
         border-style: none;
         height: 2px;
         width: 30%;
   }   
   ```
   
**********

## Task is to make hr small width with dotted lines
1. Input:   
   ```
   hr {
         background-color: white;
         border-style: dotted;
         height: 2px;
         width: 30%;
   }
   ```
   Output:![image](https://user-images.githubusercontent.com/125631878/229448876-99b1c0fe-fcad-4e70-b075-d80ba487f6fb.png)
   
2. It is giving us dotted line in all 4 border with some height
   So lets make height = 0, by just removing height code or = 0px
   ![image](https://user-images.githubusercontent.com/125631878/229449823-c2bc74a2-9bb9-476d-9c7a-1ecfd0129d19.png)
   here we have box with 0px height and only has border around it
   
[Note]: 
   |The border-style property may be specified using one, two, three, or four values.|
   |---|
   |When one value is specified, it applies the same style to all four sides.|
   |When two values are specified, the first style applies to the top and bottom, the second to the left and right.|
   |When three values are specified, the first style applies to the top, the second to the left and right, the third to the bottom.|
   |When four values are specified, the styles apply to the top, right, bottom, and left in that order (clockwise).|
   
3. Now this
   ```
   border-style: dotted none none;
   ```
   ![image](https://user-images.githubusercontent.com/125631878/229452008-9bd6dd04-8430-4755-817a-c8c11166fb5b.png)
   
4. Or 
   ```
   border-style: none;
   border-top-style: dotted;
   ```

5. Or
   ```                
    hr {
         border-style: none;
         border-top-style: dotted;
         border-color: grey;
         border-width: 5px;
         width: 10%;
    }
   ```
![image](https://user-images.githubusercontent.com/125631878/229593823-3034d0cf-56b2-43eb-b3c5-1de931a94a51.png)

**********   

### Border Types
   
   ```
      <html>  
      <head>  
      <style>  
          p.none {border-style: none;}  
          p.dotted {border-style: dotted;}  
          p.dashed {border-style: dashed;}  
          p.solid {border-style: solid;}  
          p.double {border-style: double;}  
          p.groove {border-style: groove;}  
          p.ridge {border-style: ridge;}  
          p.inset {border-style: inset;}  
          p.outset {border-style: outset;}  
          p.hidden {border-style: hidden;}  
          </style>  
         
          </head>  
          <body>  
             
          <p class="none">No border.</p>  
          <p class="dotted">A dotted border.</p>  
          <p class="dashed">A dashed border.</p>  
          <p class="solid">A solid border.</p>  
          <p class="double">A double border.</p>  
          <p class="groove">A groove border.</p>  
          <p class="ridge">A ridge border.</p>  
          <p class="inset">An inset border.</p>  
          <p class="outset">An outset border.</p>  
          <p class="hidden">A hidden border.</p> 
             
      </body>  
      </html> 
``` 

Output:
![image](https://user-images.githubusercontent.com/125631878/229573457-ae8e3762-d61b-4940-872a-a2241de0dfcb.png)     
  
   
**********
## Writing CSS code in HTML page only   
- Remember to save your CSS file and link it to your HTML document using the link tag in the head section of your HTML document for the changes to take effect.
  
**********   

1. We first create CSS folder and make styles.css page inside it
![image](https://user-images.githubusercontent.com/125631878/229595546-1db1436f-4520-4261-8ec2-ec93fccc832b.png)

2. Now we cut paste the style code from HTML `<style>` to `style.css`

3. Then link the css file in html `<head>`
   ```
   <link rel="stylesheet" href="CSS/styles.css">
   ```
   
   Now use this code in style.css
   
   ```
      body {
       background-color: #DAF5FF;
      }

      hr {
          border-style: none;
          border-top-style: dotted;
          border-color: grey;
          border-width: 5px;
          width: 10%;
      }
   ```
   Using above css code we get same light blue backgound and dotted horizontal row in main index page. <br>
   We can also change the colour of hobbbies and contact background by placing the CSS link code in their respective `<head>`
   
**********   
Now lets change the color of h1, h3 size text and thead
   ```
   h1 {
       color: #62CDFF;
   }
   h3 {
       color: #62CDFF;
   }

   thead {
       color: #62CDFF;
   }
   ```
   
   Output:
   ![image](https://user-images.githubusercontent.com/125631878/229733319-a2dd01f6-7178-4e53-88e4-d8196349f112.png)
   
   As CSS is linked to hobbies and contact form, so their body color and text color will change simultaneously <br>
   This will give us
   
**********   
 
## Debugging CSS code using chrome developers tools

### 1. Copy the error code given, inside index.html then find the error using chrome developer tools <br>
We can see that website css is gone 
![image](https://user-images.githubusercontent.com/125631878/229992191-feb8fa9c-5ae5-4a8c-bd35-9253b1270411.png)

Open chrome developer tools / inspect tools (shortcut: ctrl + shift + I)
![image](https://user-images.githubusercontent.com/125631878/229992758-f6d9028f-5922-409f-be44-796b0d599faf.png)

Here we can see 2 errors
   1. File not found: /C:/css/styles.css
   2. File not found: image.png

Debugging
   1. Location of css is in same directory as where is index.html: change location to: css/styles.css 
   2. Image file name image.png not present: put image with same name in same directory    
   
**********   
### 2. Now copy the second code 
We can see that in second code background color is gone. So lets see the error 
![image](https://user-images.githubusercontent.com/125631878/229994837-40b782fe-0272-4038-9ecf-5a2ee5523977.png)
   
![image](https://user-images.githubusercontent.com/125631878/229995997-368c06ec-c200-4c9d-889b-6a55c89b2cc2.png)
- And we're seeing that the color that we desire, which we set inside our stylesheet, is being crossed out and overridden by this white color. <br>
- And if you look carefully inside our new buggy index.html, then here an inline CSS rule inside the body tag to turn the body's background color to white. <br>
- We can make our desired background by removing the HTML body styling <br>

- Lets add internal css in style and set background color as red, so we are having 3 colors 1. white inside inline css, 2. light blue inside external css body  3. red color inside internal css <br>

- Still white color overrides red and light blue color.
   
**********   

# CSS syntax

| Term | Definition |
| --- | --- |
| Selector | The selector is the HTML element that you want to apply styles to. Tag like `<h1>`, `<title>` etc. |
| Property | The property is the characteristic or attribute of the HTML element that you want to style, such as color or font-size. |
| Value | The value is the specific value that you want to set for the property, such as red for color or 16px for font-size. |
| Declaration | The combination of the property and value is called a declaration. Declarations are separated by semicolons. |
| Rule Set | A rule set consists of one or more declarations enclosed in curly braces {} and preceded by a selector. |

Here's an example of CSS syntax:
   ```
         selector {
         property: value;
      }
   ```

For instance, to set the font color of all paragraphs in a document to red, the following CSS rule can be used:
   ```
      p {
        color: red;
      }
   ```
This rule targets all `<p>` elements and sets their color property to red.

![image](https://user-images.githubusercontent.com/125631878/230029566-2e73d689-04ae-4718-b668-82d49f0b3498.png)  

**********   

# CSS Selector
   
A CSS selector is a pattern that is used to select HTML elements on a web page that you want to style. Selectors are the foundation of CSS, as they provide a way to target specific elements in your HTML markup and apply styling to them.

There are different types of selectors in CSS, including:

1. Element selectors:
   - Selects HTML elements based on their tag name. For example, you can use "p" to select all paragraphs on a page.
   ```
      p {
     font-size: 16px;
   }
   ```
   - This will select all `<p>` elements on the page and apply a font size of 16 pixels to them.
   - Also it will select all other `<p>` with different id's like `<p id="para1">`, `<p id="para2">` and apply font size of 16 to them
   
2. Class selector: 
   - Selects HTML elements based on their class attribute. Class selectors are prefixed with a dot (".") and are followed by the name of the class. For example, you can use ".my-class" to select all elements with the class name "my-class".
   ```
      .my-class {
     color: blue;
     text-align: center;  
   }
   ```
   - This will select all elements with the class name "my-class" and apply a blue color and align text to center. 
   In the HTML, the class is defined like this: `<div class="my-class">`
   - The above code will make all the tags with class name "my-class" (e.g. `<h1 class="my-class">` and `<p class="my-class">`) applies blue color and center align the content in the tags.
   - If `<h1 = "my-class">` and `<p="my-class">` have same class  but want to select specific class like only paragraph then use this 
   ```
      p.my-class {
      color: blue;
      text-align: center;
      }
   ```
   
3. ID selectors:
   - Selects HTML elements based on their ID attribute. ID selectors are prefixed with a hash symbol ("#") and are followed by the name of the ID. For example, you can use "#my-id" to select the element with the ID "my-id".
   ```
      #my-id {
     background-color: yellow;
   }
   ```
   - This will select the element with the ID "my-id" and apply a yellow background color to it. In the HTML, the ID is defined like this: `<div id="my-id">`.
   
4. Attribute selectors: 
   - Selects HTML elements based on their attributes. Attribute selectors are enclosed in square brackets and contain the name of the attribute and an optional value. For example, you can use "[href]" to select all elements with the "href" attribute, or "[href='https://example.com']" to select elements with the "href" attribute set to "https://example.com".
   ```
      a[href="https://example.com"] {
     color: red;
   }
   ```
 
5. Pseudo-class selectors: 
   - Selects HTML elements based on their state or position in the document. Pseudo-class selectors are prefixed with a colon (":") and are followed by the name of the state or position. For example, you can use ":hover" to select an element when the user hovers over it with the mouse. 
     ```
        a:hover {
        text-decoration: underline;
      }
     ```
   - This will select all `<a>` elements when the user hovers over them with the mouse and apply an underline text decoration to them.
   
6. Combinators:
   - Combinators are used to select elements based on their relationship to other elements. There are several types of combinators, including descendant selectors, child selectors, and adjacent sibling selectors.
   
   ```
      ul > li {
     list-style: none;
   }
   ```
   - This will select all `<li>` elements that are direct children of a `<ul>` element and remove the list-style from them.

7. Universal Selector:
   - The Universal Selector matches any element type. It is denoted by an asterisk (*) symbol. When used alone, it selects all elements on the page.
   ```
      * {
     font-size: 16px;
   }
   ```
   - This will apply the font size of 16 pixels to all elements on the page like `<h1>` `<p>` `<p=class1>` `<h2>` and all others elecments  
   
8. Group Selector:
   - The grouping selector is used to select all the elements with the same style definitions.
   - Grouping selector is used to minimize the code. Commas are used to separate each selector in grouping.
   ```
      h1, h2, h3, p {
     font-family: Arial, sans-serif;
   }

   ```
   - This will apply the font family of Arial or any sans-serif font to all headings and paragraphs on the page.
   - 



   
   

**********   

   
   
   


**********   
   
