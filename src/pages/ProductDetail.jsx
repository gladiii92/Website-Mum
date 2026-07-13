import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { createPageUrl } from "../utils";
import { Product } from "../entities/Product";
import { ArrowLeft, Share2, ChevronLeft, ChevronRight, Sparkles, Play, Pause, Award, Shield, Info } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Card, CardContent } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/Textarea";
import { Label } from "../components/ui/Label";
import { useSwipeable } from "react-swipeable";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/Accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/Dialog";

// Erweiterte Translations für Mehrsprachigkeit (ähnlich Stone.jsx)
const translations = {
  de: {
    back_to_collection: "Zurück zur Kollektion",
    specifications: "Spezifikationen",
    carat_weight: "Karat-Gewicht",
    color: "Farbe",
    clarity: "Reinheit",
    cut: "Schliff",
    origin: "Herkunft",
    certification: "Zertifizierung",
    price: "Preis",
    price_per_carat: "Preis pro Karat",
    specifications: "Spezifikationen",
    material: "Material",
    gewicht: "Gewicht",
    maße: "Maße",
    schutzwirkung: "Schutzwirkung",
    symbolik: "Symbolik",
    focus: "Fokus",
    energy: "Energie",
    healing_property: "Heilwirkung",
    full_name: "Vollständiger Name",
    email: "E-Mail",
    phone: "Telefon",
    message: "Nachricht",
    send_inquiry: "Anfrage senden",
    inquiry_sent: "Anfrage gesendet",
    inquiry_success: "Vielen Dank für Ihr Interesse! Wir werden uns bald bei Ihnen melden.",
    play_video: "Video abspielen",
    share_stone: "Produkt teilen",
    add_wishlist: "Zur Wunschliste hinzufügen",
    stone_not_found: "Produkt nicht gefunden",
    loading: "Wird geladen...",
    diamond: "Diamant",
    ruby: "Rubin",
    sapphire: "Saphir",
    emerald: "Smaragd",
    tanzanite: "Tansanit",
    spinel: "Spinell",
    cuts: {
      oval: "Oval",
      cushion: "Kissen",
      brilliant: "Brillant",
      round: "Rund",
      emerald: "Smaragd-Schliff",
      princess: "Prinzessin-Schliff",
      marquise: "Marquise",
      pear: "Birne",
      asscher: "Asscher",
      radiant: "Radiant",
      trilliant: "Trilliant",
      heart: "Herz",
    },
    origins: {
      ceylon: "Ceylon",
      myanmar: "Myanmar",
      colombia: "Kolumbien",
      zambia: "Sambia",
      brazil: "Brasilien",
      madagascar: "Madagaskar",
      tanzania: "Tansania",
      srilanka: "Sri Lanka",
      india: "Indien",
      unknown: "Unbekannt",
    },
    treatments: {
      untreated: "Unbehandelt",
      treated: "Behandelt",
      none: "Keine Angabe"
    },
    treatment: "Unbehandelt",
    stone_names: {
      1: "Gelber Saphir",
      2: "Blauer Spinell",
      3: "Blau-Grüner Saphir",
      4: "Lavendel Spinell",
      5: "Grüner Peridot",
      6: "Rot-Pinker Spinell",
      7: "Kashmir Saphir",
      8: "Electric-Blauer Saphir"
    },
    colors: {
      gelb: "Gelb",
      blau: "Blau",
      gruen: "Grün",
      rot: "Rot",
      electricblue: "Elektrisch-Blau",
      lila: "Lila",
      reddishpink: "Rötlich-Pink",
      violett: "Violett",
      blaugruen: "Bläulich-Grün"
    },
    certifications: {
      aig: "AIG-Zertifikat",
      igi: "IGI-Zertifikat",
      guebelin: "Gübelin-Zertifikat",
      gia: "GIA-Zertifikat",
      ssef: "SSEF-Zertifikat",
      none: "Nicht zertifiziert - auf Anfrage"
    },
    rarity_levels: {
      exceptional: "Außergewöhnlich",
      rare: "Selten",
      premium: "Premium",
      select: "Einsteiger"
    },
    rarity: "Seltenheit",
    rarity_descriptions: {
      exceptional: "Außergewöhnlich - top 1%",
      rare: "Selten - top 3%",
      premium: "Premium - top 10%",
      select: "Einsteiger - top 20%"
    },
    clarities: {
      lupenrein: "Lupenrein - Keine Einschlüsse sichtbar",
      vvs: "VVS - Sehr sehr kleine Einschlüsse",
      vs: "VS - Sehr kleine Einschlüsse",
      augenrein: "Augenrein - Mit dem bloßen Auge keine Einschlüsse sichtbar",
      si: "SI - Kleine Einschlüsse",
      i: "I - Sichtbare Einschlüsse"
    },
    lexicon_title: "Heilstein-Lexikon",
    lexicon_clarity_title: "Reinheit",
    lexicon_rarity_title: "Seltenheitsstufen",
    lexicon_clarity_desc: "Die Reinheit beschreibt Einschlüsse im Stein. Hier die Stufen:",
    lexicon_rarity_desc: "Seltenheit gibt die Exklusivität an. Hier die Stufen:",
    lexicon_healing_title1: "Heilwirkungs-Lexikon",
    lexicon_healing_title: "Heilwirkungen",
    lexicon_healing_desc: "Die heilenden Wirkungen beschreiben die spirituellen Eigenschaften. Hier die Stufen:",
    healing_properties1: {
      beruhigung: "Beruhigung - Fördert innere Ruhe und Stressabbau",
      klarheit: "Klarheit - Hilft bei mentaler Fokussierung",
      schutz: "Schutz - Bietet energetischen Schutz vor Negativem",
      energieverstaerkung: "Energieverstärkung - Verstärkt Energie und Vitalität",
      liebe: "Liebe - Fördert Harmonie und emotionale Heilung",
      harmonie: "Harmonie - Bringt Ausgeglichenheit in Beziehungen",
      emotionale_heilung: "Emotionale Heilung - Hilft bei Trauma und Selbstakzeptanz",
      selbstliebe: "Selbstliebe - Stärkt Mitgefühl und Herzöffnung",
      freude: "Freude - Bringt Lebensfreude und Optimismus",
      wohlstand: "Wohlstand - Unterstützt Fülle und Erfolg",
      selbstvertrauen: "Selbstvertrauen - Stärkt Selbstbewusstsein",
      energiebalance: "Energiebalance - Harmonisiert Körper, Geist und Seele",
      innere_staerke: "Innere Stärke - Fördert Kraft und Standhaftigkeit",
      spirituelle_orientierung: "Spirituelle Orientierung - Fördert inneren Kompass",
      selbsterkenntnis: "Selbsterkenntnis - Unterstützt Reflexion und Einsicht",
      kreative_energie: "Kreative Energie - Aktiviert schöpferische Kräfte",
      spirituelle_fuehrung: "Spirituelle Führung - Unterstützt bei Gebet und Meditation",
      gebetskraft: "Gebetskraft - Verstärkt spirituelle Rituale",
      energetische_harmonie: "Energetische Harmonie - Bringt Balance und Ruhe",
      reisesegen: "Reisesegen - Sichert sichere Wege",
      spiritueller_beistand: "Spiritueller Beistand - Unterstützung in schwierigen Situationen",
      weisheit: "Weisheit - Fördert Einsicht und geistige Klarheit",
      entgiftung: "Entgiftung - Reinigt Körper und Aura",
      intuition: "Intuition - Stärkt innere Wahrnehmung und Hellsichtigkeit",
      innere_ruhe: "Innere Ruhe - Fördert Gelassenheit und Balance",
      emotionale_balance: "Emotionale Balance - Unterstützt Harmonie der Gefühle",
      selbstreflexion: "Selbstreflexion - Hilft beim Erkennen eigener Muster",
      beziehungsstaerkung: "Beziehungsstärkung - Vertieft Partnerschaft und Zusammenhalt",
      astrologische_einsichten: "Astrologische Einsichten - Liefert kosmische Orientierung",
      zukunftsplanung: "Zukunftsplanung - Hilft Entscheidungen bewusst zu treffen",
      persoenliches_wachstum: "Persönliches Wachstum - Unterstützt persönliche Entwicklung",
      lebensentscheidungen: "Lebensentscheidungen - Fördert Klarheit bei wichtigen Entscheidungen",
      persoenlichkeitsentwicklung: "Persönlichkeitsentwicklung - Unterstützt individuelles Wachstum",
      lebenswege: "Lebenswege - Liefert Orientierung im Leben",
      schutz_vor_negativitaet: "Schutz vor Negativität - Schützt vor energetischen Einflüssen",
      klarheit_im_geist: "Klarheit im Geist - Fördert mentale Klarheit und Fokus",
      schutz_vor_gefahren: "Schutz vor Gefahren - Hilft bei Sicherheit und Abwehr negativer Energien",
      emotionale_tiefe: "Emotionale Tiefe - Fördert Verständnis und Mitgefühl",
      selbstvertrauen_staerken: "Selbstvertrauen - Stärkt Selbstbewusstsein und innere Kraft"
    },
    category: "Kategorie",
    available_slots: "Verfügbare Stück",
    healing: "Heilwirkungen",
    contact_form_title: "Kontaktformular"
  },
};

