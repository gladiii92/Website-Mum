import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { Button } from './ui/Button';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Überprüfen, ob bereits eine Entscheidung gespeichert ist
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      // Kleine Verzögerung für geschmeidige Einblendung
      const timer = setTimeout(() => setShowBanner(true), 800);
      return () => clearTimeout(timer);
    } else if (consent === 'accepted') {
      // Wenn bereits akzeptiert, Consent Mode v2 für GA4 aktivieren
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied'
        });
      }
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
    }
    setShowBanner(false);
  };

  const handleDeclineAll = () => {
    localStorage.setItem('cookie_consent', 'declined');
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
    }
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-slate-950/95 backdrop-blur-xl border border-indigo-400/30 p-5 rounded-2xl shadow-2xl mystical-glow text-indigo-100 flex flex-col gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
          </div>
          <h4 className="font-headline text-sm font-bold text-white tracking-wide">
            Privatsphäre & Cookies
          </h4>
        </div>

        <p className="font-body text-xs text-indigo-200/90 leading-relaxed">
          Wir nutzen Google Analytics (mit anonymisierter IP), um den Besucherstrom unserer Seelen- & Beratungsangebote zu verstehen und die Webseite stetig zu verbessern. Du kannst selbst entscheiden, ob du der Reichweitenmessung zustimmst. Weitere Informationen findest du in unserer{' '}
          <Link href="/datenschutz" className="underline text-indigo-300 hover:text-white transition-colors">
            Datenschutzerklärung
          </Link>.
        </p>

        <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-indigo-400/15">
          <Button
            type="button"
            variant="ghost"
            onClick={handleDeclineAll}
            className="text-xs font-semibold px-4 py-2 rounded-full border border-indigo-300/30 hover:bg-white/10 text-indigo-200 hover:text-white transition-all"
          >
            Nur essenzielle
          </Button>
          <Button
            type="button"
            onClick={handleAcceptAll}
            className="text-xs font-semibold px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500 text-white border border-indigo-400/30 shadow-md shadow-indigo-950/40 hover:shadow-indigo-900/30 transition-all"
          >
            Alle akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
}
