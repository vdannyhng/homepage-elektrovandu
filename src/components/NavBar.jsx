import "../styles/NavBar.css";
import logo from "../assets/logo.svg";

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={logo} alt="Elektro Van Du Logo" className="logo-image" />
                </div>
                <nav className="navbar-links">
                    <a href="#about">Über uns</a>
                    <a href="#services">Leistungen</a>
                    <a href="#contact">Kontakt</a>
                </nav>
            </div>
        </header>
    )
}