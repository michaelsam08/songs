import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const nav = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  padding: 10,
  border: "2px solid black",
  paddingLeft: -100
};

export default class Navbar extends Component {
  render() {
    return (
      <div className="App">
        <h1>Excercise Tracker</h1>
        <div style={nav}>
          <Link to="/">
            <FaHome />
          </Link>
          <Link to="/create" className="nav-link">
            Create Exercise Log
          </Link>
          <Link to="/user" className="nav-link">
            Create User
          </Link>
        </div>
      </div>
    );
  }
}
