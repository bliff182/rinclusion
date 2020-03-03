import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import fire from "../../config/Fire";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logOut = () => {
    fire.auth().signOut();
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleOpen}
        style={{
          border: "1px solid gray",
          cursor: "pointer",
          borderRadius: "5px"
        }}
      >
        Log out
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Are you sure?</h2>
            <button style={{ borderRadius: "5px" }}>
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                // href="/Login"
                onClick={logOut}
              >
                Yes
              </a>
            </button>
            <button
              style={{ borderRadius: "5px", float: "right", cursor: "pointer" }}
              onClick={handleClose}
            >
              No
            </button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
