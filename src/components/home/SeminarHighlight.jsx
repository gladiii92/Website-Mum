import React from "react";
import Link from "next/link";
import { createPageUrl } from "../../utils";
import { Button } from "../../components/ui/Button";
import { Heart, MapPin, Calendar, Users, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function SeminarHighlight() {
  // Automatisches Deaktivieren am 8. November 2026 (Tag nach dem Event)
  const currentDate = new Date();
  const eventDate = new Date("2026-11-08T00:00:00");
  if (currentDate > eventDate) {
    return null;
  }

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background with mystic feel */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/images/dark-mystic-bg1.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-800/60 backdrop-blur-md border border-pink-500/20 shadow-2xl rounded-3xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            {/* Image Column */}
            <div className="relative h-full min-h-[400px] lg:min-h-full p-6 lg:p-12 flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-900/40 to-transparent"></div>
              <img 
                src="/images/Kurse/seminar.webp" 
                alt="Frauen-Retreat: Herzenszeit - Zurück zu dir mit Ursula & Jessica" 
                className="relative z-10 rounded-2xl shadow-[0_0_40px_rgba(219,39,119,0.3)] w-full max-w-md object-contain transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Content Column */}
            <div className="p-8 lg:p-12 lg:pl-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                Exklusives Event
              </div>
              
              <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-white">
                Frauen-Retreat: <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Herzenszeit</span>
              </h2>
              
              <h3 className="font-section text-2xl text-pink-200 mb-6 italic">
                "Zurück zu dir - Ein besonderer Tag für dein Herz, deine Seele und dein inneres Strahlen."
              </h3>
              
              <p className="font-body text-lg text-indigo-100/90 mb-8 leading-relaxed">
                Gemeinsam fühlen, loslassen, heilen und wachsen. Dich erwarten Kakaozeremonie, tiefe Meditation mit Klangschalen, Blockadenlösung, Kartenlegung und ein Raum voller Selbstliebe.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-pink-500/20 p-2 rounded-lg">
                    <Calendar className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Wann?</h4>
                    <p className="text-indigo-200">Sonntag, 7.11.2026<br/>13:00 - 16:00 Uhr</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-pink-500/20 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Wo?</h4>
                    <p className="text-indigo-200">Studio Frieda<br/>96450 Coburg</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-pink-500/20 p-2 rounded-lg">
                    <Users className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Von wem?</h4>
                    <p className="text-indigo-200">Ursula & Jessica</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-pink-500/20 p-2 rounded-lg">
                    <Heart className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Investition</h4>
                    <p className="text-indigo-200">129€ pro Person<br/><span className="text-sm opacity-80">Alles inklusive</span></p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={createPageUrl("Contact")}>
                  <Button className="font-headline w-full sm:w-auto bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white rounded-full px-8 py-6 text-lg shadow-[0_0_20px_rgba(219,39,119,0.4)] transition-all duration-300 flex items-center justify-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Jetzt Platz sichern
                  </Button>
                </Link>
              </div>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

