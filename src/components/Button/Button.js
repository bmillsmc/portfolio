import React from "react";
import "./Button.css";

function Button(props) {
  if (props.link[0] === "/") {
    return (
      <input
        type="submit"
        value={props.text}
        onClick={() => {
          <Redirect to={props.link} />;
        }}
      />
    );
  }
  return (
    <a src={props.link}>
      <input type="submit" value={props.text} />
    </a>
  );
}

export default Button;
