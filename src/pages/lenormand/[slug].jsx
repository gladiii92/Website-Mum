// src/pages/lenormand/[slug].jsx
import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  lenormandCards,
  getLenormandBySlug,
  getAllLenormandSlugs,
} from "../../data/lenormandCards";
import { Button } from "../../components/ui/Button";
import {
  MessageCircle,
  ChevronRight,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

export async function getStaticPaths() {
  const slugs = getAllLenormandSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const card = getLenormandBySlug(params.slug);

  if (!card) {
    return {
      notFound: true,
    };
  }

  const currentIndex = lenormandCards.findIndex((c) => c.slug === card.slug);
  const prevCard =
    currentIndex > 0
      ? lenormandCards[currentIndex - 1]
      : lenormandCards[lenormandCards.length - 1];
  const nextCard =
    currentIndex < lenormandCards.length - 1
      ? lenormandCards[currentIndex + 1]
      : lenormandCards[0];

  return {
    props: {
      card,
      prevCard: { name: prevCard.name, slug: prevCard.slug, number: prevCard.number },
      nextCard: { name: nextCard.name, slug: nextCard.slug, number: nextCard.number },
    },
  };
}

export default function LenormandCardDetail({ card, prevCard, nextCard }) {
  if (!card) return null;

  const pageTitle = `${card.name}: Bedeutung im Lenormand (Liebe, Beruf & Schicksal) | Ursula Heinke`;
  const metaDescription = `${card.name} (Karte ${card.number}): Tiefgründige Deutung für Liebe, Gedanken des Herzenspartners, Finanzen und Zukunft von Lebensberaterin Ursula Heinke.`;
  const canonicalUrl = `https://www.ursulaheinke.de/lenormand/${card.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${card.name} – Bedeutung im Lenormand`,
    "description": metaDescription,
    "author": {
      "@type": "Person",
      "name": "Ursula Heinke",
      "url": "https://www.ursulaheinke.de/about",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ursula Heinke Lebensberatung",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ursulaheinke.de/images/logo.webp",
      },
    },
    "mainEntityOfPage": canonicalUrl,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Startseite",
        "item": "https://www.ursulaheinke.de",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Lenormand-Lexikon",
        "item": "https://www.ursulaheinke.de/lenormand",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": card.name,
        "item": canonicalUrl,
      },
    ],
  };

  const whatsappInquiryUrl = `https://wa.me/4915901276286?text=${encodeURIComponent(
    `Hallo Ursula, ich habe deine Deutung zu der Lenormandkarte "${card.name}" gelesen und möchte gerne eine persönliche Gedankenlegung (Seelen-Klarheits-Kompass, 149 €) für meine Situation anfragen.`
  )}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content={`Lenormand ${card.name}, ${card.name} Bedeutung Liebe, Lenormand Karte ${card.number}, Herzenspartner Gedankenlegung, Ursula Heinke`}
        />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={canonicalUrl} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* Breadcrumb */}
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
              <Link href="/lenormand" className="hover:text-white transition-colors">
                Lenormand-Lexikon
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
            <span className="font-headline text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-bold border border-blue-400/30 uppercase tracking-widest">
              Karte {card.number} • {card.playingCard}
            </span>
          </div>

          <h1 className="font-headline text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-100 via-indigo-200 to-blue-300 bg-clip-text text-transparent">
            {card.name} – Bedeutung im Lenormand
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
        <div className="p-6 md:p-7 rounded-2xl bg-slate-900/60 border border-blue-400/20 shadow-lg mb-10">
          <h3 className="font-headline text-base font-bold text-blue-200 mb-2">
            Kernbotschaft der Karte
          </h3>
          <p className="font-body text-indigo-100/90 leading-relaxed text-sm md:text-base">
            {card.summary}
          </p>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-10 text-indigo-100">
          {/* 1. Allgemeine Bedeutung */}
          <section className="space-y-3">
            <h2 className="font-headline text-2xl font-bold text-white">
              Allgemeine Bedeutung & Seelenlehre
            </h2>
            <p className="font-body text-base text-indigo-200/90 leading-relaxed">
              {card.generalMeaning}
            </p>
          </section>

          {/* 2. Liebe & Gedanken des Herzenspartners */}
          <section className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-950/70 via-purple-950/30 to-slate-900/90 border border-rose-500/30 shadow-xl space-y-4">
            <div className="text-rose-300 text-xs font-bold uppercase tracking-widest">
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
            <h2 className="font-headline text-2xl font-bold text-white">
              Beruf, Berufung & Finanzen
            </h2>
            <p className="font-body text-base text-indigo-200/90 leading-relaxed">
              {card.careerMeaning}
            </p>
          </section>

          {/* 4. Schattenseite */}
          <section className="space-y-3 p-6 rounded-2xl bg-slate-900/40 border border-blue-400/15">
            <h2 className="font-headline text-xl font-bold text-indigo-200">
              Schattenaspekte & Warnung
            </h2>
            <p className="font-body text-sm text-indigo-300/80 leading-relaxed">
              {card.shadowMeaning}
            </p>
          </section>

          {/* 5. Ursulas Seelenrat */}
          <section className="p-6 md:p-7 rounded-2xl bg-indigo-950/40 border border-indigo-400/30 space-y-2 text-center">
            <h3 className="font-headline text-xs font-bold text-amber-300 uppercase tracking-widest">
              Ursulas Seelenrat zu {card.name}
            </h3>
            <p className="font-body text-base text-white font-medium italic leading-relaxed max-w-2xl mx-auto">
              "{card.advice}"
            </p>
          </section>
        </div>

        {/* Conversion Funnel Box */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/80 to-slate-900 border border-indigo-400/30 shadow-2xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/15 text-indigo-200 text-xs font-semibold uppercase tracking-wider border border-indigo-400/20">
            34.000+ Beratungen mit 5,00 Sternen
          </div>

          <h3 className="font-headline text-3xl font-bold text-white max-w-xl mx-auto">
            Möchtest du wissen, was {card.name} in deiner ganz persönlichen Situation bedeutet?
          </h3>

          <p className="font-body text-indigo-200 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Einzelne Karten zeigen die Richtung – doch erst eine gezielte Lenormand-Tafel deckt auf, was dein Herzenspartner aktuell fühlt, welche Blockaden euch trennen und wann die Wende eintritt.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="font-headline font-semibold w-full sm:w-auto bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-600 hover:from-indigo-400 hover:via-purple-500 hover:to-indigo-500 text-white border border-indigo-300/30 rounded-full px-8 py-3.5 text-base shadow-xl shadow-indigo-950/60 flex items-center justify-center gap-2.5 group/btn transition-all">
                <MessageCircle className="w-5 h-5 text-emerald-300 group-hover/btn:scale-110 transition-transform" />
                <span>Persönliches Reading per WhatsApp buchen</span>
              </Button>
            </a>
            <Link href="/services">
              <Button
                variant="outline"
                className="font-headline w-full sm:w-auto border border-indigo-300/30 text-indigo-100 hover:text-white hover:bg-white/10 rounded-full px-7 py-3.5 text-base transition-all"
              >
                Alle Coaching-Angebote
              </Button>
            </Link>
          </div>

          <p className="text-xs text-indigo-300/60 pt-2">
            60 Min Seelen-Klarheits-Kompass • Diskrete persönliche Beratung • Schnelle Terminvergabe
          </p>
        </div>

        {/* Prev / Next Card Navigation */}
        <div className="mt-12 pt-8 border-t border-blue-400/20 grid grid-cols-2 gap-4">
          <Link href={`/lenormand/${prevCard.slug}`} className="group">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-blue-400/15 hover:border-blue-400/40 transition-all">
              <span className="text-[11px] text-indigo-300/60 flex items-center gap-1 mb-1">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                Vorherige Karte
              </span>
              <p className="font-headline text-sm font-bold text-blue-200 group-hover:text-white transition-colors">
                {prevCard.number}. {prevCard.name}
              </p>
            </div>
          </Link>

          <Link href={`/lenormand/${nextCard.slug}`} className="group text-right">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-blue-400/15 hover:border-blue-400/40 transition-all">
              <span className="text-[11px] text-indigo-300/60 flex items-center justify-end gap-1 mb-1">
                Nächste Karte
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <p className="font-headline text-sm font-bold text-blue-200 group-hover:text-white transition-colors">
                {nextCard.number}. {nextCard.name}
              </p>
            </div>
          </Link>
        </div>

        {/* Back to Hub */}
        <div className="mt-8 text-center">
          <Link href="/lenormand">
            <Button
              variant="outline"
              className="text-xs border border-blue-400/30 text-indigo-300 hover:text-white rounded-full px-6 py-2"
            >
              ← Zurück zur Lenormand-Übersicht (Alle 36 Karten)
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

