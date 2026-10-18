import React from "react";
import { Star, ShieldCheck, Heart, Sparkles, MessageCircle, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export default function QuesticoProof() {
  const reviews = [
    {
      author: "Antje",
      date: "Verifizierte Beratung",
      rating: 5,
      text: "Unglaublich, wie wohltuend und treffsicher deine Beratung war! Es fühlte sich an, als würdest du mich schon ewig kennen. Selbst die beteiligten Personen und deren Gefühle hast du so exakt beschrieben – da bleiben keine Zweifel mehr offen. Danke für deine wunderbare Energie!",
      tag: "Herzenspartner & Zukunftsfragen"
    },
    {
      author: "Marina",
      date: "Verifizierte Beratung",
      rating: 5,
      text: "Wer eine klare und schnelle Einschätzung seiner Situation mit einer Prise Humor, gewürztem Optimismus und einer absolut treffsicheren Prognose sucht, ist bei Ursula genau richtig! Hat mir unglaublich viel Klarheit und Ruhe geschenkt.",
      tag: "Entscheidungshilfe & Klarheit"
    },
    {
      author: "Klientin S.",
      date: "Verifizierte Beratung",
      rating: 5,
      text: "Ursula ist einfach klasse! So einfühlsam und ehrlich. Sie sieht die Gedanken und Gefühle der Personen exakt so, wie sie sind und wie ich es später tatsächlich bestätigt bekommen habe. Eine riesige Stütze in schweren Zeiten.",
      tag: "Dualseelen & Seelenverbindung"
    },
    {
      author: "Klientin K.",
      date: "Verifizierte Beratung",
      rating: 5,
      text: "Liebe Ursula! Die Rückmeldung kam tatsächlich noch am selben Tag, genau wie von dir vorhergesehen! Du nimmst einem den Druck und führst einen mit so viel Herz und Klarheit durch die Unsicherheit. Tausend Dank!",
      tag: "Liebeskummer & Blockaden"
    }
  ];

  return (
    <section className="py-20 px-6 relative bg-gradient-to-b from-slate-900/80 via-slate-950 to-slate-900/90 border-y border-indigo-500/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 font-semibold text-sm">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Offiziell geprüfte & verifizierte Klientenstimmen</span>
          </div>

          <h2 className="font-headline text-3xl md:text-5xl font-bold text-white">
            Über 34.000 Beratungen mit <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">5,00 Sternen</span>
          </h2>
          
          <p className="text-indigo-200 text-base md:text-lg leading-relaxed">
            Echte, ungefilterte Erfahrungen von Ratsuchenden. Bekannt durch langjährige Spitzenbewertungen auf führenden Lebensberatungs-Portalen wie Questico.
          </p>

          {/* Questico Badge & Stats */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-4 sm:gap-8">
            <div className="px-5 py-3 rounded-2xl bg-slate-800/60 border border-indigo-400/20 backdrop-blur-sm flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-lg leading-none">5,00 / 5,00</p>
                <p className="text-indigo-300/70 text-xs">Gesamtnote</p>
              </div>
            </div>

            <div className="px-5 py-3 rounded-2xl bg-slate-800/60 border border-indigo-400/20 backdrop-blur-sm flex items-center gap-3">
              <Heart className="w-5 h-5 text-rose-400" />
              <div className="text-left">
                <p className="text-white font-bold text-lg leading-none">34.190+</p>
                <p className="text-indigo-300/70 text-xs">Durchgeführte Beratungen</p>
              </div>
            </div>

            <div className="px-5 py-3 rounded-2xl bg-slate-800/60 border border-indigo-400/20 backdrop-blur-sm flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-indigo-300" />
              <div className="text-left">
                <p className="text-white font-bold text-lg leading-none">25+ Jahre</p>
                <p className="text-indigo-300/70 text-xs">Treffsichere Praxiserfahrung</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-900/60 border border-indigo-400/15 hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-indigo-950/50"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-amber-300/80 font-medium px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20">
                    {rev.date}
                  </span>
                </div>

                <p className="text-sm font-semibold text-indigo-300 mb-2">
                  {rev.tag}
                </p>

                <p className="text-indigo-100/90 text-sm italic leading-relaxed mb-4">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-indigo-400/10 flex items-center justify-between">
                <span className="font-headline font-bold text-white text-base">
                  {rev.author}
                </span>
                <span className="text-xs text-indigo-300/60">
                  Questico Klient
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-950/60 via-slate-900/80 to-purple-950/60 border border-indigo-400/30 text-center max-w-4xl mx-auto space-y-4">
          <h3 className="font-headline text-2xl md:text-3xl font-bold text-white">
            Möchtest auch du Klarheit für deine Liebe oder Lebenssituation gewinnen?
          </h3>
          <p className="text-indigo-200 text-sm md:text-base max-w-2xl mx-auto">
            Auf dieser offiziellen Webseite buchst du Ursula Heinke direkt, persönlich und vertraulich – ohne Plattform-Zwischengebühren.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://wa.me/4915901276286?text=Hallo%20Ursula%2C%20ich%20habe%20deine%20Webseite%20besucht%20und%20m%C3%B6chte%20gerne%20einen%20Termin%20f%C3%BCr%20eine%20pers%C3%B6nliche%20Beratung%20(Seelen-Klarheits-Kompass)%20anfragen."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jetzt WhatsApp-Termin anfragen"
              className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-600 hover:from-indigo-400 hover:via-purple-500 hover:to-indigo-500 text-white shadow-xl shadow-indigo-950/60 border border-indigo-300/30 rounded-full font-headline font-semibold text-base sm:text-lg py-4 px-8 flex items-center justify-center gap-2.5 group transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 text-emerald-300 group-hover:scale-110 transition-transform duration-300" />
              <span>Jetzt WhatsApp-Termin anfragen</span>
            </a>
            
            <a
              href="https://www.questico.de/tarot-und-kartenlegen/ursula-heinke"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-indigo-300/80 hover:text-white transition-colors"
            >
              <span>Offizielles Profil auf Questico.de ansehen</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

