import axios from "axios";

export default {
  // Gets restaurants from the Yelp API
  getRestaurants: function(query) {
    return axios.get("/api/yelp", { params: query });
  },
  // Gets all liked Restaurants
  getLikes: function() {
    return axios.get("/api/restaurants", { params: { isLiked: true } });
  },
  // Gets all disliked restaurants
  getDislikes: function() {
    return axios.get("/api/restaurants", { params: { isLiked: false } });
  },
  // Deletes the liked restaurant
  deleteLike: function(id) {
    return axios.delete("/api/restaurants" + id);
  },
  likeOrDislike: function(restaurantData) {
    return axios.post("/api/restaurants", restaurantData);
  }
};
