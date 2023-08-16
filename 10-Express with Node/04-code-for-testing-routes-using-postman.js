
import express from "express";
const app = express();
const port = 3000;

// *********************
// Let’s practice using Postman. Make sure your server is running with nodemon.
// Then test the 5 different routes below with Postman. Open a separate tab for each request.
// Check that for each route you’re getting the correct status code returned to you from your server.
// You should not get any 404s or 500 status codes.
// *********************

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
});

app.put("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/angela", (req, res) => {
  //Deleting
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


// Select the http request, then in url field enter the
//  API end point including base url , set request body and other parameters,
// send the request then see the response setion
// status codes have meanings like

/*

  200 OK: Request was successful, and the server has returned the requested data.

  400 Bad Request: Server couldn't understand the client's request due to invalid syntax or other client-side errors.

  401 Unauthorized: Client must authenticate itself to get the requested response.

  404 Not Found: The requested resource could not be found on the server.

  500 Internal Server Error: The server encountered an error while processing the request.

  503 Service Unavailable: Server is currently unable to handle the request due to temporary overloading or maintenance.

*/
