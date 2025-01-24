import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A personal portfolio showcasing my skills, projects, and experience using React.js and CSS.</p>
        </div>
        <div className="project-card">
          <h3>Task Management App</h3>
          <p>An intuitive app for managing tasks and projects, built with React.js and Firebase.</p>
        </div>
        <div className="project-card">
          <h3>E-commerce Store</h3>
          <p>An e-commerce platform with features like product listing, cart, and checkout, powered by React.js and Node.js.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
