
/* API allows different software applications to communicate with each other. 
In the context of web development, APIs are commonly used to enable communication between a front-end application (like a website) and a back-end server.*/



import express from 'express';
const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello everyone');
});

// Expand your API by adding more endpoints.
app.get('/api/greet', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

app.get('/api/users', (req, res) => {
    const users = ['User 1', 'User 2', 'User 3'];
    res.json(users);
});

app.listen(port, () => {
    console.log(`Server is running at port http://localhost:${port}`);
});