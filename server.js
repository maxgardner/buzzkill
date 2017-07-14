const express = require('express');
const app = express();
let router = express.Router();
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const path = require('path');
const authCheckMiddleware = require(path.join(__dirname, '/config/auth'));

// Set up static files and route handling
app.use(express.static(path.join(__dirname, 'client/build/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));

// Set up mongoDB
mongoose.Promise = Promise;
require(path.join(__dirname, 'models'))(mongoose);
// Require models for mongoose
let User = require("./models/User")(mongoose);
let Habit = require("./models/Habit")(mongoose);
let Session = require("./models/Session")(mongoose);

// Import routes
app.use('/api', authCheckMiddleware);
require(path.join(__dirname, 'routes/client'))(router);
require(path.join(__dirname, 'routes/api'))(router, User, Habit, Session);
require(path.join(__dirname, 'routes/auth'))(router, User);

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is running on ${port}`);
});
