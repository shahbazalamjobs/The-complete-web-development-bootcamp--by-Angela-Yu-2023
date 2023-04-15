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
![image](https://user-images.githubusercontent.com/125631878/232249574-2bfec586-c6c4-4344-b95c-59fb10446433.png)

