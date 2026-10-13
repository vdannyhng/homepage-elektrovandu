import LegalLayout from "../components/LegalLayout";
import { company, telHref } from "../data/company";

export default function Impressum() {
  return (
    <LegalLayout title="Impressum">
      <section>
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          {company.name}
          <br />
          Inhaber: {company.owner}
          <br />
          {company.street}
          <br />
          {company.zip} {company.city}
        </p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          Mobil: <a href={telHref(company.phone)}>{company.phone}</a>
          <br />
          Telefon: <a href={telHref(company.landline)}>{company.landline}</a>
          <br />
          Fax: {company.fax}
          <br />
          E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a>
        </p>
      </section>

      {company.vatId && (
        <section>
          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
            <br />
            {company.vatId}
          </p>
        </section>
      )}

      <section>
        <h2>Berufsrechtliche Angaben</h2>
        <p>
          Berufsbezeichnung: {company.ownerTitle}
          <br />
          Verliehen in: Deutschland (Industrie- und Handelskammer Schwaben)
        </p>
        <p>
          Zuständige Kammer und Eintragung in der Handwerksrolle:
          <br />
          Handwerkskammer für Schwaben
          <br />
          Siebentischstraße 52–58, 86161 Augsburg
          <br />
          <a href="https://www.hwk-schwaben.de" target="_blank" rel="noopener noreferrer">www.hwk-schwaben.de</a>
        </p>
        <p>
          Es gelten folgende berufsrechtliche Regelungen: Gesetz zur Ordnung des Handwerks
          (Handwerksordnung), einsehbar unter{" "}
          <a href="https://www.gesetze-im-internet.de/hwo/" target="_blank" rel="noopener noreferrer">
            www.gesetze-im-internet.de/hwo
          </a>
          .
        </p>
        <p>Mitglied der Elektro-Innung Lindau.</p>
      </section>

      <section>
        <h2>Verbraucherstreitbeilegung</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section>
        <h2>Haftung für Inhalte</h2>
        <p>
          Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als
          Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
          verantwortlich.
        </p>
      </section>

      <section>
        <h2>Haftung für Links</h2>
        <p>
          Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
          haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
          verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
          entfernen.
        </p>
      </section>

      <section>
        <h2>Urheberrecht & Bildnachweis</h2>
        <p>
          Die Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Alle Fotos sind
          eigene Aufnahmen von {company.name}.
        </p>
      </section>
    </LegalLayout>
  );
}
