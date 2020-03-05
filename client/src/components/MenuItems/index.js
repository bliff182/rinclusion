import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TransitionsModal from "../LogoutModal";

function MenuItems() {
  return (
    <div>
      <MenuItem>
        <a
          style={{ textDecoration: "none", color: "inherit" }}
          href="/discover"
        >
          Home
        </a>
      </MenuItem>
      <MenuItem>
        <a style={{ textDecoration: "none", color: "inherit" }} href="/Liked">
          Previously Viewed
        </a>
      </MenuItem>
      <MenuItem>
        <a
          style={{ textDecoration: "none", color: "inherit" }}
          href="/Settings"
        >
          Account
        </a>
      </MenuItem>
      <MenuItem>
        <a
          style={{ textDecoration: "none", color: "inherit" }}
          href="/Preferences"
        >
          Preferences
        </a>
      </MenuItem>
      <MenuItem>
        <TransitionsModal></TransitionsModal>
      </MenuItem>
    </div>
  );
}

export default MenuItems;
