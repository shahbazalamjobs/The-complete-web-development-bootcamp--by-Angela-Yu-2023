import https from 'https';
import express from 'express';

const app = express();
const port = 3000;

let data = '';

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
    // A chunk of data has been received.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received.
    resp.on('end', () => {
        console.log(JSON.parse(data).explanation);
        // Start the Express server after data is fetched.
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}/`);
        });
    });
}).on("error", (err) => {
    console.log("Error: " + err.message);
});

app.get('/', (req, resp) => {
    if (data) {
        resp.send(JSON.parse(data).explanation);
    } else {
        resp.send('Data not available yet. Try again later.');
    }
});
