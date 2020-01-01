import React from "react";
import "./Button.css";
import { Redirect } from "react-router-dom";

function Button(props) {
  if (props.link[0] === "/") {
    return (
      <input
        type="submit"
        value={props.text}
        onClick={() => {
          return <Redirect to={props.link} />;
        }}
      />
    );
  }
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <input type="submit" value={props.text} />
    </a>
  );
}

export default Button;
