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

![image](https://user-images.githubusercontent.com/125631878/230029566-2e73d689-04ae-4718-b668-82d49f0b3498.png)  
   
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
   - Apply styles to multiple elements with the same class name.
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
   -  You cannot have two ID selectors with the same name on the same web page. Each ID selector must have a unique name because the ID selector is used to select and apply styles to a specific HTML element on a web page.
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

## Specificity of selectors
- In CSS, selectors are used to target specific HTML elements on a web page and apply styles to them.
- The specificity of a selector refers to how specific it is in targeting elements on a web page. <br> <br>
  `Element selectors < Class selectors < ID selectors < Inline styles`
   
- If multiple CSS selectors target the same HTML element, their specificities are compared.
- The selector with the highest specificity will apply its styles to the element.
- Its important to be careful when writing CSS to avoid conflicts caused by selectors with equal specificity.
- If there is a conflict, the most recently defined selector will take precedence.  <br>
 

**********   
# Shahi Paneer Fansite
- A new site is made where two emoji of Paneer and Brocoli are used and their background color are changed
- Also we are changing heading color using CSS by two ways 
  1. Using tag selector h1{}  (here selecting red color)
  2. Using ID selector #heading{}   (here selecting blue color)
- But in output heading color is of blue and not red 
- The h1 color being red but it's crossed out because the id heading is more specific <br>
- `When both an ID selector and a tag selector are used in CSS, the ID selector will take precedence over the tag selector. This is because ID selectors have a higher specificity value than tag selectors.`
   

## The CSS stlying code:
   
![image](https://user-images.githubusercontent.com/125631878/230074193-ec1edba4-556f-4623-a9fb-9601af471909.png)
   
![image](https://user-images.githubusercontent.com/125631878/230070390-150e1ab3-e486-4b65-9a2d-d448444f73be.png)
### Shahi Paneer website:   
![image](https://user-images.githubusercontent.com/125631878/230074511-170d4715-0b00-42bd-99af-ec37265b6d55.png)

   
**********   
# Intermediate CSS

## Favicon
- A favicon is a small icon that represents a website or web application and is typically displayed in the browser's address bar or next to the page title in a tab.
- To add a favicon to a website, you need to create a small image file and save it as a .ico, .png, or .gif file. 
- Then, you can add the favicon code to the HTML header of your website using the following code:
  ```
  <link rel="icon" href="favicon.ico" type="image/x-icon">
  ```
- The <link> tag in HTML is used to link external resources such as CSS stylesheets, favicon images, web fonts, and more. It is placed in the head section of an HTML document
- The rel attribute is used to define the type of link being used and how the linked resource should be used by the current document.
- Common values of rel attribute are: "stylesheet" is used for linking style sheet to HTML document and "icon" value is used to link a favicon icon to a website.
   
**********   
   
 ## Div
   
 - In HTML, the `<div>` tag is a container element that is used to group together other elements and apply styles or functionality to them as a group. The "div" stands for "division" and it is often used to divide a web page into logical sections or to organize content into columns or rows.
 - Example:
  ![image](https://user-images.githubusercontent.com/125631878/230733209-a7c1e709-2007-4825-8e93-b6a1f5601604.png)

 - In this example, the `<div>` element contains a heading (`<h1>`) and a paragraph (`<p>`) element. The content inside the `<div>` tag will be grouped together and can be targeted with CSS selectors to apply styling or other functionality.

 - You can also use the id and class attributes on the `<div>` tag to further customize and target specific elements on the page. For example:
   ![image](https://user-images.githubusercontent.com/125631878/230733282-a3e7540f-3306-4cb9-98d5-54f2ea7bb45b.png)

 - In this example, the first `<div>` tag has an id attribute of "header", which can be targeted with CSS to apply specific styles to the header of the page. The second `<div>` tag has a class attribute of "section", which can be used to style all sections of the page in a similar way.
 
 - Normal div with height and andth of 200px and skyblue background color:
 ![image](https://user-images.githubusercontent.com/125631878/230939022-14630934-b47c-4720-a430-3687e7510467.png)

   
**********

| Point | Explanation |
| ----- | ----- |
| Container element | The `<div>` tag is a container element that groups together other elements on a web page. |
| Logical sections | It is used to divide a web page into logical sections or to organize content into columns or rows. |
| "div" stands for... | The "div" in `<div>` stands for "division". |
| Content | You can add other HTML elements, such as headings, paragraphs, images, and lists, inside a `<div>` tag to group them together. |
| CSS selectors | The content inside a `<div>` tag can be targeted with CSS selectors to apply styling or other functionality. |
| `id` and `class` attributes | You can use the `id` and `class` attributes on a `<div>` tag to further customize and target specific elements on the page. |
| `id` attribute | The `id` attribute can be used to target a specific element on the page with CSS or JavaScript. |
| `class` attribute | The `class` attribute can be used to apply styles or functionality to multiple elements on the page. |
| Commonly used | The `<div>` tag is a very commonly used element in HTML and is often used in conjunction with other layout and styling techniques to create a visually appealing and organized web page. |
   
**********   
     
 # Css - My Style
 
 - Here we are creating a more beautiful website using CSS
 - Inside body we used h1 and p tag and later on we used empty div tag 
 - Using Pesticide we saw h1 and p box but not of div .. that was because the height of div was 0 where as width was: 878.400
 
 ![image](https://user-images.githubusercontent.com/125631878/230734221-67861a26-6767-48dd-8759-b7b78b832e06.png)
 ![image](https://user-images.githubusercontent.com/125631878/230734270-17b2f7e3-8576-4e32-8e2f-58ad2cc570eb.png)  
 ![image](https://user-images.githubusercontent.com/125631878/230734114-5bc19719-9dba-4f2b-a90a-60a6ea4c851d.png)
   
 - So now in chrome developer, selecting div .. inside element.style <br>
   we write background color: blue;  but background doesn't change this is because of 0 height 
![image](https://user-images.githubusercontent.com/125631878/230735729-abddad89-8a03-4d9c-bf70-1a265403744d.png)

 - So we will add height: 100px; <br>
   Now we can see the blue color div
![image](https://user-images.githubusercontent.com/125631878/230735690-ba5c5137-9104-4207-bc42-f880a58cbe8a.png)
- We can also change margin of div in box by clicking the top, left, right, bottom and giving their values, and it will automatically get added in element.style locally for temporary period, but will not change the real codebase
![image](https://user-images.githubusercontent.com/125631878/230736473-73a23c4a-00a2-46e2-9cd9-0e982ec6ad0e.png)

# Box Model of CSS
- In CSS, the Box Model is a conceptual model that describes how elements are rendered on a web page. Each HTML element on a page is considered a rectangular box, with properties such as width, height, padding, border, and margin, that determine how the box is sized and positioned.

 ![image](https://user-images.githubusercontent.com/125631878/230940443-be8b1d38-bd54-4e5c-99d5-93c26d16d4b8.png)
   
The box model consists of four layers:

- Content: This is the actual content of the HTML element, such as text, images, or videos. The content is surrounded by padding.
- Padding: This is the space between the content and the element's border. It is defined using the padding property in CSS.
- Border: This is a line that surrounds the element's padding. It is defined using the border property in CSS.
- Margin: This is the space between the element's border and the neighboring elements. It is defined using the margin property in CSS.
   
Each layer of the box model is added to the previous layer to calculate the total size of the box. For example, the total width of an element would be the sum of its content width, padding width, and border width. <br>
Understanding the box model is important for designing web pages, as it helps ensure that elements are properly sized and positioned on the page.

- 3 divs with different color default body margins
![image](https://user-images.githubusercontent.com/125631878/230943160-1b409bae-1390-4a95-a92c-508099cac80e.png)
   
- Same divs but now body and h3 with 0 margin
![image](https://user-images.githubusercontent.com/125631878/230944096-7c645ce7-e902-4cd6-b473-0288aa8a4a40.png)

## Challenge
3 boxes with 200x200px, box 1: 10px border & 20px padding, box 2: 20px border, box 3: 10px border <br>
We used `position: absolute; top: 260px; left: 260px;`
![image](https://user-images.githubusercontent.com/125631878/230947580-a3b4292b-e806-4f12-9710-a3809b292e70.png)

Angela yu's way <br>
Used `margin-left:260px;`
![image](https://user-images.githubusercontent.com/125631878/230953029-438dd733-3850-446c-b6ed-3be7bf8565b6.png)


# Display property in CSS

- The display property in CSS is used to specify the type of rendering box used for an HTML element. It determines how an element should be displayed on the web page.
- Syntax: `display:value;`
- There are several possible values for the display property:

1) block: The element is displayed as a block-level element, which takes up the full width of its container and starts on a new line.
- Common block elements are : `<p> , <h1> through <h6> , <div> , <ol> , <ul> , <li> , <hr> ,  <table> , <form> `
   
![image](https://user-images.githubusercontent.com/125631878/231154706-a45325a9-aaf2-43b3-ae7b-cb411ef45e0f.png)

2) inline: The element is displayed inline, which means it flows with the text and does not start on a new line.
- Common inlin elements are: ` <span> , <a> , <em> , <b> , <img> `
![image](https://user-images.githubusercontent.com/125631878/231154531-ecc13dcf-5e93-4cbe-8027-0deb1f3e9c0e.png)

3) inline-block: The element is displayed inline, but it also has a width and height, allowing it to have padding and margins. or It, is very similar to inline element but the difference is that you are able to set the width and height.
![image](https://user-images.githubusercontent.com/125631878/231154969-5f6d6a92-f73e-472b-8d03-6ed101a621dc.png)
   
4) none: The element is not displayed at all, effectively hiding it from view. Or The "none" value totally removes the element from the page. It will not take any space.
![image](https://user-images.githubusercontent.com/125631878/231155432-3596c85b-90a8-4fe4-85ea-1eb92369b5b0.png)

5) flex: The element is displayed as a flex container, allowing its children to be flex items.
![image](https://user-images.githubusercontent.com/125631878/231159563-dd02c497-2e0c-4862-9167-91e71f361567.png)
   
6) grid: The element is displayed as a grid container, allowing its children to be grid items.
![image](https://user-images.githubusercontent.com/125631878/231156844-5a82a6df-88ec-4357-a425-43845d024336.png)
   
7) table: The element is displayed as a table, with table-related properties like table-row and table-cell.
![image](https://user-images.githubusercontent.com/125631878/231160793-0fe2abbc-4852-4f63-8b9e-c59c1aee107b.png)


8) inline-table: The element is displayed as an inline-level table.
![image](https://user-images.githubusercontent.com/125631878/231158669-7b775073-9922-470b-95e0-567f6467c7fe.png)

   
9) list-item: The element is displayed as a list item, like the li element in an unordered or ordered list.
![image](https://user-images.githubusercontent.com/125631878/231161613-8693cf71-e3ad-4b00-859e-4e333c07db28.png)

   
**[Note]**: `Span:` In HTML, the `<span>` element is an inline-level element that is used as a container for small pieces of content within a larger block-level element.

The `<span>` element doesn't have any semantic meaning, and is typically used for styling purposes, such as changing the color, font size, or font family of a small piece of text.
![image](https://user-images.githubusercontent.com/125631878/231229840-3ea5588f-5e59-4fc0-85ec-50397dfff2b7.png)

   
**********  
   
- Using Pesticide we can look at display property whether their width is till end or up to a certain length
![image](https://user-images.githubusercontent.com/125631878/231231840-55803541-9c21-4041-ad2b-8fe278588a91.png)

   
**********  
- block (`<p>`) Vs inline (`<span>`)
![image](https://user-images.githubusercontent.com/125631878/231236941-e11db8cb-00a0-428a-926a-b7dc238a1a21.png)
   
**********
- We can change width of block (`<p>`) but not of inline (`<span>`)
![image](https://user-images.githubusercontent.com/125631878/231237257-5e7b6be1-63b1-476f-bbb9-9884f94b84e3.png)

- Changing display property of `block to inline` and `inline to block`
![image](https://user-images.githubusercontent.com/125631878/231241325-2fc9bce9-e8c5-4dcd-9946-8e360006ec0f.png)

- Span inline-block
![image](https://user-images.githubusercontent.com/125631878/231243162-47b23163-812f-409d-82cc-a96c4fdf8392.png)

- none display
![image](https://user-images.githubusercontent.com/125631878/231244546-77bac2a6-08f7-4f86-b835-01c3704d4b21.png)

- Hidden visibility
![image](https://user-images.githubusercontent.com/125631878/231245766-ec566a75-29f1-45dc-8c31-e2dd4b891eb6.png)

**********

# Position Properties in CSS

![image](https://user-images.githubusercontent.com/125631878/231745806-c8f3b20a-7949-4ff6-845b-568d67deb228.png)
- CSS positioning refers to the technique used to position HTML elements on a webpage. There are different types of CSS positions, each with its own set of rules and properties. The most common types of positions are:
   
1) CSS Static Positioning: This is a by default position for HTML elements. It always positions an element according to the normal flow of the page. It is not affected by the top, bottom, left and right properties.


2) CSS Fixed Positioning: The fixed positioning property helps to put the text fixed on the browser. This fixed test is positioned relative to the browser window, and doesn't move even you scroll the window.
   
![image](https://user-images.githubusercontent.com/125631878/231464973-b96eea88-7d94-4d90-ba19-36c24961ad43.png)

3) CSS Relative Positioning: The relative positioning property is used to set the element relative to its normal position.
   
![image](https://user-images.githubusercontent.com/125631878/231465493-a8ecd908-f011-4db6-8cfc-09f741a4e8a9.png)

4) CSS Absolute Positioning: The absolute positioning is used to position an element relative to the first parent element that has a position other than static. If no such element is found, the containing block is HTML. With the absolute positioning, you can place an element anywhere on a page.   

![image](https://user-images.githubusercontent.com/125631878/231466188-cabba2e3-4a2c-4662-8ebe-231195e15769.png)
   
## All CSS Position Properties   
| No. | Property | Description | Values |
| --- | --- | ------ | --- |
| 1 | bottom | It is used to set the bottom margin edge for a positioned box. | `auto`, `length`, `%`, `inherit` |
| 2 | clip | It is used to clip an absolutely positioned element. | `shape`, `auto`, `inherit` |
| 3 | cursor | It is used to specify the type of cursors to be displayed. | `url`, `auto`, `crosshair`, `default`, `pointer`, `move`, `e-resize`, `ne-resize`, `nw-resize`, `n-resize`, `se-resize`, `sw-resize`, `s-resize`, `w-resize`, `text`, `wait`, `help` |
| 4 | left | It sets a left margin edge for a positioned box. | `auto`, `length`, `%`, `inherit` |
| 5 | overflow | This property is used to define what happens if content overflows an element's box. | `auto`, `hidden`, `scroll`, `visible`, `inherit` |
| 6 | position | It is used to specify the type of positioning for an element. | `absolute`, `fixed`, `relative`, `static`, `inherit` |
| 7 | right | It is used to set a right margin edge for a positioned box. | `auto`, `length`, `%`, `inherit` |
| 8 | top | It is used to set a top margin edge for a positioned box. | `auto`, `length`, `%`, `inherit` |
| 9 | z-index | It is used to set the stack order of an element. | `number`, `auto`, `inherit` |


**********
   
- Challenge: Using div make 3 square boxes of 100px side of colors blue, yellow, red. Then align these boxes in same line and arrange them in this sequence: red, blue, yellow using `relative positioning`
   
Our Solution:
![image](https://user-images.githubusercontent.com/125631878/231399169-87e00878-d14a-493b-a66a-a8add332b9ed.png)
![image](https://user-images.githubusercontent.com/125631878/231397801-0472b91c-4e06-4f9a-bbec-489b4bcb2f1c.png)
- Here the position of boxes change with respect to their own original position
Angela Yu Solution:
![image](https://user-images.githubusercontent.com/125631878/231490342-2dd3bc78-789d-4208-9118-99d33c9987a5.png)

**********
   
- Challenge: Using div make 3 square boxes of 100px side of colors blue, yellow, red. Then align these boxes in same line and arrange them in this sequence: red, blue, yellow using `absolute positioning`

![image](https://user-images.githubusercontent.com/125631878/231750266-9700c0dc-265e-4051-b108-8d0380e5daf3.png)   
- Here the position of box changes relative to body of html 
- There was inbuilt css bcoz of which there was inbuilt margin which we decreased to 0 (margin: 0) [note: if pixel is 0px we directly write 0 and no px]

**********
   
Now lets put red box inside a container then the position of absolute red box will change relative to the container box
![image](https://user-images.githubusercontent.com/125631878/231753443-acf32f4b-2a22-4671-95b6-472c4e5aa11b.png)

**********
Blue and yellow are still relative to body and not container, the text are coming directly under the container if no top used [in container range (0-300px)]
![image](https://user-images.githubusercontent.com/125631878/231754457-2fbdad5f-5b6f-4985-9ec4-913e031e8c8c.png)

**********
# Font Styling
   
This CSS property is used to provide a comma-separated list of font families. It sets the font-face for the text content of an element. This property can hold multiple font names as a fallback system, i.e., if one font is unsupported in the browser, then others can be used. The different font-family is used for making attractive web pages.

### There are two types of font-family names in CSS, which are defined below

- family-name: It is the name of the font-family such as "Courier", "Arial", "Times", etc.
- generic-family: It is the name of the generic family that includes five categories, which are "serif", "sans-serif", "cursive", "fantasy", and "monospace". It should be placed at last in the list of the font family names.  
 
`Default Serif is Times and Sans-serif is Arial`
   
## Syntax: 
```
selector {
  font-family: value;
}
```
- Here, selector refers to the element(s) you want to style, and value is a comma-separated list of font family names and/or generic family names.
   
```
p {
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
}
```
- If "Open Sans" is not available, the browser will try "Helvetica Neue", and if that's not available either, it will fall back to a generic sans-serif font.

[Note]: If our used font is not installed in one of the browsers, then default font will be used which change the look and feel of website
- So, here come `web safe font`, there is a set of font families where most operating system will be able to render it correctly
- Web safe fonts are fonts that are pre-installed on most computers and devices, and are therefore reliably available to use on websites.
- Fonts include common sans-serif and serif fonts like Arial, Helvetica, Times New Roman, and Georgia.
- Ensure that the text on your website is displayed consistently across different devices and operating systems.
- Use this for best safe fonts : https://www.cssfontstack.com/
   
   
| Property | Description |
| --- | --- |
| `font-family` | Sets the typeface of the text |
| `font-size` | Sets the size of the text |
| `font-weight` | Sets the weight of the text (bold or normal) |
| `font-style` | Sets the style of the text (italic or normal) |
| `text-transform` | Changes the case of the text |
| `text-decoration` | Adds underlines, line-throughs, or overlines to the text |
| `font` | Shorthand for setting multiple font-related properties |
| Web fonts | Custom fonts that can be loaded using services like Google Fonts or Font Squirrel |
| `@font-face` | Rule for defining custom fonts and including them in your CSS |
| Accessibility | Considerations for ensuring legibility and contrast of text for users with disabilities |
   
## Font Family
![image](https://user-images.githubusercontent.com/125631878/232249846-ee8c1d1e-1614-436a-a5d8-637f33b7b84e.png)

## Font Family Property
![image](https://user-images.githubusercontent.com/125631878/232250047-e39fc82b-0fc0-4309-a3d9-2e400c4c2e5a.png)

## How to use font family 

- **Normal Font:** Adding a font normally means installing the font on your computer or device and then using it in your software or application. This method works well if the font is a standard font that is available on most devices and operating systems, and if you only need to use the font for local display purposes. 
- **Embedding Font:** Using font embedding, involves embedding the font file itself into your software or website, allowing you to use the font without relying on it being installed on the user's device. This is particularly useful if you are using a custom font that is not widely available, or if you want to ensure consistent display across different devices. But can increase loading times and file sizes.
- Embedding can be done using various methods such as Google Fonts or Adobe Fonts

## Use Google embedding Font:
![image](https://user-images.githubusercontent.com/125631878/232288275-c79d2065-da3a-4b0c-a1ef-327fd4f7f806.png)
1. Select all the fonts of desired size you want
2. Copy the api link and paste it inside link of head
3. Then copy the css rules to specify families and paste it in css h1, h2, p with the desired font families  
   
**********

## rem vs em units in CSS
more details: https://www.digitalocean.com/community/tutorials/css-rem-vs-em-units
   
- em units for the font-size property will be relative to the font-size of the parent element. 
- em units on other properties than font-size will be relative to the font-size of the current element.
- rem units sizes will always be relative to the font-size of the root html element
   
Let’s take this simple example:
```
   .parent {
     font-size: 18px;
   }
   .child {
     font-size: 1.5em;
   }
```
- With that example, the child would have a font-size of 27px (1.5 * 18px = 27px).
- If the parent element doesn’t specify a value for font-size, a value will be looked for higher up in the DOM tree.
- If no font-size is specified all the way up to the root element `(<html>)`, then the browser default of 16px is used.
---
- em units are also used in padding, width, height, max-width.
- When em units are used on other properties than font-size, the value is relative to the element's own font-size

```
   .parent {
     font-size: 18px;
   }
   .child {
     font-size: 1.5em;
     padding: 2em 1em;
   }
```   
- The padding top and bottom on .child will be 54px. That’s 2 times the font-size of our current element’s font size (2 * 27px)
- The padding left and right on .child will be of 27px. That’s 1 time the font-size of our element. 
  
`[Note]:`
`- When em units are used on font-size, the size is relative to the font-size of the parent.` <br>
`- When used on other properties, it’s relative to the font-size of the element itself.`

**********
   
**Compounding Effect:**
The unit can compound from one level to the other.
- Let’s keep a similar basic example:   
```
   .parent {
     font-size: 15px;
   }
   .child {
     font-size: 2em;
   }
```
But let’s use it in our markup like this:
```
<div class="parent">
  I'm 15px
  <div class="child">
  I'm 30px, as expected
    <div class="child">
    I'm 60px, trouble starts!
      <div class="child">
      I'm 120px, now we're really in trouble!
      </div>
    </div>
  </div>
</div>
```
output: 
![image](https://user-images.githubusercontent.com/125631878/232495666-716f5b20-5e5e-42ed-a466-a8d6d94eba91.png)

**********

## rem unit   
- The rem unit, short for root em is a relative unit that’ll always be based upon the font-size value of the root element, which is the `<html>` element. And if the `<html>` element doesn’t have a specified font-size, the browser default of 16px is used.
- So that means that, by using the rem unit, the values of parent elements are ignored, and only the value of the root is taken into consideration.

With a similar example, but in rem:   
```
.html {
  font-size: 16px;
}
.parent {
  font-size: 15px;
}
.child-rem {
  font-size: 2rem;
}
```
```
<div class="parent">
  I'm 15px
  <div class="child-rem">
  I'm 32px, as expected
    <div class="child-rem">
    I'm 32px, yep!
      <div class="child-rem">
      I'm 32px, like clockwork!
      </div>
    </div>
  </div>
</div>
```
![image](https://user-images.githubusercontent.com/125631878/232518332-09922c4d-98d4-4eba-b739-e8651b5f12df.png)
   
` [Note]: Some people like to design everything in rem units for consistency and predictability, while others like to also use em units in places where the influence of nearby parent elements would make sense.`


**********

## CSS Layout - float, clear and clearfix

- The CSS float property specifies how an element should float.
- The CSS clear property specifies what elements can float beside the cleared element and on which side.

## The float Property
- The float property is used for positioning and formatting content e.g. let an image float left to the text in a container.
   
| Property Value | Description |
|---|---|
| `left`| The element floats to the left of its container |
| `right`| The element floats to the right of its container |
| `none`| The element does not float (will be displayed just where it occurs in the text). This is default |
| `inherit`| The element inherits the float value of its parent |

- In its simplest use, the float property can be used to wrap text around images.
![image](https://user-images.githubusercontent.com/125631878/233981810-cc68fb5e-fac1-4820-b4a4-23adc18c5056.png)
![image](https://user-images.githubusercontent.com/125631878/233981982-b57a64e2-f11c-49e0-90c8-aa83d5de9374.png)
![image](https://user-images.githubusercontent.com/125631878/233982713-2b35659f-9876-4cca-a214-e09eaef55418.png)
![image](https://user-images.githubusercontent.com/125631878/233982892-c06a2c94-daf7-4f6a-8872-99e4bd83068e.png)
![image](https://user-images.githubusercontent.com/125631878/233983003-65b5f6b3-1b0d-469c-9dd5-f961f66d6d36.png)
![image](https://user-images.githubusercontent.com/125631878/233983288-6fd063fe-7272-4fa8-9e3b-e6a518cf6554.png)
   
   
## Clear 
- When we use the float property, and we want the next element below (not on right or left), we will have to use the clear property.
- The clear property specifies what should happen with the element that is next to a floating element.

The clear property can have one of the following values:
| Property Value | Description |
|---|---|
| `none` |  The element is not pushed below left or right floated elements. This is default |
| `left` |  The element is pushed below left floated elements `left - The element is pushed below left floated elements |
| `right` | The element is pushed below right floated elements |
| `both` | The element is pushed below both left and right floated elements | 
| `inherit` |  The element inherits the clear value from its parent |   

- When clearing floats, you should match the clear to the float: If an element is floated to the left, then you should clear to the left. Your floated element will continue to float, but the cleared element will appear below it on the web page.
   
**********
   
![image](https://user-images.githubusercontent.com/125631878/233986305-8e1a63ca-51a0-49e1-95fb-248c3f29573b.png)
This example clears the float to the left. Here, it means that the <div2> element is pushed below the left floated <div1> element: 
   
**********

![image](https://user-images.githubusercontent.com/125631878/233987107-eb154705-04ae-447d-bf1d-5bf13765ecda.png)
   
![image](https://user-images.githubusercontent.com/125631878/233988162-50d88f3f-5f8c-4b46-92a7-826d6908c12f.png)

*****

## The z-index Property
- When elements are positioned, they can overlap other elements.
- The z-index property specifies the stack order of an element (which element should be placed in front of, or behind, the others).
- An element can have a positive or negative stack order:
- Note: z-index only works on positioned elements (position: absolute, position: relative, position: fixed, or position: sticky) and flex items (elements that are direct children of display: flex elements).
   
## Overflow
   
- The overflow property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area.

The overflow property has the following values:
   
| Property Value | Description |
|---|---|
| `visible` | Default. The overflow is not clipped. The content renders outside the element's box |
| `hidden` | The overflow is clipped, and the rest of the content will be invisible |
| `scroll` | The overflow is clipped, and a scrollbar is added to see the rest of the content |
| `auto` | Similar to scroll, but it adds scrollbars only when necessary |
   
![image](https://user-images.githubusercontent.com/125631878/233992099-9c347e05-f0cb-445f-8921-a0cad30f65ee.png)

![image](https://user-images.githubusercontent.com/125631878/233993055-c8f60a23-27be-4a37-aa09-f697b3e27195.png)

![image](https://user-images.githubusercontent.com/125631878/233993162-fb5f29e9-17d5-4c73-9c63-aa2c969395c2.png)

![image](https://user-images.githubusercontent.com/125631878/233993267-3b10a148-e575-4865-a490-7ff6d0166bd2.png)

![image](https://user-images.githubusercontent.com/125631878/233993342-1e62a986-1eb3-48ba-957c-2d068292e812.png)

![image](https://user-images.githubusercontent.com/125631878/233993431-1ad00a11-5790-43b1-87cf-1a28eb6dffeb.png)

![image](https://user-images.githubusercontent.com/125631878/233993674-c03827a6-6fc4-4940-92db-8ef6736a0166.png)



**********

# Background in CSS

## Basics
1. Set background color to light blue
```
body {
  background-color: lightblue;
}
```

2. Set background image

2.1: Simple (but it repeats in all direction)
```
body {
  background: url(Image.jpg);
}
```
![image](https://user-images.githubusercontent.com/125631878/233771417-11a74f88-a587-41b0-b812-93407f979d24.png)

2.2 Simple but no repeat
```
body {
  background: url(Image.jpg) no-repeat;
}
```
![image](https://user-images.githubusercontent.com/125631878/233771448-5d058420-da24-428f-813a-f8cac5dd025a.png)

2.3 Multiple background Images and grading

![image](https://user-images.githubusercontent.com/125631878/233791307-cd7b985c-ee09-44bf-8230-f70ccf4648ba.png)


3.1 Linear Gradients
```
body {
  background: linear-gradient(black, white);
}
```
![image](https://user-images.githubusercontent.com/125631878/233779197-f59836b5-b92b-4444-b5dc-689bb2b81d77.png)


3.2 Radial Gradients
```
body {
  background: radial-gradient(circle, black, white);
}
```
![image](https://user-images.githubusercontent.com/125631878/233780063-81aad872-bc36-486a-b1d6-5b9d9ea2490d.png)

**********
[Note]: If background image fails to load or the browser doesn't support gradient then browser looks for fallback color
```
body {
  background: url(sweettexture.jpg) blue;
}
```

4.1 Multiple background Images
```
background:
url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/652/codepen.png) bottom center no-repeat,
url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/652/confectionary.png) repeat;
```

![image](https://user-images.githubusercontent.com/125631878/233779909-01c6a4a1-0ed7-4384-8676-bff9d1437638.png)

**********
## Background Repeat
- The background-repeat property controls how a background image is repeated within an element. It can take values such as repeat, repeat-x, repeat-y, no-repeat, space, and round.
- The default value of background-repeat is repeat, which means that the background image will be repeated both horizontally and vertically to fill the entire element.

![image](https://user-images.githubusercontent.com/125631878/233789478-706adb67-89cb-4eff-9d5e-7ce4fcafc8ab.png)

**********
## Background size
- The background-size property controls the size of a background image within an element. It can take values such as auto, cover, contain, and a specific length or percentage value.
- By default, the background image will be displayed at its original size. However, you can use the background-size property to resize the image to fit within the element, or to cover the entire element.
- For one-value syntax, with values like %, em, px or auto the width of the image (height becomes 'auto')  (E.g. `backgroun-size: 50%` )
- For two value syntax, 1st and 2nd are width and height respectively (E.g. `background-size: 50% auto;`)
- For multiple backgrounds (background-size: values like `auto, auto;` `50%, 25%, 25%;` `6px, auto, contain;`)

![image](https://user-images.githubusercontent.com/125631878/233790149-908704c1-55e8-48d0-b665-d70f4ccf6ad2.png)

More detail: https://developer.mozilla.org/en-US/docs/Web/CSS/background-size

**********

## Several ways to reduce HTTP requests for background images. Here are a few techniques you can try:

- Use CSS sprites: CSS sprites allow you to combine multiple images into a single image, which can be downloaded with a single HTTP request. Then, you can use CSS to display the specific portion of the image you want as your background image. This reduces the number of HTTP requests made to the server, thus improving the page's load time.

- Use data URIs: Instead of downloading a separate image file, you can encode the image data directly into the CSS file using data URIs. This technique can be useful for small images because it eliminates the need for a separate HTTP request.

- Use a single background image for multiple elements: If you have several elements on a page that require the same background image, you can use a single image for all of them. This reduces the number of HTTP requests and can also save bandwidth.

- Use lazy loading: Lazy loading is a technique where images are loaded only when they are needed, such as when they are in the viewport. This can reduce the number of HTTP requests made at page load time, which can improve page speed.

- Use caching: Caching can be used to store images in the browser cache so that they don't have to be downloaded every time a page is loaded. This can reduce the number of HTTP requests and improve page speed for returning visitors.

**********

- Sprite: CSS sprites help in reducing HTTP requests by combining multiple small images into a single larger image. By doing this, the browser only needs to make one HTTP request to download the single larger image, rather than multiple HTTP requests to download each individual small image.

- After downloading the single image, CSS is used to display the specific portion of the image needed for each element on the page. This technique significantly reduces the number of HTTP requests made to the server, which can improve the page's load time and overall performance.

**********

- Background Image Properties

| Property | Description |
| ---|-----|
| `background-image`   | Used to add a background image to an HTML element                                               |
| `background-repeat`  | Controls how the image is repeated. Values include `repeat`, `repeat-x`, `repeat-y`, and `no-repeat` |
| `background-position`| Controls the position of the background image. Values include `left top`, `center center`, and `right bottom` |
| `background-size`    | Controls the size of the background image. Values include `cover`, `contain`, and a specific width and height in pixels or percentages |
| `background-color`   | Sets a background color for the element, visible if the image doesn't cover the entire element |
| `background-attachment`| Controls whether the background image scrolls with the element or stays fixed |
| `background`         | Shorthand property that sets multiple background properties at once |

**********

# Responsive website design
- Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices (desktops, tablets, and phones): <br>
More Details: https://www.w3schools.com/html/html_responsive.asp


**********

**********
