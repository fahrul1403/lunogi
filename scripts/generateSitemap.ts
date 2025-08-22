const fs = require('fs');
const path = require('path');
const glob = require('glob');

const BASE_URL = 'https://lunogi.com';
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const PAGES_DIR = path.join(process.cwd(), 'app');

function generateSitemap() {
  const pages = getAllPages();
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `
  <url>
    <loc>${formatUrl(BASE_URL + page.url)}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;

  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully');
}

function formatUrl(url: string) {
  // Fix the "products" path in the URL
  return url.replace('lunogi.comproducts/', 'lunogi.com/products/');
}

function getAllPages() {
  const pages = [];

  // Add static pages
  pages.push({ url: '/', priority: '1.00' });
  pages.push({ url: '/blog', priority: '0.80' });

  // Add dynamic pages
  const files = glob.sync('**/*.tsx', { cwd: PAGES_DIR });
  files.forEach((file: string) => {
    if (file.includes('page.tsx')) {
      const url = '/' + file.replace('/page.tsx', '').replace('page.tsx', '');
      if (url !== '/' && url !== '/blog') {
        pages.push({ url, priority: '0.64' });
      }
    }
  });

  // Add product pages (you may need to adjust this based on your actual structure)
  const productFiles = glob.sync('**/productData.ts', { cwd: process.cwd() });
  productFiles.forEach((file: any) => {
    const content = fs.readFileSync(path.join(process.cwd(), file), 'utf-8');
    const links = content.match(/link:\s*['"]([^'"]+)['"]/g);
    links?.forEach((link: string) => {
      const match = link.match(/['"]([^'"]+)['"]/);
      if (match && match[1]) {
        const url = match[1];
        pages.push({ url, priority: '0.80' });
      }
    });
  });

  return pages;
}

generateSitemap();