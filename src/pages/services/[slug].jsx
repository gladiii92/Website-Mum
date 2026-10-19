// src/pages/services/[slug].jsx
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  ServiceData
} from "../../entities/Service";
import { formatPrice } from "../../utils";
import {
  Sparkles,
  Heart,
  Star,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Calendar,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  HelpCircle,
  UserCheck,
  XCircle,
  Award,
  Compass,
  Check
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/Card";

export async function getStaticPaths() {
  const slugs = getAllServiceSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return { notFound: true };
  }

  // Related services (other featured services)
  const relatedServices = ServiceData
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return {
    props: {
      service,
      relatedServices
    }
  };
}

export default function ServiceDetail({ service, relatedServices }) {
  if (!service) return null;

  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const typeLabels = {
    all: "Alle Angebote",
    readings: "Readings & Beratung",
    ausbildung: "Zertifizierte Ausbildung",
    gruppenkurs: "Gruppenkurse & Waldbaden",
    workshop: "Workshops & Retreats"
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  const canonicalUrl = `https://www.ursulaheinke.de/services/${service.slug}`;
  const whatsappUrl = `https://wa.me/4915901276286?text=${encodeURIComponent(
    service.whatsappMessage ||
      `Hallo Ursula, ich habe dein Angebot "${service.title}" auf deiner Webseite gesehen und möchte gerne einen Termin vereinbaren.`
  )}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": service.type === "ausbildung" || service.type === "workshop" ? "Course" : "Service",
    "name": service.title,
    "description": service.metaDescription,
    "image": `https://www.ursulaheinke.de${service.image_url}`,
    "url": canonicalUrl,
    "provider": {
      "@type": "Person",
      "name": "Ursula Heinke",
      "url": "https://www.ursulaheinke.de/about",
      "jobTitle": "Spirituelle Lebensberaterin & Coach"
    },
    "offers": {
      "@type": "Offer",
      "price": service.price,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": canonicalUrl
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "34500",
      "bestRating": "5"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Startseite",
        "item": "https://www.ursulaheinke.de"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Coaching & Angebote",
        "item": "https://www.ursulaheinke.de/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": canonicalUrl
      }
    ]
  };

  const faqSchema = service.faq && service.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faq.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  return (
    <>
      <Head>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta
          name="keywords"
          content={`${service.title}, Lebensberatung Coburg, Seelenpartner Gedankenlegung, Tarot Beratung, Ursula Heinke`}
        />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`https://www.ursulaheinke.de${service.image_url}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.metaTitle} />
        <meta name="twitter:description" content={service.metaDescription} />
        <meta name="twitter:image" content={`https://www.ursulaheinke.de${service.image_url}`} />
        <link rel="canonical" href={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
      </Head>

      <div className="min-h-screen text-indigo-200 max-w-7xl mx-auto p-4 md:p-8">
        {/* Back Link & Breadcrumb Navigation */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-400/20 bg-slate-900/60 hover:bg-white/10 text-indigo-200 hover:text-white text-xs font-semibold font-headline transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            <ArrowLeft className="h-3.5 w-3.5 text-indigo-400 group-hover:-translate-x-1 transition-transform" />
            <span>Zurück zur Übersicht</span>
          </Link>

          <nav aria-label="Breadcrumb">
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
                <Link href="/services" className="hover:text-white transition-colors">
                  Coaching & Kurse
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li className="text-white font-medium truncate max-w-[180px] sm:max-w-none">
                {service.title}
              </li>
            </ol>
          </nav>
        </div>

        {/* 2-Column Hero / Offer Showcase */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 mb-16 items-start">
          {/* Linke Spalte: Media Showcase + Vertrauens-Highlights */}
          <div className="space-y-4 w-full">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] bg-slate-900/80 border border-blue-400/20 rounded-2xl overflow-hidden group shadow-2xl">
              <img
                src={service.image_url}
                alt={service.title}
                title={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none"></div>

              {/* Badges oben */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-950/85 text-indigo-200 border border-indigo-400/30 backdrop-blur-md shadow-lg">
                  {typeLabels[service.type] || "Persönliche Beratung"}
                </span>

                {service.badge && (
                  <span
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold backdrop-blur-md border shadow-lg ${
                      service.price === 0
                        ? "bg-emerald-500/25 text-emerald-200 border-emerald-400/40 shadow-emerald-950/40"
                        : service.price === 19
                        ? "bg-cyan-500/25 text-cyan-200 border-cyan-400/30 shadow-cyan-950/40"
                        : service.price === 149
                        ? "bg-amber-500/25 text-amber-200 border-amber-400/40 shadow-amber-950/40"
                        : "bg-purple-500/25 text-purple-200 border-purple-400/40 shadow-purple-950/40"
                    }`}
                  >
                    {service.badge}
                  </span>
                )}
              </div>

              {/* Experte & Social Proof Bar unten */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-indigo-400/25">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 flex items-center justify-center shrink-0 border border-indigo-400/40 shadow-inner">
                    <Compass className="w-5 h-5 text-indigo-300" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white flex items-center gap-1.5">
                      Ursula Heinke
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]"></span>
                      <span className="text-[11px] font-normal text-emerald-300">Verifizierter Coach</span>
                    </p>
                    <p className="text-[11px] text-indigo-300/80">
                      25+ Jahre Praxis • 34.000+ Questico-Beratungen (5,00 ★)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights & Qualitätsversprechen Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-indigo-400/20 backdrop-blur-sm space-y-3 shadow-lg">
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                Ursulas Qualitäts- & Vertrauensgarantie
              </h4>
              <div className="grid grid-cols-2 gap-3 pt-1 text-xs text-indigo-200/90">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/40 border border-indigo-400/10">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>100% Persönlich & Diskret</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/40 border border-indigo-400/10">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Keine Hotlines / Bots</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/40 border border-indigo-400/10">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Direkt via WhatsApp / Call</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/40 border border-indigo-400/10">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Kein Abo / Keine Bindung</span>
                </div>
              </div>
            </div>
          </div>

          {/* Rechte Spalte: Rating, Titel, Glowing Tags, Beschreibung & Action Box */}
          <div className="space-y-6">
            {/* Top Rating & Status Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-semibold bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/25 shadow-sm">
                <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                <span>5,00 Sterne</span>
                <span className="text-amber-300/60">•</span>
                <span className="text-amber-200/90 font-medium">34.000+ Questico-Bewertungen</span>
              </div>

              <span className="inline-flex items-center gap-1 text-xs text-indigo-300 font-medium bg-indigo-500/10 px-3 py-1.5 rounded-full border border-indigo-400/20">
                <Sparkles className="w-3 h-3 text-indigo-400" />
                Direktkontakt
              </span>
            </div>

            {/* Title & Headline */}
            <div>
              <h1 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-100 via-blue-100 to-indigo-200 bg-clip-text text-transparent tracking-tight leading-tight mb-2">
                {service.headline || service.title}
              </h1>
              {service.headline && service.title !== service.headline && (
                <p className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mt-1">
                  {service.title}
                </p>
              )}
            </div>

            {/* Glowing-dot Feature Tags (analog zu Shop-Produkt Specs) */}
            <div className="flex flex-wrap items-center gap-2.5 font-body text-xs sm:text-sm text-indigo-200">
              <span>{service.format || (service.type === "ausbildung" ? "Ausbildung mit Zertifikat" : service.type === "workshop" ? "Präsenz-Workshop" : service.type === "gruppenkurs" ? "Gruppenerlebnis" : "1:1 Persönliche Beratung")}</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]"></span>
              <span>{service.duration || "Persönliche Ausarbeitung"}</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]"></span>
              <span>{service.delivery || (service.price === 0 || service.price === 19 ? "WhatsApp Sprachnachricht" : service.type === "workshop" ? "Vor Ort (Ludwigsstadt)" : "Telefon / WhatsApp / Zoom")}</span>
            </div>

            {/* Lead Paragraph / Subheadline */}
            <p className="font-body text-base text-indigo-100 leading-relaxed">
              {service.subheadline || service.description}
            </p>

            {/* Action Box (analog zum Shop-Produkt) */}
            <div className="p-6 bg-slate-900/60 border border-indigo-400/20 rounded-2xl space-y-4 shadow-xl">
              {/* Price and Duration Row */}
              <div className="flex items-baseline justify-between pb-3 border-b border-indigo-400/15">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-indigo-300/80 font-semibold block mb-0.5">
                    {service.price === 0 ? "Kennenlern-Angebot" : "Investition"}
                  </span>
                  <div className="flex items-center gap-2.5">
                    <span className="font-headline text-3xl sm:text-4xl font-extrabold text-white">
                      {service.price === 0 ? "0 €" : formatPrice(service.price)}
                    </span>
                    {service.price === 0 ? (
                      <span className="text-xs font-bold text-emerald-300 bg-emerald-500/20 px-2.5 py-1 rounded-full border border-emerald-400/30">
                        100% Kostenfrei
                      </span>
                    ) : (
                      <span className="text-xs text-indigo-300/70 font-normal">
                        inkl. MwSt.
                      </span>
                    )}
                  </div>
                </div>

                {service.duration && (
                  <div className="text-right">
                    <span className="text-[11px] uppercase tracking-wider text-indigo-300/80 font-semibold block mb-0.5">
                      Dauer
                    </span>
                    <span className="text-sm font-semibold text-indigo-200 flex items-center gap-1.5 justify-end">
                      <Clock className="w-3.5 h-3.5 text-indigo-400" />
                      {service.duration}
                    </span>
                  </div>
                )}
              </div>

              {/* Main Action WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${service.title} per WhatsApp anfragen`}
                className={`w-full text-white shadow-xl font-headline font-semibold text-base py-4 rounded-full flex items-center justify-center gap-2.5 group/btn transition-all duration-300 ${
                  service.price === 0
                    ? "bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:via-teal-500 hover:to-emerald-500 shadow-emerald-950/60 border border-emerald-400/40"
                    : "bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-600 hover:from-indigo-400 hover:via-purple-500 hover:to-indigo-500 shadow-indigo-950/60 border border-indigo-300/30"
                }`}
              >
                <MessageCircle className="w-5 h-5 text-emerald-300 group-hover/btn:scale-110 transition-transform duration-300" />
                <span>
                  {service.price === 0
                    ? "Kostenlos per WhatsApp sichern"
                    : "Termin per WhatsApp anfragen"}
                </span>
              </a>

              {/* Secondary Link to Details / Ablauf */}
              <a
                href="#ablauf"
                className="w-full border border-indigo-400/30 hover:bg-white/10 text-indigo-200 hover:text-white font-headline text-sm py-3 rounded-full flex items-center justify-center gap-2 transition-all"
              >
                <span>Ablauf, FAQ & Value Stack ansehen ↓</span>
              </a>

              {/* Trust Footnote */}
              <p className="text-xs text-indigo-300/70 text-center pt-1 flex flex-wrap items-center justify-center gap-2 w-full">
                <span>{service.price === 0 ? "100% unverbindlich" : "Schnelle Terminvergabe"}</span>
                <span className="inline-block w-1 h-1 rounded-full bg-amber-400/80 shadow-[0_0_6px_rgba(251,191,36,0.8)]"></span>
                <span>1:1 direkt mit Ursula</span>
                <span className="inline-block w-1 h-1 rounded-full bg-amber-400/80 shadow-[0_0_6px_rgba(251,191,36,0.8)]"></span>
                <span>Keine Hotlines / Vermittler</span>
              </p>
            </div>
          </div>
        </div>

        {/* LONGFORM DESCRIPTION / DEEP DIVE */}
        <section className="mb-16 space-y-4">
          <div className="p-8 rounded-3xl bg-slate-900/40 border border-blue-400/15 space-y-4">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white flex items-center gap-2.5">
              <Sparkles className="w-6 h-6 text-amber-300" />
              Warum dieses Angebot deine Situation verändert
            </h2>
            <p className="font-body text-base sm:text-lg text-indigo-200/90 leading-relaxed">
              {service.longDescription || service.description}
            </p>
          </div>
        </section>

        {/* HORMOZI FILTER: FÜR WEN IST DAS / FÜR WEN NICHT */}
        {service.targetAudience && (
          <section className="mb-16">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white text-center mb-8">
              Passt dieses Angebot zu deiner Lebenssituation?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Für wen ist das */}
              <div className="p-6 sm:p-8 rounded-3xl bg-emerald-950/20 border border-emerald-500/30 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
                    <UserCheck className="w-4 h-4" />
                    Perfekt für dich, wenn:
                  </div>
                  <ul className="space-y-3 pt-2">
                    {service.targetAudience.forWhom.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-indigo-100">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Für wen NICHT */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-indigo-400/20 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 text-red-300 text-xs font-bold uppercase tracking-wider mb-3">
                    <XCircle className="w-4 h-4" />
                    NICHT geeignet für dich, wenn:
                  </div>
                  <ul className="space-y-3 pt-2">
                    {service.targetAudience.notForWhom.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-indigo-200/80">
                        <span className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                          ✕
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 3-STUFEN-ABLAUF */}
        {service.process && service.process.length > 0 && (
          <section id="ablauf" className="mb-16 scroll-mt-24">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-widest text-indigo-300/80 font-bold">
                Transparenter Ablauf
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white mt-1">
                In 3 einfachen Schritten zu deiner Klarheit
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.process.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-blue-400/20 relative flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold flex items-center justify-center mb-4 text-base shadow-md">
                      {step.step}
                    </div>
                    <h3 className="font-headline text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-indigo-200/80 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* VALUE STACK & BONI ($100M OFFERS) */}
        {service.valueStack && service.valueStack.length > 0 && (
          <section className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-indigo-950/60 via-slate-900 to-indigo-950/60 border border-indigo-400/30 shadow-2xl">
            <div className="text-center mb-8">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-400/15 text-amber-300 border border-amber-400/25 uppercase tracking-wider">
                Der Komplett-Wert
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white mt-2">
                Alles, was in deinem Angebot enthalten ist
              </h2>
            </div>

            <div className="max-w-2xl mx-auto space-y-3 mb-8">
              {service.valueStack.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/60 border border-indigo-400/15 text-sm"
                >
                  <div className="flex items-center gap-2.5 text-indigo-100">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item.item}</span>
                  </div>
                  <span className="text-xs font-semibold text-indigo-300/80 bg-indigo-500/10 px-2.5 py-1 rounded-md">
                    Wert: {item.value}
                  </span>
                </div>
              ))}
            </div>

            {service.totalValue && (
              <div className="text-center p-6 rounded-2xl bg-slate-950/80 border border-blue-400/20 max-w-xl mx-auto">
                <p className="text-xs uppercase tracking-wider text-indigo-300/70 mb-1">
                  Gesamtwert aller Bestandteile:
                </p>
                <p className="text-lg line-through text-indigo-300/50 font-bold">
                  {service.totalValue}
                </p>
                <p className="text-xs uppercase tracking-wider text-amber-300 font-bold mt-2">
                  Dein Investitions-Preis:
                </p>
                <p className="font-headline text-4xl font-extrabold text-white mt-1">
                  {service.price === 0 ? "0 € (100% Kostenfrei)" : formatPrice(service.price)}
                </p>
              </div>
            )}
          </section>
        )}

        {/* DIE RISIKOFREIE GARANTIE */}
        {service.guarantee && (
          <section className="mb-16 p-8 rounded-3xl bg-slate-900/60 border border-amber-400/30 shadow-xl flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-8 h-8 text-amber-300" />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-headline text-xl font-bold text-white">
                Ursulas persönliches Qualitäts- & Klarheitsversprechen
              </h3>
              <p className="font-body text-sm sm:text-base text-indigo-200/90 leading-relaxed">
                {service.guarantee}
              </p>
            </div>
          </section>
        )}

        {/* FAQ ACCORDION */}
        {service.faq && service.faq.length > 0 && (
          <section className="mb-16">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-widest text-indigo-300/80 font-bold">
                Häufige Fragen
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white mt-1">
                Fragen & Antworten zu {service.title}
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {service.faq.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-slate-900/60 border border-blue-400/15 overflow-hidden transition-all duration-300"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-headline text-base font-bold text-white hover:text-indigo-200 transition-colors"
                    >
                      <span className="flex items-center gap-2.5">
                        <HelpCircle className="w-4 h-4 text-indigo-400 shrink-0" />
                        {item.question}
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 text-indigo-300 transition-transform duration-300 shrink-0 ${
                          isOpen ? "rotate-90 text-amber-300" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm text-indigo-200/80 leading-relaxed border-t border-blue-400/10 font-body">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* FINAL CONVERSION FUNNEL BOX */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/80 to-slate-900 border border-indigo-400/30 shadow-2xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/15 text-indigo-200 text-xs font-semibold uppercase tracking-wider border border-indigo-400/20">
            <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
            34.000+ Beratungen • 25+ Jahre Erfahrung
          </div>

          <h3 className="font-headline text-2xl sm:text-4xl font-bold text-white max-w-xl mx-auto">
            Bereit, die Ungewissheit zu beenden?
          </h3>

          <p className="font-body text-indigo-200 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Sichere dir jetzt deinen Platz für {service.title}. Ursula Heinke begleitet dich einfühlsam und treffsicher.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Jetzt per WhatsApp anfragen`}
              className={`font-headline font-semibold text-base px-8 py-4 rounded-full text-white shadow-xl transition-all duration-300 flex items-center justify-center gap-2.5 w-full sm:w-auto min-w-[260px] group ${
                service.price === 0
                  ? "bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:via-teal-500 hover:to-emerald-500 shadow-emerald-950/60 border border-emerald-400/40"
                  : "bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-600 hover:from-indigo-400 hover:via-purple-500 hover:to-indigo-500 shadow-indigo-950/60 border border-indigo-300/30"
              }`}
            >
              <MessageCircle className="w-5 h-5 text-emerald-300 group-hover:scale-110 transition-transform duration-300" />
              <span>
                {service.price === 0
                  ? "Kostenlosen Check anfragen"
                  : "Termin per WhatsApp anfragen"}
              </span>
            </a>

            <Link
              href="/services"
              className="text-sm font-semibold text-indigo-200 hover:text-white px-6 py-4 rounded-full border border-indigo-400/30 hover:bg-white/10 transition-all inline-flex items-center gap-2"
            >
              <span>Alle Coaching-Angebote</span>
              <ArrowRight className="w-4 h-4 text-indigo-300" />
            </Link>
          </div>
        </section>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="text-xs border border-blue-400/30 text-indigo-300 hover:text-white hover:bg-white/10 rounded-full px-6 py-2.5 inline-flex items-center gap-2 transition-all"
          >
            ← Zurück zur Coaching-Übersicht
          </Link>
        </div>
      </div>
    </>
  );
}

