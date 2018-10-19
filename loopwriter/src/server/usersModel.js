let mongoose = require("mongoose");

const schema = new mongoose.Schema({
  firstName: {
    required: true,
    type: String
  },
  lastName: {
    required: true,
    type: String
  },
  school: {
    required: true,
    type: String
  }
});

module.exports = mongoose.model("User", schema, "users");
