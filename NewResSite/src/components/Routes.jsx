import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Error from "./Error";
import SideNav from "./SideNav";

class Routes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <SideNav />
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
