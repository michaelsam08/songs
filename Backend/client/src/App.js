import React from "react";

import AppNavbar from "./components/AppNavbar";
import BikesList from "./components/BikesList";
import BikeModal from "./components/BikeModal";

import { Container } from "reactstrap";
import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <BikeModal />
            <BikesList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
