import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

function Button(props) {
  if (props.link) {
    if (props.link[0] === "/") {
      return (
        <Link to={props.link}>
          <input type="submit" value={props.text} />
        </Link>
      );
    }
  }
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <input type="submit" value={props.text} />
    </a>
  );
}

export default Button;
