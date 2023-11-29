import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static("public"));

// Parse URL-encoded bodies for form data
app.use(bodyParser.urlencoded({ extended: true }));

/*------------------- Filter Route ------------------ */

// Render the filter form
app.get('/', async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    console.log(result);

    const rActivity = result.activity;
    const rType = result.type;
    const rParticipants = result.participants;

    // ------------ Testing purposes-------------

    // console.log(rActivity);
    // console.log(rType);
    // console.log(rParticipants);

    res.render("index.ejs", {
      rResult: result,
      activity: rActivity,
      type: rType,
      participants: rParticipants,
    });

  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

// Handle form submission on the filter route
app.post("/", async (req, res) => {
  try {
    // Extract form data
    const postData = req.body;
    const typeValue = postData.type;
    const participantValue = postData.participants;

    // Make API request with filter parameters
    const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${typeValue}&participants=${participantValue}`);
    const result = response.data;

    // Pick a random activity from the filtered results
    const randomIndex = Math.floor(Math.random() * result.length);
    const randomResult = result[randomIndex];

    // Destructure the random result for cleaner code
    const { activity: rActivity, type: rType, participants: rParticipants } = randomResult;

    // --------------- Above is shortform of --------------
    // const rActivity = randomResult.activity;
    // const rType = randomResult.type;
    // const rParticipants = randomResult.participants;


    // Render the template with the random result
    res.render("index.ejs", {
      rResult: randomResult,
      activity: rActivity,
      type: rType,
      participants: rParticipants,
    });

    // Log success message and details
    console.log(`Form rendered successfully: 200 ok`);
    console.log(`type: ${rType}, participants: ${rParticipants}, activity: ${rActivity}`);

  } catch (error) {
    // Handle errors and render the error message
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
