import React, { Component } from "react";
import CoverPage from "./coverPage";
import CreateQuestions from "./createQuestions";
import SimpleCard from "./simpleCard";
import "../App.css";

const tabMap = {
  0: <CoverPage />,
  1: <CreateQuestions />,
  2: <SimpleCard />
};

class Tabbed extends Component {
  state = {
    currentTab: 0
  };

  setTab = tab => {
    this.setState({
      currentTab: tab
    });
  };

  render() {
    return (
      <div className="tabbed-container">
        <div className="tabbed-buttons">
          <button onClick={() => this.setTab(0)}>Cover Page</button>
          <button onClick={() => this.setTab(1)}>Create Questions</button>
          <button onClick={() => this.setTab(2)}>View Cards</button>
        </div>
        <div className="tabbed-content">{tabMap[this.state.currentTab]}</div>
      </div>
    );
  }
}

export default Tabbed;
