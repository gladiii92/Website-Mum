// Product.jsx

// Aktualisierte Version mit neuer Kategorie "horoskope" und Anhängern in "heilketten".
// Neu: Slug-Feld für jeden Eintrag hinzugefügt (für Routing zur Detailseite).

export const Product = [
  // Kategorie: heilsteine (3 Produkte) – unverändert
  {
    extra_specs: "\n",
    slug: "gelber-saphir",
    name: "Gelber Saphir",
    type: "sapphire",  // Neu
    isGemstone: true,
    carat_weight: 1.43,  // Neu
    color: "Gelb",  // Neu
    origin: "Ceylon",  // Neu
    category: "heilsteine",
    cut: "Fancy",  // Neu
    clarity: "VS",  // Neu
    price: 850,  // Angepasst aus price_eur
    treatment: "untreated",  // Neu
    certification: "none",  // Neu
    rarity_level: "exceptional",  // Neu
    category: "heilsteine",  // Unverändert, passt zu Heilsteinen
    image_url: `${process.env.PUBLIC_URL}/images/Produkte/gelber-saphir-1-43ct-ceylon.jpg`,  // Angepasst aus main_image_url
    gallery_images: [  // Neu
      "/videos/gelber-saphir-1-43ct-finger.mp4",
      "/videos/gelber-saphir-1-43ct-pinzette.mp4",
      "/videos/gelber-saphir-1-43ct-360.mp4"
    ],
    video_url: "/videos/gelber-saphir-1-43ct-360.mp4",  // Neu
    healing_properties: ["Freude", "Wohlstand", "Selbstvertrauen", "Energiebalance"],  // Neu: Heilende Eigenschaften hinzugefügt, passend zum Fokus
    in_stock: true,
    featured: true,  // Aus deiner Angabe (is_featured)
    is_sold: false,  // Neu
    is_bestseller: true,
    available_slots: 1,  // Unverändert vom Original
    created_date: "2024-04-10",  // Aus deiner Angabe
    description: "<p><strong>Gelber Ceylon Saphir – 1,43 ct</strong>: Ein seltener, unbehandelter Heilstein voller Sonnenenergie. Er aktiviert dein Solarplexus-Chakra, stärkt Selbstvertrauen und zieht Freude, Wohlstand und Harmonie in dein Leben.</p><p>Dieser Edelstein unterstützt dich bei Meditation und Energiearbeit, löst Blockaden und fördert innere Balance. Seine goldene Strahlkraft macht ihn zu einem einzigartigen Begleiter für deine spirituelle Reise.</p><p><strong>Preis</strong>: Nur 850 € – sichere dir dieses lichtvolle Unikat und spüre seine transformierende Kraft!</p>"
  },
  {
    extra_specs: "\n",
    slug: "blauer-spinell",
    name: "Blauer Spinell",
    type: "spinel",
    isGemstone: true,
    carat_weight: 4.57,
    color: "Blau",
    origin: "Tansania",
    cut: "Cushion",
    clarity: "VS",
    price: 1750,
    treatment: "untreated",
    certification: "aig",
    rarity_level: "rare",
    category: "heilsteine",
    image_url: `${process.env.PUBLIC_URL}/images/Produkte/blauer-spinell-457ct-aig.jpg`,
    gallery_images: [
      "/videos/blauer-spinell-457ct-finger.mp4",
      "/videos/blauer-spinell-457ct-pinzette.mp4",
      "/videos/blauer-spinell-457ct-360.mp4"
    ],
    video_url: "/videos/blauer-spinell-457ct-360.mp4",
    healing_properties: ["Schutz vor Negativität", "Innere Stärke", "Klarheit im Geist", "Energetische Balance"],
    in_stock: true,
    featured: false,
    is_sold: false,
    is_bestseller: false,
    available_slots: 1,
    created_date: "2024-03-20",
    description: `<p><strong>Blauer Spinell – 4,57 ct</strong>: Dieser seltene, unbehandelte Spinell aus Tansania besticht durch seine tiefe, reine blaue Farbe, VVS-Reinheit und den klassischen Cushion-Schliff. Ein Edelstein voller spiritueller Kraft, der sowohl Schutz als auch innere Klarheit schenkt.</p><p>Er eignet sich perfekt für Meditation, spirituelle Rituale oder als energetischer Begleiter im Alltag. Sein Blau aktiviert Intuition und geistige Ruhe, fördert Konzentration und unterstützt bei energetischen Ausgleichsprozessen.</p><ul><li><strong>Seltene Rarität</strong>: Ein einzigartiger Stein, der Sammlerherzen höherschlagen lässt.</li><li><strong>Preis</strong>: 1750 € – Investition in zeitlose spirituelle Energie.</li></ul><p>Fordere jetzt Dein Angebot an und bring diesen kraftvollen Spinell in Dein Leben!</p>`
  },
  {
  extra_specs: "\n",
  slug: "kashmir-saphir",
  name: "Kashmir Saphir",
  type: "sapphire",
  isGemstone: true,
  carat_weight: 1.95,
  color: "Lila",
  origin: "Pakistan",
  cut: "Triangle",
  clarity: "I",
  price: 145,
  treatment: "untreated",
  certification: "none",
  rarity_level: "select",
  category: "heilsteine",
  image_url: `${process.env.PUBLIC_URL}/images/Produkte/kashmir-saphir-1-95ct.jpg`,
  gallery_images: [
    "/videos/kashmir-saphir-1-95ct-finger.mp4",
    "/videos/kashmir-saphir-1-95ct-pinzette.mp4",
    "/videos/kashmir-saphir-1-95ct-360.mp4"
  ],
  video_url: "/videos/kashmir-saphir-1-95ct-360.mp4",
  healing_properties: [
    "Selbsterkenntnis",
    "Spirituelle Orientierung",
    "Innere Balance",
    "Kreative Energie"
  ],
  in_stock: true,
  featured: false,
  is_sold: false,
  is_bestseller: false,
  available_slots: 1,
  created_date: "2025-08-13",
  description: `<p><strong>Kashmir Saphir – 1,95 ct</strong>: Ein einzigartiger, unbehandelter Saphir aus der legendären Kashmir-Region in Pakistan. Sein intensives Lila, die starken Einschlüsse und der Triangle-Schliff schenken diesem Stein eine kosmische Ausstrahlung, die wie eine Mini-Galaxie wirkt.</p><p>Dieser Edelstein ist ideal für Meditation, spirituelle Rituale oder kreative Schmuckprojekte. Er fördert Selbsterkenntnis, innere Balance, kreative Energie und spirituelle Orientierung.</p><ul><li><strong>Einzigartige Rarität</strong>: Perfektes Stück für Sammler und Liebhaber des Außergewöhnlichen.</li><li><strong>Preis</strong>: 145 € – erschwinglicher Einstieg in echte Kashmir-Saphire.</li></ul><p>Fordere jetzt Dein Angebot an und bring diesen kraftvollen Stein in Dein Leben!</p>`
},
  // Kategorie: heilketten (erweitert um Anhänger – jetzt 6 Produkte)
  {
    extra_specs: "\n",
    name: "Heilige Maria",
    description: "Geweihter spirituellre Medaillon-Anhänger der Heiligen Maria aus Medjugorje. Handgefertigt aus hochwertigen Materialien, gesegnet für Schutz und spirituelle Energie.",
    healing_property: "Schutz und Segen",
    energy: "Innere Ruhe",
    focus: "Für Gebete",
    isGemstone: false,
    material: "Versilbert",
    gewicht: "18g",
    maße: "10cm x 3cm",
    schutzwirkung: ["Spirituelle Führung"],
    symbolik: "Heilige Maria – Schutz und Segen",
    price: 25,
    category: "heilketten",
    image_url: `${process.env.PUBLIC_URL}/images/Produkte/maria.png`,
    healing_properties: ["Schutz und Segen", "Spirituelle Führung", "Gebetskraft", "Energetische Harmonie"],
    in_stock: true,
    featured: true,
    is_bestseller: true,
    available_slots: 4,
    created_date: "2025-08-30",
    slug: "anhaenger-heilige-maria"
  },
  // Neu: Anhänger Heiliger Christopherus
  {
    extra_specs: "\n",
    name: "Heiliger Christopherus",
    description: "Schützender Talsiman als Magnet des Heiligen Christopherus, dem Patron der Reisenden. Handgefertigt aus hochwertigen Materialien mit spiritueller Energie.",
    healing_property: "Schutz vor Gefahren",
    energy: "Innere Ruhe",
    focus: "Für Reisen",
    isGemstone: false,
    material: "Versilbert",
    gewicht: "10g",
    maße: "3,5cm x 2cm",
    schutzwirkung: ["Reisende", "Autofahrer", "Pilger"],
    symbolik: "Patron der Reisenden",
    price: 20,
    category: "heilketten",
    image_url: `${process.env.PUBLIC_URL}/images/Produkte/christopherus2.png`,
    healing_properties: ["Schutz vor Gefahren", "Reisesegen", "Spiritueller Beistand", "Energetische Harmonie"],
    in_stock: true,
    featured: true,
    is_bestseller: false,
    available_slots: 4,
    created_date: "2025-08-01",
    slug: "anhaenger-heiliger-christopherus"
  },
  {
  extra_specs: "\n",
  name: "Göttlicher Anhänger",
  description: `<p><strong>Handgefertigte Göttliche Anhänger</strong>: Ein spiritueller Talisman mit vergoldetem oder versilbertem Buddha, Ganesha oder Elefantengott, ideal für Schutz, Harmonie und positive Energie im Alltag.</p><p>Erhältlich in verschiedenen Größen von 3x2 cm bis 5x3 cm und Gewichten von 9 g bis 20 g. Perfekt als persönlicher Begleiter, für Meditation oder als Geschenk für spirituelle Menschen. Jeder Anhänger strahlt eine kraftvolle, schützende Energie aus.</p><ul><li><strong>Spirituelle Wirkung</strong>: Schutz, energetische Harmonie und innere Ruhe</li><li><strong>Heilende Eigenschaften</strong>: Stärkt Fokus, spirituelle Verbindung und positive Ausstrahlung</li><li><strong>Materialien</strong>: Hochwertige Vergoldung oder Versilberung</li></ul><p>Fordere jetzt deinen persönlichen Göttlichen Anhänger an und bringe spirituelle Kraft in dein Leben!</p>`,
  healing_property: "Harmonie",
  energy: "Positive Energie",
  focus: "Meditation",
  isGemstone: false,
  material: "Vergoldet oder Versilbert",
  gewicht: "9g – 20g",
  maße: "3x2 cm – 5x3 cm",
  schutzwirkung: ["Spirituelle Führung"],
  symbolik: "Erleuchtung und innere Ruhe",
  price: 25,
  category: "heilketten",
  image_url: `${process.env.PUBLIC_URL}/images/Produkte/Thai.png`,
  gallery_images: [
    "/images/Produkte/Thai1.png",
    "/images/Produkte/Thai2.png",
    "/images/Produkte/Thai3.png",
    "/images/Produkte/Thai4.png"
  ],
  healing_properties: ["Schutz für Haus & Familie", "Fokus", "Innere Ruhe", "Spirituelle Harmonie"],
  in_stock: true,
  featured: true,
  is_bestseller: false,
  available_slots: 10,
  created_date: "2025-08-27",
  slug: "thai-anhaenger-buddha-ganesha"
},
  // Neu: Platzhalter-Anhänger 1 (kommentiert, wie in deinem Original)
  /* {
    name: "Mystischer Schutz-Anhänger",
    description: "Eleganter Platzhalter-Anhänger mit mystischen Elementen, perfekt für individualisierte Heilketten. Fördert Schutz und innere Stärke – ein Must-have für spirituelle Schmuckliebhaber. Entdecken Sie harmonischen Schmuck online und integrieren Sie ihn in Ihre tägliche Routine. SEO: Schutzanhänger mit Heilsteinen kaufen, spiritueller Anhänger bestellen.",
    price: 39.9,
    category: "heilketten",
    image_url: `${process.env.PUBLIC_URL}/images/Produkte/anhaenger_platzhalter1.png`,
    healing_properties: ["Schutzenergie", "Innere Stärke", "Harmonie", "Spirituelle Balance"],
    in_stock: true,
    featured: false,
    available_slots: 20,
    created_date: "2025-08-02",
    slug: "mystischer-schutz-anhaenger"  // Neu, falls aktiviert
  }, */
  // Weitere kommentierte Einträge bleiben unverändert, füge Slugs bei Bedarf hinzu

  // Kategorie: kerzen (3 Produkte) – unverändert
/*  {
    name: "Mystische Mondschein-Kerze",
    description: "Handgegossene Kerze mit natürlichen ätherischen Ölen. Perfekt für Rituale, Meditation und spirituelle Praktiken bei Vollmond.",
    price: 34.5,
    category: "kerzen",
    image_url: `${process.env.PUBLIC_URL}/images/Produkte/Kerze_test4.png`,
    healing_properties: ["Intuition", "Klarheit", "Transformation"],
    in_stock: true,
    featured: true,
    available_slots: 18,
    created_date: "2025-03-01",
    slug: "mystische-mondschein-kerze"
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
    created_date: "2025-03-02",
    slug: "lavendel-ruhe-kerze"
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
    created_date: "2025-03-03",
    slug: "zitrus-energie-kerze"
  },
  // Kategorie: pferdebuersten (3 Produkte) – unverändert
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
    created_date: "2025-04-01",
    slug: "amethyst-pferdebuerste"
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
    created_date: "2025-04-02",
    slug: "rosenquarz-pferdebuerste"
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
    created_date: "2025-04-03",
    slug: "bergkristall-pferdebuerste"
  },
  // Kategorie: wassersteine (3 Produkte) – unverändert
*/{
  name: "Lapislazuli Wasserstein",
  description: `<p><strong>Lapislazuli – 10 g, oval geschliffen</strong>: Dieser außergewöhnliche Lapislazuli besticht durch ein intensives, tiefes Blau und funkelnde goldene Pyrit-Einschlüsse, die wie Sterne in einer Mini-Galaxie wirken. Ein kraftvoller Stein voller Weisheit, Klarheit und spiritueller Energie!</p><p>Ideal zur Meditation, Energetisierung von Wasser oder als persönlicher Begleiter im Alltag. Er fördert Selbsterkenntnis, innere Ruhe, Ehrlichkeit und stärkt Selbstvertrauen. Die goldenen Einschlüsse aus Pyrit verstärken die energetische Balance und ziehen positive Energie an.</p><ul><li><strong>Spirituelle Wirkung</strong>: Aktiviert Intuition und stärkt geistige Klarheit.</li><li><strong>Heilende Eigenschaften</strong>: Fördert innere Ruhe, Selbstvertrauen und energetische Reinigung.</li><li><strong>Marktwert</strong>: Ca. 200 € – ein einzigartiges spirituelles Unikat.</li></ul><p>Fordere jetzt dein Exemplar an und integriere die transformierende Kraft dieses Lapislazulis in dein Leben!</p>`,
  healing_property: "Weisheit",
  energy: "Spirituelle Intuition",
  focus: "Wasserenergetisierung und Meditation",
  isGemstone: false,
  material: "Natürlicher Lapislazuli",
  gewicht: "10g",
  maße: "4cm x 2cm",
  schutzwirkung: ["Gegen Stress", "Für Immunsystem"],
  symbolik: "Stein der Könige und Wahrheit",
  price: 50,
  category: "wassersteine",
  image_url: `${process.env.PUBLIC_URL}/images/Produkte/lapislazuli-wasserstein.png`,
  gallery_images: [
  "/images/Produkte/lapislazuli-wasserstein1.png",
  "/images/Produkte/lapislazuli-wasserstein2.jpg",
  ],
  healing_properties: ["Weisheit", "Klarheit", "Entgiftung", "Selbstvertrauen"],
  in_stock: true,
  featured: false,
  is_bestseller: false,
  available_slots: 8,
  created_date: "2025-08-27",
  slug: "lapislazuli-wasserstein"
  },
  {
  name: "Mondstein Wasserstein",
  description: `<p><strong>Mondstein – 21 ct, oval geschliffen</strong>: Dieser bezaubernde Mondstein besticht durch sein schimmerndes, perlmuttfarbenes Leuchten und seine sanften Lichtreflexe, die an den Schein des Mondes erinnern. Ein kraftvoller Stein voller Intuition, innerer Ruhe und spiritueller Ausgeglichenheit!</p><p>Ideal zur Meditation, Energetisierung von Wasser oder als persönlicher Begleiter im Alltag. Er fördert emotionale Balance, geistige Klarheit, innere Ruhe und stärkt Intuition sowie Selbstbewusstsein. Seine sanfte Mondenergie unterstützt die Verbindung zu inneren Zyklen und spirituellem Wachstum.</p><ul><li><strong>Spirituelle Wirkung</strong>: Aktiviert Intuition und fördert innere Gelassenheit.</li><li><strong>Heilende Eigenschaften</strong>: Unterstützt emotionale Balance, Selbstreflexion und harmonische Energieflüsse.</li><li><strong>Marktwert</strong>: Ca. 200 € – ein einzigartiges spirituelles Unikat.</li></ul><p>Fordere jetzt dein Exemplar an und integriere die transformierende Kraft dieses Mondsteins in dein Leben!</p>`,
  healing_property: "Intuition",
  energy: "Emotionale Balance",
  focus: "Wasserenergetisierung und Meditation",
  isGemstone: false,
  material: "Natürlicher Mondstein",
  gewicht: "21 ct",
  maße: "5cm x 3cm",
  schutzwirkung: ["Für emotionale Harmonie", "Für innere Ruhe"],
  symbolik: "Stein der Intuition und inneren Weisheit",
  price: 50,
  category: "wassersteine",
  image_url: `${process.env.PUBLIC_URL}/images/Produkte/mondstein-wasserstein2.png`,
  gallery_images: [
    "/images/Produkte/mondstein-wasserstein1.png"
  ],
  healing_properties: ["Intuition", "Innere Ruhe", "Emotionale Balance", "Selbstreflexion"],
  in_stock: true,
  featured: true,
  is_bestseller: true,
  available_slots: 9,
  created_date: "2025-08-27",
  slug: "mondstein-wasserstein"
  },
  /*{
    name: "Rosenquarz Wasserstein",
    description: "Rosenquarz für liebevolles Wasser, das Herzenergie stärkt und emotionale Balance fördert und Sie den ganzen Tag frisch hält.",
    price: 16.5,
    category: "wassersteine",
    image_url: `${process.env.PUBLIC_URL}/images/Produkte/wassersteine2.png`,
    healing_properties: ["Liebe", "Balance", "Emotionen"],
    in_stock: true,
    featured: true,
    available_slots: 18,
    created_date: "2025-05-02",
    slug: "rosenquarz-wasserstein"
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
    created_date: "2025-05-03",
    slug: "bergkristall-wasserstein"
  },*/
  // Neu: Kategorie horoskope (3 Produkte)
  {
    extra_specs: "\n",
    name: "Partnerhoroskop",
    description: "Entdecke mit unserem Partnerhoroskop tiefgehende Einblicke in eure Beziehungsdynamik. Astrologische Analysen helfen dir, Verständnis, Harmonie und eine stärkere Bindung zu fördern. Ideal für Paare, die ihre Verbindung bewusst stärken möchten. Bestelle jetzt dein persönliches Partnerhoroskop online und erlebe mehr Nähe und emotionale Tiefe.",
    isGemstone: false,
    healing_property: "Harmonie",
    energy: "Verzeihend",
    focus: "Für Paare",
    material: "Astrologische Analyse",
    gewicht: "Digital",
    maße: "Individuell",
    schutzwirkung: ["Beziehung", "Partnerschaft", "Emotionale Bindung"],
    symbolik: "Stärkung von Liebe und Harmonie",
    healing_properties: ["Beziehungsstärkung", "Harmonie", "Emotionale Tiefe", "Astrologische Einsichten"],
    price: 50,
    category: "horoskope",
    image_url: `${process.env.PUBLIC_URL}/images/Produkte/horoskop1.jpg`,
    healing_properties: ["Beziehungsstärkung", "Harmonie", "Emotionale Tiefe", "Astrologische Einsichten"],
    in_stock: true,
    featured: true,
    is_bestseller: true,
    available_slots: 10,
    created_date: "2025-08-21",
    slug: "partnerhoroskop"
  },
  {
    name: "Zukunfts/Lebenshoroskop",
    description: "Erhalte mit unserem Zukunfts- und Lebenshoroskop klare Perspektiven für Liebe, Karriere und persönliches Wachstum. Detaillierte Vorhersagen basierend auf deinem Sternzeichen unterstützen dich bei wichtigen Entscheidungen. Hol dir jetzt dein individuelles Horoskop online und plane deine Zukunft bewusst, voller Klarheit und Weisheit.",
    isGemstone: false,
    healing_property: "Persönliches Wachstum",
    energy: "Klarheit",
    focus: "Für bewusste Lebensplanung",
    material: "Astrologische Analyse",
    gewicht: "Digital",
    maße: "Individuell",
    schutzwirkung: ["Lebensentscheidungen", "Zukunftsplanung", "Innere Weisheit"],
    symbolik: "Wegweiser für die persönliche Entwicklung",
    healing_properties: ["Zukunftsplanung", "Persönliches Wachstum", "Weisheit", "Lebensentscheidungen"],
    price: 50,
    category: "horoskope",
    image_url: `${process.env.PUBLIC_URL}/images/Produkte/horoskop.jpg`,
    healing_properties: ["Zukunftsplanung", "Persönliches Wachstum", "Weisheit", "Lebensentscheidungen"],
    in_stock: true,
    featured: false,
    is_bestseller: true,
    available_slots: 10,
    created_date: "2025-08-21",
    slug: "zukunfts-lebenshoroskop"
  },
  {
    name: "Geburtshoroskop",
    description: "Entdecke mit dem Geburtshoroskop deine einzigartige Persönlichkeit, Stärken und Lebenswege anhand deines Geburtsdatums. Es liefert dir tiefe Selbsterkenntnis, Orientierung im Alltag und spirituelle Einsichten. Perfekt für Neuanfänge oder um dein wahres Potenzial zu erkennen. Bestelle jetzt dein Geburtshoroskop online und lerne dich selbst noch besser kennen.",
    isGemstone: false,
    healing_property: "Lebenswege",
    energy: "Spirituelle Einsicht",
    focus: "Für persönliche Entwicklung",
    material: "Astrologische Analyse",
    gewicht: "Digital",
    maße: "Individuell",
    schutzwirkung: ["Selbsterkenntnis", "Neuanfang", "Spirituelle Orientierung"],
    symbolik: "Erkenntnis des eigenen Potenzials",
    healing_properties: ["Selbsterkenntnis", "Persönlichkeitsentwicklung", "Lebenswege", "Spirituelle Orientierung"],
    price: 50,
    category: "horoskope",
    image_url: `${process.env.PUBLIC_URL}/images/Produkte/horoskop2.jpg`,
    healing_properties: ["Selbsterkenntnis", "Persönlichkeitsentwicklung", "Lebenswege", "Spirituelle Orientierung"],
    in_stock: true,
    featured: false,
    is_bestseller: true,
    available_slots: 7,
    created_date: "2025-08-21",
    slug: "geburtshoroskop"
  }
  // Fügen Sie bei Bedarf mehr hinzu
];

