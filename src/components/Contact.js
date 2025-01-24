import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me through the following channels:</p>
      <div className="contact-details">
        <p>
          <strong>Email:</strong> <a href="mailto:Satheesh_A@example.com">Satheesh_A123@example.com</a>
        </p>
        <p>
          <strong>Phone:</strong> <a href="tel:+1234567890">+123 456 7890</a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a href="https://www.linkedin.com/in/Satheesh_A" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/Satheesh_A
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
