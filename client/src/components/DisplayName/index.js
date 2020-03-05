import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";


function DisplayName(props) {
  const {  currentName } = props;
  return (
    <div style={{ textAlign: "center" }}>
          <h5>
              {currentName}
          </h5>
    </div>
  );
}

export default DisplayName;
