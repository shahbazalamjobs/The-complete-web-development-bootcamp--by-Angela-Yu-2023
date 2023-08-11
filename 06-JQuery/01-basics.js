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

$("h1").css("font-size", "5rem"); 
// changes the font-size but its not good practice as css is for styling and javascript for behaviour


/* *********** */


// 1) to change style with jQuery, we will use css
// css code
.big-title {
    font-size: 10rem;
    color: green;
    font-family: cursive;
}
// jQuery code
$("h1").addClass("big-title");    // gives all big-title selector selector


/* *********** */


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


/* *********** */


// 3) to know whether element has particular class or not

$("h1").hasClass("margin-50");
// output: true


/* *********** */


// 3) Changing text content

$("h1").text("Bye");    // h1 changes to Bye

$("button").text("Don't Click me");    // all button text becomes  Don't Click me

$("button").html("<em>Press</em>");    // .html work similar in jQuery to .innerHTML in javascript, Hereemphasizing the text press


/* *********** */


// 3) Manipulating Attibutes

console.log($("img").attr("src"));      // Get src attribute 

console.log($("a").attr("href", "https://www.yahoo.com"));      // set href attribute 
 
$("h1").attr("class");    // Gives all classes of selected element
// output: 'big-title margin-50'




