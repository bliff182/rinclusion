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

// Defining methods for the yelpController

// findAll searches the Yelp API and returns only the entries we haven't already saved

// It also makes sure that the results returned from the API all contain a name, image, url, category list, price indicator, and location information

// holy shit it worked

module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    axios
      .get(BASEURL, config)
      .then(results =>
        results.data.businesses.filter(
          result =>
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
        )
      )
      .then(apiRestaurants =>
        db.Restaurant.find().then(dbRestaurants =>
          apiRestaurants.filter(apiRestaurant =>
            dbRestaurants.every(
              dbRestaurant =>
                dbRestaurant.yelpId.toString() !== apiRestaurant.id
            )
          )
        )
      )
      .then(restaurants => res.json(restaurants))
      .catch(err => res.status(422).json(err));
  }
};

// module.exports = {
//   findAll: (req, res) => {
//     const { query: params } = req;
//     axios
//       .get(BASEURL, config) // remember to add params
//       .then(results => {
//         const newResults = results.data.businesses.filter(result => {
//           // STOPPPPPPPPPPPPPPPPPPPPPPPPP
//           return (
//             result.name &&
//             result.image_url &&
//             result.url &&
//             result.categories &&
//             result.rating &&
//             result.price &&
//             result.location &&
//             result.location.address1 &&
//             result.location.city &&
//             result.location.state &&
//             result.location.zip_code
//           );
//         });
//         res.json(newResults);
//       })
//       .catch(err => res.status(422).json(err));
//   }
// };
