import React, { useState, useEffect } from "react";
import { ServiceData } from "../../entities/Service"; // Relativer Pfad – geändert zu ServiceData
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Heart, Clock, Users, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";


export default function ServicesPreview() {
  const [featuredServices, setFeaturedServices] = useState([]); // State für nur featured Services
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMobile = window.innerWidth < 768; // md breakpoint


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
    gruppenkurs: "Gruppenkurse",
    //online_kurs: "Online Kurse",
    workshop: "Workshops"
  };


  const typeIcons = {
    einzelcoaching: Heart,
    gruppenkurs: Users,
    online_kurs: Clock,
    workshop: Users
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


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"> {/* grid: Grid-Layout, grid-cols-1: 1 Spalte auf Mobile, md:grid-cols-3: 3 Spalten ab Medium, gap-8: Abstand 2rem, mb-12: Margin bottom 3rem */}
          {featuredServices.map((service, index) => {
            const normalizedType = service.type?.toLowerCase() || '';  // 
            const TypeIcon = typeIcons[service.type] || Heart;
            
            return (
              <motion.div
                key={service.id || index}  // HinzugefÃ¼gt: key fÃ¼r eindeutige Identifikation (verwendet service.id, fallback zu index)
                initial={isMobile ? {} : { opacity: 0, y: 20 }}
                whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
                transition={isMobile ? {} : { duration: 0.6, delay: index * 0.1 }} // transition: Dauer 0.6s, delay: VerzÃ¶gerung basierend auf Index (0.1s pro Item)
              >
                <Card className="group min-h-[550px] bg-slate-900/30 border border-blue-400/10 shadow-lg hover:shadow-blue-500/10 transition-all duration-500 rounded-2xl mystical-glow overflow-hidden hover:border-blue-400/30 border-0 flex flex-col flex-grow">
                  <div className="relative h-60">
                    <img 
                      src={service.image_url || ''}
                      alt={`${service.title} - ${service.description.slice(0, 100)}`}
                      title={`${service.title}: ${service.description.slice(0, 100)}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <Badge className="absolute top-2 left-2 bg-gradient-to-r from-orange-600 to-pink-600 text-white border-0 flex items-center gap-1 rounded-full px-4 py-1 font-headline text-2xl">
                      <TypeIcon className="w-3 h-3" />
                      {typeLabels[service.type]}
                    </Badge>
                    {service.featured && (
                      <Badge className="absolute top-2 right-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white border-0 flex items-center gap-1 rounded-full px-3 py-1 font-headline text-2xl">
                        <Star className="w-3 h-3" /> Bestseller
                      </Badge>
                    )}
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-headline text-4xl md:text-3xl font-bold">€{service.price}</p>
                      {service.duration && (
                        <p className="font-body text-base opacity-90 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {service.duration}
                        </p>
                      )}
                      {service.available_slots && (
                        <p className="font-body text-base opacity-90 text-yellow-300">Nur noch {service.available_slots} Plätze verfügbar!</p>
                      )}
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="font-headline text-4xl md:text-2xl font-bold text-blue-200 group-hover:text-white transition-colors duration-300 mb-1 pl-6 p-5">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-grow space-y-2 py-4">
                    <p className="font-body text-base text-indigo-200/80 leading-snug mb-1 pl-6 p-2 font-semibold">
                      {service.description}
                    </p>
                    
                    {service.benefits && service.benefits.length > 0 && (
                      <div className="mb-1">
                        <p className="font-section text-2xl mb-4 font-semibold text-blue-300 pl-6 p-3">Deine Vorteile:</p>
                        <ul className="font-body text-base text-indigo-200 list-disc p-1 pl-11">
                          {service.benefits.slice(0, 3).map((benefit, i) => (
                            <li key={i} className="leading-relaxed">
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="flex justify-center mt-auto p-6">
                      <Link 
                        to={createPageUrl("Contact")} 
                        className="w-full inline-block"
                      >
                      <Button 
                        aria-label={`Kostenloses Erstgespräch buchen: ${service.title}`}
                        className="font-headline text-xl md:text-lg bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full w-full py-2 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group whitespace-nowrap overflow-hidden text-ellipsis flex items-center justify-center"
                      >
                        Erstgespräch buchen
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>


        <div className="flex justify-center"> {/* flex justify-center: Zentriert den Inhalt horizontal */}
          <Link to={createPageUrl("Services")}>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg border-2 border-blue-400/50 text-blue-200 hover:bg-blue-400/10 hover:border-blue-400/80 rounded-full transition-all duration-300 whitespace-nowrap overflow-hidden text-ellipsis flex items-center justify-center font-headline" // variant="outline": Outline-Stil (nur Rand), size="lg": GroÃŸe GrÃ¶ÃŸe, px-8: Padding left/right 2rem, py-4: Padding top/bottom 1rem, text-lg: Schrift 1.125rem, border-2: Randdicke 2px, border-blue-400/50: Blau mit 50% OpazitÃ¤t, text-blue-200: Hellblau, hover:bg-blue-400/10: Hover-Hintergrund blau 10% OpazitÃ¤t, hover:border-blue-400/80: Hover-Rand blau 80% OpazitÃ¤t, rounded-full: Voll abgerundet, transition-all duration-300: ÃœbergÃ¤nge 300ms, whitespace-nowrap: Kein Umbruch, overflow-hidden: Ãœberlauf verstecken, text-ellipsis: Mit ... kÃ¼rzen, flex items-center justify-center: Flex zentriert
            >
              Alle Coaching-Angebote ansehen
              <ArrowRight className="w-5 h-5 ml-2" /> {/* w-5 h-5: GrÃ¶ÃŸe 1.25rem, ml-2: Margin left 0.5rem */}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
