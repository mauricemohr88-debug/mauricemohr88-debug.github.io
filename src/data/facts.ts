// Jede Angabe auf der Seite kommt von hier. Quellen werden global nummeriert.
export const UPDATED = '2026-11-18';

export const SOURCES = {
  rockstar: { name: 'Rockstar Games: Grand Theft Auto VI', url: 'https://www.rockstargames.com/VI' },
  leonida: { name: 'Rockstar Games: Nur in Leonida', url: 'https://www.rockstargames.com/VI/only-in-leonida' },
  media: { name: 'Rockstar Games: Medien & Artworks', url: 'https://www.rockstargames.com/VI/media' },
  vice: { name: 'Vice: Midnight Release Times and Storage Size (3.11.2026)', url: 'https://www.vice.com/en/article/gta-6-midnight-release-times-file-size-preload/' },
  pcgamer: { name: 'PC Gamer: GTA 6 release times', url: 'https://www.pcgamer.com/games/grand-theft-auto/gta-6-release-time-date/' },
  launch: { name: 'Rockstar Games: GTA VI Launch-Trailer (offizieller Download)', url: 'https://www.rockstargames.com/VI/media/videos' },
  ytstream: { name: 'guided.news: GTA 6 Live at Launch', url: 'https://guided.news/en/news/gta-6-launch-youtube-livestream-start-time/' },
} as const;
export type SourceKey = keyof typeof SOURCES;
export const SOURCE_ORDER = Object.keys(SOURCES) as SourceKey[];

export const FACTS = {
  release: { text: 'GTA 6 erscheint am 19. November 2026 für PS5 und Xbox Series X|S.', src: ['rockstar'] },
  midnight: { text: 'Das Spiel schaltet in allen Regionen um Mitternacht Ortszeit frei.', src: ['vice', 'pcgamer'] },
  nz_first: { text: 'Auf der PS5 startet GTA 6 nach Ländern gestaffelt, Neuseeland zuerst.', src: ['vice'] },
  storage: { text: 'Auf der PS5 brauchst du mindestens 212 GB freien Speicher.', src: ['vice'] },
  preload: { text: 'Der PS5-Vorab-Download für digitale Vorbestellungen läuft seit dem 10. November 2026. Früher spielen geht damit nicht.', src: ['vice', 'rockstar'] },
  us_unclear: { text: 'Ob in den USA alle Zeitzonen gleichzeitig um Mitternacht Ostküstenzeit starten, haben weder Rockstar noch Sony bestätigt.', src: ['pcgamer'] },
  yt_stream: { text: 'YouTube zeigt ab 6:00 Uhr deutscher Zeit am 19.11. einen 24-Stunden-Launch-Stream mit über 30 Creatorn.', src: ['ytstream'] },
  setting: { text: 'Schauplatz ist Vice City und der umliegende Bundesstaat Leonida.', src: ['rockstar'] },
  duo: { text: 'Die Hauptfiguren sind Jason Duval und Lucia Caminos.', src: ['rockstar', 'leonida'] },
  ultimate: { text: 'Es gibt eine Ultimate Edition mit zusätzlichen Items rund um Jasons und Lucias Geschichte.', src: ['rockstar'] },
  vintage: { text: 'Wer vorbestellt, bekommt das Vintage Vice City Pack.', src: ['rockstar'] },
  trailers: { text: 'Rockstar hat bisher Trailer 1, Trailer 2, den Launch-Trailer und „Ein ausführlicher Blick“ veröffentlicht.', src: ['rockstar'] },
  gallery: { text: 'Rockstar stellt 138 offizielle Screenshots zum Herunterladen und Teilen bereit.', src: ['media'] },
} as const satisfies Record<string, { text: string; src: readonly SourceKey[] }>;
export type FactKey = keyof typeof FACTS;

export const fmtDate = (iso: string) => {
  const [y, m, d] = iso.split('-');
  return `${+d}.${+m}.${y}`;
};
