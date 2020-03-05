import React, { Component } from "react";
import Alert from "../components/Alert";
import PrevLiked from "../components/Liked";
import Container from "@material-ui/core/Container";
import PrevDisliked from "../components/Disliked";
import API from "../utils/API";

class LikedRestaurants extends Component {
  state = {
    liked: [],
    disliked: [],
    error: ""
  };

  componentDidMount() {
    this.grabLikes();
    this.grabDislikes();
  }

  grabLikes() {
    API.getLikes()
      .then(res => {
        this.setState({
          liked: res.data
        });
      })
      .catch(err => console.log(err));
  }

  grabDislikes() {
    API.getDislikes()
      .then(res => {
        this.setState({
          disliked: res.data
        });
      })
      .catch(err => console.log(err));
  }

  markAsLiked = id => {
    API.markLiked(id)
      .then(() => this.componentDidMount())
      .catch(err => console.log(err));
  };

  markAsDisliked = id => {
    API.markDisliked(id)
      .then(() => this.componentDidMount())
      .catch(err => console.log(err));
  };

  deleteRestaurant = id => {
    API.deleteLike(id)
      .then(() => this.componentDidMount())
      .catch(err => console.log(err));
  };

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
          {/* <Left grabLikes={this.grabLikes} /> */}
          <PrevLiked
            style={{
              float: "left",
              width: "50px"
            }}
            liked={this.state.liked}
            deleteRestaurant={this.deleteRestaurant}
            markAsDisliked={this.markAsDisliked}
          />
          <PrevDisliked
            style={{
              width: "50px",
              float: "right"
            }}
            disliked={this.state.disliked}
            deleteRestaurant={this.deleteRestaurant}
            markAsLiked={this.markAsLiked}
          />
        </Container>
      </div>
    );
  }
}

export default LikedRestaurants;
