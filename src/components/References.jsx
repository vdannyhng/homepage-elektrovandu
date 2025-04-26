import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import '../styles/References.css';

export default function References() {
	useEffect(() => {
		AOS.init({
			duration: 1000, // animation duration in ms
			once: true, // wheter animation should happen only once - while scrolling down
		});
	}, []);

    return (
        /* References Section */
        <section id="references" className="references" data-aos="fade-up" data-aos-delay="200">
			<h2>🚀 Referenzen</h2>
			<div className="reference-list">
				<div className="reference-card">
					<h3>Handwerkskammer Schwaben</h3>
					<p>
    					Als eingetragener Betrieb der <strong>Handwerkskammer Schwaben</strong> (HWK Schwaben) stehen wir für Qualität, Zuverlässigkeit und handwerkliches Können.  
    					Unsere Arbeiten entsprechen den hohen Standards des deutschen Handwerks und werden regelmäßig durch Weiterbildungen und Prüfungen abgesichert.
  					</p>
					<div className="links">
						<p>Link: <a href="https://www.hwk-schwaben.de">HWK Schwaben</a></p>						
                    </div>
				</div>

				<div className="reference-card">
					<h3>E-Check</h3>
					<p>
    					Als zertifizierter Fachbetrieb führen wir den offiziellen <strong>E-Check</strong> für elektrische Anlagen und Geräte durch und dokumentieren den ordnungsgemäßen Zustand Ihrer Elektroinstallation gemäß den aktuellen VDE-Bestimmungen.
    					Dieser schützt nicht nur vor möglichen Schäden durch elektrische Defekte, sondern wird auch von Versicherungen als wichtiger Nachweis anerkannt.
  					</p>
					<div className="links">
						<p>Link: <a href="https://www.elektrohandwerk.de/privat/themen/e-check.html">E-Check</a></p>						
                    </div>
				</div>

				<div className="reference-card">
					<h3>Elektroinnung</h3>
					<p>
  						Als Mitglied der <strong>Elektroinnung Lindau</strong> verpflichten wir uns zu höchsten Qualitätsstandards und kontinuierlicher Weiterbildung.  
  						Damit garantieren wir Ihnen fachgerechte Ausführung nach den aktuellen Normen und Richtlinien des Elektrohandwerks.
					</p>
					<div className="links">
						<p>Link: <a href="https://www.elektroinnung-lindau.de/index.html">Elektroinnung Lindau</a></p>
					</div>
    			</div>
			</div>
		</section>
    );
}