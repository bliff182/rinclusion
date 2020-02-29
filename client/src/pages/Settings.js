import React, { Component } from "react";
// import * as firebase from "firebase";
// import SettingsForm from "../components/SettingsForm";
// import API from "../utils";
import SettingsBar from "../components/SettingsBar"
import ChangeEmail from "../components/ChangeEmail"
import ChangeName from "../components/ChangeName"
import ChangePass from "../components/ChangePassword"


function Settings() {

  return (
    <div>
      <SettingsBar />
      <ChangeName />
      <ChangeEmail />
      <ChangePass />
    </div>
  )
 }


export default Settings;