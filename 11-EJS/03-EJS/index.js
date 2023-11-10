import express from 'express';
import { dirname } from 'path';
import ejs from 'ejs';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', __dirname);

const fruits = ['apple', 'orange', 'mango']
app.get('/', (req, res) => {
    res.render('views/index.ejs', {
        data: fruits
    });
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
