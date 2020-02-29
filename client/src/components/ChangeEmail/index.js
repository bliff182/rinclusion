import React, { Component } from "react";
import * as firebase from "firebase";
// import SettingsForm from "../components/SettingsForm";
// import API from "../utils";
import ChangeEmail from "./change.js"



class Settings extends Component {
  state = {
    email: ""
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
    if (!this.state.email) {
      alert("Please fill out every field");
    } else if (!this.state.email.includes("@", ".")) {
      alert(
        "Invalid email, please ensure the email is in the format of 'user@email.com'"
      );
    } else {
      firebase
      .auth()
    //   .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        const errorCode = error.errorCode;
        const errorMessage = error.errorMessage;
        console.log(errorCode);
        console.log(errorMessage);
        this.setState({
          email: ""
        });
      });

      
      this.setState({
        email: ""
      });
    }
  };

  render() {
    return (
      <div>
      <ChangeEmail
        email={this.state.email}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
      />
      </div>
    );
  }
}

export default Settings;
