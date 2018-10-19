import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tabbed from "./teacherInterfaces/tabbed";
import CoverPage from "./teacherInterfaces/coverPage";
import CreateQuestions from "./teacherInterfaces/createQuestions";
import SimpleCard from "./teacherInterfaces/simpleCard";

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <div className="tabbed">
          <Tabbed />
        </div>
        {/* <div className="coverPage">
          <CoverPage />
        </div>
        <div className="createQuestions">
          <CreateQuestions />
        </div>
        <div className="viewDeck">
          <SimpleCard />
        </div> */}
      </div>
    );
  }
}

export default App;
