const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.json());

// GET all posts
app.get('/api/posts', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET a specific post by ID
app.get('/api/posts/:id', async (req, res) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// CREATE a new post
app.post('/api/posts', async (req, res) => {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', req.body);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// UPDATE a post by ID
app.put('/api/posts/:id', async (req, res) => {
    try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`, req.body);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE a post by ID
app.delete('/api/posts/:id', async (req, res) => {
    try {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
