let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://michaelsam08:Sammy_2018@mymongodb-yoly6.mongodb.net/test?retryWrites=true&w=majority"
);

let CommentsRoutes = require("./routes/CommentsRoutes");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());

app.use(CommentsRoutes);

app.listen(3001, err => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now living in apartment 3001");
});
