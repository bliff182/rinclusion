import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import LogIn from "./pages/Login";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";
import Viewed from "./pages/Liked";
import Container from "@material-ui/core/Container";
import Account from "./pages/Account";
import Liked from "./pages/Liked";
import Preferences from "./pages/Preferences";
import * as firebase from "firebase";

class App extends Component {
  state = {
    authenticated: false,
    loading: true
  };

  componentWillMount() {
    this.removeAuthListener = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false
        });
      }
    });
  }

  render() {
    // Do something different if loading... add spinner?
    if (this.state.loading) {
      return (
        <div
          style={{
            textAlign: "center",
            position: "absolute",
            top: "25%",
            left: "50%"
          }}
        >
          <h3>Loading...</h3>
        </div>
      );
    }
    return (
      <Router>
        <div>
          <Container style={{marginTop:"80px"}}>
            <Route exact path="/" component={LogIn} />
            <Route exact path="/Login" component={LogIn} />
            <Route exact path="/Discover" component={Discover} />
            <Route exact path="/Liked" component={Liked} />
            <Route exact path="/Account" component={Account} />
            <Route exact path="/Settings" component={Settings} />
            <Route exact path="/Viewed" component={Viewed} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Preferences" component={Preferences} />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
