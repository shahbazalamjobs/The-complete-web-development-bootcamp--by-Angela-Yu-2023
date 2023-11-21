import axios from 'axios';

axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
        console.log(response.data.explanation);
    })
    .catch(error => {
        console.error(error);
    });