import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Hero() {
	useEffect(() => {
		AOS.init({
			duration: 1000, // animation duration in ms
			once: true, // wheter animation should happen only once - while scrolling down
		});
	}, []);

    return (
        /* Hero Section */
        <header className="hero" data-aos="fade-down">
            <h1>Elektro Van Du</h1>
			<h2>Elektrofachbetrieb in Lindau(B)</h2>
			<p>Installation, Automatisierung, Home-Bus-System, Telekommunikation, Netzwerktechnik</p>
			<a href="#projects" className="btn">Über uns</a>
        </header>
    );
}