import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NestedGrid from "../components/Preferences";
import Logo from "../components/Logo";
import PreferenceForm from "../components/PreferenceForm";
// import Toast from "react-bootstrap/Toast";
import Alert from "react-bootstrap/Alert";

class Preferences extends Component {
  state = {
    cuisines: [],
    zipcode: "",
    price: "",
    checked: false,
    redirect: false,
    visible: false,
    message: ""
  };

  // use this upon submission ================================

  // if (!this.state.zipcode || !this.state.price) {
  //   alert("You didn't fill out a required field.")
  // } else if (this.state.zipcode.length !== 5) {
  //   alert("Please enter a valid zip code.")
  // }

  // ========================================================

  componentDidMount = () => {
    this.setState({
      price: 2,
      cuisines: ["all"],
      redirect: false
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getPricePref = dataId => {
    this.setState({
      price: dataId
    });
  };

  selectCuisine = event => {
    const checked = event.target.value;
    if (this.state.cuisines.includes(checked)) {
      this.setState({
        cuisines: this.state.cuisines.filter(i => i !== checked),
        checked: false
      });
      event.target.checked = false;
    } else {
      this.setState({
        cuisines: this.state.cuisines.concat(checked),
        checked: true
      });
      event.target.checked = true;
    }
  };

  // use localstorage to save preferences, call them back on discover page
  setLocalStorage = () => {
    localStorage.setItem("cuisines", this.state.cuisines);
    localStorage.setItem("zipcode", this.state.zipcode);
    localStorage.setItem("price", this.state.price);
  };

  // Save inputs to local storage, redirect to discover
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.zipcode === "") {
      // alert("You didn't fill out a required field!");
      this.setState({
        visible: true,
        message: "You didn't fill out a required field!"
      });
    } else if (this.state.zipcode.length !== 5) {
      // alert("Please enter a valid zip code.");
      this.setState({
        visible: true,
        message: "That zip code isn't valid!"
      });
    } else {
      this.setLocalStorage();
      this.setState({
        redirect: true
      });
    }
  };

  handleSkip = () => {
    if (!this.state.zipcode) {
      // alert("You didn't fill out a required field!");
      this.setState({
        visible: true,
        message: "You didn't fill out a required field!"
      });
    } else if (this.state.zipcode.length !== 5) {
      // alert("Please enter valid zip code.");
      this.setState({
        visible: true,
        message: "That zip code isn't valid!"
      });
    } else {
      this.setState({
        cuisines: "all",
        price: 2,
        redirect: true
      });
      this.setLocalStorage();
    }
  };

  toggleAlert = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    console.table(this.state);
    return (
      <div>
        {this.state.redirect === true ? (
          <Redirect to="/discover" />
        ) : (
          <div>
            <Logo />
            <PreferenceForm
              zipcode={this.state.zipcode}
              handleInputChange={this.handleInputChange}
              getPricePref={this.getPricePref}
            />
            <NestedGrid
              selectCuisine={this.selectCuisine}
              handleFormSubmit={this.handleFormSubmit}
              handleSkip={this.handleSkip}
            />
            <Alert
              variant="danger"
              onClose={this.toggleAlert}
              dismissible
              show={this.state.visible}
              style={{ position: "fixed", maxWidth: "300px", top: "70%" }}
            >
              <Alert.Heading>Oh no!</Alert.Heading>
              <p>{this.state.message}</p>
            </Alert>
          </div>
        )}
      </div>
    );
  }
}

export default Preferences;
