import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function About() {
	useEffect(() => {
		AOS.init({
			duration: 1000, // animation duration in ms
			once: true, // wheter animation should happen only once - while scrolling down
		});
	}, []);

    return (
        /* About Section */
        <section id="about" className="about" data-aos="fade-up" data-aos-delay="200">
				<h2>Über uns</h2>
                <h3>Elektrounternehmen</h3>
			    <p>
                    Als moderner Fachbetrieb für Elektroinstallationen stehen wir Ihnen seit 2009 zuverlässig zur Seite. 
                    Bei der Umsetzung Ihrer Projekte setzen wir nicht nur auf neueste Technologien, sondern legen ebenso großen Wert auf eine individuelle und unkomplizierte Betreuung Ihrer Wünsche. 
                    Dank unseres hervorragend geschulten Fachpersonals garantieren wir höchste Qualität, Sauberkeit und eine fachgerechte Ausführung nach den aktuellen deutschen <strong>VDE-DIN-Normen</strong>.
                </p>	
                <p>
                    Als eingetragener Ausbildungsbetrieb der Handwerkskammer München bieten wir zudem jungen Menschen die Möglichkeit, eine qualifizierte Ausbildung in unserem Unternehmen zu absolvieren.
                </p>
                <p>
                    Gerne beraten wir Sie umfassend zu allen Fragen rund um Elektroinstallationen und Automatisierungstechnik. 
                    Von der Planung bis zur fachgerechten Umsetzung begleiten wir Sie kompetent und zuverlässig. 
                    Zur Sicherstellung unserer Qualitätsstandards führen wir regelmäßig E-Check-Messungen durch – unsere Mitarbeiter werden hierfür jährlich speziell geschult.
                </p>
                <p>
                    Nehmen Sie gerne Kontakt mit uns auf – wir freuen uns darauf, Sie persönlich kennenzulernen und individuell zu beraten!
                </p>
		</section>
    );
}