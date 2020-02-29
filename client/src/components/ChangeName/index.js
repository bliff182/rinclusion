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

function ChangeName(props) {
  const classes = useStyles();
  const { name, handleInputChange, handleNameChange } = props;
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
            marginTop: "150px",
            marginBottom: "100px"
          }}
        >
          <h6
            style={{
              float: "left"
            }}
          >
            Change Display Name:
          </h6>
          <Container
            style={{
              width: "300px",
              textAlign: "center"
              // margin:"0"
            }}
          >
            <TextField
              style={{ marginBottom: "20px" }}
              id="standard-basic"
              variant="standard"
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              label="Name"
            />
          </Container>
          <Button
            variant="contained"
            style={{
              backgroundColor: "gray",
              textAlign: "right",
              marginTop: "10px"
            }}
            onClick={handleNameChange}
          >
            Change Name
          </Button>
        </Container>
      </form>
    </div>
  );
}

export default ChangeName;
