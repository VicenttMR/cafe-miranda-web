// ============================================================
// MENÚ CAFÉ MIRANDA — edita todo el contenido del menú aquí
// ============================================================

export const menuConfig = {
  hero: {
    title: "NUESTRO MENÚ",
    subtitle: "Comida que enamora",
    image: "/images/hero.png",
  },

  categories: [
    {
      name: "DESAYUNOS",
      image: "/images/menu-1.png",
      items: [
        { name: "Café + Croissant", price: 6.50 },
        { name: "Tostadas Aguacate + Huevo", price: 8.50 },
        { name: "Granola Con Berries", price: 7.50 },
        { name: "Zumo 100% Fruta", price: 6.00 },
      ],
    },
    {
      name: "BRUNCH",
      image: "/images/menu-2.png",
      items: [
        { name: "Pancakes Con Berries", price: 12.50 },
        { name: "Huevos Benedictinos", price: 13.00 },
        { name: "Tarta Fresas + Nata", price: 9.50 },
        { name: "Avocado Toast Premium", price: 11.00 },
      ],
    },
    {
      name: "TAPAS",
      image: "/images/menu-5.png",
      items: [
        { name: "Hummus Con Pulpo", price: 8.00 },
        { name: "Berenjena Parmesana", price: 7.50 },
        { name: "Jamón Ibérico", price: 14.00 },
        { name: "Camarones Al Ajillo", price: 10.50 },
      ],
    },
    {
      name: "BEBIDAS",
      image: "/images/menu-6.png",
      items: [
        { name: "Café Especialidad", price: 4.50 },
        { name: "Smoothie Fruta Roja", price: 7.00 },
        { name: "Vino Blanco (copa)", price: 6.00 },
        { name: "Cerveza Artesanal", price: 5.50 },
      ],
    },
  ],

  destacado: {
    badge: "ESTRELLA DEL MENÚ",
    name: "Pancakes Con Berries",
    description: "Esponjosos pancakes con frambuesas frescas, miel casera, crema batida y polvo de canela. El plato que todos piden.",
    price: 12.50,
    image: "/images/menu-1.png",
    rating: 4.9,
    cta: "RESERVAR AHORA",
  },

  masonry: [
    { image: "/images/menu-1.png", alt: "Brunch Miranda" },
    { image: "/images/menu-2.png", alt: "Brunch dulce" },
    { image: "/images/menu-3.png", alt: "Tapa del chef" },
    { image: "/images/menu-4.png", alt: "Plato del día" },
    { image: "/images/menu-5.png", alt: "Tapas selección" },
    { image: "/images/menu-6.png", alt: "Bebidas" },
  ],

  secundario: {
    badge: "TAMBIÉN RECOMENDAMOS",
    name: "Hummus Con Pulpo",
    description: "Cremoso hummus con tentáculo de pulpo a la brasa, pimentón ahumado y aceite de oliva virgen extra. Un clásico reinventado.",
    price: 8.00,
    image: "/images/menu-5.png",
    rating: 4.6,
    cta: "RESERVAR AHORA",
  },

  cta: {
    headline: "¿Tienes hambre?",
    subheadline: "Elige tu opción favorita",
    primaryButton: "Reservar Mesa por WhatsApp",
    secondaryButton: "Ver Carta Completa",
    whatsappPhone: "34603319813",
    whatsappMessage: "Hola! Me gustaría reservar una mesa en Café Miranda 🍳",
  },
};

export type MenuConfig = typeof menuConfig;
