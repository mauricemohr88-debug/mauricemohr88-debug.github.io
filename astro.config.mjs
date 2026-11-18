import { defineConfig } from 'astro/config';

// Eigene Domain später hier und in public/robots.txt eintragen (plus public/CNAME).
export default defineConfig({
  site: 'https://mauricemohr88-debug.github.io',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  image: { responsiveStyles: true },
});
