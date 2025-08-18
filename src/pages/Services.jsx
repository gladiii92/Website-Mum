import React, { useState, useEffect, useRef } from "react";
import { ServiceData, Types } from "../entities/Service"; // Importiere ServiceData (das Array) und Types
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import Tabs, { TabsList, TabsTrigger } from "../components/ui/Tabs";
import { Heart, Clock, Users, Star, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet"; // Neu: Import für SEO


export default function Services() {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeType, setActiveType] = useState("all");


  // Neu: Ref für den Services-Container zum automatischen Scrollen
  const servicesRef = useRef(null);


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
    einzelcoaching: "Einzelcoaching",
    gruppenkurs: "Gruppenkurse",
    online_kurs: "Online Kurse",
    workshop: "Workshops"
  };


  const typeIcons = {
    einzelcoaching: Heart,
    gruppenkurs: Users,
    online_kurs: Clock,
    workshop: Star
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
    <Helmet>
      <title>Ursula Heinke - Coaching & Kurse</title>
      <meta name="description" content="Entdecken Sie transformative Coaching-Programme, Workshops und Online-Kurse für persönliches Wachstum und spirituelle Entwicklung." />
      <meta name="keywords" content="Coaching, Kurse, Workshops, spirituelle Entwicklung, Einzelcoaching" />
      <meta property="og:title" content="Ursula Heinke - Coaching & Kurse" />
      <meta property="og:description" content="Individuelle Begleitung für Ihre persönliche Transformation." />
      <meta property="og:image" content="https://www.ursulaheinke.de/images/Kurse/ogbild.png" /> {/* Passe Bild an */}
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
    </Helmet>




    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent">
              Coaching & Kurse
            </span>
          </h2>
          <p className="text-lg text-indigo-200 max-w-2xl mx-auto mb-4">
            Transformative Begleitung für Ihre persönliche Entwicklung. Finden Sie den Weg zu Ihrem authentischen Selbst und innerer Balance.
          </p>
        </motion.div>


        {/* Kategorie-Vorschau-Karten: Design angepasst an Produktkarten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {typePreviews.map((preview, index) => {
            const TypeIcon = typeIcons[preview.type] || Heart;
            return (
              <motion.div
                key={preview.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleTypeChange(preview.type)}
                className="cursor-pointer"
              >
                <Card className="group min-h-[340px] bg-slate-900/30 backdrop-blur-sm border border-blue-400/10 shadow-lg hover:shadow-blue-500/10 transition-all duration-500 rounded-2xl mystical-glow overflow-hidden hover:border-blue-400/30 flex flex-col">
                  <div className="relative h-60">
                    <img
                      src={preview.teaserImage || ''}
                      alt={`${typeLabels[preview.type]} - Teaserbild für ${preview.teaserName || 'Angebote'}`}
                      title={`${typeLabels[preview.type]}: ${preview.teaserName || 'Entdecken Sie unsere Angebote'}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <Badge className="absolute top-2 left-2 bg-gradient-to-r from-orange-600 to-pink-600 text-white border-0 flex items-center gap-1 rounded-full px-4 py-1">
                      <TypeIcon className="w-3 h-3" />
                      {typeLabels[preview.type]}
                    </Badge>
                    <Badge className="absolute top-2 right-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white border-0 rounded-full px-3 py-1">
                      {preview.count} Angebote
                    </Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-bold text-blue-200 group-hover:text-white transition-colors duration-300 mb-2 pl-4">
                      {preview.teaserName}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4 py-4">
                    {/* Neu: Beschreibung anzeigen */}
                    <p className="text-sm text-indigo-200/80 leading-relaxed mb-2 pl-4">
                      {preview.description}
                    </p>
                    <div className="flex justify-center mt-auto pb-2">
                      <Button 
                        aria-label={`Entdecken Sie die Kategorie ${typeLabels[preview.type]}`}
                        className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/20 rounded-full px-6 py-2 transition-all duration-300 flex items-center justify-center w-full max-w-xs mx-auto"
                      >
                        {typeLabels[preview.type]} <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
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
                  className="px-4 py-2 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-300 data-[state=active]:to-blue-300 data-[state=active]:text-transparent data-[state=active]:bg-clip-text text-blue-200 whitespace-nowrap"
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
          <p className="text-center text-indigo-200 text-lg font-semibold mb-6">
            {filteredServices.length} Angebote in dieser Kategorie
          </p>
          <div className="border-t border-blue-400/20 my-6"></div>


          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {filteredServices.map((service, index) => {
                const TypeIcon = typeIcons[service.type] || Heart;
                
                return (
                  <motion.div
                    key={service.id || index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex flex-col"
                  >
                    <Card className="group min-h-[550px] bg-slate-900/30 backdrop-blur-sm border border-blue-400/10 shadow-lg hover:shadow-blue-500/10 transition-all duration-500 rounded-2xl mystical-glow overflow-hidden hover:border-blue-400/30 border-0 flex flex-col flex-grow">
                      <div className="relative h-60">
                        <img 
                          src={service.image_url || ``}
                          alt={`${service.title} - ${service.description.slice(0, 100)}`}
                          title={`${service.title}: ${service.description.slice(0, 100)}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                        <Badge className="absolute top-2 left-2 bg-gradient-to-r from-orange-600 to-pink-600 text-white border-0 flex items-center gap-1 rounded-full px-4 py-1">
                          <TypeIcon className="w-3 h-3" />
                          {typeLabels[service.type]}
                        </Badge>
                        {service.featured && (
                          <Badge className="absolute top-2 right-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white border-0 flex items-center gap-1 rounded-full px-3 py-1">
                            <Star className="w-3 h-3" /> Bestseller
                          </Badge>
                        )}
                        <div className="absolute bottom-4 left-4 text-white">
                          <p className="text-2xl font-bold">€{service.price}</p>
                          {service.duration && (
                            <p className="text-sm opacity-90 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {service.duration}
                            </p>
                          )}
                          {service.available_slots && (
                            <p className="text-sm opacity-90 text-yellow-300">Nur noch {service.available_slots} Plätze verfügbar!</p>
                          )}
                        </div>
                      </div>
                      
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-blue-200 group-hover:text-white transition-colors duration-300 mb-1 pl-6 p-5">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="flex-grow space-y-2 py-4">
                        <p className="text-l text-indigo-200/80 leading-snug mb-1 pl-6 p-4">
                          {service.description}
                        </p>
                        
                        {service.benefits && service.benefits.length > 0 && (
                          <div className="mb-1">
                            <p className="text-l font-semibold text-blue-300 pl-6 p-3">Ihre Vorteile:</p>
                            <ul className="text-l text-indigo-200 list-disc p-1 pl-11">
                              {service.benefits.slice(0, 3).map((benefit, i) => (
                                <li key={i} className="leading-relaxed">
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        <div className="flex justify-center mt-auto p-6">
                          <Button 
                            aria-label={`Kostenloses Erstgespräch buchen: ${service.title}`}
                            className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full w-full py-2 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group whitespace-nowrap overflow-hidden text-ellipsis flex items-center justify-center"
                          >
                            Kostenloses Erstgespräch buchen
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </div>
                      </CardContent>
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
                className="mt-4 px-6 py-2 text-blue-200 border-blue-400/50 hover:bg-blue-400/10"
                onClick={() => handleTypeChange("all")}
              >
                Alle Angebote ansehen
              </Button>
            </div>
          )}
        </div>


        {/* CTA Section (behalten, da thematisch passend, aber an Shop-Farben angepasst) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-6 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für Ihre Transformation?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Beginnen Sie Ihre Reise zu innerem Wachstum und spiritueller Klarheit. 
            Vereinbaren Sie noch heute ein kostenloses Erstgespräch.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-indigo-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Heart className="w-5 h-5 mr-2" />
            Jetzt Termin vereinbaren
          </Button>
        </motion.div>
      </div>
    </section>
    </>
  );
}
