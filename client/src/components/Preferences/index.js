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
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function NestedGrid(props) {
  const classes = useStyles();
  const { selectCuisine, checked, handleFormSubmit, handleSkip } = props;

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src={mexico}
              alt="mexican jpeg"
              style={{ height: "160px", width: "240px" }}
            />
            <p style={{ margin: "0", fontSize: "20px" }}>Mexican</p>
            <Checkbox
              value="mexican"
              onChange={selectCuisine}
              checked={checked}
            />
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
            <Checkbox value="burgers" onChange={selectCuisine} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src={indian}
              alt="indian jpeg"
              style={{ height: "160px", width: "240px" }}
            />
            <p style={{ margin: "0", fontSize: "20px" }}>Indian</p>
            <Checkbox value="indian" onChange={selectCuisine} />
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
            <Checkbox value="pizza" onChange={selectCuisine} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src={italian}
              alt="italian jpeg"
              style={{ height: "160px", width: "240px" }}
            />
            <p style={{ margin: "0", fontSize: "20px" }}>Italian</p>
            <Checkbox value="italian" onChange={selectCuisine} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src={latin}
              alt="latin jpeg"
              style={{ height: "160px", width: "240px" }}
            />
            <p style={{ margin: "0", fontSize: "20px" }}>Latin American</p>
            <Checkbox value="latin" onChange={selectCuisine} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src={chinese}
              alt="chinese jpeg"
              style={{ height: "160px", width: "240px" }}
            />
            <p style={{ margin: "0", fontSize: "20px" }}>Chinese</p>
            <Checkbox value="chinese" onChange={selectCuisine} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src={comfort}
              alt="comfort jpeg"
              style={{ height: "160px", width: "240px" }}
            />
            <p style={{ margin: "0", fontSize: "20px" }}>Comfort Food</p>
            <Checkbox value="comfortfood" onChange={selectCuisine} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src={breakfast}
              alt="breakfast jpeg"
              style={{ height: "160px", width: "240px" }}
            />
            <p style={{ margin: "0", fontSize: "20px" }}>Breakfast</p>
            <Checkbox value="breakfast_brunch" onChange={selectCuisine} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src={seafood}
              alt="seafood jpeg"
              style={{ height: "160px", width: "240px" }}
            />
            <p style={{ margin: "0", fontSize: "20px" }}>Seafood</p>
            <Checkbox value="seafood" onChange={selectCuisine} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src={vegan}
              alt="vegan jpeg"
              style={{ height: "160px", width: "240px" }}
            />
            <p style={{ margin: "0", fontSize: "20px" }}>Vegan</p>
            <Checkbox value="vegan" onChange={selectCuisine} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src={all}
              alt="a variety of foods jpeg"
              style={{ height: "160px", width: "240px" }}
            />
            <p style={{ margin: "0", fontSize: "20px" }}>Anything goes!</p>
            <Checkbox value="all" onChange={selectCuisine} />
          </Paper>
        </Grid>

        <Button
          color="primary"
          style={{
            fontSize: "20px",
            border: "1px solid gray",
            borderRadius: "5px",
            margin: "40px auto 50px auto",
            zIndex: "2"
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
            marginRight: "0px"
          }}
          onClick={handleSkip}
        >
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            // href="/Discover"
          >
            skip
          </a>
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
