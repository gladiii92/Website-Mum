// src/entities/Service.jsx
// Vollständige Datenbasis für alle Coaching-, Beratungs- und Ausbildungsangebote
// Inklusive Slugs, SEO-Metadaten, Hormozi Value Stacks, Zielgruppenfiltern und FAQ-Strukturen

const rawServicesData = [
  {
    id: "herzenspartner-check",
    slug: "herzenspartner-check",
    title: "3-Fragen Herzenspartner-Check",
    category: "readings",
    type: "readings",
    price: 0,
    duration: "WhatsApp Audio-Impuls (12–24h)",
    featured: true,
    available_slots: 15,
    created_date: "2026-10-18",
    image_url: "/images/Kurse/Kartenlegen_test1.webp",
    badge: "100% Kostenfrei",
    metaTitle: "Kostenloser 3-Fragen Herzenspartner-Check per WhatsApp | Ursula Heinke",
    metaDescription: "Kostenlose Ersteinschätzung per WhatsApp-Sprachnachricht zu deinem Herzenspartner, Gefühlen & Seelenplan von Ursula Heinke (25+ Jahre Erfahrung, 34.000+ Beratungen).",
    headline: "Was denkt und fühlt dein Herzenspartner wirklich?",
    subheadline: "Erhalte deine persönliche Ersteinschätzung als WhatsApp-Sprachnachricht – diskret, intuitiv & 100% kostenfrei direkt auf dein Smartphone.",
    description: "Sende Ursula deine 3 drängendsten Fragen zu Liebe & Herzenspartner per WhatsApp. Du erhältst eine persönliche intuitive Ersteinschätzung als Sprachnachricht – 100% kostenfrei.",
    longDescription: "Wenn zwischen dir und deinem Herzenspartner Ungewissheit, Funkstille oder ein zermürbender On-Off-Zyklus herrscht, drehen sich deine Gedanken Tag und Nacht im Kreis. Der kostenlose 3-Fragen Herzenspartner-Check bricht diese Gedankenschleife. Ursula Heinke verbindet sich medial mit eurer Seelenverbindung und zieht gezielte Karten auf deine 3 brennendsten Fragen. Du erhältst eine warme, ungeschminkte Sprachnachricht mit echten Tendenzen.",
    benefits: [
      "100% kostenlose Ersteinschätzung per WhatsApp",
      "Persönliche Audio-Sprachnachricht von Ursula",
      "Erste Tendenzen zu Gedanken deines Partners",
      "Kein Abo, kein Verkaufsdruck, absolute Diskretion"
    ],
    targetAudience: {
      forWhom: [
        "Du bist unsicher, woran du bei deinem Herzenspartner aktuell bist",
        "Ihr habt Funkstille oder befindet euch in einer schmerzhaften Rückzugsphase",
        "Du möchtest Ursulas mediale Treffsicherheit risikofrei selbst erleben"
      ],
      notForWhom: [
        "Du suchst eine oberflächliche Ja/Nein-Computerberechnung",
        "Du bist nicht bereit, ehrliche Wahrheiten über eure Dynamik zu hören"
      ]
    },
    process: [
      { step: "1", title: "Fragen per WhatsApp senden", desc: "Klicke auf den Button und schicke Ursula eure beiden Vornamen und deine 3 drängendsten Fragen." },
      { step: "2", title: "Mediale Legung", desc: "Ursula legt intuitiv Tarot- und Lenormandkarten auf eure aktuelle Energiesituation." },
      { step: "3", title: "Persönliche Sprachnachricht", desc: "Innerhalb von 12–24 Stunden hörst du Ursulas intuitive Einschätzung direkt auf deinem Smartphone." }
    ],
    valueStack: [
      { item: "Intuitive 3-Fragen Legung auf den Partner", value: "60 €" },
      { item: "Persönliche Audio-Sprachnachricht (12–24h)", value: "30 €" },
      { item: "Erste Handlungsempfehlung für deinen Herzensweg", value: "30 €" }
    ],
    totalValue: "120 €",
    guarantee: "100% unverbindlich und kostenfrei. Deine Daten und Fragen werden streng vertraulich behandelt.",
    faq: [
      {
        question: "Kostet der Check wirklich keinen Cent?",
        answer: "Ja, zu 100%. Es gibt kein Abonnement, keine versteckten Kosten und keine automatische Verlängerung. Ursula bietet diesen Impuls an, damit du ihre intuitive Arbeitsweise ohne jedes Risiko kennenlernen kannst."
      },
      {
        question: "Welche Daten braucht Ursula für die Legung?",
        answer: "Eure beiden Vornamen und euer ungefähres Alter reichen vollkommen aus. Wenn du möchtest, kannst du auch ein Foto mitsenden – das vertieft den energetischen Kanal."
      },
      {
        question: "Wie schnell erhalte ich meine Antwort?",
        answer: "In der Regel spricht dir Ursula innerhalb von 12 bis maximal 24 Stunden deine Sprachnachricht direkt in WhatsApp ein."
      }
    ],
    whatsappMessage: "Hallo Ursula, ich habe dein Angebot '3-Fragen Herzenspartner-Check (Kostenlos)' auf deiner Webseite gesehen und möchte gerne meine 3 Fragen per WhatsApp für eine Einschätzung stellen."
  },
  {
    id: "express-audio-impuls",
    slug: "express-audio-impuls",
    title: "Express 1-Karten-Audio-Impuls",
    category: "readings",
    type: "readings",
    price: 19,
    duration: "Audio-Deutung (12–24h)",
    featured: false,
    available_slots: 20,
    created_date: "2026-10-18",
    image_url: "/images/Kurse/Kartenlegen_test3.webp",
    badge: "Express Audio",
    metaTitle: "Express 1-Karten-Audio-Impuls (19 €) | Ursula Heinke",
    metaDescription: "Schnelle seelische Antwort per WhatsApp innerhalb 12–24h. Ursula zieht 1 gezielte Karte auf deine konkrete Frage zu Liebe, Partner oder Beruf.",
    headline: "Die schnelle Seelen-Antwort für zwischendurch",
    subheadline: "1 gezielte Karte, glasklare Tendenz – als persönliche Sprachnachricht direkt per WhatsApp innerhalb von 12–24 Stunden.",
    description: "Schnelle Seelen-Antwort für zwischendurch: Ursula zieht 1 gezielte Karte auf deine konkrete Frage und sendet dir deine Audio-Deutung innerhalb von 12–24h direkt per WhatsApp.",
    longDescription: "Manchmal steht man vor einer akuten Entscheidung oder einer plötzlichen Verhaltensänderung des Partners und braucht keinen 60-minütigen Gesprächstermin, sondern einen präzisen, schnellen Seelenimpuls. Mit dem Express 1-Karten-Audio-Impuls fokussiert Ursula ihre mediale Gabe auf deine eine zentrale Frage und liefert dir eine fundierte Audio-Deutung zum Immer-Wieder-Anhören.",
    benefits: [
      "Gezielte Kartenlegung auf 1 konkrete Frage",
      "Schnelle Audio-Antwort innerhalb von 12–24h",
      "Dauerhaft auf deinem Smartphone abrufbar",
      "Ideal für akute Zwischenfragen und schnelle Klarheit"
    ],
    targetAudience: {
      forWhom: [
        "Du brauchst schnelle Klarheit zu einer ganz konkreten Frage",
        "Du hast wenig Zeit für einen ausführlichen Gesprächstermin",
        "Du möchtest eine fundierte Botschaft, die du dir immer wieder anhören kannst"
      ],
      notForWhom: [
        "Du möchtest deine gesamte Lebensgeschichte und komplexe Familienmuster aufarbeiten (hierfür ist Stufe 2, der Seelen-Klarheits-Kompass, gedacht)"
      ]
    },
    process: [
      { step: "1", title: "Frage formulieren", desc: "Klicke auf den Button und sende Ursula deine konkrete Frage per WhatsApp." },
      { step: "2", title: "Kartenlegung", desc: "Ursula zieht intuitiv die Schlüsselkarte aus dem Tarot- oder Lenormand-Deck." },
      { step: "3", title: "Audio-Deutung", desc: "Du erhältst eine 3–5 minütige Sprachnachricht mit Ursulas Tiefendeutung." }
    ],
    valueStack: [
      { item: "Individuelle 1-Karten-Legung auf deine Kernfrage", value: "35 €" },
      { item: "Persönliche Audio-Sprachnachricht mit Deutung", value: "25 €" }
    ],
    totalValue: "60 €",
    guarantee: "Schnelle Bearbeitung innerhalb von 12–24 Stunden garantiert.",
    faq: [
      {
        question: "Zu welchen Themen kann ich eine Frage stellen?",
        answer: "Zu jedem Lebensbereich: Herzenspartner, Liebesentscheidungen, berufliche Angebote, Wohnortwechsel oder innere Blockaden."
      },
      {
        question: "Wie bezahle ich die 19 €?",
        answer: "Unkompliziert via PayPal oder Banküberweisung nach deiner WhatsApp-Nachricht."
      }
    ],
    whatsappMessage: "Hallo Ursula, ich möchte den Express 1-Karten-Audio-Impuls (19 €) buchen. Meine konkrete Frage an die Karten lautet: "
  },
  {
    id: "standard-reading-30-min",
    slug: "standard-reading-30-min",
    title: "Standard Reading – 30 Minuten Klarheit",
    category: "readings",
    type: "readings",
    price: 90,
    duration: "30 Minuten Live-Call",
    featured: false,
    available_slots: 10,
    created_date: "2025-02-01",
    image_url: "/images/Kurse/Kartenlegen_test3.webp",
    badge: "30 Min Beratung",
    metaTitle: "Standard Reading 30 Min – Telefon & WhatsApp Beratung (90 €) | Ursula Heinke",
    metaDescription: "In 30 Minuten intensiv in Partnerschaft, Beruf & Seelenweg eintauchen. Mediale Lebensberatung & Kartenlegung mit Ursula Heinke (25+ Jahre Erfahrung).",
    headline: "Kompakte Orientierung & mediale Entscheidungshilfe",
    subheadline: "30 Minuten intensive 1:1 Live-Beratung per Telefon oder WhatsApp-Call – fundiert, ehrlich und treffsicher.",
    description: "30 Minuten intensive 1:1 Live-Beratung per Telefon oder WhatsApp-Call: Gezielte Legung mit Tarot & Lenormand für schnelle, treffsichere Antworten bei akuten Lebensentscheidungen.",
    longDescription: "Wenn du vor einer wichtigen Weggabelung stehst oder eine gezielte Standortbestimmung brauchst, liefert das 30-Minuten-Reading die nötige Orientierung. Ursula legt live für dich die Karten, beantwortet deine Nachfragen und gibt dir konkrete astrologische und seelische Richtungsweiser an die Hand.",
    benefits: [
      "30 Minuten 1:1 Live-Gespräch (Telefon/Call)",
      "Gezielte Standortbestimmung & Kartenlegung",
      "Direkte Klärung deiner wichtigsten Fragen",
      "Flexibel und diskret mit Ursula Heinke"
    ],
    targetAudience: {
      forWhom: [
        "Du hast 1–2 konkrete Themenblöcke, die du im direkten Gespräch klären willst",
        "Du möchtest live Rückfragen stellen und Ursulas Einschätzung direkt hören"
      ],
      notForWhom: [
        "Du brauchst eine umfassende Gedankenlegung inklusive Audio-Mitschnitt und 7-Tage-Support (wähle hierfür den Seelen-Klarheits-Kompass für 149 €)"
      ]
    },
    process: [
      { step: "1", title: "Termin abstimmen", desc: "Schreibe Ursula per WhatsApp, um einen zeitnahen Gesprächstermin zu vereinbaren." },
      { step: "2", title: "30 Min Live-Gespräch", desc: "Ihr telefoniert zur vereinbarten Zeit und analysiert deine Situation Schritt für Schritt." },
      { step: "3", title: "Klarheit mitnehmen", desc: "Du beendest das Gespräch mit Ruhe, Mut und einer klaren Perspektive." }
    ],
    valueStack: [
      { item: "30 Minuten 1:1 Live-Beratung", value: "90 €" }
    ],
    totalValue: "90 €",
    guarantee: "Absolute Vertraulichkeit und einfühlsame, professionelle Beratung.",
    faq: [
      {
        question: "Wie läuft der Anruf ab?",
        answer: "Ganz entspannt: Du wirst von Ursula pünktlich zum Termin auf WhatsApp oder deiner Festnetz-/Handynummer angerufen."
      }
    ],
    whatsappMessage: "Hallo Ursula, ich habe dein Angebot 'Standard Reading – 30 Minuten Klarheit' (90 €) gesehen und möchte gerne einen Gesprächstermin vereinbaren."
  },
  {
    id: "seelen-klarheits-kompass",
    slug: "seelen-klarheits-kompass",
    title: "Seelen-Klarheits-Kompass – Intensiv-Reading",
    category: "readings",
    type: "readings",
    price: 149,
    duration: "60 Minuten Intensiv-Call",
    featured: true,
    available_slots: 6,
    created_date: "2026-10-14",
    image_url: "/images/Kurse/Kartenlegen_test2.webp",
    badge: "Bestseller / Meistgebucht",
    metaTitle: "Gedankenlegung Herzenspartner – 60 Min Seelen-Klarheits-Kompass (149 €) | Ursula Heinke",
    metaDescription: "Tiefgründige Gedankenlegung auf den Herzenspartner, Dualseelen & Blockaden. 60 Min 1:1 Call, Audio-Aufnahme, MP3 & 7 Tage WhatsApp-Support. 15-Min-Klarheitsgarantie.",
    headline: "Die tiefe Gedankenlegung für deinen Herzenspartner",
    subheadline: "60 Minuten 1:1 Intensiv-Reading: Erfahre, was er/sie fühlt, welche Blockaden euch trennen und wann die Wende eintritt – inkl. Audio-Aufnahme & 7 Tage WhatsApp-Support.",
    description: "Das umfassende 60-Minuten Intensiv-Reading mit Spezialisierung auf Gedankenlegung für den Herzenspartner. Ursula deckt Blockaden auf – inkl. Audio-Mitschnitt & 7 Tage WhatsApp-Support.",
    longDescription: "Dies ist Ursulas meistgebuchtes Flaggschiff-Angebot für alle Menschen, die in einer emotional zermürbenden Partnerschaftssituation stecken. In 60 Minuten analysiert Ursula nicht nur die Oberfläche, sondern taucht tief in das Seelenfeld deines Herzenspartners ein: Was denkt er über dich? Welche Ängste blockieren ihn? Welche Rolle spielt seine Vergangenheit? Und was ist eure seelische Lernaufgabe? Du erhältst den vollständigen Audio-Mitschnitt zum Nachhören und 7 Tage persönlichen WhatsApp-Support.",
    benefits: [
      "60 Min 1:1 Intensiv-Reading & Gedankenlegung",
      "Inkl. Audio-Mitschnitt zum Wiederanhören",
      "Inkl. 7 Tage persönlicher WhatsApp-Support",
      "Inkl. 15-Minuten-Klarheits-Garantie (Risk-Reversal)"
    ],
    targetAudience: {
      forWhom: [
        "Du steckst in einer unklaren Beziehung, Dreiecksbeziehung oder schmerzhaften Funkstille",
        "Du spürst eine tiefe Seelenverbindung (Dualseele / Seelenpartner) und verstehst sein Verhalten nicht",
        "Du willst endlich Gewissheit, wie es weitergeht, und keine Zeit mehr in Illusionen vergeuden"
      ],
      notForWhom: [
        "Du suchst nach 'Zaubersprüchen' oder Partnerrückführung gegen den freien Willen des anderen",
        "Du willst nur schmeichelhafte Worte hören, statt der ehrlichen seelischen Realität ins Auge zu blicken"
      ]
    },
    process: [
      { step: "1", title: "Termin buchen", desc: "Schreibe Ursula per WhatsApp. Ihr stimmt einen zeitnahen Termin für eure 60-Minuten-Session ab." },
      { step: "2", title: "60 Min Tiefen-Reading", desc: "Im 1:1 Telefonat legt Ursula die Große Tafel und durchleuchtet alle Ebenen eurer Verbindung." },
      { step: "3", title: "Audio & 7 Tage Support", desc: "Du erhältst deine Aufnahme und kannst 7 Tage lang über WhatsApp Rückfragen stellen." }
    ],
    valueStack: [
      { item: "60 Min 1:1 Live-Intensiv-Reading mit Ursula Heinke", value: "199 €" },
      { item: "Audio-Mitschnitt der Session zum Wiederanhören", value: "49 €" },
      { item: "Vorab-Fotoanalyse des Herzenspartners", value: "50 €" },
      { item: "MP3-Meditation 'Innerer Frieden & Loslassen'", value: "19 €" },
      { item: "7 Tage WhatsApp-Notfall-Rückfrage-Joker", value: "99 €" }
    ],
    totalValue: "416 €",
    guarantee: "15-Minuten-Klarheits-Garantie: Wenn du in den ersten 15 Minuten spürst, dass Ursula deine Situation nicht intuitiv erfasst, beenden wir das Gespräch und du erhältst 100% deines Geldes zurück.",
    faq: [
      {
        question: "Wie funktioniert die 15-Minuten-Garantie?",
        answer: "Ganz unkompliziert: Wenn du nach den ersten 15 Minuten nicht das Gefühl hast, dass Ursula eure Seelenverbindung präzise wahrnimmt, sagst du einfach Bescheid. Wir brechen das Reading ab und du zahlst keinen Cent."
      },
      {
        question: "Wie erhalte ich die Audio-Aufnahme?",
        answer: "Direkt nach dem Telefonat sendet Ursula dir die MP3-Audiodatei per WhatsApp oder E-Mail zu, sodass du sie dir jederzeit wieder in Ruhe anhören kannst."
      },
      {
        question: "Was beinhaltet der 7-Tage-WhatsApp-Support?",
        answer: "Oft tauchen nach dem Gespräch noch 1–2 Fragen auf, wenn man die Informationen verarbeitet hat. Innerhalb von 7 Tagen kannst du Ursula direkt per WhatsApp schreiben und erhältst zeitnah Antworten."
      }
    ],
    whatsappMessage: "Hallo Ursula, ich möchte gerne einen Termin für das Intensiv-Reading 'Seelen-Klarheits-Kompass' (149 €) anfragen."
  },
  {
    id: "herzensweg-begleitung",
    slug: "herzensweg-begleitung",
    title: "30 Tage Herzensweg-Begleitung (VIP Retainer)",
    category: "readings",
    type: "readings",
    price: 390,
    duration: "4 Wochen 1:1 VIP-Begleitung",
    featured: true,
    available_slots: 4,
    created_date: "2026-10-18",
    image_url: "/images/Kurse/coaching_test1.webp",
    badge: "VIP Begleitung",
    metaTitle: "30 Tage Herzensweg-Begleitung – 1:1 VIP Liebeskummer Coaching (390 €) | Ursula Heinke",
    metaDescription: "4 Wochen intensive Begleitung bei Liebeskummer, Dualseelen-Prozessen & Beziehungs-Neuausrichtung. 4x 1:1 Readings + persönlicher WhatsApp-Notfall-Joker.",
    headline: "4 Wochen emotionale Stabilität, Halt & Transformation",
    subheadline: "Gehe deinen Seelenweg nicht allein: 4 intensive 1:1 Sessions plus täglicher WhatsApp-Notfall-Halt bei akuten Rückfällen und Liebeskummer-Wellen.",
    description: "Intensive 4-wöchige 1:1 VIP-Begleitung für deine Liebeskummer-Heilung und emotionale Stabilität: 4 wöchentliche 1:1 Readings plus persönlicher täglicher WhatsApp-Notfall-Joker bei Krisen.",
    longDescription: "Tiefgreifende Herzens- und Dualseelenprozesse lassen sich selten in einer einzelnen Stunde lösen. Wenn die Gefühle Achterbahn fahren und der Drang übermächtig wird, dem Partner hinterherzulaufen oder in Verzweiflung zu verfallen, ist Ursula 30 Tage lang dein Fels in der Brandung. Durch wöchentliche Neuausrichtungen und direkten WhatsApp-Kontakt bleibst du in deiner Mitte und gewinnst deine Selbstachtung und Anziehungskraft zurück.",
    benefits: [
      "4x wöchentliche 1:1 Readings (je 45 Minuten)",
      "Täglicher WhatsApp-Notfall-Support bei Krisen",
      "Fortlaufende Seelenpartner- & Blockadenarbeit",
      "Persönliche Übungen zur Stärkung deines Selbstwerts"
    ],
    targetAudience: {
      forWhom: [
        "Du leidest unter starkem Liebeskummer oder einem zermürbenden Dualseelen-Prozess",
        "Du brauchst einen verlässlichen Halt, um nicht immer wieder in dieselben Verhaltensmuster zu fallen",
        "Du möchtest dich in den nächsten 30 Tagen emotional komplett neu aufstellen"
      ],
      notForWhom: [
        "Du suchst eine einmalige Schnellberatung (hierfür genügt das 30- oder 60-Minuten-Reading)"
      ]
    },
    process: [
      { step: "1", title: "Auftakt-Reading", desc: "In der ersten Woche analysieren wir das Fundament und definieren deinen 30-Tage-Fahrplan." },
      { step: "2", title: "Wöchentliche Sessions", desc: "Alle 7 Tage findet ein 45-Minuten-Call statt, um Fortschritte zu vertiefen und Hindernisse zu lösen." },
      { step: "3", title: "WhatsApp-Notfall-Joker", desc: "Bei akuten emotionalen Auslösern steht Ursula dir über den gesamten Zeitraum unterstützend zur Seite." }
    ],
    valueStack: [
      { item: "4x 1:1 Readings à 45 Minuten (Wert: 4x 135 €)", value: "540 €" },
      { item: "30 Tage priorisierter WhatsApp-Notfall-Support", value: "250 €" },
      { item: "Individuelle Seelenplan- & Energie-Impulse", value: "100 €" }
    ],
    totalValue: "890 €",
    guarantee: "Maximale Diskretion und kontinuierliche Begleitung auf Augenhöhe.",
    faq: [
      {
        question: "Wie viele Plätze gibt es für die 30-Tage-Begleitung?",
        answer: "Da Ursula ihre Klienten sehr intensiv und persönlich betreut, sind maximal 4 Plätze gleichzeitig verfügbar."
      }
    ],
    whatsappMessage: "Hallo Ursula, ich interessiere mich für die '30 Tage Herzensweg-Begleitung (VIP Retainer)' (390 €) und möchte prüfen, ob aktuell ein Platz frei ist."
  },
  {
    id: "ausbildung-kartenlegen",
    slug: "ausbildung-kartenlegen",
    title: "Zertifizierte Ausbildung: Intuitive Kartenlegerin",
    category: "ausbildung",
    type: "ausbildung",
    price: 2490,
    duration: "10 Wochen 1:1 Mentoring",
    featured: true,
    available_slots: 3,
    created_date: "2026-10-14",
    image_url: "/images/Kurse/kurs1.webp",
    badge: "Exklusives Mentoring",
    metaTitle: "Ausbildung Intuitive Kartenlegerin – 10 Wochen 1:1 Mentoring mit Zertifikat (2.490 €) | Ursula Heinke",
    metaDescription: "Professionelle Ausbildung zur intuitiven Kartenlegerin mit Tarot & Lenormand. Persönliches 1:1 Mentoring mit Ursula Heinke (25+ Jahre Erfahrung) inkl. Zertifikat.",
    headline: "Werde professionelle intuitive Kartenlegerin & Beraterin",
    subheadline: "Die exklusive 10-wöchige Fachausbildung in persönlicher 1:1 Mentorenschaft mit Ursula Heinke – lerne mediale Deutung, Klientenführung und Praxisaufbau.",
    description: "10-wöchige Fachausbildung in persönlicher 1:1 Mentorenschaft mit Ursula Heinke. Lerne mediales Kartenlegen (Tarot & Lenormand), Klientenführung und Praxisaufbau mit Abschluss-Zertifikat.",
    longDescription: "Spürst du eine tiefe intuitive Gabe in dir und möchtest Menschen professionell auf ihrem Seelenweg begleiten? In dieser 10-wöchigen Intensiv-Ausbildung lernst du nicht aus Büchern, sondern im direkten 1:1 Mentoring von Ursula Heinke (über 25 Jahre Praxis, 34.000+ geführte Beratungen). Du meisterst die Großen Arkana des Tarot, das 36er Lenormand-Deck, die mediale Gedankenlegung und erfährst, wie du eine erfolgreiche spirituelle Beratungspraxis aufbaust.",
    benefits: [
      "10 Wochen persönliche 1:1 Mentorenschaft",
      "Praxis-Ausbildung in Tarot & Lenormand",
      "Offizielles Abschluss-Zertifikat der Akademie",
      "Erprobte Legesysteme für Liebe & Seelenpartner",
      "Praxisaufbau, Ethik & professionelle Klientenführung"
    ],
    targetAudience: {
      forWhom: [
        "Frauen mit starker Intuition, die ihre Berufung zum Beruf machen möchten",
        "Bereits praktizierende Beraterinnen, die ihre Treffsicherheit auf Champions-League-Niveau heben wollen",
        "Menschen, die ein persönliches 1:1 Mentoring einer unpersönlichen Online-Gruppenausbildung vorziehen"
      ],
      notForWhom: [
        "Personen, die Kartenlegen als rein logisches Auswendiglernen von Büchern betrachten",
        "Personen, die nicht bereit sind, 2–3 Stunden pro Woche aktiv an ihrer medialen Wahrnehmung zu arbeiten"
      ]
    },
    process: [
      { step: "1", title: "Bewerbungs-Gespräch", desc: "In einem 15-minütigen Vorgespräch prüfen wir, ob die Chemie stimmt und deine Gabe bereit ist." },
      { step: "2", title: "10 Wochen Intensiv-Mentoring", desc: "Wöchentliche 1:1 Ausbildungs-Calls, Live-Deutungsübungen und individuelles Feedback." },
      { step: "3", title: "Zertifizierung & Start", desc: "Nach erfolgreicher Abschlusslegung erhältst du dein Zertifikat und bist startklar für eigene Klienten." }
    ],
    valueStack: [
      { item: "10x 90 Min 1:1 Intensiv-Mentoring mit Ursula Heinke", value: "2.500 €" },
      { item: "Umfassendes Lehr- & Arbeitsmaterial für Tarot & Lenormand", value: "350 €" },
      { item: "10 Wochen WhatsApp-Begleitung für Übungsdeutungen", value: "600 €" },
      { item: "Modul: Praxisaufbau, Marketing & Klientenführung", value: "500 €" },
      { item: "Offizielles Abschluss-Zertifikat", value: "200 €" }
    ],
    totalValue: "4.150 €",
    guarantee: "Ursula begleitet dich persönlich, bis du vollkommen sicher und eigenständig Beratungen durchführen kannst.",
    faq: [
      {
        question: "Brauche ich Vorkenntnisse für die Ausbildung?",
        answer: "Nein. Ein grundlegendes Interesse an Symbolik und eine offene Intuition genügen. Ursula holt dich genau dort ab, wo du aktuell stehst."
      },
      {
        question: "Ist eine Ratenzahlung möglich?",
        answer: "Ja, die Ausbildungsgebühr kann in bis zu 3 monatlichen Teilbeträgen beglichen werden."
      }
    ],
    whatsappMessage: "Hallo Ursula, ich interessiere mich für die 'Zertifizierte Ausbildung zur Intuitiven Kartenlegerin' (2.490 €) und möchte mich für ein kurzes Kennenlerngespräch bewerben."
  },
  {
    id: "waldbaden-frankenwald",
    slug: "waldbaden-frankenwald",
    title: "Waldbaden – Achtsamkeit in der Natur",
    category: "gruppenkurs",
    type: "gruppenkurs",
    price: 55,
    duration: "2 Stunden Naturerlebnis",
    featured: true,
    available_slots: 10,
    created_date: "2025-04-01",
    image_url: "/images/Kurse/waldcoaching_test2.webp",
    badge: "Naturerlebnis",
    metaTitle: "Waldbaden Frankenwald & Coburg – Achtsamkeit & Natur-Meditation (55 €) | Ursula Heinke",
    metaDescription: "Heilsames Waldbaden im Frankenwald & Raum Coburg ab 5 Personen. 2 Stunden Stressabbau, Natur-Meditation & seelische Erdung mit Ursula Heinke.",
    headline: "Tauche ein in die heilsame Atmosphäre des Waldes",
    subheadline: "2 Stunden achtsames Waldbaden im Frankenwald: Entschleunige deinen Geist, stärke dein Immunsystem und verbinde dich mit der regenerierenden Kraft der Natur.",
    description: "2 Stunden heilsame Shinrin-Yoku Waldbaden-Sitzungen ab 5 Personen im Frankenwald. Entspanne deinen Geist, baue Stresshormone ab und tanke neue Lebensenergie in der unberührten Natur.",
    longDescription: "Waldbaden (Shinrin-Yoku) ist weit mehr als ein gewöhnlicher Spaziergang. Unter Ursulas einfühlsamer Anleitung öffnest du alle Sinne für die heilsamen Botenstoffe des Waldes (Terpene). Angeleitete Atemübungen, Geh-Meditationen und Naturrituale senken nachweislich das Stresshormon Cortisol, beruhigen das vegetative Nervensystem und schenken dir tiefe innere Ruhe und seelische Erdung.",
    benefits: [
      "2 Stunden geführte Shinrin-Yoku Sitzung",
      "Atemtechniken & heilsame Erdungsrituale",
      "Kleine, geschützte Gruppe ab 5 Personen",
      "Nachweislicher Stressabbau im alten Baumbestand"
    ],
    targetAudience: {
      forWhom: [
        "Menschen mit hohem Alltagsstress, Burnout-Gefühlen oder digitaler Reizüberflutung",
        "Naturverbundene Menschen, die neue Kraft im Wald tanken möchten",
        "Freundesgruppen, Familien oder Teams, die ein besonderes Naturerlebnis suchen"
      ],
      notForWhom: [
        "Personen, die einen sportlichen Leistungsmarsch oder eine Wanderung erwarten"
      ]
    },
    process: [
      { step: "1", title: "Anfrage senden", desc: "Frage deinen Wunschtermin oder die Teilnahme an der nächsten offenen Gruppe per WhatsApp an." },
      { step: "2", title: "Treffpunkt im Frankenwald", desc: "Wir treffen uns an einem ruhigen, kraftvollen Waldort im Raum Ludwigsstadt/Frankenwald." },
      { step: "3", title: "2 Stunden Waldbaden", desc: "Entschleunigung, Meditation und sanftes Ankommen im Hier und Jetzt." }
    ],
    valueStack: [
      { item: "2 Stunden geführte Shinrin-Yoku Waldbaden-Sitzung", value: "55 €" }
    ],
    totalValue: "55 €",
    guarantee: "Entspannung und neue Frische für Körper und Seele garantiert.",
    faq: [
      {
        question: "Was muss ich mitbringen?",
        answer: "Bequeme, wetterangepasste Kleidung, festes Schuhwerk und eine kleine Trinkflasche. Bei leichtem Nieselregen findet das Waldbaden statt – der Wald duftet dann besonders intensiv."
      }
    ],
    whatsappMessage: "Hallo Ursula, ich interessiere mich für das 'Waldbaden im Frankenwald' (55 €) und möchte nach dem nächsten Termin oder einer Gruppenbuchung fragen."
  },
  {
    id: "frauen-retreat-coburg",
    slug: "frauen-retreat-coburg",
    title: "Frauen-Retreat: Herzenszeit",
    category: "workshop",
    type: "workshop",
    price: 129,
    duration: "3 Stunden (13:00 - 16:00 Uhr)",
    featured: false,
    available_slots: 15,
    created_date: "2026-11-07",
    image_url: "/images/Kurse/seminar.webp",
    badge: "Event-Highlight",
    metaTitle: "Frauen-Retreat Herzenszeit Coburg (129 €) | Studio Frieda & Ursula Heinke",
    metaDescription: "Zurück zu dir: Kakaozeremonie, Klangschalen, Blockadenlösung & persönliche Kartenlegung im Studio Frieda, Coburg. Stärke dein inneres Strahlen.",
    headline: "Ein besonderer Tag für dein Herz, deine Seele & dein Strahlen",
    subheadline: "Gemeinsam fühlen, loslassen, heilen und wachsen – mit Kakaozeremonie, Klangschalen-Meditation und persönlicher Kartenlegung im Studio Frieda, Coburg.",
    description: "Ein besonderer Tag für dein Herz im Studio Frieda, Coburg: Kakaozeremonie, Tiefenentspannung mit Klangschalen, geführte Blockadenlösung und persönliche 1:1 Kartenlegung mit Ursula & Jessica.",
    longDescription: "Gönne dir eine Auszeit nur für dich: In geschützter Frauenrunde im stilvollen Studio Frieda in Coburg laden Ursula und Jessica dich ein, allen Alltagsballast abzustreifen. Wir eröffnen den Kreis mit einer herzöffnenden Rohkakao-Zeremonie, gefolgt von einer tiefenentspannenden Klangschalen-Klangreise. Jede Teilnehmerin erhält von Ursula eine persönliche Kartenlegung und eine energetische Blockadenlösung für ihr inneres Strahlen.",
    benefits: [
      "3 Stunden Auszeit im Studio Frieda, Coburg",
      "Herzöffnende Rohkakao-Zeremonie & Klangreise",
      "Persönliche 1:1 Kurzkartenlegung durch Ursula",
      "Geführte Blockadenlösung für Selbstliebe"
    ],
    targetAudience: {
      forWhom: [
        "Frauen, die sich nach seelischer Regeneration und einem nährenden Sisterhood-Kreis sehnen",
        "Frauen, die alte emotionale Lasten liebevoll verabschieden möchten"
      ],
      notForWhom: [
        "Personen, die keine Gruppenformate mögen"
      ]
    },
    process: [
      { step: "1", title: "Ticket sichern", desc: "Melde dich per WhatsApp an, solange freie Plätze im Studio Frieda verfügbar sind." },
      { step: "2", title: "Ankommen in Coburg", desc: "Wir empfangen dich am 07. November im Studio Frieda mit offenem Herzen." },
      { step: "3", title: "3 Stunden Auftanken", desc: "Erlebe Klang, Kakao, Karten und seelische Neuausrichtung." }
    ],
    valueStack: [
      { item: "Teilnahme am 3-stündigen Retreat", value: "129 €" }
    ],
    totalValue: "129 €",
    guarantee: "Ein unvergesslicher Nachmittag voller Wärme und Transformation.",
    faq: [
      {
        question: "Wann und wo findet das Retreat statt?",
        answer: "Am Samstag, den 07. November 2026 von 13:00 bis 16:00 Uhr im Studio Frieda, Coburg."
      }
    ],
    whatsappMessage: "Hallo Ursula, ich möchte gerne einen Platz für das 'Frauen-Retreat: Herzenszeit' am 07.11. in Coburg buchen."
  },
  {
    id: "kartenlegen-lernen-kurs",
    slug: "kartenlegen-lernen-kurs",
    title: "Basis-Kurs: Kartenlegen lernen",
    category: "workshop",
    type: "workshop",
    price: 199,
    duration: "5 Stunden Praxis-Workshop",
    featured: false,
    available_slots: 12,
    created_date: "2025-06-01",
    image_url: "/images/Kurse/kurs1.webp",
    badge: "Praxis-Workshop",
    metaTitle: "Basis-Kurs Kartenlegen lernen – 1-Tages-Workshop (199 €) | Ursula Heinke",
    metaDescription: "Lerne an einem intensiven Praxistag die Grundlagen von Tarot & Lenormand. Intuitionsschulung, Symbolik & Praxisübungen mit Ursula Heinke.",
    headline: "Der kompakte Praxistag: Grundlagen von Tarot & Lenormand",
    subheadline: "Lerne an einem intensiven Praxistag die Symbole und Legemuster von Tarot und Lenormand – ideal für den privaten Einstieg und die Selbsterkenntnis.",
    description: "Praxisnaher 5-Stunden Workshop in kleiner Gruppe: Lerne die Symbole und Legemuster von Tarot und Lenormand fundiert kennen – ideal für den privaten Einstieg und die Selbsterkenntnis.",
    longDescription: "Möchtest du lernen, die Sprache der Karten selbst zu entschlüsseln? In diesem 5-stündigen Basis-Workshop vermittelt Ursula Heinke dir ein solides Fundament: von der Bedeutung der Großen Arkana im Tarot über die Schlüsselkombinationen des Lenormand bis hin zu einfachen Legesystemen für Alltag, Liebe und Entscheidungen. Viele praktische Partnerübungen garantieren, dass du das Gelernte sofort anwenden kannst.",
    benefits: [
      "5 Stunden Praxis-Workshop in kleiner Runde",
      "Fundierter Überblick über Tarot & Lenormand",
      "Umfassendes Handout & Legemuster für zu Hause",
      "Praktische Deutungsübungen mit Gleichgesinnten"
    ],
    targetAudience: {
      forWhom: [
        "Einsteiger, die sich für Kartenlegen interessieren und ein solides Fundament wollen",
        "Spirituell Interessierte, die Karten als Werkzeug für ihre eigene Seelenarbeit nutzen möchten"
      ],
      notForWhom: [
        "Personen, die eine vollwertige professionelle 10-wöchige Berufsausbildung suchen (hierfür ist die zertifizierte Ausbildung für 2.490 € gedacht)"
      ]
    },
    process: [
      { step: "1", title: "Anmelden", desc: "Reserviere dir deinen Workshop-Platz per WhatsApp." },
      { step: "2", title: "Praxistag erleben", desc: "5 Stunden intensives Lernen, Legen und Deuten mit Gleichgesinnten." },
      { step: "3", title: "Zu Hause anwenden", desc: "Mit deinem Handout kannst du sofort eigenständig erste Legungen durchführen." }
    ],
    valueStack: [
      { item: "5 Stunden Intensiv-Workshop", value: "199 €" }
    ],
    totalValue: "199 €",
    guarantee: "Sofortige praktische Anwendbarkeit der Legemethoden ab Tag 1.",
    faq: [
      {
        question: "Brauche ich eigene Kartendecks?",
        answer: "Wenn du bereits ein Rider-Waite Tarot oder Lenormand-Deck besitzt, bringe es gerne mit. Vor Ort stehen aber auch Übungsdecks zur Verfügung."
      }
    ],
    whatsappMessage: "Hallo Ursula, ich interessiere mich für den 'Basis-Kurs: Kartenlegen lernen' (199 €) und möchte nach dem nächsten Termin fragen."
  }
];

