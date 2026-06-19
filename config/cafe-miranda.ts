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
  coordinates: { lat: 38.7235194, lng: 1.4576397 },
  googleMapsUrl: "https://www.google.com/maps/place/Café+Miranda/@38.7235194,1.4576397,17z/data=!3m1!4b1!4m6!3m5!1s0x12995ea6b6be4577:0x81f7eb5bf1d536e0!8m2!3d38.7235194!4d1.4576397!16s%2Fg%2F11c45td3b0",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.83!2d1.4558726!3d38.7235194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12995ea6b6be4577%3A0x81f7eb5bf1d536e0!2sCaf%C3%A9+Miranda!5e0!3m2!1ses!2ses!4v1718736000000!5m2!1ses!2ses",

  // Redes sociales
  instagram: "cafemirandaformentera",
  instagramUrl: "https://www.instagram.com/cafemirandaformentera",
  tripadvisor: "",
  googleReviews:
    "https://www.google.com/maps/place/Café+Miranda/@38.7235194,1.4576397,17z/data=!4m8!3m7!1s0x12995ea6b6be4577:0x81f7eb5bf1d536e0!8m2!3d38.7235194!4d1.4576397!9m1!1b1",

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
      name: "Calamar con Sobrasada",
      subtitle: null,
      image: "/images/favorito-calamar-sobrasada.png",
      accentColor: "#eabcbe",
      labelTextColor: "#971c1d",
    },
    {
      name: "Boquerones en Saor",
      subtitle: "antigua receta veneciana",
      image: "/images/favorito-boquerones-saor.png",
      accentColor: "#f5ecab",
      labelTextColor: "#15b19c",
    },
    {
      name: "Tacos de Salmón",
      subtitle: "con mango y alga wakame",
      image: "/images/favorito-tacos-salmon.png",
      accentColor: "#15b19c",
      labelTextColor: "#eabcbe",
    },
    {
      name: "Milhojas de Bacalao",
      subtitle: "pan carasau y crema de pimiento",
      image: "/images/favorito-milhojas-bacalao.png",
      accentColor: "#971c1d",
      labelTextColor: "#f3ebab",
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

  // Testimonios — reseñas reales de Google Maps
  testimonials: [
    {
      name: "Cristian Pallarés",
      origin: "Local Guide · Google Maps",
      rating: 5,
      text: "Los zumos espectaculares. 100% fruta, sin bases preparadas. Son italianos, así que el café también de diez. Podrían cobrarte el doble o el triple y estarían en línea con algunos locales de Es Pujols.",
      avatar: "CP",
    },
    {
      name: "Daniela Barcia",
      origin: "Local Guide · Google Maps",
      rating: 5,
      text: "Excelente lugar para desayunar. Rápido y buenos precios. Variedad, opciones saludables y un café de especialidad espectacular. ¡Fuimos 2 días seguidos! Lo bueno se repite.",
      avatar: "DB",
    },
    {
      name: "Mané Campos",
      origin: "Local Guide · Google Maps",
      rating: 5,
      text: "Fantástica acogida desde que llegamos. Muy rico el hummus con pulpo, el trío de tartar de pescado — lubina, salmón y atún — exquisito. El postre, un semifrío de chocolate al amaretto, espectacular.",
      avatar: "MC",
    },
    {
      name: "Álvaro López",
      origin: "Local Guide · Google Maps",
      rating: 5,
      text: "Muy muy satisfecho con el servicio, la comida y el precio. Por fin, un sitio en Formentera que no exagere los precios. Calidad de comida y muy buen trato de todo su staff.",
      avatar: "AL",
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
