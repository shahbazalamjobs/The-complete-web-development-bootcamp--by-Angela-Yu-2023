// Creating our first server with Express using NodeJs

import express from "express";
const app = express();
const port = 3000;

// app.listen(3000, () => {     // without var port so written 3000 directly
//     console.log("Server running on port 3000.");
// });


app.listen(port, () => {    // port = 3000 inside 'var port'
    console.log(`Server running on port ${port}.`)
});
