import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import "./style.css";

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function Form(props) {

  const classes = useStyles();
  const { userName, email, password, handleInputChange, confirmPass, handleFormSubmit } = props
  return (
    <div>
      <form className={classes.root} autoComplete="off">
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          label="Username"
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          label="Email"
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={password}
          name="password"
          onChange={handleInputChange}
          type="password"
          label="Password"
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={confirmPass}
          name="confirmPass"
          onChange={handleInputChange}
          type="password"
          label="Confirm password"
        />
        <Button variant="contained" color="primary" onClick={handleFormSubmit}>Submit</Button>
      </form>
    </div>
  )
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
      alert("Invalid email, please ensure the email is in the format of 'user@email.com'")
    } else if (!this.state.password.match(/\d+/g) || !this.state.password.match(/[a-zA-Z]/)) {
      alert("Please ensure the password contains letters and numbers")
    } else if (this.state.password !== this.state.confirmPass) {
      alert("Passwords do not match")
    }

    this.setState({
      userName: "",
      email: "",
      password: "",
      confirmPass: ""
    });
  };

  render() {
    return (
      <Form email={this.state.email} userName={this.state.userName} password={this.state.password} confirmPass={this.state.confirmPass} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
    )
  }
}

export default FormC;