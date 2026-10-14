import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

// Einfaches Hash-Routing: #impressum und #datenschutz sind Unterseiten, alles andere die Startseite
const pages = { "#impressum": Impressum, "#datenschutz": Datenschutz };
const currentPage = () => pages[window.location.hash] ?? Home;

function App() {
  const [Page, setPage] = useState(() => currentPage());

  useEffect(() => {
    // Nur einmal initialisieren: AOS erkennt später eingeblendete Elemente selbst,
    // ein erneutes init() würde zusätzliche Scroll-Listener anhängen
    AOS.init({
      duration: 800,
      once: true, // Animation nur beim ersten Scrollen abspielen
      offset: 60,
      disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  useEffect(() => {
    const onHashChange = () => setPage(() => currentPage());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return <Page />;
}

export default App;
