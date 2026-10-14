<p align="center">
  <img src="src/assets/logo.svg" alt="Elektro Van Du Logo" width="96" />
</p>

<h1 align="center">Elektro Van Du – Website</h1>

<p align="center">
  Website des Elektrofachbetriebs <strong>Elektro Van Du</strong> in Lindau (Bodensee), seit 2009.<br />
  <a href="https://www.elektrovandu.com"><strong>www.elektrovandu.com</strong></a>
</p>

---

## Überblick

Eine einseitige, moderne Handwerker-Website mit eigenen Unterseiten für Impressum und Datenschutz.

- **Abschnitte:** Start, Leistungen, Arbeitsweise, Einblicke (Fotogalerie), Über uns, Team & Karriere, Qualität, Kunden, Kontakt
- **Responsive:** optimiert für Smartphone, Tablet und Desktop
- **Datensparsam:** keine Cookies, kein Tracking, keine eingebetteten Drittanbieter-Inhalte; Schriften werden selbst gehostet
- **Schnell:** statische Seite, Fotos fürs Web verkleinert und ohne Metadaten (kein GPS)

## Technik

| Bereich | Eingesetzt |
|---|---|
| Framework | [React 19](https://react.dev) + [Vite 6](https://vite.dev) |
| Styling | Plain CSS mit CSS-Variablen (eine Datei pro Komponente) |
| Animationen | [AOS](https://github.com/michalsnik/aos) (Animate on Scroll) |
| Schriften | Inter & Barlow Condensed via [Fontsource](https://fontsource.org) (lokal gebündelt) |
| Hosting | [Vercel](https://vercel.com), automatisches Deployment bei Push auf `main` |

## Lokale Entwicklung

Voraussetzung: [Node.js](https://nodejs.org) 18 oder neuer.

```bash
npm install       # Abhängigkeiten installieren
npm run dev       # Entwicklungsserver starten (http://localhost:5173)
npm run build     # Produktionsversion nach dist/ bauen
npm run preview   # gebaute Version lokal ansehen
npm run lint      # Code mit ESLint prüfen
```

## Projektstruktur

```
public/                 Favicons und Web-Manifest
src/
├── data/company.js     Zentrale Firmendaten (Name, Adresse, Telefon, E-Mail …)
├── components/         Abschnitte der Seite (Hero, Services, Gallery, Contact …)
├── pages/              Startseite, Impressum, Datenschutz
├── styles/             CSS pro Komponente
├── assets/             Logo und Fotos
├── index.css           Farben, Schriften und globale Stile
└── App.jsx             Einfaches Hash-Routing (#impressum, #datenschutz)
```

## Inhalte anpassen

| Was | Wo |
|---|---|
| Kontaktdaten, Inhaber, Gründungsjahr | [`src/data/company.js`](src/data/company.js) – wird überall auf der Seite und im Impressum verwendet |
| Öffnungszeiten | `hours` in `company.js` eintragen – die Karte im Kontaktbereich erscheint dann automatisch |
| Leistungen | Liste `services` in [`src/components/Services.jsx`](src/components/Services.jsx) |
| Kunden | Liste `customers` in [`src/components/Customer.jsx`](src/components/Customer.jsx) |
| Fotos der Galerie | [`src/components/Gallery.jsx`](src/components/Gallery.jsx), Bilddateien in `src/assets/photos/` |
| Farben | CSS-Variablen in [`src/index.css`](src/index.css) (`--accent` ist der Logo-Farbton) |

**Neue Fotos:** vorher auf max. ca. 1400 px Kantenlänge verkleinern und Metadaten (EXIF/GPS) entfernen.

## Deployment

Jeder Push auf `main` wird von Vercel automatisch gebaut und veröffentlicht – in der Regel ist die Änderung nach etwa einer Minute live.

## Rechtliches

Impressum und Datenschutzerklärung liegen in [`src/pages/`](src/pages/). Wer neue Dienste einbindet (z. B. Kontaktformular, eingebettete Google-Karte, Analyse-Tools, externe Schriften), muss die **Datenschutzerklärung entsprechend ergänzen**.

## Urheberrecht

© Elektro Van Du. Logo, Fotos und Texte dürfen nicht ohne Erlaubnis weiterverwendet werden.
