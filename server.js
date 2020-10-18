// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();
exports.app = app;
const morgan = require('morgan');
const { webRoutes } = require("./routes/webRoutes");
const menuItemHelpers = require('./db/dbHelpers/menuItemHelpers');
const menuItemFormatter = require("./helperfunctions/menuItemFormatter");
const menu_items = require('./routes/menu_items');


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
// Middleware
app.use(morgan('dev'));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));
webRoutes();

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// app.use("/api/users", usersRoutes(db));
// app.use("/api/orders", ordersRoutes(db));
// app.use("/api/menuitems", menuItemsRoutes(db));
// app.use("/api/menucategories", menuCategoriesRoutes(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
// app.get("/", (req, res) => {
//   res.render("index");
// });
app.get("/", (req, res) => {
  menuItemHelpers.getAllMenuItems()
    .then(data => {
      const info = menuItemFormatter.formatMenuItems(data);
      return info;
    })
    .then(data => {
      res.render('index', { menu_items: data });
    })
    .catch(e => {
      res.send(e);
    });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

// getJSON('story.json').then(function(story) {
//   addHtmlToPage(story.heading);

//   // TODO: for each url in story.chapterUrls, fetch &amp; display
// }).then(function() {
//   // And we're all done!
//   addTextToPage("All done");
// }).catch(function(err) {
//   // Catch any error that happened along the way
//   addTextToPage("Argh, broken: " + err.message);
// }).then(function() {
//   // Always hide the spinner
//   document.querySelector('.spinner').style.display = 'none';
// });






