import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
// import Tooltip from "@material-ui/core/Tooltip";

function DeleteButton() {
  return (
    <IconButton aria-label="delete" style={{ float: "right" }}>
      <DeleteIcon fontSize="small" />
    </IconButton>
    // <Tooltip title="Reset" style={{ float: "right" }}>
    //   <IconButton aria-label="delete">
    //     <DeleteIcon fontSize="small" />
    //   </IconButton>
    // </Tooltip>
  );
}

export default DeleteButton;
