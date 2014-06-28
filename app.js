var express = require("express");
var app = express();
var Home = require("./app/controllers/home");
var User = require("./app/controllers/user");
var Data = require("./app/controllers/data");

// Configure the application
app.configure(function(){
	app.use( express.bodyParser() );
});


// Home Page
app.get( '/', Home.homePage);

// User Page
app.get( '/user', User.userPage);

// Data Type Pages
app.get( '/data/json', Data.jsonPage);
app.get( '/data/html', Data.htmlPage);

// User management
app.post( '/user/create', Data.addUser);


// Create server
app.listen(3000, "127.0.0.1");
console.log("Server is running at 127.0.0.1:3000");