exports.homePage = homePage;

function homePage(req, res) {
  var response = "<h1>C SCI 244 Advanced JS with Node.js</h1>";
  response += "<a href='/user'>Go to User</a>";

  res.send(response);
}