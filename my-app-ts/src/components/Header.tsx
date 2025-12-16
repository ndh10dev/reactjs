import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h2>Header Website TypeScript</h2>

      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;