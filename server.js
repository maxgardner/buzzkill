const express = require('express');
const app = express();
let router = express.Router();
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

// Set up static files and route handling
app.use(express.static(process.cwd + '/client/build'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));

// Require models for mongoose
let User = require("./models/User.js")(mongoose);
let Habit = require("./models/Habit.js")(mongoose);
let Session = require("./models/Session.js")(mongoose);

// Set up mongoDB
mongoose.Promise = Promise;
mongoose.connect(require("./config/mongodb").uri);
const db = mongoose.connection;

// Show any mongoose errors
db.on("error", (error) => {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", () => {
  console.log("Mongoose connection successful.");
});

// Import routes
require("./routes/client.js")(router);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
