import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function AboutMe() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <h1>About Me</h1>
    </div>
  );
}

export default AboutMe;
