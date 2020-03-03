const path = require("path");
const router = require("express").Router();
const restaurantRoutes = require("./restaurants");
const yelpRoutes = require("./yelp");
const userRoutes = require("./users");

router.use("/restaurants", restaurantRoutes);
router.use("/yelp", yelpRoutes);
router.use("/users", userRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
