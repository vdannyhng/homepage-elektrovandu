import '../styles/Team.css';
import Icon from './Icon';

export default function Team() {
    return (
        <section id="team" className="section team">
            <div className="container team-grid">
                <div className="team-copy" data-aos="fade-up">
                    <span className="eyebrow">Unser Team</span>
                    <h2>Erfahrung trifft Innovation</h2>
                    <p>
                        Unser Team setzt sich aus erfahrenen Fachkräften und engagierten jungen Gesellen zusammen.
                        Diese ausgewogene Mischung ermöglicht es uns, bewährte Arbeitsweisen mit neuen, modernen
                        Technologien zu verbinden.
                    </p>
                    <p>
                        Unsere Mitarbeiter sind ausgewiesene Experten auf ihrem jeweiligen Fachgebiet und arbeiten mit
                        großer Leidenschaft und Sorgfalt an der Umsetzung Ihrer Projekte. Durch kontinuierliche Fort- und
                        Weiterbildungen bleiben wir stets auf dem neuesten Stand der Technik.
                    </p>
                    <p className="team-proud">
                        Diese Verbindung aus Erfahrung und Innovation macht den Erfolg unseres Unternehmens aus, und darauf sind wir stolz!
                    </p>
                </div>

                <aside id="karriere" className="career-card" data-aos="fade-up" data-aos-delay="150">
                    <span className="career-icon"><Icon name="graduation" /></span>
                    <span className="career-tag">Karriere & Ausbildung</span>
                    <h3>Werde Teil unseres Teams</h3>
                    <p>
                        Als eingetragener Ausbildungsbetrieb der Handwerkskammer Schwaben bieten wir jungen Menschen eine
                        qualifizierte Ausbildung. Auch erfahrene Fachkräfte sind bei uns herzlich willkommen.
                    </p>
                    <ul>
                        <li><Icon name="check" />Ausbildung im Elektrohandwerk</li>
                        <li><Icon name="check" />Abwechslungsreiche Projekte in der Region</li>
                        <li><Icon name="check" />Regelmäßige Weiterbildung</li>
                    </ul>
                    <p className="career-note">Rufen Sie uns an oder kommen Sie einfach persönlich vorbei. Wir freuen uns auf Ihre Bewerbung!</p>
                    <a href="#kontakt" className="btn btn--primary">
                        Jetzt bewerben <Icon name="arrow" />
                    </a>
                </aside>
            </div>
        </section>
    );
}
