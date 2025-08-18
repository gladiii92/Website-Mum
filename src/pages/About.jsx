import React from "react";
import { Card, CardContent } from "../components/ui/Card"; // Relativer Pfad
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Heart, Star, Award, Users, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const achievements = [
    { icon: Award, title: "Zertifizierte Lebensberaterin", desc: "Systemische Beratung & NLP Master" },
    { icon: Users, title: "500+ Klienten begleitet", desc: "In über 10 Jahren Praxis" },
    { icon: Star, title: "4.9/5 Bewertung", desc: "Von zufriedenen Klienten" },
    { icon: Heart, title: "Ganzheitlicher Ansatz", desc: "Körper, Geist & Seele im Einklang" }
  ];

  const values = [
    "Authentizität und Ehrlichkeit in jeder Begegnung",
    "Respektvoller Umgang mit spirituellen Traditionen", 
    "Individuelle Begleitung ohne Dogmen",
    "Wissenschaftlich fundierte Methoden mit spiritueller Weisheit",
    "Vertraulichkeit und geschützte Räume"
  ];

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-b from-purple-50/30 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block mb-8">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face" 
              alt="Über mich"
              className="w-40 h-40 rounded-full object-cover shadow-2xl mx-auto mystical-glow"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-indigo-400/20 animate-pulse"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">
              Herzlich Willkommen
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ich bin Sarah Müller, Ihre Begleiterin auf dem Weg zu innerem Wachstum, 
            spiritueller Klarheit und authentischer Lebensführung.
          </p>
        </motion.div>

        {/* Main Story */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">
                    Meine Geschichte
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Vor über 15 Jahren begann meine eigene transformative Reise. Nach einer persönlichen Lebenskrise 
                      entdeckte ich die heilende Kraft der spirituellen Arbeit und die Weisheit alter Traditionen.
                    </p>
                    <p>
                      Heute verbinde ich wissenschaftlich fundierte Coaching-Methoden mit spirituellen Praktiken, 
                      um Menschen dabei zu helfen, ihre innere Wahrheit zu finden und ein authentisches Leben zu führen.
                    </p>
                    <p>
                      Meine Mission ist es, Sie dabei zu unterstützen, Ihre einzigartigen Gaben zu entdecken und 
                      einen Weg zu gehen, der wirklich zu Ihnen passt – frei von äußeren Erwartungen und Zwängen.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="" 
                    alt="Coaching Session"
                    className="rounded-2xl shadow-2xl w-full mystical-glow"
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Achievements */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent">
                Qualifikationen & Erfahrung
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.desc}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-3xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Meine Werte & Prinzipien</h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  Diese Grundsätze leiten meine Arbeit und prägen jede Begegnung mit meinen Klienten
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Sparkles className="w-5 h-5 mt-1 flex-shrink-0 text-purple-200" />
                    <p className="text-lg opacity-90">{value}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Personal Touch */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">
                    Was Sie erwartet
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      In unserer Zusammenarbeit werden Sie einen sicheren, wertungsfreien Raum finden, 
                      in dem Sie sich vollständig zeigen können. Ich begegne Ihnen mit Respekt, Empathie 
                      und der tiefen Überzeugung, dass jeder Mensch die Antworten bereits in sich trägt.
                    </p>
                    <p>
                      Mein Ansatz ist ganzheitlich und individuell. Gemeinsam erkunden wir Ihre Themen, 
                      integrieren neue Perspektiven und entwickeln praktische Schritte für Ihren Weg.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {["Systemische Beratung", "NLP Master", "Reiki Meisterin", "Kristalltherapie", "Meditation"].map((cert) => (
                      <Badge key={cert} className="bg-purple-100 text-purple-700 border-purple-200">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-2xl">
                    <Clock className="w-8 h-8 text-purple-600 mb-3" />
                    <h3 className="font-bold text-gray-800 mb-2">Termine</h3>
                    <p className="text-sm text-gray-600">Flexible Zeiten auch am Wochenende möglich</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
                    <Heart className="w-8 h-8 text-indigo-600 mb-3" />
                    <h3 className="font-bold text-gray-800 mb-2">Erstgespräch</h3>
                    <p className="text-sm text-gray-600">30 Min kostenloses Kennenlernen</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-3xl">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Bereit für Ihren ersten Schritt?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Lassen Sie uns in einem unverbindlichen Gespräch herausfinden, 
                wie ich Sie auf Ihrem Weg unterstützen kann.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-purple-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Heart className="w-5 h-5 mr-2" />
                Kostenloses Erstgespräch vereinbaren
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}