// ============================================================
// MENÚ CAFÉ MIRANDA — edita precios, nombres y descripciones aquí
// Añade dietary tags: "vegan" | "dairy-free" | "sin-gluten"
// ============================================================

export type DietaryTag = "vegan" | "dairy-free" | "sin-gluten";
export type MenuCategoryId = "todos" | "desayunos" | "brunch" | "tapas" | "bebidas";

export interface MenuItem {
  id: number;
  name: string;
  category: Exclude<MenuCategoryId, "todos">;
  price: number;
  description: string;
  image: string;
  rating?: number;
  isFavorite?: boolean;
  dietary?: DietaryTag[];
  badge?: string;
}

export const CATEGORIES: { id: MenuCategoryId; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "desayunos", label: "Desayunos" },
  { id: "brunch", label: "Brunch" },
  { id: "tapas", label: "Tapas" },
  { id: "bebidas", label: "Bebidas" },
];

export const DIETARY_LABELS: Record<DietaryTag, string> = {
  vegan: "Vegano",
  "dairy-free": "Sin lácteos",
  "sin-gluten": "Sin gluten",
};

export const menuItems: MenuItem[] = [
  // ── DESAYUNOS ──
  {
    id: 1,
    name: "Café + Croissant",
    category: "desayunos",
    price: 6.50,
    description: "Latte con arte, croissant de mantequilla y fruta fresca",
    image: "/images/menu-1.png",
    rating: 4.7,
  },
  {
    id: 2,
    name: "Tostadas Aguacate + Huevo",
    category: "desayunos",
    price: 8.50,
    description: "Pan artesano, aguacate cremoso, huevo pochado y semillas",
    image: "/images/menu-2.png",
    rating: 4.8,
    isFavorite: true,
    dietary: ["vegan"],
  },
  {
    id: 3,
    name: "Granola Con Berries",
    category: "desayunos",
    price: 7.50,
    description: "Granola artesanal, yogur, miel y frutos rojos frescos",
    image: "/images/menu-3.png",
    dietary: ["sin-gluten"],
  },
  {
    id: 4,
    name: "Zumo 100% Fruta",
    category: "desayunos",
    price: 6.00,
    description: "Exprimido al momento, sin azúcar añadido",
    image: "/images/menu-4.png",
    dietary: ["vegan", "sin-gluten"],
  },
  // ── BRUNCH ──
  {
    id: 5,
    name: "Pancakes Con Berries",
    category: "brunch",
    price: 12.50,
    description: "Esponjosos pancakes con frambuesas frescas, arándanos y miel",
    image: "/images/menu-1.png",
    rating: 4.9,
    isFavorite: true,
    badge: "Más pedido",
  },
  {
    id: 6,
    name: "Tarta Fresas + Nata",
    category: "brunch",
    price: 9.50,
    description: "Tarta casera con fresas de temporada y nata montada",
    image: "/images/menu-2.png",
    rating: 4.8,
  },
  {
    id: 7,
    name: "Huevos Benedictinos",
    category: "brunch",
    price: 13.00,
    description: "Huevos pochados, jamón, salsa holandesa y pan brioche tostado",
    image: "/images/menu-3.png",
    rating: 4.7,
  },
  {
    id: 8,
    name: "Avocado Toast Premium",
    category: "brunch",
    price: 11.00,
    description: "Aguacate, tomate cherry, microgreens y aceite de oliva AOVE",
    image: "/images/menu-4.png",
    isFavorite: true,
    dietary: ["vegan"],
  },
  // ── TAPAS ──
  {
    id: 9,
    name: "Hummus Con Pulpo",
    category: "tapas",
    price: 8.00,
    description: "Hummus cremoso, tentáculo de pulpo a la brasa y pimentón",
    image: "/images/menu-5.png",
    rating: 4.6,
  },
  {
    id: 10,
    name: "Berenjena Parmesana",
    category: "tapas",
    price: 7.50,
    description: "Berenjena asada, parmesano curado y tomate especiado",
    image: "/images/menu-6.png",
    dietary: ["vegan"],
  },
  {
    id: 11,
    name: "Jamón Ibérico",
    category: "tapas",
    price: 14.00,
    description: "Lonchas de jamón ibérico de bellota con pan con tomate",
    image: "/images/menu-3.png",
    rating: 4.9,
    badge: "Premium",
  },
  {
    id: 12,
    name: "Camarones Al Ajillo",
    category: "tapas",
    price: 10.50,
    description: "Camarones salteados con ajo, guindilla y aceite de oliva",
    image: "/images/menu-4.png",
    rating: 4.7,
  },
  // ── BEBIDAS ──
  {
    id: 13,
    name: "Café Especialidad",
    category: "bebidas",
    price: 4.50,
    description: "Granos de origen único, preparación artesanal",
    image: "/images/menu-1.png",
    dietary: ["dairy-free"],
  },
  {
    id: 14,
    name: "Smoothie Fruta Roja",
    category: "bebidas",
    price: 7.00,
    description: "Fresas, arándanos, plátano y leche de almendras",
    image: "/images/menu-2.png",
    dietary: ["vegan", "dairy-free"],
  },
  {
    id: 15,
    name: "Vino Blanco (copa)",
    category: "bebidas",
    price: 6.00,
    description: "Selección de vinos blancos locales e ibicencos",
    image: "/images/menu-5.png",
  },
  {
    id: 16,
    name: "Cerveza Artesanal",
    category: "bebidas",
    price: 5.50,
    description: "Cerveza local artesanal, selección rotativa de temporada",
    image: "/images/menu-6.png",
  },
];

export const favoriteItems = menuItems.filter((item) => item.isFavorite);
