import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', __dirname);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
});

let alphabetCount; // Corrected the variable name

function totalAlphabet(req, res, next) {
    // Corrected the function and removed unnecessary parentheses
    alphabetCount = req.body.fName.length + req.body.lName.length;
    next(); // Make sure to call next to continue to the next middleware or route handler
}

app.post('/submit', totalAlphabet, (req, res) => {
    res.render('index.ejs', {
        c: alphabetCount, // Pass the variable to the template
    });
    console.log(alphabetCount);
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
