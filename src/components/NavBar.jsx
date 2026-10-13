import { useEffect, useState } from "react";
import "../styles/NavBar.css";
import logo from "../assets/logo.svg";
import Icon from "./Icon";
import { company, telHref } from "../data/company";

const links = [
    { href: "#leistungen", label: "Leistungen" },
    { href: "#about", label: "Über uns" },
    { href: "#team", label: "Team & Karriere" },
    { href: "#qualitaet", label: "Qualität" },
    { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const close = () => setOpen(false);

    return (
        <header className={`navbar${scrolled ? " navbar--scrolled" : ""}${open ? " navbar--open" : ""}`}>
            <div className="navbar-container">
                <a href="#top" className="navbar-brand" onClick={close}>
                    <img src={logo} alt="" className="logo-image" />
                    <span>Elektro <strong>Van Du</strong></span>
                </a>

                <nav className="navbar-links" aria-label="Hauptnavigation">
                    {links.map((link) => (
                        <a key={link.href} href={link.href} onClick={close}>{link.label}</a>
                    ))}
                    <a
                        href={company.phone ? telHref(company.phone) : "#kontakt"}
                        className="btn btn--primary navbar-cta"
                        onClick={close}
                    >
                        <Icon name="phone" />
                        {company.phone ?? "Jetzt anfragen"}
                    </a>
                </nav>

                <button
                    className="navbar-toggle"
                    aria-label={open ? "Menü schließen" : "Menü öffnen"}
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                    <Icon name={open ? "close" : "menu"} />
                </button>
            </div>
        </header>
    );
}
