
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

Examples of selecting HTML elements using JavaScript. 
Once selected an element, you can manipulate its properties, attributes, styles, and even add event listeners to create dynamic interactions on your web page.
You can use various methods and techniques to select elements based on their IDs, classes, tags, attributes, or other criteria.

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

