## Dice Game

- Two dice changes everytime on refresh and shows random side

![image](https://github.com/shahbazalamjobs/The-complete-web-development-bootcamp--by-Angela-Yu-2023/assets/125631878/7e466802-4661-4f78-b865-75192b8c36f3)

![image](https://github.com/shahbazalamjobs/The-complete-web-development-bootcamp--by-Angela-Yu-2023/assets/125631878/d1a26f26-2f0e-47e4-b89c-51ac2903ee02)

![image](https://github.com/shahbazalamjobs/The-complete-web-development-bootcamp--by-Angela-Yu-2023/assets/125631878/2a40c528-3b04-4869-9e8c-ca2e19ebe376)


Source Link: section 12 -> Dice Game: https://www.appbrewery.co/p/web-development-course-resources

## Angela yu answer

### HTML
```html
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>Dicee</title>
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css?family=Indie+Flower|Lobster" rel="stylesheet">

</head>

<body>

  <div class="container">
    <h1>Refresh Me</h1>

    <div class="dice">
      <p>Player 1</p>
      <img class="img1" src="images/dice6.png">
    </div>

    <div class="dice">
      <p>Player 2</p>
      <img class="img2" src="images/dice4.png">
    </div>

  </div>

  <script src="index.js"></script>
</body>

<footer>
  www 🎲 App Brewery 🎲 com
</footer>

</html>
```

### CSS
```css

.container {
  width: 70%;
  margin: auto;
  text-align: center;
}

.dice {
  text-align: center;
  display: inline-block;

}

body {
  background-color: #393E46;
}

h1 {
  margin: 30px;
  font-family: 'Lobster', cursive;
  text-shadow: 5px 0 #232931;
  font-size: 8rem;
  color: #4ECCA3;
}

p {
  font-size: 2rem;
  color: #4ECCA3;
  font-family: 'Indie Flower', cursive;
}

img {
  width: 80%;
}

footer {
  margin-top: 5%;
  color: #EEEEEE;
  text-align: center;
  font-family: 'Indie Flower', cursive;

}

```

```js
//Angela yu code

var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // 1-6
var randomDiceSrc1 = "images/dice" + randomNumber1 + ".png";  // images/dice1.png to dice6.png
var image1 = document.querySelector("img");  // Select the first image element
image1.setAttribute("src", randomDiceSrc1);  // Set the attribute to the correct variable name

var randomNumber2 = Math.floor(Math.random() * 6) + 1;  // 1-6
var randomDiceSrc2 = "images/dice" + randomNumber2 + ".png";  // images/dice1.png to dice6.png
var image2 = document.querySelectorAll("img")[1];  // Select the second image element
image2.setAttribute("src", randomDiceSrc2);  // Set the attribute to the correct variable name

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = " Player 2 wins";
}
else {
    document.querySelector("h1").innerHTML = " Draw !!!";
}
```
