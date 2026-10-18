// Service.jsx
// Erweitert um mehr Services für alle Kategorien und eine list()-Methode (als Mock-API)

// Array der Services (ähnlich wie Product in Product.jsx)
const servicesData = [
  {
    title: "3-Fragen Herzenspartner-Check",
    description: "Du hast eine drängende Frage zu deinem Herzenspartner, Dualseele oder Seelenplan? Sende Ursula deine 3 wichtigsten Fragen per WhatsApp. Du erhältst eine intuitive Ersteinschätzung als persönliche Sprachnachricht direkt auf dein Smartphone – 100% kostenfrei.",
    price: 0,
    duration: "WhatsApp Audio-Impuls",
    type: "readings",
    benefits: [
      "100% kostenlos & unverbindlich per WhatsApp",
      "Persönliche Audio-Sprachnachricht von Ursula Heinke",
      "Erste Tendenzen zu Gedanken & Gefühlen deines Partners"
    ],
    image_url: `/images/Kurse/Kartenlegen_test1.webp`,
    featured: true,
    available_slots: 15,
    created_date: "2026-10-18"
  },
  {
    title: "Express 1-Karten-Audio-Impuls",
    description: "Die schnelle Seelen-Antwort für zwischendurch: Ursula zieht 1 gezielte Karte (Tarot oder Lenormand) auf deine konkrete Frage zu Liebe, Herzenspartner oder Beruf und sendet dir deine individuelle Audio-Deutung innerhalb von 12–24 Stunden direkt per WhatsApp.",
    price: 19,
    duration: "Audio-Deutung (12–24h)",
    type: "readings",
    benefits: [
      "Gezielte Kartenlegung auf 1 konkrete Frage",
      "Schnelle Audio-Antwort ohne Termindruck (12–24h)",
      "Dauerhaft auf deinem Smartphone abrufbar"
    ],
    image_url: `/images/Kurse/Kartenlegen_test3.webp`,
    featured: false,
    available_slots: 20,
    created_date: "2026-10-18"
  },
  {
    title: "Standard Reading – 30 Minuten Klarheit",
    description: "In 30 Minuten tauchst du intensiv in deine wichtigsten Themen ein – Liebe, Partnerschaft, Familie oder berufliche Neuorientierung. Dieses Reading bietet dir fundierte astrologische und mediale Einsichten per Telefon oder Video. Perfekt für schnelle, treffsichere Antworten und konkrete Entscheidungshilfe.",
    price: 90,
    duration: "30 Minuten",
    type: "readings",
    benefits: [
      "Gezielte Analyse deiner aktuellen Lebenssituation",
      "Persönliche Legung mit Tarot & Lenormand",
      "Flexibel und vertraulich per Telefon oder WhatsApp-Call"
    ],
    image_url: `/images/Kurse/Kartenlegen_test3.webp`,
    featured: false,
    available_slots: 10,
    created_date: "2025-02-01"
  },
  {
    title: "Seelen-Klarheits-Kompass – Intensiv-Reading",
    description: "Das umfassende 60-Minuten Intensiv-Reading mit Spezialisierung auf Gedankenlegung für den Herzenspartner, Zwillingsseelen- und Seelenplan-Verbindungen. Ursula Heinke deckt verborgene Blockaden auf und gibt dir glasklare Handlungsschritte – inkl. Audio-Aufnahme & 7 Tage WhatsApp-Support.",
    price: 149,
    duration: "60 Minuten Intensiv-Call",
    type: "readings",
    benefits: [
      "Gedankenlegung auf Herzenspartner & Seelenplan (60 Min)",
      "Inkl. Audio-Aufnahme der Session & MP3 'Innerer Frieden'",
      "Inkl. 7 Tage WhatsApp-Support & 15-Min-Klarheitsgarantie"
    ],
    image_url: `/images/Kurse/Kartenlegen_test2.webp`,
    featured: true,
    available_slots: 6,
    created_date: "2026-10-14"
  },
  {
    title: "30 Tage Herzensweg-Begleitung (VIP Retainer)",
    description: "Die intensive 4-wöchige 1:1 Begleitung für deine emotionale Stabilität, Liebeskummer-Heilung oder Beziehungs-Neuausrichtung. Beinhaltet 4 wöchentliche 1:1 Readings (je 45 Min) plus deinen persönlichen WhatsApp-Notfall-Joker für sofortigen Halt bei akuten Krisen.",
    price: 390,
    duration: "4 Wochen 1:1 VIP-Begleitung",
    type: "readings",
    benefits: [
      "4x wöchentliche 1:1 Readings per Telefon/WhatsApp (je 45 Min)",
      "Priorisierter WhatsApp-Support für akute Fragen & Rückfälle",
      "Fortlaufende energetische Seelenpartner- & Blockadenbegleitung"
    ],
    image_url: `/images/Kurse/coaching_test1.webp`,
    featured: true,
    available_slots: 4,
    created_date: "2026-10-18"
  },
  {
    title: "Zertifizierte Ausbildung: Intuitive Kartenlegerin",
    description: "Die exklusive 10-wöchige Fachausbildung in persönlicher 1:1 Mentorenschaft mit Ursula Heinke. Lerne das mediale Kartenlegen (Tarot & Lenormand), Klientenführung und den Praxisaufbau für deine erfolgreiche Selbstständigkeit.",
    price: 2490,
    duration: "10 Wochen 1:1 Mentoring",
    type: "ausbildung",
    benefits: [
      "Persönliche 1:1 Begleitung durch Ursula Heinke (25+ J. Erfahrung)",
      "Praxis-Ausbildung in Tarot, Lenormand & Intuition",
      "Offizielles Abschluss-Zertifikat der Heinke-Akademie"
    ],
    image_url: `/images/Kurse/kurs1.webp`,
    featured: true,
    available_slots: 3,
    created_date: "2026-10-14"
  },
  {
    title: "Frauen-Retreat: Herzenszeit",
    description: "Zurück zu dir – Ein besonderer Tag für dein Herz, deine Seele und dein inneres Strahlen. Gemeinsam fühlen, loslassen, heilen und wachsen. Erlebe Kakaozeremonie, tiefe Meditation mit Klangschalen, Blockadenlösung, Kartenlegung und stärke deine Selbstliebe. Mit Ursula und Jessica im Studio Frieda, Coburg.",
    price: 129,
    duration: "3 Stunden (13:00 - 16:00 Uhr)",
    type: "workshop",
    benefits: ["Kakaozeremonie & Klangschalen-Meditation", "Persönliche Kartenlegung", "Geführte Blockadenlösung"],
    image_url: `/images/Kurse/seminar.webp`,
    featured: false,
    available_slots: 15,
    created_date: "2026-11-07"
  },
  {
    title: "Waldbaden – Achtsamkeit in der Natur",
    description: "Erlebe heilsame Waldbaden-Sitzungen ab 5 Personen in ausgewählten Wäldern (Frankenwald oder Ort nach Wahl). Entspanne dich, tanke neue Lebensenergie und verbinde dich bewusst mit der regenerierenden Kraft der Natur.",
    price: 55,
    duration: "2 Stunden",
    type: "gruppenkurs",
    benefits: [
      "Stressabbau & seelische Erdung im Wald",
      "Achtsamkeits-Übungen & geführte Natur-Meditation",
      "Termin flexibel nach Vereinbarung (ab 5 Personen)"
    ],
    image_url: `/images/Kurse/waldcoaching_test2.webp`,
    featured: true,
    available_slots: 10,
    created_date: "2025-04-01"
  },
  {
    title: "Basis-Kurs: Kartenlegen lernen",
    description: "Lerne in diesem praxisnahen 1-Tages-Workshop die Grundlagen des Kartenlegens mit Tarot und Lenormand – ideal für die private Nutzung oder als erster Einblick in die spirituelle Beratung.",
    price: 199,
    duration: "5 Stunden (1 Tag)",
    type: "workshop",
    benefits: ["Grundlagen von Tarot und Lenormand", "Praxisübungen und Deutungen", "Tipps für Klientenarbeit"],
    image_url: `/images/Kurse/kurs1.webp`,
    featured: false,
    available_slots: 12,
    created_date: "2025-06-01"
  }
];

