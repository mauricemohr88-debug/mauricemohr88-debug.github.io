# Sechster Stern: Website (Version 2)

Astro 7, GSAP, Pagefind, Lucide, selbst gehostete Schriften (Anton, Instrument Sans, IBM Plex Mono).
Ersetzt die erste Version in `../website/`.

```bash
export PATH=/opt/homebrew/opt/node@24/bin:$PATH   # Node 24 LTS, nur für dieses Projekt
npm install
npm run build        # baut nach dist/ und erstellt den Suchindex
```

Astro 7.4.5 braucht Node 22.23.4 oder neuer. Node 24 ist über Homebrew separat installiert (node@24), die normale Node-Installation bleibt unverändert.

## Wo was liegt
- `src/data/facts.ts`: alle Fakten und Quellen. Neue Fakten nur mit Quelle eintragen.
- `src/data/world.ts`: Figuren, Regionen, versteckte Details (eigene Worte, Quelle Rockstar)
- `src/assets/rockstar/`: offizielle Screenshots von rockstargames.com/VI/media (zum Teilen freigegeben, Credit Pflicht)
- `src/data/videos.ts`: Shorts (neue oben eintragen, Standbild nach `src/assets/shorts/`)
- `src/pages/`: eine Datei pro Seite
- `src/styles/global.css`: Design

## Vor dem Livegang
- Domain in `astro.config.mjs` und `public/robots.txt` eintragen
- Impressum und Hosting-Anbieter in Datenschutz ausfüllen


## Noch nicht drin, mit Grund
- Interaktive Karte (Leaflet): erst, wenn es belegte Orte gibt. Ohne Daten wäre es eine leere Karte.
