// require express
var express = require("express");

// create app
var app = express();

app.use(express.static("public"));

app.listen(3000, function() {
  console.log("Espress server is up on port 3000");
});
