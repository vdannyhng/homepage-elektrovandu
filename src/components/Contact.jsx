import '../styles/Contact.css';
import Icon from './Icon';
import { company, telHref } from '../data/company';
import entrancePhoto from '../assets/photos/inhaber-eingang.jpg';

export default function Contact() {
    const address = `${company.street}, ${company.zip} ${company.city}`;
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${company.name}, ${address}`)}`;

    const items = [
        {
            icon: 'phone',
            label: 'Telefon (Mobil)',
            value: company.phone,
            href: telHref(company.phone),
            extra: <>Festnetz: <a href={telHref(company.landline)}>{company.landline}</a> · Fax: {company.fax}</>,
        },
        {
            icon: 'mail',
            label: 'E-Mail',
            value: company.email,
            href: `mailto:${company.email}`,
        },
        {
            icon: 'pin',
            label: 'Adresse',
            value: address,
            href: mapsUrl,
            external: true,
            extra: 'Route in Google Maps öffnen',
        },
        company.hours && {
            icon: 'clock',
            label: 'Öffnungszeiten',
            value: company.hours,
        },
    ].filter(Boolean);

    return (
        <section id="kontakt" className="section section--dark contact">
            <div className="container contact-grid">
                <div className="contact-copy" data-aos="fade-up">
                    <span className="eyebrow">Kontakt</span>
                    <h2>Sprechen wir über Ihr Projekt</h2>
                    <p>
                        Gerne beraten wir Sie umfassend zu allen Fragen rund um Elektroinstallationen und
                        Automatisierungstechnik. Nehmen Sie Kontakt mit uns auf. Wir freuen uns darauf, Sie
                        persönlich kennenzulernen!
                    </p>
                    <div className="contact-actions">
                        <a href={telHref(company.phone)} className="btn btn--primary">
                            <Icon name="phone" /> Jetzt anrufen
                        </a>
                        <a href={`mailto:${company.email}?subject=Anfrage%20über%20die%20Website`} className="btn btn--ghost">
                            <Icon name="mail" /> E-Mail schreiben
                        </a>
                    </div>
                    <figure className="contact-photo">
                        <img src={entrancePhoto} alt={`${company.owner} am Eingang des Büros`} loading="lazy" />
                        <figcaption>
                            <strong>{company.owner}</strong>
                            Ihr persönlicher Ansprechpartner
                        </figcaption>
                    </figure>
                </div>

                <ul className="contact-cards">
                    {items.map((item, i) => (
                        <li key={item.label} data-aos="fade-up" data-aos-delay={i * 80}>
                            <span className="contact-icon"><Icon name={item.icon} /></span>
                            <div>
                                <span className="contact-label">{item.label}</span>
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        className="contact-value"
                                        {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                                    >
                                        {item.value}
                                    </a>
                                ) : (
                                    <span className="contact-value">{item.value}</span>
                                )}
                                {item.extra && <span className="contact-extra">{item.extra}</span>}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
