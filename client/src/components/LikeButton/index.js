import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

  export default function FloatingActionButtonSize() {
    const classes = useStyles();
  
    return (
      <div>
          <Fab color="primary" aria-label="thumb-up" className={classes.margin}>
            <ThumbUpIcon />
          </Fab>
      </div>
    );
  }
  