export default function ProductDetail() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [language, setLanguage] = useState("de");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);  // Neu: Wie in Stone.jsx
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [thumbnails, setThumbnails] = useState([]);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prev) => (prev + 1) % allMedia.length),
    onSwipedRight: () => setCurrentIndex((prev) => (prev - 1 + allMedia.length) % allMedia.length),
    trackMouse: false,
  });

  const t = translations[language] || translations.de;  // Fallback zu DE

  const allMedia = useMemo(() => product ? [product.image_url, ...(product.gallery_images || [])].filter(Boolean) : [], [product]);

  useEffect(() => {
    const handleLanguageChange = (event) => {
      setLanguage(event.detail);
    };
    const storedLang = localStorage.getItem('language') || 'de';
    setLanguage(storedLang);
    window.addEventListener('languageChange', handleLanguageChange);
    if (slug) {
      loadProductBySlug(slug);
    } else {
      navigate(createPageUrl("Shop"));
    }
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, [navigate, slug]);

  const loadProductBySlug = async (slug) => {
    try {
      const productData = Product.find(s => s.slug === slug);
      if (productData) {
        setProduct(productData);
        generateThumbnails(productData);
      } else {
        navigate(createPageUrl("Shop"));
      }
    } catch (error) {
      console.error('Error loading product:', error);
      navigate(createPageUrl("Shop"));
    } finally {
      setLoading(false);
    }
  };

  const generateThumbnails = (productData) => {
    const allMedia = [productData.image_url, ...(productData.gallery_images || [])].filter(Boolean);
    const thumbs = allMedia.map((media) => {
      if (media.endsWith('.mp4')) {
        const video = document.createElement('video');
        video.src = media;
        video.muted = true;
        video.preload = 'metadata';
        video.onloadeddata = () => {
          video.currentTime = 0;
        };
        video.onseeked = () => {
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
          const thumbUrl = canvas.toDataURL('image/png');
          setThumbnails((prev) => {
            const newThumbs = [...prev];
            newThumbs[allMedia.indexOf(media)] = thumbUrl;
            return newThumbs;
          });
        };
        return productData.image_url;
      }
      return media;
    });
    setThumbnails(thumbs);
  };

  useEffect(() => {
    const preloadMedia = () => {
      allMedia.forEach((media) => {
        if (media.endsWith('.mp4')) {
          const video = document.createElement('video');
          video.src = media;
          video.preload = 'auto';
          video.style.display = 'none';
          document.body.appendChild(video);
          video.onloadeddata = () => document.body.removeChild(video);
        } else {
          const img = new Image();
          img.src = media;
        }
      });
    };
    if (product && allMedia.length > 0) {
      preloadMedia();
    }
  }, [product, allMedia]);

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Anfrage zu ${product.name}`);
    const body = encodeURIComponent(
      `Name: ${inquiryForm.full_name}\nE-Mail: ${inquiryForm.email}\nTelefon: ${inquiryForm.phone}\n\n${inquiryForm.message}`
    );
    window.location.href = `mailto:noblecutgems_official@gmx.de?subject=${subject}&body=${body}`;
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setInquiryForm({ full_name: "", email: "", phone: "", message: "" });
    }, 2000);
  };

  const handleShare = async () => {
    const shareData = {
      title: product.name,
      text: `Schauen Sie sich dieses wundervolle Produkt an!`,
      url: window.location.href
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert('Link kopiert!');
      }
    } catch (error) {
      console.error('Fehler beim Teilen:', error);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getRarityColor = (rarity_level) => {
    const colors = {
      exceptional: "bg-purple-700/80 text-white border border-purple-600",
      rare: "bg-amber-600/80 text-white border border-amber-500",
      premium: "bg-blue-700/80 text-white border border-blue-600",
      select: "bg-green-600/80 text-white border border-green-500"
    };
    return colors[rarity_level] || colors.select;
  };

  const getTranslatedType = (type) => {
    return t[type] || type;
  };

  const getTranslatedCut = (cut) => {
    return t.cuts?.[cut?.toLowerCase()] || cut || 'N/A';
  };

  const getTranslatedOrigin = (origin) => {
    return t.origins?.[origin?.toLowerCase()] || origin || 'N/A';
  };

  const getTranslatedColor = (color) => {
    return t.colors?.[color?.toLowerCase()] || color || 'N/A';
  };

  const getTranslatedCertification = (cert) => {
    return t.certifications?.[cert?.toLowerCase()] || cert || t.certifications.none;
  };

  const getTranslatedProductName = (id) => {
    return t.stone_names?.[id] || product.name;
  };

  const getTranslatedTreatment = (treatment) => {
    return t.treatments?.[treatment?.toLowerCase()] || treatment || t.treatments.none;
  };

  const getTranslatedRarity = (rarity) => {
    return t.rarity_levels?.[rarity?.toLowerCase()] || rarity;
  };

  const getTranslatedRarityDescription = (rarity) => {
    return t.rarity_descriptions?.[rarity?.toLowerCase()] || rarity;
  };

  const getTranslatedClarityDescription = (clarity) => {
    return t.clarities?.[clarity?.toLowerCase()] || clarity;
  };

  const getTranslatedHealingDescription = (healing) => {
    return t.healing_properties?.[healing?.toLowerCase().replace(/\s+/g, '_')] || healing;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-indigo-30 text-indigo-900">
        {t.loading}
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-indigo-30 text-indigo-900">
        {t.stone_not_found}
      </div>
    );
  }

  return (
    <div {...handlers} className="min-h-screen bg-gray-40 text-indigo-300 max-w-7xl mx-auto p-4 md:p-8">
      <HelmetProvider>
        <Helmet>
          <title>{product.name} | Ursula Heinke</title>
          <meta name="description" content={product.description} />
        </Helmet>
      </HelmetProvider>

      <Button
        variant="ghost"
        className="mb-4 flex items-center bg-gradient-to-r from-indigo-500 to-blue-500 hover:text-blue-800 font-headline text-l md:text-l"
        onClick={() => navigate(createPageUrl("Shop"))}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        {t.back_to_collection}
      </Button>

      {/* Media + Produktinfos */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Linke Spalte: Media + Lexikon */}
        <div className="space-y-4 w-full max-w-md mx-auto lg:max-w-lg">
          <div
            {...handlers}
            className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden group touch-pan-x media-container"
          >
            {allMedia[currentIndex].endsWith('.mp4') ? (
              <video
                key={currentIndex}
                src={allMedia[currentIndex]}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata" // spart Bandbreite
                poster={thumbnails[currentIndex]}
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                key={currentIndex}
                src={allMedia[currentIndex]}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            )}

            {/* Overlay bei Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10"></div>

            {/* Navigation Arrows */}
            {allMedia.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setCurrentIndex((prev) => (prev - 1 + allMedia.length) % allMedia.length)
                  }
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentIndex((prev) => (prev + 1) % allMedia.length)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {allMedia.length > 1 && (
            <div className="flex gap-2 overflow-x-auto mt-4 pb-2">
              {thumbnails.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentIndex ? "border-gold-accent" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={thumb}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Lexikon-Bereich */}
          <div className="mt-8">
            {/* Heilstein-Lexikon nur wenn Gemstone */}
            {product.isGemstone && (
              <>
                <h3 className="font-section text-2xl mb-4 font-bold text-white-900 flex items-center gap-2">
                  <Info className="w-5 h-5" style={{ color: "var(--primary-color)" }} />
                  {t.lexicon_title}
                </h3>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="clarity">
                    <AccordionTrigger className="font-section text-2xl mb-4">
                      {t.lexicon_clarity_title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="font-body text-base text-white-700 mb-2 font-semibold">
                        {t.lexicon_clarity_desc}
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-sm font-body text-base text-white-700 font-semibold">
                        {Object.entries(t.clarities).map(([key, value]) => {
                          const [title, desc] = value.split(" - ");
                          return (
                            <li key={key}>
                              <span className="font-bold">{title}</span> - {desc}
                            </li>
                          );
                        })}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="rarity">
                    <AccordionTrigger className="font-section text-2xl mb-4">
                      {t.lexicon_rarity_title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="font-body text-base text-white-700 mb-2 font-semibold">
                        {t.lexicon_rarity_desc}
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-sm font-body text-base text-white-700 font-semibold">
                        {Object.entries(t.rarity_descriptions).map(([key, value]) => {
                          const [title, desc] = value.split(" - ");
                          const colorClasses = {
                            exceptional: "text-purple-700",
                            rare: "text-amber-600",
                            premium: "text-blue-700",
                            select: "text-green-600",
                          };
                          return (
                            <li key={key} className="font-body text-base text-white-700">
                              <span
                                className={`font-semibold ${colorClasses[key] || "text-white"}`}
                              >
                                {title}
                              </span>{" "}
                              - {desc}
                            </li>
                          );
                        })}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </>
            )}

            {/* Heilwirkungs-Lexikon: immer sichtbar, egal ob Gemstone oder nicht */}
            <h3 className="font-section text-2xl mb-4 font-bold text-white-900 flex items-center gap-2 mt-6">
              <Info className="w-5 h-5" style={{ color: "var(--primary-color)" }} />
              {t.lexicon_healing_title1}
            </h3>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="healing-lexicon">
                <AccordionTrigger className="font-section text-2xl mb-4">
                  {t.lexicon_healing_title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="font-body text-base text-white-700 mb-2 font-semibold">
                    {t.lexicon_healing_desc}
                  </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm font-body text-base text-white-700 font-semibold">
                      {product.healing_properties &&
                        product.healing_properties.map((prop) => {
                          // Wir suchen den Key in healing_properties1, dessen Titel (vor dem " - ") exakt mit prop übereinstimmt
                          const matchingEntry = Object.entries(t.healing_properties1).find(
                            ([key, value]) => value.split(" - ")[0] === prop
                          );

                          if (!matchingEntry) return null; // kein passender Eintrag
                          const [key, value] = matchingEntry;
                          const [title, desc] = value.split(" - ");
                          return (
                            <li key={key}>
                              <span className="font-bold">{title}</span> - {desc}
                            </li>
                          );
                        })}
                    </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Rechte Spalte: Produktinfo + Specs + Healing + Kontaktformular */}
        <div className="space-y-8">
          <div>
            {product.isGemstone && (
              <Badge
                className={`${getRarityColor(product.rarity_level)} border mb-3 px-3 py-1 rounded-full font-headline text-2xl md:text-1xl`}
              >
                {getTranslatedRarity(product.rarity_level)}
              </Badge>
            )}
            <div className="flex items-start justify-between mb-4">
              <h1 className="font-headline text-2xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent"> {/* 1-2 Nummern kleiner als vorher */}
                {getTranslatedProductName(product.id)}
              </h1>
              <Button variant="outline" className="rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-500 hover:to-blue-400 shadow-md font-accent text-2xl text-whhite-400" size="icon" onClick={handleShare}>
                <Share2 className="w-4 h-4" />
              </Button>
            </div>

            {product.isGemstone ? (
            <p className="font-body text-base text-white-700 mb-6 bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
              {getTranslatedType(product.type)} • {product.carat_weight}ct • {getTranslatedCut(product.cut)} • {getTranslatedOrigin(product.origin)} • {getTranslatedTreatment(product.treatment)} • {product.clarity || "N/A"}
            </p>
            ) : (
            <p className="font-body text-base text-white-700 mb-6 bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
              {product.healing_property} • {product.energy} • {product.focus}
            </p>
            )}
            <div className="font-headline text-4xl md:text-5xl font-bold text-white-900 mb-6"> {/* Schriftart wie Badge und Button (Headline) */}
              {product.price}€ {/* Preis nun statisch 850€ */}
            </div>
            <div dangerouslySetInnerHTML={{ __html: product.description }} className="font-body text-base text-white-700 leading-relaxed mb-8" />
            <p className="font-body text-xs text-gray-500 italic mb-6">
              Hinweis: Die beschriebenen Heilwirkungen sind wissenschaftlich nicht erwiesen 
              und stellen keinen Ersatz für ärztliche Beratung, Diagnose oder Behandlung dar.
            </p>

            {/* Specs Section */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="font-section text-2xl mb-4 font-bold text-white-900 mt-6 flex items-center gap-2 pl-2">
                  <Sparkles className="w-5 h-5" style={{ color: "white" }} />
                  {t.specifications}
                </h3>
                {product.isGemstone ? (
                <div className="grid grid-cols-2 gap-5 text-s">
                  {product.carat_weight && (
                    <div className="pb-3 pl-1">
                      <dt className="font-semi font-body text-base text-white-700 mb-1 pl-5">{t.carat_weight}</dt>
                      <dd className="font-body text-base text-white-700 font-bold border-b border-white-100 w-auto mx-5 pb-3">
                        {product.carat_weight}ct
                      </dd>
                    </div>
                  )}
                  {product.color && (
                    <div className="pb-3 pl-1">
                      <dt className="font-semi font-body text-base text-white-700 mb-1 pl-5">{t.color}</dt>
                      <dd className="font-body text-base text-white-700 font-bold border-b border-white-100 w-auto mx-5 pb-3">
                        {getTranslatedColor(product.color)}
                      </dd>
                    </div>
                  )}
                  {product.clarity && (
                    <div className="pb-3 pl-1">
                      <dt className="font-semi font-body text-base text-white-700 mb-1 pl-5">{t.clarity}</dt>
                      <dd className="font-body text-base text-white-700 font-bold border-b border-white-100 w-auto mx-5 pb-3">
                        {getTranslatedClarityDescription(product.clarity)}
                      </dd>
                    </div>
                  )}
                  {product.cut && (
                    <div className="pb-3 pl-1">
                      <dt className="font-semi font-body text-base text-white-700 mb-1 pl-5">{t.cut}</dt>
                      <dd className="font-body text-base text-white-700 font-bold border-b border-white-100 w-auto mx-5 pb-3">
                        {getTranslatedCut(product.cut)}
                      </dd>
                    </div>
                  )}
                  {product.origin && (
                    <div className="pb-3 pl-1">
                      <dt className="font-semi font-body text-base text-white-700 mb-1 pl-5">{t.origin}</dt>
                      <dd className="font-body text-base text-white-700 font-bold border-b border-white-100 w-auto mx-5 pb-3">
                        {getTranslatedOrigin(product.origin)}
                      </dd>
                    </div>
                  )}
                  <div className="pb-3 pl-1">
                    <dt className="font-semi font-body text-base text-white-700 mb-1 pl-5">{t.treatment}</dt>
                    <dd className="font-body text-base text-white-700 font-bold border-b border-white-100 w-auto mx-5 pb-3">
                      {getTranslatedTreatment(product.treatment)}
                    </dd>
                  </div>
                  {product.rarity_level && (
                    <div className="pb-3 pl-1">
                      <dt className="font-semi font-body text-base text-white-700 mb-1 pl-5">{t.rarity}</dt>
                      <dd className="font-body text-base text-white-700 font-bold border-b border-white-100 w-auto mx-5 pb-3">
                        {getTranslatedRarityDescription(product.rarity_level)}
                      </dd>
                    </div>
                  )}
                  <div className="pb-3 pl-1">
                    <dt className="font-semi font-body text-base text-white-700 mb-1 pl-5">{t.certification}</dt>
                    <dd className="font-body text-base text-white-700 font-bold border-b border-white-100 w-auto mx-5 pb-3">
                      {getTranslatedCertification(product.certification)}
                    </dd>
                  </div>
                  <div className="pb-3 pl-1">
                    <dt className="font-semi font-body text-base text-white-700 mb-1 pl-5">{t.price_per_carat}</dt>
                    <dd className="font-body text-base text-white-700 font-bold border-b border-white-100 w-auto mx-5 pb-3">
                      {formatPrice(product.price / product.carat_weight)} / ct
                    </dd>
                  </div>
                </div>
                ) : (
                <>
                <div className="grid grid-cols-2 gap-5 text-s">
                  {product.material && (
                    <div className="pb-3 pl-1">
                      <dt className="font-semi font-body text-base text-white-700 mb-1 pl-5">{t.material}</dt>
                      <dd className="font-body text-base text-white-700 font-bold border-b border-white-100 w-auto mx-5 pb-3">
                        {product.material}
                      </dd>
                    </div>
                  )}

                  {product.gewicht && (
                    <div className="pb-3 pl-1">
                      <dt className="font-semi font-body text-base text-white-700 mb-1 pl-5">{t.gewicht}</dt>
                      <dd className="font-body text-base text-white-700 font-bold border-b border-white-100 w-auto mx-5 pb-3">
                        {product.gewicht}
                      </dd>
                    </div>
                  )}

                  {product.maße && (
                    <div className="pb-3 pl-1">
                      <dt className="font-semi font-body text-base text-white-700 mb-1 pl-5">{t.maße}</dt>
                      <dd className="font-body text-base text-white-700 font-bold border-b border-white-100 w-auto mx-5 pb-3">
                        {product.maße}
                      </dd>
                    </div>
                  )}

                  {product.schutzwirkung && (
                    <div className="pb-3 pl-1">
                      <dt className="font-semi font-body text-base text-white-700 mb-1 pl-5">{t.schutzwirkung}</dt>
                      <dd className="font-body text-base text-white-700 font-bold border-b border-white-100 w-auto mx-5 pb-3">
                        {product.schutzwirkung.join(", ")}
                      </dd>
                    </div>
                  )}

                  {product.symbolik && (
                    <div className="pb-3 pl-1">
                      <dt className="font-semi font-body text-base text-white-700 mb-1 pl-5">{t.symbolik}</dt>
                      <dd className="font-body text-base text-white-700 font-bold border-b border-white-100 w-auto mx-5 pb-3">
                        {product.symbolik}
                      </dd>
                    </div>
                  )}
                </div>
                </>
                )}
                {/* Healing Section */}
                <h3 className="font-section text-2xl mb-4 font-bold text-white-900 mt-8 flex items-center gap-2 pl-2">
                  <Sparkles className="w-5 h-5" style={{ color: "white" }} />
                  {t.healing}
                </h3>
                <div className="grid grid-cols-2 gap-4 text-s font-semibold">
                  {product.healing_properties &&
                    product.healing_properties.map((prop, index) => {
                      const isLastTwo = index >= product.healing_properties.length - 2; // letzte 2 Elemente
                      return (
                        <div key={index} className="pb-3 pl-1">
                          <dd className="font-body text-base text-white-700 font-semi border-b border-white-100 w-auto mx-5 pb-3" 
                              style={{ borderBottomWidth: isLastTwo ? 0 : '1px' }}>
                            {getTranslatedHealingDescription(prop)}
                          </dd>
                        </div>
                      );
                    })}
                </div>
              </CardContent>
            </Card>

            {/* Kontaktformular */}
            <Dialog open={handleInquirySubmit} onOpenChange={handleInquirySubmit}>
              <DialogContent className="sm:max-w-md rounded-2x2 p-6 shadow-xl">
                <DialogHeader className="mt-16 mb-8text-center">
                  <div className="font-section text-2xl mb-4 text-3xl font-extrabold font-serif text-white-900 mt-20">
                    {t.contact_form_title}
                  </div>
                </DialogHeader>

                {inquirySent ? (
                  <p className="font-body text-base text-white-700 text-green-600 text-center font-medium py-4">
                    {t.inquiry_success}
                  </p>
                ) : (
                  <form
                    onSubmit={handleInquirySubmit}
                    className="space-y-5 mt-2"
                  >
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="full_name" className="font-body text-base text-white-700 font-medium">
                        {t.full_name}
                      </Label>
                      <Input
                        id="full_name"
                        value={inquiryForm.full_name}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, full_name: e.target.value })}
                        required
                        className="rounded-lg border-gray-300 focus:border-indigo-400 focus:ring-indigo-400"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-body text-base text-white-700 font-medium">
                        {t.email}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                        required
                        className="rounded-lg border-white-300 focus:border-indigo-400 focus:ring-indigo-400"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-body text-base text-white-700 font-medium">
                        {t.phone}
                      </Label>
                      <Input
                        id="phone"
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                        className="rounded-lg border-gray-300 focus:border-indigo-400 focus:ring-indigo-400"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-body text-base text-white-700 font-medium">
                        {t.message}
                      </Label>
                      <Textarea
                        id="message"
                        value={inquiryForm.message}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                        required
                        className="rounded-lg border-gray-300 focus:border-indigo-400 focus:ring-indigo-400 min-h-[120px]"
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="w-full rounded-xl py-3 text-white font-medium shadow-md transition bg-gradient-to-r from-indigo-400 to-blue-500 hover:from-indigo-500 hover:to-blue-600 font-headline text-l md:text-l"
                    >
                      {t.send_inquiry}
                    </Button>
                  </form>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
