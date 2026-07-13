import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const translations = {
  de: {
    title: "Impressum",
    company: "Ursula Heinke",
    address: "Gräfenthaler Straße 4, 96337 Ludwigsstadt, Deutschland",
    representative: "Eigentümer: Ursula Heinke",
    contact: "E-Mail: UrsulaHeinke@gmx.de",
    register: "Amtsgericht Coburg, HRB noch nicht vorhanden",
    vat: "USt-IdNr.: noch nicht vorhanden",
    dispute: "Verbraucherstreitbeilegung/Universalschlichtungsstelle: Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    note: "Haftungsausschluss: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links."
  }
};

export default function Impressum() {
  const [language, setLanguage] = useState("de");
  const t = translations[language];

  useEffect(() => {
    const storedLang = localStorage.getItem("language") || "de";
    setLanguage(storedLang);
  }, []);

  return (
    <section className="py-20 px-6 bg-slate-900 min-h-screen text-indigo-100">
      <Helmet>
        <title>{t.title} | Ursula Heinke</title>
        <meta name="description" content="Impressum und rechtliche Informationen zu Urslua Heinke." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
        <h1 className="text-4xl font-bold text-blue-400 mb-6">{t.title}</h1>
        <p><strong>Firmenname:</strong> {t.company}</p>
        <p><strong>Adresse:</strong> {t.address}</p>
        <p><strong>Vertretungsberechtigter:</strong> {t.representative}</p>
        <p><strong>Kontakt:</strong> {t.contact}</p>
        <p><strong>Registereintrag:</strong> {t.register}</p>
        <p><strong>Umsatzsteuer-ID:</strong> {t.vat}</p>
        <p className="mt-4">{t.dispute}</p>
        <p className="mt-4">{t.note}</p>
      </div>
    </section>
  );
}
