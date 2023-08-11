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



/* *********** */

// EventListeners in jQuery

// on click h1 changing color to purple
$("h1").click(function () {
    $("h1").css("color", "purple")
});


/* *********** */


// changing color of h1 when click any single button of all the buttons
// for that we need to use for loop in javascript as it can select 1 element at a time
// but in jQuery we can select multiple elements at a time

$("button").click(function () {
    $("h1").css("color", "purple");
});



/* *********** */

// while writing in input, text is displayed in console
$("input").keydown(function (event) {
    console.log(event.key);
});

// while writing in input, text is displayed in heading
$("input").keydown(function (event) {
    $("h1").text(event.key);
});


/* *********** */

// on method

$("h1").on("mouseover", function () {
    $("h1").css("color", "purple");
});

// changes h1 color after mouse is hovered over h1

/* *********** */


$("h1").before("<button>New 1</button>");     // Places button before h1

$("h1").after("<button>New 2</button>");     // Places button after h1

$("h1").prepend("<button>New 3</button>");     // Places button before h1 in same line

$("h1").append("<button>New 4</button>");     // Places button before h1 in same line

$("button").remove();   // Removes all button



/* *********** */



// Animation using jQuery

// Hide h1 when click button
$("button").on("click", function () {
    $("h1").hide();
});

// Togglw h1 by clicking button
$("button").on("click", function () {
    $("h1").toggle();
});

// hide slowly
$("button").on("click", function () {
    $("h1").fadeOut();
});

// slowly comes
$("button").on("click", function () {
    $("h1").fadeIn();
});

// toggles fade
$("button").on("click", function () {
    $("h1").fadeToggle();
});

// slides up
$("button").on("click", function () {
    $("h1").slideUp();
});

// slides Down
$("button").on("click", function () {
    $("h1").slideDown();
});
//  toggles slide
$("button").on("click", function () {
    $("h1").slideToggle();
});


// Using custom animation using css .. css code inside animate({});

// Reduces opacity to 50% by clicking
$("button").on("click", function () {
    $("h1").animate({ opacity: 0.5 });
});

// but cannot do many things like changing color
$("button").on("click", function () {
    $("h1").animate({ color: red }); // error: red not defined
});


// Multiple animation in single click
// First slideUp, then slideDown then reduce opacity to 50%
$("button").on("click", function () {
    $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});


//jQuery Animation:  https://api.jquery.com/category/effects/



/* *********** */


