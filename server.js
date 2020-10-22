// load .env data into process.env
require('dotenv').config();

// Web server config
const express = require('express');
const app = express();
exports.app = app;
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const morgan = require('morgan');
const { webRoutes } = require("./routes/webRoutes");
const twilioAccount = process.env.TWILIO_ACCOUNT;
const twilioToken = process.env.TWILIO_TOKEN;;
const client = require('twilio')(
  twilioAccount,
  twilioToken
);
const db = require('./db/connection/db-conn');
const indexRoute = require("./routes/indexRoute");

// For index route only I would like to move his out of this file
//const = require('./db/dbHelpers/menuItemHelpers');
//const = require("./helperfunctions/menuItemFormatter");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
// Middleware

app.use(express.json());
//app.use(morgan('dev'));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));


//All routes located in Webroutes
webRoutes(db);
indexRoute.getIndex(db);

// SMS routes to twillio
app.post("/orderSent", (req, res) => {
  client.messages.create({
    from: "+16042434743",
    to: "+17809372950",
    body: "Order has been placed for Taco-Takeout"
  }).then((message) => console.log(message));
});

app.post("/orderConfirmed", (req, res) => {
  console.log(req.body["Body"]);
  client.messages.create({
    from: "+16042434743",
    to: "+17809372950",
    body: req.body["Body"]
  }).then((message) => console.log(message));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
