# Art of centering elements
Inside container or parent element (here body) use ` text-align: centering;` which will center everything inside that doesn't have a width set

![image](https://user-images.githubusercontent.com/125631878/232238809-afc19def-6ec1-4502-9994-a2961e2d4c47.png)


## My CSS website look

![image](https://user-images.githubusercontent.com/125631878/232237376-dd66e6f4-90f7-4c02-a249-9d0b694d6b85.png)


## My Personal HTML code
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="favicon.png">
    <link rel="stylesheet" href="CSS/style.css">
    <title>Shahbaz</title>

</head>

<body>

    <div class="top-container">
        <img class="top-cloud" src="images/cloud.png" alt="cloud-img">
        <h1>Hi, I am Shahbaz.</h1>
        <p>a <span class="pro">pro</span>gammer</p>
        <img class="bottom-cloud" src="images/cloud.png" alt="">
        <img class="mountain" src="images/mountain.png" alt="mountain-img">

    </div>

    <div class="middle-container">
    </div>

    <div class="bottom-container">


    </div>

</body>

</html>
```

## My Personal CSS code
```
body {
    margin: 0px;
    text-align: center;

}

h1 {
    width: 10%;
    margin: 0 auto;
    position: relative;
    top: 100px;
}

p {
    position: relative;
    top: 110px;
}

.top-container {
    background-color: #DAF5FF;
    height: 573px;
}

.middle-container {

    background-color: red;
    width: 200px;
    height: 200px;
}

.bottom-container {
    background-color: yellow;
    width: 200px;
    height: 200px;
}

.pro {
    text-decoration: underline;
}

.bottom-cloud {
    position: absolute;
    top: 230px;
    left: 480px;
}

.top-cloud {
    position: absolute;
    right: 490px;
    top: 60px;
}

.mountain {
    position: relative;
    top: 90px;
}

```
