// Service.jsx
// Erweitert um mehr Services für alle Kategorien und eine list()-Methode (als Mock-API)


// Array der Services (ähnlich wie Product in Product.jsx)
const servicesData = [
  {
    title: "Spirituelle Lebensberatung",
    description: "Individuelle Begleitung für Menschen, die Klarheit über ihren Lebensweg suchen. Wir arbeiten mit systemischen Methoden und spiritueller Intuition.",
    price: 120,
    duration: "90 Minuten",
    type: "einzelcoaching",
    benefits: ["Individuelle 1:1 Betreuung", "Tiefgehende Reflexion und Klarheit", "Konkrete Handlungsschritte für Ihren Weg"],
    image_url: `${process.env.PUBLIC_URL}/images/Kurse/teeest.png`,
    featured: true,
    available_slots: 5,
    created_date: "2025-01-01"
  },
  {
    title: "Seelenplan-Coaching Intensiv",
    description: "Ein transformatives 3-Sitzungen Programm zur Entdeckung und Aktivierung Ihres authentischen Seelenplans und Ihrer Lebensaufgabe.",
    price: 320,
    duration: "3 x 90 Minuten",
    type: "einzelcoaching",
    benefits: ["Entdeckung Ihrer wahren Berufung", "Auflösung limitierender Glaubenssätze", "Aktivierung Ihrer Seelengaben"],
    image_url: `${process.env.PUBLIC_URL}/images/Kurse/Kartenlegen_test3.png`,
    featured: true,
    available_slots: 3,
    created_date: "2025-02-01"
  },
  {
    title: "Waldbaden",
    description: "Monatlicher Kreis für Frauen, die sich in ihrer weiblichen Kraft entfalten möchten. Austausch, Rituale und gemeinsames Wachstum.",
    price: 55,
    duration: "3 Stunden",
    type: "gruppenkurs",
    benefits: ["Verbindung mit anderen Frauen", "Stärkung der weiblichen Intuition", "Heilende Rituale und Meditationen"],
    image_url: `${process.env.PUBLIC_URL}/images/Kurse/waldcoaching_test2.png`,
    featured: true,
    available_slots: 10,
    created_date: "2025-03-01"
  },
  // Neu: Für "online_kurs"
  {
    title: "Online-Meditation Kurs",
    description: "Selbstgesteuerter Kurs mit Videos und Übungen für tägliche Meditation und Achtsamkeit.",
    price: 99,
    duration: "6 Wochen",
    type: "online_kurs",
    benefits: ["Flexibles Lernen", "Tägliche Übungen", "Community-Support"],
    image_url: `${process.env.PUBLIC_URL}/images/Kurse/online_kurs_example.png`, // Passe Bild an
    featured: false,
    available_slots: 20,
    created_date: "2025-04-01"
  },
  // Neu: Für "workshop"
  {
    title: "Energie-Workshop",
    description: "Intensiver Workshop zur Energiearbeit und Chakra-Balancierung.",
    price: 150,
    duration: "1 Tag",
    type: "workshop",
    benefits: ["Praktische Übungen", "Gruppenenergie", "Take-Home-Materialien"],
    image_url: `${process.env.PUBLIC_URL}/images/Kurse/workshop_example.png`, // Passe Bild an
    featured: false,
    available_slots: 8,
    created_date: "2025-05-01"
  },
  // Füge bei Bedarf mehr hinzu
];

export const ServiceData = servicesData; // Exportiere das Array für synchrones Laden


// Neu: Separates Array für Typen (Kategorien) mit dedizierten Vorschaubildern, ähnlich wie Categories in Product.jsx
export const Types = [
  {
    name: "einzelcoaching",
    display_name: "",
    preview_image_url: `${process.env.PUBLIC_URL}/images/Kurse/Kartenlegen_test2.png`, // Passe an dein gewünschtes Vorschaubild an
    description: ""
  },
  {
    name: "gruppenkurs",
    display_name: "",
    preview_image_url: `${process.env.PUBLIC_URL}/images/Kurse/Kartenlegen_test1.png`, // Passe an dein gewünschtes Vorschaubild an
    description: ""
  },
  {
    name: "online_kurs",
    display_name: "",
    preview_image_url: `${process.env.PUBLIC_URL}/images/Kurse/Kartenlegen_test3.png`, // Passe an dein gewünschtes Vorschaubild an
    description: ""
  },
  {
    name: "workshop",
    display_name: "",
    preview_image_url: `${process.env.PUBLIC_URL}/images/Kurse/waldcoaching_test1.png`, // Passe an dein gewünschtes Vorschaubild an
    description: ""
  }
  // Füge bei Bedarf mehr hinzu (ohne "all")
];
