import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar(props) {
  return (
    <div className="sidebarContainer">
      <nav id="sidebar" className="sidebarAnimation">
        <Link to="/home">
          <h3>Home</h3>
        </Link>
        <Link to="/about">
          <h3>About</h3>
        </Link>
        <Link to="/projects">
          <h3>Projects</h3>
        </Link>
        <Link to="/contact">
          <h3>Contact</h3>
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
