// Zentrale Firmendaten. Felder mit `null` werden auf der Seite ausgeblendet.
export const company = {
  name: "Elektro Van Du",
  owner: "Thanh Van Du",
  ownerTitle: "Geprüfter Industriemeister Fachrichtung Elektrotechnik (IHK)",
  founded: 2009,
  street: "Friedrichshafener Straße 89",
  zip: "88131",
  city: "Lindau (Bodensee)",
  phone: "0160 970 915 93", // Hauptnummer (Mobil)
  landline: "08382 911 39 98",
  fax: "08382 911 39 97",
  email: "elektrovandu@aol.de",
  hours: null,
  vatId: null, // USt-IdNr., falls vorhanden
  hosting: null, // Name und Anschrift des Hosting-Anbieters, sobald feststehend
};

export const telHref = (number) => `tel:${number.replace(/[^\d+]/g, "")}`;
