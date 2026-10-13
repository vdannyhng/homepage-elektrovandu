import '../styles/References.css';
import Icon from './Icon';

const references = [
    {
        tag: 'Mitgliedschaft',
        title: 'Handwerkskammer Schwaben',
        text: 'Als eingetragener Betrieb der Handwerkskammer Schwaben stehen wir für Qualität, Zuverlässigkeit und handwerkliches Können, abgesichert durch regelmäßige Weiterbildungen und Prüfungen.',
        link: 'https://www.hwk-schwaben.de',
        linkLabel: 'hwk-schwaben.de',
    },
    {
        tag: 'Zertifizierung',
        title: 'E-Check',
        text: 'Wir prüfen elektrische Anlagen und Geräte und dokumentieren ihren ordnungsgemäßen Zustand gemäß VDE. Das schützt vor Schäden durch Defekte und wird von Versicherungen als Nachweis anerkannt.',
        link: 'https://www.elektrohandwerk.de/privat/themen/e-check.html',
        linkLabel: 'Mehr zum E-Check',
    },
    {
        tag: 'Mitgliedschaft',
        title: 'Elektroinnung Lindau',
        text: 'Als Innungsbetrieb verpflichten wir uns zu höchsten Qualitätsstandards und kontinuierlicher Weiterbildung, für eine fachgerechte Ausführung nach aktuellen Normen und Richtlinien.',
        link: 'https://www.elektroinnung-lindau.de/index.html',
        linkLabel: 'elektroinnung-lindau.de',
    },
];

export default function References() {
    return (
        <section id="qualitaet" className="section section--alt references">
            <div className="container">
                <div className="section-head" data-aos="fade-up">
                    <span className="eyebrow">Qualität</span>
                    <h2>Geprüft, zertifiziert, organisiert</h2>
                    <p>Unsere Arbeit entspricht den hohen Standards des deutschen Elektrohandwerks.</p>
                </div>

                <div className="reference-list">
                    {references.map((ref, i) => (
                        <article key={ref.title} className="reference-card" data-aos="fade-up" data-aos-delay={i * 100}>
                            <span className="reference-tag">{ref.tag}</span>
                            <h3>{ref.title}</h3>
                            <p>{ref.text}</p>
                            <a href={ref.link} target="_blank" rel="noopener noreferrer" className="reference-link">
                                {ref.linkLabel} <Icon name="external" />
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
