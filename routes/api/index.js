const path = require("path");
const router = require("express").Router();
const restaurantRoutes = require("./restaurants");
const yelpRoutes = require("./yelp");

// Restaurant routes
router.use("/restaurants", restaurantRoutes);

// Yelp routes
router.use("/yelp", yelpRoutes);

// For anything else, render the html page
router.use((req, res) =>
	res.sendFile(path.join(__dirname, "../../client/build/index.html"))
);

module.exports = router;