export const servicesData = rawServicesData;

export const ServiceData = rawServicesData.filter(service => {
  // Automatisches Verstecken des Frauen-Retreats nach dem 7. November 2026
  if (service.title === "Frauen-Retreat: Herzenszeit") {
    const eventDate = new Date("2026-11-08T00:00:00");
    if (new Date() > eventDate) return false;
  }
  return true;
});

export const getServiceBySlug = (slug) => {
  return rawServicesData.find(service => service.slug === slug);
};

export const getAllServiceSlugs = () => {
  return rawServicesData.map(service => service.slug);
};

export const Types = [
  {
    name: "readings",
    display_name: "Readings & Beratung",
    preview_image_url: "/images/Kurse/Kartenlegen_test2.webp",
    description: "Persönliche Readings für schnelle Klarheit und tiefe seelische Transformation."
  },
  {
    name: "ausbildung",
    display_name: "Zertifizierte Ausbildung",
    preview_image_url: "/images/Kurse/kurs1.webp",
    description: "10-wöchiges Intensiv-Mentoring zur intuitiven Kartenlegerin mit Zertifikat."
  },
  {
    name: "workshop",
    display_name: "Workshops & Retreats",
    preview_image_url: "/images/Kurse/seminar.webp",
    description: "Intensive Praxistage, Herzenszeit-Retreats und Fähigkeitenvertiefung."
  },
  {
    name: "gruppenkurs",
    display_name: "Gruppenkurse & Waldbaden",
    preview_image_url: "/images/Kurse/waldcoaching_test2.webp",
    description: "Achtsame Natur- und Gruppenerlebnisse für Regeneration und neue Energie."
  }
];
