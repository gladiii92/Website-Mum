import React, { useState } from "react";
import Head from "next/head";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/Textarea";
import { Label } from "../components/ui/Label";
import { Phone, Mail, Clock, Heart, Send, Star, MessageCircle, ShieldCheck, Instagram, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, phone, message } = formData;
    const subject = encodeURIComponent("Anfrage für Beratung – Ursula Heinke");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTelefonnummer: ${phone}\nNachricht: ${message}`
    );

    // Öffnet den E-Mail-Client des Benutzers mit vorausgefüllten Formulardaten
    window.location.href = `mailto:Ursulaheinke@gmx.de?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 400);
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "+49 1590 1276286",
      url: "https://wa.me/4915901276286?text=Hallo%20Ursula%2C%20ich%20habe%20deine%20Webseite%20besucht%20und%20m%C3%B6chte%20gerne%20einen%20Termin%20f%C3%BCr%20eine%20pers%C3%B6nliche%20Beratung%20(Seelen-Klarheits-Kompass)%20anfragen."
    },
    {
      icon: Phone,
      title: "Telefon",
      details: "+49 1590 1276286",
    },
    {
      icon: Mail,
      title: "E-Mail",
      details: "Ursulaheinke@gmx.de",
    },
    {
      icon: Instagram,
      title: "Instagram",
      details: "@ursulaheinke",
      url: "https://www.instagram.com/ursulaheinke/"
    }
  ];

  return (
    <>
      <Head>
        <title>Kontakt - Ursula Heinke</title>
        <meta name="description" content="Kontaktieren Sie Ursula Heinke für ein Erstgespräch oder Anfragen zu spiritueller Beratung, Coaching und Heilsteinen." />
        <meta name="keywords" content="Kontakt Ursula Heinke, Erstgespräch Lebensberatung, spirituelles Coaching Termin" />
        <meta property="og:title" content="Kontakt - Ursula Heinke" />
        <meta property="og:description" content="Vereinbaren Sie ein Erstgespräch." />
        <meta property="og:url" content="https://www.ursulaheinke.de/contact" />
        <link rel="canonical" href="https://www.ursulaheinke.de/contact" />
      </Head>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
            Kontakt aufnehmen
          </h1>
          <p className="text-xl md:text-2xl text-indigo-300 max-w-3xl mx-auto leading-relaxed">
            Bereit für den ersten Schritt auf Deiner spirituellen Reise? Ich freue mich darauf, Dich kennenzulernen und Dich auf Deinem Weg zu begleiten.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="p-4">
              {/* WhatsApp Quick-Booking Card */}
              <div className="mb-8 p-6 md:p-8 bg-gradient-to-r from-slate-900/90 via-indigo-950/60 to-slate-900/90 border border-indigo-400/30 rounded-2xl shadow-xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-2 text-indigo-300 font-bold text-xs tracking-wide uppercase px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-400/20">
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
                      Empfohlener Buchungsweg
                    </div>
                    <h3 className="font-headline text-2xl font-bold text-white">
                      Direkt per WhatsApp anfragen
                    </h3>
                    <p className="text-sm text-indigo-200/90 max-w-xl leading-relaxed">
                      Klicke hier, um sofort eine vorbereitete Terminanfrage an Ursula zu senden. Schnelle persönliche Antwort direkt auf dein Smartphone.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/4915901276286?text=Hallo%20Ursula%2C%20ich%20habe%20deine%20Webseite%20besucht%20und%20m%C3%B6chte%20gerne%20einen%20Termin%20f%C3%BCr%20eine%20pers%C3%B6nliche%20Beratung%20(Seelen-Klarheits-Kompass)%20anfragen."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Chat starten"
                    className="w-full sm:w-auto flex-shrink-0 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-600 hover:from-indigo-400 hover:via-purple-500 hover:to-indigo-500 text-white shadow-xl shadow-indigo-950/60 border border-indigo-300/30 font-headline font-semibold text-base py-3.5 px-8 rounded-full flex items-center justify-center gap-2.5 group/btn transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 text-emerald-300 group-hover/btn:scale-110 transition-transform duration-300" />
                    <span>WhatsApp Chat starten</span>
                  </a>
                </div>
                <div className="mt-5 pt-3 border-t border-indigo-400/15 flex items-start gap-2 text-xs text-indigo-300/80">
                  <ShieldCheck className="w-4 h-4 text-indigo-300 flex-shrink-0 mt-0.5" />
                  <span>Wichtiger Hinweis: Termine werden erst nach Vereinbarung und Zahlungseingang (PayPal / Überweisung) fest reserviert. Keine kostenlose Lebensberatung im Chat.</span>
                </div>
              </div>

              <div className="font-headline text-2xl font-bold flex items-center gap-2 text-blue-200 mb-2">
                Oder: Anfrage per E-Mail senden
              </div>
              <p className="text-indigo-300 mb-8">
                Schreibe mir dein Anliegen gerne auch ausführlich über das Formular. Ich melde mich zeitnah bei dir zurück.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-green-950/60 border border-green-500/40 text-green-200 text-center font-medium">
                  Vielen Dank für deine Nachricht! Dein E-Mail-Programm sollte sich nun geöffnet haben. Bitte sende die E-Mail ab.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-indigo-300">Vollständiger Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Dein Name"
                      required
                      className="h-12 rounded-xl bg-slate-800/50 border-blue-400/20 focus:border-blue-400 text-indigo-100"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-indigo-300">E-Mail Adresse</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Deine@email.de"
                      className="h-12 rounded-xl bg-slate-800/50 border-blue-400/20 focus:border-blue-400 text-indigo-100"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-indigo-300">Telefonnummer</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+49 123 456 789"
                      className="h-12 rounded-xl bg-slate-800/50 border-blue-400/20 focus:border-blue-400 text-indigo-100"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-indigo-300">Ihre Nachricht</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Erzähle mir etwas über dich und Deine Wünsche für unser Gespräch..."
                    rows={6}
                    className="rounded-xl bg-slate-800/50 border-blue-400/20 focus:border-blue-400 text-indigo-100"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-headline w-full h-14 text-base font-semibold rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-400 hover:to-blue-400 text-white shadow-lg shadow-indigo-950/40 hover:shadow-indigo-900/30 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-indigo-300 mr-2"></div>
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Nachricht senden
                    </>
                  )}
                </Button>
                <p className="text-sm text-indigo-300/70 text-center">
                  * Pflichtfelder. Deine Daten werden vertraulich behandelt.
                </p>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3 "
          >
            {/* Contact Items */}
            <div className="mt-5 flex flex-col">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;

                const isWhatsApp = info.title.toLowerCase() === "whatsapp";
                const isEmail = info.title.toLowerCase() === "e-mail";
                const isPhone = info.title.toLowerCase() === "telefon";
                const isInstagram = info.title.toLowerCase() === "instagram";

                const href = isWhatsApp
                  ? info.url
                  : isEmail
                  ? `mailto:${info.details}`
                  : isPhone
                  ? `tel:${info.details}`
                  : isInstagram
                  ? info.url
                  : "#";

                const isExternal = isWhatsApp || isInstagram;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <a
                      href={href}
                      target={isExternal ? "_blank" : "_self"}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="p-3 flex items-start gap-4 rounded-xl hover:bg-indigo-900/30 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-900/50 to-blue-900/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-blue-200 mb-0">{info.title}</h3>
                        <p className="font-medium text-indigo-300">{info.details}</p>
                        {info.description && (
                          <p className="text-xs text-indigo-200/80 mt-1">{info.description}</p>
                        )}
                      </div>
                    </a>
                  </motion.div>
                );
              })}


              {/* Trust Elements */}
              <Card className="font-headline mt-12 bg-slate-900/30 backdrop-blur-sm border border-blue-400/10 shadow-lg rounded-2xl">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="flex justify-center gap-1 mb-3 mt-5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current text-yellow-300" />
                      ))}
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-blue-200">Vertrauen & Qualität</h3>
                    <p className="text-sm opacity-90 mb-5 text-indigo-300">
                      Über 34.500 Menschen haben bereits ihren Weg mit meiner Unterstützung gefunden.
                    </p>
                    <div className="space-y-2 text-sm text-indigo-200 mb-6 text-left max-w-[240px] mx-auto">
                      <p className="flex items-center gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Zertifizierte Lebensberaterin</span>
                      </p>
                      <p className="flex items-center gap-2.5">
                        <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                        <span>Perfekte Erstberatung</span>
                      </p>
                      <p className="flex items-center gap-2.5">
                        <Heart className="w-4 h-4 text-rose-400 shrink-0" />
                        <span>100% Vertraulichkeit</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}
