import React, { useState } from "react";
import "./About.css";

function About() {
  const [showSkills, setShowSkills] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  const toggleSection = (section) => {
    if (section === "skills") {
      setShowSkills(!showSkills);
      setShowEducation(false);
      setShowExperience(false);
    } else if (section === "education") {
      setShowSkills(false);
      setShowEducation(!showEducation);
      setShowExperience(false);
    } else if (section === "experience") {
      setShowSkills(false);
      setShowEducation(false);
      setShowExperience(!showExperience);
    }
  };

  return (
    <div id="about">
      <img src="./images/about.jpg" alt="" />
      <div id="content">
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
            <br /> React, Flutter, Node, and Python. I am also a big fan of open
            <br />
            source software and I am always looking for ways to give back to the
            community.
          </p>
        </div>
        <div className="see">
          <div className="section-titles">
            <h1 className="skills" onClick={() => toggleSection("skills")}>
              Skills
            </h1>
            <h1
              className="education"
              onClick={() => toggleSection("education")}
            >
              Education
            </h1>
            <h1
              className="experience"
              onClick={() => toggleSection("experience")}
            >
              Experience
            </h1>
          </div>
          {showSkills && (
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Python</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Flutter</li>
            </ul>
          )}

          {showEducation && (
            <p>
              Bachelor of Science in Software Engineering,
              <br /> Muranga University of Technology
              <br />
            </p>
          )}

          {showExperience && (
            <p>
              Volunteer Graphic Designer at Kecher Africa <br />
              Quality Assurance in Equity Leaders Program <br />
              Digital Marketing at Equity Bank Kenya Limited <br />
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
