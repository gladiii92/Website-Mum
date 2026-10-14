import React, { useState, useEffect } from "react";
import { ServiceData } from "../../entities/Service"; // Relativer Pfad – geändert zu ServiceData
import Link from "next/link";
import { createPageUrl, formatPrice } from "../../utils";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Heart, Clock, Users, ArrowRight, Star, MessageCircle, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPreview() {
  const [featuredServices, setFeaturedServices] = useState([]); // State für nur featured Services
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMobile = (typeof window !== 'undefined' ? window.innerWidth : 1024) < 768; // md breakpoint

  useEffect(() => {
    loadFeaturedServices();
  }, []);

  const loadFeaturedServices = async () => {
    try {
      setLoading(true);
      const allServices = ServiceData; // Await für Array
      const featured = allServices.filter(s => s.featured === true); // Strenger Filter auf boolean true
      setFeaturedServices(featured.slice(0, 3)); // Nur 3 featured
    } catch (err) {
      console.error("Error loading featured services:", err);
      setError("Fehler beim Laden der Services.");
    } finally {
      setLoading(false);
    }
  };

  const typeLabels = {
    all: "Alle Angebote",
    readings: "Readings & Beratung",
    ausbildung: "Zertifizierte Ausbildung",
    gruppenkurs: "Gruppenkurse & Waldbaden",
    workshop: "Workshops & Retreats"
  };

  const typeIcons = {
    readings: Heart,
    ausbildung: Award,
    einzelcoaching: Heart,
    gruppenkurs: Users,
    workshop: Star
  };


  if (loading) {
    return (
      <section className="py-20 px-6"> {/* py-20: Padding top/bottom 5rem (20*0.25rem = 5rem), px-6: Padding left/right 1.5rem (6*0.25rem = 1.5rem) â€“ schafft vertikalen/horizontalen Abstand um den Abschnitt */}
        <div className="max-w-7xl mx-auto"> {/* max-w-7xl: Maximale Breite 72rem (7xl), mx-auto: Zentriert horizontal mit auto margins */}
          <div className="text-center mb-12"> {/* text-center: Text zentriert, mb-12: Margin bottom 3rem (12*0.25rem = 3rem) â€“ Abstand nach unten */}
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div> {/* h-8: HÃ¶he 2rem, bg-gray-200: Hintergrundfarbe grau, rounded: Abgerundete Ecken, w-64: Breite 16rem, mx-auto: Zentriert, mb-4: Margin bottom 1rem, animate-pulse: Pulsierende Animation fÃ¼r Ladeeffekt */}
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div> {/* Ã„hnlich wie oben, aber h-4: HÃ¶he 1rem, w-96: Breite 24rem */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* grid: Grid-Layout, grid-cols-1: 1 Spalte auf Mobile, md:grid-cols-3: 3 Spalten ab Medium-Breakpoint (768px), gap-8: Abstand zwischen Grid-Items 2rem (8*0.25rem = 2rem) */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl h-96 animate-pulse"></div> /* bg-white: WeiÃŸer Hintergrund, rounded-2xl: Stark abgerundete Ecken (1.5rem), h-96: HÃ¶he 24rem, animate-pulse: Pulsierende Ladeanimation */
            ))}
          </div>
        </div>
      </section>
    );
  }


  if (error) {
    return <div className="text-center py-20 text-red-600">{error}</div>;
  }


  return (
    <section className="py-20 px-6"> {/* py-20: Padding top/bottom 5rem, px-6: Padding left/right 1.5rem â€“ wie im Loading-State */}
      <div className="max-w-7xl mx-auto"> {/* max-w-7xl: Maximale Breite 72rem, mx-auto: Zentriert horizontal */}
        <motion.div 
          initial={isMobile ? {} : { opacity: 0, y: 20 }}
          whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={isMobile ? {} : { duration: 0.5 }}
          className="text-center mb-12" // text-center: Text zentriert, mb-12: Margin bottom 3rem
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4"> {/* text-4xl: SchriftgrÃ¶ÃŸe 2.25rem, md:text-5xl: 3rem ab Medium-Breakpoint, font-bold: Fett, mb-4: Margin bottom 1rem */}
            <span className="bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent"> {/* bg-gradient-to-r: Lineares Gradient von links nach rechts (indigo-300 zu blue-300), bg-clip-text: Gradient auf Text clippen, text-transparent: Textfarbe transparent, um Gradient sichtbar zu machen */}
              Transformative Begleitung
            </span>
          </h2>
          <p className="font-base text-lg text-indigo-200 max-w-2xl mx-auto mb-4"> {/* text-lg: SchriftgrÃ¶ÃŸe 1.125rem, text-indigo-200: Hellindigo-Farbe, max-w-2xl: Maximale Breite 42rem, mx-auto: Zentriert, mb-4: Margin bottom 1rem */}
            Individuelle Lebensberatung und Workshops für Deine persönliche Entwicklung und spirituelles Wachstum
          </p>
        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
          {featuredServices.map((service, index) => {
            const normalizedType = service.type?.toLowerCase() || '';
            const TypeIcon = typeIcons[service.type] || Heart;
            
            return (
              <motion.div
                key={service.id || index}
                initial={isMobile ? {} : { opacity: 0, y: 20 }}
                whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
                transition={isMobile ? {} : { duration: 0.6, delay: index * 0.1 }}
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
                        Verbindliche Anfrage direkt via WhatsApp
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>


        <div className="flex justify-center">
          <Link href={createPageUrl("Services")}>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-3.5 text-base border border-indigo-300/30 text-indigo-100 hover:text-white hover:bg-white/10 hover:border-indigo-300/60 rounded-full transition-all duration-300 flex items-center justify-center font-headline font-semibold group"
            >
              <span>Alle Coaching-Angebote ansehen</span>
              <ArrowRight className="w-4 h-4 ml-2 text-indigo-300 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
