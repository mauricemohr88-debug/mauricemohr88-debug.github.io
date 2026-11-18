// Freischaltung: Mitternacht Ortszeit am 19.11.2026. Offsets in Stunden zu UTC an diesem Datum.
export const ZONES: [string, string, number][] = [
  ['NZ', 'Neuseeland', 13], ['AU', 'Sydney, Melbourne', 11], ['JP', 'Japan', 9],
  ['IN', 'Indien', 5.5], ['AE', 'Dubai', 4], ['TR', 'Türkei', 3],
  ['DE', 'Deutschland, Österreich, Schweiz', 1], ['UK', 'Großbritannien', 0],
  ['BR', 'Brasilien (São Paulo)', -3], ['US', 'USA Ostküste', -5], ['US', 'USA Westküste*', -8],
];
const unlockUTC = (off: number) => Date.UTC(2026, 10, 19, 0, 0) - off * 3600e3;
const myUnlock = new Date(2026, 10, 19, 0, 0, 0).getTime();
const myOff = -new Date(myUnlock).getTimezoneOffset() / 60;
const day = new Intl.DateTimeFormat('de-DE', { weekday: 'short', day: '2-digit', month: '2-digit' });
const hm = new Intl.DateTimeFormat('de-DE', { hour: '2-digit', minute: '2-digit' });
const pad = (n: number) => String(n).padStart(2, '0');

function tick() {
  const now = Date.now();
  document.querySelectorAll<HTMLElement>('[data-countdown]').forEach((el) => {
    const diff = myUnlock - now;
    if (diff <= 0) { el.innerHTML = '<span class="cd-live"><i class="dot"></i>GTA 6 ist bei dir freigeschaltet</span>'; el.classList.remove('cd'); return; }
    const d = Math.floor(diff / 864e5), h = Math.floor(diff / 36e5) % 24, m = Math.floor(diff / 6e4) % 60, s = Math.floor(diff / 1e3) % 60;
    const parts: [number, string][] = [...(d > 0 ? [[d, 'Tage'] as [number, string]] : []), [h, 'Stunden'], [m, 'Minuten'], [s, 'Sekunden']];
    el.innerHTML = parts.map(([n, l]) => `<div class="cd-cell"><div class="cd-num">${pad(n)}</div><div class="cd-lbl">${l}</div></div>`).join('');
  });
  document.querySelectorAll<HTMLElement>('[data-firstlive]').forEach((el) => {
    const nz = unlockUTC(13);
    el.textContent = now >= nz
      ? `Neuseeland spielt seit ${day.format(nz)}, ${hm.format(nz)} Uhr deiner Zeit`
      : `Neuseeland startet zuerst: ${day.format(nz)}, ${hm.format(nz)} Uhr deiner Zeit`;
  });
  const list = document.querySelector<HTMLElement>('[data-tzlist]');
  if (list) {
    list.innerHTML = ZONES.map(([code, name, off]) => {
      const t = unlockUTC(off), live = now >= t, mine = off === myOff;
      return `<div class="tz${live ? ' is-live' : ''}${mine ? ' mine' : ''}">
        <span class="code">${code}</span>
        <div><div class="name">${name}</div><div class="state">${live ? '● Läuft schon' : mine ? 'Deine Zeitzone' : 'Noch gesperrt'}</div></div>
        <div class="when">${hm.format(t)}<small>${day.format(t)}</small></div></div>`;
    }).join('');
  }
}

let timer: number | undefined;
export function initTime() {
  if (timer) clearInterval(timer);
  if (!document.querySelector('[data-countdown],[data-tzlist],[data-firstlive]')) return;
  tick(); timer = window.setInterval(tick, 1000);
  document.querySelectorAll('[data-mytz]').forEach((el) => {
    el.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone.replace('_', ' ');
  });
}
