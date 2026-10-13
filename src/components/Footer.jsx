import '../styles/Footer.css';
import logo from '../assets/logo.svg';
import { company } from '../data/company';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <div className="footer-brand">
                    <img src={logo} alt="" />
                    <div>
                        <strong>{company.name}</strong>
                        <span>Elektrofachbetrieb in {company.city}</span>
                    </div>
                </div>
                <nav className="footer-links" aria-label="Rechtliches">
                    <a href="#impressum">Impressum</a>
                    <a href="#datenschutz">Datenschutz</a>
                </nav>
                <p className="footer-copy">&copy; {new Date().getFullYear()} {company.name}</p>
            </div>
        </footer>
    );
}
