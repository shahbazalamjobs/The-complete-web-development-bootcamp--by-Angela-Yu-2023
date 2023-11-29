const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    try {
        // Make a GET request using Axios
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

        // Send the response data back to the client
        res.json(response.data);
    } catch (error) {
        // Handle errors
        console.error('Error making GET request:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
