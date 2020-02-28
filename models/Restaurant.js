const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image_url: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  categories: {
    type: Array
  },
  location: {
    type: Object,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  isLiked: {
    type: Boolean
  },
  yelpId: {
    type: String,
    required: true,
    unique: true
  }
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
