import React, { Component } from "react";
import * as firebase from "firebase";
// import SettingsForm from "../components/SettingsForm";
// import API from "../utils";
import ChangeEmail from "./change.js"



class Settings extends Component {
  state = {
    newEmail: "",
    currentEmail: ""
  };

  // grab current password, username, display name
  getUserInfo = () => {
    API.getUserEmail()
    .then(res => {
      this.setState({
        currentEmail: res.data
      });
    })
    .catch(err => console.log(err));
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
    if (!this.state.newEmail) {
      alert("Please fill out every field");
    } else if (!this.state.newEmail.includes("@", ".")) {
      alert(
        "Invalid email, please ensure the email is in the format of 'user@email.com'"
      );
    } else {
      firebase
      .auth()
    //   .createUserWithEmailAndPassword(this.state.newEmail, this.state.password)
      .catch(error => {
        const errorCode = error.errorCode;
        const errorMessage = error.errorMessage;
        console.log(errorCode);
        console.log(errorMessage);
        this.setState({
          newEmail: ""
        });
      });

      
      this.setState({
        newEmail: ""
      });
    }
  };

  render() {
    return (
      <div>
      <ChangeEmail
        newEmail={this.state.newEmail}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
      />
      </div>
    );
  }
}

export default Settings;
