import React from "react";
import "./Projects.css";
import ProjectBox from "../ProjectBox/ProjectBox";
import cotrip from "../../images/cotrip.png";
import tempapi from "../../images/globaltempapi.png";
import trivia from "../../images/triviatime.png";

function Projects(props) {
  return (
    <div className="projectsContainer">
      <div className="projects">
        <ProjectBox
          number="0"
          screen={tempapi}
          projectName="Global Temperatures API"
          descriptionText="With this project I created a working backend that gives the user access to temperature data ranging from the 1750s to present day for every country in the world. My aim in creating this project was to give easier access to this information, so that in today's age of misinformation people could draw their own conclusions."
          skills="Mongoose, MongoDB, Node.JS, Express"
          repoLink="https://github.com/bmillsmc/global-temperature-api"
        />
        <ProjectBox
          number="1"
          screen={cotrip}
          projectName="Cotripper"
          descriptionText="Working with a group of over 20 developers, I facilitated planning and contributed to code both in the frontend and the backend. After 2 weeks of standups and setbacks we stood in front of the client and presented a working prototype. My main contribution to this project was working on user authentication in the backend."
          skills="Agile Workflow, React.JS, Javascript, HTML, CSS, Python, Django"
          buttonText="To the CoTrip Project"
          repoLink="https://github.com/CotripperPlatform/CoTrip"
        />
        <ProjectBox
          number="0"
          screen={trivia}
          projectName="Trivia Time"
          descriptionText="Trivia is a small game that I created to demonstrate my skills in DOM manipulation. I also utilized a trivia question API called OpenTrivia to add some replayability to the game. This was my first adventure in the form of a full web application and I am still happy with how it turned out."
          skills="Javascript, HTML, CSS"
          repoLink="https://github.com/bmillsmc/trivia-game"
        />
      </div>
    </div>
  );
}

export default Projects;
