const db = require("../models");

module.exports = {
  // add database code here
  findAll: function(req, res) {
    db.Restaurant.find(req.query)
      .sort({ date: -1 })
      .then(dbRestaurant => res.json(dbRestaurant))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Restaurant.findById(req.params.id)
      .then(dbRestaurant => res.json(dbRestaurant))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Restaurant.create(req.body)
      .then(dbRestaurant => res.json(dbRestaurant))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Restaurant.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbRestaurant => res.json(dbRestaurant))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Restaurant.findById({ _id: req.params.id })
      .then(dbRestaurant => dbRestaurant.remove())
      .then(dbRestaurant => res.json(dbRestaurant))
      .catch(err => res.status(422).json(err));
  }
};
