import React, { Component } from "react";
import NestedGrid from "../components/Preferences";
import Logo from "../components/Logo";
import PreferenceForm from "../components/PreferenceForm";

class Preferences extends Component {
  state = {
    cuisines: [],
    zipcode: "",
    price: "",
    checked: false
  };

  // use this upon submission ================================

  // if (!this.state.zipcode || !this.state.price) {
  //   alert("You didn't fill out a required field.")
  // } else if (this.state.zipcode.length !== 5) {
  //   alert("Please enter a valid zip code.")
  // }

  // ========================================================

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

  handleFormSubmit;

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

  // Saves inputs to local storage
  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.zipcode) {
      alert("You didn't fill out a required field.");
    } else if (this.state.zipcode.length !== 5) {
      alert("Please enter a valid zipcode.");
    } else {
      this.setLocalStorage();
    }
  };

  render() {
    console.table(this.state);
    return (
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
        />
      </div>
    );
  }
}

export default Preferences;
