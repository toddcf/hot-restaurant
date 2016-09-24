
// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var reservations = require('./app/data/reservations.js');

var htmlrouting = require('./app/routing/html-routes.js');

console.log(htmlrouting);
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(htmlrouting)
reservations(app);
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});