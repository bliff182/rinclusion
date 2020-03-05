import React, { Component } from "react";
import API from "../../utils/API";
import PrevViewed from "../Viewed";
import Container from "@material-ui/core/Container";

class LikedRestaurants extends Component {
  state = {
    viewed: []
  };

  componentDidMount() {
    this.grabViewed();
  }

  grabViewed() {
    API.getViewed()
      .then(res => {
        this.setState({
          viewed: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Container>
          <PrevViewed viewed={this.state.viewed} />
        </Container>
      </div>
    );
  }
}

export default LikedRestaurants;
