// Replace 'your-api-endpoint' with the actual API endpoint you want to call
const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

// Make a GET request
fetch(apiUrl)
    .then(response => {
        // Check if the request was successful (status code 200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response as JSON
        return response.json();
    })
    .then(data => {
        // Do something with the data
        console.log(data);
    })
    .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
    });
