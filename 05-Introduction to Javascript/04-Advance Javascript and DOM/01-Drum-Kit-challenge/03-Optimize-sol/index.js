// Map keys to sound filenames
const keySoundMap = {
    "w": "tom-1.mp3",
    "a": "tom-2.mp3",
    "s": "tom-3.mp3",
    "d": "tom-4.mp3",
    "j": "snare.mp3",
    "k": "crash.mp3",
    "l": "kick-bass.mp3"
};

// Play sound on clicking button
document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", function () {
        const buttonInnerHTMl = this.innerHTML;
        buttonAnimation(buttonInnerHTMl);
        playSound(buttonInnerHTMl);
    });
});

// Play sound on pressing key
document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();
    buttonAnimation(key);
    playSound(key);
});

// Remove animation class on key release
document.addEventListener("keyup", function (event) {
    buttonAnimation(event.key);
});

function playSound(key) {
    const soundFilename = keySoundMap[key];
    if (soundFilename) {
        const audio = new Audio(`sounds/${soundFilename}`);
        audio.play();
    } else {
        console.log(key);
    }
}

function buttonAnimation(currentKey) {
    const activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
        activeButton.classList.toggle("pressed");
        setTimeout(() => {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
