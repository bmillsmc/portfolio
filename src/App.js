import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
// import Resume from "./components/Resume/Resume";

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
        <Route
          path="/projects"
          exact
          render={() => {
            return <Projects />;
          }}
        />
        {/* <Route
          path="/resume"
          exact
          render={() => {
            return <Resume />;
          }}
        /> */}
      </main>
    );
  }
}

export default App;
