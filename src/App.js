import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import About from "./components/About/About";

//TODO: pass state for sidebar being open or shut with a mouseover event

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //TODO: position sidebar over top of current route
    return (
      <main className="body">
        <Sidebar />
        <Route
          path="/"
          exact
          render={() => {
            return <Home />;
          }}
        />
        <Route
          path="/about"
          exact
          render={() => {
            return <About />;
          }}
        />
      </main>
    );
  }
}

export default App;
