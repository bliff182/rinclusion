import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import * as firebase from "firebase";


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
        
        
        <Container
            style={{
                marginTop:"50px",
                marginBottom:'50px'
            }}
        >
        <h5
            style={{
                float:"left"
            }}
        >Change Password:</h5>
          <TextField
            style={{ marginBottom: "20px", marginRight:"30px" }}
            id="outlined-basic"
            variant="outlined"
            value={password}
            name="password"
            onChange={handleInputChange}
            type="password"
            label="Password"
          />
        
       
          <TextField
            style={{ marginBottom: "20px", marginRight:"30px" }}
            id="outlined-basic"
            variant="outlined"
            value={confirmPass}
            name="confirmPass"
            onChange={handleInputChange}
            type="password"
            label="Confirm password"
          />
        
        <Button
          variant="contained"
          style={{ backgroundColor: "red", float:"right" }}
          onClick={handleFormSubmit}
        >
          Change Password
        </Button>
        </Container>
      </form>
    </div>
  );
}

export default ChangePass;