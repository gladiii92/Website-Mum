import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const translations = {
  de: {
    title: "Allgemeine Geschäftsbedingungen (AGB)",
    intro: "Diese AGB gelten für alle Verträge mit NobleCutGems.",
    payment: "Zahlung per Banküberweisung, Paypal. Lieferung innerhalb 7 Tage innerhalb Deutschlands & 30 Tage ins Ausland.",
    withdrawal: "Widerrufsrecht: 14 Tage ab Erhalt. Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen (siehe Widerrufsbelehrung auf der Website).",
    liability: "Haftung beschränkt auf Vorsatz und grobe Fahrlässigkeit.",
    guarantee: "Es gelten die gesetzlichen Gewährleistungsrechte.",
    jurisdiction: "Gerichtsstand für alle Streitigkeiten ist Coburg, Deutschland."
  }
};
export default function AGB() {
  const [language, setLanguage] = useState("de");
  const t = translations[language];

  useEffect(() => {
    const storedLang = localStorage.getItem("language") || "de";
    setLanguage(storedLang);
  }, []);

  return (
    <section className="py-20 px-6 bg-slate-900 min-h-screen text-indigo-100">
      <Helmet>
        <title>{t.title} | UrsulaHeinke</title>
        <meta name="description" content={t.intro} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
        <h1 className="text-4xl font-bold text-blue-400 mb-6">{t.title}</h1>
        <p className="mb-4">{t.intro}</p>
        <p className="mb-2"><strong>Zahlung:</strong> {t.payment}</p>
        <p className="mb-2"><strong>Widerruf:</strong> {t.withdrawal}</p>
        <p className="mb-2"><strong>Haftung:</strong> {t.liability}</p>
        <p className="mb-2"><strong>Gewährleistung:</strong> {t.guarantee}</p>
        <p className="mb-2"><strong>Gerichtsstand:</strong> {t.jurisdiction}</p>
        {/* Hier können noch detailliertere AGB ergänzt werden */}
      </div>
    </section>
  );
}
