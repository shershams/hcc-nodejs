exports.create = create;
exports.get = get;

var users = [{
	name : "Sherzod",
	email : "shershams@gmail.com"
}];


// Retrieve users
function get(req, res) {
  res.json(users);
}


// Add a new user
function create(req, res) {
	var name = req.body.name;
	var email = req.body.email;

	users.push({
		name: name,
		email: email
	});

	res.json( { "status":"ok" } );
}