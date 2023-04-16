
## Adding Content to our website
- Our new website looks 
![image](https://user-images.githubusercontent.com/125631878/232312164-80a9ec0b-65b6-40c7-87c3-4322d4ee9062.png)
![image](https://user-images.githubusercontent.com/125631878/232312376-d931b98a-5f3b-4578-8313-72ebec6f75ca.png)
![image](https://user-images.githubusercontent.com/125631878/232312400-09a38ec1-9fdf-47dc-b1d2-e2abc1203352.png)


### HTML code
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="favicon.png">
    <link rel="stylesheet" href="CSS/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat&family=Sacramento&display=swap"
        rel="stylesheet">
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
        <div class="profile">
            <img class="profile" src="https://i.insider.com/5eea91594dca6834276c1f24?width=700" width="200px" alt="Img">
            <h2>Hello.</h2>
            <p>I am Shahbaz Alam, currently learning full stack development. I love programming
            </p>
        </div>

        <hr>

        <div class="skills">
            <h2>My Skills.</h2>
            <div class="skill-row">
                <img class="skills" src="https://geekflare.com/wp-content/uploads/2022/10/Coding.png" width="300px"
                    alt="">
                <h3>Background and Future</h3>
                <p>I have completed my degree in Electronics and Telecommunication Engineering; however, my true passion
                    lies in the development of cutting-edge, high-tech products.</p>
            </div>
            <div class="Other-skill">
                <img class=""
                    src="https://www.creativefabrica.com/wp-content/uploads/2020/06/03/Cooking-Vector-Illustration-Icon-Graphics-4267218-1-580x435.jpg"
                    width="450px" alt="">
                <h3>Cooking</h3>
                <p> During my free time, I take pleasure in preparing special Indian cuisine dishes that bring me great
                    joy and contentment, both mentally and spiritually. </p>
            </div>
        </div>

        <hr>

        <div class="contact-me">
            <h2>Get In Touch</h2>
            <h3>If you want to contact me</h3>
            <p>If you're interested in creating amazing projects together, I would be delighted to collaborate with you.
            </p>
            <a class="btn" href="mailto:shahbazalamjobs@gmail.com">CONTACT ME</a>
        </div>
    </div>


    <div class="bottom-container">
        <a class="footer-link" href="https://www.linkedin.com/">LinkedIn</a>
        <a class="footer-link" href="https://twitter.com/">Twitter</a>
        <a class="footer-link" href="https://www.google.com/">Website</a>
        <p>© 2023 Shahbaz Alam.</p>
    </div>

</body>

</html>
```
### CSS code

```
body {
    margin: 0px;
    text-align: center;
    font-family: 'Merriweather', serif;

}

h1 {
    width: 10%;
    margin: 0 auto;
    font-family: 'Sacramento', cursive;
}

h2 {
    font-family: 'Montserrat', sans-serif;
}

h3 {
    font-family: 'Montserrat', sans-serif;
}

p {
    position: relative;
}

img.profile {
    border-radius: 50%;
}

img.skills {
    
}

.top-container {
    background-color: #DAF5FF;
    position: relative;
    padding-top: 100px;
}

.middle-container {}

.bottom-container {}

.pro {
    text-decoration: underline;
}

.top-cloud {
    position: absolute;
    right: 500px;
    top: 50px;
}

.bottom-cloud {
    position: absolute;
    left: 470px;
    bottom: 300px;
}
```
