import React from "react";
import HeroSection from "../components/home/HeroSection"; // Relativer Pfad
import FeaturedProducts from "../components/home/FeaturedProducts";
import ServicesPreview from "../components/home/ServicesPreview";
import { HelmetProvider, Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      {/* Neu: React Helmet für SEO */}
      <Helmet>
        <title>Ursula Heinke - Authentische Lebensberatung und Spirituelles Coaching</title>
        <meta name="description" content="Entdecken Sie transformative Lebensberatung, spirituelles Coaching, Heilsteine und Kurse für Klarheit, Balance und Ihr wahres Selbst." />
        <meta name="keywords" content="Lebensberatung, spirituelles Coaching, Heilsteine, Transformation, Balance, innere Entwicklung" />
        <meta property="og:title" content="Ursula Heinke - Home" />
        <meta property="og:description" content="Ihre Reise zu innerem Wachstum und spiritueller Klarheit beginnt hier." />
        <meta property="og:image" content="https://www.ursulaheinke.de/images/Kurse/ogbild.png" /> {/* Passe Bild an */}
        <meta property="og:url" content="https://www.ursulaheinke.de/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.ursulaheinke.de/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Ursula Heinke",
            "url": "https://www.ursulaheinke.de",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.ursulaheinke.de/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>

      {/* Original-Inhalt bleibt unverändert */}
      <div className="min-h-screen">
        <HeroSection />
        <ServicesPreview />
        <FeaturedProducts />
      </div>
    </>
  );
}
