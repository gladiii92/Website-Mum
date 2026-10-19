import React, { useState, useEffect } from "react";
import { ServiceData } from "../../entities/Service"; // Relativer Pfad – geändert zu ServiceData
import Link from "next/link";
import { createPageUrl, formatPrice } from "../../utils";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Heart, Clock, Users, ArrowRight, Star, MessageCircle, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPreview() {
  const isMobile = (typeof window !== 'undefined' ? window.innerWidth : 1024) < 768; // md breakpoint

  // Synchronous initialization for Next.js SSG so static HTML contains full cards
  const featuredServices = React.useMemo(() => {
    // Show the 3 pinnacle tiers of the Value Ladder: Stufe 0 (Free), Stufe 2 (Core 149€), Stufe 4 (Ausbildung 2.490€)
    const preferredTitles = [
      "3-Fragen Herzenspartner-Check",
      "Seelen-Klarheits-Kompass – Intensiv-Reading",
      "Zertifizierte Ausbildung: Intuitive Kartenlegerin"
    ];
    const picked = preferredTitles
      .map(title => ServiceData.find(s => s.title === title))
      .filter(Boolean);
    return picked.length === 3 ? picked : ServiceData.filter(s => s.featured).slice(0, 3);
  }, []);

  const typeLabels = {
    all: "Alle Angebote",
    readings: "Readings & Beratung",
    ausbildung: "Zertifizierte Ausbildung",
    gruppenkurs: "Gruppenkurse & Waldbaden",
    workshop: "Workshops & Retreats"
  };

  const typeIcons = {
    readings: Heart,
    ausbildung: Award,
    einzelcoaching: Heart,
    gruppenkurs: Users,
    workshop: Star
  };


  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={isMobile ? {} : { opacity: 0, y: 20 }}
          whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={isMobile ? {} : { duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent">
              Transformative Begleitung
            </span>
          </h2>
          <p className="font-base text-lg text-indigo-200 max-w-2xl mx-auto mb-4">
            Individuelle Lebensberatung, treffsichere Gedankenlegungen und fundierte Ausbildungen von Ursula Heinke (25+ Jahre Erfahrung)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
          {featuredServices.map((service, index) => {
            const isFree = service.price === 0;
            const formattedPrice = isFree ? "0 € (Kostenlos)" : formatPrice(service.price);
            const whatsappMessage = isFree
              ? `Hallo Ursula, ich möchte gerne den kostenlosen 3-Fragen Herzenspartner-Check per WhatsApp nutzen.`
              : `Hallo Ursula, ich habe dein Angebot "${service.title}" (${formatPrice(service.price)}) auf deiner Webseite gesehen und möchte gerne einen Termin bzw. Platz buchen.`;

            return (
              <motion.div
                key={service.id || service.title || index}
                initial={isMobile ? {} : { opacity: 0, y: 20 }}
                whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
                transition={isMobile ? {} : { duration: 0.6, delay: index * 0.1 }}
                className="h-full flex flex-col"
              >
                <Card className="group h-full flex flex-col bg-slate-900/40 border border-blue-400/15 shadow-lg hover:shadow-blue-500/10 transition-all duration-500 rounded-2xl mystical-glow overflow-hidden hover:border-blue-400/35">
                  <div className="relative h-52 shrink-0 overflow-hidden">
                    <img 
                      src={service.image_url || ''}
                      alt={`${service.title} - ${service.description.slice(0, 100)}`}
                      title={`${service.title}: ${service.description.slice(0, 100)}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 text-indigo-200 border border-indigo-400/30 backdrop-blur-md">
                        {typeLabels[service.type] || "Beratung"}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      {isFree ? (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/25 text-emerald-200 border border-emerald-400/40 backdrop-blur-md shadow-lg shadow-emerald-950/50">
                          100% Kostenfrei
                        </span>
                      ) : service.price === 149 ? (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/25 text-amber-200 border border-amber-400/40 backdrop-blur-md shadow-lg shadow-amber-950/40">
                          Bestseller / Empfehlung
                        </span>
                      ) : service.price >= 2000 ? (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/25 text-purple-200 border border-purple-400/40 backdrop-blur-md shadow-lg shadow-purple-950/40">
                          Exklusives Mentoring
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 backdrop-blur-md">
                          Empfehlung
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6 sm:p-7 flex-1 flex flex-col items-center justify-between text-center">
                    <div className="w-full flex flex-col items-center">
                      <Link href={`/services/${service.slug}`} className="group/title block">
                        <h3 className="font-headline text-xl font-bold text-white group-hover/title:text-blue-200 transition-colors duration-300 min-h-[3.5rem] flex items-center justify-center text-center leading-snug">
                          {service.title}
                        </h3>
                      </Link>

                      <div className="my-2 text-center">
                        <span className={`font-headline text-3xl font-bold tracking-tight block ${isFree ? 'text-emerald-300' : 'text-white'}`}>
                          {formattedPrice}
                        </span>
                        {service.duration && (
                          <span className="text-xs uppercase tracking-wider text-indigo-300/80 mt-1 block">
                            {service.duration}
                          </span>
                        )}
                      </div>

                      <div className="w-12 h-0.5 bg-indigo-400/20 mx-auto my-3 rounded-full"></div>

                      <p className="font-body text-sm text-indigo-200/90 leading-relaxed mb-4 min-h-[4.5rem] text-center px-1">
                        {service.description}
                      </p>
                      
                      {service.benefits && service.benefits.length > 0 && (
                        <div className="w-full mb-5 p-4 rounded-xl bg-slate-900/60 border border-indigo-400/15 text-center">
                          <p className="text-[11px] font-semibold uppercase tracking-widest text-indigo-300/90 mb-2">
                            Im Angebot enthalten
                          </p>
                          <ul className="text-xs text-indigo-100/90 space-y-1.5">
                            {service.benefits.slice(0, 3).map((benefit, i) => (
                              <li key={i} className="text-center leading-relaxed">
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    
                    <div className="w-full mt-auto pt-4 border-t border-blue-400/10 flex flex-col gap-2">
                      <a 
                        href={`https://wa.me/4915901276286?text=${encodeURIComponent(whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`WhatsApp anfragen für: ${service.title}`}
                        className={`font-headline font-semibold text-sm ${
                          isFree
                            ? "bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:via-teal-500 hover:to-emerald-500 border border-emerald-400/40 shadow-emerald-950/40"
                            : "bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-indigo-600/90 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500 border border-indigo-400/30 hover:border-indigo-300/50 shadow-indigo-950/40"
                        } text-white rounded-full w-full py-3 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-300 group-hover/btn:scale-110 transition-transform duration-300" />
                        <span>{isFree ? "Kostenlos per WhatsApp sichern" : "Termin per WhatsApp anfragen"}</span>
                      </a>

                      <Link
                        href={`/services/${service.slug}`}
                        className="text-xs font-semibold text-indigo-300 hover:text-white py-1.5 px-3 rounded-full border border-indigo-400/20 hover:border-indigo-400/50 hover:bg-white/5 transition-all flex items-center justify-center gap-1 group/more"
                      >
                        <span>Details & Kunden-FAQ</span>
                        <ArrowRight className="w-3.5 h-3.5 text-indigo-400 group-hover/more:translate-x-1 transition-transform" />
                      </Link>

                      <p className="text-[11px] text-center text-indigo-300/60 font-body">
                        {isFree ? "100% unverbindlich • Audio-Antwort direkt aufs Handy" : "Verbindliche Anfrage direkt via WhatsApp"}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link
            href="/services"
            className="px-8 py-3.5 text-base border border-indigo-300/30 text-indigo-100 hover:text-white hover:bg-white/10 hover:border-indigo-300/60 rounded-full transition-all duration-300 inline-flex items-center justify-center font-headline font-semibold group"
          >
            <span>Alle Coaching-Angebote & Stufen ansehen</span>
            <ArrowRight className="w-4 h-4 ml-2 text-indigo-300 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
