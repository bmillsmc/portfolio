import React from "react";
import "./Contact.css";
import pdf from "../../documents/bmresume.pdf";
import Button from "../Button/Button";
import headshot from "../../images/headshot.jpg";

function Contact() {
  return (
    <div className="contact">
      <img src={headshot} alt="headshot" />
      <h1>Ben B. Miller</h1>
      <a
        href="mailto:benbmiller123@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Email me at benbmiller123@gmail.com
      </a>
      <a
        href="https://www.linkedin.com/in/ben-b-miller/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>My LinkedIn</h3>
      </a>
      <div className="buttonHolder">
        <Button text="Github" link="https://github.com/bmillsmc" medium />
        <Button text="Resume" link={pdf} medium file />
      </div>
    </div>
  );
}

export default Contact;
