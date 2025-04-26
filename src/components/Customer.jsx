import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import '../styles/Customer.css';

export default function Customer() {
	useEffect(() => {
		AOS.init({
			duration: 1000, // animation duration in ms
			once: true, // wheter animation should happen only once - while scrolling down
		});
	}, []);

    return (
        /* About Section */
        <section id="customer" className="customer" data-aos="fade-up" data-aos-delay="200">
			<h2>Unsere Kunden</h2>
		    <ul>
                <li>GWG Lindauer Wohnungsgesellschaft mbH</li>
                <li>Stadtwerke Lindau</li>
                <li>Museum Lindau</li>
                <li>Stadtbauamt Lindau</li>
                <li>Privatkunden</li>
            </ul>
		</section>
    );
}