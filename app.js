var application_root = __dirname,
    express = require("express"),
    app = express();

// Root
app.get( '/', function(req, res){
  res.send("<h1>C SCI 244 Advanced JS with Node.js</h1>");
});


// Create server
app.listen(3000, "127.0.0.1");
console.log("Server is running at 127.0.0.1:3000");