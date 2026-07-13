import React, { useState, useEffect } from "react";
import { Product } from "../../entities/Product"; // Relativer Pfad (zwei Ordner hoch zu entities)
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card"; // Relativer Pfad
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Sparkles, Clock, ArrowRight, Star, Droplet, Brush } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMobile = window.innerWidth < 768; // md breakpoint

  useEffect(() => {
    loadFeaturedProducts();
  }, []);

  const loadFeaturedProducts = () => {
    const allProducts = Product; // Alles aus dem Array
    const shuffled = [...allProducts].sort(() => 0.5 - Math.random()); // Zufällig mischen
    const selected = shuffled.slice(0, 3); // Die ersten 3 zufällig auswählen

    // Zufällige Bestseller-Chance vergeben
    const withBestseller = selected.map(product => ({
      ...product,
      is_bestseller: true
    }));

    setProducts(withBestseller);
    setLoading(false);
  };

  const categoryLabels = {
    heilsteine: "Heilsteine",
    heilketten: "Heilketten & Amulette",
    // kerzen: "Mystische Kerzen",
    // pferdebuersten: "Pferdebürsten mit Heilsteinen", // Auskommentiert für späteren Gebrauch
    wassersteine: "Heilsteine fürs Wasser",
    horoskope: "Persönliche Horoskope"
  };

  const categoryIcons = {
    heilsteine: Sparkles,
    heilketten: Sparkles,
    kerzen: Sparkles,
    wassersteine: Droplet,
    horoskope: Star
  };

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

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={isMobile ? {} : { opacity: 0, y: 20 }}
          whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={isMobile ? {} : { duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent">
              Spirituelle Schätze
            </span>
          </h2>
          <p className="font-base text-lg text-indigo-200 max-w-2xl mx-auto mb-4">
            Handverlesene Heilsteine, kraftvolle Schmuckstücke und mystische Kerzen für Deine spirituelle Reise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => {
            
            const CategoryIcon = categoryIcons[product.category] || Sparkles;
            
            return (
              <motion.div
                key={product.id || index}
                initial={isMobile ? {} : { opacity: 0, y: 20 }}
                whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
                transition={isMobile ? {} : { duration: 0.5 }}
              >
                <Card className="group min-h-[550px] bg-slate-900/30 border border-blue-400/10 shadow-lg hover:shadow-blue-500/10 transition-all duration-500 rounded-2xl mystical-glow overflow-hidden hover:border-blue-400/30 border-0 flex flex-col flex-grow">
                  <div className="relative h-60">
                    <Link to={`/product/${product.slug}`} className="block w-full h-full">
                    <img 
                      src={product.image_url || ''}
                      alt={`${product.name} - ${product.description?.slice(0, 100)}`}
                      title={`${product.name}: ${product.description?.slice(0, 100)}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-100"
                    />
                    </Link>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none"></div>
                    <Badge className="absolute top-2 left-2 bg-gradient-to-r from-orange-600 to-pink-600 text-white border-0 flex items-center gap-1 rounded-full px-4 py-1 font-headline text-2xl">
                      <CategoryIcon className="w-3 h-3" />
                      {categoryLabels[product.category]}
                    </Badge>
                    {product.is_bestseller && (
                      <Badge className="absolute top-2 right-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white border-0 flex items-center gap-1 rounded-full px-3 py-1 font-headline text-2xl">
                        <Star className="w-3 h-3" /> Bestseller
                      </Badge>
                    )}
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-headline text-4xl md:text-3xl font-bold">{product.price}€</p>
                      {product.duration && (
                        <p className="font-headline text-base opacity-90 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {product.duration}
                        </p>
                      )}
                      {product.in_stock && product.available_slots && (
                        <p className="font-body text-base opacity-90 text-yellow-300">Nur noch {product.available_slots} verfügbar!</p>
                      )}
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="font-headline text-4xl md:text-3xl font-bold text-blue-200 group-hover:text-white transition-colors duration-300 mb-1 pl-6 p-5">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-grow space-y-2 py-4">
                    {product.isGemstone ? (
                    <p className="font-body text-base text-indigo-200/80 leading-snug mb-1 pl-6 p-2 font-semibold">
                      {product.carat_weight}ct • {product.cut} • {product.origin}
                      {product.extra_specs && product.extra_specs.split('\n').map((line, i) => (
                        <span key={i}><br />{line}</span>
                      ))}
                    </p>
                    ) : (
                    <p className="font-body text-base text-indigo-200/80 leading-snug mb-1 pl-6 p-2 font-semibold">
                      {product.healing_property} • {product.energy} • {product.focus}
                      {product.extra_specs && product.extra_specs.split('\n').map((line, i) => (
                        <span key={i}><br />{line}</span>
                      ))}
                    </p>
                    )}

                    {product.healing_properties && product.healing_properties.length > 0 && (
                      <div className="mb-1">
                        <p className="font-section text-2xl mb-4 font-semibold text-blue-300 pl-6 p-3">Heilende Wirkung:</p>
                        <ul className="font-body text-base text-indigo-200 list-disc p-1 pl-11">
                          {product.healing_properties?.slice(0, 3).map((property, i) => (
                            <li key={i} className="leading-relaxed">
                              {property}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="flex justify-center mt-auto p-6">
                      <Link 
                        to={`/product/${product.slug}`}
                        className="w-full inline-block"
                      >
                      <Button 
                        aria-label={`Anfrage senden: ${product.name}`}
                        className="font-headline text-xl md:text-lg bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full w-full py-2 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group whitespace-nowrap overflow-hidden text-ellipsis flex items-center justify-center"
                      >
                        Details ansehen
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

        <div className="flex justify-center">
          <Link to={createPageUrl("Shop")}>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg border-2 border-blue-400/50 text-blue-200 hover:bg-blue-400/10 hover:border-blue-400/80 rounded-full transition-all duration-300 whitespace-nowrap overflow-hidden text-ellipsis flex items-center justify-center font-headline"
            >
              Alle Produkte ansehen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
