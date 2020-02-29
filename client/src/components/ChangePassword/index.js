import React, { Component } from "react";
import * as firebase from "firebase";
// import SettingsForm from "../components/SettingsForm";
// import API from "../utils";
import ChangePass from "./change.js"

class Settings extends Component {
  state = {
    password: "",
    confirmPass: ""
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
    if (!this.state.password) {
      alert("Please fill out every field");
    } else if (this.state.password.length < 6) {
      alert(`Please choose a more secure password`);
    } else if (
      !this.state.password.match(/\d+/g) ||
      !this.state.password.match(/[a-zA-Z]/)
    ) {
      alert("Please ensure the password contains letters and numbers");
    } else if (this.state.password !== this.state.confirmPass) {
      alert("Passwords do not match");
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
          password: "",
          confirmPass: ""
        });
      });

      
      this.setState({
        password: "",
        confirmPass: ""
      });
    }
  };

  render() {
    return (
      <div>
      <ChangePass 
        password={this.state.password}
        confirmPass={this.state.confirmPass}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
      />
      </div>
    );
  }
}

export default Settings;
