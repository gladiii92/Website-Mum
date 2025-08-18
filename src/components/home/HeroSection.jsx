import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils"; // Relativer Pfad
import { Button } from "../../components/ui/Button";
import { Sparkles, Heart, Star, ArrowRight } from "lucide-react";
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
          <div className="relative mx-auto w-20 h-20">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/20 rounded-full blur-md animate-pulse opacity-70"></div>
            <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/20 rounded-full p-5 shadow-xl">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Hauptüberschrift */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
                Entdecke Deine
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent">
                Seelenwege
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-indigo-200 max-w-3xl mx-auto leading-relaxed">
              Authentische Lebensberatung und spirituelles Coaching für Deine persönliche Transformation. 
              Finde Klarheit, Balance und Dein wahres Selbst.
            </p>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-300 fill-current" />
              <span className="font-semibold">15+ Jahre Erfahrung</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-10 text-red-600" />
              <span className="font-semibold">5.000+ zufriedene Klienten</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-500" />
              <span className="font-semibold">Zertifizierte Beraterin</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to={createPageUrl("Services")}>
              <Button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/20 rounded-full w-auto min-w-[275px] py-2 px-8 text-lg transition-all duration-300 group whitespace-nowrap overflow-hidden text-ellipsis flex items-center justify-center">
                <Heart className="w-5 h-5 mr-2 text-white" />
                Erstgespräch
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to={createPageUrl("Shop")}>
              <Button 
                variant="outline" 
                size="lg"
                className="w-auto min-w-[275px] px-8 py-2 text-lg border-2 border-blue-400/50 text-white hover:bg-blue-400/10 hover:border-blue-400/80 hover:shadow-lg hover:shadow-black-500/20 rounded-full transition-all duration-300 whitespace-nowrap overflow-hidden text-ellipsis flex items-center justify-center"
              >
                <Sparkles className="w-5 h-5 mr-2 text-white" />
                Heilsteine entdecken
                <ArrowRight className="w-5 h-5 ml-2 " />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
