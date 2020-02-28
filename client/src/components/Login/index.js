import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
// import * as firebase from "firebase";

// import "./style.css";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

function FormLogin(props) {
  const classes = useStyles();
  const { email, password, handleInputChange, handleFormSubmit } = props;
  return (
    <div style={{ textAlign: "center" }}>
      <form
        className={classes.root}
        autoComplete="off"
        style={{
          textAlign: "center",
          padding: "50px",
          maxWidth: "100%",
          marginTop: "30px"
        }}
      >
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
        <Button
          variant="contained"
          style={{ backgroundColor: "red" }}
          onClick={handleFormSubmit}
        >
          Log in
        </Button>
        <p style={{ textAlign: "center", fontSize: "12px", marginTop: "20px" }}>
          Don't have an account?
        </p>
        <a style={{ textAlign: "center", fontSize: "12px" }} href="/Signup">
          Sign up!
        </a>
      </form>
    </div>
  );
}

export default FormLogin;

// class FormLogin extends Component {
//   state = {
//     email: "",
//     password: ""
//   };

//   handleInputChange = event => {
//     let value = event.target.value;
//     const name = event.target.name;

//     if (name === "password") {
//       value = value.substring(0, 30);
//     }

//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (!this.state.email || !this.state.password) {
//       alert("Please fill out every field");
//     } else {
//       firebase
//         .auth()
//         .signInWithEmailAndPassword(this.state.email, this.state.password)
//         .catch(error => {
//           const errorCode = error.errorCode;
//           const errorMessage = error.errorMessage;
//           console.log(errorCode);
//           console.log(errorMessage);
//           this.setState({
//             email: "",
//             password: ""
//           });
//         });
//     }

//     // this.setState({
//     //   email: "",
//     //   password: ""
//     // });
//   };

//   render() {
//     return (
//       <Form
//         email={this.state.email}
//         password={this.state.password}
//         handleInputChange={this.handleInputChange}
//         handleFormSubmit={this.handleFormSubmit}
//       />
//     );
//   }
// }

// export default FormLogin;
