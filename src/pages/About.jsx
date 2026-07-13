import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Heart, Star, Award, Users, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils"; // Relativer Pfad

export default function About() {
  const achievements = [
    { icon: Award, title: "25 Jahre Erfahrung", desc: "In spiritueller Beratung und Coaching" },
    { icon: Users, title: "34.500+ Kunden", desc: "Begleitet auf ihrem Weg" },
    { icon: Star, title: "4.9/5 Bewertung", desc: "Von zufriedenen Klienten" },
    { icon: Heart, title: "Ganzheitlicher Ansatz", desc: "Systemische Beratung" }
  ];

  const values = [
    "Authentizität und Ehrlichkeit in jeder Begegnung",
    "Respektvoller Umgang mit spirituellen Traditionen", 
    "Individuelle Begleitung ohne Dogmen",
    "Wissenschaftlich fundierte Methoden mit spiritueller Weisheit",
    "Vertraulichkeit und geschützte Räume",
    "Förderung von innerer Klarheit und Selbstbestimmung"
  ];

  const isMobile = window.innerWidth < 768; // md breakpoint

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <motion.div 
          initial={isMobile ? {} : { opacity: 0, y: 20 }}
          animate={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={isMobile ? {} : { duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block mb-8">
            <img 
              src="/images/logo.png" 
              alt="Ursula Heinke"
              className="w-40 h-40 rounded-full object-cover shadow-2xl mx-auto mystical-glow"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600/20 to-blue-400/10 animate-pulse"></div>
          </div>
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
            Meine Geschichte
          </h1>
          <p className="font-base text-xl md:text-2xl text-indigo-300 max-w-3xl mx-auto leading-relaxed">
            Ich bin Ursula Heinke, Ihre Begleiterin auf dem Weg zu innerem Wachstum, spiritueller Klarheit und authentischer Lebensführung.
          </p>
        </motion.div>

        <motion.section
          initial={isMobile ? {} : { opacity: 0, y: 30 }}
          whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={isMobile ? {} : { duration: 0.5 }}
          className="relative w-full min-h-[450px] flex items-center justify-center mb-24"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/dark-mystic-bg1.png')" }}
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-slate-900/75 backdrop-blur-sm" />

          {/* Text Content */}
          <div className="relative z-10 max-w-full sm:max-w-3xl px-4 sm:px-6 text-center text-indigo-200 space-y-6">
            <p className="font-headline leading-relaxed text-xl">
              Seit mehr als 25 Jahren folge ich einem Weg der inneren Entfaltung – 
              einem Weg, der mich immer tiefer mit den unsichtbaren Kräften des Lebens verbunden hat. 
              Auf dieser Reise durfte ich erfahren, wie Stille, Achtsamkeit und uralte Weisheit Türen öffnen, 
              die zuvor verborgen schienen.
            </p>
            <p className="font-headline leading-relaxed text-lg">
              Heute teile ich diese Erfahrungen, um Menschen zu begleiten, die ihre eigene Wahrheit suchen – 
              jenseits von Erwartungen, fern von festen Dogmen. Es ist ein Weg zurück zu sich selbst, getragen 
              von Klarheit, Vertrauen und innerer Kraft.
            </p>
            <p className="font-headline leading-relaxed text-lg">
              Meine Mission ist es, Räume zu erschaffen, in denen Herz und Seele wieder im Einklang schwingen können – 
              damit jeder Mensch seinen einzigartigen Rhythmus findet und in seiner wahren Essenz erstrahlt.
            </p>
          </div>
        </motion.section>

        {/* Achievements */}
        <motion.div initial={isMobile ? {} : { opacity: 0, y: 30 }} whileInView={isMobile ? {} : { opacity: 1, y: 0 }} transition={isMobile ? {} : { duration: 0.5 }} className="mb-32">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
              Qualifikationen & Erfahrung
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                  <Card className="flex-1 bg-slate-900/30 border border-blue-400/10 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 rounded-2xl text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-900/50 to-blue-900/50 rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-blue-300" />
                    </div>
                    <h3 className="font-bold text-blue-200 mb-2">{achievement.title}</h3>
                    <p className="text-sm text-indigo-200/80">{achievement.desc}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div initial={isMobile ? {} : { opacity: 0, y: 30 }} whileInView={isMobile ? {} : { opacity: 1, y: 0 }} transition={isMobile ? {} : { duration: 0.5 }} className="mb-32">
          <Card className="text-white rounded-3xl overflow-hidden border-0 shadow-none">
            <CardContent className="p-12 md:p-16">
              {/* Mehr Freiraum oben */}
              <div className="text-center text-blue-200 mb-16">
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
                  Meine Werte & Prinzipien
                </h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed text-indigo-300">
                  Diese Grundsätze leiten meine Arbeit und prägen jede Begegnung mit meinen Klienten
                </p>
              </div>

              {/* Grid mit gleichmäßigem, normalen Abstand */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-8 ">
                {values.map((value, index) => (
                  <motion.div 
                    key={index} 
                    initial={isMobile ? {} : { opacity: 0, x: -20 }} 
                    whileInView={isMobile ? {} : { opacity: 1, x: 0 }} 
                    transition={isMobile ? {} : { duration: 0.5 }} 
                    className="font-base flex items-start gap-2 p-3 rounded-xl bg-transparent"
                  >
                    <Sparkles className="w-6 h-6 mt-1 flex-shrink-0 text-blue-400" />
                    <p className="text-lg text-indigo-200 leading-relaxed">
                      {value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <Link to={createPageUrl("Contact")}>
          <Button 
            className="font-headline bg-gradient-to-r from-indigo-500 to-blue-500 text-indigo-300 hover:shadow-lg hover:shadow-blue-500/20 rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
          >
            <Heart className="w-5 h-5 text-blue-200" /> Erstgespräch vereinbaren
          </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
