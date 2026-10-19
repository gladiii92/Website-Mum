const fs = require('fs');
const { tarotCards } = require('../src/data/tarotCards.js');
const { lenormandCards } = require('../src/data/lenormandCards.js');
const { Product } = require('../src/entities/Product.jsx');
const { ServiceData } = require('../src/entities/Service.jsx');

const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/tarot', priority: '0.9', changefreq: 'weekly' },
  { url: '/lenormand', priority: '0.9', changefreq: 'weekly' },
  { url: '/shop', priority: '0.8', changefreq: 'weekly' },
  { url: '/about', priority: '0.7', changefreq: 'monthly' },
  { url: '/contact', priority: '0.7', changefreq: 'monthly' },
  { url: '/impressum', priority: '0.5', changefreq: 'monthly' },
  { url: '/datenschutz', priority: '0.5', changefreq: 'monthly' },
  { url: '/agb', priority: '0.5', changefreq: 'monthly' }
];

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

xml += '  <!-- Statische Hauptseiten -->\n';
for (const page of staticPages) {
  xml += '  <url>\n';
  xml += `    <loc>https://www.ursulaheinke.de${page.url}</loc>\n`;
  xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
  xml += `    <priority>${page.priority}</priority>\n`;
  xml += '  </url>\n';
}

xml += '\n  <!-- Tarot-Lexikon (22 Grosse Arkana) -->\n';
for (const card of tarotCards) {
  xml += '  <url>\n';
  xml += `    <loc>https://www.ursulaheinke.de/tarot/${card.slug}</loc>\n`;
  xml += '    <changefreq>weekly</changefreq>\n';
  xml += `    <priority>${card.slug === 'die-liebenden' ? '0.9' : '0.8'}</priority>\n`;
  xml += '  </url>\n';
}

xml += '\n  <!-- Lenormand-Bedeutungen (36 Karten - Hochrelevantes SEO DACH) -->\n';
for (const card of lenormandCards) {
  xml += '  <url>\n';
  xml += `    <loc>https://www.ursulaheinke.de/lenormand/${card.slug}</loc>\n`;
  xml += '    <changefreq>weekly</changefreq>\n';
  xml += `    <priority>${['das-herz', 'der-ring', 'der-herr', 'die-dame'].includes(card.slug) ? '0.9' : '0.8'}</priority>\n`;
  xml += '  </url>\n';
}

xml += '\n  <!-- Spirituelle Produkte, Horoskope, Heilsteine & Meditation -->\n';
for (const prod of Product) {
  xml += '  <url>\n';
  xml += `    <loc>https://www.ursulaheinke.de/product/${prod.slug}</loc>\n`;
  xml += '    <lastmod>2026-10-14</lastmod>\n';
  xml += '    <changefreq>weekly</changefreq>\n';
  xml += `    <priority>${prod.category === 'meditation' ? '0.8' : '0.7'}</priority>\n`;
  xml += '  </url>\n';
}

xml += '\n  <!-- Coaching, Readings, Ausbildungen & Seminare (High-Intent SEO) -->\n';
for (const service of ServiceData) {
  xml += '  <url>\n';
  xml += `    <loc>https://www.ursulaheinke.de/services/${service.slug}</loc>\n`;
  xml += '    <changefreq>weekly</changefreq>\n';
  xml += `    <priority>${['seelen-klarheits-kompass', 'ausbildung-kartenlegen', 'herzenspartner-check'].includes(service.slug) ? '0.95' : '0.9'}</priority>\n`;
  xml += '  </url>\n';
}

xml += '</urlset>\n';

fs.writeFileSync('./public/sitemap.xml', xml, 'utf8');
fs.writeFileSync('./sitemap.xml', xml, 'utf8');
console.log(`Sitemaps successfully generated! Total URLs: ${staticPages.length + tarotCards.length + lenormandCards.length + Product.length + ServiceData.length}`);

