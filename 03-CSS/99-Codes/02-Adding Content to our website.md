
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

**********

- In browser some users heave font size preference as (very small, small, medium,large, very large) whereas default size is medium.
- But even if user has font size other that default medium, the size of font in our website will not change because we used px `font-size: 90px;` which is not dynamic.
- Size in terms of % is dynamic like (120%)
- [Note]: 100% is equal to 16px

- Dynamic font size in CSS allows you to adjust the font size of your text based on the size of the user's device or browser window. 
- This means that your text will scale up or down proportionally depending on the available space, ensuring that your content remains readable and accessible on any device. 
- You can use CSS units like "em", "rem", or "vw" to set font size relative to the viewport width, making it easier to achieve a consistent and responsive design.

```
<html>

<head>
    <style>
        body {
            font-size: 16px;
        }

        h1 {
            font-size: 2em;
            /* will be 32px (2 x 16px) */
        }

        p {
            font-size: 1.2rem;
            /* will be 19.2px (1.2 x 16px) */
        }

        @media screen and (max-width: 768px) {

            /* reduce font size on smaller screens */
            body {
                font-size: 14px;
            }
        }
    </style>
</head>

<body>
    <h1>Dynamic Font Size Example</h1>
    <p>This is an example of how you can use dynamic font size in CSS to adjust the font size based on the user's device or browser window size.</p>
</body>

</html>
```
o/p:
![image](https://user-images.githubusercontent.com/125631878/232320051-9f4464c5-b081-42ab-a524-72c3fd131d65.png)


- In this example, we're setting the base font size for the body element to 16px, and using em and rem units to set font sizes for the h1 and p elements respectively. This will allow the font size to scale proportionally with the base font size. We've also added a media query to reduce the font size on smaller screens using px units.

| Unit | Description | Example |
| --- | --- | --- |
| Pixel (px) | Fixed unit of measurement representing a single dot on a screen. | `div { width: 100px; height: 100px; }` |
| Percentage (%) | Relative unit of measurement representing a portion of the available space based on the size of the parent element. | `div { width: 50%; height: 50%; }` |
| Em (em) | Relative unit of measurement based on the font size of the parent element. | `p { font-size: 1.5em; }` |
| Rem (rem) | Relative unit of measurement based on the font size of the root element. | `p { font-size: 1.5rem; }` |

`Text font size for : 1em = 100% = medium = 16px`

**********

![image](https://user-images.githubusercontent.com/125631878/232326844-088522d9-820c-4546-8f72-23241a8cafe1.png)

## HTML code
```
<html>
<head>
<link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="box1">Using px units </div>
  <div id="box2">Using % units</div>
  <div id="box3">Using em units</div>
  <div id="box4">Using rem units</div>
</body>
</html>
```

## CSS code
```
  /* using px units */
  #box1 {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    padding: 5px;
  }

  /* using % units */
  #box2 {
    width: 50%;
    height: 50%;
    background-color: blue;
    font-size: 100%;
  }

  /* using em units */
  #box3 {
    width: 5em;
    height: 5em;
    background-color: green;
    font-size: 1.5em;
    padding: 1em;
  }

  /* using rem units */
  #box4 {
    width: 5rem;
    height: 5rem;
    background-color: yellow;
    font-size: 1.5rem;
    padding: 1rem;
  }
```

**********

## Set Font Size With Em
- To allow users to resize the text (in the browser menu), many developers use em instead of pixels.

- 1em is equal to the current font size. The default text size in browsers is 16px. So, the default size of 1em is 16px.

- The size can be calculated from pixels to em using this formula: pixels/16=em

![image](https://user-images.githubusercontent.com/125631878/232327950-37f2e6ef-e3ba-4934-ac35-b2672c92ae6d.png)

## Use a Combination of Percent and Em

![image](https://user-images.githubusercontent.com/125631878/232328252-2ffe960c-5b87-476e-a0c3-3f926349e9bb.png)

## Responsive Font Size
- The text size can be set with a vw unit, which means the "viewport width".

- That way the text size will follow the size of the browser window:

![image](https://user-images.githubusercontent.com/125631878/232328631-f73479f1-fe31-4797-a5bf-282e1770b188.png)


**********







