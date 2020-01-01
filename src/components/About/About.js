import React from "react";
import "./About.css";
import headshot from "../../images/headshot.jpg";
// import Button from "../Button/Button";

function About(props) {
  return (
    <div className="about">
      <img src={headshot} alt="Ben Miller headshot" />
      <p>
        ey what up, its ya boy big b mills comin at you again with another
        minecraft tutorial. todays episode will be centered around job searching
        in minecraft. to get started you're gonna need a resume, a linkedin, a
        portfolio, and a kick-ass knowledge of cover letters. to begin, im going
        to send out my job applications to a bunch of places, highlighting my
        projects and expereiences from GA, the bootcamp I went to. then im going
        to realize this will show up in my commit history and i probably
        shouldnt be typing this as a placeholder till I write my real
        description. after that I will feel like ive put in so much work on it
        already it would be a waste to scrap this because i definitly need
        something for a placeholder so i can test out css. after that i realize
        this is getting way too meta and im going to have to make the choice to
        commit or not
      </p>
      {/* <Button text="Resume" link="/resume"/> */}
    </div>
  );
}

export default About;
