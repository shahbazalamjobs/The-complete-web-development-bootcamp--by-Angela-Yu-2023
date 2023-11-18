import fetch from 'node-fetch';

(async () => {
    try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
        const json = await response.json();

        console.log(json.url);
        console.log(json.explanation);
    } catch (error) {
        console.log(error.response.body);
    }
})();
