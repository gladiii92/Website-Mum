const fs = require('fs');
const file = 'g:/DAVID/Desktop/Mama/Website/src/components/home/HeroSection.jsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/Erstgesprch/g, 'Erstgespräch');
fs.writeFileSync(file, content, 'utf8');

