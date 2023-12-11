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


app.get("/", async (req, res) => {
  //Write your code here.
  var countries = [];
  const result = await db.query('SELECT country_code FROM visited_countries');

  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });

  db.end();

  res.render('index.ejs', {
    total: countries.length,
    countries: countries
  });

});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



