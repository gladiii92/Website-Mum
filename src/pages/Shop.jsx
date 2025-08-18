import React, { useState, useEffect, useRef } from "react";
import { Product, Categories } from "../entities/Product"; // Importiere auch Categories
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import Tabs, { TabsList, TabsTrigger } from "../components/ui/Tabs";
import { Star, Sparkles, ShoppingBag, Clock, ArrowRight, Droplet, Brush } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet"; // Neu: Import für SEO

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

  // Neu: Ref für den Produkte-Container zum automatischen Scrollen
  const productsRef = useRef(null);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, activeCategory]);

  const loadProducts = () => {
    // Statische Ladung (kein async, da Mock-Array)
    const allProducts = Product; // Direkter Zugriff auf das Array aus Product.jsx
    setProducts(allProducts);
    setLoading(false);
  };

  const filterProducts = () => {
    let filtered = products;
    if (activeCategory !== "all") {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    // Sortiere nach Beliebtheit (z.B. featured zuerst) für bessere Verkaufspsychologie
    filtered = filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    setFilteredProducts(filtered);
  };

  // Neu: Funktion für Kategorie-Wechsel mit smooth Scroll zum Produkte-Bereich
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const categoryLabels = {
    all: "Alle Produkte",
    heilsteine: "Heilsteine",
    heilketten: "Heilketten",
    kerzen: "Mystische Kerzen",
    pferdebuersten: "Pferdebürsten mit Heilsteinen",
    wassersteine: "Heilsteine fürs Wasser"
  };

  const categoryIcons = {
    heilsteine: Sparkles,
    heilketten: Sparkles,
    kerzen: Sparkles,
    pferdebuersten: Brush,
    wassersteine: Droplet
  };

  // Kategorie-Previews: Nun basierend auf dem neuen Categories-Array (separate Vorschaubilder)
  const categoryPreviews = Categories.map(cat => ({
    category: cat.name,
    count: products.filter(p => p.category === cat.name).length,
    teaserImage: cat.preview_image_url,
    teaserName: cat.display_name, // Oder ein Teaser-Name, falls gewünscht
    description: cat.description // Neu: Beschreibung hinzugefügt
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
      <title>Ursula Heinke - Shop</title>
      <meta name="description" content="Handverlesene Heilsteine, Schmuck und mystische Kerzen für Ihre spirituelle Reise. Entdecken Sie Produkte für innere Balance." />
      <meta name="keywords" content="Heilsteine, Schmuck, Kerzen, spirituelle Produkte, Shop" />
      <meta property="og:title" content="Ursula Heinke - Shop" />
      <meta property="og:description" content="Spirituelle Schätze für Ihr Wohlbefinden." />
      <meta property="og:image" content="https://www.ursulaheinke.de/images/Kurse/ogbild.png" /> {/* Passe Bild an */}
      <meta property="og:url" content="https://www.ursulaheinke.de/shop" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://www.ursulaheinke.de/shop" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Store",
          "name": "Ursula Heinke Shop",
          "url": "https://www.ursulaheinke.de/shop"
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
              Spirituelle Schätze
            </span>
          </h2>
          <p className="text-lg text-indigo-200 max-w-2xl mx-auto mb-4">
            Handverlesene Heilsteine, kraftvolle Schmuckstücke und mystische Kerzen für Ihre spirituelle Reise
          </p>
        </motion.div>

        {/* Kategorie-Vorschau-Karten: Design angepasst an Produktkarten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categoryPreviews.map((preview, index) => {
            const CategoryIcon = categoryIcons[preview.category] || Sparkles;
            return (
              <motion.div
                key={preview.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleCategoryChange(preview.category)}
                className="cursor-pointer"
              >
                <Card className="group min-h-[340px] bg-slate-900/30 backdrop-blur-sm border border-blue-400/10 shadow-lg hover:shadow-blue-500/10 transition-all duration-500 rounded-2xl mystical-glow overflow-hidden hover:border-blue-400/30 flex flex-col">
                  <div className="relative h-60">
                    <img
                      src={preview.teaserImage || ''}
                      alt={`${categoryLabels[preview.category]} - Teaserbild für ${preview.teaserName || 'Produkte'}`}
                      title={`${categoryLabels[preview.category]}: ${preview.teaserName || 'Entdecken Sie unsere Produkte'}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <Badge className="absolute top-2 left-2 bg-gradient-to-r from-orange-600 to-pink-600 text-white border-0 flex items-center gap-1 rounded-full px-4 py-1">
                      <CategoryIcon className="w-3 h-3" />
                      {categoryLabels[preview.category]}
                    </Badge>
                    <Badge className="absolute top-2 right-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white border-0 rounded-full px-3 py-1">
                      {preview.count} Produkte
                    </Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-bold text-blue-200 group-hover:text-white transition-colors duration-300 mb-2 pl-4">
                      
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4 py-4">
                    {/* Neu: Beschreibung anzeigen */}
                    <p className="text-sm text-indigo-200/80 leading-relaxed mb-2 pl-4">
                      {preview.description}
                    </p>
                    <div className="flex justify-center mt-auto pb-2">
                      <Button 
                        aria-label={`Entdecken Sie die Kategorie ${categoryLabels[preview.category]}`}
                        className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/20 rounded-full px-6 py-2 transition-all duration-300 flex items-center justify-center w-full max-w-xs mx-auto"
                      >
                        {categoryLabels[preview.category]} <ArrowRight className="w-4 h-4 ml-2" />
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
            value={activeCategory}
            onValueChange={handleCategoryChange}
            className="bg-slate-900/30 p-1 rounded-full border border-blue-400/10 overflow-x-auto"
          >
            <TabsList className="flex-nowrap">
              {Object.keys(categoryLabels).map(cat => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="px-4 py-2 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-300 data-[state=active]:to-blue-300 data-[state=active]:text-transparent data-[state=active]:bg-clip-text text-blue-200 whitespace-nowrap"
                >
                  {categoryLabels[cat]}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Produkte-Container mit Ref für Scroll */}
        <div ref={productsRef}>
          {/* Neu: Immer sichtbar – Visueller Trenner und dynamische Anzahl der Produkte */}
          <div className="border-t border-blue-400/20 my-6"></div>
          <p className="text-center text-indigo-200 text-lg font-semibold mb-6">
            {filteredProducts.length} Produkte in dieser Kategorie
          </p>
          <div className="border-t border-blue-400/20 my-6"></div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {filteredProducts.map((product, index) => {
                const CategoryIcon = categoryIcons[product.category] || Sparkles;
                
                return (
                  <motion.div
                    key={product.id || index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex flex-col"
                  >
                    <Card className="group min-h-[550px] bg-slate-900/30 backdrop-blur-sm border border-blue-400/10 shadow-lg hover:shadow-blue-500/10 transition-all duration-500 rounded-2xl mystical-glow overflow-hidden hover:border-blue-400/30 border-0 flex flex-col flex-grow">
                      <div className="relative h-60">
                        <img 
                          src={product.image_url || `https://images.unsplash.com/photo-1596003906949-67221c37965c?w=400&h=300&fit=crop`}
                          alt={`${product.name} - ${product.description.slice(0, 100)}`}
                          title={`${product.name}: ${product.description.slice(0, 100)}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                        <Badge className="absolute top-2 left-2 bg-gradient-to-r from-orange-600 to-pink-600 text-white border-0 flex items-center gap-1 rounded-full px-4 py-1">
                          <CategoryIcon className="w-3 h-3" />
                          {categoryLabels[product.category]}
                        </Badge>
                        {product.featured && (
                          <Badge className="absolute top-2 right-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white border-0 flex items-center gap-1 rounded-full px-3 py-1">
                            <Star className="w-3 h-3" /> Bestseller
                          </Badge>
                        )}
                        <div className="absolute bottom-4 left-4 text-white">
                          <p className="text-2xl font-bold">€{product.price}</p>
                          {product.duration && (
                            <p className="text-sm opacity-90 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {product.duration}
                            </p>
                          )}
                          {product.in_stock && product.available_slots && (
                            <p className="text-sm opacity-90 text-yellow-300">Nur noch {product.available_slots} verfügbar!</p>
                          )}
                        </div>
                      </div>
                      
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-blue-200 group-hover:text-white transition-colors duration-300 mb-1 pl-6 p-5">
                          {product.name}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="flex-grow space-y-2 py-4">
                        <p className="text-l text-indigo-200/80 leading-snug mb-1 pl-6 p-4">
                          {product.description}
                        </p>
                        
                        {product.healing_properties && product.healing_properties.length > 0 && (
                          <div className="mb-1">
                            <p className="text-l font-semibold text-blue-300 pl-6 p-3">Heilende Wirkung:</p>
                            <ul className="text-l text-indigo-200 list-disc p-1 pl-11">
                              {product.healing_properties.slice(0, 3).map((property, i) => (
                                <li key={i} className="leading-relaxed">
                                  {property}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        <div className="flex justify-center mt-auto p-6">
                          <Button 
                            aria-label={`In den Warenkorb legen: ${product.name}`}
                            className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full w-full py-2 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group whitespace-nowrap overflow-hidden text-ellipsis flex items-center justify-center"
                          >
                            In den Warenkorb
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
              <Sparkles className="w-16 h-16 text-indigo-300 mx-auto mb-4" />
              <Button 
                variant="outline" 
                className="mt-4 px-6 py-2 text-blue-200 border-blue-400/50 hover:bg-blue-400/10"
                onClick={() => handleCategoryChange("all")}
              >
                Alle Produkte ansehen
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
    </>
  );
}