export const ServiceData = servicesData.filter(service => {
  // Automatisches Verstecken des Frauen-Retreats nach dem 7. November 2026
  if (service.title === "Frauen-Retreat: Herzenszeit") {
    const eventDate = new Date("2026-11-08T00:00:00");
    if (new Date() > eventDate) return false;
  }
  return true;
}); // Exportiere das Array für synchrones Laden

// Neu: Separates Array für Typen (Kategorien) mit dedizierten Vorschaubildern
export const Types = [
  {
    name: "readings",
    display_name: "Readings & Beratung",
    preview_image_url: `/images/Kurse/Kartenlegen_test2.webp`,
    description: "Persönliche Readings für schnelle Klarheit und tiefe seelische Transformation."
  },
  {
    name: "ausbildung",
    display_name: "Zertifizierte Ausbildung",
    preview_image_url: `/images/Kurse/kurs1.webp`,
    description: "10-wöchiges Intensiv-Mentoring zur intuitiven Kartenlegerin mit Zertifikat."
  },
  {
    name: "workshop",
    display_name: "Workshops & Retreats",
    preview_image_url: `/images/Kurse/seminar.webp`,
    description: "Intensive Praxistage, Herzenszeit-Retreats und Fähigkeitenvertiefung."
  },
  {
    name: "gruppenkurs",
    display_name: "Gruppenkurse & Waldbaden",
    preview_image_url: `/images/Kurse/waldcoaching_test2.webp`,
    description: "Achtsame Natur- und Gruppenerlebnisse für Regeneration und neue Energie."
  }
];
