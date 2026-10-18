import React from "react";
import Link from "next/link";
import { createPageUrl } from "../../utils"; // Relativer Pfad
import { Button } from "../../components/ui/Button";
import { Sparkles, Heart, Star, ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg-grid">

      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-blue-200/80 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: '3s'
            }}
          ></div>
        ))}
      </div>

          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Logo mittig und über dem Text */}
              <div className="relative mx-auto w-28 h-28">  {/* Passe w-20 h-20 bei Bedarf an */}
                <img 
                  src="/images/logo.webp"
                  alt="Ursula Heinke Logo" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" 
                />
                {/* Glow-Effekt beibehalten */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/20 rounded-full blur-md animate-pulse opacity-70"></div>
              </div>

              {/* Hauptüberschrift */}
              <div className="space-y-4">
                <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent">
                    Authentische Lebensberatung <br />& Spirituelles Coaching
                  </span>
                </h1>
                <p className="font-base text-xl md:text-2xl text-indigo-200 max-w-3xl mx-auto leading-relaxed">
                  Authentische Lebensberatung und spirituelles Coaching für Deine persönliche Transformation. 
                  Finde Klarheit, Balance und Dein wahres Selbst.
                </p>
              </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-300 fill-amber-300" />
              <span className="font-semibold">34.000+ Beratungen (Ø 5,0 Sterne)</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-400" />
              <span className="font-semibold">Spezialistin für Seelenpartner & Liebe</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="font-semibold">25+ Jahre Erfahrung</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="https://wa.me/4915901276286?text=Hallo%20Ursula%2C%20ich%20habe%20deine%20Webseite%20besucht%20und%20m%C3%B6chte%20gerne%20einen%20Termin%20f%C3%BCr%20eine%20pers%C3%B6nliche%20Beratung%20(Seelen-Klarheits-Kompass)%20anfragen."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Beratung per WhatsApp anfragen"
              className="font-headline font-semibold bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-600 hover:from-indigo-400 hover:via-purple-500 hover:to-indigo-500 text-white shadow-xl shadow-indigo-950/60 border border-indigo-300/30 rounded-full w-full sm:w-auto min-w-[275px] py-4 px-8 text-lg transition-all duration-300 group flex items-center justify-center gap-2.5"
            >
              <MessageCircle className="w-5 h-5 text-emerald-300 group-hover:scale-110 transition-transform duration-300" />
              <span>Beratung per WhatsApp anfragen</span>
            </a>
            <Link
              href="/services"
              aria-label="Angebote & Ausbildung ansehen"
              className="font-headline font-semibold w-full sm:w-auto min-w-[275px] px-8 py-4 text-lg border border-indigo-300/30 text-indigo-100 hover:text-white hover:bg-white/10 hover:border-indigo-300/60 rounded-full backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center gap-2 group"
            >
              <span>Angebote & Ausbildung</span>
              <ArrowRight className="w-5 h-5 ml-1 text-indigo-300 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
