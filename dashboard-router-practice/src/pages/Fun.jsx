import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Fun() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <h1>Fun </h1>
    </div>
  );
}

export default Fun;
