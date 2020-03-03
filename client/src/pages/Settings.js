import React, { Component } from "react";
// import SettingsForm from "../components/SettingsForm";
// import API from "../utils";
import SettingsBar from "../components/SettingsBar";
import ChangeEmail from "../components/ChangeEmail";
import ChangeName from "../components/ChangeName";
import ChangePass from "../components/ChangePassword";
import fire from "../config/Fire";
// import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

class Settings extends Component {
  state = {
    user: fire.auth().currentUser,
    name: "",
    email: "",
    currentPass: "",
    newPass: "",
    confirmPass: "",
    variant: "",
    visible: false,
    heading: "",
    message: ""
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
    if (!this.state.name) {
      this.setState({
        variant: "danger",
        visible: true,
        heading: "Oh no!",
        message: "You didn't type anything!"
      });
    } else {
      event.preventDefault();
      this.state.user
        .updateProfile({
          displayName: this.state.name
        })
        .then(() => {
          // alert( "Name updated.");
          // console.log(this.state.user);
          this.setState({
            name: "",
            variant: "success",
            visible: true,
            heading: "Hooray!",
            message: "Name updated!"
          });
        })
        .catch(err => console.log(err));
    }
  };

  handleEmailChange = event => {
    event.preventDefault();
    if (!this.state.email) {
      // alert("Please fill out every field");
      this.setState({
        variant: "danger",
        visible: true,
        heading: "Oh no!",
        message: "You didn't type anything!"
      });
    } else if (!this.state.email.includes("@", ".")) {
      // alert(
      //   'Invalid email, please ensure the amil in in the format of "user@email.com"'
      // );
      this.setState({
        variant: "danger",
        visible: true,
        heading: "Oh no!",
        message: "That email is invalid!"
      });
    } else {
      this.state.user
        .updateEmail(this.state.email)
        .then(() => {
          // alert("Email successfully changed.");
          this.setState({
            email: "",
            variant: "success",
            visible: true,
            heading: "Hooray!",
            message: "Email updated!"
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
      // alert("Please fill out every field.");
      this.setState({
        variant: "danger",
        visible: true,
        heading: "Oh no!",
        message: "You didn't fill out every field!"
      });
    } else if (this.state.newPass.length < 6) {
      // alert("Please choose a more secure password.");
      this.setState({
        variant: "danger",
        visible: true,
        heading: "Oh no!",
        message: "That password isn't secure enough!"
      });
    } else if (
      !this.state.newPass.match(/\d+/g) ||
      !this.state.newPass.match(/[a-zA-Z]/)
    ) {
      // alert("Please ensure the new password contains letters and numbers.");
      this.setState({
        variant: "danger",
        visible: true,
        heading: "Oh no!",
        message: "That password doesn't contain both letters and numbers!"
      });
    } else if (this.state.newPass !== this.state.confirmPass) {
      // alert("Passwords do not match.");
      this.setState({
        variant: "danger",
        visible: true,
        heading: "Oh no!",
        message: "Those passwords don't match!"
      });
    } else {
      this.state.user
        .updatePassword(this.state.newPass)
        .then(() => {
          // alert("Password succesfully changed.");
          this.setState({
            currentPass: "",
            newPass: "",
            confirmPass: "",
            variant: "success",
            visible: true,
            heading: "Hooray!",
            message: "Password successfully changed!"
          });
        })
        .catch(error => console.log(error));
    }
  };

  toggleAlert = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    return (
      <div>
        <SettingsBar />
        <div
          style={{
            backgroundColor: "white",
            margin: "auto",
            border: "1px solid black",
            borderRadius: "10px",
            boxShadow: "3px 2px 5px black"
          }}
        >
          <ChangeName
            name={this.state.name}
            handleInputChange={this.handleInputChange}
            handleNameChange={this.handleNameChange}
          />
          <hr />
          <ChangeEmail
            email={this.state.email}
            handleInputChange={this.handleInputChange}
            handleEmailChange={this.handleEmailChange}
          />
          <hr />
          <ChangePass
            currentPass={this.state.currentPass}
            newPass={this.state.newPass}
            confirmPass={this.state.confirmPass}
            handleInputChange={this.handleInputChange}
            handlePasswordChange={this.handlePasswordChange}
          />
        </div>
        <Alert
          variant={this.state.variant}
          onClose={this.toggleAlert}
          dismissible
          show={this.state.visible}
          style={{ position: "fixed", top: "80px", right: "30%", zIndex: 2 }}
        >
          <Alert.Heading>{this.state.heading}</Alert.Heading>
          <p>{this.state.message}</p>
        </Alert>
      </div>
    );
  }
}

export default Settings;
