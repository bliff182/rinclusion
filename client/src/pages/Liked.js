import React, { Component } from "react";
import Alert from "../components/Alert";
import PrevLiked from "../components/Liked";
import Container from "@material-ui/core/Container";
import PrevDisliked from "../components/Disliked";
import API from "../utils/API";
import Modal from "../components/Modal"
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Tooltip from '@material-ui/core/Tooltip';
// import Modal from '@material-ui/core/Modal';



// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';



class LikedRestaurants extends Component {
  state = {
    liked: [],
    disliked: [],
    modalOn: false,
    comments: "",
    stars: "",
    haveTried: false,
    bookmark: false,
    error: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  componentDidMount() {
    this.grabLikes();
    this.grabDislikes();
  }

  toggleModal = () => {
    this.setState({
      modalOn: !this.state.modalOn
    });
  };

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
            modalOn={this.state.modalOn}
          />
          <PrevDisliked
            style={{
              width: "50px",
              float: "right"
            }}
            disliked={this.state.disliked}
            modalOn={this.state.modalOn}
            deleteRestaurant={this.deleteRestaurant}
          />
          <Modal
            onClose={this.toggleModal}
            modalOn={this.state.modalOn}
          />
        </Container>
      </div>
    );
  }
}

export default LikedRestaurants;
