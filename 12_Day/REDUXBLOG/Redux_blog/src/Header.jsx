import "./index.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-title">My Blog</div>
      <nav className="header-nav">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#contact" className="nav-link">Contact</a>
        <a href="http://localhost:5173/create" className="nav-link">Addposts</a>
        <a href="http://localhost:5173/posts" className="nav-link">Viewposts</a>
      </nav>
    </header>
  );
};

export default Header;
