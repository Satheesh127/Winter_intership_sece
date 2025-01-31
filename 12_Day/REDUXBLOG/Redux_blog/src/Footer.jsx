import "./index.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">My Blog</p>
        <nav className="footer-nav">
          <a href="#contact" className="footer-link">Contact</a>
          <a href="#about" className="footer-link">About</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
