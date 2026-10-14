import React, { useState, useEffect } from "react";
import { Product } from "../../entities/Product"; // Relativer Pfad (zwei Ordner hoch zu entities)
import Link from "next/link";
import { createPageUrl, formatPrice } from "../../utils";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card"; // Relativer Pfad
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Sparkles, Clock, ArrowRight, Star, Droplet, Brush } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMobile = (typeof window !== 'undefined' ? window.innerWidth : 1024) < 768; // md breakpoint

  useEffect(() => {
    loadFeaturedProducts();
  }, []);

  const loadFeaturedProducts = () => {
    const allProducts = Product;
    // 3 handverlesene, komplementäre Einstiegsprodukte für maximale Konversion & visuelle Ruhe
    const curatedSlugs = ["meditation-innerer-frieden", "mondstein-wasserstein", "partnerhoroskop"];
    const selected = curatedSlugs
      .map(slug => allProducts.find(p => p.slug === slug))
      .filter(Boolean);

    setProducts(selected.length === 3 ? selected : allProducts.slice(0, 3));
    setLoading(false);
  };

  const categoryLabels = {
    meditation: "Geführte Meditation",
    wassersteine: "Heil- & Wassersteine",
    horoskope: "Persönliche Horoskope",
    heilketten: "Amulette & Heilketten"
  };

  const categoryIcons = {
    meditation: Sparkles,
    wassersteine: Droplet,
    horoskope: Star,
    heilketten: Sparkles
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
              Spirituelle Begleiter & Meditation
            </span>
          </h2>
          <p className="font-base text-lg text-indigo-200 max-w-2xl mx-auto mb-4">
            Geführte Meditationen, energetisierende Wassersteine und persönliche Horoskope zur Begleitung Deiner Entwicklung
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
          {products.map((product, index) => {
            const CategoryIcon = categoryIcons[product.category] || Sparkles;
            
            return (
              <motion.div
                key={product.id || product.slug || index}
                initial={isMobile ? {} : { opacity: 0, y: 20 }}
                whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
                transition={isMobile ? {} : { duration: 0.5, delay: index * 0.1 }}
                className="h-full flex flex-col"
              >
                <Card className="group h-full flex flex-col bg-slate-900/40 border border-blue-400/15 shadow-lg hover:shadow-blue-500/10 transition-all duration-500 rounded-2xl mystical-glow overflow-hidden hover:border-blue-400/35">
                  <div className="relative h-52 shrink-0 overflow-hidden">
                    <Link href={`/product/${product.slug}`} className="block w-full h-full">
                      <img 
                        src={product.image_url || ''}
                        alt={`${product.name} - Spiritueller Begleiter`}
                        title={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                      />
                    </Link>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none"></div>
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 text-indigo-200 border border-indigo-400/30 backdrop-blur-md">
                        {categoryLabels[product.category] || "Begleiter"}
                      </span>
                    </div>
                    {product.is_bestseller && (
                      <div className="absolute top-3 right-3">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-200 border border-amber-400/30 backdrop-blur-md">
                          Beliebt
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 sm:p-7 flex-1 flex flex-col items-center justify-between text-center">
                    <div className="w-full flex flex-col items-center">
                      <h3 className="font-headline text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300 min-h-[3.5rem] flex items-center justify-center text-center leading-snug">
                        {product.name}
                      </h3>

                      <div className="my-2 text-center">
                        <span className="font-headline text-3xl font-bold tracking-tight text-white block">
                          {formatPrice(product.price)}
                        </span>
                        <span className="text-xs uppercase tracking-wider text-indigo-300/80 mt-1 block">
                          {product.focus || product.healing_property || 'Spirituelle Begleitung'}
                        </span>
                      </div>

                      <div className="w-12 h-0.5 bg-indigo-400/20 mx-auto my-3 rounded-full"></div>

                      <p className="font-body text-sm text-indigo-200/90 leading-relaxed mb-4 min-h-[4rem] text-center px-1">
                        {product.healing_property ? `${product.healing_property} – ${product.energy || 'Harmonisierend'}` : 'Harmonisierende Unterstützung für deinen Alltag.'}
                      </p>

                      {product.healing_properties && product.healing_properties.length > 0 && (
                        <div className="w-full mb-5 p-4 rounded-xl bg-slate-900/60 border border-indigo-400/15 text-center">
                          <p className="text-[11px] font-semibold uppercase tracking-widest text-indigo-300/90 mb-2">
                            Wirkung & Fokus
                          </p>
                          <ul className="text-xs text-indigo-100/90 space-y-1.5">
                            {product.healing_properties.slice(0, 3).map((property, i) => (
                              <li key={i} className="text-center leading-relaxed">
                                {property}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    
                    <div className="w-full mt-auto pt-4 border-t border-blue-400/10">
                      <Link 
                        href={`/product/${product.slug}`}
                        className="w-full inline-block"
                      >
                        <Button 
                          aria-label={`Details ansehen: ${product.name}`}
                          className="font-headline font-semibold text-sm bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-indigo-600/90 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500 text-white border border-indigo-400/30 hover:border-indigo-300/50 rounded-full w-full py-3 shadow-md shadow-indigo-950/40 hover:shadow-indigo-900/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                        >
                          <span>Details & Bestellen</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link href={createPageUrl("Shop")}>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-3.5 text-base border border-indigo-300/30 text-indigo-100 hover:text-white hover:bg-white/10 hover:border-indigo-300/60 rounded-full transition-all duration-300 flex items-center justify-center font-headline font-semibold group"
            >
              <span>Alle Begleiter & Horoskope ansehen</span>
              <ArrowRight className="w-4 h-4 ml-2 text-indigo-300 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
