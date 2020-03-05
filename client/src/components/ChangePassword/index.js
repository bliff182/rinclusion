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

function ChangePass(props) {
  const classes = useStyles();
  const {
    currentPass,
    newPass,
    confirmPass,
    handleInputChange,
    handlePasswordChange
  } = props;

  return (
    <div style={{ textAlign: "center" }}>
      <form
        className={classes.root}
        autoComplete="off"
        style={
          ({ textAlign: "center" }, { padding: "50px" }, { marginTop: "30px" })
        }
      >
        <Container
          style={{
            marginTop: "50px",
            marginBottom: "50px"
          }}
        >
          <h6
            style={{
              float: "left"
            }}
          >
            Change Password:
          </h6>
          <Container
            style={{
              width: "300px",
              textAlign: "center"
            }}
          >
            <TextField
              id="standard-basic"
              variant="standard"
              value={currentPass}
              name="currentPass"
              onChange={handleInputChange}
              type="password"
              label="Current Password"
            />
            <TextField
              id="standard-basic"
              variant="standard"
              value={newPass}
              name="newPass"
              onChange={handleInputChange}
              type="password"
              label="New Password"
            />

            <TextField
              id="standard-basic"
              variant="standard"
              value={confirmPass}
              name="confirmPass"
              onChange={handleInputChange}
              type="password"
              label="Re-enter New"
            />
          </Container>
          <Button
            variant="contained"
            style={{
              backgroundColor: "gray",
              textAlign: "right",
              marginTop: "30px"
            }}
            onClick={handlePasswordChange}
          >
            Change Password
          </Button>
        </Container>
      </form>
    </div>
  );
}

export default ChangePass;
