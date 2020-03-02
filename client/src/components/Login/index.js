import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
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
          maxWidth: "333px",
          marginTop: "30px",
          backgroundColor: "white",
          margin: "auto",
          border: "1px solid black",
          borderRadius: "10px",
          boxShadow: "5px 5px 5px black"
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
