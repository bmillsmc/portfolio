import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <nav className="sidebar">
      <Link to="/">
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
  );
}

export default Sidebar;
