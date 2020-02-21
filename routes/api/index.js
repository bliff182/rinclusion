const router = require("express").Router();
const restaurantRoutes = require("./restaurants");
const yelpRoutes = require("./yelp");
const userRoutes = require("./users");

router.use("/restaurants", restaurantRoutes);
router.use("/yelp", yelpRoutes);
router.use("/users", userRoutes);

module.exports = router;
