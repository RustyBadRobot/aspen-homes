import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { getPrerenderRoutes, getSeoForPath, render } from '../.seo-ssr/entry-server.js';

const outputDirectory = path.resolve('dist');
const template = await readFile(path.join(outputDirectory, 'index.html'), 'utf8');
const routes = getPrerenderRoutes();

function escapeHtml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function buildStructuredData(pathname, seo) {
  const data = seo.type === 'article'
    ? {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: seo.title.replace(/ \| Aspen Homes$/, ''),
        description: seo.description,
        image: seo.image,
        datePublished: seo.publishedTime,
        mainEntityOfPage: seo.canonical,
        author: { '@type': 'Organization', name: 'Aspen Homes' },
        publisher: { '@type': 'Organization', name: 'Aspen Homes', url: 'https://aspen-homes.co.uk' },
      }
    : {
        '@context': 'https://schema.org',
        '@type': pathname === '/' ? 'WebSite' : 'WebPage',
        name: seo.title,
        description: seo.description,
        url: seo.canonical,
      };

  return JSON.stringify(data).replace(/</g, '\\u003c');
}

function buildDocument(pathname) {
  const seo = getSeoForPath(pathname);
  const appHtml = render(pathname);
  const seoMarkup = [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="robots" content="${escapeHtml(seo.robots)}" />`,
    `<link rel="canonical" href="${escapeHtml(seo.canonical)}" />`,
    '<meta property="og:site_name" content="Aspen Homes" />',
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    `<meta property="og:type" content="${seo.type}" />`,
    `<meta property="og:url" content="${escapeHtml(seo.canonical)}" />`,
    `<meta property="og:image" content="${escapeHtml(seo.image)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(seo.image)}" />`,
    `<script type="application/ld+json">${buildStructuredData(pathname, seo)}</script>`,
  ].join('\n    ');

  return template
    .replace(/\s*<title>[\s\S]*?<\/title>/i, '')
    .replace(/\s*<meta\s+(?:name="description"|property="og:[^"]+")[^>]*\/?>/gi, '')
    .replace('</head>', `    ${seoMarkup}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
}

for (const route of routes) {
  const destination = route === '/'
    ? path.join(outputDirectory, 'index.html')
    : path.join(outputDirectory, route.slice(1), 'index.html');
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, buildDocument(route), 'utf8');
}

await writeFile(path.join(outputDirectory, '404.html'), buildDocument('/404/'), 'utf8');

const sitemapRoutes = routes.filter((route) => getSeoForPath(route).robots === 'index, follow');
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemapRoutes.map((route) => `  <url><loc>${escapeHtml(getSeoForPath(route).canonical)}</loc></url>`),
  '</urlset>',
  '',
].join('\n');
await writeFile(path.join(outputDirectory, 'sitemap.xml'), sitemap, 'utf8');

await writeFile(path.join(outputDirectory, 'robots.txt'), 'User-agent: *\nAllow: /\n\nSitemap: https://aspen-homes.co.uk/sitemap.xml\n', 'utf8');

const canonicalProjects = routes.filter(
  (route) => route.startsWith('/portfolio/') && route.split('/').filter(Boolean).length === 2,
);
const redirects = [
  '/home/ / 301',
  '/horseshoe-lane-west-updates/ /news/ 301',
  ...canonicalProjects.map((route) => `${route.replace('/portfolio', '')} ${route} 301`),
  '/horseshoe-lane-west-updates/* /news/:splat 301',
  '',
].join('\n');
await writeFile(path.join(outputDirectory, '_redirects'), redirects, 'utf8');

console.log(`Pre-rendered ${routes.length} indexable and utility routes.`);
