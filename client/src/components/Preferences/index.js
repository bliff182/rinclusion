import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import mexico from "../../img/mexican.jpg";
import all from "../../img/allFoods.jpg";
import breakfast from "../../img/breakfast.jpg";
import burger from "../../img/burger.jpg";
import chinese from "../../img/chinese.jpg";
import comfort from "../../img/comfort.jpg";
import indian from "../../img/indian.jpg";
import italian from "../../img/italian.jpg";
import latin from "../../img/latinAmerican.jpg";
import pizza from "../../img/pizza.jpg";
import seafood from "../../img/seafood.jpg";
import vegan from "../../img/vegan.jpg";
import Button from "@material-ui/core/Button";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    border: "1px solid black",
    borderRadius: "10px",
    boxShadow: "2px 2px 10px black"
  }
}));

export default function NestedGrid(props) {
  const classes = useStyles();
  const {
    selectCuisine,
    handleFormSubmit,
    handleSkip,
    mexMessage,
    burgerMessage,
    indMessage,
    pizzaMessage,
    italMessage,
    latinMessage,
    chinMessage,
    comfMessage,
    breakMessage,
    seaMessage,
    vegMessage,
    allMessage
  } = props;

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src={mexico}
              alt="mexican jpeg"
              style={{
                height: "160px",
                width: "240px",
                border: "1px solid black"
              }}
            />
            <p style={{ margin: "0", fontSize: "20px" }}>Mexican</p>
            <Button
              variant="contained"
              color="secondary"
              value="mexican"
              onClick={() => selectCuisine("mexican")}
            >
              {mexMessage}
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src={burger}
              alt="burger jpeg"
              style={{ height: "160px", width: "240px" }}
            />
            <p style={{ margin: "0", fontSize: "20px" }}>Burgers</p>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => selectCuisine("burgers")}
            >
              {burgerMessage}
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src={indian}
              alt="indian jpeg"
              style={{
                height: "160px",
                width: "240px",
                border: "1px solid black"
              }}
            />
            <p style={{ margin: "0", fontSize: "20px" }}>Indian</p>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => selectCuisine("indian")}
            >
              {indMessage}
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src={pizza}
              alt="pizza jpeg"
              style={{ height: "160px", width: "240px" }}
            />
            <p style={{ margin: "0", fontSize: "20px" }}>Pizza</p>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => selectCuisine("pizza")}
            >
              {pizzaMessage}
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src={italian}
              alt="italian jpeg"
              style={{
                height: "160px",
                width: "240px",
                border: "1px solid black"
              }}
            />
            <p style={{ margin: "0", fontSize: "20px" }}>Italian</p>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => selectCuisine("italian")}
            >
              {italMessage}
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src={latin}
              alt="latin jpeg"
              style={{
                height: "160px",
                width: "240px",
                border: "1px solid black"
              }}
            />
            <p style={{ margin: "0", fontSize: "20px" }}>Latin American</p>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => selectCuisine("latin")}
            >
              {latinMessage}
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src={chinese}
              alt="chinese jpeg"
              style={{
                height: "160px",
                width: "240px",
                border: "1px solid black"
              }}
            />
            <p style={{ margin: "0", fontSize: "20px" }}>Chinese</p>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => selectCuisine("chinese")}
            >
              {chinMessage}
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src={comfort}
              alt="comfort jpeg"
              style={{
                height: "160px",
                width: "240px",
                border: "1px solid black"
              }}
            />
            <p style={{ margin: "0", fontSize: "20px" }}>Comfort Food</p>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => selectCuisine("comfortfood")}
            >
              {comfMessage}
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src={breakfast}
              alt="breakfast jpeg"
              style={{
                height: "160px",
                width: "240px",
                border: "1px solid black"
              }}
            />
            <p style={{ margin: "0", fontSize: "20px" }}>Breakfast</p>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => selectCuisine("breakfast_brunch")}
            >
              {breakMessage}
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src={seafood}
              alt="seafood jpeg"
              style={{
                height: "160px",
                width: "240px",
                border: "1px solid black"
              }}
            />
            <p style={{ margin: "0", fontSize: "20px" }}>Seafood</p>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => selectCuisine("seafood")}
            >
              {seaMessage}
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src={vegan}
              alt="vegan jpeg"
              style={{
                height: "160px",
                width: "240px",
                border: "1px solid black"
              }}
            />
            <p style={{ margin: "0", fontSize: "20px" }}>Vegan</p>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => selectCuisine("vegan")}
            >
              {vegMessage}
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src={all}
              alt="a variety of foods jpeg"
              style={{
                height: "160px",
                width: "240px",
                border: "1px solid black"
              }}
            />
            <p style={{ margin: "0", fontSize: "20px" }}>Anything goes!</p>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => selectCuisine("all")}
            >
              {allMessage}
            </Button>
          </Paper>
        </Grid>

        <Button
          color="primary"
          style={{
            fontSize: "20px",
            border: "1px solid gray",
            borderRadius: "5px",
            margin: "40px auto 50px auto",
            zIndex: "2",
            backgroundColor: "white",
            padding: "10px 20px",
            color: "black"
          }}
          onClick={handleFormSubmit}
        >
          Finish
        </Button>
        <Button
          color="gray"
          style={{
            fontSize: "12px",
            borderRadius: "5px",
            float: "right",
            marginLeft: "0px",
            marginBottom: "50px",
            marginTop: "40px",
            marginRight: "0px",
            backgroundColor: "white",
            padding: "10px 20px"
          }}
          onClick={handleSkip}
        >
          <a style={{ textDecoration: "none", color: "inherit" }}>skip</a>
          <SkipNextIcon fontSize="small"></SkipNextIcon>
        </Button>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root} style={{ marginTop: "20px" }}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
