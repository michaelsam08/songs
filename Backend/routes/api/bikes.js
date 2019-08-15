const express = require("express");
const router = express.Router();

////////// import Item Model /////////////
const Bike = require("../../models/Bike");

/// @route   GET api/bikes
/// @desc    Get All bikes
/// @access  Public

router.get("/", (req, res) => {
  Bike.find()
    .sort({ date: -1 })
    .then(bikes => res.json(bikes));
});
////////  POST api/bike, add a bike to the collection
router.post("/", (req, res) => {
  const newBike = new Bike({
    name: req.body.name,
    date: req.body.date,
    wheelsize: req.body.wheelsize,
    color: req.body.color,
    frame: req.body.frame
  });
  newBike.save().then(item => res.json(item));
});
//////  Delete bike from the collection
router.delete("/:id", (req, res) => {
  Bike.findById(req.params.id)
    .then(bike => bike.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
