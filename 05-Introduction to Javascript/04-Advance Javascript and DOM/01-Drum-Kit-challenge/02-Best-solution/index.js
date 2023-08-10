function playSound(soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
}

var keySoundMap = {
    "w": "sounds/tom-1.mp3",
    "a": "sounds/tom-2.mp3",
    "s": "sounds/tom-3.mp3",
    "d": "sounds/tom-4.mp3",
    "j": "sounds/snare.mp3",
    "k": "sounds/crash.mp3",
    "l": "sounds/kick-bass.mp3",
};

var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function () {
        var buttonInnerHTMl = this.innerHTML;
        if (keySoundMap[buttonInnerHTMl]) {
            playSound(keySoundMap[buttonInnerHTMl]);
        }
    });
}

document.addEventListener("keydown", function (event) {
    var key = event.code.replace("Key", "");
    if (keySoundMap[key]) {
        playSound(keySoundMap[key]);
    } else {
        console.log(event.code);
    }
});
