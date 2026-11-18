// Zusammenfassungen in eigenen Worten nach rockstargames.com/VI/only-in-leonida (abgerufen 18.11.2026).
import jason from '../assets/rockstar/jason-duval.jpg';
import lucia from '../assets/rockstar/lucia-caminos.jpg';
import cal from '../assets/rockstar/cal-hampton.jpg';
import boobie from '../assets/rockstar/boobie-ike.jpg';
import drequan from '../assets/rockstar/drequan-priest.jpg';
import dimez from '../assets/rockstar/real-dimez.jpg';
import raul from '../assets/rockstar/raul-bautista.jpg';
import brian from '../assets/rockstar/brian-heder.jpg';
import viceCity from '../assets/rockstar/vice-city-01.jpg';
import keys from '../assets/rockstar/leonida-keys.jpg';
import grassrivers from '../assets/rockstar/grassrivers.jpg';
import gellhorn from '../assets/rockstar/port-gellhorn.jpg';
import ambrosia from '../assets/rockstar/ambrosia.jpg';
import kalaga from '../assets/rockstar/mount-kalaga.jpg';

export const CHARACTERS = [
  { slug: 'jason-duval', name: 'Jason Duval', role: 'Hauptfigur', img: jason,
    text: 'Aufgewachsen zwischen Kleinkriminellen, danach bei der Army. Heute lebt er in den Keys und arbeitet für lokale Drogenschmuggler. Eigentlich will er nur ein einfacheres Leben.' },
  { slug: 'lucia-caminos', name: 'Lucia Caminos', role: 'Hauptfigur', img: lucia,
    text: 'Ihr Vater brachte ihr früh das Kämpfen bei. Weil sie sich für ihre Familie einsetzte, landete sie im Staatsgefängnis von Leonida. Frisch entlassen will sie das bessere Leben, von dem ihre Mutter schon in Liberty City geträumt hat.' },
  { slug: 'cal-hampton', name: 'Cal Hampton', role: 'Jasons Freund', img: cal,
    text: 'Arbeitet wie Jason für Brian. Am liebsten sitzt er zu Hause, hört den Funk der Küstenwache ab und glaubt so ziemlich jede Verschwörung aus dem Netz.' },
  { slug: 'boobie-ike', name: 'Boobie Ike', role: 'Lokale Legende', img: boobie,
    text: 'Hat sich von der Straße zu einem kleinen Imperium hochgearbeitet: Immobilien, ein Stripclub und ein Tonstudio. Freundlich, bis es ums Geschäft geht.' },
  { slug: 'drequan-priest', name: "Dre'Quan Priest", role: 'Musikmogul', img: drequan,
    text: 'Schon beim Dealen wollte er eigentlich Musik machen. Mit Boobie führt er Only Raw Records und hat Real Dimez unter Vertrag genommen.' },
  { slug: 'real-dimez', name: 'Real Dimez', role: 'Rap-Duo', img: dimez,
    text: 'Bae-Luxe und Roxy, befreundet seit der Highschool. Ein früher Hit mit dem Rapper DWNPLY machte sie bekannt, jetzt wollen sie bei Only Raw Records den nächsten.' },
  { slug: 'raul-bautista', name: 'Raul Bautista', role: 'Bankräuber', img: raul,
    text: 'Erfahren, charmant und gerissen. Er sucht ständig nach Leuten, die für die große Beute ein Risiko eingehen, und treibt dieses Risiko selbst gern nach oben.' },
  { slug: 'brian-heder', name: 'Brian Heder', role: 'Schmuggler', img: brian,
    text: 'Ein Schmuggler aus den alten Tagen der Keys. Mit seiner dritten Frau Lori betreibt er eine Bootswerft und lässt Jason mietfrei wohnen, solange der ihm hilft.' },
];

export const REGIONS = [
  { slug: 'vice-city', name: 'Vice City', img: viceCity },
  { slug: 'leonida-keys', name: 'Leonida Keys', img: keys },
  { slug: 'grassrivers', name: 'Grassrivers', img: grassrivers },
  { slug: 'port-gellhorn', name: 'Port Gellhorn', img: gellhorn },
  { slug: 'ambrosia', name: 'Ambrosia', img: ambrosia },
  { slug: 'mount-kalaga', name: 'Mount Kalaga National Park', img: kalaga },
];

// Versteckte Details: nur aus offiziellen Texten und Medientiteln von Rockstar.
export const DETAILS = [
  { slug: 'brians-marina', title: 'Brian\'s Marina im Launch-Trailer', text: 'Ab Sekunde 5 zeigt der Launch-Trailer ein großes Schild „Brian\'s Marina“, kurz danach poliert Jason dort ein Boot. Das passt zu Rockstars Beschreibung: Brian betreibt eine Bootswerft, und Jason wohnt mietfrei bei ihm, solange er hilft.', src: 'launch' },
  { slug: 'liberty-city', title: 'Liberty City existiert', text: 'Lucias Mutter träumte schon „in Liberty City“ von einem besseren Leben. Die Stadt aus GTA IV gehört also zur Welt von GTA 6.', src: 'leonida' },
  { title: 'Ein Sportwagen von 1995', text: 'Die Ultimate Edition enthält einen Grotti Cheetah, laut offiziellem Bildtitel Baujahr 1995.', src: 'media' },
  { title: 'Ein Oldtimer von 1955', text: 'Im Vintage Vice City Pack steckt ein Vapid Stanier, Baujahr 1955.', src: 'media' },
  { title: 'Zwei Revolver mit Namen', text: 'Die Ultimate Edition bringt die Revolver Hawk und Little Morgan mit.', src: 'media' },
  { title: 'Cal hört mit', text: 'Cal verbringt seine Abende damit, den Funk der Küstenwache abzuhören. Gut möglich, dass das im Spiel eine Rolle spielt.', src: 'leonida' },
  { title: 'Ein eigenes Plattenlabel', text: "Boobie und Dre'Quan betreiben Only Raw Records. Real Dimez ist dort unter Vertrag, ihr alter Hit entstand mit DWNPLY.", src: 'leonida' },
  { title: 'Lori und ihre Sangria', text: 'Brian ist mit Lori verheiratet, seiner dritten Frau. Jason soll ab und zu auf ein Glas ihrer Sangria vorbeischauen.', src: 'leonida' },
  { title: 'Staatsgefängnis von Leonida', text: 'Lucia saß im Staatsgefängnis von Leonida. Der Ort ist damit offiziell Teil der Geschichte.', src: 'leonida' },
] as const;
