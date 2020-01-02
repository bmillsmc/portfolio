import React from "react";
import Button from "../Button/Button";
import "./ProjectBox.css";

function ProjectBox(props) {
  // pulls in props.number for order in the list of boxes, props.screen for screenshot path, props.projectName containing the project name, props.descriptionText for description (maybe a seperate skills text for formatting), props.buttonText for optional button text (default is github repository), props.repoLink for the link to the repo
  let classList = "projectBox ";
  if (Number.isInteger(parseInt(props.number, 10))) {
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
      <Button text={buttonText} link={props.repoLink} />
    </div>
  );
}

export default ProjectBox;
