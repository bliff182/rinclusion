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

function ChangeName(props) {
  const classes = useStyles();
  const {
    name,
    handleInputChange,
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
                marginTop:"150px",
                marginBottom:"100px"
            }}
        >
          <h5
            style={{
                float:'left'
            }}
          >Change Display Name:</h5>
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
        
        <Button
          variant="contained"
          style={{ backgroundColor: "red", float:"right" }}
          onClick={handleFormSubmit}
        >
          Change Name
        </Button>
        </Container>
      </form>
    </div>
  );
}

export default ChangeName;