const fs = require('fs');
const file = 'g:/DAVID/Desktop/Mama/Website/src/pages/product/[slug].jsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/<HelmetProvider>/g, '');
content = content.replace(/<\/HelmetProvider>/g, '');
fs.writeFileSync(file, content, 'utf8');

