import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const translations = {
  de: {
    title: "Datenschutzerklärung",
    intro: "Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und Zweck der Erhebung und Verwendung personenbezogener Daten auf unserer Website. Die Website wird statisch über GitHub gehostet.",
    responsable: "Verantwortlicher: Ursula Heinke, Krumbach 11, 96145 Seßlach, Deutschland, E-Mail: ",
    responsableEmail: "UrsulaHeinke@gmx.de",
    access: "Beim Aufruf der Website werden durch den Hosting-Anbieter (GitHub) automatische Logfiles erstellt, die Daten wie IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp und Referrer-URL enthalten können. Diese Daten dienen der technischen Bereitstellung der Website und werden nicht für Marketingzwecke genutzt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Funktionsfähigkeit der Website).",
    personal: "Wir erheben personenbezogene Daten (z.B. Name, E-Mail-Adresse) nur, wenn Sie uns diese freiwillig per E-Mail mitteilen, z.B. bei einer Anfrage oder Bestellung. Diese Daten werden ausschließlich zur Beantwortung Ihrer Anfrage oder zur Vertragserfüllung verwendet und nicht an Dritte weitergegeben. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung oder vorvertragliche Maßnahmen).",
    rightsIntro: "Sie haben folgende Rechte:",
    rights: [
      "Auskunft über Ihre bei uns gespeicherten Daten",
      "Berichtigung unrichtiger Daten",
      "Löschung Ihrer Daten, sofern keine Aufbewahrungspflichten bestehen",
      "Einschränkung der Verarbeitung",
      "Datenübertragbarkeit",
      "Widerspruch gegen die Verarbeitung"
    ],
    rightsContact: "Bei Fragen können Sie sich jederzeit an ",
    rightsContactEmail: "UrsulaHeinke@gmx.de",
    rightsContactSuffix: " wenden. Sie haben zudem ein Beschwerderecht bei der zuständigen Aufsichtsbehörde (z.B. Bayerisches Landesamt für Datenschutzaufsicht).",
    security: "Ihre Daten werden durch technische und organisatorische Maßnahmen gegen Verlust, Zerstörung, Zugriff, Veränderung oder Verbreitung durch unbefugte Personen geschützt. E-Mails werden auf einem sicheren Server gespeichert.",
    update: "Stand: September 2025. Wir behalten uns vor, die Datenschutzerklärung jederzeit anzupassen, um sie an geänderte Rechtslagen oder bei Änderungen des Dienstes sowie der Datenverarbeitung anzupassen."
  }
};

export default function Datenschutz() {
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
        <meta name="description" content={t.intro} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>{t.title}</h1>
        
        <h2 style={{ color: '#4964b0ff', borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '20px' }}>Einführung</h2>
        <p>{t.intro}</p>
        
        <h2 style={{ color: '#4964b0ff', borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '20px' }}>Verantwortlicher</h2>
        <p>{t.responsable}<a href={`mailto:${t.responsableEmail}`}>{t.responsableEmail}</a></p>
        
        <h2 style={{ color: '#4964b0ff', borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '20px' }}>Zugriffsdaten und Server-Logfiles</h2>
        <p>{t.access}</p>
        
        <h2 style={{ color: '#4964b0ff', borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '20px' }}>Personenbezogene Daten und Kontaktaufnahme</h2>
        <p>{t.personal}</p>
        
        <h2 style={{ color: '#4964b0ff', borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '20px' }}>Ihre Rechte</h2>
        <p>{t.rightsIntro}</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
          {t.rights.map((right, index) => (
            <li key={index}>{right}</li>
          ))}
        </ul>
        <p>{t.rightsContact}<a href={`mailto:${t.rightsContactEmail}`}>{t.rightsContactEmail}</a>{t.rightsContactSuffix}</p>
        
        <h2 style={{ color: '#4964b0ff', borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '20px' }}>Sicherheitsmaßnahmen</h2>
        <p>{t.security}</p>
        
        <h2 style={{ color: '#4964b0ff', borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '20px' }}>Aktualisierung der Erklärung</h2>
        <p>{t.update}</p>
      </div>
    </section>
  );
}
