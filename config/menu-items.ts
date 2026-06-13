// ============================================================
// MENÚ CAFÉ MIRANDA — edita todo el contenido del menú aquí
// ============================================================

export const menuConfig = {
  hero: {
    title: "NUESTRO MENÚ",
    subtitle: "Comida que enamora",
    image: "/images/ambiente-tapas.jpg",
  },

  categories: [
    {
      name: "DESAYUNOS",
      image: "/images/cafe-croissant.png",
      items: [
        { name: "Café + Croissant", price: 6.50 },
        { name: "Tostadas Aguacate + Huevo", price: 8.50 },
        { name: "Granola Con Berries", price: 7.50 },
        { name: "Zumo 100% Fruta", price: 6.00 },
      ],
    },
    {
      name: "BRUNCH",
      image: "/images/pancakes-berries.jpg",
      items: [
        { name: "Pancakes Con Berries", price: 12.50 },
        { name: "Huevos Benedictinos", price: 13.00 },
        { name: "Tarta Fresas + Nata", price: 9.50 },
        { name: "Avocado Toast Premium", price: 11.00 },
      ],
    },
    {
      name: "TAPAS",
      image: "/images/tapa-bacalao.jpg",
      items: [
        { name: "Pulpo a la Plancha, Crema de Zanahoria y Jengibre", price: 18.00 },
        { name: "Milhojas de Bacalao Mantecado y Pan Carasau", price: 9.00 },
        { name: "Pan Brioche con Jamón Ibérico y Stracciatella", price: 12.00 },
        { name: "Berenjena Asada, Cremoso de Cabra y Granada", price: 11.00 },
        { name: "Tacos de Gambas Fritas y Mayonesa de Lima (x2)", price: 12.00 },
        { name: "Tartare de Atún, Manzana Verde y Pepino", price: 22.00 },
        { name: "Mejillones Thai, Leche de Coco y Lemongrass", price: 16.00 },
        { name: "Croquetas de Jamón Ibérico (x4)", price: 12.00 },
        { name: "Hummus de Garbanzos con Pulpo y Paprika", price: 8.00 },
        { name: "Chipirones Fritos con Mayonesa de Lima", price: 13.50 },
        { name: "Pan de Coca con Queso de Cabra, Pera y Miel", price: 7.00 },
        { name: "Patatas Bravas", price: 8.50 },
      ],
    },
    {
      name: "APERITIVOS & BEBIDAS",
      image: "/images/vino-copa.jpg",
      items: [
        { name: "Nachos con Guacamole, Cheddar y Jalapeños", price: null },
        { name: "Tabla de Jamón Ibérico", price: null },
        { name: "Sangría Miranda", price: null },
        { name: "Gin Tónic", price: null },
        { name: "Caipirinha / Caipiroska", price: null },
        { name: "Mojito", price: null },
        { name: "Spritz", price: null },
        { name: "Cerveza Estrella Galicia", price: null },
      ],
    },
  ],

  destacado: {
    badge: "ESTRELLA DEL MENÚ",
    name: "Pulpo a la Plancha",
    description: "Pulpo a la plancha con crema de zanahoria y jengibre, spicy crumble de almendras. Recomendamos con vermouth blanco aromático.",
    price: 18.00,
    image: "/images/ambiente-tapas.jpg",
    rating: 4.9,
    cta: "RESERVAR AHORA",
  },

  masonry: [
    { image: "/images/pancakes-berries.jpg", alt: "Pancakes Miranda" },
    { image: "/images/ambiente-tapas.jpg", alt: "Mesa de tapas Miranda" },
    { image: "/images/tapa-bacalao.jpg", alt: "Milhoja de bacalao" },
    { image: "/images/brioche-jamon.jpg", alt: "Brioche con jamón" },
    { image: "/images/berenjena-asada.jpg", alt: "Berenjena asada" },
    { image: "/images/tacos-pescado.jpg", alt: "Tacos de pescado" },
  ],

  secundario: {
    badge: "TAMBIÉN RECOMENDAMOS",
    name: "Pan Brioche con Jamón Ibérico",
    description: "Pan brioche con jamón ibérico, stracciatella y cebolla caramelizada (2 uind.). Recomendamos con Americano Miranda o MI.TO.",
    price: 12.00,
    image: "/images/brioche-jamon.jpg",
    rating: 4.8,
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
