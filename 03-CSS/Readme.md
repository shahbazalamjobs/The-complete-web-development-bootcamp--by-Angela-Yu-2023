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
   
   Code: <br> 
   ![image](https://user-images.githubusercontent.com/125631878/229371603-965a9e8c-092e-4784-a4a0-69f0ed7c022b.png) 
   
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

  ![image](https://user-images.githubusercontent.com/125631878/229370126-113382c6-3656-4804-9140-057b70c01504.png)
 
 
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

Copy the error code given, inside index.html then find the error using chrome developer tools 
We can see that website css is gone 
![image](https://user-images.githubusercontent.com/125631878/229992191-feb8fa9c-5ae5-4a8c-bd35-9253b1270411.png)




   
   
   
   
   
   
   
**********   


   
   

**********   


   
   

**********   


   
   

**********   

   
   
   


**********   
   
