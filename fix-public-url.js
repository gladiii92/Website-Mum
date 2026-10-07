const fs = require('fs');
const path = require('path');

const filesToFix = [
  'src/entities/Product.jsx',
  'src/entities/Service.jsx'
];

filesToFix.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    content = content.replace(/\$\{process\.env\.PUBLIC_URL\}/g, '');
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Fixed PUBLIC_URL in ${file}`);
  }
});

