// Product.jsx
// Deine Produkte bleiben unverändert, aber ich habe das neue Categories-Array hinzugefügt für separate Vorschaubilder.

export const Product = [
  // Kategorie: heilsteine (3 Produkte)
  {
    name: "Amethyst Heilstein",
    description: "Wunderschöner violetter Amethyst zur Förderung von innerer Ruhe und spiritueller Klarheit. Dieser kraftvolle Stein unterstützt bei Stressabbau.",
    price: 24.9,
    category: "heilsteine",
    image_url: `${process.env.PUBLIC_URL}/images/Produkte/heilsteine2.png`,
    healing_properties: ["Beruhigung", "Klarheit", "Schutz"],
    in_stock: true,
    featured: false,
    available_slots: 15,
    created_date: "2025-01-01"
  },
  {
    name: "Bergkristall Heilstein",
    description: "Kristallklarer Bergkristall, der Energie verstärkt und Klarheit schenkt. Ideal für Meditation und Reinigung.",
    price: 19.9,
    category: "heilsteine",
    image_url: `${process.env.PUBLIC_URL}/images/Produkte/heilsteine3.png`,
    healing_properties: ["Energieverstärkung", "Reinigung", "Fokus"],
    in_stock: true,
    featured: false,
    available_slots: 20,
    created_date: "2025-01-02"
  },
  {
    name: "Rosenquarz Heilstein",
    description: "Sanfter Rosenquarz, der Liebe und Harmonie fördert. Hilft bei emotionaler Heilung und Selbstakzeptanz.",
    price: 22.5,
    category: "heilsteine",
    image_url: `${process.env.PUBLIC_URL}/images/Produkte/heilsteine1.png`,
    healing_properties: ["Liebe", "Harmonie", "Emotionale Heilung"],
    in_stock: true,
    featured: false,
    available_slots: 10,
    created_date: "2025-01-03"
  },

  // Kategorie: heilketten (3 Produkte)
  {
    name: "Rosenquarz Energie-Kette",
    description: "Liebevoll gestaltete Kette aus echtem Rosenquarz. Trägt zur Herzöffnung bei und stärkt die Selbstliebe und Mitgefühl.",
    price: 89,
    category: "heilketten",
    image_url: `${process.env.PUBLIC_URL}/images/Produkte/kette2.png`,
    healing_properties: ["Selbstliebe", "Mitgefühl", "Herzöffnung"],
    in_stock: true,
    featured: false,
    available_slots: 8,
    created_date: "2025-02-01"
  },
  {
    name: "Amethyst Schutz-Kette",
    description: "Elegante Kette mit Amethyst-Perlen für Schutz und innere Ruhe. Perfekt für tägliches Tragen. Sichere Verarbeitung.",
    price: 79.9,
    category: "heilketten",
    image_url: `${process.env.PUBLIC_URL}/images/Produkte/heilkette.png`,
    healing_properties: ["Schutz", "Ruhe", "Spirituelle Klarheit"],
    in_stock: true,
    featured: true,
    available_slots: 12,
    created_date: "2025-02-02"
  },
  {
    name: "Bergkristall Power-Kette",
    description: "Kraftvolle Kette aus Bergkristall, die Energie kanalisiert und Klarheit bringt. Für Stärke und Fokus.",
    price: 95,
    category: "heilketten",
    image_url: `${process.env.PUBLIC_URL}/images/Produkte/kette1.png`,
    healing_properties: ["Energie", "Klarheit", "Stärke"],
    in_stock: true,
    featured: false,
    available_slots: 5,
    created_date: "2025-02-03"
  },

  // Kategorie: kerzen (3 Produkte)
  {
    name: "Mystische Mondschein-Kerze",
    description: "Handgegossene Kerze mit natürlichen ätherischen Ölen. Perfekt für Rituale, Meditation und spirituelle Praktiken bei Vollmond.",
    price: 34.5,
    category: "kerzen",
    image_url: `${process.env.PUBLIC_URL}/images/Produkte/Kerze_test4.png`,
    healing_properties: ["Intuition", "Klarheit", "Transformation"],
    in_stock: true,
    featured: true,
    available_slots: 18,
    created_date: "2025-03-01"
  },
  {
    name: "Lavendel Ruhe-Kerze",
    description: "Beruhigende Kerze mit Lavendelduft für Entspannung und innere Balance. Ideal für Abendrituale.",
    price: 29.9,
    category: "kerzen",
    image_url: `${process.env.PUBLIC_URL}/images/Produkte/Kerze_test2.png`,
    healing_properties: ["Entspannung", "Balance", "Schlaf"],
    in_stock: true,
    featured: true,
    available_slots: 25,
    created_date: "2025-03-02"
  },
  {
    name: "Zitrus Energie-Kerze",
    description: "Belebende Kerze mit Zitrusnoten für Motivation und positive Energie. Für Morgenmeditationen und Meditationen jeglicher Art.",
    price: 32,
    category: "kerzen",
    image_url: `${process.env.PUBLIC_URL}/images/Produkte/Kerze_test1.png`,
    healing_properties: ["Motivation", "Positivität", "Energie"],
    in_stock: true,
    featured: false,
    available_slots: 7,
    created_date: "2025-03-03"
  },

  // Neue Kategorie: pferdebuersten (3 Dummy-Produkte)
  {
    name: "Amethyst Pferdebürste",
    description: "Pferdebürste mit eingebetteten Amethyst-Steinen für beruhigende Pflege und Energieausgleich bei Tieren.",
    price: 49.9,
    category: "pferdebuersten",
    image_url: `${process.env.PUBLIC_URL}/images/Produkte/pferdebürsten.png`,
    healing_properties: ["Beruhigung", "Energiefluss", "Tierpflege"],
    in_stock: true,
    featured: true,
    available_slots: 10,
    created_date: "2025-04-01"
  },
  {
    name: "Rosenquarz Pferdebürste",
    description: "Sanfte Pferdebürste mit Rosenquarz für liebevolle Pflege und emotionale Harmonie bei Pferden. Regt den Kreislauf an.",
    price: 54.9,
    category: "pferdebuersten",
    image_url: `${process.env.PUBLIC_URL}/images/Produkte/pferdebürsten1.png`,
    healing_properties: ["Liebe", "Harmonie", "Emotionale Pflege"],
    in_stock: true,
    featured: false,
    available_slots: 15,
    created_date: "2025-04-02"
  },
  {
    name: "Bergkristall Pferdebürste",
    description: "Starke Pferdebürste mit Bergkristall für Reinigung und Energieverstärkung während der Grooming-Sitzungen.",
    price: 59.9,
    category: "pferdebuersten",
    image_url: `${process.env.PUBLIC_URL}/images/Produkte/pferdebürsten2.png`,
    healing_properties: ["Reinigung", "Energie", "Stärke"],
    in_stock: true,
    featured: false,
    available_slots: 8,
    created_date: "2025-04-03"
  },

  // Neue Kategorie: wassersteine (3 Dummy-Produkte)
  {
    name: "Amethyst Wasserstein",
    description: "Amethyst-Stein zum Aufladen von Wasser für innere Ruhe und spirituelle Reinigung. Einfach ins Glas legen.",
    price: 14.9,
    category: "wassersteine",
    image_url: `${process.env.PUBLIC_URL}/images/Produkte/wassersteine1.png`,
    healing_properties: ["Ruhe", "Reinigung", "Spirituell"],
    in_stock: true,
    featured: false,
    available_slots: 20,
    created_date: "2025-05-01"
  },
  {
    name: "Rosenquarz Wasserstein",
    description: "Rosenquarz für liebevolles Wasser, das Herzenergie stärkt und emotionale Balance fördert und Sie den ganzen Tag frisch hält.",
    price: 16.5,
    category: "wassersteine",
    image_url: `${process.env.PUBLIC_URL}/images/Produkte/wassersteine2.png`,
    healing_properties: ["Liebe", "Balance", "Emotionen"],
    in_stock: true,
    featured: true,
    available_slots: 18,
    created_date: "2025-05-02"
  },
  {
    name: "Bergkristall Wasserstein",
    description: "Bergkristall zum Energetisieren von Wasser für Klarheit und Vitalität den ganzen Tag sodass Sie den ganzen Tag frisch bleiben.",
    price: 18.9,
    category: "wassersteine",
    image_url: `${process.env.PUBLIC_URL}/images/Produkte/wassersteine3.png`,
    healing_properties: ["Klarheit", "Vitalität", "Energie"],
    in_stock: true,
    featured: false,
    available_slots: 12,
    created_date: "2025-05-03"
  }
  // Fügen Sie bei Bedarf mehr hinzu
];

// Neu: Separates Array für Kategorien mit dedizierten Vorschaubildern
export const Categories = [
  {
    name: "heilsteine",
    display_name: "Heilsteine",
    preview_image_url: `${process.env.PUBLIC_URL}/images/Produkte/heilsteine1.png` // Dein gewünschtes Vorschaubild (z. B. aktuell das von Rosenquarz)
  },
  {
    name: "heilketten",
    display_name: "Heilketten",
    preview_image_url: `${process.env.PUBLIC_URL}/images/Produkte/kette1.png`
  },
  {
    name: "kerzen",
    display_name: "Mystische Kerzen",
    preview_image_url: `${process.env.PUBLIC_URL}/images/Produkte/Kerze_test1.png`
  },
  {
    name: "pferdebuersten",
    display_name: "Pferdebürsten mit Heilsteinen",
    preview_image_url: `${process.env.PUBLIC_URL}/images/Produkte/pferdebürsten.png`
  },
  {
    name: "wassersteine",
    display_name: "Heilsteine fürs Wasser",
    preview_image_url: `${process.env.PUBLIC_URL}/images/Produkte/wassersteine2.png`
  }
  // Fügen Sie bei Bedarf mehr hinzu
];
