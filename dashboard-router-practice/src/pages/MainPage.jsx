import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

import TopNav from "../components/TopNav";
import MainPageCenter from "../components/MainPageCenter";

const ContainerStyle = {
  display: "flex",
  flexDirection: "row",
  border: "15px solid black",
  height: "800px",
  width: "auto"
};
const SideNavStuff = {
  display: "flex",
  flexDirection: "column",
  border: "15px solid green",
  width: "20%",
  backgroundColor: "purple ",
  justifyContent: "space-around"
};
const buttons = {
  backgroundColor: "orange"
};
const MainPageStuff = {
  display: "flex",
  flexDirection: "row",
  color: "blue",
  border: "15px solid pink",
  width: "80%"
};

const MainPage = () => {
  return (
    <div className="App">
      <TopNav />
      <div style={ContainerStyle}>
        <div style={SideNavStuff}>
          <button style={buttons}>
            {" "}
            <Link to="/AboutMe">About Me</Link>
          </button>
          <button style={buttons}>
            <Link to="/Resume">Resume</Link>
          </button>
          <button style={buttons}>
            <Link to="/Fun">Fun</Link>
          </button>
        </div>
        <div style={MainPageStuff}>
          <MainPageCenter />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
