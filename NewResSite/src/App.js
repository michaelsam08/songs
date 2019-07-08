import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";

import TopAppBar from "./components/TopAppBar";
import Home from "./components/Home";
import Routes from "./components/Routes";

import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import { stat } from "fs";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <TopAppBar />
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <Routes />
          <Home />
        </div>
        {/* <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/AboutMe" component={AboutMe} />
              <Route path="/Resume" component={Resume} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter> */}
      </div>
    );
  }
}

export default App;
