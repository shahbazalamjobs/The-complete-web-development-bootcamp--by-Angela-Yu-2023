import express from 'express';
import ejs from 'ejs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', __dirname);


app.get('/', (req, res) => {
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
