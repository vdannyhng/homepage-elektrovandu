import Hero from "../components/Hero";
import Navbar from "../components/NavBar";
import About from "../components/About";
import References from "../components/References";
import Team from "../components/Team";
import Customer from "../components/Customer";
// import Services from "../components/Services";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="page">
      <Navbar/>
      <Hero/>
      <About/>
      <Team/>
      <References/>
      <Customer/>
      
      {/* <Hero />
      <About />
      <Services />
      <Contact />
      <Footer /> */}
    </div>
  );
}
