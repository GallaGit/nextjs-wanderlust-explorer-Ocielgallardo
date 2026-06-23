import type { Experience, ExperienceCategory } from "@/types/experience";

const CATEGORIES: ExperienceCategory[] = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

const LOCATIONS = [
  { city: "Split", country: "Croatia" },
  { city: "Bangkok", country: "Thailand" },
  { city: "Rome", country: "Italy" },
  { city: "Nairobi", country: "Kenya" },
  { city: "El Calafate", country: "Argentina" },
  { city: "Athens", country: "Greece" },
  { city: "Kyoto", country: "Japan" },
  { city: "Marrakech", country: "Morocco" },
  { city: "Reykjavik", country: "Iceland" },
  { city: "Cusco", country: "Peru" },
  { city: "Bali", country: "Indonesia" },
  { city: "Lisbon", country: "Portugal" },
  { city: "Cape Town", country: "South Africa" },
  { city: "Queenstown", country: "New Zealand" },
  { city: "Barcelona", country: "Spain" },
  { city: "Vancouver", country: "Canada" },
  { city: "Santorini", country: "Greece" },
  { city: "Hanoi", country: "Vietnam" },
  { city: "Mexico City", country: "Mexico" },
  { city: "Zermatt", country: "Switzerland" },
];

const TITLE_TEMPLATES: Record<ExperienceCategory, string[]> = {
  Adventure: [
    "Ruta de vela en {place}",
    "Escuela de vela en {place}",
    "Tour privado de navegacion en {place}",
    "Senderismo en {place}",
    "Rafting en {place}",
    "Escalada en {place}",
    "Buceo en {place}",
    "Safari en {place}",
    "Ciclismo de montana en {place}",
    "Parapente en {place}",
  ],
  Culture: [
    "Tour historico por {place}",
    "Museos y arte en {place}",
    "Arquitectura colonial en {place}",
    "Ruta de templos en {place}",
    "Teatro y musica local en {place}",
    "Barrios iconicos de {place}",
    "Patrimonio UNESCO en {place}",
    "Ceremonia tradicional en {place}",
    "Galerias de arte en {place}",
    "Caminata cultural en {place}",
  ],
  Food: [
    "Tour gastronomico en {place}",
    "Clase de cocina en {place}",
    "Mercado local y degustacion en {place}",
    "Ruta de vinos en {place}",
    "Street food en {place}",
    "Brunch gourmet en {place}",
    "Cata de quesos en {place}",
    "Experiencia de cafe en {place}",
    "Cena con chef local en {place}",
    "Sabores tradicionales de {place}",
  ],
  Wellness: [
    "Retiro de yoga en {place}",
    "Spa y termas en {place}",
    "Meditacion al amanecer en {place}",
    "Banos termales en {place}",
    "Mindfulness en la naturaleza de {place}",
    "Masaje y bienestar en {place}",
    "Detox weekend en {place}",
    "Pilates al aire libre en {place}",
    "Sound healing en {place}",
    "Retiro de silencio en {place}",
  ],
  Nature: [
    "Observacion de auroras en {place}",
    "Avistamiento de fauna en {place}",
    "Kayak en lagos de {place}",
    "Caminata por bosques de {place}",
    "Observacion de ballenas en {place}",
    "Tour de cascadas en {place}",
    "Fotografia de naturaleza en {place}",
    "Glaciares y montanas en {place}",
    "Snorkel en arrecifes cerca de {place}",
    "Reserva natural de {place}",
  ],
};

