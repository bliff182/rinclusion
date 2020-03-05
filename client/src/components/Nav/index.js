import React, { Component } from "react";
import MenuAppBar from "./nav.js";
import fire from "../../config/Fire";
import { MenuItem } from "@material-ui/core";

class NavBar extends Component {
  state = {
    user: fire.auth().currentUser,
    currentName: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentWillMount() {
    this.getCurrentInfo();
  }

  getCurrentInfo = () => {
    this.setState({
      currentName: this.state.user.displayName
    });
  };

  render() {
    return (
      <div>
        <MenuAppBar
          currentName={this.state.user.displayName}
          getCurrentName={this.getCurrentInfo}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default NavBar;
