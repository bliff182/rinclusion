import React, { Component }  from "react";
import FormLogin from "../components/Login";
import Logo from "../components/Logo";
import * as firebase from "firebase";


class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 30);
    }

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.email || !this.state.password) {
      alert("Please fill out every field");
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error => {
          const errorCode = error.errorCode;
          const errorMessage = error.errorMessage;
          console.log(errorCode);
          console.log(errorMessage);
          this.setState({
            email: "",
            password: ""
          });
        });
    }
  };

  render() {
    return (
      <div>
      <Logo></Logo>
      <FormLogin
        email={this.state.email}
        password={this.state.password}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
      />
      </div>
    );
  }
}

export default Login;
