
## DOM

- If script tag is present in head section then it may lead to problems of slow loading of website.
- When interpreter reaches the script tag in head, it has to change some properties of element (element which is not known and leads to error)
Certainly! Here are three key points to consider when placing the `<script>` tag in the `<head>` section of your HTML document:

1. **Blocking Page Rendering**: Placing `<script>` tags in the `<head>` can block the rendering of the page until the JavaScript is loaded and executed, potentially slowing down the page load time and user experience.
2. **JavaScript Dependencies**: If your scripts have dependencies on elements defined in the `<body>` section, placing them in the `<head>` might lead to errors, as those elements might not be available when the scripts execute.
3. **Perceived Page Load Time**: Placing JavaScript in the `<head>` can give the impression of a slower page load, as users might see an incomplete or blank page while waiting for the JavaScript to load and execute.

While there are cases where placing scripts in the `<head>` can be appropriate, it's generally recommended to include scripts just before the closing `</body>` tag to optimize page loading and improve user experience.

---

## Which selector to use and why

1. **`getElementById()`**:
   - For selecting a unique element by its ID.
   - Efficient and suited for one-of-a-kind elements.
   - Example: `const header = document.getElementById('header');`

2. **`getElementsByClassName()`**:
   - To select elements by class.
   - Useful for changing multiple elements with the same class.
   - Example: `const highlights = document.getElementsByClassName('highlight');`

3. **`getElementsByTagName()`**:
   - For selecting elements by tag name.
   - Handy when altering all instances of a tag.
   - Example: `const paragraphs = document.getElementsByTagName('p');`

4. **`querySelector()`**:
   - Selects one element using a CSS selector.
   - Versatile for complex or unique selections.
   - Example: `const container = document.querySelector('.container');`

5. **`querySelectorAll()`**:
   - Selects multiple elements using a CSS selector.
   - Appropriate for similar elements.
   - Example: `const sections = document.querySelectorAll('.section');`

6. **Attribute Selectors**:
   - Choose elements based on attributes and values.
   - Useful for specific attribute-related tasks.
   - Example: `const emailInput = document.querySelector('[type="email"]');`

---

Commonly used query selectors:

1. **`document.querySelector()`**:
   - Selects the first element matching a CSS selector.
   - Ideal for targeting unique elements.
   - Provides flexibility in choosing elements based on class, ID, tag name, attributes, etc.

2. **`document.querySelectorAll()`**:
   - Selects all elements matching a CSS selector.
   - Useful for applying changes to multiple elements with the same criteria.
   - Returns a `NodeList`, allowing iteration and manipulation of selected elements.

---

## Manipulating HTML elements using Javascript 

- Examples of selecting HTML elements using JavaScript. 
- Once selected an element, you can manipulate its properties, attributes, styles, and even add event listeners to create dynamic interactions on your web page.
- You can use various methods and techniques to select elements based on their IDs, classes, tags, attributes, or other criteria.

1. **Select by ID:**
You can use the `document.getElementById()` method to select an element by its unique ID.

HTML:
```html
<div id="myDiv">Hello, world!</div>
```

JavaScript:
```javascript
const myDiv = document.getElementById('myDiv');
myDiv.innerText = 'Changed text using JavaScript';
```

2. **Select by Class:**
You can use the `document.getElementsByClassName()` method to select elements by their class names. Note that this method returns a NodeList, which is similar to an array.

HTML:
```html
<p class="highlight">This is a paragraph.</p>
<p class="highlight">This is another paragraph.</p>
```

JavaScript:
```javascript
const highlightedParagraphs = document.getElementsByClassName('highlight');
for (const paragraph of highlightedParagraphs) {
    paragraph.style.color = 'blue';
}
```

3. **Select by Tag Name:**
You can use the `document.getElementsByTagName()` method to select elements by their HTML tag names.

