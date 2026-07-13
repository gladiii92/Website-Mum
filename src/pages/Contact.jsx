import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/Textarea";
import { Label } from "../components/ui/Label";
import { Phone, Mail, Clock, Heart, Send, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, phone, message } = formData;
    const subject = encodeURIComponent("Anfrage für Erstgespräch");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTelefonnummer: ${phone}\nNachricht: ${message}`
    );

    // Öffnet den E-Mail-Client des Benutzers mit vorausgefüllten Formulardaten
    window.location.href = `mailto:Ursulaheinke@gmx.de?subject=${subject}&body=${body}`;

    // Optional: Zeige eine Benachrichtigung und setze das Formular zurück (nach einer kurzen Verzögerung)
    setTimeout(() => {
      alert("Vielen Dank für Ihre Nachricht! Ihr E-Mail-Client sollte sich nun öffnen. Bitte senden Sie die E-Mail ab.");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      details: "Nach Vereinbarung",
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
              <div className="font-headline text-2xl font-bold flex items-center gap-2 text-blue-200 mb-2">
                Erstgespräch vereinbaren
              </div>
              <p className="text-indigo-300 mb-8">
                Lass uns in einem unverbindlichen Gespräch herausfinden, wie ich Dich am besten unterstützen kann.
              </p>
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
                  className="font-headline w-full h-14 text-lg font-semibold rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 text-indigo-300 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
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

                const isEmail = info.title.toLowerCase() === "e-mail";
                const isPhone = info.title.toLowerCase() === "telefon";
                const isInstagram = info.title.toLowerCase() === "instagram";

                const href = isEmail
                  ? `mailto:${info.details}`
                  : isPhone
                  ? `tel:${info.details}`
                  : isInstagram
                  ? info.url
                  : "#";

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <a
                      href={href}
                      target={isInstagram ? "_blank" : "_self"}
                      rel={isInstagram ? "noopener noreferrer" : undefined}
                      className="p-1 flex items-start gap-4 rounded-xl hover:bg-indigo-900/20 transition-colors"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-900/50 to-blue-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-blue-200 mb-0">{info.title}</h3>
                        <p className="font-medium text-indigo-300">{info.details}</p>
                        {info.description}
                        <p className="text-s text-indigo-200/80 mb-4">{info.description}</p>
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
                    <div className="space-y-2 text-sm text-indigo-200 mb-6">
                      <p>✓ Zertifizierte Lebensberaterin</p>
                      <p>✓ Perfekte Erstberatung</p>
                      <p>✓ 100% Vertraulichkeit</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
