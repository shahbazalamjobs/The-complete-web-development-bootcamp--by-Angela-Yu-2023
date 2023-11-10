import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));
let week; // Declare week variable

function weekEnjoyOrWork(req, res, next) {
    let date = new Date();
    let day = date.getDay();

    if (day >= 1 && day < 5) {
        week = "It's a weekday, it's time to work hard!";
    } else if (day = 0 || day = 6) {
        week = "It's a weekend, it's time to have fun!";
    }
    next();
}

app.use(weekEnjoyOrWork);

app.get('/', (req, res) => {
    res.render(__dirname + '/index.ejs', {
        weekValue: week
    });
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
