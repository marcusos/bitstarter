//Libs
var express = require('express');
var fs = require('fs');

//Global Vars
var infile = "./index.html";

//Server
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fileData = fs.readFileSync(infile, 'utf8');

  response.send(fileData);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
