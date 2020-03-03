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

function FormC(props) {
  const classes = useStyles();
  const {
    name,
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
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            label="Name"
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
        <p style={({ textAlign: "center" }, { fontSize: "12px" })}>
          Already have an account?
        </p>
        <a
          style={({ textAlign: "center" }, { fontSize: "12px" })}
          href="/Login"
        >
          Log in
        </a>
      </form>
    </div>
  );
}

export default FormC;
