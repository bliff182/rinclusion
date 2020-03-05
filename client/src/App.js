import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import NavBar from "./components/Nav";
import Discover from "./pages/Discover";
import LogIn from "./pages/Login";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";
import Viewed from "./pages/Liked";
import Container from "@material-ui/core/Container";
import Preferences from "./pages/Preferences";
import fire from "./config/Fire";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";
import NoMatch from "./pages/NoMatch";
import Logo from "./components/Logo";

class App extends Component {
  state = {
    authenticated: false,
    loading: true
  };

  componentWillMount() {
    this.authListener();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
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
  };

  render() {
    if (this.state.loading) {
      return (
        <div
          style={{
            textAlign: "center",
            position: "absolute",
            top: "25%",
            left: "50%",
            color: "white"
          }}
        >
          <h3>Loading...</h3>
          <br />
          <Spinner animation="border" role="status" style={{ color: "white" }}>
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      );
    }
    return (
      <Router>
        <div>
          {this.state.authenticated === true ? <NavBar /> : <Logo />}
          <Container style={{ marginTop: "100px" }}>
            <Switch>
              <Route exact path="/">
                {this.state.authenticated === true ? (
                  <Redirect to="/preferences" />
                ) : (
                  <Signup />
                )}
              </Route>
              <Route exact path="/signup">
                {this.state.authenticated === true ? (
                  <Redirect to="/preferences" />
                ) : (
                  <Signup />
                )}
              </Route>
              <Route exact path="/login">
                {this.state.authenticated === true ? (
                  <Redirect to="/discover" />
                ) : (
                  <LogIn />
                )}
              </Route>
              <Route exact path="/settings">
                {this.state.authenticated === false ? (
                  <Redirect to="/" />
                ) : (
                  <Settings />
                )}
              </Route>
              <Route exact path="/liked">
                {this.state.authenticated === false ? (
                  <Redirect to="/" />
                ) : (
                  <Viewed />
                )}
              </Route>
              <Route exact path="/preferences">
                {this.state.authenticated === false ? (
                  <Redirect to="/" />
                ) : (
                  <Preferences />
                )}
              </Route>
              <Route exact path="/discover">
                {this.state.authenticated === false ? (
                  <Redirect to="/" />
                ) : (
                  <Discover />
                )}
              </Route>
              <Route path="*" component={NoMatch} />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
