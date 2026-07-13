// Service.jsx
// Erweitert um mehr Services für alle Kategorien und eine list()-Methode (als Mock-API)

// Array der Services (ähnlich wie Product in Product.jsx)
const servicesData = [
  {
    title: "Kurzes Reading – Schnelle Klarheit",
    description: "In nur 15 Minuten bekommst du gezielte Einsichten und Antworten auf deine wichtigsten Fragen. Dieses kurze Reading eignet sich perfekt für schnelle Tarot-Beratungen oder spirituelle Lebensberatung per Telefon oder Video. Buche dein Kurzes Reading online und gewinne sofortige Orientierung in Liebe, Beruf oder Alltag. Ideal für dich, wenn du schnell Klarheit, neue Impulse und eine Entscheidungshilfe brauchst.",
    price: 45,
    duration: "15 Minuten",
    type: "readings",
    benefits: [
      "Sofortige Klarheit zu einer Frage",
      "Persönliche astrologische oder Tarot-Einsichten",
      "Flexibel per Telefon oder Video"
    ],
    image_url: `${process.env.PUBLIC_URL}/images/Kurse/teeest.png`,
    featured: false,
    available_slots: 15,
    created_date: "2025-01-01"
  },
  {
    title: "Standard Reading – Tiefgehende Beratung",
    description: "In 30 Minuten tauchst du intensiv in deine Themen ein – sei es Liebe, Karriere oder persönliche Entwicklung. Dieses Standard Reading bietet dir eine tiefgehende Tarot- und Lebensberatung mit intuitiven Methoden. Buche dein Reading online und erlebe mehr innere Balance, Klarheit und spirituelle Begleitung. Perfekt, wenn du dir fundierte Einsichten und praktische Tipps für dein Leben wünschst.",
    price: 90,
    duration: "30 Minuten",
    type: "readings",
    benefits: [
      "Detaillierte Analyse deiner Situation",
      "Praktische Tipps für den Alltag",
      "Emotionale Unterstützung und Klarheit"
    ],
    image_url: `${process.env.PUBLIC_URL}/images/Kurse/Kartenlegen_test3.png`,
    featured: true,
    available_slots: 10,
    created_date: "2025-02-01"
  },
  {
    title: "Intensiv Reading – Umfassende Transformation",
    description: "In einer vollen Stunde bekommst du tiefe Einsichten, Seelenplan-Analyse und Strategien für dein Wachstum. Dieses Intensiv Reading unterstützt dich bei komplexen Lebensfragen und bietet umfassende Tarot- und spirituelle Lebensberatung. Buche dein Intensiv Reading online und erfahre Klarheit, Transformation und neue Perspektiven. Ideal, wenn du dich persönlich weiterentwickeln und deine Zukunft bewusst gestalten willst.",
    price: 180,
    duration: "60 Minuten",
    type: "readings",
    benefits: [
      "Umfassende Seelenplan-Entdeckung",
      "Langfristige Handlungspläne",
      "Tiefe emotionale Heilung"
    ],
    image_url: `${process.env.PUBLIC_URL}/images/Kurse/Kartenlegen_test2.png`,
    featured: true,
    available_slots: 8,
    created_date: "2025-03-01"
  },

  // Kategorie: gruppenkurs – Erweitert um Waldbaden
  {
    title: "Waldbaden – Achtsamkeit in der Natur",
    description: "Erlebe heilsame Waldbaden-Sitzungen ab 5 Personen in ausgewählten Wäldern. Entspanne dich, tanke neue Energie und verbinde dich bewusst mit der Natur. Die Sessions finden im Allersberger (Rothsee) Wald, Seßlacher Wald oder Lauensteiner Wald statt. Buche jetzt deinen Platz und genieße Momente der inneren Ruhe, Regeneration und Achtsamkeit. Perfekt, um neue Klarheit zu gewinnen.",
    price: 55,
    duration: "2 Stunden",
    type: "gruppenkurs",
    benefits: ["Stressabbau durch Naturverbundenheit", "Gruppenenergie für tiefe Entspannung", "Achtsamkeitsübungen in malerischen Wäldern"],
    image_url: `${process.env.PUBLIC_URL}/images/Kurse/waldcoaching_test2.png`,
    featured: true,
    available_slots: 10,
    created_date: "2025-04-01"
  },

/*  // Kategorie: online_kurs – Unverändert, aber SEO-optimiert
  {
    title: "Online-Meditation Kurs",
    description: "Selbstgesteuerter Kurs mit Videos und Übungen für tägliche Meditation und Achtsamkeit. Erreichen Sie innere Balance flexibel von zu Hause aus. Melden Sie sich an für Ihren Weg zur Gelassenheit. SEO: Online-Meditation lernen, Achtsamkeitskurs digital, spirituelle Meditation online.",
    price: 99,
    duration: "6 Wochen",
    type: "online_kurs",
    benefits: ["Flexibles Lernen", "Tägliche Übungen", "Community-Support"],
    image_url: `${process.env.PUBLIC_URL}/images/Kurse/online_kurs_example.png`,
    featured: false,
    available_slots: 20,
    created_date: "2025-05-01"
  },
*/
  // Kategorie: workshop – Ersetzt durch Basis-Kurs Kartenlegen (marktgerecht: 199€ für 6-stündigen Workshop, typisch für Einsteiger-Kurse)
  {
    title: "Basis-Kurs: Kartenlegen lernen für die Selbstständigkeit",
    description: "Lerne in diesem praxisnahen Workshop die Grundlagen des Kartenlegens mit Tarot und Lenormand – ideal für private Nutzung oder als solide Basis für deine Selbstständigkeit als Berater. Du bekommst Tipps zu Ethik, Klientenakquise und dem Aufbau eines eigenen Angebots. Dauer: 5 Stunden (1 Tag). Preis: 199€. Investiere in deine spirituelle Karriere und erweitere dein Wissen für professionelle Beratung.",
    price: 199,
    duration: "5 Stunden (1 Tag)",
    type: "workshop",
    benefits: ["Grundlagen von Tarot und Lenormand", "Praxisübungen und Deutungen", "Tipps für Selbstständigkeit und Klientenarbeit"],
    image_url: `${process.env.PUBLIC_URL}/images/Kurse/kurs1.png`,
    featured: true,
    available_slots: 12,
    created_date: "2025-06-01"
  }
  // Füge bei Bedarf mehr hinzu
];

