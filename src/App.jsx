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
    const onHashChange = () => setPage(() => currentPage());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return <Page />;
}

export default App;
