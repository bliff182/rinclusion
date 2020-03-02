import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import FormC from "../components/Form";
import fire from "../config/Fire";
// import Logo from "../components/Logo";
import Alert from "react-bootstrap/Alert";

class Signup extends Component {
  state = {
    email: "",
    name: "",
    password: "",
    confirmPass: "",
    redirect: false,
    visible: false,
    message: ""
  };

  componentDidMount = () => {
    this.setState({
      redirect: false
    });
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
    if (!this.state.name || !this.state.email || !this.state.password) {
      // alert("Please fill out every field");
      this.setState({
        visible: true,
        message: "You didn't fill out every field!"
      });
    } else if (this.state.password.length < 6) {
      // alert(`Please choose a more secure password`);
      this.setState({
        visible: true,
        message: "That password isn't secure enough!"
      });
    } else if (!this.state.email.includes("@", ".")) {
      // alert(
      //   "Invalid email, please ensure the email is in the format of 'user@email.com'"
      // );
      this.setState({
        visible: true,
        message: "That email is invalid!"
      });
    } else if (
      !this.state.password.match(/\d+/g) ||
      !this.state.password.match(/[a-zA-Z]/)
    ) {
      // alert("Please ensure the password contains letters and numbers");
      this.setState({
        visible: true,
        message: "That password doesn't contain both letters and numbers!"
      });
    } else if (this.state.password !== this.state.confirmPass) {
      // alert("Passwords do not match");
      this.setState({
        visible: true,
        message: "Those passwords don't match!"
      });
    } else {
      fire
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          this.setState({
            // name: "",
            // email: "",
            // password: "",
            // confirmPass: "",
            // redirect: true,
            visible: true,
            message: errorMessage
          });
        });

      this.setState({
        name: "",
        email: "",
        password: "",
        confirmPass: ""
      });
    }
  };

  toggleAlert = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="preferences" />;
    }
    return (
      <div>
        {/* <Toast ref={(element) => {this.toast = element}} /> */}
        <FormC
          email={this.state.email}
          name={this.state.name}
          password={this.state.password}
          confirmPass={this.state.confirmPass}
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
          <Alert.Heading>Oh 0o!</Alert.Heading>
          <p>{this.state.message}</p>
        </Alert>
      </div>
    );
  }
}

export default Signup;
