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

  // Platos favoritos — mostrados en el home
  favoritos: [
    {
      name: "Pancakes Miranda",
      description: "La torre de pancakes con berries frescas, sirope de arce y nata. El plato que viene a buscarte cada verano.",
      price: "12,50€",
      image: "/images/pancakes-berries.jpg",
      badge: "El más pedido",
    },
    {
      name: "Milhojas de Bacalao",
      description: "Bacalao mantecado y pan carasau con crema de pimiento quemado. Una tapa que no olvidarás.",
      price: "9,00€",
      image: "/images/tapa-bacalao.jpg",
      badge: "Tapa estrella",
    },
    {
      name: "Pan Brioche con Jamón Ibérico",
      description: "Brioche, jamón ibérico, stracciatella y cebolla caramelizada (2 uind.). Con Americano Miranda.",
      price: "12,00€",
      image: "/images/brioche-jamon.jpg",
      badge: "Clásico",
    },
    {
      name: "Berenjena Asada",
      description: "Berenjena a la brasa con cremoso de cabra, menta, nueces y granada. Una tapa que sorprende.",
      price: "11,00€",
      image: "/images/berenjena-asada.jpg",
      badge: "Favorito",
    },
    {
      name: "Tacos de Gambas Fritas",
      description: "Gambas fritas, guacamole y mayonesa de lima (2 uind.). Los tacos que no esperabas en Formentera.",
      price: "12,00€",
      image: "/images/tacos-pescado.jpg",
      badge: "Imprescindible",
    },
    {
      name: "Tartare de Atún",
      description: "Atún, manzana verde, pepino y nube de ginebra. Con ginetto cítrico o vermouth blanco dry.",
      price: "22,00€",
      image: "/images/vino-copa.jpg",
      badge: "Premium",
    },
  ],

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
      text: "Los pancakes con berries son los mejores que he probado fuera de Nueva York. Volví dos veces en la misma semana.",
      avatar: "SM",
    },
    {
      name: "Carlos R.",
      origin: "Barcelona",
      rating: 5,
      text: "El hummus con pulpo es una tapa que no olvidarás. Y el café, perfecto. Ya es tradición parar aquí cada verano.",
      avatar: "CR",
    },
    {
      name: "Emma K.",
      origin: "Amsterdam",
      rating: 5,
      text: "Best brunch spot in Formentera, hands down. The avocado toast and the vibe are unbeatable. See you next summer.",
      avatar: "EK",
    },
    {
      name: "Marco T.",
      origin: "Milán, Italia",
      rating: 5,
      text: "Posto magico. Colazione, tapas, cocktail — tutto perfetto. L'atmosfera vale da sola la visita a Es Pujols.",
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
