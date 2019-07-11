import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";

import TopAppBar from "./components/TopAppBar";
import Cards from "./components/Cards";
import Routes from "./components/Routes";

import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Error from "./components/Error";
import SideNav from "./components/SideNav";
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
      <div className>
        <TopAppBar />
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <Routes />
          <Cards />
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
