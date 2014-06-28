var fs = require("fs");

exports.jsonPage = jsonPage;
exports.htmlPage = htmlPage;


// Respond with a sample JSON
function jsonPage(req, res) {
  res.json({
		name : "Sherzod",
		email : "shershams@gmail.com"
	});
}


// Respond with a sample HTML page
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