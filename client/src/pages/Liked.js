import React, { Component } from "react";
import API from "../utils/API";
import Alert from "../components/Alert";
import PrevLiked from "../components/Liked";
// import Left from "../components/Leftbar";
import Container from "@material-ui/core/Container";
import PrevDisliked from "../components/Disliked"

class LikedRestaurants extends Component {
  state = {
    liked: [],
    disliked: []
  };

  componentDidMount() {
    this.grabLikes();
    this.gradDislikes();
    console.log(this.state)
  }

  grabLikes() {
    API.getLikes()
      .then(res => {
        this.setState({
          liked: res.data
        });
        console.log(res.data)
      })
      
      .catch(err => console.log(err));
  }

  
  gradDislikes() {
    API.getDislikes()
      .then(res => {
        this.setState({
          disliked: res.data
        })
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
          {/* <Left grabLikes={this.grabLikes} /> */}
          <PrevLiked  
            style={{
              float:"left",
              width:"50px"
            }}
          liked={this.state.liked} />
          <PrevDisliked   
            style={{
              width:"50px",
              float:"right"
            }}
          disliked={this.state.disliked} />
        </Container>
      </div>
    );
  }
}

export default LikedRestaurants;
