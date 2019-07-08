import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import TopAppBar from "./TopAppBar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Error from "./Error";
import Navigation from "./Navigation";

class Routes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            {/* <Route path="/" component={Home} exact /> */}
            <Route path="/AboutMe" component={AboutMe} />
            <Route path="/Resume" component={Resume} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
