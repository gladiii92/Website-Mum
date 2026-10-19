// Mapping von Tarot- und Lenormand-Karten zu passenden Heilsteinen / Wassersteinen aus dem Shop.

export const STONES = {
  rosenquarz: {
    slug: "rosenquarz-wasserstein",
    name: "Rosenquarz Wasserstein",
    subtitle: "Naturkristall für Herzöffnung, Harmonie & Selbstliebe",
    price: "19 €",
    imageUrl: "/images/Produkte/wassersteine2.webp",
  },
  bergkristall: {
    slug: "bergkristall-wasserstein",
    name: "Bergkristall Wasserstein",
    subtitle: "Master-Healer Kristall für Klarheit & vitale Lebenskraft",
    price: "19 €",
    imageUrl: "/images/Produkte/wassersteine3.webp",
  },
  amethyst: {
    slug: "amethyst-wasserstein",
    name: "Amethyst Wasserstein",
    subtitle: "Seelenkristall für inneren Frieden, Stressabbau & Meditation",
    price: "19 €",
    imageUrl: "/images/Produkte/wassersteine1.webp",
  },
  mondstein: {
    slug: "mondstein-wasserstein",
    name: "Mondstein Wasserstein",
    subtitle: "Heilstein für weibliche Intuition, Zyklen & seelische Balance",
    price: "19 €",
    imageUrl: "/images/Produkte/mondstein-wasserstein2.webp",
  },
  lapislazuli: {
    slug: "lapislazuli-wasserstein",
    name: "Lapislazuli Wasserstein",
    subtitle: "Königlicher Heilstein für Wahrheit, Erkenntnis & Kommunikation",
    price: "19 €",
    imageUrl: "/images/Produkte/lapislazuli-wasserstein.webp",
  },
};

export const TAROT_STONE_MAP = {
  "der-narr": {
    stoneKey: "bergkristall",
    reason: "Der Bergkristall schenkt geistige Frische und ungetrübte Wachheit für mutige seelische Neuanfänge.",
  },
  "der-magier": {
    stoneKey: "bergkristall",
    reason: "Als stärkster Verstärker im Kristallreich fokussiert der Bergkristall deinen Willen und deine Manifestationskraft.",
  },
  "die-hohepriesterin": {
    stoneKey: "mondstein",
    reason: "Der Mondstein öffnet das Tor zu deiner Intuition, schützt dein Feingefühl und vertieft Träume und Ahnungen.",
  },
  "die-kaiserin": {
    stoneKey: "rosenquarz",
    reason: "Der Rosenquarz nährt dein Herzchakra mit mütterlicher Wärme, kreativer Fülle und tiefer Selbstliebe.",
  },
  "die-herrscherin": {
    stoneKey: "rosenquarz",
    reason: "Der Rosenquarz nährt dein Herzchakra mit mütterlicher Wärme, kreativer Fülle und tiefer Selbstliebe.",
  },
  "der-herrscher": {
    stoneKey: "bergkristall",
    reason: "Er verleiht souveräne geistige Klarheit, klare Grenzziehung und Stabilität in Führungsfragen.",
  },
  "der-hierophant": {
    stoneKey: "amethyst",
    reason: "Der Amethyst vertieft spirituelle Weisheit, Meditation und das Vertrauen in die eigene Seelenführung.",
  },
  "die-liebenden": {
    stoneKey: "rosenquarz",
    reason: "Der universelle Herzstein für bedingungslose Liebe, Herzöffnung und die Heilung von Beziehungsblockaden.",
  },
  "der-wagen": {
    stoneKey: "bergkristall",
    reason: "Bündelt vitale Lebenskraft und schenkt energiegeladene Entschlossenheit für den Durchbruch zum Ziel.",
  },
  "die-kraft": {
    stoneKey: "rosenquarz",
    reason: "Verbindet unbändige Lebensenergie mit sanftmütiger Herzenswärme und geduldiger innerer Stärke.",
  },
  "der-eremit": {
    stoneKey: "amethyst",
    reason: "Der perfekte Begleiter für Zeiten des heilsamen Rückzugs, der Kontemplation und der inneren Erkenntnis.",
  },
  "das-rad-des-schicksals": {
    stoneKey: "lapislazuli",
    reason: "Erleichtert das Erkennen übergeordneter karmischer Zusammenhänge und schenkt Gelassenheit im Wandel.",
  },
  "die-gerechtigkeit": {
    stoneKey: "bergkristall",
    reason: "Fördert kompromisslose Objektivität, Wahrheitssinn und Klarheit bei schwierigen Lebensentscheidungen.",
  },
  "der-gehaengte": {
    stoneKey: "amethyst",
    reason: "Schenkt seelischen Frieden und Geduld beim Loslassen alter Erwartungen und festgefahrener Blickwinkel.",
  },
  "der-tod": {
    stoneKey: "amethyst",
    reason: "Spendet Trost und schützende Ruhe während tiefgreifender Abschieds- und Transformationsphasen.",
  },
  "die-maessigkeit": {
    stoneKey: "rosenquarz",
    reason: "Harmonisiert emotionale Schwankungen und bringt Körper, Geist und Herz in sanfte Balance.",
  },
  "der-teufel": {
    stoneKey: "lapislazuli",
    reason: "Stärkt die Wahrhaftigkeit und Selbstreflexion, um ungesunde Abhängigkeiten und Illusionen zu durchbrechen.",
  },
  "der-turm": {
    stoneKey: "amethyst",
    reason: "Bietet energetischen Schutz und innere Zentrierung, wenn alte Lebensstrukturen unerwartet weichen.",
  },
  "der-stern": {
    stoneKey: "bergkristall",
    reason: "Verstärkt die kosmische Lichtanbindung, Hoffnung und das Urvertrauen in eine lichte Zukunft.",
  },
  "der-mond": {
    stoneKey: "mondstein",
    reason: "Besänftigt unterbewusste Ängste, harmonisiert das Nervensystem und stärkt feine sensitive Antennen.",
  },
  "die-sonne": {
    stoneKey: "bergkristall",
    reason: "Strahlt reine Lebensfreude, Vitalität und Optimismus aus und vertreibt jeden inneren Zweifel.",
  },
  "das-gericht": {
    stoneKey: "lapislazuli",
    reason: "Weckt die authentische Wahrheit deiner Seele und unterstützt befreiende Klärungsgespräche.",
  },
  "die-welt": {
    stoneKey: "rosenquarz",
    reason: "Feiert die Vollendung deines Seelenwegs in tiefer Dankbarkeit, Verbundenheit und Herzensfrieden.",
  },
};

