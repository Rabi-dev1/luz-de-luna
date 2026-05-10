export type MenuItem = {
  name: string
  description: string
  price: string
  tag?: string
}

export type MenuCategory = {
  id: string
  label: string
  emoji: string
  items: MenuItem[]
}

export const menuData: MenuCategory[] = [
  {
    id: 'breakfast',
    label: 'Frühstück',
    emoji: '☀️',
    items: [
      { name: 'Avocado Toast', description: 'Sauerteigbrot, Avocado, Feta, Kirschtomaten, Microgreens', price: '12,90 €', tag: 'Vegan möglich' },
      { name: 'Shakshuka', description: 'Pochierte Eier in gewürzter Tomatensauce, frischer Koriander, Pita', price: '13,50 €' },
      { name: 'Luna Granola Bowl', description: 'Hausgemachtes Granola, griechischer Joghurt, Saisonfrüchte, Honig', price: '9,90 €', tag: 'Vegetarisch' },
      { name: 'Eggs Benedict', description: 'Englische Muffins, Serrano-Schinken, pochiertes Ei, Hollandaise', price: '14,90 €' },
      { name: 'Croissant & Café', description: 'Buttercroissant, hausgemachte Marmelade, Espresso oder Cappuccino', price: '7,50 €' },
      { name: 'Bircher Müsli', description: 'Overnight Oats, Apfel, Walnüsse, Zimt, Ahornsirup', price: '8,90 €', tag: 'Vegan' },
    ],
  },
  {
    id: 'lunch',
    label: 'Lunch',
    emoji: '🌿',
    items: [
      { name: 'Hannover Burger', description: 'Dry-Aged-Patty, karamellisierte Zwiebeln, Bergkäse, hausgemachte Sauce', price: '17,90 €' },
      { name: 'Pasta al Limone', description: 'Frische Pasta, Zitronenbutter, Parmesan, frisches Basilikum', price: '14,90 €', tag: 'Vegetarisch' },
      { name: 'Quinoa Power Bowl', description: 'Quinoa, geröstete Kichererbsen, Feta, Granatapfel, Tahini-Dressing', price: '15,50 €', tag: 'Glutenfrei' },
      { name: 'Schnitzel Wiener Art', description: 'Kalbsschnitzel, Kartoffelsalat, Preiselbeeren, Zitrone', price: '22,90 €' },
      { name: 'Lachsfilet', description: 'Norwegischer Lachs, grüner Spargel, Beurre Blanc, Wildreis', price: '24,90 €' },
      { name: 'Tagesgericht', description: 'Täglich frisch zubereitet – bitte beim Personal erfragen', price: 'auf Anfrage', tag: "Chef's Special" },
    ],
  },
  {
    id: 'dinner',
    label: 'Dinner',
    emoji: '🌙',
    items: [
      { name: 'Rinderfilet "Luna"', description: '200g Filet, Trüffelbutter, Pommes dauphine, Rotweinreduktion', price: '38,90 €', tag: 'Signature' },
      { name: 'Branzino intero', description: 'Ganzer Wolfsbarsch, gegrilltes Gemüse, Salsa Verde, Kapern', price: '32,90 €' },
      { name: 'Risotto ai Funghi', description: 'Steinpilz-Risotto, Parmesan, Trüffelöl, frische Petersilie', price: '19,90 €', tag: 'Vegetarisch' },
      { name: 'Rack of Lamb', description: 'Lammkotelett, Rosmarinjus, Ratatouille, Gratin Dauphinois', price: '34,90 €' },
      { name: 'Bouillabaisse', description: 'Provenzalische Fischsuppe, Rouille, geröstetes Baguette', price: '26,90 €' },
      { name: 'Veganes Degustationsmenü', description: '4 Gänge, saisonal & regional, 48h Voranmeldung erbeten', price: '55,00 €', tag: 'Vegan' },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    emoji: '🍷',
    items: [
      { name: 'Luna Signature Cocktail', description: 'Mezcal, Maracuja, Limette, Agavensirup, geräuchertes Salz', price: '13,90 €', tag: 'Signature' },
      { name: 'Aperol Spritz', description: 'Aperol, Prosecco, Soda, Orangenscheibe', price: '9,90 €' },
      { name: 'Craft Beer Auswahl', description: 'Regionale Brauereien, wechselnde Auswahl – bitte erfragen', price: 'ab 4,50 €' },
      { name: 'Weinauswahl', description: 'Rotwein, Weißwein & Rosé – deutsche & internationale Winzer', price: 'ab 6,90 € / Glas' },
      { name: 'Flat White', description: 'Doppelter Ristretto, aufgeschäumte Vollmilch, Latte Art', price: '4,50 €' },
      { name: 'Luna Lemonade', description: 'Hausgemacht, Zitrone, Ingwer, Minze, Holunder – alkoholfrei', price: '5,90 €', tag: 'Alkoholfrei' },
    ],
  },
]
