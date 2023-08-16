
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1> Hello! this is the root page </h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact</h1> <p>Hello! My phone no. is 99864778</p>");
});


app.get("/about", (req, res) => {
    res.send("<h1>About</h1> <p>Hello I am a full stack developer</p>");
});


app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});
