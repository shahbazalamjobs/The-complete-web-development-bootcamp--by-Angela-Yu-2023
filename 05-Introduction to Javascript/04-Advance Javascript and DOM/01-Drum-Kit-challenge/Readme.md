
```html

<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>Drum Kit</title>
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet">
</head>

<body>
  <h1 id="title">Drum 🥁 Kit</h1>
  <div class="set">
    <button class="w drum">w
      <img src="images/tom1.png" alt="">
      <audio data-key="w" src="sounds/tom-1.mp3"></audio>
    </button>
    <button class="a drum">a
      <img src="images/tom2.png" alt="">
      <audio data-key="a" src="sounds/tom-2.mp3"></audio>
    </button>
    <button class="s drum">s
      <img src="images/tom3.png" alt="">
      <audio data-key="s" src="sounds/tom-3.mp3"></audio>
    </button>
    <button class="d drum">d
      <img src="images/tom4.png" alt="">
      <audio data-key="d" src="sounds/tom-4.mp3"></audio>
    </button>
    <button class="j drum">j
      <img src="images/snare.png" alt="">
      <audio data-key="j" src="sounds/snare.mp3"></audio>
    </button>
    <button class="k drum">k
      <img src="images/crash.png" alt="">
      <audio data-key="k" src="sounds/crash.mp3"></audio>
    </button>
    <button class="l drum">l
      <img src="images/kick.png" alt="">
      <audio data-key="l" src="sounds/kick-bass.mp3"></audio>
    </button>
  </div>
  <footer>
    Made with ❤️ in London.
  </footer>
  <script src="index.js"></script>
</body>

</html>

```

**Code Basic Explanation**
`<div class="set">`: A container for the drum kit buttons.   
- Buttons for different drum sounds:
- Each button has a class "drum" and a unique class ("w", "a", etc.).
- Inside each button, there's text ("w", "a", etc.) and an image element displaying an icon.
- An `<audio>` element with a `data-key` attribute (e.g., `data-key="w"`) and a source attribute (`src`) pointing to a sound file.

**Data Key**
- The `data-key` attribute is a custom attribute you can add to HTML elements.
- It's used to store extra information about an element that can be accessed using JavaScript or CSS.
- It doesn't affect how the element looks or behaves by default; it's for your own use.
- You can give it any value you want, like a number or a string.
- It's often used to associate data with an element, like in the case of a drum kit, where each button has a unique key.
- You can access the value of `data-key` using JavaScript to perform actions or make decisions based on that value.

Example:
```html
<button class="drum" data-key="65">Press 'A' Key</button>
```
In this example, the button has a `data-key` attribute with the value `"65"`. It can be used to identify that this button corresponds to the keyboard key 'A'.


---


```js
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

```


```css
body {
  text-align: center;
  background-color: #283149;
}

h1 {
  font-size: 5rem;
  color: #DBEDF3;
  font-family: "Arvo", cursive;
  text-shadow: 3px 0 #DA0463;

}

footer {
  color: #DBEDF3;
  font-family: sans-serif;
}

.w {
  background-image: "images/tom1.png";
}

.a {
  background-image: "images/tom2.png";
}

.s {
  background-image: "images/tom3.png";
}

.d {
  background-image: "images/tom4.png";
}

.j {
  background-image: "images/snare.png";
}

.k {
  background-image: "images/crash.png";
}

.l {
  background-image: "images/kick.png";
}

.set {
  margin: 10% auto;
}

.game-over {
  background-color: red;
  opacity: 0.8;
}

.pressed {
  box-shadow: 0 3px 4px 0 #DBEDF3;
  opacity: 0.5;
}

.red {
  color: red;
}

.drum {
  outline: none;
  border: 10px solid #404B69;
  font-size: 5rem;
  font-family: 'Arvo', cursive;
  line-height: 2;
  font-weight: 900;
  color: #DA0463;
  text-shadow: 3px 0 #DBEDF3;
  border-radius: 15px;
  display: inline-block;
  width: 150px;
  height: 150px;
  text-align: center;
  margin: 10px;
  background-color: white;
  position: relative;
  overflow: hidden;
  background-size: cover;

}



img {

  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
}
```






