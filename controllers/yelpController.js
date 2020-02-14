require("dotenv").config();
const axios = require("axios");
// const db = require("../models");

const BASEURL =
	"https://api.yelp.com/v3/businesses/search?term=restaurant&location=10065";
const config = {
	headers: {
		Authorization: `Bearer ${process.env.YELP_API_KEY}`
	}
};

module.exports = {
	yelpResults: params => {
		axios
			.get(BASEURL, config, params)
			.then(res => {
				console.log(res.data.businesses);
			})
			.catch(err => {
				console.log(err);
			});
	}
};
