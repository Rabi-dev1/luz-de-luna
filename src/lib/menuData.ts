export type MenuItem = {
  id: string
  name: string
  description: string
  ingredients: string
  allergens: string
  price: string
  imageUrl: string
  badge?: string
  badgeType?: 'gold' | 'green' | 'red' | 'default'
}

export type MenuCategory = {
  id: string
  slug: string
  label: string
  shortLabel: string
  eyebrow: string
  description: string
  imageUrl: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'fruehstueck',
    slug: 'fruehstueck',
    label: 'Frühstück & Brunch',
    shortLabel: 'Frühstück',
    eyebrow: 'Ab 08:00 Uhr',
    description: 'Starten Sie den Tag mit frischen, regionalen Zutaten und handgemachten Spezialitäten.',
    imageUrl: '/images/omelett.jpg.jpeg',
    items: [
      {
        id: 'avocado-toast',
        name: 'Avocado Toast',
        description: 'Auf knusprigem Sauerteigbrot mit frischer Avocado',
        ingredients: 'Sauerteigbrot, reife Avocado, Feta-Käse, Kirschtomaten, Microgreens, Limettensaft, Olivenöl, Meersalz',
        allergens: 'Gluten (Weizen). Kann Spuren von Sesam enthalten.',
        price: '12,90 €',
        imageUrl: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=800&q=80',
        badge: 'Beliebt',
        badgeType: 'gold',
      },
      {
        id: 'shakshuka',
        name: 'Shakshuka',
        description: 'Pochierte Eier in gewürzter Tomatensauce mit frischem Koriander',
        ingredients: 'Eier (2 Stk.), Tomatensauce, rote Paprika, Zwiebeln, Kreuzkümmel, Paprika, frischer Koriander, Pita',
        allergens: 'Eier, Gluten. Enthält Sellerie.',
        price: '13,50 €',
        imageUrl: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&q=80',
        badge: 'Vegetarisch',
        badgeType: 'green',
      },
      {
        id: 'granola-bowl',
        name: 'Luna Granola Bowl',
        description: 'Hausgemachtes Granola, griechischer Joghurt, Saisonfrüchte',
        ingredients: 'Hafer-Granola (hausgemacht), griechischer Joghurt, saisonale Früchte, Honig, Chia-Samen, Mandeln',
        allergens: 'Gluten, Milch, Schalenfrüchte (Mandeln).',
        price: '9,90 €',
        imageUrl: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=800&q=80',
        badge: 'Vegetarisch',
        badgeType: 'green',
      },
      {
        id: 'eggs-benedict',
        name: 'Eggs Benedict',
        description: 'Englische Muffins, Serrano-Schinken, pochierte Eier, Hollandaise',
        ingredients: 'Englische Muffins, Serrano-Schinken, Eier (2 Stk.), Sauce Hollandaise, Schnittlauch',
        allergens: 'Gluten, Eier, Milch, Schwefeldioxid.',
        price: '14,90 €',
        imageUrl: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&q=80',
        badge: 'Signature',
        badgeType: 'gold',
      },
      {
        id: 'bircher-muesli',
        name: 'Bircher Müsli',
        description: 'Overnight Oats, Apfel, Walnüsse, Zimt, Ahornsirup',
        ingredients: 'Haferflocken, Apfel (gerieben), Walnüsse, Zimt, Ahornsirup, Hafermilch, Leinsamen',
        allergens: 'Gluten, Schalenfrüchte (Walnüsse). Vegan.',
        price: '8,90 €',
        imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
        badge: 'Vegan',
        badgeType: 'green',
      },
      {
        id: 'croissant-cafe',
        name: 'Croissant & Café',
        description: 'Buttercroissant, hausgemachte Marmelade, Espresso oder Cappuccino',
        ingredients: 'Buttercroissant (hausgemacht), saisonale Marmelade, Butter, Espresso-Shot oder Cappuccino nach Wahl',
        allergens: 'Gluten, Milch, Eier.',
        price: '7,50 €',
        imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80',
      },
    ],
  },
  {
    id: 'abendkarte',
    slug: 'abendkarte',
    label: 'Abendkarte',
    shortLabel: 'Dinner',
    eyebrow: 'Ab 17:00 Uhr',
    description: 'Regionale Küche mit mediterranen Einflüssen — für besondere Abende.',
    imageUrl: '/images/pasta.jpg.jpeg',
    items: [
      {
        id: 'rinderfilet-luna',
        name: 'Rinderfilet "Luna"',
        description: '200g Filet, Trüffelbutter, Pommes dauphine, Rotweinreduktion',
        ingredients: '200g Rinderfilet (regional), Trüffelbutter, Pommes dauphine, Rotweinreduktion, Thymianjus, Microgreens',
        allergens: 'Milch, Schwefeldioxid (Wein). Kann Spuren von Gluten enthalten.',
        price: '38,90 €',
        imageUrl: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=800&q=80',
        badge: 'Signature',
        badgeType: 'gold',
      },
      {
        id: 'branzino',
        name: 'Branzino intero',
        description: 'Ganzer Wolfsbarsch, gegrilltes Gemüse, Salsa Verde',
        ingredients: 'Wolfsbarsch (ganz, 400g), Zitrone, Knoblauch, frische Kräuter, gegrillte Zucchini, Salsa Verde, Kapern',
        allergens: 'Fisch. Kann Spuren von Schalentieren enthalten.',
        price: '32,90 €',
        imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80',
        badge: 'Beliebt',
        badgeType: 'gold',
      },
      {
        id: 'risotto-funghi',
        name: 'Risotto ai Funghi',
        description: 'Steinpilz-Risotto, Parmesan, Trüffelöl',
        ingredients: 'Arborio-Reis, Steinpilze, Parmigiano Reggiano (24 Monate), Trüffelöl, Weißwein, Schalotten, Butter',
        allergens: 'Milch, Gluten (Weizen im Wein), Schwefeldioxid.',
        price: '19,90 €',
        imageUrl: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80',
        badge: 'Vegetarisch',
        badgeType: 'green',
      },
      {
        id: 'rack-of-lamb',
        name: 'Rack of Lamb',
        description: 'Lammkotelett, Rosmarinjus, Ratatouille, Gratin Dauphinois',
        ingredients: 'Lammkotelett (regional, 300g), Rosmarin, Knoblauch, Kartoffel-Gratin, Ratatouille-Gemüse, Lammjus',
        allergens: 'Milch. Kann Spuren von Gluten enthalten.',
        price: '34,90 €',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
      },
      {
        id: 'veganes-menu',
        name: 'Veganes Menü',
        description: '4-Gang-Überraschungsmenü, saisonal & regional',
        ingredients: 'Saisonal wechselnd — bitte 48h Voranmeldung. Ausschließlich pflanzliche, regionale Zutaten aus Niedersachsen.',
        allergens: 'Kann Schalenfrüchte, Gluten oder Sesam enthalten. Bitte bei Reservierung angeben.',
        price: '55,00 €',
        imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
        badge: 'Vegan',
        badgeType: 'green',
      },
    ],
  },
  {
    id: 'drinks',
    slug: 'drinks',
    label: 'Drinks & Kaffee',
    shortLabel: 'Drinks',
    eyebrow: 'Täglich',
    description: 'Von morgendlichem Flat White bis zum nächtlichen Signature Cocktail.',
    imageUrl: '/images/getränk.jpg.jpeg',
    items: [
      {
        id: 'luna-cocktail',
        name: 'Luna Signature',
        description: 'Mezcal, Maracuja, Limette, Agavensirup, geräuchertes Salz',
        ingredients: 'Mezcal (30ml), frischer Maracujasaft, Limettensaft, Agavensirup, geräuchertes Meersalz, Eiswürfel',
        allergens: 'Enthält Alkohol (ca. 12% Vol.). Sulfite möglich.',
        price: '13,90 €',
        imageUrl: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80',
        badge: 'Signature',
        badgeType: 'gold',
      },
      {
        id: 'flat-white',
        name: 'Flat White',
        description: 'Doppelter Ristretto, aufgeschäumte Vollmilch, Latte Art',
        ingredients: 'Espresso (Doppelshot), aufgedämpfte Vollmilch, Rosette Latte Art. Hafer-, Mandel- oder Sojamilch auf Anfrage.',
        allergens: 'Milch. Alternativen auf Anfrage (laktosefrei, vegan).',
        price: '4,50 €',
        imageUrl: 'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=800&q=80',
        badge: 'Beliebt',
        badgeType: 'gold',
      },
      {
        id: 'aperol-spritz',
        name: 'Aperol Spritz',
        description: 'Aperol, Prosecco, Soda, Orangenscheibe',
        ingredients: 'Aperol (6cl), Prosecco DOC (9cl), Soda (3cl), frische Orangenscheibe, Eiswürfel',
        allergens: 'Enthält Alkohol. Sulfite.',
        price: '9,90 €',
        imageUrl: 'https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?w=800&q=80',
      },
      {
        id: 'luna-lemonade',
        name: 'Luna Lemonade',
        description: 'Hausgemacht — Zitrone, Ingwer, Minze, Holunder',
        ingredients: 'Frischer Zitronensaft, Ingwersirup (hausgemacht), Holunderblütensirup, Minze, Sodawasser, Eiswürfel',
        allergens: 'Alkoholfrei. Keine bekannten Allergene.',
        price: '5,90 €',
        imageUrl: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=800&q=80',
        badge: 'Alkoholfrei',
        badgeType: 'green',
      },
      {
        id: 'weinauswahl',
        name: 'Weinauswahl',
        description: 'Deutsche & internationale Winzer — Rot, Weiß, Rosé',
        ingredients: 'Wechselnde Auswahl regionaler und internationaler Weine. Bitte erfragen Sie unsere aktuelle Weinkarte.',
        allergens: 'Enthält Alkohol. Sulfite.',
        price: 'ab 6,90 € / Glas',
        imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
      },
    ],
  },
]
