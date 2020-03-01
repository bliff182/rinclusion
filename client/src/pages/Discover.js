import React, { Component } from "react";
import API from "../utils/API";
import RestaurantCard from "../components/Restaurant";
import NavBar from "../components/Nav";
// import Alert from "../components/Alert";
// import Card from "../components/Card";

class Discover extends Component {
  state = {
    query: {
      location: localStorage.getItem("zipcode"),
      price: localStorage.getItem("price"),
      categories: localStorage.getItem("cuisines")
    },
    yelpId: "",
    name: "",
    image_url: "",
    url: "",
    price: "",
    location: {},
    categories: [],
    restaurants: [],
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

  loadNextRestaurant = () => {
    API.getRestaurants(this.state.query)
      .then(res => {
        const { id, name, image_url, url, price, location } = res.data[
          this.state.index
        ];
        this.setState({
          yelpId: id,
          name: name,
          image_url: image_url,
          url: url,
          price: price,
          location: location,
          restaurants: res.data,
          current: res.data[this.state.index]
        });
        const currentCategories = this.state.current.categories.map(result => {
          return result.title;
        });
        const formattedCategories = currentCategories.join(", ");
        this.setState({ categories: formattedCategories });
      })
      .catch(err => console.log(err));
  };

  handleLike = () => {
    API.likeOrDislike({
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
    API.likeOrDislike({
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
    console.log(this.state);
    return (
      <div>
        <NavBar />
        <RestaurantCard
          // style={{ marginTop: "400px" }}
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
