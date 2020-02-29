import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

function SettingsForm(props) {
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
        style={
          ({ textAlign: "center" },
          { padding: "50px" },
          { maxWidth: "100%" },
          { marginTop: "30px" })
        }
      >
        <Container>
          <p>Change Display Name:</p>
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
          <h4>Change Email:</h4>
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
          hello1
        </Button>
        <p style={({ textAlign: "center" }, { fontSize: "12px" })}>
          Already have an account?
        </p>
        <a
          style={({ textAlign: "center" }, { fontSize: "12px" })}
          href="/Login"
        >
          hello
        </a>
      </form>
    </div>
  );
}

export default SettingsForm;
