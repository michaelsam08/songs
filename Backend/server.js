const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const Bikes = require("./routes/api/bikes");

const app = express();

///////////  Bodyparser Middleware
app.use(bodyParser.json());

/////////// DB Config ///////////////
const db = require("./config/keys").mongoURI;

/////////// Connect to Mongo ////////////////
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected .......WooooWhooooooooo"))
  .catch(err => console.log(err));

/////////////  USe routes //////////////

app.use("/api/bikes", Bikes);

//////////// Defining port variable for server to listen on ////////
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
