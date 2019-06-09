const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    default: ""
  },
  password: {
    type: String,
    default: ""
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  signUpDate: {
    type: Date,
    default: Date.now()
  }
});
UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model("User", UserSchema);

// const mongoose = require("mongoose");

// const schema = new mongoose.Schema({
//   firstName: {
//     required: true,
//     type: String
//   },
//   lastName: {
//     required: true,
//     type: String
//   },
//   school: {
//     required: true,
//     type: String
//   }
// });

// module.exports = mongoose.model("User", UserSchema);
