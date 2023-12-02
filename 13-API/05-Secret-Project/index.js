// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.


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

    try {
        const response = await axios.get(API_URL, config);
        res.render("index.ejs", {
            secretData: response.data,
        });
    } catch (error) {
        console.log(error.response.data);
        res.status(500)
    }

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
