import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() 
{
	useEffect(() => {
		AOS.init({
			duration: 1000, // animation duration in ms
			once: true, // wheter animation should happen only once - while scrolling down
		});
	}, []);


	return (
		<div className="page">
			{/* Hero Section */}
			<header className="hero" data-aos="fade-down">
				<h1>Elektro Van Du</h1>
				<h2>Elektrofachbetrieb in Lindau(B)</h2>
				<p>Installation, E-Check, Automatisierung, Home-Bus-System, Telekommunikation, Netzwerktechnik</p>
				<a href="#projects" className="btn">View my work</a>
			</header>

			{/* About Section */}
			<section id="about" className="about" data-aos="fade-up" data-aos-delay="200">
				<h2>About Me</h2>
				<p>
					I'm a software developer with experience in JavaScript, React, Node.js, and MongoDB.
					I enjoy creating clean, efficient code and solving complex problems.
					When I'm not coding, I'm probably overthinking my code comments or making bad coffee.
				</p>
			</section>

			{/* Projects Section */}
			<section id="projects" className="projects" data-aos="fade-up" data-aos-delay="200">
				<h2>🚀 Projects</h2>
				<div className="project-list">
					<div className="project-card">
						<h3>Portfolio Website</h3>
						<p>This personal portfolio you're viewing now. Built with React and enough caffeine to fuel a small country.</p>
						<div className="links">
							<p>GitHub: <a href="https://github.com/vdannyhng-dev">vdannyhng-dev</a></p>
						</div>
					</div>

					<div className="project-card">
						<h3>Weather App</h3>
						<p>React app fetching real-time weather data from the OpenWeather API. Warning: may depress you if it's raining.</p>
						<div className="links">
							<p>GitHub: <a href="https://github.com/vdannyhng-dev">vdannyhng-dev</a></p>
						</div>
					</div>

					<div className="project-card">
						<h3>Portfolio Website</h3>
						<p>This personal portfolio you're viewing now. Built with React and enough caffeine to fuel a small country.</p>
						<div className="links">
							<p>GitHub: <a href="https://github.com/vdannyhng-dev">vdannyhng-dev</a></p>
						</div>
					</div>

					<div className="project-card">
						<h3>Weather App</h3>
						<p>React app fetching real-time weather data from the OpenWeather API. Warning: may depress you if it's raining.</p>
						<div className="links">
							<p>GitHub: <a href="https://github.com/vdannyhng-dev">vdannyhng-dev</a></p>
						</div>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section id="skills" className="skills" data-aos="fade-right">
				<h2>Skills</h2>
				<ul>
					<li>Frontend: React, HTML, CSS</li>
					<li>Backend: Node.js, MongoDB, MySQL</li>
					<li>Tools: Git, Vite, Docker, Figma</li>
					<li>Languages: Python, Java, C, C++, C#</li>
				</ul>
			</section>

			{/* Contact Section */}
			<section id="contact" className="contact" data-aos="fade-left">
				<h2>📫 Contact</h2>
				<p>Email me at: <a href="mailto:vandannyhoang@icloud.com">vandannyhoang@icloud.com</a></p>
				<p>GitHub: <a href="https://github.com/vdannyhng-dev">vdannyhng-dev</a></p>
				<p>LinkedIn: <a href="https://www.linkedin.com/in/van-danny-hoang-56aa1520b/">Van Danny Hoang</a></p>
			</section>
		
		{/* Footer */}
		<footer className="footer">
			<p>&copy; 2025 Van Danny Hoang. Built with React and mild existential dread.</p>
		</footer>
		</div>
	);
}

export default App