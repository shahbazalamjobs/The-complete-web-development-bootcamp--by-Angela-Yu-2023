// Simple Node.js server using Express, where Axios is integrated into middleware 
// functions to handle HTTP requests as an integral part of server logic. 
// In this example, the server makes a request to an external API using Axios 
// when a client makes a request to a specific endpoint:

const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
// Middleware to make an Axios GET request to an external API
const axiosMiddleware = async (req, res, next) => {
    try {
        const response = await
            axios.get('https://jsonplaceholder.typicode.com/posts/1');
        req.apiData = response.data; // Store the response data in the request object
        next(); // Continue to the next middleware or route handler
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
// Route handler that uses the data from the Axios request
app.get('/', axiosMiddleware, (req, res) => {
    // Access the data from the Axios request stored in the request object
    const apiData = req.apiData;
    // Process the data or send it to the client
    res.json({ data: apiData });
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});