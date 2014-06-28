exports.userPage = userPage;

function userPage(req, res) {
  var response = "<h1>You are in the user page!</h1>";
  response += "<a href='/'>Go to Home</a>";

  res.send(response);
}