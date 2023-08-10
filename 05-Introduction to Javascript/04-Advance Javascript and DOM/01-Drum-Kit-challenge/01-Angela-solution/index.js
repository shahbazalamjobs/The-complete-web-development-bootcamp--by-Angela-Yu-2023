// Play sound on clicking button

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTMl = this.innerHTML;

        switch (buttonInnerHTMl) {
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();

                break;

            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();

                break;

            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();

                break;

            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();

                break;

            case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();

                break;

            case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();

                break;

            case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();

                break;

            default:
                // console.log(buttonInnerHTML)
                break;
        }

    });
}





/*        **************        */

// Play sound on pressing key
document.addEventListener("keydown", function (event) {
    switch (event.code) {
        case "KeyW":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "KeyA":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "KeyS":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "KeyD":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "KeyJ":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "KeyK":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "KeyL":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            console.log(event.code);
            break;
    }
});




