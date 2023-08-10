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


/* *********** */

/* 
$(document).ready(function() { ... });: 
It can be used when jquery and javascript location are present in head tag 
Or if dont want to use ready(func(){...}); , then better place jquery and javascript location tags before body tag
*/

/* *********** */

console.log($("h1").css("color"));  
// output: rgb(0, 0, 0)

console.log($("h1").css("font-size"));  
// output: 32px

console.log($("h1").css("font-size", "5rem")); 
// changes the font-size but its not good practice as css is for styling and javascript for behaviour


// 1) to change style with jQuery, we will use css
// css code
.big-title {
    font-size: 10rem;
    color: green;
    font-family: cursive;
}
// jQuery code
$("h1").addClass("big-title");    // gives all big-title selector selector



// 2) to change multiple things on same element(s) by adding class name 
// jQuery code
$("h1").addClass("big-title margin-50");

// css code
.big-title {
    font-size: 10rem;
    color: green;
    font-family: cursive;
}

.margin-50 {
    margin: 50px;
}


