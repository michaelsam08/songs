import React, { Component } from "react";
//import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
///////////  Pages  Components//////////////
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/404" component={NotFoundPage} />
          <Route exact path="/AboutMe" component={AboutMe} />
          <Route exact path="/Resume" component={Resume} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
