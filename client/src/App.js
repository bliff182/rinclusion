import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Nav";
import Discover from "./pages/Discover";
import LogIn from "./pages/Login";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";
import Viewed from "./pages/Viewed";
import Container from '@material-ui/core/Container';
import Account from './pages/Account';
import Preferences from './pages/Preferences';
import SwipeableTemporaryDrawer from "./components/Drawer"


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Container>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/Login" component={LogIn} />
          <Route exact path="/Discover" component={Discover} />
          <Route exact path="/Account" component={Account} />
          <Route exact path="/Settings" component={Settings} />
          <Route exact path="/Viewed" component={Viewed} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Preferences" component={Preferences} />

          {/* <SwipeableTemporaryDrawer></SwipeableTemporaryDrawer> */}
        </Container>
      </div>
  </Router>
  )
}

export default App;