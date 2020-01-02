import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

function Button(props) {
  let classList = "button ";
  if (props.large) {
    classList += "buttonLarge ";
  } else if (props.medium) {
    classList += "buttonMedium ";
  } else {
    classList += "buttonSmall ";
  }
  if (props.link) {
    if (props.link[0] === "/") {
      return (
        <Link to={props.link}>
          <input type="submit" value={props.text} className={classList} />
        </Link>
      );
    }
  }
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <input type="submit" value={props.text} className={classList} />
    </a>
  );
}

export default Button;
