import '../styles/Services.css';
import Icon from './Icon';

const services = [
    {
        icon: 'plug',
        title: 'Elektroinstallation',
        text: 'Neubau, Sanierung oder Erweiterung: Wir planen und installieren Ihre Elektroanlage normgerecht, sauber und zukunftssicher.',
    },
    {
        icon: 'cpu',
        title: 'Automatisierung',
        text: 'Steuerungen und Automatisierungstechnik für Gewerbe und Gebäude, damit Abläufe zuverlässig und effizient funktionieren.',
    },
    {
        icon: 'home',
        title: 'Home-Bus-Systeme',
        text: 'Intelligente Gebäudesteuerung für Licht, Jalousien und Heizung. Komfortabel bedienbar und flexibel erweiterbar.',
    },
    {
        icon: 'phone',
        title: 'Telekommunikation',
        text: 'Telefonanlagen, Sprechanlagen und Anschlüsse. Wir sorgen dafür, dass Sie zuverlässig erreichbar sind.',
    },
    {
        icon: 'network',
        title: 'Netzwerktechnik',
        text: 'Strukturierte Verkabelung, Netzwerkdosen und Datenschränke für stabiles, schnelles Internet im ganzen Gebäude.',
    },
    {
        icon: 'shield',
        title: 'E-Check',
        text: 'Prüfung und Dokumentation Ihrer Elektroanlagen und Geräte nach VDE. Ein anerkannter Nachweis gegenüber Versicherungen.',
    },
    {
        icon: 'charge',
        title: 'E-Mobilität',
        text: 'Als E-Mobilität-Fachbetrieb installieren und prüfen wir Ladelösungen für Ihr Elektrofahrzeug, sicher und normgerecht.',
    },
    {
        icon: 'wrench',
        title: 'Kundendienst',
        text: 'Störung, Reparatur oder Erweiterung: Wir sind schnell vor Ort und kümmern uns zuverlässig um Ihr Anliegen.',
    },
];

export default function Services() {
    return (
        <section id="leistungen" className="section services">
            <div className="container">
                <div className="section-head" data-aos="fade-up">
                    <span className="eyebrow">Leistungen</span>
                    <h2>Alles rund um Strom, Daten und Steuerung</h2>
                    <p>
                        Ob Privathaushalt, Gewerbe oder öffentliche Einrichtung: Wir bieten Ihnen das komplette
                        Spektrum moderner Elektrotechnik aus einer Hand.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, i) => (
                        <article
                            key={service.title}
                            className="service-card"
                            data-aos="fade-up"
                            data-aos-delay={(i % 4) * 100}
                        >
                            <span className="service-icon"><Icon name={service.icon} /></span>
                            <span className="service-index">{String(i + 1).padStart(2, '0')}</span>
                            <h3>{service.title}</h3>
                            <p>{service.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
