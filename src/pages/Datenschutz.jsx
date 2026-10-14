import LegalLayout from "../components/LegalLayout";
import { company, telHref } from "../data/company";

export default function Datenschutz() {
  return (
    <LegalLayout title="Datenschutz">
      <section>
        <h2>1. Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der
          Datenschutz-Grundverordnung (DSGVO) ist:
        </p>
        <p>
          {company.name}, Inhaber {company.owner}
          <br />
          {company.street}, {company.zip} {company.city}
          <br />
          Telefon: <a href={telHref(company.phone)}>{company.phone}</a>
          <br />
          E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a>
        </p>
      </section>

      <section>
        <h2>2. Das Wichtigste in Kürze</h2>
        <p>
          Diese Website ist bewusst datensparsam aufgebaut. Wir setzen <strong>keine Cookies</strong>,
          verwenden <strong>keine Analyse- oder Tracking-Werkzeuge</strong> und binden keine Inhalte von
          Drittanbietern ein. Schriftarten und Bilder werden direkt von unserem eigenen Server geladen.
          Personenbezogene Daten verarbeiten wir nur, soweit dies technisch notwendig ist oder Sie uns
          von sich aus kontaktieren.
        </p>
      </section>

      <section>
        <h2>3. Hosting und Server-Logfiles</h2>
        <p>
          Diese Website wird bei Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA
          („Vercel“) gehostet. Beim Aufruf der Website werden durch den Server automatisch Informationen erfasst, die Ihr
          Browser übermittelt (sogenannte Server-Logfiles). Dazu gehören:
        </p>
        <ul>
          <li>IP-Adresse des anfragenden Geräts</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>aufgerufene Seite bzw. Datei</li>
          <li>Referrer-URL (die zuvor besuchte Seite)</li>
          <li>verwendeter Browser und Betriebssystem</li>
        </ul>
        <p>
          Diese Daten sind für die sichere und stabile Auslieferung der Website erforderlich, etwa zur
          Abwehr von Angriffen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse
          liegt im sicheren Betrieb der Website. Die Logfiles werden nach kurzer Zeit automatisch gelöscht,
          sofern sie nicht zur Aufklärung eines Sicherheitsvorfalls benötigt werden.
        </p>
        <p>
          Die Auslieferung erfolgt in der Regel über Server in der EU (Frankfurt am Main). Da Vercel
          ein Unternehmen mit Sitz in den USA ist, kann eine Übermittlung von Daten in die USA nicht
          ausgeschlossen werden. Vercel ist nach dem EU-U.S. Data Privacy Framework zertifiziert; die
          Übermittlung stützt sich damit auf den Angemessenheitsbeschluss der EU-Kommission (Art. 45 DSGVO).
          Weitere Informationen:{" "}
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            vercel.com/legal/privacy-policy
          </a>
          .
        </p>
      </section>

      <section>
        <h2>4. SSL- bzw. TLS-Verschlüsselung</h2>
        <p>
          Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
          Verbindung erkennen Sie am „https://“ in der Adresszeile und am Schloss-Symbol Ihres Browsers.
        </p>
      </section>

      <section>
        <h2>5. Kontaktaufnahme per E-Mail oder Telefon</h2>
        <p>
          Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben (z. B. Name,
          Kontaktdaten, Anliegen), um Ihre Anfrage zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
          DSGVO, wenn Ihre Anfrage mit einem Vertrag oder der Anbahnung eines Auftrags zusammenhängt, und im
          Übrigen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
        </p>
        <p>
          Wir löschen Ihre Daten, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine
          gesetzlichen Aufbewahrungspflichten (z. B. aus Handels- und Steuerrecht) entgegenstehen.
        </p>
      </section>

      <section>
        <h2>6. Links zu anderen Websites</h2>
        <p>
          Unsere Website enthält Links zu externen Angeboten, etwa zur Handwerkskammer, zur Elektro-Innung
          oder zu Google Maps für die Routenplanung. Erst wenn Sie einen solchen Link anklicken, werden Sie
          auf die Seite des jeweiligen Anbieters weitergeleitet, und dieser kann Daten von Ihnen erheben.
          Für die Datenverarbeitung dort ist der jeweilige Anbieter verantwortlich; bitte beachten Sie dessen
          Datenschutzhinweise. Beim bloßen Besuch unserer Website werden keine Daten an diese Anbieter
          übertragen.
        </p>
      </section>

      <section>
        <h2>7. Ihre Rechte</h2>
        <p>Sie haben jederzeit das Recht auf:</p>
        <ul>
          <li>Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>
            Widerspruch gegen Verarbeitungen, die auf Art. 6 Abs. 1 lit. f DSGVO beruhen (Art. 21 DSGVO)
          </li>
        </ul>
        <p>Wenden Sie sich dazu einfach an die oben genannten Kontaktdaten.</p>
        <p>
          Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77
          DSGVO). Für uns zuständig ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade
          18, 91522 Ansbach,{" "}
          <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer">www.lda.bayern.de</a>.
        </p>
      </section>

      <section>
        <h2>8. Aktualität</h2>
        <p>
          Wir passen diese Datenschutzerklärung an, sobald sich die Website oder die rechtlichen Vorgaben
          ändern. Stand: Oktober 2026.
        </p>
      </section>
    </LegalLayout>
  );
}
