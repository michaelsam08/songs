import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

import TopAppBar from "./components/TopAppBar";
import SideMenu from "./components/SideMenu";
import Cards from "./components/Cards";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <TopAppBar />
          <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            "
            <SideMenu />
            <Cards />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
