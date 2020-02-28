import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NavBar from "./components/Nav";
import Discover from "./pages/Discover";
import LogIn from "./pages/Login";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";
import Viewed from "./pages/Liked";
import Container from "@material-ui/core/Container";
import Account from "./pages/Account";
import Preferences from "./pages/Preferences";
import SwipeableTemporaryDrawer from "./components/Drawer";
import fire from "./config/Fire";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";

class App extends Component {
  state = {
    user: {},
    authenticated: false,
    loading: true
  };

  componentWillMount() {
    this.authListener();
    // console.log(this.state.user);
  }

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user: { user },
          authenticated: true,
          loading: false
        });
      } else {
        this.setState({
          user: null,
          authenticated: false,
          loading: false
        });
      }
    });
  };

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
          {/* <NavBar /> */}
          <h3>Loading...</h3>
          <br />
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      );
    }
    return (
      <Router>
        <div>
          <NavBar />
          {/* {this.state.user === true ? (
            <Container>
              <Route exact path="/" component={Discover} />
              <Route exact path="/discover" component={Discover} />
              <Route exact path="/account" component={Account} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/viewed" component={Viewed} />
              <Route exact path="/preferences" component={Preferences} />
            </Container>
          ) : (
            <Container>
              <Route exact path="/" component={Signup} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={LogIn} />
            </Container>
          )} */}
          <Container>
            {/* <Route exact path="/" component={LogIn} />

            <Route exact path="/Login" component={LogIn} />
            <Route exact path="/Discover" component={Discover} />
            <Route exact path="/Account" component={Account} />
            <Route exact path="/Settings" component={Settings} />
            <Route exact path="/Viewed" component={Viewed} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Preferences" component={Preferences} /> */}

            <Route exact path="/">
              {this.state.authenticated === true ? (
                <Redirect to="/discover" />
              ) : (
                <Signup />
              )}
            </Route>
            <Route exact path="/signup">
              {this.state.authenticated === true ? (
                <Redirect to="/discover" />
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
            <Route exact path="/account">
              {this.state.authenticated === false ? (
                <Redirect to="/signup" />
              ) : (
                <Account />
              )}
            </Route>
            <Route exact path="/settings">
              {this.state.authenticated === false ? (
                <Redirect to="/signup" />
              ) : (
                <Settings />
              )}
            </Route>
            <Route exact path="/viewed">
              {this.state.authenticated === false ? (
                <Redirect to="/signup" />
              ) : (
                <Viewed />
              )}
            </Route>
            <Route exact path="/preferences">
              {this.state.authenticated === false ? (
                <Redirect to="/signup" />
              ) : (
                <Preferences />
              )}
            </Route>
            <Route exact path="/discover">
              {this.state.authenticated === false ? (
                <Redirect to="/signup" />
              ) : (
                <Discover />
              )}
            </Route>

            {/* <SwipeableTemporaryDrawer></SwipeableTemporaryDrawer> */}
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
