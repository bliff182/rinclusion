import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontFamily: ["Montserrat Subrayada", "sans-serif"],
    color: "black",
    backgroundColor: "red"
  }
}));

export default function Logo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ backgroundColor: "red" }}>
        <Toolbar>
          <Typography
            variant="h3"
            style={{ textAlign: "center" }}
            className={classes.title}
          >
            MealMatch
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
