import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

function Button(props) {
  let classList = "";
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
        <div className={classList}>
          <Link to={props.link}>
            <input type="submit" value={props.text} className="button" />
          </Link>
        </div>
      );
    }
  }
  return (
    <div className={classList}>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <input type="submit" value={props.text} className="button" />
      </a>
    </div>
  );
}

export default Button;
