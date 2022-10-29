const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 3001;
const app = express();

dotenv.config();
connectDB();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use("/",require("./routes/user-routes"));
app.use("/api/notes",require("./routes/journal-routes"));

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
}); 

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
