import React from "react";
import MenuItem from '@material-ui/core/MenuItem';
// import "./style.css";

function MenuItems() {
    return (
        <div>
            <MenuItem><a href="/discover">Home</a></MenuItem>
            <MenuItem><a href="/Account">Account</a></MenuItem>
            <MenuItem><a href="/Settings">Settings</a></MenuItem>
            <MenuItem><a href="/Preferences">Preferences</a></MenuItem>
            <MenuItem><a href="/Login">Log out</a></MenuItem>
        </div>
    );
}

export default MenuItems;
