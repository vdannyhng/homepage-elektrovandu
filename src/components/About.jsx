import '../styles/About.css';
import Icon from './Icon';
import { company } from '../data/company';
import cabinetPhoto from '../assets/photos/verteilerschrank.jpg';

const values = ['Neueste Technologien', 'Individuelle Betreuung', 'Sauberkeit auf der Baustelle', 'Ausführung nach VDE-DIN'];

export default function About() {
    return (
        <section id="about" className="section section--alt about">
            <div className="container about-grid">
                <div className="about-visual" data-aos="fade-right">
                    <div className="about-photo">
                        <img src={cabinetPhoto} alt={`${company.owner} bei der Arbeit an einem Verteilerschrank`} width="1050" height="1400" loading="lazy" />
                        <div className="about-year">
                            <span>Seit</span>
                            <strong>{company.founded}</strong>
                            <span>in Lindau</span>
                        </div>
                    </div>
                    <div className="about-quote">
                        <Icon name="bolt" />
                        <p>„Qualität, Sauberkeit und eine fachgerechte Ausführung, das ist unser Anspruch bei jedem Auftrag.“</p>
                    </div>
                </div>

                <div className="about-copy" data-aos="fade-left">
                    <span className="eyebrow">Über uns</span>
                    <h2>Ihr moderner Elektrofachbetrieb am Bodensee</h2>
                    <p>
                        Als moderner Fachbetrieb für Elektroinstallationen stehen wir Ihnen seit {company.founded} zuverlässig zur Seite.
                        Bei der Umsetzung Ihrer Projekte setzen wir nicht nur auf neueste Technologien, sondern legen ebenso großen Wert
                        auf eine individuelle und unkomplizierte Betreuung Ihrer Wünsche.
                    </p>
                    <p>
                        Dank unseres hervorragend geschulten Fachpersonals garantieren wir höchste Qualität, Sauberkeit und eine
                        fachgerechte Ausführung nach den aktuellen deutschen <strong>VDE-DIN-Normen</strong>. Zur Sicherstellung unserer
                        Qualitätsstandards führen wir regelmäßig E-Check-Messungen durch. Unsere Mitarbeiter werden hierfür jährlich
                        speziell geschult.
                    </p>
                    <ul className="about-values">
                        {values.map((value) => (
                            <li key={value}><Icon name="check" />{value}</li>
                        ))}
                    </ul>
                    <p className="about-owner">
                        <strong>{company.owner}</strong>, Inhaber · {company.ownerTitle}
                    </p>
                    <a href="#kontakt" className="btn btn--dark">
                        Persönlich kennenlernen <Icon name="arrow" />
                    </a>
                </div>
            </div>
        </section>
    );
}