// Aktualisiertes Categories-Array mit neuer Kategorie "horoskope"
export const Categories = [
  {
    name: "heilsteine",
    display_name: "Heilsteine",
    preview_image_url: `${process.env.PUBLIC_URL}/images/Produkte/heilsteine11.png`
  },
  {
    name: "heilketten",
    display_name: "Heilketten",
    preview_image_url: `${process.env.PUBLIC_URL}/images/Produkte/heilkette.png`
  },
/*  {
    name: "kerzen",
    display_name: "Mystische Kerzen",
    preview_image_url: `${process.env.PUBLIC_URL}/images/Produkte/Kerze_test1.png`
  },
  {
    name: "pferdebuersten",
    display_name: "Pferdebürsten mit Heilsteinen",
    preview_image_url: `${process.env.PUBLIC_URL}/images/Produkte/pferdebürsten.png`
  },
*/  {
    name: "wassersteine",
    display_name: "Heilsteine fürs Wasser",
    preview_image_url: `${process.env.PUBLIC_URL}/images/Produkte/wassersteine.png`
  },
  // Neu: Horoskope-Kategorie
  {
    name: "horoskope",
    display_name: "Persönliche Horoskope",
    preview_image_url: `${process.env.PUBLIC_URL}/images/Produkte/horoskop4.png` // Platzhalter für ein Kategorie-Vorschaubild
  }
  // Fügen Sie bei Bedarf mehr hinzu
];
