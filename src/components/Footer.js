import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Satheesh_A. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="#about" className="footer-link">About</a>
        <a href="#projects" className="footer-link">Projects</a>
        <a href="#contact" className="footer-link">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;
