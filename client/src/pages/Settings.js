import React, { Component } from "react";
// import SettingsForm from "../components/SettingsForm";
// import API from "../utils";
import SettingsBar from "../components/SettingsBar";
import ChangeEmail from "../components/ChangeEmail";
import ChangeName from "../components/ChangeName";
import ChangePass from "../components/ChangePassword";
import fire from "../config/Fire";
// import Col from "react-bootstrap/Col";
// import Toast from "react-bootstrap/Toast";
// import ToastBody from "react-bootstrap/ToastBody";

class Settings extends Component {
  state = {
    user: fire.auth().currentUser,
    name: "",
    email: "",
    currentPass: "",
    newPass: "",
    confirmPass: "",
    toast: ""
  };

  componentDidMount() {
    console.log(this.state.user);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleNameChange = event => {
    event.preventDefault();
    this.state.user
      .updateProfile({
        displayName: this.state.name
      })
      .then(() => {
        alert("Name updated.");
        console.log(this.state.user);
        this.setState({
          name: ""
        });
      })
      .catch(err => console.log(err));
  };

  handleEmailChange = event => {
    event.preventDefault();
    if (!this.state.email) {
      alert("Please fill out every field");
    } else if (!this.state.email.includes("@", ".")) {
      alert(
        'Invalid email, please ensure the amil in in the format of "user@email.com"'
      );
    } else {
      this.state.user
        .updateEmail(this.state.email)
        .then(() => {
          alert("Email successfully changed.");
          this.setState({
            email: ""
          });
          console.log(this.state.user);
        })
        .catch(error => console.log(error));
    }
  };

  handlePasswordChange = event => {
    event.preventDefault();
    if (
      !this.state.currentPass ||
      !this.state.newPass ||
      !this.state.confirmPass
    ) {
      alert("Please fill out every field.");
    } else if (this.state.newPass.length < 6) {
      alert("Please choose a more secure password.");
    } else if (
      !this.state.newPass.match(/\d+/g) ||
      !this.state.newPass.match(/[a-zA-Z]/)
    ) {
      alert("Please ensure the new password contains letters and numbers.");
    } else if (this.state.newPass !== this.state.confirmPass) {
      alert("Passwords do not match.");
    } else {
      this.state.user
        .updatePassword(this.state.newPass)
        .then(() => {
          alert("Password succesfully changed.");
          this.setState({
            currentPass: "",
            newPass: "",
            confirmPass: ""
          });
        })
        .catch(error => console.log(error));
    }
  };

  render() {
    return (
      <div>
        <SettingsBar />
        <ChangeName
          name={this.state.name}
          handleInputChange={this.handleInputChange}
          handleNameChange={this.handleNameChange}
        />
        <ChangeEmail
          email={this.state.email}
          handleInputChange={this.handleInputChange}
          handleEmailChange={this.handleEmailChange}
        />
        <ChangePass
          currentPass={this.state.currentPass}
          newPass={this.state.newPass}
          confirmPass={this.state.confirmPass}
          handleInputChange={this.handleInputChange}
          handlePasswordChange={this.handlePasswordChange}
        />
      </div>
    );
  }
}

export default Settings;
