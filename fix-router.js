const fs = require('fs');
const file = 'g:/DAVID/Desktop/Mama/Website/src/pages/product/[slug].jsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace('const router = useRouter();\n  const router = useRouter();', 'const router = useRouter();');
content = content.replace('const router = useRouter();\r\n  const router = useRouter();', 'const router = useRouter();');
fs.writeFileSync(file, content, 'utf8');

