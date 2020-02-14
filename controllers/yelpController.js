const axios = require("axios");
const db = require("../models");

const apiKey = process.env.YELP_API_KEY;
const BASEURL = "https://api.yelp.com/v3/businesses/search";

module.exports = {
	yelpResults: (req, params) => {
		axios
			.get(
				BASEURL,
				{
					headers: {
						Authorization: `Bearer ${apiKey}`
					}
				},
				params
			)
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	}
};
