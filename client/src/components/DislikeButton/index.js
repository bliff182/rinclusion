import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

function FloatingActionButtonSize() {
    const classes = useStyles();
  
    return (
      <div>
          <Fab color="secondary" aria-label="thumb-down" className={classes.margin}>
            <ThumbDownIcon />
          </Fab>
      </div>
    );
  }
  
export default FloatingActionButtonSize;