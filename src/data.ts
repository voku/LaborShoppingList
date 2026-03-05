export type Item = {
  id: string;
  category: string;
  name: string;
  price: string;
  url: string;
};

export type Section = {
  id: string;
  title: string;
  description?: string;
  items: Item[];
};

export const sections: Section[] = [
  {
    id: 'prio1',
    title: 'Priorität 1 — Sofort kaufen',
    description: '(Sicherheit · Mikroskopie · Messgeräte)',
    items: [
      { id: 'p1-1', category: 'Sicherheit', name: 'uvex pheos s Schutzbrille (klar)', price: '10–14 €', url: 'https://www.amazon.de/s?k=uvex+pheos+s' },
      { id: 'p1-2', category: 'Sicherheit', name: 'Nitrilhandschuhe XS (100 St.)', price: '10–16 €', url: 'https://www.amazon.de/s?k=Nitrilhandschuhe+XS+puderfrei' },
      { id: 'p1-3', category: 'Sicherheit', name: 'Kinder-Laborkittel Baumwolle (128–140)', price: '12–25 €', url: 'https://www.amazon.de/s?k=Laborkittel+Kinder+Baumwolle+128-140' },
      { id: 'p1-4', category: 'Mikroskopie', name: 'Objektträger Kunststoff 50 Stück', price: '8–15 €', url: 'https://www.amazon.de/s?k=Objektträger+Kunststoff+50+Stück' },
      { id: 'p1-5', category: 'Mikroskopie', name: 'Dauerpräparate Mikroskop Set', price: '15–40 €', url: 'https://www.amazon.de/s?k=Dauerpräparate+Mikroskop+Set' },
      { id: 'p1-7', category: 'Messgerät', name: 'Feinwaage 0.01 g', price: '12–30 €', url: 'https://www.amazon.de/s?k=Feinwaage+0.01g' },
      { id: 'p1-8', category: 'Messgerät', name: 'Digitales Einstichthermometer', price: '9–25 €', url: 'https://www.amazon.de/s?k=Digital+Einstichthermometer+Edelstahlsonde' },
      { id: 'p1-9', category: 'Messgerät', name: 'pH-Teststreifen 0–14', price: '14–20 €', url: 'https://www.amazon.de/s?k=Macherey+Nagel+pH+Teststreifen' },
      { id: 'p1-10', category: 'Extras', name: 'UV-Taschenlampe 365 nm', price: '12–40 €', url: 'https://www.amazon.de/s?k=UV+Taschenlampe+365nm' },
    ]
  },
  {
    id: 'werkzeuge',
    title: 'Laborwerkzeuge',
    items: [
      { id: 'w-1', category: 'Flüssigkeiten', name: 'Transferpipetten 3 ml (100 Stück)', price: '8 €', url: 'https://www.amazon.de/s?k=Transferpipetten+3ml+100+Stück' },
      { id: 'w-2', category: 'Flüssigkeiten', name: 'PP-Becherglas & Messzylinder Set', price: '18 €', url: 'https://www.amazon.de/s?k=PP+Becher+Messzylinder+Set' },
      { id: 'w-3', category: 'Chemie', name: 'Magnetrührer ohne Heizung', price: '30–40 €', url: 'https://www.amazon.de/s?k=Magnetrührer+ohne+Heizung' },
      { id: 'w-4', category: 'Chemie', name: 'Edelstahl Spatel / Laborspatel Set', price: '12 €', url: 'https://www.amazon.de/s?k=Laborspatel+Edelstahl+Set' },
      { id: 'w-5', category: 'Chemie', name: 'Trichter + Filterpapier', price: '10–15 €', url: 'https://www.amazon.de/s?k=Trichter+Filterpapier+Rundfilter' },
      { id: 'w-6', category: 'Wasser', name: 'Spritzflasche 250 ml', price: '5 €', url: 'https://www.amazon.de/s?k=Spritzflasche+250+ml+PE' },
    ]
  },
  {
    id: 'doku',
    title: 'Dokumentation & Forschung',
    items: [
      { id: 'd-1', category: 'Laborbuch', name: 'Leuchtturm1917 A4 kariert', price: '20–25 €', url: 'https://www.amazon.de/s?k=Leuchtturm1917+A4+kariert' },
      { id: 'd-2', category: 'Proben', name: 'Probenröhrchen 10 ml Schraubdeckel', price: '9 €', url: 'https://www.amazon.de/s?k=Probenröhrchen+10+ml+Schraubdeckel' },
      { id: 'd-3', category: 'Outdoor', name: 'Carson MicroBrite Taschenmikroskop', price: '18 €', url: 'https://www.amazon.de/s?k=Carson+MicroBrite+Plus' },
      { id: 'd-4', category: 'Reinigung', name: 'Reagenzglasbürsten Set', price: '6 €', url: 'https://www.amazon.de/s?k=Reagenzglasbürste+Set' },
    ]
  },
  {
    id: 'verbrauch',
    title: 'Verbrauchsmaterial',
    items: [
      { id: 'v-1', category: 'Chemie', name: 'Natron (Backsoda)', price: '3 €', url: 'https://www.amazon.de/s?k=Natron+500g' },
      { id: 'v-2', category: 'Chemie', name: 'Zitronensäure Pulver', price: '6 €', url: 'https://www.amazon.de/s?k=Zitronensäure+Pulver+E330' },
      { id: 'v-3', category: 'Chemie', name: 'Wasserstoffperoxid 3 %', price: '4 €', url: 'https://www.amazon.de/s?k=Wasserstoffperoxid+3%25+250+ml' },
      { id: 'v-4', category: 'Material', name: 'Silikonschlauch 3–6 mm', price: '6 €/m', url: 'https://www.amazon.de/s?k=Silikonschlauch+3+mm+6+mm' },
      { id: 'v-5', category: 'Material', name: 'Einwegspritzen 5 ml (ohne Nadel)', price: '4 €', url: 'https://www.amazon.de/s?k=Einwegspritze+5ml+ohne+Nadel' },
      { id: 'v-6', category: 'Material', name: 'Ballons klein (20 Stück)', price: '3 €', url: 'https://www.amazon.de/s?k=Ballons+klein+20' },
      { id: 'v-7', category: 'Material', name: 'Messlöffel Set', price: '3 €', url: 'https://www.amazon.de/s?k=Messlöffel+Set+ml' },
    ]
  },
  {
    id: 'extras',
    title: 'Kleine Extras (optional, aber cool)',
    items: [
      { id: 'e-1', category: 'Fluoreszenz', name: 'UV-LED-Streifen 365 nm', price: '20–30 €', url: 'https://www.amazon.de/s?k=UV+LED+Streifen+365nm' },
      { id: 'e-2', category: 'Organisation', name: 'Sortierbox für Proben', price: '10–15 €', url: 'https://www.amazon.de/s?k=Sortierbox+Organizer' },
      { id: 'e-3', category: 'Schreiben', name: 'Fluoreszierende Marker', price: '4 €', url: 'https://www.amazon.de/s?k=Leuchtmarker+fluoreszierend' },
    ]
  }
];
