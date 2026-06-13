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
      name: "Pancakes con Berries",
      description: "La torre de pancakes que viene a buscarte cada verano. Con berries frescas, sirope de arce y nata montada.",
      price: "12,50€",
      image: "/images/menu-1.png",
      badge: "El más pedido",
    },
    {
      name: "Huevos Benedictinos",
      description: "Clásico perfecto. Jamón ibérico, huevo poché y salsa holandesa. Sin trampa ni cartón.",
      price: "11,00€",
      image: "/images/menu-2.png",
      badge: "Clásico",
    },
    {
      name: "Tosta de Aguacate",
      description: "Pan de masa madre tostado, aguacate, tomate cherry y un toque de lima. Simple y brutal.",
      price: "9,50€",
      image: "/images/menu-3.png",
      badge: "Favorito",
    },
    {
      name: "Hummus con Pulpo",
      description: "Nuestro hummus casero con pulpo a la brasa. Una tapa que no olvidarás fácilmente.",
      price: "8,00€",
      image: "/images/menu-4.png",
      badge: "Tapa estrella",
    },
    {
      name: "Bowl de Açaí",
      description: "Açaí, granola casera, frutas del tiempo y miel. El desayuno más instagrameable de Es Pujols.",
      price: "10,00€",
      image: "/images/menu-5.png",
      badge: "Healthy",
    },
    {
      name: "Gin Tónica Miranda",
      description: "Gin premium, tónica artesanal, pepino y albahaca fresca. Para los que madrugaron poco.",
      price: "9,00€",
      image: "/images/menu-6.png",
      badge: "Bebida favorita",
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
