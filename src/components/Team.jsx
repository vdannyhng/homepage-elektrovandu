import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import '../styles/Team.css';

export default function Team() {
	useEffect(() => {
		AOS.init({
			duration: 1000, // animation duration in ms
			once: true, // wheter animation should happen only once - while scrolling down
		});
	}, []);

    return (
        /* About Section */
        <section id="team" className="team" data-aos="fade-up" data-aos-delay="200">
			<h2>Unser Team</h2>
			<p>
                Lernen Sie unser Unternehmen und unser engagiertes Team näher kennen.  
                Unsere Mitarbeiter sind ausgewiesene Experten auf ihrem jeweiligen Fachgebiet und arbeiten mit großer Leidenschaft und Sorgfalt an der Umsetzung Ihrer Projekte.  
                Lassen auch Sie sich von unserem hohen Qualitätsanspruch und unserer Begeisterung für innovative Elektrotechnik überzeugen.
            </p>

            <p>
                Unser Team setzt sich aus erfahrenen Fachkräften und engagierten jungen Gesellen zusammen.  
                Diese ausgewogene Mischung ermöglicht es uns, bewährte Arbeitsweisen mit neuen, modernen Technologien zu verbinden.  
                Durch kontinuierliche Fort- und Weiterbildungen bleiben wir stets auf dem neuesten Stand der Technik und sichern damit die nachhaltige Qualität unserer Arbeit.
            </p>

            <p>
                Diese Verbindung aus Erfahrung und Innovation macht den Erfolg unseres Unternehmens aus – und darauf sind wir stolz!
            </p>

            <p>
                Möchten auch Sie Teil unseres Teams werden?
                Rufen Sie uns an oder kommen einfach persönlich vorbei.
                Wir freuen uns auf Ihre Bewerbung!
            </p>
		</section>
    );
}