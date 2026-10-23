import React, { useState, useMemo, useRef } from "react";
import { Product, Categories } from "../entities/Product";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Star, Sparkles, ShoppingBag, Clock, ArrowRight, Droplet, Brush, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import Head from "next/head"; 
import Link from "next/link";
import { createPageUrl, formatPrice } from "../utils";
import { useReducedMotion } from "framer-motion";

export default function Shop() {
  const [products] = useState(Product);
  const [activeCategory, setActiveCategory] = useState("all");
  const productsRef = useRef(null);
  const isMobile = (typeof window !== 'undefined' ? window.innerWidth : 1024) < 768;

  const filteredProducts = useMemo(() => {
    if (!products || products.length === 0) return [];
    let filtered = activeCategory === "all"
      ? [...products]
      : products.filter(p => p.category?.toLowerCase() === activeCategory.toLowerCase());
    return filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }, [products, activeCategory]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const categoryLabels = {
    all: "Alle Angebote",
    meditation: "Geführte Meditationen",
    wassersteine: "Heil- & Wassersteine",
    horoskope: "Persönliche Horoskope",
    heilketten: "Amulette & Heilketten"
  };

  const categoryIcons = {
    meditation: Headphones,
    wassersteine: Droplet,
    horoskope: Star,
    heilketten: Sparkles
  };

  const categoryPreviews = Categories
    .filter(cat => categoryLabels[cat.name])
    .map(cat => ({
      category: cat.name,
      count: products.filter(p => p.category === cat.name).length,
      teaserImage: cat.preview_image_url,
      teaserName: cat.display_name,
      description: cat.description
    }));

  const shopSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Ursula Heinke – Spirituelle Schätze Shop",
    "url": "https://www.ursulaheinke.de/shop",
    "description": "Handverlesene Heil- und Wassersteine, geführte Meditationen, Horoskope und Schutzamulette.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Spirituelle Begleiter & Meditationen",
      "itemListElement": Product.map(p => ({
        "@type": "Offer",
        "url": `https://www.ursulaheinke.de/product/${p.slug}`,
        "itemOffered": {
          "@type": "Product",
          "name": p.name,
          "image": `https://www.ursulaheinke.de${p.image_url}`,
          "brand": {
            "@type": "Brand",
            "name": "Ursula Heinke"
          }
        },
        "price": p.price,
        "priceCurrency": "EUR",
        "priceValidUntil": "2027-12-31",
        "availability": p.in_stock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": p.category === "meditation" ? "0.00" : "4.90",
            "currency": "EUR"
          },
          "shippingDestination": {
            "@type": "DefinedRegion",
            "addressCountry": "DE"
          },
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "handlingTime": {
              "@type": "QuantitativeValue",
              "minValue": 0,
              "maxValue": 1,
              "unitCode": "DAY"
            },
            "transitTime": {
              "@type": "QuantitativeValue",
              "minValue": 1,
              "maxValue": 3,
              "unitCode": "DAY"
            }
          }
        },
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "applicableCountry": "DE",
          "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
          "merchantReturnDays": 14,
          "returnMethod": "https://schema.org/ReturnByMail",
          "returnFees": "https://schema.org/ReturnShippingFees"
        }
      }))
    }
  };

  return (
    <>
      <Head>
        <title>Shop für spirituelle Begleiter & Meditationen | Ursula Heinke</title>
        <meta name="description" content="Handverlesene Heilsteine, geführte Audio-Meditationen (MP3) und persönliche Horoskope von Ursula Heinke. Energetische Begleiter für deine innere Balance." />
        <meta name="keywords" content="Heilsteine kaufen, Wassersteine Energetisierung, Meditation Innerer Frieden MP3, Horoskop Ursula Heinke, spiritueller Shop" />
        <meta property="og:title" content="Shop für spirituelle Begleiter | Ursula Heinke" />
        <meta property="og:description" content="Handverlesene Heilsteine, MP3-Meditationen und Horoskope für deine Seelenreise." />
        <meta property="og:image" content="https://www.ursulaheinke.de/images/Kurse/ogbild.webp" />
        <meta property="og:url" content="https://www.ursulaheinke.de/shop" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.ursulaheinke.de/shop" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(shopSchema) }}
        />
      </Head>

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
            <p className="font-body text-base md:text-lg text-indigo-200 max-w-2xl mx-auto mb-4">
              Handverlesene Heilsteine, kraftvolle Schmuckstücke, mystische Kerzen und persönliche Horoskope für Deine spirituelle Reise
            </p>
          </motion.div>

          {/* Kategorie-Vorschau-Karten: Ruhiges, zentriertes High-End Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
            {categoryPreviews.map((preview, index) => {
              return (
                <motion.div
                  key={preview.category}
                  initial={isMobile ? {} : { opacity: 0, y: 20 }}
                  whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
                  transition={isMobile ? {} : { duration: 0.5, delay: index * 0.1 }}
                  onClick={() => handleCategoryChange(preview.category)}
                  className="cursor-pointer h-full flex flex-col"
                >
                  <Card className="group h-full flex flex-col bg-slate-900/40 border border-blue-400/15 shadow-lg hover:shadow-blue-500/10 transition-all duration-500 rounded-2xl mystical-glow overflow-hidden hover:border-blue-400/35">
                    <div className="relative h-48 shrink-0 overflow-hidden">
                      <img
                        src={preview.teaserImage || ''}
                        alt={`${categoryLabels[preview.category]} - Vorschau`}
                        title={categoryLabels[preview.category]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                      <div className="absolute top-3 right-3">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 text-indigo-200 border border-indigo-400/30 backdrop-blur-md">
                          {preview.count} {preview.count === 1 ? 'Produkt' : 'Produkte'}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7 flex-1 flex flex-col items-center justify-between text-center">
                      <div className="w-full flex flex-col items-center">
                        <h3 className="font-headline text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300 text-center leading-snug min-h-[3rem] flex items-center justify-center">
                          {categoryLabels[preview.category]}
                        </h3>

                        <div className="w-12 h-0.5 bg-indigo-400/20 mx-auto my-3 rounded-full"></div>

                        <p className="font-body text-sm text-indigo-200/90 leading-relaxed mb-4 text-center px-1">
                          {preview.description}
                        </p>
                      </div>

                      <div className="w-full mt-auto pt-2">
                        <Button 
                          aria-label={`Kategorie ${categoryLabels[preview.category]} ansehen`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCategoryChange(preview.category);
                          }}
                          className="font-headline font-semibold text-sm bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-indigo-600/90 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500 text-white border border-indigo-400/30 hover:border-indigo-300/50 rounded-full w-full py-2.5 shadow-md shadow-indigo-950/40 hover:shadow-indigo-900/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                        >
                          <span>Kategorie ansehen</span>
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
              {Object.keys(categoryLabels).map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategoryChange(cat)}
                    className={`font-headline text-sm font-semibold px-5 py-2 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-600 text-white shadow-md shadow-indigo-950/50 border border-indigo-300/40"
                        : "text-indigo-200 hover:text-white hover:bg-white/10 border border-transparent"
                    }`}
                  >
                    {categoryLabels[cat]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Produkte-Container mit Ref für Scroll */}
          <div ref={productsRef}>
            {/* Neu: Immer sichtbar – Visueller Trenner und dynamische Anzahl der Produkte */}
            <div className="border-t border-blue-400/20 my-6"></div>
            <p className="font-body text-base text-center text-indigo-200 font-semibold mb-6">
              {filteredProducts.length} Produkte in dieser Kategorie
            </p>
            <div className="border-t border-blue-400/20 my-6"></div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
                {filteredProducts.map((product, index) => {
                  const CategoryIcon = categoryIcons[product.category] || Sparkles;
                  
                  return (
                    <motion.div
                      key={product.id ?? `product-${index}`}
                      initial={isMobile ? {} : { opacity: 0, y: 30 }}
                      whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
                      transition={isMobile ? {} : { duration: 0.6, delay: index * 0.1 }}
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
                          {product.featured && (
                            <div className="absolute top-3 right-3">
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-200 border border-amber-400/30 backdrop-blur-md">
                                Bestseller
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
                              aria-label={`Details ansehen: ${product.name}`}
                              className="font-headline font-semibold text-sm bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-indigo-600/90 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500 text-white border border-indigo-400/30 hover:border-indigo-300/50 rounded-full w-full py-3 shadow-md shadow-indigo-950/40 hover:shadow-indigo-900/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                            >
                              <span>Details & Bestellen</span>
                              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </Link>
                          </div>
                        </div>
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
                  className="font-headline text-base mt-4 px-6 py-2.5 text-blue-200 border-blue-400/50 hover:bg-blue-400/10 rounded-full"
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
