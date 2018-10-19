let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let usersRoutes = require("./UsersRoutes");
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://michaelsam08:Sammy_2018@ds127293.mlab.com:27293/loopwriter"
);

app.use(usersRoutes);
// app.use(express.static("public"));
app.use(bodyParser.json());

app.listen(3001, err => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now living in apartment 3001");
});
