import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import MediaCard from "../components/Restaurant";
import Alert from "../components/Alert";

class Discover extends Component {
  state = {
    name: "",
    image_url: "",
    url: "",
    price: "",
    location: {},
    categories: [],
    restuarants: [],
    index: 0
  };

  // When the component mounts, load the next restaurant to be displayed
  componentDidMount() {
    this.loadNextRestaurant();
    console.log(this.state);
  }

  loadNextRestaurant() {
    API.getRestaurants()
      .then(res => {
        const { name, image_url, url, price, location, categories } = res.data[
          this.state.index
        ];
        // console.log(res);
        this.setState({
          name: name,
          image_url: image_url,
          url: url,
          price: price,
          location: location,
          categories: categories,
          restaurants: res.data
        });
        console.log(this.state);
        // this.setState({
        //   restaurants: res.data
        // });
        // console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  handleBtnClick = event => {
    // event.preventDefault();
    this.setState({
      index: this.state.index + 1
    });
    console.log(this.state);
    this.loadNextRestaurant();
  };

  handleRestaurantLike = id => {
    const restaurant = this.state.restaurant.find(
      restaurant => restaurant.id === id
    );

    API.likeRestaurant({
      yelpId: restaurant.id,
      name: restaurant.name,
      image_irl: restaurant.image_url,
      url: restaurant.url,
      categories: restaurant.categories,
      location: restaurant.location,
      price: restaurant.price,
      isLiked: true
    }).then(() => this.getRestaurants());
  };

  render() {
    return (
      <div>
        <MediaCard
          name={this.state.name}
          image={this.state.image_url}
          url={this.state.url}
          price={this.state.price}
          location={this.state.location}
          categories={this.state.categories}
          onClick={this.handleBtnClick}
        />
      </div>
    );
  }
}

export default Discover;
