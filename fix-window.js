const fs = require('fs');
const path = require('path');

function fixWindowVars() {
  const filesToFix = [
    'src/components/home/FeaturedProducts.jsx',
    'src/components/home/ServicesPreview.jsx',
    'src/pages/about.jsx',
    'src/pages/services.jsx',
    'src/pages/shop.jsx'
  ];

  filesToFix.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(/window\.innerWidth/g, "(typeof window !== 'undefined' ? window.innerWidth : 1024)");
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Fixed innerWidth in ${file}`);
    }
  });

  const urlFiles = [
    { file: 'src/pages/agb.jsx', url: 'https://www.ursulaheinke.de/agb' },
    { file: 'src/pages/datenschutz.jsx', url: 'https://www.ursulaheinke.de/datenschutz' },
    { file: 'src/pages/impressum.jsx', url: 'https://www.ursulaheinke.de/impressum' },
  ];

  urlFiles.forEach(({ file, url }) => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(/\{window\.location\.href\}/g, `"${url}"`);
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Fixed href in ${file}`);
    }
  });
}

fixWindowVars();

