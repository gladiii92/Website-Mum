// Service.jsx
// Erweitert um mehr Services für alle Kategorien und eine list()-Methode (als Mock-API)

// Array der Services (ähnlich wie Product in Product.jsx)
const servicesData = [
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
    description: "Das umfassende 60-Minuten Intensiv-Reading mit Spezialisierung auf Gedankenlegung für den Herzenspartner, Zwillingsseelen- und Dualseelen-Verbindungen. Ursula Heinke deckt verborgene Blockaden auf und gibt dir glasklare Handlungsschritte.",
    price: 149,
    duration: "60 Minuten",
    type: "readings",
    benefits: [
      "Gedankenlegung auf Herzenspartner & Seelenplan",
      "Aufdeckung karmischer Blockaden & klare Tendenzen",
      "100% vertraulich per Telefon oder WhatsApp-Call"
    ],
    image_url: `/images/Kurse/Kartenlegen_test2.webp`,
    featured: true,
    available_slots: 6,
    created_date: "2026-10-14"
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
