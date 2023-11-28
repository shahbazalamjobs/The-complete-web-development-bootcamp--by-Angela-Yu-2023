const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse form requests
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'form.html');
    res.sendFile(filePath);
});

app.post('/form', async (req, res) => {
    try {
        // Extract data from the request body
        const postData = req.body;
        // res.send(postData);  // sends the 

        // for sending form data
        // res.json({ message: 'Data received successfully', postData });

        // Make a POST request using Axios to a sample API
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);


        // Send the data from the API as the response
        res.json(response.data);


    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: 'Failed to submit form data' });
    }

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
