let mongoose = require('mongoose');

const schema = new mongoose.Schema({
    // adjust properties (set the rules) and objects to fit the schema/theme you want 
    firstName: {
       required: true,
       type: String
     },
     lastName: {
       required: true,
       type: String
     },
     occupation: {
       type: String
     }
     
    });

    module.exports = schema;