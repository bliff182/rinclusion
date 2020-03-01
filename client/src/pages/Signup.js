import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import FormC from "../components/Form";
import fire from "../config/Fire";
// import Logo from "../components/Logo";

class Signup extends Component {
  state = {
    email: "",
    name: "",
    password: "",
    confirmPass: "",
    redirect: false
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
      alert("Please fill out every field");
    } else if (this.state.password.length < 6) {
      alert(`Please choose a more secure password`);
    } else if (!this.state.email.includes("@", ".")) {
      alert(
        "Invalid email, please ensure the email is in the format of 'user@email.com'"
      );
    } else if (
      !this.state.password.match(/\d+/g) ||
      !this.state.password.match(/[a-zA-Z]/)
    ) {
      alert("Please ensure the password contains letters and numbers");
    } else if (this.state.password !== this.state.confirmPass) {
      alert("Passwords do not match");
    } else {
      fire
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error => {
          const errorCode = error.errorCode;
          const errorMessage = error.errorMessage;
          console.log(errorCode);
          console.log(errorMessage);
          this.setState({
            name: "",
            email: "",
            password: "",
            confirmPass: "",
            redirect: true
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

  render() {
    return (
      <div>
        {this.state.redirect === true ? (
          <Redirect to="preferences" />
        ) : (
          <FormC
            email={this.state.email}
            name={this.state.name}
            password={this.state.password}
            confirmPass={this.state.confirmPass}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        )}
      </div>
    );
  }
}

export default Signup;
