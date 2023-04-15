# Art of centering elements
Inside container or parent element (here body) use ` text-align: centering;` which will center everything inside that doesn't have a width set, but if it has any width set, then will have to use auto in margin like here

![image](https://user-images.githubusercontent.com/125631878/232238809-afc19def-6ec1-4502-9994-a2961e2d4c47.png)

**********
Bottom cloud and mountain are next to each other and also mountain is not in center, so fisrt we have to move bottom cloud from its static position using `css position properties` 
![image](https://user-images.githubusercontent.com/125631878/232238958-e764cbcd-615d-4e1a-a6c2-423b34a4a1d1.png)
- This is done by giving class to bottom cloud image then using giving it absolute position in style.css
- Now our mountain in in middle and bottom cloud is in random position

![image](https://user-images.githubusercontent.com/125631878/232239445-9f0bf45b-1e67-4023-8c3c-68d346824601.png)

- After this we will position both clouds in proper position
- We had absolute position for bottom cloud, in order for it to have relative position to something, one of its parents has to have its position sets as relative. And if we dont then it will be relative to the body
- We are setting our top container as relative 
- Now lets give our top some padding to give some space 
  Before:  
  ![image](https://user-images.githubusercontent.com/125631878/232241848-b5e723df-02b2-4688-b263-464e51eb680e.png)
![image](https://user-images.githubusercontent.com/125631878/232242453-e43e79e3-cbbb-481f-a363-8a700b6bf81f.png)




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
