let mongoose = require("mongoose");
let schema = require("../schemas/PersonSchema");


module.exports =  mongoose.model("Contact", schema); //mongoose converts this to 'contacts';



// const schema = new mongoose.Schema({
// // adjust properties and objects to fit the schema/theme you want 
// firstName: {
//    required: true,
//    type: String
//  },
//  lastName: {
//    required: true,
//    type: String
//  },
//  occupation: {
//    type: String
//  }
 
// });

