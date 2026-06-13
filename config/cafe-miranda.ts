// ============================================================
// ARCHIVO DE CONFIGURACIÓN — CAFÉ MIRANDA
// Edita este archivo para personalizar toda la web.
// No necesitas tocar ningún componente.
// ============================================================

export const cafeConfig = {
  // Información básica
  name: "Café Miranda",
  tagline: "Brunch, Tapas y Amor",
  description:
    "Descubre Café Miranda. Brunch premium, tapas ibéricas y vibes únicos en el corazón de Es Pujols, Formentera.",

  // Contacto
  phone: "+34 603 31 98 13",
  phoneTel: "+34603319813",
  whatsapp: "34603319813",
  whatsappMessage:
    "Hola! Me gustaría reservar una mesa en Café Miranda 🍳",
  email: "hola@cafemiranda.es",

  // Ubicación
  address: "Av. Miramar, 30, 07871 Es Pujols, Illes Balears",
  city: "Es Pujols, Formentera",
  coordinates: { lat: 38.657, lng: 1.421 },
  googleMapsUrl: "https://maps.app.goo.gl/cafemiranda",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3082.9!2d1.421!3d38.657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCaf%C3%A9+Miranda!5e0!3m2!1ses!2ses!4v1234567890",

  // Redes sociales
  instagram: "cafemirandaformentera",
  instagramUrl: "https://www.instagram.com/cafemirandaformentera",
  tripadvisor: "",
  googleReviews:
    "https://search.google.com/local/reviews?placeid=cafemiranda",

  // Estadísticas visibles
  reviewCount: "633",
  rating: "4.2",
  yearsOpen: "8",

  // Horarios — edita según temporada
  hours: {
    "Lun – Dom": "08:00 – 23:30",
  },
  hoursNote: "Abierto todos los días. Horario de temporada alta.",

  // Colores de marca
  colors: {
    primary: "#C41E3A",
    secondary: "#1DB5AD",
  },

  // SEO
  seo: {
    title: "Café Miranda — Brunch & Tapas Es Pujols, Formentera",
    description:
      "Descubre Café Miranda. Brunch premium, tapas ibéricas y vibes únicos en Es Pujols. Menú, reservas y ubicación.",
    keywords:
      "brunch Formentera, tapas Es Pujols, desayuno Formentera, café Formentera, restaurante Es Pujols, Café Miranda",
    ogImage: "/images/og-image.jpg",
  },

  // Secciones: activar/desactivar
  sections: {
    showMerch: true,
    showInstagram: true,
    showTestimonials: true,
    showReservas: true,
  },

  // Menú showcase — títulos e imágenes de los 6 platos estrella
  menuItems: [
    {
      name: "Café & Croissant",
      description: "Latte con arte, croissant de mantequilla y fruta fresca",
      emoji: "☕",
      tag: "Desayuno",
    },
    {
      name: "Brunch Dulce",
      description: "Selección de pancakes y waffles con berries y frutas",
      emoji: "🥞",
      tag: "Brunch",
    },
    {
      name: "Tapa del Chef",
      description: "Elaboración del día con producto local de temporada",
      emoji: "🍽️",
      tag: "Tapas",
    },
    {
      name: "Tacos del Día",
      description: "Tacos con relleno del día, alioli casero y verduras",
      emoji: "🌮",
      tag: "Tapas",
    },
    {
      name: "Postre Miranda",
      description: "Creación dulce con ingredientes de temporada",
      emoji: "🍮",
      tag: "Postres",
    },
    {
      name: "Vinos & Bebidas",
      description: "Selección de vinos, cervezas artesanales y cócteles",
      emoji: "🍷",
      tag: "Bebidas",
    },
  ],

  // Testimonios — reemplaza con reviews reales de Google
  testimonials: [
    {
      name: "Sophie M.",
      origin: "París, Francia",
      rating: 5,
      text: "El mejor brunch de Formentera, sin duda. Los pancakes son increíbles y el ambiente es perfecto para empezar el día.",
      avatar: "SM",
    },
    {
      name: "Carlos R.",
      origin: "Barcelona, España",
      rating: 5,
      text: "Lugar único. Calidad premium, precios razonables y un equipo que pone el alma en cada plato. Volveremos.",
      avatar: "CR",
    },
    {
      name: "Emma K.",
      origin: "Amsterdam, Países Bajos",
      rating: 5,
      text: "Found this gem on our second day. The avocado toast and specialty coffee are outstanding. A must-visit!",
      avatar: "EK",
    },
    {
      name: "Marco T.",
      origin: "Milán, Italia",
      rating: 4,
      text: "Atmósfera inmejorable, comida deliciosa y servicio amable. El merch es un detalle genial para llevarse un recuerdo.",
      avatar: "MT",
    },
  ],

  // Merch
  merch: [
    { name: "Gorra Miranda", price: "€25", emoji: "🧢" },
    { name: "Camiseta Classic", price: "€35", emoji: "👕" },
    { name: "Tote Bag", price: "€20", emoji: "👜" },
    { name: "Pack Combo", price: "€55", emoji: "🎁" },
  ],
};

export type CafeConfig = typeof cafeConfig;
