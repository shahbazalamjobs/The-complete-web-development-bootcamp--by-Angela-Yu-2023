

var buttons = document.querySelectorAll(".drum");

buttons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        var soundKey = button.textContent.trim().toLowerCase();
        var soundPath = sounds[soundKey];

        if (soundPath) {
            var audio = new Audio(soundPath);
            audio.play();
        }
    });
});

var sounds = {
    'w': 'sounds/tom-1.mp3',
    'a': 'sounds/tom-2.mp3',
    's': 'sounds/tom-3.mp3',
    'd': 'sounds/tom-4.mp3',
    'j': 'sounds/snare.mp3',
    'k': 'sounds/crash.mp3',
    'l': 'sounds/kick-bass.mp3'
};

document.onkeydown = function (e) {
    var soundPath = sounds[e.key];
    if (soundPath) {
        var audio = new Audio(soundPath);
        audio.play();
    } else {
        console.log("Key not mapped: key is", e.key);
    }
};










// var buttons = document.querySelectorAll(".drum");

// for (var i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function () {
//         var buttonIndex = Array.from(buttons).indexOf(this);

//         if (buttonIndex === 0) {
//             var audio = new Audio("sounds/tom-1.mp3");
//         } else if (buttonIndex === 1) {
//             var audio = new Audio("sounds/tom-2.mp3");
//         } else if (buttonIndex === 2) {
//             var audio = new Audio("sounds/tom-3.mp3");
//         } else if (buttonIndex === 3) {
//             var audio = new Audio("sounds/tom-4.mp3");
//         } else if (buttonIndex === 4) {
//             var audio = new Audio("sounds/snare.mp3");
//         } else if (buttonIndex === 5) {
//             var audio = new Audio("sounds/crash.mp3");
//         } else if (buttonIndex === 6) {
//             var audio = new Audio("sounds/kick.mp3");
//         }

//         if (audio) {
//             audio.play();
//         }
//     });
// }




// //

// var sounds = {
//     'w': 'sounds/tom-1.mp3',
//     'a': 'sounds/tom-2.mp3',
//     's': 'sounds/tom-3.mp3',
//     'd': 'sounds/tom-4.mp3',
//     'j': 'sounds/snare.mp3',
//     'k': 'sounds/crash.mp3',
//     'l': 'sounds/kick.mp3'
// };

// document.onkeydown = function (e) {
//     var soundPath = sounds[e.key];
//     if (soundPath) {
//         var audio = new Audio(soundPath);
//         audio.play();
//     } else {
//         console.log("Key not mapped: key is", e.key);
//     }
// };



