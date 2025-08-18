import React, { useState, useEffect } from "react";
import { Product } from "../../entities/Product"; // Relativer Pfad (zwei Ordner hoch zu entities)
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card"; // Relativer Pfad
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Sparkles, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFeaturedProducts();
  }, []);

  const loadFeaturedProducts = () => {
    // Statische Ladung (kein async, da Mock-Array)
    const allProducts = Product; // Direkter Zugriff auf das Array
    const featured = allProducts.filter(p => p.featured).slice(0, 3);
    setProducts(featured);
    setLoading(false);
  };

  const categoryLabels = {
    heilsteine: "Heilsteine",
    heilketten: "Heilketten", 
    kerzen: "Mystische Kerzen"
  };

  const categoryIcons = {
    heilsteine: Sparkles,
    heilketten: Sparkles,
    kerzen: Sparkles
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => {
            const CategoryIcon = categoryIcons[product.category] || Sparkles;
            
            return (
              <motion.div
                key={product.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group h-auto bg-slate-900/30 backdrop-blur-sm border border-blue-400/10 shadow-lg hover:shadow-blue-500/10 transition-all duration-500 rounded-2xl mystical-glow overflow-hidden hover:border-blue-400/30 border-0">
                  <div className="relative h-65 rounded-t-2x1">
                    <img 
                      src={product.image_url || `https://images.unsplash.com/photo-1596003906949-67221c37965c?w=400&h=300&fit=crop`}
                      alt={product.name}
                      className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <Badge className="absolute top-2 left-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white border-0 flex items-center gap-1 rounded-full px-4 py-1">
                      <CategoryIcon className="w-3 h-3" />
                      {categoryLabels[product.category]}
                    </Badge>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-2xl font-bold">€{product.price}</p>
                      {product.duration && (
                        <p className="text-sm opacity-90 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {product.duration}
                        </p>
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
                      <Button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/20 rounded-full w-full py-2 transition-all duration-300 group whitespace-nowrap overflow-hidden text-ellipsis flex items-center justify-center">
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

        <div className="flex justify-center">
          <Link to={createPageUrl("Shop")}>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg border-2 border-blue-400/50 text-blue-200 hover:bg-blue-400/10 hover:border-blue-400/80 rounded-full transition-all duration-300 whitespace-nowrap overflow-hidden text-ellipsis flex items-center justify-center"
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
