import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.pageNotFoundStyle = {
      marginLeft: "5vw"
    };
  }

  render() {
    return (
      <main className="body">
        <Sidebar />
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return <Redirect to="/home" />;
            }}
          />
          <Route
            path="/home"
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
          <Route
            path="/contact"
            exact
            render={() => {
              return <Contact />;
            }}
          />
          <Route
            render={() => {
              return (
                <h1 style={this.pageNotFoundStyle}>Error: Page Not Found</h1>
              );
            }}
          />
        </Switch>
      </main>
    );
  }
}

export default App;
