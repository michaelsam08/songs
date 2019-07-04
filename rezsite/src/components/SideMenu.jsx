import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navigation from "./Navigation";

import Resume from "./Resume";
import Projects from "./Projects";

export default class SideMenu extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />

        <Route path="/Resume" component={Resume} />
        <Route path="/Projects" component={Projects} />
      </BrowserRouter>
    );
  }
}
