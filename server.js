
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

require('dotenv').config();

// Define middleware here

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/ourstory"

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI)
// (process.env.MONGODB_URI || "mongodb://localhost/ourstory");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});