import React, { Component } from "react";
import API from "../../utils/API";
import Alert from "../Alert";
import PrevLiked from "../Liked";
import SwipeableTemporaryDrawer from "../Leftbar";
import Container from "@material-ui/core/Container";

class LikedRestaurants extends Component {
  state = {
    restaurants: []
  };

  componentDidMount() {
    this.grabLikes();
  }

  grabLikes() {
    API.getLikes()
      .then(res => {
        this.setState({
          restaurants: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SwipeableTemporaryDrawer grabLikes={this.grabLikes} />
          <PrevLiked restaurants={this.state.restaurants} />
        </Container>
      </div>
    );
  }
}

export default LikedRestaurants;
