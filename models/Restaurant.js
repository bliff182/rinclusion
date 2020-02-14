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
		type: Object
	},
	isLiked: {
		type: Boolean,
		default: false
	},
	date: {
		type: Date,
		default: Date.now
	}
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
