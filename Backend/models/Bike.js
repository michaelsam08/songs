const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//////////  Create Schema //////////////
const BikeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  wheelsize: {
    type: Number
  },
  frame: {
    type: String
  },
  color: {
    type: String
  }
});

////// exporting the file for use "Bike", telling mongoose the name and the schema for the model///////////
module.exports = Bike = mongoose.model("Bike", BikeSchema);
