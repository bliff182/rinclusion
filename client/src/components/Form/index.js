import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import * as firebase from "firebase";

// import "./style.css";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

function Form(props) {
  const classes = useStyles();
  const {
    userName,
    email,
    password,
    handleInputChange,
    confirmPass,
    handleFormSubmit
  } = props;
  return (
    <div style={{ textAlign: "center" }}>
      <form
        className={classes.root}
        autoComplete="off"
        style={
          ({ textAlign: "center" },
          { padding: "50px" },
          { maxWidth: "100%" },
          { marginTop: "30px" })
        }
      >
        <Container>
          <TextField
            style={{ marginBottom: "20px" }}
            id="outlined-basic"
            variant="outlined"
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            label="Username"
          />
        </Container>
        <Container>
          <TextField
            style={{ marginBottom: "20px" }}
            id="outlined-basic"
            variant="outlined"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            label="Email"
          />
        </Container>
        <Container>
          <TextField
            style={{ marginBottom: "20px" }}
            id="outlined-basic"
            variant="outlined"
            value={password}
            name="password"
            onChange={handleInputChange}
            type="password"
            label="Password"
          />
        </Container>
        <Container>
          <TextField
            style={{ marginBottom: "20px" }}
            id="outlined-basic"
            variant="outlined"
            value={confirmPass}
            name="confirmPass"
            onChange={handleInputChange}
            type="password"
            label="Confirm password"
          />
        </Container>
        <Button
          variant="contained"
          style={{ backgroundColor: "red" }}
          onClick={handleFormSubmit}
        >
          Sign up!
        </Button>
        <p style={({ textAlign: "center" }, { fontSize: "12px" })}>Already have an account?</p>
        <a style={({ textAlign: "center" }, { fontSize: "12px" })} href="/Login">
          Log in
        </a>
      </form>
    </div>
  );
}

class FormC extends Component {
  state = {
    email: "",
    userName: "",
    password: "",
    confirmPass: ""
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
    if (!this.state.userName || !this.state.email || !this.state.password) {
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
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error => {
          const errorCode = error.errorCode;
          const errorMessage = error.errorMessage;
          console.log(errorCode);
          console.log(errorMessage);
          this.setState({
            userName: "",
            email: "",
            password: "",
            confirmPass: ""
          });
        });

      // this.setState({
      //   userName: "",
      //   email: "",
      //   password: "",
      //   confirmPass: ""
      // });
    }
  };

  render() {
    return (
      <Form
        email={this.state.email}
        userName={this.state.userName}
        password={this.state.password}
        confirmPass={this.state.confirmPass}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
      />
    );
  }
}

export default FormC;
