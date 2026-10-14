import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { tarotCards } from "../../data/tarotCards";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Sparkles, Heart, ArrowRight, Compass, MessageCircle, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function TarotIndex() {
  const [searchTerm, setSearchTerm] = useState("");
  const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false;

  const filteredCards = tarotCards.filter(card =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Tarotkarten Bedeutungen – Das große Tarot-Lexikon der Großen Arkana",
    "description": "Deute die 22 Karten der Großen Arkana für Liebe, Partnerschaft, Seelenplan und Gedanken des Herzenspartners mit Ursula Heinke.",
    "url": "https://www.ursulaheinke.de/tarot",
    "author": {
      "@type": "Person",
      "name": "Ursula Heinke",
      "url": "https://www.ursulaheinke.de"
    },
    "hasPart": tarotCards.map(card => ({
      "@type": "Article",
      "name": `${card.name} Tarot Bedeutung`,
      "url": `https://www.ursulaheinke.de/tarot/${card.slug}`
    }))
  };

  return (
    <>
      <Head>
        <title>Tarotkarten Bedeutungen – Das große Liebes- & Seelen-Lexikon | Ursula Heinke</title>
        <meta
          name="description"
          content="Alle 22 Karten der Großen Arkana im Detail: Bedeutung für Liebe, Partnerschaft, Gedanken des Herzenspartners & Seelenverbindungen. Fundiert gedeutet von Ursula Heinke (34.000+ Beratungen)."
        />
        <meta name="keywords" content="Tarot Kartenlegen Bedeutung, Große Arkana Liebe, Gedanken Herzenspartner Tarot, Tarotkarten lernen, Ursula Heinke" />
        <meta property="og:title" content="Tarotkarten Bedeutungen – Liebe & Seelen-Lexikon | Ursula Heinke" />
        <meta property="og:description" content="Entschlüssle die 22 Karten der Großen Arkana. Erfahre, was dein Herzenspartner denkt und fühlt." />
        <meta property="og:url" content="https://www.ursulaheinke.de/tarot" />
        <link rel="canonical" href="https://www.ursulaheinke.de/tarot" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="py-16 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase">
            <Compass className="w-3.5 h-3.5 text-indigo-400" />
            Das Große Tarot-Lexikon der Liebe
          </div>

          <h1 className="font-headline text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-indigo-200 via-blue-200 to-indigo-300 bg-clip-text text-transparent">
              Tarotkarten Bedeutungen
            </span>
          </h1>

          <p className="font-body text-lg md:text-xl text-indigo-200/90 max-w-3xl mx-auto leading-relaxed">
            Die 22 Archetypen der Großen Arkana als Spiegel deiner Seele. Erfahre fundiert, welche Botschaft die Karten für deine Liebe, die Gedanken deines Herzenspartners und deinen persönlichen Lebensweg bereithalten.
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto pt-4">
            <input
              type="text"
              placeholder="Karte oder Stichwort suchen (z.B. Liebe, Neuanfang, Turm)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 rounded-full bg-slate-900/60 border border-blue-400/30 text-white placeholder-indigo-300/50 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
          </div>
        </motion.div>

        {/* Quick CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/80 via-indigo-950/40 to-slate-900/80 border border-blue-400/20 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <Star className="w-4 h-4 fill-amber-300" />
              Persönliche Legung mit Ursula Heinke
            </div>
            <h3 className="font-headline text-2xl font-bold text-white">
              Brauchst du eine treffsichere Gedankenlegung auf deinen Herzenspartner?
            </h3>
            <p className="text-sm text-indigo-200/80 max-w-xl">
              Im Seelen-Klarheits-Kompass (60 Min) schaut Ursula tief in die Gefühle deines Gegenübers und gibt dir glasklare Handlungsschritte mit.
            </p>
          </div>
          <a
            href="https://wa.me/4915901276286?text=Hallo%20Ursula%2C%20ich%20habe%20dein%20Tarot-Lexikon%20gelesen%20und%20m%C3%B6chte%20gerne%20einen%20pers%C3%B6nlichen%20Termin%20f%C3%BCr%20ein%20Reading%20(Seelen-Klarheits-Kompass)%20buchen."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-full sm:w-auto"
          >
            <Button className="font-headline font-semibold bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-600 hover:from-indigo-400 hover:via-purple-500 hover:to-indigo-500 text-white border border-indigo-300/30 rounded-full px-7 py-3.5 text-sm flex items-center justify-center gap-2 group/btn shadow-md shadow-indigo-950/40 transition-all">
              <MessageCircle className="w-4 h-4 text-emerald-300 group-hover/btn:scale-110 transition-transform" />
              <span>Termin per WhatsApp anfragen</span>
            </Button>
          </a>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredCards.map((card, index) => (
            <motion.div
              key={card.slug}
              initial={isMobile ? {} : { opacity: 0, y: 20 }}
              whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
              transition={isMobile ? {} : { duration: 0.5, delay: (index % 6) * 0.05 }}
              className="h-full flex flex-col"
            >
              <Card className="group h-full flex flex-col bg-slate-900/40 border border-blue-400/15 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 rounded-2xl mystical-glow overflow-hidden hover:border-blue-400/35">
                <div className="p-6 sm:p-7 flex-1 flex flex-col items-center justify-between text-center">
                  <div className="w-full flex flex-col items-center">
                    <div className="mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-200 border border-blue-400/25 uppercase tracking-widest">
                        Karte {card.roman} • {card.element}
                      </span>
                    </div>

                    <h3 className="font-headline text-2xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300 text-center mt-2 mb-1">
                      {card.name}
                    </h3>
                    <p className="text-xs text-indigo-300/70 font-body italic text-center mb-3">
                      {card.englishName}
                    </p>

                    <div className="w-12 h-0.5 bg-indigo-400/20 mx-auto my-3 rounded-full"></div>

                    <p className="font-body text-sm text-indigo-200/90 leading-relaxed mb-4 min-h-[4.5rem] text-center px-1">
                      {card.summary}
                    </p>

                    <div className="flex flex-wrap justify-center gap-1.5 mb-5 min-h-[3rem]">
                      {card.keywords.map((kw, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-800/80 border border-indigo-400/20 text-indigo-200"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="w-full mt-auto pt-4 border-t border-blue-400/10">
                    <Link href={`/tarot/${card.slug}`} className="w-full inline-block">
                      <Button
                        variant="outline"
                        aria-label={`Bedeutung von ${card.name} lesen`}
                        className="font-headline text-xs border border-blue-400/30 text-blue-200 hover:text-white hover:bg-white/10 hover:border-indigo-300/60 rounded-full w-full py-2.5 transition-all flex items-center justify-center gap-2 group/btn"
                      >
                        <span>Vollständige Bedeutung lesen</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

