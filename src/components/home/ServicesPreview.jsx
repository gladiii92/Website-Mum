import React, { useState, useEffect } from "react";
import { ServiceData } from "../../entities/Service"; // Relativer Pfad – geändert zu ServiceData
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Heart, Clock, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";


export default function ServicesPreview() {
  const [featuredServices, setFeaturedServices] = useState([]); // State für nur featured Services
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    loadFeaturedServices();
  }, []);


  const loadFeaturedServices = async () => {
    try {
      setLoading(true);
      const allServices = await Service.list('-created_date'); // Await für Array
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
    einzelcoaching: "Einzelcoaching",
    gruppenkurs: "Gruppenkurs",
    online_kurs: "Online Kurs",
    workshop: "Workshop"
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
          initial={{ opacity: 0, y: 20 }} // initial: Startzustand (unsichtbar, 20px nach unten verschoben)
          whileInView={{ opacity: 1, y: 0 }} // whileInView: Zielzustand bei Sichtbarkeit (sichtbar, y=0)
          transition={{ duration: 0.6 }} // transition: Ãœbergangsdauer 0.6 Sekunden
          className="text-center mb-12" // text-center: Text zentriert, mb-12: Margin bottom 3rem
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4"> {/* text-4xl: SchriftgrÃ¶ÃŸe 2.25rem, md:text-5xl: 3rem ab Medium-Breakpoint, font-bold: Fett, mb-4: Margin bottom 1rem */}
            <span className="bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent "> {/* bg-gradient-to-r: Lineares Gradient von links nach rechts (indigo-300 zu blue-300), bg-clip-text: Gradient auf Text clippen, text-transparent: Textfarbe transparent, um Gradient sichtbar zu machen */}
              Transformative Begleitung
            </span>
          </h2>
          <p className="text-lg text-indigo-200 max-w-2xl mx-auto mb-4"> {/* text-lg: SchriftgrÃ¶ÃŸe 1.125rem, text-indigo-200: Hellindigo-Farbe, max-w-2xl: Maximale Breite 42rem, mx-auto: Zentriert, mb-4: Margin bottom 1rem */}
            Individuelle Coaching-Programme und Kurse fÃ¼r Ihre persÃ¶nliche Entwicklung und spirituelles Wachstum
          </p>
        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"> {/* grid: Grid-Layout, grid-cols-1: 1 Spalte auf Mobile, md:grid-cols-3: 3 Spalten ab Medium, gap-8: Abstand 2rem, mb-12: Margin bottom 3rem */}
          {featuredServices.map((service, index) => {
            const TypeIcon = typeIcons[service.type] || Heart;
            
            return (
              <motion.div
                key={service.id || index}  // HinzugefÃ¼gt: key fÃ¼r eindeutige Identifikation (verwendet service.id, fallback zu index)
                initial={{ opacity: 0, y: 30 }} // initial: Startzustand (unsichtbar, 30px nach unten)
                whileInView={{ opacity: 1, y: 0 }} // whileInView: Zielzustand bei Sichtbarkeit
                transition={{ duration: 0.6, delay: index * 0.1 }} // transition: Dauer 0.6s, delay: VerzÃ¶gerung basierend auf Index (0.1s pro Item)
              >
                <Card className="group h-auto bg-slate-900/30 backdrop-blur-sm border border-blue-400/10 shadow-lg hover:shadow-blue-500/10 transition-all duration-500 rounded-2xl mystical-glow overflow-hidden hover:border-blue-400/30 border-0"> {/* group: ErmÃ¶glicht Group-Hover-Effekte, min-h-[550px]: Minimale HÃ¶he 550px, flex flex-col: Flex-Column fÃ¼r vertikale Anordnung, bg-slate-900/30: Dunkelgrauer Hintergrund mit 30% OpazitÃ¤t, backdrop-blur-sm: Leichter Blur-Effekt, border: Rand (blue-400/10: Hellblau mit 10% OpazitÃ¤t), shadow-lg: GroÃŸer Schatten, hover:shadow-blue-500/10: Hover-Schatten blau mit 10% OpazitÃ¤t, transition-all duration-500: Alle ÃœbergÃ¤nge 500ms, rounded-2xl: Abgerundete Ecken 1.5rem, mystical-glow: Benutzerdefinierte Klasse (vermutlich Glow-Effekt), overflow-hidden: Ãœberlauf verstecken, hover:border-blue-400/30: Hover-Rand blau mit 30% OpazitÃ¤t */}
                  <div className="relative h-65 rounded-t-2x1 "> {/* relative: Relative Positionierung, h-48: HÃ¶he 12rem, overflow-hidden: Ãœberlauf verstecken */}
                    <img 
                      src={service.image_url || "/images/teeest.png"}  // src: Pfad zum Bild (aus Entities oder Fallback); beginnt mit / fÃ¼r public-Root
                      alt="Spirituelle Lebensberatung - Coachings"  // Alternativer Text, der bei Fehlern angezeigt wird
                      className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-100 " // w-full: Volle Breite, h-full: Volle HÃ¶he, object-cover: Bild deckt ab ohne Verzerrung, group-hover:scale-110: Bei Hover 110% skalieren, transition-transform duration-500: Ãœbergang fÃ¼r Transform 500ms, opacity-70: 70% OpazitÃ¤t, group-hover:opacity-100: Bei Hover 100% OpazitÃ¤t
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent "></div> {/* absolute inset-0: Absolut positioniert, fÃ¼llt Parent, bg-gradient-to-t: Gradient von unten (slate-900/60: Dunkelgrau 60% OpazitÃ¤t) nach oben transparent */}
                    <Badge className="absolute top-2 left-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white border-0 flex items-center gap-1 rounded-full px-4 py-1"> {/* absolute top-4 left-4: Positioniert 1rem oben/links, bg-gradient-to-r: Gradient orange zu pink, text-white: WeiÃŸer Text, border-0: Kein Rand, flex items-center gap-1: Flex-Layout zentriert mit 0.25rem Gap */}
                      <TypeIcon className="w-3 h-3" /> {/* w-3 h-3: Breite/HÃ¶he 0.75rem */}
                      {typeLabels[service.type]}
                    </Badge>
                    <div className="absolute bottom-4 left-4 text-white "> {/* absolute bottom-4 left-4: Positioniert 1rem unten/links, text-white: WeiÃŸer Text */}
                      <p className="text-2xl font-bold">â‚¬{service.price}</p> {/* text-lg: SchriftgrÃ¶ÃŸe 1.125rem, font-bold: Fett */}
                      {service.duration && (
                        <p className="text-sm opacity-90 flex items-center gap-1"> {/* text-xs: Kleine Schrift 0.75rem, opacity-90: 90% OpazitÃ¤t, flex items-center gap-1: Flex zentriert mit 0.25rem Gap, mb-2: Margin bottom 0.5rem */}
                          <Clock className="w-3 h-3" /> {/* w-3 h-3: Icon-GrÃ¶ÃŸe 0.75rem */}
                          {service.duration}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-blue-200 group-hover:text-white transition-colors duration-300 mb-1 pl-6 p-5"> {/* text-lg: 1.125rem, font-bold: Fett, text-blue-200: Hellblau, group-hover:text-white: Bei Hover weiÃŸ, transition-colors duration-300: FarbÃ¼bergang 300ms, mb-4: Margin bottom 1rem */}
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-grow space-y-2 py-4"> {/* flex-grow: Nimmt verfÃ¼gbaren Platz ein, space-y-4: Vertikaler Abstand 1rem zwischen Children, py-6: Padding top/bottom 1.5rem */}
                    <p className="text-s text-indigo-200/80 leading-snug mb-1 pl-6 p-4"> {/* text-s: (vermutlich Tippfehler fÃ¼r text-sm oder text-xs; erklÃ¤re als kleine Schrift), text-indigo-200/80: Hellindigo mit 80% OpazitÃ¤t, leading-relaxed: Entspannter Zeilenabstand, mb-4: Margin bottom 1rem */}
                      {service.description}
                    </p>
                    
                    {service.benefits && service.benefits.length > 0 && (
                      <div className=" mb-2"> {/* space-y-2: Vertikaler Abstand 0.5rem zwischen Children, mb-5: Margin bottom 1.25rem */}
                        <p className="text-s font-semibold text-blue-300 pl-6 p-3">Ihre Vorteile:</p> {/* text-s: Kleine Schrift, font-semibold: Halbfett, text-blue-300: Blau */}
                        <ul className="text-s text-indigo-200 list-disc p-3 pl-11"> {/* text-s: Kleine Schrift, text-indigo-200: Hellindigo, space-y-1: Abstand 0.25rem, list-disc: AufzÃ¤hlungspunkte, pl-5: Padding left 1.25rem */}
                          {service.benefits.slice(0, 3).map((benefit, i) => (
                            <li key={i} className="leading-relaxed"> {/* leading-relaxed: Entspannter Zeilenabstand */}
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="flex justify-center mt-auto p-6"> {/* flex justify-center: Zentriert horizontal, mt-auto: Schiebt nach unten (auto margin top) */}
                      <Button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/20 rounded-full w-full py-2 transition-all duration-300 group whitespace-nowrap overflow-hidden text-ellipsis flex items-center justify-center"> {/* action-gradient: Benutzerdefinierte Gradient-Klasse, text-white: WeiÃŸer Text, rounded-full: Voll abgerundet, px-12: Padding left/right 3rem, py-2: Padding top/bottom 0.5rem, hover:shadow-lg: Hover groÃŸer Schatten, hover:shadow-pink-500/20: Pink-Schatten mit 20% OpazitÃ¤t, transition-all duration-300: ÃœbergÃ¤nge 300ms, group: Group-Hover, whitespace-nowrap: Kein Zeilenumbruch, overflow-hidden: Ãœberlauf verstecken, text-ellipsis: Text mit ... kÃ¼rzen, flex items-center justify-center: Flex zentriert */}
                        Jetzt buchen
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" /> {/* w-4 h-4: GrÃ¶ÃŸe 1rem, ml-2: Margin left 0.5rem, group-hover:translate-x-1: Bei Hover 0.25rem nach rechts verschieben, transition-transform duration-300: Ãœbergang 300ms */}
                      </Button>
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
              className="px-8 py-4 text-lg border-2 border-blue-400/50 text-blue-200 hover:bg-blue-400/10 hover:border-blue-400/80 rounded-full transition-all duration-300 whitespace-nowrap overflow-hidden text-ellipsis flex items-center justify-center" // variant="outline": Outline-Stil (nur Rand), size="lg": GroÃŸe GrÃ¶ÃŸe, px-8: Padding left/right 2rem, py-4: Padding top/bottom 1rem, text-lg: Schrift 1.125rem, border-2: Randdicke 2px, border-blue-400/50: Blau mit 50% OpazitÃ¤t, text-blue-200: Hellblau, hover:bg-blue-400/10: Hover-Hintergrund blau 10% OpazitÃ¤t, hover:border-blue-400/80: Hover-Rand blau 80% OpazitÃ¤t, rounded-full: Voll abgerundet, transition-all duration-300: ÃœbergÃ¤nge 300ms, whitespace-nowrap: Kein Umbruch, overflow-hidden: Ãœberlauf verstecken, text-ellipsis: Mit ... kÃ¼rzen, flex items-center justify-center: Flex zentriert
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
