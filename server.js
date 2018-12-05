// Dependencies
// =============================================================
var express = require("express");
require('dotenv').config()

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8081;

// Requiring our models for syncing
var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("dist"));

// USING CORS FOR TESTING
//==============================================================
const cors = require('cors')
app.use(cors())

//--------------------------------------------------------------

// Routes
// =============================================================
require('./routes')(app)

// Starts the server to begin listening
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
})  
  