const router = require("express").Router();
const yelpController = require("../../controllers/yelpController");

// Matches with "/api/yelp"
router.route("/").get(yelpController.yelpResults);

module.exports = router;
