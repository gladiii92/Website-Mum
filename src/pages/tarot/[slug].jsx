import React from "react";
import Head from "next/head";
import Link from "next/link";
import { tarotCards } from "../../data/tarotCards";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Card, CardContent } from "../../components/ui/Card";
import {
  Sparkles,
  Heart,
  Briefcase,
  Moon,
  Compass,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Star,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

export async function getStaticPaths() {
  const paths = tarotCards.map((card) => ({
    params: { slug: card.slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const cardIndex = tarotCards.findIndex((c) => c.slug === params.slug);
  const card = tarotCards[cardIndex] || null;

  if (!card) {
    return { notFound: true };
  }

  const prevCard = cardIndex > 0 ? tarotCards[cardIndex - 1] : tarotCards[tarotCards.length - 1];
  const nextCard = cardIndex < tarotCards.length - 1 ? tarotCards[cardIndex + 1] : tarotCards[0];

  return {
    props: {
      card,
      prevCard: { name: prevCard.name, slug: prevCard.slug, roman: prevCard.roman },
      nextCard: { name: nextCard.name, slug: nextCard.slug, roman: nextCard.roman }
    }
  };
}

export default function TarotCardDetail({ card, prevCard, nextCard }) {
  if (!card) return null;

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${card.name} Tarot Bedeutung – Liebe, Partnerschaft & Gedankenlegung`,
    "description": card.metaDescription,
    "image": "https://www.ursulaheinke.de/images/Kurse/Kartenlegen_test2.webp",
    "author": {
      "@type": "Person",
      "name": "Ursula Heinke",
      "url": "https://www.ursulaheinke.de",
      "jobTitle": "Spirituelle Lebensberaterin & Tarot-Expertin",
      "description": "Über 34.000 Beratungen mit 5,00 Sternen auf Questico. Spezialistin für Gedankenlegung und Seelenpartner."
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ursula Heinke",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ursulaheinke.de/images/logo.webp"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.ursulaheinke.de/tarot/${card.slug}`
    }
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Startseite",
        "item": "https://www.ursulaheinke.de/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Tarot-Lexikon",
        "item": "https://www.ursulaheinke.de/tarot"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": card.name,
        "item": `https://www.ursulaheinke.de/tarot/${card.slug}`
      }
    ]
  };

  const freeCheckWhatsappUrl = `https://wa.me/4915901276286?text=${encodeURIComponent(
    `Hallo Ursula, ich habe deine Deutung zur Tarotkarte "${card.name}" gelesen und möchte gerne den kostenlosen 3-Fragen Herzenspartner-Check per WhatsApp nutzen.`
  )}`;

  const whatsappInquiryUrl = `https://wa.me/4915901276286?text=${encodeURIComponent(
    `Hallo Ursula, ich habe deine Deutung zur Tarotkarte "${card.name}" gelesen und möchte gerne ein persönliches Intensiv-Reading (Seelen-Klarheits-Kompass, 149 €) buchen.`
  )}`;

  return (
    <>
      <Head>
        <title>{card.metaTitle}</title>
        <meta name="description" content={card.metaDescription} />
        <meta
          name="keywords"
          content={`${card.name} Tarot Bedeutung, ${card.name} Liebe, ${card.name} Gedanken Herzenspartner, Tarotkarte ${card.number}, Ursula Heinke`}
        />
        <meta property="og:title" content={card.metaTitle} />
        <meta property="og:description" content={card.metaDescription} />
        <meta property="og:url" content={`https://www.ursulaheinke.de/tarot/${card.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.ursulaheinke.de/images/Kurse/Kartenlegen_test2.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={card.metaTitle} />
        <meta name="twitter:description" content={card.metaDescription} />
        <meta name="twitter:image" content="https://www.ursulaheinke.de/images/Kurse/Kartenlegen_test2.webp" />
        <link rel="canonical" href={`https://www.ursulaheinke.de/tarot/${card.slug}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
      </Head>

      <div className="py-12 px-6 max-w-4xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-xs text-indigo-300/70">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Startseite
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li>
              <Link href="/tarot" className="hover:text-white transition-colors">
                Tarot-Lexikon
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li className="text-blue-200 font-semibold" aria-current="page">
              {card.name}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-4"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-headline text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-bold border border-blue-400/30">
              Karte {card.roman} ({card.number})
            </span>
            <span className="font-body text-xs px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-400/20 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-indigo-400" />
              {card.element}
            </span>
            <span className="text-xs text-indigo-300/60 font-body italic">
              Englisch: {card.englishName}
            </span>
          </div>

          <h1 className="font-headline text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-100 via-indigo-200 to-blue-300 bg-clip-text text-transparent">
            {card.name} – Bedeutung im Tarot
          </h1>

          <div className="flex flex-wrap gap-2 pt-2">
            {card.keywords.map((kw, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-slate-900/80 border border-blue-400/20 text-indigo-200"
              >
                #{kw}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Quick Summary Callout */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-blue-400/20 shadow-lg mb-10">
          <div className="flex items-start gap-3">
            <Compass className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-headline text-base font-bold text-blue-200 mb-1">
                Kernbotschaft der Karte
              </h3>
              <p className="font-body text-indigo-100/90 leading-relaxed text-sm md:text-base">
                {card.summary}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-10 text-indigo-100">
          {/* 1. Allgemeine Bedeutung */}
          <section className="space-y-3">
            <h2 className="font-headline text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
              Allgemeine Bedeutung & Seelenlehre
            </h2>
            <p className="font-body text-base text-indigo-200/90 leading-relaxed">
              {card.generalMeaning}
            </p>
          </section>

          {/* 2. Liebe & Gedanken des Herzenspartners (Highlight Box) */}
          <section className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-950/70 via-purple-950/30 to-slate-900/90 border-2 border-rose-500/30 shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-rose-300 text-xs font-bold uppercase tracking-wider">
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
              Ursulas Spezialgebiet: Gedankenlegung & Liebe
            </div>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-white">
              {card.name}: Bedeutung für Liebe & Herzenspartner
            </h2>
            <p className="font-body text-base md:text-lg text-indigo-100 leading-relaxed">
              {card.loveMeaning}
            </p>
          </section>

          {/* 3. Beruf & Finanzen */}
          <section className="space-y-3">
            <h2 className="font-headline text-2xl font-bold text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-indigo-400" />
              Beruf, Berufung & Finanzen
            </h2>
            <p className="font-body text-base text-indigo-200/90 leading-relaxed">
              {card.careerMeaning}
            </p>
          </section>

          {/* 4. Schattenseite / Umgekehrt */}
          <section className="space-y-3 p-6 rounded-2xl bg-slate-900/40 border border-blue-400/15">
            <h2 className="font-headline text-xl font-bold text-indigo-200 flex items-center gap-2">
              <Moon className="w-5 h-5 text-indigo-400" />
              Schattenaspekte & umgekehrte Karte
            </h2>
            <p className="font-body text-sm text-indigo-300/80 leading-relaxed">
              {card.shadowMeaning}
            </p>
          </section>

          {/* 5. Ursulas Seelenrat */}
          <section className="p-6 rounded-2xl bg-indigo-950/40 border border-indigo-400/30 space-y-2">
            <h3 className="font-headline text-base font-bold text-amber-300 uppercase tracking-wide">
              Ursulas Seelenrat zu {card.name}
            </h3>
            <p className="font-body text-base text-white font-medium italic leading-relaxed">
              "{card.advice}"
            </p>
          </section>
        </div>

        {/* Conversion Funnel Box */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/80 to-slate-900 border border-indigo-400/30 shadow-2xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/15 text-indigo-200 text-xs font-semibold uppercase tracking-wider border border-indigo-400/20">
            <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
            34.000+ Beratungen mit 5,00 Sternen
          </div>

          <h3 className="font-headline text-3xl font-bold text-white max-w-xl mx-auto">
            Möchtest du wissen, was {card.name} in deiner ganz persönlichen Situation bedeutet?
          </h3>

          <p className="font-body text-indigo-200 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Allgemeine Deutungen geben die Richtung vor – doch erst eine individuelle Gedankenlegung deckt auf, was dein Herzenspartner aktuell fühlt, welche Blockaden euch trennen und wann die Wende eintritt.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={freeCheckWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kostenlosen 3-Fragen Herzenspartner-Check per WhatsApp anfordern"
              className="font-headline font-semibold w-full sm:w-auto bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:via-teal-500 hover:to-emerald-500 text-white border border-emerald-400/40 rounded-full px-8 py-3.5 text-base shadow-xl shadow-emerald-950/50 flex items-center justify-center gap-2.5 group/btn transition-all"
            >
              <MessageCircle className="w-5 h-5 text-emerald-200 group-hover/btn:scale-110 transition-transform" />
              <span>3-Fragen Check (100% Gratis per WhatsApp)</span>
            </a>
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="60 Min Seelen-Klarheits-Kompass buchen"
              className="font-headline font-semibold w-full sm:w-auto bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-600 hover:from-indigo-400 hover:via-purple-500 hover:to-indigo-500 text-white border border-indigo-300/30 rounded-full px-7 py-3.5 text-base shadow-xl shadow-indigo-950/60 flex items-center justify-center gap-2.5 group/btn transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-300 group-hover/btn:scale-110 transition-transform" />
              <span>Intensiv-Reading (149 €)</span>
            </a>
          </div>

          <div className="pt-1">
            <Link
              href="/services"
              className="text-xs text-indigo-300/80 hover:text-white underline transition-colors"
            >
              Oder alle Coaching-Angebote & die 10-Wochen Ausbildung ansehen →
            </Link>
          </div>

          <p className="text-xs text-indigo-300/60 pt-2 inline-flex items-center justify-center gap-2 flex-wrap">
            <span>Audio-Antwort von Ursula Heinke</span>
            <span className="inline-block w-1 h-1 rounded-full bg-indigo-400 shadow-[0_0_6px_rgba(129,140,248,0.8)]"></span>
            <span>100% vertraulich</span>
            <span className="inline-block w-1 h-1 rounded-full bg-indigo-400 shadow-[0_0_6px_rgba(129,140,248,0.8)]"></span>
            <span>Ohne Risiko & ohne Abo</span>
          </p>
        </div>

        {/* Prev / Next Card Navigation */}
        <div className="mt-12 pt-8 border-t border-blue-400/20 grid grid-cols-2 gap-4">
          <Link href={`/tarot/${prevCard.slug}`} className="group">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-blue-400/15 hover:border-blue-400/40 transition-all">
              <span className="text-[11px] text-indigo-300/60 flex items-center gap-1 mb-1">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                Vorherige Karte
              </span>
              <p className="font-headline text-sm font-bold text-blue-200 group-hover:text-white transition-colors">
                {prevCard.roman}. {prevCard.name}
              </p>
            </div>
          </Link>

          <Link href={`/tarot/${nextCard.slug}`} className="group text-right">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-blue-400/15 hover:border-blue-400/40 transition-all">
              <span className="text-[11px] text-indigo-300/60 flex items-center justify-end gap-1 mb-1">
                Nächste Karte
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <p className="font-headline text-sm font-bold text-blue-200 group-hover:text-white transition-colors">
                {nextCard.roman}. {nextCard.name}
              </p>
            </div>
          </Link>
        </div>

        {/* Back to Hub */}
        <div className="mt-8 text-center">
          <Link
            href="/tarot"
            className="text-xs border border-blue-400/30 text-indigo-300 hover:text-white hover:bg-white/10 rounded-full px-6 py-2.5 inline-flex items-center gap-2 transition-all"
          >
            ← Zurück zur Tarot-Übersicht (Alle 22 Karten)
          </Link>
        </div>
      </div>
    </>
  );
}

