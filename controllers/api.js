const mongoose = require("mongoose");
const Pet = mongoose.model("Pet");

module.exports = {
  index: (req, res) => {
    Pet.find()
      .then(pets => res.json(pets))
      .catch(err => console.log(err));
  },
  create: (req, res) => {
    Pet.create(req.body).then(pet => res.json(pet));
  },
  show: (req, res) => {
    Pet.findOne({ _id: req.params.id }).then(pet => res.json(pet));
  },
  update: (req, res) => {
    Pet.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    }).then(pet => res.json(pet));
  },
  delete: (req, res) => {
    Pet.remove({ _id: req.params.id }).then(pet => res.json(pet));
  }
};
