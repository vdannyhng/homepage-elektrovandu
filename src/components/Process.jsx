import '../styles/Process.css';

const steps = [
    { title: 'Beratung', text: 'Wir hören zu, schauen uns die Situation vor Ort an und beraten Sie ehrlich.' },
    { title: 'Planung', text: 'Sie erhalten ein klares Angebot und eine durchdachte Planung für Ihr Projekt.' },
    { title: 'Umsetzung', text: 'Unser Fachpersonal arbeitet sauber, termintreu und nach VDE-DIN-Normen.' },
    { title: 'Prüfung', text: 'Zum Abschluss messen und prüfen wir alles und übergeben eine fertige Anlage.' },
];

export default function Process() {
    return (
        <section className="section section--dark process">
            <div className="container">
                <div className="section-head" data-aos="fade-up">
                    <span className="eyebrow">So arbeiten wir</span>
                    <h2>Von der Idee bis zur fertigen Anlage</h2>
                    <p>Ein Ansprechpartner, klare Absprachen und ein Ergebnis, auf das Sie sich verlassen können.</p>
                </div>

                <ol className="process-steps">
                    {steps.map((step, i) => (
                        <li key={step.title} data-aos="fade-up" data-aos-delay={i * 120}>
                            <span className="process-number">{i + 1}</span>
                            <h3>{step.title}</h3>
                            <p>{step.text}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
