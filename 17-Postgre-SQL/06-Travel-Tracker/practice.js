import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const app = express();
const port = 3000;

const db = new pg.Client({
    host: "localhost",
    user: "postgres",
    database: "world",
    password: "abc123",
    port: "5432"
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisited() {
    const result = await db.query('SELECT country_code FROM visited_countries');
    let countries = [];
    result.rows.forEach((country) => {
        countries.push(country.country_code);
    });

    return countries;
}

app.get("/", async (req, res) => {
    //Write your code here.

    const countries = await checkVisited();
    // console.log(countries);
    res.render('index.ejs', {
        countries: countries,
        total: countries.length
    })

});

app.post("/add", async (req, res) => {
    const input = req.body.country;

    const result = await db.query(
        'SELECT country_code FROM countries WHERE country_name = $1',
        [input]);

    if (result.rows.length !== 0) {
        const countryCode = result.rows[0].country_code;
        db.query('INSERT INTO visited_countries (country_code) VALUES ($1)', [countryCode]);
        res.redirect('/');
    }

});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});



