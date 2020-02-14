const router = require("express").Router();
const restaurantRoutes = require("./restaurants");
const yelpRoutes = require("./yelp");

// Restaurant routes
router.use("/restaurants", restaurantRoutes);
router.use("/yelp", yelpRoutes);

module.exports = router;
