import React, { Component } from "react";
import * as firebase from "firebase";
// import API from "../utils";
import ChangeName from "./change.js"


class Settings extends Component {
  state = {
    name: ""
  };

  // grab current password, username, display name
  getUserInfo = () => {

  }

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.name) {
      alert("Please fill out every field");
    } else {
      firebase
      .auth()
      // .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        const errorCode = error.errorCode;
        const errorMessage = error.errorMessage;
        console.log(errorCode);
        console.log(errorMessage);
        this.setState({
          name: ""
        });
      });

      
      this.setState({
        name: ""
      });
    }
  };

  render() {
    return (
      <div>
      <ChangeName 
        name={this.state.name}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
      />
      </div>
    );
  }
}

export default Settings;
