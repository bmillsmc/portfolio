import React from "react";
import Button from "../Button/Button";
import "./Home.css";

function Home(props) {
  return (
    <div className="home">
      <h1>Ben B. Miller</h1>

      <Button text="Github" link="https://github.com/bmillsmc" large />

      <h2>Software Engineer</h2>
    </div>
  );
}

export default Home;
