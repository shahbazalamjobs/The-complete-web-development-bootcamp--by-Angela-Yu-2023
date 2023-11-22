
### API

- API, short for Application Programming Interface, is like a secret handshake for software.
- It allows different applications to communicate with each other and share data or functionality.
- APIs define the methods and data formats that applications can use to request and exchange information.

---

- Use postman and provide api url and send the get request to get the details
- Postman can be use to test api without frontend and backend.

---

- Practice on these links:
1. https://wheretheiss.at/w/developer
2. https://bored-api.appbrewery.com

- Send GET req to api url
- Add query parameters and vaue after (base url / end-point) starting with ? : http://base-url.com/end-point?query1=value1&query2=value2 <br>
  Syntax: `base-url/end-point?query-parameters` <br>
  E.g.: https://bored-api.appbrewery.com/filter?type=education










---

# API in depth

API stands for Application Programming Interface. It's like a bridge that allows different software systems to communicate with each other. Imagine you're at a restaurant. The menu is like the API—it tells you what you can order (the available functions). When you're ready to order, you don't need to know how the kitchen prepares the dish (the internal implementation); you just need to communicate your request to the waiter (make API calls).

In tech terms, an API defines the methods and data formats that applications can use to request and exchange information. There are different types of APIs, like web APIs that enable communication over the internet.

Here are some key API basics:

1. **Endpoints:** Think of these as specific URLs that represent different functionalities. For example, a weather API might have an endpoint for getting the current temperature and another for the forecast.

2. **HTTP Methods:** APIs use methods like GET, POST, PUT, and DELETE to perform different actions. GET is like asking for information, POST is sending data to be processed, PUT is updating existing data, and DELETE is, well, deleting.

3. **Request and Response:** When you make a request to an API (like placing an order), you get a response (your dish). This response often comes in a specific format, commonly JSON (JavaScript Object Notation) or XML (eXtensible Markup Language).

4. **Authentication:** Some APIs require authentication to ensure that only authorized users or applications can access them. This is like showing your membership card at the restaurant.

5. **Rate Limiting:** To prevent abuse, APIs often have limits on how many requests you can make in a given time period. It's like a restaurant saying you can only order a certain number of dishes per hour.

APIs are the unsung heroes behind the scenes, making our apps and services play nice together!

---

## 1. API request using only http
```js
const express = require('express');
const http = require('http');

const app = express();
const port = 3000;

// Define a route that makes an HTTP request
app.get('/http-api', (req, res) => {
  // Options for the HTTP request
  const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/todos/1',
    method: 'GET',
  };

  // Make the HTTP request
  const httpRequest = http.request(options, (httpResponse) => {
    let data = '';

    // A chunk of data has been received.
    httpResponse.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received.
    httpResponse.on('end', () => {
      try {
        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Send the data as a JSON response
        res.json(jsonData);
      } catch (error) {
        // Handle JSON parsing errors
        console.error('Error parsing JSON data:', error.message);
        res.status(500).send('Internal Server Error');
      }
    });
  });

  // Handle errors in the HTTP request
  httpRequest.on('error', (error) => {
    console.error('Error making HTTP request:', error.message);
    res.status(500).send('Internal Server Error');
  });

  // End the HTTP request
  httpRequest.end();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```


## 2. API request using Axios

```js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Define a route that fetches data from an external API
app.get('/external-api', async (req, res) => {
  try {
    // Make a GET request to an example API
    const apiResponse = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

    // Send the response from the external API to the client
    res.json(apiResponse.data);
  } catch (error) {
    // Handle errors
    console.error('Error fetching data from external API:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

### 3. API request using fetch

```js
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

// Define a route that makes a fetch request
app.get('/fetch-api', async (req, res) => {
  try {
    // URL for the API request
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

    // Make the fetch request
    const response = await fetch(apiUrl);

    // Check if the request was successful (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON data
    const data = await response.json();

    // Send the data as a JSON response
    res.json(data);
  } catch (error) {
    // Handle errors
    console.error('Error fetching data from the API:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```