export const ServiceData = servicesData; // Exportiere das Array für synchrones Laden

// Neu: Separates Array für Typen (Kategorien) mit dedizierten Vorschaubildern, ähnlich wie Categories in Product.jsx
export const Types = [
  {
    name: "readings",
    display_name: "Readings & Beratung",
    preview_image_url: `${process.env.PUBLIC_URL}/images/Kurse/Kartenlegen_test2.png`,
    description: "Persönliche Readings für schnelle Klarheit und tiefe Transformation."
  },
  {
    name: "gruppenkurs",
    display_name: "Gruppenkurse",
    preview_image_url: `${process.env.PUBLIC_URL}/images/Kurse/Kartenlegen_test1.png`,
    description: "Gemeinsame Erlebnisse in der Gruppe für Wachstum und Verbindung."
  },
/*  {
    name: "online_kurs",
    display_name: "Online Kurse",
    preview_image_url: `${process.env.PUBLIC_URL}/images/Kurse/Kartenlegen_test3.png`,
    description: "Flexibles Lernen von zu Hause aus für Ihre spirituelle Entwicklung."
  },
*/  {
    name: "workshop",
    display_name: "Workshops",
    preview_image_url: `${process.env.PUBLIC_URL}/images/Kurse/kurs1.png`,
    description: "Intensive Praxistage für neue Fähigkeiten und Erkenntnisse."
  }
  // Füge bei Bedarf mehr hinzu (ohne "all")
];
