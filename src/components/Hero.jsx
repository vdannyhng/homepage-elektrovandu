import '../styles/Hero.css';
import Icon from './Icon';
import { company } from '../data/company';
import ownerPhoto from '../assets/photos/inhaber-transporter.jpg';

const badges = ['VDE-DIN-konform', 'Innungsbetrieb', 'E-Check-Fachbetrieb', 'Ausbildungsbetrieb'];

export default function Hero() {
    const years = new Date().getFullYear() - company.founded;

    return (
        <section className="hero" id="top">
            <svg className="hero-circuit" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <g className="hero-circuit-base">
                    <path d="M-20 160 H320 L380 220 H620 L680 160 H1220" />
                    <path d="M-20 420 H200 L260 480 H540 L600 540 H1220" />
                    <path d="M860 -20 V120 L920 180 V400 L860 460 V720" />
                    <path d="M120 -20 V80 L180 140 V300" />
                    <path d="M1040 300 H1220" />
                </g>
                <g className="hero-circuit-pulse">
                    <path d="M-20 160 H320 L380 220 H620 L680 160 H1220" />
                    <path d="M-20 420 H200 L260 480 H540 L600 540 H1220" />
                    <path d="M860 -20 V120 L920 180 V400 L860 460 V720" />
                </g>
                <g className="hero-circuit-nodes">
                    <circle cx="380" cy="220" r="5" />
                    <circle cx="680" cy="160" r="5" />
                    <circle cx="260" cy="480" r="5" />
                    <circle cx="920" cy="180" r="5" />
                    <circle cx="180" cy="300" r="5" />
                    <circle cx="1040" cy="300" r="5" />
                </g>
            </svg>

            <div className="container hero-inner">
                <div className="hero-copy" data-aos="fade-up">
                    <span className="eyebrow">Elektrofachbetrieb in {company.city} · seit {company.founded}</span>
                    <h1>
                        Elektrotechnik,<br />
                        auf die Sie sich <span className="hero-highlight">verlassen</span> können.
                    </h1>
                    <p className="hero-lead">
                        Installation, Automatisierung, Home-Bus-Systeme, Telekommunikation und Netzwerktechnik.
                        Von der Planung bis zur fertigen Anlage, sauber ausgeführt und persönlich betreut.
                    </p>
                    <div className="hero-actions">
                        <a href="#kontakt" className="btn btn--primary">
                            Anfrage stellen <Icon name="arrow" />
                        </a>
                        <a href="#leistungen" className="btn btn--ghost">Unsere Leistungen</a>
                    </div>
                    <ul className="hero-badges">
                        {badges.map((badge) => (
                            <li key={badge}><Icon name="check" />{badge}</li>
                        ))}
                    </ul>
                </div>

                <figure className="hero-visual" data-aos="fade-left" data-aos-delay="200">
                    <img src={ownerPhoto} alt={`${company.owner}, Inhaber von ${company.name}, vor dem Firmenfahrzeug`} width="1050" height="1400" />
                    <figcaption className="hero-owner">
                        <span className="hero-owner-dot" />
                        <div>
                            <strong>{company.owner}</strong>
                            <span>Inhaber · Industriemeister Elektrotechnik</span>
                        </div>
                    </figcaption>
                </figure>
            </div>

            <div className="container">
                <dl className="hero-stats" data-aos="fade-up" data-aos-delay="300">
                    <div>
                        <dt>{years}+</dt>
                        <dd>Jahre Erfahrung</dd>
                    </div>
                    <div>
                        <dt>{company.founded}</dt>
                        <dd>gegründet in Lindau</dd>
                    </div>
                    <div>
                        <dt>100%</dt>
                        <dd>nach VDE-Normen</dd>
                    </div>
                    <div>
                        <dt>1x jährlich</dt>
                        <dd>E-Check-Schulung</dd>
                    </div>
                </dl>
            </div>
        </section>
    );
}