HTML:
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```

JavaScript:
```javascript
const listItems = document.getElementsByTagName('li');
listItems[0].textContent = 'Updated Item 1';
```

4. **Select by CSS Selector:**
You can use the `document.querySelector()` and `document.querySelectorAll()` methods to select elements using CSS selectors.

HTML:
```html
<div class="container">
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
</div>
```

JavaScript:
```javascript
const container = document.querySelector('.container');
const paragraphs = container.querySelectorAll('p');
paragraphs[1].style.fontWeight = 'bold';
```

5. **Select by Attribute:**
You can use attribute-based selection methods to select elements with specific attributes.

HTML:
```html
<input type="text" id="username" />
```

JavaScript:
```javascript
const usernameInput = document.querySelector('[type="text"]');
usernameInput.placeholder = 'Enter your username';
```

---

## 

- For manipulating of html elements we use javascript but we shouldn't use javascript to change the styling (i.e. styling manipulation)
- For manipulation of css styling, we add extra class to javascript and styling in respective css class
- e.g. document.querySelector('text').style.color = "red"; // wrong practice
- instead do this: document.querySelector('text').classList.add('textColor') // this code add class textColor to element with selector 'text'
- now in css use .textColor { color: "red" };

- Simple e.g.
```html
   html boiler plate code with h1 tag and heading
   css: huge { font-size: 10rem; }
   javascript: document.querySelector('h1').classList.add('huge');
```
- In above code we have `h1` tag in html, `huge` selector in CSS and in javascript `querySelector` selects h1 tag and adds class huge to h1 tag by `.classList.add()`
- huge css is apllied to h1 then h1 content changes according to the css definiton 

HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Styling and Manipulating Elements</title>
</head>
<body>
    <button id="toggleButton">Toggle Element</button>
    <div id="content" class="hidden">This is a hidden element.</div>
    <script src="script.js"></script>
</body>
</html>
```

CSS (styles.css):
```css
/* Styling for the hidden content */
.hidden {
    display: none;
}
```

JavaScript (script.js):
```javascript
const toggleButton = document.getElementById('toggleButton');
const contentElement = document.getElementById('content');

toggleButton.addEventListener('click', () => {
    contentElement.classList.toggle('hidden');
});
```

- In this example, we have a button (`toggleButton`) and a `div` (`content`) element.
- The `hidden` class is initially applied to the `content` element, making it hidden due to the CSS `display: none;` property.
- When the button is clicked, the JavaScript code toggles the `hidden` class on the `content` element, causing it to appear or disappear based on its `display` property.



1. `const toggleButton = document.getElementById('toggleButton');`
   - This line selects the HTML element with the ID "toggleButton" using the `getElementById()` method.
   - The `toggleButton` constant now holds a reference to the button element on the web page.

2. `const contentElement = document.getElementById('content');`
   - This line selects the HTML element with the ID "content" using the `getElementById()` method.
   - The `contentElement` constant now holds a reference to the div element that contains the hidden content.

3. `toggleButton.addEventListener('click', () => { ... });`
   - This line adds an event listener to the `toggleButton` element for the "click" event.
   - When the button is clicked, the code inside the event listener's curly braces `{ ... }` will be executed.

4. `contentElement.classList.toggle('hidden');`
   - This line toggles the presence of the CSS class "hidden" on the `contentElement`.
   - The `classList` property provides access to the element's list of classes.
   - The `toggle()` method adds the class if it's not present and removes it if it's already present.

Overall, when the button is clicked, the event listener is triggered. Inside the event listener, the `hidden` class is toggled on the `contentElement`, causing it to appear if the class is not present (initially hidden) or disappear if the class is present (hidden due to CSS `display: none;` property). This creates the effect of showing or hiding the content based on the button click.

---
### Manipulating HTML element attribute 

```js
document.querySelector('a');   // input
<a href=​"https:​/​/​www.google.com">​Google​</a>​   // output
```

```js
document.querySelector('a').attributes;   // input
NamedNodeMap {0: href, href: href, length: 1}   // output
```

```js
document.querySelector('a').getAttribute('href');   // input
'https://www.google.com'   // output
```

```
document.querySelector('a').setAttribute('href', 'https://www.bing.com');   //input
// In output the link change to bing 
```
