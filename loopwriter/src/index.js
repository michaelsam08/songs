import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./redux/store";

class Login extends Component {
  state = {
    firstName: "",
    lastName: "",
    authenticated: false,
    authMessage: ""
  };

  onChange(e, type) {
    e.preventDefault();
    const stateObj = {};
    stateObj[type] = e.target.value;
    this.setState(stateObj);
  }

  login() {
    if (
      this.state.firstName === "Michael" &&
      this.state.lastName === "Samara"
    ) {
      this.setState({
        authenticated: true
      });
    }
    this.setState({
      authMessage: "Failed login"
    });
  }

  render() {
    return this.state.authenticated ? (
      <App />
    ) : (
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          type="text"
          value={this.state.firstName}
          onChange={e => this.onChange(e, "firstName")}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          type="text"
          value={this.state.lastName}
          onChange={e => this.onChange(e, "lastName")}
        />
        <button onClick={() => this.login()}>Login</button>
        {this.state.authMessage && <p>{this.state.authMessage}</p>}
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
