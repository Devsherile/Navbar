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
          I am a software engineer from Kenya. I am passionate about building
          <br />
          scalable software solutions. I am also passionate about sharing my
          knowledge with others. <br />I am a self-taught developer and I have
          been
          <br />
          coding for the past 3 years. I have experience working with
          JavaScript,
          <br /> React, Node, and Python. I am also a big fan of open
          <br />
          source software and I am always looking for ways to give back to the
          community.
        </p>
      </div>
      <div className="see">
        <h1 className="skills">Skills</h1>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>Flutter</li>
        </ul>
        <h1 className="experience">Experience</h1>
        <p>
          Volunteer Graphic Designer at Kecher Africa <br></br>
          Quality Assurance in Equity Leaders Program Portal <br></br>
          Digital Marketing at Equity Bank Kenya Limited <br></br>
        </p>
        <h1 className="education">Education</h1>
        <p>
          Bachelor of Science in Software Engineering, Muranga University of
          Technology
          <br></br>
        </p>
      </div>
    </div>
  );
}
export default About;
