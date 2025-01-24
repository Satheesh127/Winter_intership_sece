import React from "react";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I am a passionate React.js Developer dedicated to building user-friendly web applications. Let's create something amazing together!
        </p>
        <a href="#projects" className="home-button">View My Work</a>
      </div>
    </section>
  );
}

export default Home;
