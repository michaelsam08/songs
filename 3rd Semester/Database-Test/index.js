let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://michaelsam08:Sammy2018@ds119692.mlab.com:19692/express_practice");
const ContactModel = require('./models/ContactModel');


ContactModel.find({}).exec()
 .then(contacts => {
    console.log(contacts);
 });


ContactModel.findById("").exec()
.then(contact => {
  contact.occupation = 'poet';
  return contact.save();
})
.then(contact => {
  response.json(contact);
  console.log(contact);
});

// //insert new document to collection
// const newContact= new ContactModel({
//   firstName: 'Mike',
//   lastName: 'Jones',
//   occupation: 'rapper'
// });

//  newContact.save()
//  .then(savedContact => {
//    console.log(savedContact);
//  });


 return;


ContactModel.find({}).exec()
 .then(contacts => {
   console.log(contacts);
 });


// let PersonSchema = require("../schemas/PersonSchema");


// PersonSchema.find({}).exec()
// .then(person => {
//   console.log(person);
// });