export const LENORMAND_STONE_MAP = {
  reiter: {
    stoneKey: "bergkristall",
    reason: "Unterstützt den klaren Informationsfluss, Wachheit und geistige Beweglichkeit für neue Impulse.",
  },
  klee: {
    stoneKey: "rosenquarz",
    reason: "Schenkt heitere Leichtigkeit, Herzensfreude und zieht glückliche, liebevolle Begegnungen an.",
  },
  schiff: {
    stoneKey: "lapislazuli",
    reason: "Fördert geistige Weitsicht, seelischen Mut und Orientierung auf langen Lebensreisen.",
  },
  haus: {
    stoneKey: "rosenquarz",
    reason: "Schenkt familiäre Harmonie, seelische Geborgenheit und friedliche Schwingungen im eigenen Zuhause.",
  },
  baum: {
    stoneKey: "amethyst",
    reason: "Fördert ganzheitliche seelische Erdung, Vitalität und tiefen inneren Ruhepol.",
  },
  wolken: {
    stoneKey: "lapislazuli",
    reason: "Löst gedanklichen Nebel auf und schenkt die nötige Klarheit, um Verwirrungen zu durchschauen.",
  },
  schlange: {
    stoneKey: "amethyst",
    reason: "Schützt das persönliche Energiefeld vor negativen Schwingungen, Neid und unaufrichtigen Absichten.",
  },
  sarg: {
    stoneKey: "amethyst",
    reason: "Tröstet bei schmerzhaften Abschieden und hilft, Trauer sanft in inneren Frieden zu transformieren.",
  },
  blumen: {
    stoneKey: "rosenquarz",
    reason: "Öffnet das Herz für Dankbarkeit, liebenswerte Gesten und freudige Überraschungen.",
  },
  sense: {
    stoneKey: "lapislazuli",
    reason: "Schärft die Aufmerksamkeit und schützt vor unüberlegten, impulsiven Schritten in heiklen Momenten.",
  },
  ruten: {
    stoneKey: "lapislazuli",
    reason: "Fördert deeskalierende, wahrhaftige Sprache und hilft, Missverständnisse sachlich zu klären.",
  },
  voegel: {
    stoneKey: "amethyst",
    reason: "Beruhigt das vegetative Nervensystem, lindert Nervosität und stoppt kreisende Sorgenschleifen.",
  },
  kind: {
    stoneKey: "rosenquarz",
    reason: "Schützt das verletzliche innere Kind und ermutigt zu unvoreingenommenem, vertrauensvollem Neuanfang.",
  },
  fuchs: {
    stoneKey: "lapislazuli",
    reason: "Stärkt gesunde Unterscheidungskraft und hilft, Fassaden und unlautere Absichten früh zu erkennen.",
  },
  baer: {
    stoneKey: "bergkristall",
    reason: "Verleiht unerschütterliche innere Standfestigkeit, Selbstvertrauen und souveräne Kraft.",
  },
  sterne: {
    stoneKey: "mondstein",
    reason: "Verbindet dich mit kosmischer Führung, spiritueller Klarheit und vertieft deine Ahnungen.",
  },
  stoerche: {
    stoneKey: "mondstein",
    reason: "Begleitet Wandlungsprozesse sanft und erleichtert das harmonische Ankommen im neuen Lebensabschnitt.",
  },
  hund: {
    stoneKey: "rosenquarz",
    reason: "Nährt treue Seelenbündnisse, echte Freundschaften und das gegenseitige Verzeihen.",
  },
  turm: {
    stoneKey: "amethyst",
    reason: "Unterstützt das gesunde Setzen von Grenzen und die Rückbesinnung auf den eigenen Wesenskern.",
  },
  park: {
    stoneKey: "rosenquarz",
    reason: "Schenkt Ausstrahlung, Charisma und Herzenswärme bei gesellschaftlichen Anlässen.",
  },
  berg: {
    stoneKey: "bergkristall",
    reason: "Hilft, seelische Blockaden mit Ausdauer, Klarheit und Schritt-für-Schritt-Fokus zu überwinden.",
  },
  wege: {
    stoneKey: "bergkristall",
    reason: "Erleuchtet Weggabelungen und schenkt Mut für die stimmigste Richtungsentscheidung.",
  },
  maeuse: {
    stoneKey: "amethyst",
    reason: "Schützt vor seelischem Energieverlust und hilft, anstrengende Verlustängste aufzulösen.",
  },
  herz: {
    stoneKey: "rosenquarz",
    reason: "Die reinste Schwingung der Liebe: Nährt Zuneigung, Herzenswärme und romantische Seelenbindung.",
  },
  ring: {
    stoneKey: "rosenquarz",
    reason: "Unterstützt verbindliche Partnerschaften, Seelenverträge und ehrliche Loyalität.",
  },
  buch: {
    stoneKey: "lapislazuli",
    reason: "Öffnet den Zugang zu verborgenem Wissen, Intuition und unbewussten Seelenwahrheiten.",
  },
  brief: {
    stoneKey: "lapislazuli",
    reason: "Fördert authentische, klare Kommunikation und das richtige Verständnis empfangener Nachrichten.",
  },
  herr: {
    stoneKey: "bergkristall",
    reason: "Klärt die Gedankenwelt und Handlungsbereitschaft des männlichen Archetyps / Herzenspartners.",
  },
  dame: {
    stoneKey: "mondstein",
    reason: "Stärkt die feminine Gefühlstiefe, weibliche Weisheit und seelische Anziehungskraft.",
  },
  lilien: {
    stoneKey: "rosenquarz",
    reason: "Bringt Reinheit, Friede und harmonische Geborgenheit in Familie, Reife und Intimität.",
  },
  sonne: {
    stoneKey: "bergkristall",
    reason: "Schenkt pure Lebensenergie, Durchsetzungskraft und strahlende Zuversicht auf ganzer Linie.",
  },
  mond: {
    stoneKey: "mondstein",
    reason: "Harmonisiert die innere Gefühlswelt, Intuition und besänftigt emotionale Schwankungen.",
  },
  schluessel: {
    stoneKey: "bergkristall",
    reason: "Schließt festgefahrene Situationen auf und verleiht unumstößliche Gewissheit über den richtigen Schritt.",
  },
  fische: {
    stoneKey: "rosenquarz",
    reason: "Fördert seelische Fülle, Empathie und das freie Fließen von Gefühlen und materiellen Gütern.",
  },
  anker: {
    stoneKey: "lapislazuli",
    reason: "Schenkt Verlässlichkeit, berufliche Stabilität und sichere Verwurzelung im Alltag.",
  },
  kreuz: {
    stoneKey: "amethyst",
    reason: "Spendet spirituellen Trost, Demut und die innere Kraft zur Überwindung schicksalhafter Prüfungen.",
  },
};

export function getGemstoneForTarot(slug) {
  const match = TAROT_STONE_MAP[slug] || {
    stoneKey: "rosenquarz",
    reason: "Harmonisiert dein Energiefeld und unterstützt die Herzöffnung bei dieser Karte.",
  };
  const stoneData = STONES[match.stoneKey];
  return {
    ...stoneData,
    reason: match.reason,
  };
}

export function getGemstoneForLenormand(slug) {
  const normalized = slug
    ? slug.replace(/^die-voegel-eulen$/, "voegel").replace(/^(der|die|das)-/, "")
    : "";
  const match =
    LENORMAND_STONE_MAP[slug] ||
    LENORMAND_STONE_MAP[normalized] || {
      stoneKey: "rosenquarz",
      reason: "Harmonisiert dein Energiefeld und unterstützt die Herzöffnung bei dieser Karte.",
    };
  const stoneData = STONES[match.stoneKey];
  return {
    ...stoneData,
    reason: match.reason,
  };
}

