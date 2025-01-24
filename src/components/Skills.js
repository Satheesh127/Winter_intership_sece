import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill">
          <h3>React.js</h3>
          <p>Building dynamic and responsive user interfaces with reusable components.</p>
        </div>
        <div className="skill">
          <h3>JavaScript</h3>
          <p>Proficient in ES6+ features, DOM manipulation, and modern frameworks.</p>
        </div>
        <div className="skill">
          <h3>HTML/CSS</h3>
          <p>Creating accessible, semantic, and visually appealing web pages.</p>
        </div>
        <div className="skill">
          <h3>Git</h3>
          <p>Version control and collaboration using Git and GitHub.</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
