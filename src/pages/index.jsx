import React from "react";
import HeroSection from "../components/home/HeroSection"; // Relativer Pfad
import FeaturedProducts from "../components/home/FeaturedProducts";
import ServicesPreview from "../components/home/ServicesPreview";
import SeminarHighlight from "../components/home/SeminarHighlight";
import QuesticoProof from "../components/home/QuesticoProof";
import Head from "next/head";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.ursulaheinke.de/#website",
        "url": "https://www.ursulaheinke.de",
        "name": "Ursula Heinke – Lebensberatung & Coaching",
        "inLanguage": "de-DE"
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.ursulaheinke.de/#business",
        "name": "Ursula Heinke – Authentische Lebensberatung & Spirituelles Coaching",
        "image": "https://www.ursulaheinke.de/images/logo.webp",
        "url": "https://www.ursulaheinke.de",
        "telephone": "+4915901276286",
        "priceRange": "€€",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Gräfenthaler Straße 4",
          "addressLocality": "Ludwigsstadt",
          "postalCode": "96337",
          "addressRegion": "Bayern",
          "addressCountry": "DE"
        },
        "sameAs": [
          "https://www.questico.de/tarot-und-kartenlegen/ursula-heinke",
          "https://share.google/fmGTco4Orpqq5yJyM",
          "https://www.instagram.com/ursulaheinke/"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "947",
          "bestRating": "5",
          "worstRating": "1"
        },
        "areaServed": [
          { "@type": "Country", "name": "Deutschland" },
          { "@type": "City", "name": "Ludwigsstadt" },
          { "@type": "City", "name": "Coburg" },
          { "@type": "City", "name": "Kronach" },
          { "@type": "City", "name": "Lichtenfels" },
          { "@type": "City", "name": "Bamberg" },
          { "@type": "City", "name": "Saalfeld" }
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Ursula Heinke - Authentische Lebensberatung, Tarot & Spirituelles Coaching</title>
        <meta name="description" content="Über 34.000 Beratungen mit 5,00 Sternen. Mediale Lebensberatung, Gedankenlegung auf den Herzenspartner, Seelenplan-Coaching und Seminare in Coburg & Frankenwald." />
        <meta name="keywords" content="Lebensberatung Coburg, Tarot Kartenlegen Frankenwald, Herzenspartner Gedankenlegung, spirituelles Coaching, Ursula Heinke, Questico Beraterin" />
        <meta property="og:title" content="Ursula Heinke – Authentische Lebensberatung & Spirituelles Coaching" />
        <meta property="og:description" content="Über 34.000 Beratungen & 5.0 Sterne. Finde Klarheit, Balance und Seelenfrieden." />
        <meta property="og:image" content="https://www.ursulaheinke.de/images/Kurse/ogbild.webp" />
        <meta property="og:url" content="https://www.ursulaheinke.de/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.ursulaheinke.de/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen">
        <HeroSection />
        <QuesticoProof />
        <ServicesPreview />
        <SeminarHighlight />
        <FeaturedProducts />
      </div>
    </>
  );
}
