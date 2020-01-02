import React from "react";
import "./Projects.css";
import ProjectBox from "../ProjectBox/ProjectBox";
import examplescreen from "../../images/headshot.jpg";

function Projects(props) {
  return (
    <div className="projects">
      <ProjectBox
        number="0"
        screen={examplescreen}
        projectName="Example Project"
        descriptionText="this project was prettt fun to make i was just chilling around one day and i was like 'hey might as well just make this project' so i made it and here it is. skills used: html, css, js, cool guy skills"
        repoLink="https://github.com/bmillsmc"
      />
      <ProjectBox
        number="1"
        screen={examplescreen}
        projectName="Example Project 2"
        descriptionText="this project was prettt fun to make i was just chilling around one day and i was like 'hey might as well just make this project' so i made it and here it is. skills used: html, css, js, cool guy skills"
        buttonText="Ex. Project 2"
        repoLink="https://github.com/bmillsmc"
      />
      <ProjectBox
        number="0"
        screen={examplescreen}
        projectName="Example Project"
        descriptionText="this project was prettt fun to make i was just chilling around one day and i was like 'hey might as well just make this project' so i made it and here it is. skills used: html, css, js, cool guy skills"
        repoLink="https://github.com/bmillsmc"
      />
      <ProjectBox
        number="1"
        screen={examplescreen}
        projectName="Example Project 2"
        descriptionText="this project was prettt fun to make i was just chilling around one day and i was like 'hey might as well just make this project' so i made it and here it is. skills used: html, css, js, cool guy skills"
        buttonText="Ex. Project 2"
        repoLink="https://github.com/bmillsmc"
      />
      <ProjectBox
        number="0"
        screen={examplescreen}
        projectName="Example Project"
        descriptionText="this project was prettt fun to make i was just chilling around one day and i was like 'hey might as well just make this project' so i made it and here it is. skills used: html, css, js, cool guy skills"
        repoLink="https://github.com/bmillsmc"
      />
      <ProjectBox
        number="1"
        screen={examplescreen}
        projectName="Example Project 2"
        descriptionText="this project was prettt fun to make i was just chilling around one day and i was like 'hey might as well just make this project' so i made it and here it is. skills used: html, css, js, cool guy skills"
        buttonText="Ex. Project 2"
        repoLink="https://github.com/bmillsmc"
      />
    </div>
  );
}

export default Projects;
