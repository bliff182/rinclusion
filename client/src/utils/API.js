import axios from "axios";

export default {
  // Gets restaurants from the Yelp API
  getRestaurants: function(q) {
    // return axios.get("/api/yelp", { params: { q: "&location:" + q } });
    return axios.get("/api/yelp");
  },
  // Gets all liked Restaurants
  getLikes: function() {
    return axios.get("/api/restaurants", { params: { isLiked: true } });
  },
  // Deletes the liked restaurant
  deleteLike: function(id) {
    return axios.delete("/api/restaurants" + id);
  },
  likeOrDislike: function(restaurantData) {
    return axios.post("/api/restaurants", restaurantData);
  }
};
