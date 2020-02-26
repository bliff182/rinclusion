import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import RestaurantCard from "../components/Restaurant";
import Alert from "../components/Alert";

class Discover extends Component {
  state = {
    yelpId: "",
    name: "",
    image_url: "",
    url: "",
    price: "",
    location: {},
    categories: [],
    restuarants: [],
    current: {},
    index: 0
  };

  // When the component mounts, load the next restaurant to be displayed
  componentDidMount() {
    this.loadNextRestaurant();
  }

  handleBtnClick = event => {
    // event.preventDefault();
    this.setState({
      index: this.state.index + 1
    });
    this.loadNextRestaurant();
  };

  loadNextRestaurant() {
    API.getRestaurants()
      .then(res => {
        const {
          id,
          name,
          image_url,
          url,
          price,
          location,
          categories
        } = res.data[this.state.index];
        this.setState({
          yelpId: id,
          name: name,
          image_url: image_url,
          url: url,
          price: price,
          location: location,
          categories: categories,
          restaurants: res.data,
          current: res.data[this.state.index]
        });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  }

  handleLike = () => {
    // console.log(this.state);
    API.likeRestaurant({
      yelpId: this.state.yelpId,
      name: this.state.name,
      image_url: this.state.image_url,
      url: this.state.url,
      categories: this.state.categories,
      location: this.state.location,
      price: this.state.price,
      isLiked: true
    }).then(() => {
      this.setState({
        index: this.state.index + 1
      });
      this.loadNextRestaurant();
    });
  };

  handleDislike = () => {
    API.likeRestaurant({
      yelpId: this.state.yelpId,
      name: this.state.name,
      image_url: this.state.image_url,
      url: this.state.url,
      categories: this.state.categories,
      location: this.state.location,
      price: this.state.price,
      isLiked: false
    }).then(() => {
      this.setState({
        index: this.state.index + 1
      });
      this.loadNextRestaurant();
    });
  };

  render() {
    return (
      <div>
        {/* {this.state.current.map(restaurant => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            image_url={restaurant.image_url}
            url={restaurant.url}
            categories={restaurant.categories}
            location={restaurant.location}
            price={restaurant.price}
          />
        ))} */}
        <RestaurantCard
          id={this.state.id}
          name={this.state.name}
          image={this.state.image_url}
          url={this.state.url}
          price={this.state.price}
          location={this.state.location}
          categories={this.state.categories}
          onClickOne={this.handleLike}
          onClickTwo={this.handleDislike}
        />
      </div>
    );
  }
}

export default Discover;
