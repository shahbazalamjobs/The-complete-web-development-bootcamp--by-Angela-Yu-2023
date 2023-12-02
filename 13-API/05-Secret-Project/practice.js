import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/random/";
const yourBearToken = "64439124-e93b-40a2-a24e-3516ecac3fd9";
const config = {
    header: { authorisation: `bear ${yourBearToken}` }
}

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get('/', async (req, res) => {

    const response = await axios.get(API_URL, config);
    
    res.render("index.ejs", {
        secretData: response.data,
    });
});



app.listen(3000);