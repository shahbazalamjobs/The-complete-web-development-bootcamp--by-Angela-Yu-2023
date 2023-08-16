
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World! ff</h1>");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
});

// o/p: Hello, express!
