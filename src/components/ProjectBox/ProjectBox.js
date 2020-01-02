import React from "react";
import Button from "../Button/Button";
import "./ProjectBox.css";

function ProjectBox(props) {
  //pulls in number for order in the list of boxes, screen for screenshot path, projectName containing the project name, descriptionText for description (maybe a seperate skills text for formatting), buttonText for optional button text (default is github repository)
  let classList = "projectBox ";
  if (Number.isInteger(props.number)) {
    classList += `num${props.number} `;
  }
  let buttonText = "Github Repository";
  if (props.buttonText) {
    buttonText = props.buttonText;
  }
  return (
    <div className={classList}>
      <img src={props.screen} alt={`screenshot of ${props.projectName}`} />
      <h3>{props.projectName}</h3>
      <p>{props.descriptionText}</p>
      <Button text={buttonText} />
    </div>
  );
}

export default ProjectBox;
