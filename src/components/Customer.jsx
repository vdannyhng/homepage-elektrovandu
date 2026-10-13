import '../styles/Customer.css';

const customers = [
    'GWG Lindauer Wohnungsgesellschaft mbH',
    'Stadtwerke Lindau',
    'Museum Lindau',
    'Stadtbauamt Lindau',
    'Privatkunden',
];

export default function Customer() {
    return (
        <section id="customer" className="section customer">
            <div className="container customer-inner">
                <div className="customer-head" data-aos="fade-up">
                    <span className="eyebrow">Unsere Kunden</span>
                    <h2>Vertrauen aus der Region</h2>
                    <p>Öffentliche Einrichtungen, Unternehmen und Privathaushalte setzen auf unsere Arbeit.</p>
                </div>

                <ul className="customer-list">
                    {customers.map((name, i) => (
                        <li key={name} data-aos="zoom-in" data-aos-delay={i * 80}>{name}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
