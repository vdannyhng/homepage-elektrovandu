import { useEffect } from "react";
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Team from "../components/Team";
import References from "../components/References";
import Customer from "../components/Customer";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { company } from "../data/company";

export default function Home() {
  useEffect(() => {
    document.title = `${company.name} – Elektrofachbetrieb in ${company.city}`;
    // Beim Zurückkommen vom Impressum zum angeklickten Abschnitt springen
    const target = window.location.hash && document.getElementById(window.location.hash.slice(1));
    if (target) target.scrollIntoView();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Gallery />
        <About />
        <Team />
        <References />
        <Customer />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
