import React from "react";
import SongList from "./SongList";
//import actions from '../actions/index';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
      </div>
    </div>
  );
};

export default App;
