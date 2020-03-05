import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import LeftLikes from "../LeftLikes";

const useStyles = makeStyles({
  list: {
    width: 250,
    
  },
  fullList: {
    width: "auto",
    backgroundColor: "rgba(225, 225, 225, 0.8)"
  }
});

function LeftBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
      
    ></div>
  );

  return (
    <div>
      <MenuIcon onClick={toggleDrawer("left", true)}></MenuIcon>
      <SwipeableDrawer
       
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {sideList("left")}
        <LeftLikes style={{backgroundColor: "rgba(225, 225, 225, 0.8)"}} />
      </SwipeableDrawer>
    </div>
  );
}

export default LeftBar;
