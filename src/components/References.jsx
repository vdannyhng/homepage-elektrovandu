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
					<p>Mitglied in der Handwerkskammer Schwaben</p>
					<div className="links">
						<p>HWK Schwaben: <a href="https://github.com/vdannyhng-dev">vdannyhng-dev</a></p>						
                    </div>
				</div>

				<div className="reference-card">
					<h3>E-Check</h3>
					<p>Zertifizierte Durchführung von E-Check Messungen </p>
					<div className="links">
						<p>E-Check: <a href="https://github.com/vdannyhng-dev">vdannyhng-dev</a></p>						
                    </div>
				</div>

				<div className="reference-card">
					<h3>Elektroinnung</h3>
					<p>This personal portfolio you're viewing now. Built with React and enough caffeine to fuel a small country.</p>
					<div className="links">
						<p>Elektroinnungs: <a href="https://github.com/vdannyhng-dev">vdannyhng-dev</a></p>
					</div>
    			</div>

				<div className="reference-card">
					<h3>Weather App</h3>
					<p>React app fetching real-time weather data from the OpenWeather API. Warning: may depress you if it's raining.</p>
					<div className="links">
						<p>GitHub: <a href="https://github.com/vdannyhng-dev">vdannyhng-dev</a></p>
					</div>
				</div>
			</div>
		</section>
    );
}