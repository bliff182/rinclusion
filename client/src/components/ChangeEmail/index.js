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

function ChangeEmail(props) {
  const classes = useStyles();
  const { email, handleInputChange, handleEmailChange } = props;
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
        <Container style={{ marginTop: "50px", marginBottom: "100px" }}>
          <h6 style={{ float: "left" }}>Change Email:</h6>
          <Container style={{ width: "300px", textAlign: "center" }}>
            <TextField
              style={{ marginBottom: "20px" }}
              id="standard-basic"
              variant="standard"
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              label="Email"
            />
          </Container>
          <Button
            variant="contained"
            style={{
              backgroundColor: "gray",
              textAlign: "right",
              marginTop: "10px"
            }}
            onClick={handleEmailChange}
          >
            Change Email
          </Button>
        </Container>
      </form>
    </div>
  );
}

export default ChangeEmail;
