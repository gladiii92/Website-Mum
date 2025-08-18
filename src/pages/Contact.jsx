import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card"; // Relativer Pfad
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/Textarea";
import { Label } from "../components/ui/Label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/Select";
import { MapPin, Phone, Mail, Clock, Heart, Send, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert("Vielen Dank für Ihre Nachricht! Ich melde mich innerhalb von 24 Stunden bei Ihnen.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      details: "+49 (0) 123 456 789",
      description: "Mo-Fr 9-18 Uhr, Sa 10-16 Uhr"
    },
    {
      icon: Mail,
      title: "E-Mail",
      details: "info@seelenwege.de",
      description: "Antwort innerhalb von 24h"
    },
    {
      icon: MapPin,
      title: "Praxis",
      details: "Musterstraße 123, 12345 Musterstadt",
      description: "Zentral gelegen, gut erreichbar"
    },
    {
      icon: Clock,
      title: "Öffnungszeiten",
      details: "Mo-Fr 9:00 - 18:00 Uhr",
      description: "Termine nach Vereinbarung"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-b from-indigo-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent">
              Kontakt aufnehmen
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bereit für den ersten Schritt auf Ihrer spirituellen Reise? 
            Ich freue mich darauf, Sie kennenzulernen und Sie auf Ihrem Weg zu begleiten.
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
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="p-8">
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <Heart className="w-6 h-6 text-purple-600" />
                  Kostenloses Erstgespräch vereinbaren
                </CardTitle>
                <p className="text-gray-600 mt-2">
                  Lassen Sie uns in einem unverbindlichen Gespräch herausfinden, 
                  wie ich Sie am besten unterstützen kann.
                </p>
              </CardHeader>
              
              <CardContent className="p-8 pt-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Vollständiger Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Ihr Name"
                        required
                        className="h-12 rounded-xl border-purple-200 focus:border-purple-400"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail Adresse *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="ihre@email.de"
                        required
                        className="h-12 rounded-xl border-purple-200 focus:border-purple-400"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefonnummer</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+49 123 456 789"
                        className="h-12 rounded-xl border-purple-200 focus:border-purple-400"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service">Interessiert an</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger className="h-12 rounded-xl border-purple-200 focus:border-purple-400">
                          <SelectValue placeholder="Wählen Sie eine Option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="einzelcoaching">Einzelcoaching</SelectItem>
                          <SelectItem value="gruppenkurs">Gruppenkurs</SelectItem>
                          <SelectItem value="online_kurs">Online Kurs</SelectItem>
                          <SelectItem value="workshop">Workshop</SelectItem>
                          <SelectItem value="sonstiges">Sonstiges</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Ihre Nachricht</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Erzählen Sie mir etwas über sich und Ihre Wünsche für unser Gespräch..."
                      rows={6}
                      className="rounded-xl border-purple-200 focus:border-purple-400"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg font-semibold rounded-xl cosmic-gradient text-white hover:shadow-lg transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Nachricht senden
                      </>
                    )}
                  </Button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 mb-1">{info.title}</h3>
                          <p className="font-medium text-purple-700 mb-1">{info.details}</p>
                          <p className="text-sm text-gray-600">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}

            {/* Trust Elements */}
            <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="flex justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-yellow-300" />
                    ))}
                  </div>
                  <h3 className="font-bold text-lg mb-2">Vertrauen & Qualität</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Über 500 Menschen haben bereits ihren Weg mit meiner Unterstützung gefunden.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>✓ Zertifizierte Lebensberaterin</p>
                    <p>✓ Kostenlose Erstberatung</p>
                    <p>✓ 100% Vertraulichkeit</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}