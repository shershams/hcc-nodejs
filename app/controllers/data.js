var fs = require("fs");

exports.jsonPage = jsonPage;
exports.htmlPage = htmlPage;
exports.addUser = addUser;

var user = [{
	name : "Sherzod",
	email : "shershams@gmail.com"
}];


// Add a new user
function addUser(req, res) {
	var name = req.body.name;
	var email = req.body.email;

	user.push({
		name: name,
		email: email
	});

	res.redirect("/data/html");
}


// Respond with JSON
function jsonPage(req, res) {
  res.json(user);
}


function htmlPage(req, res) {
	fs.readFile('./app/views/test.html', function (err, data) {
	  if( err ){ 
	  	res.send(err);
	  	return;
	  }
	  res.write(data);
	  res.end();
	});
}