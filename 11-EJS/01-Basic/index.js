import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", __dirname); // Set the views directory to the current directory

app.use(bodyParser.urlencoded({ extended: true })); // Middleware for parsing form data

app.get('/', (req, res) => {
    // Serve the HTML file when accessing the root route
    res.sendFile(join(__dirname, 'index.html'));
});

app.post('/submit', (req, res) => {
    const name = req.body.name;

    // Render the EJS file with the submitted data
    res.render('index.ejs', { value: name });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
