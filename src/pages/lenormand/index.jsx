// src/pages/lenormand/index.jsx
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { lenormandCards } from "../../data/lenormandCards";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { MessageCircle, ArrowRight, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function LenormandIndex() {
  const [search, setSearch] = useState("");
  const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false;

  const filteredCards = lenormandCards.filter(
    (card) =>
      card.name.toLowerCase().includes(search.toLowerCase()) ||
      card.keywords.some((kw) => kw.toLowerCase().includes(search.toLowerCase())) ||
      card.playingCard.toLowerCase().includes(search.toLowerCase()) ||
      String(card.number).includes(search)
  );

  const whatsappInquiryUrl = `https://wa.me/4915901276286?text=${encodeURIComponent(
    "Hallo Ursula, ich habe dein Lenormand-Lexikon auf deiner Webseite besucht und möchte gerne einen Termin für eine persönliche Gedankenlegung mit Lenormandkarten (Seelen-Klarheits-Kompass) anfragen."
  )}`;

  return (
    <>
      <Head>
        <title>Lenormandkarten Bedeutung: Alle 36 Karten im Überblick | Ursula Heinke</title>
        <meta
          name="description"
          content="Alle 36 Lenormandkarten mit tiefen Bedeutungen für Liebe, Herzenspartner, Beruf und Zukunft. Ursulas exklusives Lenormand-Lexikon."
        />
        <meta
          name="keywords"
          content="Lenormandkarten Bedeutung, Lenormand Liebe, Lenormand 36 Karten, Gedanken des Herzenspartners, Ursula Heinke"
        />
        <meta property="og:title" content="Lenormandkarten Bedeutung: Alle 36 Karten im Überblick" />
        <meta
          property="og:description"
          content="Entdecke die Botschaften aller 36 Lenormand-Karten für Liebe, Partnerschaft und Schicksal."
        />
        <meta property="og:url" content="https://www.ursulaheinke.de/lenormand" />
        <link rel="canonical" href="https://www.ursulaheinke.de/lenormand" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Lenormandkarten Bedeutung – Alle 36 Karten im Überblick",
              "description": "Umfassendes Verzeichnis aller 36 Lenormand-Karten mit Liebesbedeutung von Ursula Heinke.",
              "url": "https://www.ursulaheinke.de/lenormand",
              "hasPart": lenormandCards.map((card) => ({
                "@type": "Article",
                "name": `${card.name} – Bedeutung im Lenormand`,
                "url": `https://www.ursulaheinke.de/lenormand/${card.slug}`,
              })),
            }),
          }}
        />
      </Head>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/15 text-blue-200 border border-blue-400/25 text-xs font-semibold uppercase tracking-widest">
            36 Wahrsagekarten nach Mlle Lenormand
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-100 via-indigo-200 to-blue-300 bg-clip-text text-transparent">
            Lenormandkarten: Bedeutung & Seelenlehre
          </h1>
          <p className="font-body text-indigo-200/90 text-base md:text-lg leading-relaxed">
            Tauche ein in die Symbolsprache der 36 Lenormand-Karten. Erfahre, was die Karten über deinen Herzenspartner, eure Zukunft, karmische Blockaden und deine nächsten Schritte offenbaren.
          </p>

          {/* Search Field */}
          <div className="pt-4 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-indigo-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <Input
              type="text"
              placeholder="Karte suchen (z.B. Herz, Ring, Reiter, 24)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-11 pr-4 py-2.5 rounded-full bg-slate-900/60 border-blue-400/20 text-indigo-100 placeholder:text-indigo-400/60 focus:border-indigo-400"
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
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-amber-300 text-xs font-semibold uppercase tracking-widest block">
              Persönliche Legung mit Ursula Heinke
            </span>
            <h3 className="font-headline text-2xl font-bold text-white">
              Brauchst du eine treffsichere Gedankenlegung auf deinen Herzenspartner?
            </h3>
            <p className="text-sm text-indigo-200/80 max-w-xl">
              Im Seelen-Klarheits-Kompass (60 Min) kombiniert Ursula Tarot und Lenormand, um tief in die wahren Absichten deines Gegenübers zu blicken.
            </p>
          </div>
          <a
            href={whatsappInquiryUrl}
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
                        Karte {card.number} • {card.playingCard}
                      </span>
                    </div>

                    <h3 className="font-headline text-2xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300 text-center mt-2 mb-1">
                      {card.name}
                    </h3>

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
                    <Link href={`/lenormand/${card.slug}`} className="w-full inline-block">
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

