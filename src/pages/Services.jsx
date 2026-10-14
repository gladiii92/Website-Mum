import React, { useState, useEffect, useRef } from "react";
import { ServiceData, Types } from "../entities/Service"; // Importiere ServiceData (das Array) und Types
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import Tabs, { TabsList, TabsTrigger } from "../components/ui/Tabs";
import { Heart, Clock, Users, Star, ArrowRight, CheckCircle, MessageCircle, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Head from "next/head"; // Neu: Import für SEO
import Link from "next/link";
import { createPageUrl, formatPrice } from "../utils"; // Relativer Pfad
import { useReducedMotion } from "framer-motion";

export default function Services() {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeType, setActiveType] = useState("all");

  // Neu: Ref für den Services-Container zum automatischen Scrollen
  const servicesRef = useRef(null);

  const shouldReduceMotion = useReducedMotion();
  const isMobile = (typeof window !== 'undefined' ? window.innerWidth : 1024) < 768; // Beispiel: Mobile < md
  const shouldAnimate = !isMobile && !shouldReduceMotion;
  
  useEffect(() => {
    loadServices();
  }, []);

  useEffect(() => {
    filterServices();
  }, [services, activeType]);

  const loadServices = () => {
    // Statische Ladung (kein async, da Mock-Array) – genau wie in Shop.jsx
    const allServices = ServiceData; // Direkter Zugriff auf das Array aus Service.jsx
    setServices(allServices);
    setLoading(false);
  };

  const filterServices = () => {
    let filtered = services;
    if (activeType !== "all") {
      filtered = filtered.filter(s => s.type === activeType);
    }
    // Sortiere nach Beliebtheit (z.B. featured zuerst) für bessere Verkaufspsychologie
    filtered = filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    setFilteredServices(filtered);
  };

  // Neu: Funktion für Kategorie-Wechsel mit smooth Scroll zum Services-Bereich
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

  const typeIcons = {
    readings: Heart,
    ausbildung: Award,
    workshop: Star,
    gruppenkurs: Users
  };

  // Kategorie-Previews: Nun basierend auf dem neuen Types-Array (separate Vorschaubilder)
  const typePreviews = Types.map(type => ({
    type: type.name,
    count: services.filter(s => s.type === type.name).length,
    teaserImage: type.preview_image_url,
    teaserName: type.display_name, // Oder ein Teaser-Name, falls gewünscht
    description: type.description // Neu: Beschreibung hinzugefügt
  }));

  if (loading) {
    return (
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl h-96 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Neu: React Helmet für SEO */}
      <Head>
        <title>Ursula Heinke - Coaching & Kurse</title>
        <meta name="description" content="Entdecken Sie transformative Coaching-Programme, Workshops und Online-Kurse für persönliches Wachstum und spirituelle Entwicklung." />
        <meta name="keywords" content="Coaching, Kurse, Workshops, spirituelle Entwicklung, Einzelcoaching" />
        <meta property="og:title" content="Ursula Heinke - Coaching & Kurse" />
        <meta property="og:description" content="Individuelle Begleitung für Deine persönliche Transformation." />
        <meta property="og:image" content="https://www.ursulaheinke.de/images/Kurse/ogbild.webp" /> {/* Passe Bild an */}
        <meta property="og:url" content="https://www.ursulaheinke.de/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.ursulaheinke.de/services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Spirituelles Coaching",
            "provider": {
              "@type": "Person",
              "name": "Ursula Heinke"
            }
          })}
        </script>
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

          {/* Suchfeld entfernt; nur Tabs für sekundäre Navigation */}
          <div className="flex justify-center mb-8">
            <Tabs
              value={activeType}
              onValueChange={handleTypeChange}
              className="bg-slate-900/30 p-1 rounded-full border border-blue-400/10 overflow-x-auto"
            >
              <TabsList className="flex-nowrap">
                {Object.keys(typeLabels).map(type => (
                  <TabsTrigger
                    key={type}
                    value={type}
                    className="font-headline text-sm font-medium text-indigo-300 px-4 py-2 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-300 data-[state=active]:to-blue-300 data-[state=active]:text-slate-950 hover:text-white transition-all whitespace-nowrap"
                  >
                    {typeLabels[type]}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
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
                  const TypeIcon = typeIcons[service.type] || Heart;
                  
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
                          {service.featured && (
                            <div className="absolute top-3 right-3">
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-200 border border-amber-400/30 backdrop-blur-md">
                                Empfehlung
                              </span>
                            </div>
                          )}
                        </div>
                        
                        <div className="p-6 sm:p-7 flex-1 flex flex-col items-center justify-between text-center">
                          <div className="w-full flex flex-col items-center">
                            <h3 className="font-headline text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300 min-h-[3.5rem] flex items-center justify-center text-center leading-snug">
                              {service.title}
                            </h3>

                            <div className="my-2 text-center">
                              <span className="font-headline text-3xl font-bold tracking-tight text-white block">
                                {formatPrice(service.price)}
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
                                `Hallo Ursula, ich habe dein Angebot "${service.title}" (${formatPrice(service.price)}) auf deiner Webseite gesehen und möchte gerne einen Termin bzw. Platz buchen.`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full inline-block"
                            >
                              <Button 
                                aria-label={`Termin anfragen für: ${service.title}`}
                                className="font-headline font-semibold text-sm bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-indigo-600/90 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500 text-white border border-indigo-400/30 hover:border-indigo-300/50 rounded-full w-full py-3 shadow-md shadow-indigo-950/40 hover:shadow-indigo-900/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                              >
                                <MessageCircle className="w-4 h-4 text-emerald-300 group-hover/btn:scale-110 transition-transform duration-300" />
                                <span>Termin per WhatsApp anfragen</span>
                              </Button>
                            </a>
                            <p className="text-[11px] text-center text-indigo-300/60 font-body">
                              Verbindliche Terminanfrage • Keine kostenlose Beratung im Chat
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
