require("dotenv").config();
const axios = require("axios");
const db = require("../models");

console.log(process.env.YELP_API_KEY);

const BASEURL =
  "https://api.yelp.com/v3/businesses/search?term=restaurant&location=10065&limit=50";
const config = {
  headers: {
    Authorization: `Bearer ${process.env.YELP_API_KEY}`
  }
};

module.exports = {
  findAll: (req, res) => {
    const { query: params } = req;
    axios
      .get(BASEURL, config) // remember to add params
      .then(results => {
        const newResults = results.data.businesses.filter(result => {
          return (
            result.name &&
            result.image_url &&
            result.url &&
            result.categories &&
            result.rating &&
            result.price &&
            result.location &&
            result.location.address1 &&
            result.location.city &&
            result.location.state &&
            result.location.zip_code
          );
        });
        res.json(newResults);
        // console.log(newResults);
        // console.log(newResults.length);
      })
      .catch(err => res.status(422).json(err));
  }
};

// module.exports = {
// 	findAll: (req, res) => {
// 		const { query: params } = req;
// 		axios
// 			.get(
// 				"https://api.yelp.com/v3/businesses/search?term=restaurant&limit=50",
// 				params,
// 				config
// 			)
// 			.then(response => {
// 				// console.log(results.data.businesses);
// 				const results = response.data.businesses;
// 				res.json(results);
// 			})
// 			.catch(err => {
// 				console.log(err);
// 			});
// 	}
// };

// module.exports = {
// 	findAll: (req, res) => {
// 		const { query: params } = req;
// 		axios
// 			.get(
// 				BASEURL,
// 				// { params },
// 				config
// 			)
// 			.then(
// 				results => res.json(results.data.businesses)
// 				// results.data.businesses.filter(
// 				// 	result =>
// 				// 		result.name &&
// 				// 		result.image_url &&
// 				// 		result.url &&
// 				// 		result.categories &&
// 				// 		result.rating &&
// 				// 		result.location.address1 &&
// 				// 		result.location.city &&
// 				// 		result.location.state &&
// 				// 		result.location.zip_code &&
// 				// 		result.price
// 				// )
// 			)
// 			.then(apiRestaurants =>
// 				db.Restaurant.find().then(dbRestaurants =>
// 					apiRestaurants.filter(apiRestaurant =>
// 						dbRestaurants.every(
// 							dbRestaurant =>
// 								dbRestaurant.yelpId.toString() !== apiRestaurant.id
// 						)
// 					)
// 				)
// 			)
// 			.then(restaurants => res.json(restaurants))
// 			.catch(err => res.status(422).json(err));
// 	}
// };
