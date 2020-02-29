<<<<<<< HEAD
import React, { Component } from "react";
=======
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Divider from "@material-ui/core/Divider";
>>>>>>> bb8e2df3a69ce0c7c09c33144ddf60bdc16c4659
import API from "../../utils/API";
import Alert from "../Alert";
import PrevLiked from "../Liked";
import SwipeableTemporaryDrawer from "../Leftbar";
import Container from "@material-ui/core/Container";

<<<<<<< HEAD
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
=======
const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <PrevLiked />
    </div>
  );

  return (
    <div>
      <MenuIcon onClick={toggleDrawer("left", true)} href="/Liked"></MenuIcon>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
        // handlegetlikedrestaurants={this.handlegetlikedrestaurants}
      >
        {sideList("left")}
      </SwipeableDrawer>
    </div>
  );
>>>>>>> bb8e2df3a69ce0c7c09c33144ddf60bdc16c4659
}

export default LikedRestaurants;
