import React from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';


function DeleteButton() {

    return(
        <Tooltip title="Reset">
            <IconButton aria-label="delete" >
                <DeleteIcon fontSize="small"/>
            </IconButton>

        </Tooltip>

    )
}

export default DeleteButton;