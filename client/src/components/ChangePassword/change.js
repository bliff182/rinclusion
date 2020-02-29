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
        //   { maxWidth: "100%" },
          { marginTop: "30px" })
        }
      >
        
        
        <Container
            style={{
                marginTop:"50px",
                marginBottom:'50px'
            }}
        >
        <h6
            style={{
                float:"left"
            }}
        >Change Password:</h6>
        <Container 
            style={{
                width:"300px",
                textAlign:"center",
                // margin:"0"
            }}
        >
        <TextField
            // style={{marginRight:"30px" }}
            id="standard-basic"
            variant="standard"
            value={password}
            name="password"
            onChange={handleInputChange}
            type="password"
            label="Current Password"
          />

          <TextField
            // style={{marginRight:"30px" }}
            id="standard-basic"
            variant="standard"
            value={password}
            name="password"
            onChange={handleInputChange}
            type="password"
            label="New Password"
          />
        
       
          <TextField
            // style={{marginRight:"30px", }}
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
          style={{ backgroundColor: "gray", textAlign:"right", marginTop:"30px"}}
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