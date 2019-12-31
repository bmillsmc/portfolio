import React, { Component } from "react";
import "./App.css";
// import Sidebar from "./components/Sidebar/Sidebar";

//TODO: pass state for sidebar being open or shut with a mouseover event

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <aside>{/* <Sidebar /> */}</aside>
        <main>
          <h1>temp</h1>
        </main>
      </div>
    );
  }
}

export default App;
