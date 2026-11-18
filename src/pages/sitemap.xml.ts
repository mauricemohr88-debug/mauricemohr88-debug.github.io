import type { APIRoute } from 'astro';
import { UPDATED } from '../data/facts';

const pages = import.meta.glob('./*.astro', { eager: false });
const skip = ['404', 'suche', 'impressum', 'datenschutz'];

export const GET: APIRoute = ({ site }) => {
  const urls = Object.keys(pages)
    .map((p) => p.replace('./', '').replace('.astro', ''))
    .filter((p) => !skip.includes(p))
    .map((p) => new URL(p === 'index' ? '/' : `/${p}/`, site).href);
  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls
    .map((u) => `<url><loc>${u}</loc><lastmod>${UPDATED}</lastmod></url>`).join('')}</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
