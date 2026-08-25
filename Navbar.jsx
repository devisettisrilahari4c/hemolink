import "./Navbar.css";
import logo from "../assets/logo.png.jpeg";

function Navbar() {
  return (
    <nav className="main-navbar">
      <div className="main-navbar-logo">
        <img src={logo} alt="HemoLink" />
        <h2>HEMOLINK</h2>
      </div>
    </nav>
  );
}

export default Navbar;