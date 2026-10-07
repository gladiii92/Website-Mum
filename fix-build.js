const fs = require('fs');
const path = require('path');

// Fix Layout.jsx
const layoutPath = path.join(__dirname, 'src', 'components', 'Layout.jsx');
if (fs.existsSync(layoutPath)) {
    let content = fs.readFileSync(layoutPath, 'utf8');
    content = content.replace(/import\s*\{\s*Link,\s*useLocation\s*\}\s*from\s*['"]react-router-dom['"];?/g, 'import Link from "next/link";\nimport { useRouter } from "next/router";');
    content = content.replace(/const\s+location\s*=\s*useLocation\(\);/g, 'const router = useRouter();\nconst location = { pathname: router.pathname };');
    fs.writeFileSync(layoutPath, content, 'utf8');
    console.log('Fixed Layout.jsx');
}

// Fix [slug].jsx
const slugPath = path.join(__dirname, 'src', 'pages', 'product', '[slug].jsx');
if (fs.existsSync(slugPath)) {
    let content = fs.readFileSync(slugPath, 'utf8');
    content = content.replace(/import\s*\{\s*Link,\s*useNavigate,\s*useParams\s*\}\s*from\s*['"]react-router-dom['"];?/g, 'import Link from "next/link";\nimport { useRouter } from "next/router";');
    // Fix relative imports since it moved one folder down
    content = content.replace(/from\s*['"]\.\.\/components/g, 'from "../../components');
    content = content.replace(/from\s*['"]\.\.\/utils/g, 'from "../../utils');
    content = content.replace(/from\s*['"]\.\.\/entities/g, 'from "../../entities');
    
    // Fix useNavigate and useParams
    content = content.replace(/const\s+navigate\s*=\s*useNavigate\(\);/g, 'const router = useRouter();');
    content = content.replace(/navigate\(/g, 'router.push(');
    
    fs.writeFileSync(slugPath, content, 'utf8');
    console.log('Fixed [slug].jsx');
}

console.log('Done fixing Next.js build errors.');

