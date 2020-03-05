import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NestedGrid from "../components/Preferences";
import Logo from "../components/Logo";
import PreferenceForm from "../components/PreferenceForm";
import Alert from "react-bootstrap/Alert";

class Preferences extends Component {
  state = {
    cuisines: [],
    zipcode: "",
    price: "",
    checked: false,
    redirect: false,
    visible: false,
    message: "",
    mexMessage: "Select",
    burgerMessage: "Select",
    indMessage: "Select",
    pizzaMessage: "Select",
    italMessage: "Select",
    latinMessage: "Select",
    chinMessage: "Select",
    comfMessage: "Select",
    breakMessage: "Select",
    seaMessage: "Select",
    vegMessage: "Select",
    allMessage: "Select"
  };

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

  markSelected = selection => {
    if (selection === "mexican") {
      this.setState({
        cuisines: this.state.cuisines.concat(selection),
        mexMessage: "Selected!"
      });
    } else if (selection === "burgers") {
      this.setState({
        cuisines: this.state.cuisines.concat(selection),
        burgerMessage: "Selected!"
      });
    } else if (selection === "indian") {
      this.setState({
        cuisines: this.state.cuisines.concat(selection),
        indMessage: "Selected!"
      });
    } else if (selection === "pizza") {
      this.setState({
        cuisines: this.state.cuisines.concat(selection),
        pizzaMessage: "Selected!"
      });
    } else if (selection === "italian") {
      this.setState({
        cuisines: this.state.cuisines.concat(selection),
        italMessage: "Selected!"
      });
    } else if (selection === "latin") {
      this.setState({
        cuisines: this.state.cuisines.concat(selection),
        latinMessage: "Selected!"
      });
    } else if (selection === "chinese") {
      this.setState({
        cuisines: this.state.cuisines.concat(selection),
        chinMessage: "Selected!"
      });
    } else if (selection === "comfortfood") {
      this.setState({
        cuisines: this.state.cuisines.concat(selection),
        comfMessage: "Selected!"
      });
    } else if (selection === "breakfast_brunch") {
      this.setState({
        cuisines: this.state.cuisines.concat(selection),
        breakMessage: "Selected!"
      });
    } else if (selection === "seafood") {
      this.setState({
        cuisines: this.state.cuisines.concat(selection),
        seaMessage: "Selected!"
      });
    } else if (selection === "vegan") {
      this.setState({
        cuisines: this.state.cuisines.concat(selection),
        vegMessage: "Selected!"
      });
    } else if (selection === "all") {
      this.setState({
        cuisines: this.state.cuisines.concat(selection),
        allMessage: "Selected!"
      });
    }
  };

  markUnselected = selection => {
    if (selection === "mexican") {
      this.setState({
        cuisines: this.state.cuisines.filter(i => i !== selection),
        mexMessage: "Select"
      });
    } else if (selection === "burgers") {
      this.setState({
        cuisines: this.state.cuisines.filter(i => i !== selection),
        burgerMessage: "Select"
      });
    } else if (selection === "indian") {
      this.setState({
        cuisines: this.state.cuisines.filter(i => i !== selection),
        indMessage: "Select"
      });
    } else if (selection === "pizza") {
      this.setState({
        cuisines: this.state.cuisines.filter(i => i !== selection),
        pizzaMessage: "Select"
      });
    } else if (selection === "italian") {
      this.setState({
        cuisines: this.state.cuisines.filter(i => i !== selection),
        italMessage: "Select"
      });
    } else if (selection === "latin") {
      this.setState({
        cuisines: this.state.cuisines.filter(i => i !== selection),
        latinMessage: "Select"
      });
    } else if (selection === "chinese") {
      this.setState({
        cuisines: this.state.cuisines.filter(i => i !== selection),
        chinMessage: "Select"
      });
    } else if (selection === "comfortfood") {
      this.setState({
        cuisines: this.state.cuisines.filter(i => i !== selection),
        comfMessage: "Select"
      });
    } else if (selection === "breakfast_brunch") {
      this.setState({
        cuisines: this.state.cuisines.filter(i => i !== selection),
        breakMessage: "Select"
      });
    } else if (selection === "seafood") {
      this.setState({
        cuisines: this.state.cuisines.filter(i => i !== selection),
        seaMessage: "Select"
      });
    } else if (selection === "vegan") {
      this.setState({
        cuisines: this.state.cuisines.filter(i => i !== selection),
        vegMessage: "Select"
      });
    } else if (selection === "all") {
      this.setState({
        cuisines: this.state.cuisines.filter(i => i !== selection),
        allMessage: "Select"
      });
    }
  };

  selectCuisine = selection => {
    if (this.state.cuisines.includes(selection)) {
      this.markUnselected(selection);
    } else {
      this.markSelected(selection);
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
      this.setState({
        visible: true,
        message: "You didn't fill out a required field!"
      });
    } else if (this.state.zipcode.length !== 5) {
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
      this.setState({
        visible: true,
        message: "You didn't fill out a required field!"
      });
    } else if (this.state.zipcode.length !== 5) {
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
              mexMessage={this.state.mexMessage}
              burgerMessage={this.state.burgerMessage}
              indMessage={this.state.indMessage}
              pizzaMessage={this.state.pizzaMessage}
              italMessage={this.state.italMessage}
              latinMessage={this.state.latinMessage}
              chinMessage={this.state.chinMessage}
              comfMessage={this.state.comfMessage}
              breakMessage={this.state.breakMessage}
              seaMessage={this.state.seaMessage}
              vegMessage={this.state.vegMessage}
              allMessage={this.state.allMessage}
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
