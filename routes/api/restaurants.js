const router = require("express").Router();
const restaurantsController = require("../../controllers/restaurantsController");

// Matches with "/api/restaurants"
router
  .route("/")
  .get(restaurantsController.findAll)
  .post(restaurantsController.create);

// Matches with "/api/restaurants/:id"
router
  .route("/:id")
  .get(restaurantsController.findById)
  .put(restaurantsController.update)
  .delete(restaurantsController.remove);

// Matches with "/api/restaurants/liked"
// router.route("/liked").get(restaurantsController.findLiked);

// Matches with "/api/restaurants/disliked"
// router.route("/disliked").get(restaurantsController.findDisliked);

module.exports = router;
