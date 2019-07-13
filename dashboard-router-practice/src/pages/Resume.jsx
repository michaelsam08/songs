import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Resume() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <h1>Resume</h1>
    </div>
  );
}

export default Resume;
