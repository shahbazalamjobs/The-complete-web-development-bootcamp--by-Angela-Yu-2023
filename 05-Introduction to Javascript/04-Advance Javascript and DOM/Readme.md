# Advance Javascript and DOM manipulation 

## EventListners
Certainly! Here's a brief explanation of event listeners along with a simple code example:

Event listeners are JavaScript functions that "listen" for specific events on HTML elements and execute code when those events occur.

**Code Example:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Event Listener Example</title>
</head>
<body>

<button id="myButton">Click me!</button>

<script>
  // Get a reference to the button element
  var button = document.getElementById("myButton");

  // Add an event listener for the "click" event
  button.addEventListener("click", function() {
    alert("Button clicked!");
  });
</script>

</body>
</html>
```

**Explanation:**
1. We have an HTML button element with the id "myButton".
2. In the `<script>` section, we use `document.getElementById` to get a reference to the button element.
3. We add an event listener to the button using the `addEventListener` method.
4. The event we're listening for is the "click" event.
5. When the button is clicked, the provided function is executed, which displays an alert saying "Button clicked!".

In this example, the event listener is set up to respond to the "click" event on the button element. You can replace "click" with other events like "mouseover", "keydown", "submit", etc., and provide a function to perform actions when those events occur on the element.

## `$0` in JavaScript:

1. `$0` is a special variable in the browser's developer console that refers to the last HTML element you selected or inspected in the "Elements" panel. It allows you to quickly access and interact with that element using JavaScript commands.
2. You can type `$0` in the console to see the properties and attributes of the selected element, and you can manipulate it directly using JavaScript code to test and debug your web page's behavior.
