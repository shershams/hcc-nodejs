var express = require("express");
var app = express();
var Home = require("./app/controllers/home");
var User = require("./app/controllers/user");
var Pages = require("./app/controllers/pages");

// Configure the application
app.configure(function(){
	app.use( express.bodyParser() );
});


// Home Page
app.get( '/', Home.homePage);

// Data Type Pages
app.get( '/pages/json', Pages.jsonPage);
app.get( '/pages/html', Pages.htmlPage);

// User management
app.get( '/user', User.get);
app.post( '/user', User.create);


// Create server
app.listen(3000, "127.0.0.1");
console.log("Server is running at 127.0.0.1:3000");