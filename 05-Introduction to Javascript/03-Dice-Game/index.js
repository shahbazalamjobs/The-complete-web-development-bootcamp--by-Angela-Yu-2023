

var images = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
];

var which1 = Math.floor(Math.random() * images.length);
var img1 = document.querySelector('.img1'); // Get the first element with class 'img1'
img1.src = images[which1];
// img1.title = images[which];

var which2 = Math.floor(Math.random() * images.length);
which2 = Math.floor(Math.random() * images.length); // No need to redeclare 'which'
var img2 = document.querySelector('.img2'); // Get the first element with class 'img2'
img2.src = images[which2];
// img2.title = images[which];


/*
    - query selector uses ".name" for class and "#name" for id, 
    - whereas getElementsByClassName uses ("name")[0] bcoz of multiple elements 
      selection cannot maipulate them so have to select single element

*/


// Winning Player
if (which1 > which2) {
    document.querySelector("h1").innerHTML = " Player 1 wins";
}
else if (which2 > which1) {
    document.querySelector("h1").innerHTML = " Player 2 wins";
}
else {
    document.querySelector("h1").innerHTML = " Draw";
}
