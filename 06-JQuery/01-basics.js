/* *********** */

$("h1").css("color", "red");  
// Selects h1 elements then changes their color to red


/* *********** */


$(document).ready(function () {
    $("h1").css("color", "red");
});

/*
$(document).ready(function() { ... });: 
This part wraps the code inside a function that will be executed once the document is fully loaded and ready. 
It ensures that the code runs after the HTML document's elements have been loaded into the browser's memory.
*/

/*
1. Waits for the webpage to load completely.
2. Targets all `<h1>` elements.
3. Changes their text color to red using CSS.
4. Uses jQuery library for easier HTML manipulation.
*/

/* 
$(document).ready(function() { ... });: 
It can be used when jquery and javascript location are present in head tag 
Or if dont want to use ready(func(){...}); , then better place jquery and javascript location tags before body tag
*/
