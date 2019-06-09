// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('.'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 5001, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});