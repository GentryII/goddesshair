export type Product = {
  id: string;
  name: string;
  category: string;
  length: string;
  price: string;
  blurb: string;
  accent: "gold" | "pink";
};

export const products: Product[] = [
  {
    id: "silk-closure",
    name: "Silk Press Closure",
    category: "Closures",
    length: '14"–20"',
    price: "From MK 145,000",
    blurb: "HD lace, pre-plucked, bleached knots. Lies flat, no bulk.",
    accent: "gold",
  },
  {
    id: "body-wave-bundle",
    name: "Body Wave Bundle",
    category: "Bundles",
    length: '16"–26"',
    price: "From MK 68,000",
    blurb: "Double-drawn, 100% virgin donor hair. Holds a curl for weeks.",
    accent: "pink",
  },
  {
    id: "goddess-wig",
    name: "The Goddess Wig",
    category: "Wigs",
    length: '18"–24"',
    price: "From MK 210,000",
    blurb: "Glueless, adjustable band. Our signature install, ready to wear.",
    accent: "gold",
  },
  {
    id: "kinky-straight",
    name: "Kinky Straight Bundle",
    category: "Bundles",
    length: '14"–22"',
    price: "From MK 72,000",
    blurb: "Textured to blend with natural relaxed or transitioning hair.",
    accent: "pink",
  },
  {
    id: "frontal-13x4",
    name: "13x4 Frontal",
    category: "Frontals",
    length: '14"–22"',
    price: "From MK 165,000",
    blurb: "Ear-to-ear parting space, natural hairline, minimal shedding.",
    accent: "gold",
  },
  {
    id: "restore-oil",
    name: "Restore Hair Oil",
    category: "Hair Care",
    length: "60ml",
    price: "MK 18,500",
    blurb: "Castor, rosemary and biotin blend for edges and growth.",
    accent: "pink",
  },
];
