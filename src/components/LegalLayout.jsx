import { useEffect } from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { company } from "../data/company";
import "../styles/Legal.css";

// Gemeinsames Gerüst für Impressum und Datenschutzerklärung
export default function LegalLayout({ title, children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${title} – ${company.name}`;
  }, [title]);

  return (
    <>
      <Navbar />
      <main className="legal">
        <div className="container legal-inner">
          <a href="#top" className="legal-back">← Zurück zur Startseite</a>
          <h1>{title}</h1>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