function buildExperiences(): Experience[] {
  const items: Experience[] = [];

  for (let index = 0; index < 100; index += 1) {
    const location = LOCATIONS[index % LOCATIONS.length];
    const category = CATEGORIES[index % CATEGORIES.length];
    const place =
      location.city === "El Calafate" ? "Patagonia" : location.city;
    const template =
      TITLE_TEMPLATES[category][
        Math.floor(index / LOCATIONS.length) % TITLE_TEMPLATES[category].length
      ];
    const title = template.replace("{place}", place);
    const price = 35 + ((index * 17) % 265);
    const rating = Math.min(4.9, Number((3.8 + (index % 12) * 0.1).toFixed(1)));

    items.push({
      id: String(index + 1),
      title,
      description: `Descubre ${title.toLowerCase()} con guias locales expertos. Una experiencia inolvidable en ${location.city}, ${location.country} con grupos reducidos y atencion personalizada.`,
      category,
      destination: `${location.city}, ${location.country}`,
      country: location.country,
      price,
      rating,
      imageUrl: `https://picsum.photos/seed/wonderlust-${index}/800/600`,
    });
  }

  return items;
}

const FEATURED_OVERRIDES: (Partial<Experience> & { id: string })[] = [
  {
    id: "1",
    title: "Ruta de vela en Croacia",
    description:
      "Navega por la costa dalmata con un skipper local. Ideal para quienes buscan aventura y paisajes mediterraneos.",
    category: "Adventure",
    destination: "Split, Croatia",
    country: "Croatia",
    price: 120,
    rating: 4.8,
    imageUrl: "https://picsum.photos/seed/wonderlust-sailing-croatia/800/600",
  },
  {
    id: "2",
    title: "Tour gastronomico en Bangkok",
    description:
      "Recorre mercados callejeros y restaurantes locales para descubrir los sabores mas autenticos de Tailandia.",
    category: "Food",
    destination: "Bangkok, Thailand",
    country: "Thailand",
    price: 65,
    rating: 4.7,
    imageUrl: "https://picsum.photos/seed/wonderlust-food-bangkok/800/600",
  },
  {
    id: "3",
    title: "Safari en Kenia",
    description:
      "Observa la fauna africana en su habitat natural con guias expertos en conservacion.",
    category: "Nature",
    destination: "Nairobi, Kenya",
    country: "Kenya",
    price: 210,
    rating: 4.9,
    imageUrl: "https://picsum.photos/seed/wonderlust-safari-kenya/800/600",
  },
  {
    id: "4",
    title: "Senderismo en Patagonia",
    description:
      "Camina entre glaciares y montanas en uno de los paisajes mas impresionantes del sur de Argentina.",
    category: "Adventure",
    destination: "El Calafate, Argentina",
    country: "Argentina",
    price: 95,
    rating: 4.8,
    imageUrl: "https://picsum.photos/seed/wonderlust-patagonia/800/600",
  },
  {
    id: "5",
    title: "Escuela de vela en Grecia",
    description:
      "Aprende las bases de la vela en aguas tranquilas del Egeo con instructores certificados.",
    category: "Adventure",
    destination: "Athens, Greece",
    country: "Greece",
    price: 140,
    rating: 4.6,
    imageUrl: "https://picsum.photos/seed/wonderlust-sailing-greece/800/600",
  },
  {
    id: "6",
    title: "Tour privado de navegacion",
    description:
      "Charter privado con ruta personalizada para grupos pequenos que buscan flexibilidad en el mar.",
    category: "Adventure",
    destination: "Santorini, Greece",
    country: "Greece",
    price: 260,
    rating: 4.9,
    imageUrl: "https://picsum.photos/seed/wonderlust-private-sailing/800/600",
  },
];

function applyFeaturedOverrides(items: Experience[]): Experience[] {
  return items.map((item) => {
    const override = FEATURED_OVERRIDES.find((featured) => featured.id === item.id);
    return override ? { ...item, ...override } : item;
  });
}

export const experiences: Experience[] = applyFeaturedOverrides(buildExperiences());

export const categories = CATEGORIES;

export function getExperienceById(id: string): Experience | undefined {
  return experiences.find((experience) => experience.id === id);
}

export function getUniqueCountries(): string[] {
  return [...new Set(experiences.map((experience) => experience.country))].sort();
}

export function getCategories(): ExperienceCategory[] {
  return categories;
}
