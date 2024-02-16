import React from "react";
import "./About.css";
function About() {
  return (
    <div id="about">
      <div className="about">
        <img src="./images/about.jpg" alt="" />
      </div>
      <div className="content">
        <h1>About Me</h1>
        <p>
          I am a software engineer from Kenya. I am passionate about building<br/>
          scalable software solutions. I am also passionate about sharing my 
          knowledge with others. <br/>I am a self-taught developer and I have been<br/>
          coding for the past 3 years. I have experience working with
          JavaScript,<br/> React, Node, and Python. I am also a big fan of open<br/>
          source software and I am always looking for ways to give back to the
          community.
        </p>
      </div>
    </div>
  );
}
export default About;
