let users = require("./users");
const usersModel = require("./usersModel");

//get list of everything
module.exports.list = function list(req, res) {
  usersModel
    .find({})
    .exec()
    .then(users => {
      console.log("you made it", users);
      return res.json(users);
    });
};
// get one thing off of list
module.exports.show = function show(req, res) {
  usersModel
    .findById(req.params.id)
    .exec()
    .then(user => {
      return res.json(user);
    });
};
module.exports.create = function create(req, res) {
  const newUser = new newUser({
    body: req.body.body
  });
  newUser.save().then(savedUser => {
    return res.json(savedUser);
  });
};

//put
module.exports.update = function update(req, res) {
  return res.json({ theId: req.params.id });
};
//delete
module.exports.remove = function remove(req, res) {
  return res.json({});
};
