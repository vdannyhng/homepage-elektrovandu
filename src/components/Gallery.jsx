import '../styles/Gallery.css';
import vehicle from '../assets/photos/firmenfahrzeug.jpg';
import switchInstall from '../assets/photos/schalter-montage.jpg';
import measurement from '../assets/photos/e-check-messung.jpg';
import planning from '../assets/photos/planung-buero.jpg';
import buildingTech from '../assets/photos/gebaeudetechnik.jpg';
import location from '../assets/photos/standort.jpg';

const photos = [
    { src: vehicle, area: 'vehicle', caption: 'Immer mobil in Lindau und Umgebung', alt: 'Firmenfahrzeug von Elektro Van Du mit Logo' },
    { src: switchInstall, area: 'switch', caption: 'Installation mit Schutzausrüstung', alt: 'Montage eines Schalterprogramms mit Helm und Gesichtsschutz' },
    { src: measurement, area: 'measure', caption: 'E-Check: Messung nach VDE', alt: 'Prüfung einer Steckdose mit einem Installationstester' },
    { src: planning, area: 'plan', caption: 'Planung & Dokumentation', alt: 'Arbeit am Computer im Büro' },
    { src: buildingTech, area: 'tech', caption: 'Moderne Gebäudetechnik', alt: 'Bedienung eines Gebäudetechnik-Panels' },
    { src: location, area: 'place', caption: 'Unser Standort in Lindau', alt: 'Firmengelände mit Fahrzeugen und Firmenschild' },
];

export default function Gallery() {
    return (
        <section id="einblicke" className="section gallery">
            <div className="container">
                <div className="section-head" data-aos="fade-up">
                    <span className="eyebrow">Einblicke</span>
                    <h2>Aus unserem Arbeitsalltag</h2>
                    <p>Ehrliches Handwerk statt Stockfotos: So sieht es bei uns aus.</p>
                </div>

                <div className="gallery-grid">
                    {photos.map((photo, i) => (
                        <figure
                            key={photo.area}
                            className={`gallery-item gallery-item--${photo.area}`}
                            data-aos="fade-up"
                            data-aos-delay={(i % 3) * 100}
                        >
                            <img src={photo.src} alt={photo.alt} loading="lazy" />
                            <figcaption>{photo.caption}</figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
