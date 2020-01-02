import React from "react";
import "./About.css";
import headshot from "../../images/headshot.jpg";
import Button from "../Button/Button";
import pdf from "../../documents/bmresume.pdf";

function About(props) {
  return (
    <div className="about">
      <img src={headshot} alt="Ben Miller headshot" />
      <p>
        Since I was small, I have always enjoyed tinkering with, exploring, and
        breaking computers. Today, except for the breaking part, that hasn't
        changed. My love for computers and technology has only flourished with
        age as I found there was more than just the colorful webpages I had
        spent hours on as a kid. Although we are past the early stages of trail
        blazers and cowboys, the internet still feels like the wild west to me
        and I hope to make my mark as I continue to grow and create as a
        professional software engineer. In my off time you can catch me playing
        Super Smash Bros with my friends, watching movies, or exploring the
        great outdoors with my family.
      </p>
      <Button text="Resume" link={pdf} medium file />
    </div>
  );
}

export default About;
