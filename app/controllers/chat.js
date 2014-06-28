var fs = require("fs");

exports.jsonPage = jsonPage;
exports.htmlPage = htmlPage;


// Respond with a sample JSON
function login(req, res) {
	fs.readFile('./app/views/login.html', function (err, data) {
		if( err ){ 
			res.send(err);
			return;
		}
		res.write(data);
		res.end();
	});
}


// Respond with a sample HTML page
function main(req, res) {
	fs.readFile('./app/views/main.html', function (err, data) {
		if( err ){ 
			res.send(err);
			return;
		}
		res.write(data);
		res.end();
	});
}