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
  // Updates liked status to true
  markLiked: function(id) {
    return axios.put(`/api/restaurants/${id}`, { isLiked: true });
  },
  // Updates liked status to false
  markDisliked: function(id) {
    return axios.put(`/api/restaurants/${id}`, { isLiked: false });
  },
  // Gets all disliked restaurants
  getDislikes: function() {
    return axios.get("/api/restaurants", { params: { isLiked: false } });
  },
  getViewed: function() {
    return axios.get("/api/restaurants", {
      params: { isLiked: true } || { isLiked: false }
    });
  },
  updateRest: function(id) {
    return axios.put(`/api/restaurants/${id}`);
  },
  // Deletes the liked restaurant
  deleteLike: function(id) {
    return axios.delete(`/api/restaurants/${id}`);
  },
  // Adds restaurants to db
  likeOrDislike: function(restaurantData) {
    return axios.post("/api/restaurants", restaurantData);
  },
  getOne: function(id) {
    return axios.get(`/api/restaurants${id}`);
  }
};
