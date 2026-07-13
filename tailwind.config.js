/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Scant alle JSX-Dateien in src/ für Tailwind-Klassen
  ],
  theme: {
    extend: {},  // Hier kannst du später Customisierungen hinzufügen
  },
  plugins: [],

  theme: {
    extend: {
      fontFamily: {
        headline: ['Playfair Display', 'serif'],        // Mystische Headlines
        section: ['Cormorant Garamond', 'serif'],      // Unterüberschriften / Sektionen
        body: ['Lato', 'sans-serif'],                  // Body Text, Specs, Healing
        accent: ['Great Vibes', 'cursive'],           // Magische Akzente / CTA
      },
    },
  },
};
