

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "../utils"; // Relativer Pfad zu utils
import { Home, ShoppingBag, Heart, User, Mail, Sparkles, Moon } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const navigation = [
    { name: "Startseite", href: createPageUrl("Home"), icon: Home },
    { name: "Shop", href: createPageUrl("Shop"), icon: ShoppingBag },
    { name: "Coaching", href: createPageUrl("Services"), icon: Heart },
    { name: "Über mich", href: createPageUrl("About"), icon: User },
    { name: "Kontakt", href: createPageUrl("Contact"), icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c1f44] to-[#3c1e69] text-indigo-100">
      <style>
        {`
          :root {
            --primary: #5b21b6; /* violet-700 */
            --secondary-blue: #1e3a8a; /* blue-700 */
            --accent-gold: #f59e0b; /* amber-500 */
            --glow: rgba(167, 139, 250, 0.2);
            --glow-strong: rgba(245, 158, 11, 0.2);
          }

          @keyframes subtle-glow {
            0% { box-shadow: 0 0 30px var(--glow), 0 0 10px var(--glow-strong); }
            50% { box-shadow: 0 0 45px var(--glow), 0 0 20px var(--glow-strong); }
            100% { box-shadow: 0 0 30px var(--glow), 0 0 10px var(--glow-strong); }
          }
          
          .mystical-glow {
            animation: subtle-glow 4s ease-in-out infinite;
          }
          
          .action-gradient {
            background: linear-gradient(135deg, #9747f1ff 0%, #3c86e7ff 100%); /* orange-500 to pink-500 */
          }
          
          .hero-bg-grid {
            background-image:
              radial-gradient(circle at 25px 25px, rgba(147, 197, 253, 0.1) 2%, transparent 0%),
              radial-gradient(circle at 75px 75px, rgba(167, 139, 250, 0.1) 2%, transparent 0%);
            background-size: 100px 100px;
          }
        `}
      </style>

      {/* Header */}
      <header className="relative bg-black/20 backdrop-blur-md border-b border-blue-300/10 sticky top-0 z-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to={createPageUrl("Home")} className="group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Sparkles className="w-8 h-8 text-indigo-300 group-hover:text-white transition-colors duration-300" />
                  <div className="absolute inset-0 animate-pulse bg-indigo-400/20 rounded-full blur-md"></div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-200 to-indigo-300 bg-clip-text text-transparent">
                    Seelenwege
                  </h1>
                  <p className="text-sm text-blue-300/70 font-medium">Lebensberatung & Coaching</p>
                </div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-white action-gradient shadow-lg shadow-pink-500/20'
                        : 'text-blue-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                    {isActive && (
                      <div className="absolute inset-0 rounded-full action-gradient blur-md opacity-50 animate-pulse"></div>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="p-2 rounded-lg text-purple-700 hover:bg-purple-50 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        </div>
        <div className="relative">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-black/20 border-t border-blue-300/10 text-blue-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Sparkles className="w-6 h-6 text-indigo-300" />
                <h3 className="text-xl font-bold text-white">Seelenwege</h3>
              </div>
              <p className="text-blue-200/80 leading-relaxed">
                Ihr Weg zu innerer Balance und spirituellem Wachstum. 
                Authentische Lebensberatung mit Herz und Verstand.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Kontakt</h4>
              <div className="space-y-2 text-blue-200/80">
                <p>📧 info@seelenwege.de</p>
                <p>📞 +49 (0) 123 456 789</p>
                <p>📍 Musterstraße 123, 12345 Musterstadt</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Öffnungszeiten</h4>
              <div className="space-y-1 text-blue-200/80">
                <p>Mo-Fr: 9:00 - 18:00 Uhr</p>
                <p>Sa: 10:00 - 16:00 Uhr</p>
                <p>So: Nach Vereinbarung</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300">
            <p>&copy; 2024 Seelenwege. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
