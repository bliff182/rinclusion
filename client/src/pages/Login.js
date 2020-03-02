import React, { Component } from "react";
import FormLogin from "../components/Login";
import Logo from "../components/Logo";
import fire from "../config/Fire";
// import Toast from "react-bootstrap/Toast";
import Alert from "react-bootstrap/Alert";

class LogIn extends Component {
  state = {
    email: "",
    password: "",
    visible: false,
    message: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    // if (name === "password") {
    //   value = value.substring(0, 30);
    // }
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.email || !this.state.password) {
      // alert("Please fill out every field");
      this.setState({
        visible: true,
        message: "You didn't fill out a required field!"
      });
    } else {
      fire
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          this.setState({
            visible: true,
            message: errorMessage
          });
        });
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
        <Logo />
        <FormLogin
          email={this.state.email}
          password={this.state.password}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Alert
          variant="danger"
          onClose={this.toggleAlert}
          dismissible
          show={this.state.visible}
          style={{ position: "fixed", maxWidth: "300px" }}
        >
          <Alert.Heading>Oh no!</Alert.Heading>
          <p>{this.state.message}</p>
        </Alert>
      </div>
    );
  }
}

export default LogIn;
