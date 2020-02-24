import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import MediaCard from "../components/Restaurant";
import Alert from "../components/Alert";

// class Discover extends Component {
//   state = {
//     image: "",
//     match: false,
//     matchCount: 0
//   };

//   // When the component mounts, load the next dog to be displayed
//   componentDidMount() {
//     this.loadNextRestaurant();
//   }

//   handleBtnClick = event => {
//     // Get the data-value of the clicked button
//     const btnType = event.target.attributes.getNamedItem("data-value").value;
//     // Clone this.state to the newState object
//     // We'll modify this object and use it to set our component's state
//     const newState = { ...this.state };

//     if (btnType === "pick") {
//       // Set newState.match to either true or false depending on whether or not the user likes the place
//     } else {
//       // If we thumbs down'ed the dog, we haven't matched with it
//       newState.match = false;
//     }
//     // Replace our component's state with newState, load the next dog image
//     this.setState(newState);
//     this.loadNextRestaurant();
//   };

//   loadNextRestaurant = () => {
//     API.getRestaurants()
//       .then(res =>
//         this.setState({
//           image: res.data.image_url
//         })
//       )
//       .catch(err => console.log(err));
//     console.log(this.state.image);
//   };

//   render() {
//     return (
//       <div>
//         {/* <Card image={this.state.image} handleBtnClick={this.handleBtnClick} /> */}
//         <MediaCard />
//       </div>
//     );
//   }
// }

// export default Discover;

class Discover extends Component {
  state = {
    // name: "",
    // image_url: "",
    // url: "",
    // price: "",
    // location: {},
    // categories: [],
    restuarants: [],
    index: 0
  };

  // When the component mounts, load the next restaurant to be displayed
  componentDidMount() {
    this.loadNextRestaurant();
    console.log(this.state);
  }

  loadNextRestaurant = () => {
    API.getRestaurants()
      .then(res => {
        // const {
        //   name,
        //   image_url,
        //   url,
        //   price,
        //   location,
        //   categories
        // } = res.data.businesses[this.state.index];
        // this.setState({
        //   name: name,
        //   image_url: image_url,
        //   url: url,
        //   price: price,
        //   location: location,
        //   categories: categories
        // });
        this.setState({
          restaurants: res.data.businesses
        });
      })
      .catch(err => console.log(err));
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
        />
      </div>
    );
  }
}

export default Discover;
