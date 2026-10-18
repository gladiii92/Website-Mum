import React, { useState, useMemo, useRef } from "react";
import { ServiceData, Types } from "../entities/Service";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Heart, Clock, Users, Star, ArrowRight, CheckCircle, MessageCircle, Award, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { createPageUrl, formatPrice } from "../utils";
import { useReducedMotion } from "framer-motion";

export default function Services() {
  const [services] = useState(ServiceData);
  const [activeType, setActiveType] = useState("all");
  const servicesRef = useRef(null);

  const shouldReduceMotion = useReducedMotion();
  const isMobile = (typeof window !== 'undefined' ? window.innerWidth : 1024) < 768;
  const shouldAnimate = !isMobile && !shouldReduceMotion;

  const filteredServices = useMemo(() => {
    let list = activeType === "all" ? services : services.filter(s => s.type === activeType);
    return [...list].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }, [services, activeType]);

  const handleTypeChange = (type) => {
    setActiveType(type);
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const typeLabels = {
    all: "Alle Angebote",
    readings: "Readings & Beratung",
    ausbildung: "Zertifizierte Ausbildung",
    workshop: "Workshops & Retreats",
    gruppenkurs: "Gruppenkurse & Waldbaden"
  };

  const typePreviews = Types.map(type => ({
    type: type.name,
    count: services.filter(s => s.type === type.name).length,
    teaserImage: type.preview_image_url,
    teaserName: type.display_name,
    description: type.description
  }));

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Lebensberatung & Spirituelles Coaching Ursula Heinke",
    "serviceType": "Spirituelle Lebensberatung, Tarot & Lenormand Gedankenlegung",
    "provider": {
      "@type": "Person",
      "name": "Ursula Heinke",
      "url": "https://www.ursulaheinke.de"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Beratungs- & Coaching-Angebote",
      "itemListElement": ServiceData.map((s) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.description
        },
        "price": s.price,
        "priceCurrency": "EUR"
      }))
    }
  };

  return (
    <>
      <Head>
        <title>Coaching & Kurse | Ursula Heinke – Lebensberatung & Mentoring</title>
        <meta name="description" content="Entdecke transformative Beratungen: Kostenloser 3-Fragen Herzenspartner-Check, Seelen-Klarheits-Kompass (149 €), VIP-Begleitung und zertifizierte Ausbildung." />
        <meta name="keywords" content="Coaching Coburg, Seelen-Klarheits-Kompass, Gedankenlegung Herzenspartner, Ausbildung Kartenlegerin, Lebensberatung Ursula Heinke" />
        <meta property="og:title" content="Coaching & Kurse | Ursula Heinke" />
        <meta property="og:description" content="Klarheit für deine Liebe, Seelenpartner & Lebensweg. Authentische Beratung mit 25+ Jahren Erfahrung." />
        <meta property="og:image" content="https://www.ursulaheinke.de/images/Kurse/ogbild.webp" />
        <meta property="og:url" content="https://www.ursulaheinke.de/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.ursulaheinke.de/services" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
      </Head>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={shouldAnimate ? { opacity: 0, y: 20 } : {}}
            whileInView={shouldAnimate ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent">
                Coaching & Kurse
              </span>
            </h2>
            <p className="font-body text-base md:text-lg text-indigo-200 max-w-2xl mx-auto mb-4">
              Transformative Begleitung für Deine persönliche Entwicklung. Finde den Weg zu Deinem authentischen Selbst und innerer Balance.
            </p>
          </motion.div>

          {/* Kategorie-Vorschau-Karten: Ruhiges, zentriertes High-End Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
            {typePreviews.map((preview, index) => {
              return (
                <motion.div
                  key={preview.type}
                  initial={shouldAnimate ? { opacity: 0, y: 20 } : {}}
                  whileInView={shouldAnimate ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => handleTypeChange(preview.type)}
                  className="cursor-pointer h-full flex flex-col"
                >
                  <Card className="group h-full flex flex-col bg-slate-900/40 border border-blue-400/15 shadow-lg hover:shadow-blue-500/10 transition-all duration-500 rounded-2xl mystical-glow overflow-hidden hover:border-blue-400/35">
                    <div className="relative h-48 shrink-0 overflow-hidden">
                      <img
                        src={preview.teaserImage || ''}
                        alt={`${typeLabels[preview.type]} - Vorschau`}
                        title={typeLabels[preview.type]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                      <div className="absolute top-3 right-3">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 text-indigo-200 border border-indigo-400/30 backdrop-blur-md">
                          {preview.count} {preview.count === 1 ? 'Angebot' : 'Angebote'}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7 flex-1 flex flex-col items-center justify-between text-center">
                      <div className="w-full flex flex-col items-center">
                        <h3 className="font-headline text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300 text-center leading-snug min-h-[3rem] flex items-center justify-center">
                          {typeLabels[preview.type]}
                        </h3>

                        <div className="w-12 h-0.5 bg-indigo-400/20 mx-auto my-3 rounded-full"></div>

                        <p className="font-body text-sm text-indigo-200/90 leading-relaxed mb-4 text-center px-1">
                          {preview.description}
                        </p>
                      </div>

                      <div className="w-full mt-auto pt-2">
                        <Button 
                          aria-label={`Angebote für ${typeLabels[preview.type]} ansehen`}
                          className="font-headline font-semibold text-sm bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-indigo-600/90 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500 text-white border border-indigo-400/30 hover:border-indigo-300/50 rounded-full w-full py-2.5 shadow-md shadow-indigo-950/40 hover:shadow-indigo-900/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                        >
                          <span>Angebote entdecken</span>
                          <ArrowRight className="w-4 h-4 text-indigo-200 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Filter-Pills für Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-900/60 p-1.5 rounded-full border border-blue-400/20 overflow-x-auto flex flex-nowrap gap-1.5 max-w-full">
              {Object.keys(typeLabels).map((type) => {
                const isActive = activeType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleTypeChange(type)}
                    className={`font-headline text-sm font-semibold px-5 py-2 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-600 text-white shadow-md shadow-indigo-950/50 border border-indigo-300/40"
                        : "text-indigo-200 hover:text-white hover:bg-white/10 border border-transparent"
                    }`}
                  >
                    {typeLabels[type]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Services-Container mit Ref für Scroll */}
          <div ref={servicesRef}>
            {/* Neu: Immer sichtbar – Visueller Trenner und dynamische Anzahl der Angebote */}
            <div className="border-t border-blue-400/20 my-6"></div>
            <p className="font-body text-base text-center text-indigo-200 font-semibold mb-6">
              {filteredServices.length} Angebote in dieser Kategorie
            </p>
            <div className="border-t border-blue-400/20 my-6"></div>

            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
                {filteredServices.map((service, index) => {
                  return (
                    <motion.div
                      key={service.id || index}
                      initial={shouldAnimate ? { opacity: 0, y: 30 } : {}}
                      whileInView={shouldAnimate ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="h-full flex flex-col"
                    >
                      <Card className="group h-full flex flex-col bg-slate-900/40 border border-blue-400/15 shadow-lg hover:shadow-blue-500/10 transition-all duration-500 rounded-2xl mystical-glow overflow-hidden hover:border-blue-400/35">
                        <div className="relative h-52 shrink-0 overflow-hidden">
                          <img 
                            src={service.image_url || ''}
                            alt={`${service.title} - ${service.description.slice(0, 100)}`}
                            title={`${service.title}: ${service.description.slice(0, 100)}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                          <div className="absolute top-3 left-3">
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 text-indigo-200 border border-indigo-400/30 backdrop-blur-md">
                              {typeLabels[service.type]}
                            </span>
                          </div>
                          {service.price === 0 ? (
                            <div className="absolute top-3 right-3">
                              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/25 text-emerald-200 border border-emerald-400/40 backdrop-blur-md shadow-sm">
                                100% Kostenfrei
                              </span>
                            </div>
                          ) : service.price === 19 ? (
                            <div className="absolute top-3 right-3">
                              <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 backdrop-blur-md">
                                Express Audio
                              </span>
                            </div>
                          ) : service.price === 149 ? (
                            <div className="absolute top-3 right-3">
                              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/25 text-amber-200 border border-amber-400/40 backdrop-blur-md shadow-sm">
                                Bestseller / Meistgebucht
                              </span>
                            </div>
                          ) : service.price === 390 ? (
                            <div className="absolute top-3 right-3">
                              <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/25 text-purple-200 border border-purple-400/40 backdrop-blur-md">
                                VIP Begleitung
                              </span>
                            </div>
                          ) : service.price >= 2000 ? (
                            <div className="absolute top-3 right-3">
                              <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/25 text-purple-200 border border-purple-400/40 backdrop-blur-md">
                                Exklusives Mentoring
                              </span>
                            </div>
                          ) : service.featured ? (
                            <div className="absolute top-3 right-3">
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 backdrop-blur-md">
                                Empfehlung
                              </span>
                            </div>
                          ) : null}
                        </div>
                        
                        <div className="p-6 sm:p-7 flex-1 flex flex-col items-center justify-between text-center">
                          <div className="w-full flex flex-col items-center">
                            <h3 className="font-headline text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300 min-h-[3.5rem] flex items-center justify-center text-center leading-snug">
                              {service.title}
                            </h3>

                            <div className="my-2 text-center">
                              <span className="font-headline text-3xl font-bold tracking-tight text-white block">
                                {service.price === 0 ? "0 € (Kostenlos)" : formatPrice(service.price)}
                              </span>
                              {service.duration && (
                                <span className="text-xs uppercase tracking-wider text-indigo-300/80 mt-1 block">
                                  {service.duration}
                                </span>
                              )}
                            </div>

                            <div className="w-12 h-0.5 bg-indigo-400/20 mx-auto my-3 rounded-full"></div>

                            <p className="font-body text-sm text-indigo-200/90 leading-relaxed mb-4 min-h-[4.5rem] text-center px-1">
                              {service.description}
                            </p>
                            
                            {service.benefits && service.benefits.length > 0 && (
                              <div className="w-full mb-5 p-4 rounded-xl bg-slate-900/60 border border-indigo-400/15 text-center">
                                <p className="text-[11px] font-semibold uppercase tracking-widest text-indigo-300/90 mb-2">
                                  Im Angebot enthalten
                                </p>
                                <ul className="text-xs text-indigo-100/90 space-y-1.5">
                                  {service.benefits.slice(0, 3).map((benefit, i) => (
                                    <li key={i} className="text-center leading-relaxed">
                                      {benefit}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                          
                          <div className="w-full mt-auto pt-4 border-t border-blue-400/10 flex flex-col gap-2">
                            <a
                              href={`https://wa.me/4915901276286?text=${encodeURIComponent(
                                service.price === 0
                                  ? `Hallo Ursula, ich habe dein Angebot "3-Fragen Herzenspartner-Check (Kostenlos)" auf deiner Webseite gesehen und möchte gerne meine 3 Fragen per WhatsApp für eine Einschätzung stellen.`
                                  : service.price === 19
                                  ? `Hallo Ursula, ich möchte den Express 1-Karten-Audio-Impuls (19 €) buchen. Meine konkrete Frage an die Karten lautet: `
                                  : `Hallo Ursula, ich habe dein Angebot "${service.title}" (${formatPrice(service.price)}) auf deiner Webseite gesehen und möchte gerne einen Termin bzw. Platz buchen.`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Anfrage für: ${service.title}`}
                              className={`font-headline font-semibold text-sm ${
                                service.price === 0
                                  ? "bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:via-teal-500 hover:to-emerald-500 text-white shadow-emerald-950/40"
                                  : service.price === 19
                                  ? "bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 hover:from-cyan-500 hover:via-blue-500 hover:to-cyan-500 text-white shadow-cyan-950/40"
                                  : "bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-indigo-600/90 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500 text-white shadow-indigo-950/40"
                              } border border-indigo-400/30 hover:border-indigo-300/50 rounded-full w-full py-3 shadow-md hover:shadow-indigo-900/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
                            >
                              <MessageCircle className="w-4 h-4 text-emerald-300 group-hover/btn:scale-110 transition-transform duration-300" />
                              <span>
                                {service.price === 0
                                  ? "Kostenlosen Check anfragen"
                                  : service.price === 19
                                  ? "Express-Impuls buchen (19 €)"
                                  : "Termin per WhatsApp anfragen"}
                              </span>
                            </a>
                            <p className="text-[11px] text-center text-indigo-300/60 font-body">
                              {service.price === 0
                                ? "100% unverbindlich • Persönliche Sprachnachricht von Ursula"
                                : service.price === 19
                                ? "Deutung innerhalb 12–24h direkt per WhatsApp Sprachnachricht"
                                : "Verbindliche Terminanfrage • Keine kostenlose Beratung im Chat"}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <Heart className="w-16 h-16 text-indigo-300 mx-auto mb-4" />
                <Button 
                  variant="outline" 
                  className="font-headline text-base mt-4 px-6 py-2.5 text-blue-200 border-blue-400/50 hover:bg-blue-400/10 rounded-full"
                  onClick={() => handleTypeChange("all")}
                >
                  Alle Angebote ansehen
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
