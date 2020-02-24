import axios from "axios";

export default {
  // Gets restaurants from the Yelp API
  getRestaurants: function(q) {
    // return axios.get("/api/yelp", { params: { q: "&location:" + q } });
    return axios.get("/api/yelp");
  }
  // Gets
};
