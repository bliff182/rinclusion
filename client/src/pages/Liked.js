import React, { Component } from "react";
import Alert from "../components/Alert";
import PrevLiked from "../components/Liked";
import Container from "@material-ui/core/Container";
import PrevDisliked from "../components/Disliked";
import API from "../utils/API";
import Modal from "../components/Modal"


class LikedRestaurants extends Component {
  state = {
    liked: [],
    disliked: [],
    comments: "hello",
    stars: "",
    haveTried: false,
    bookmarked: false,
    error: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSave = event => {
    // event.preventDefault();
    console.log(this.state.comments)
    event.preventDefault();
      API.update({
        comments: this.state.comments
      })
      .then(() => {
        // alert( "Name updated.");
        console.log(this.state.comments);
        // this.setState({
        //   name: "",
        //   variant: "success",
        //   visible: true,
        //   heading: "Hooray!",
        //   message: "Name updated!"
        // });
      })
      .catch(err => console.log(err))
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

  deleteRestaurant = id => {
    API.deleteLike(id)
      .then(res => this.componentDidMount())
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
            bookmarked={this.state.bookmarked}

          />
          <PrevDisliked
            style={{
              width: "50px",
              float: "right"
            }}
            disliked={this.state.disliked}
            deleteRestaurant={this.deleteRestaurant}
            bookmarked={this.state.bookmarked}

          />
          <Modal
            comments={this.state.comments}
            stars={this.state.stars}
            haveTried={this.state.haveTried}
            handleInputChange={this.handleInputChange}
            handleSave={this.handleSave}
          />
        </Container>
      </div>
    );
  }
}

export default LikedRestaurants;
