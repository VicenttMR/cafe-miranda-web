import { cafeConfig } from "@/config/cafe-miranda";

// JSON-LD structured data para que Google entienda que esto es un restaurante local.
// Aparece en rich results, Google Maps y búsquedas "brunch Formentera", etc.
export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "CafeOrCoffeeShop", "FoodEstablishment"],
    name: cafeConfig.name,
    description: cafeConfig.seo.description,
    url: "https://cafemiranda.es",
    telephone: cafeConfig.phoneTel,
    email: cafeConfig.email,
    image: [
      "https://cafemiranda.es/images/hero.png",
      "https://cafemiranda.es/images/about.png",
      "https://cafemiranda.es/images/menu-1.png",
    ],
    logo: "https://cafemiranda.es/images/logo.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Miramar, 30",
      addressLocality: "Es Pujols",
      addressRegion: "Illes Balears",
      postalCode: "07871",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: cafeConfig.coordinates.lat,
      longitude: cafeConfig.coordinates.lng,
    },
    hasMap: cafeConfig.googleMapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday","Tuesday","Wednesday","Thursday",
          "Friday","Saturday","Sunday",
        ],
        opens: "08:00",
        closes: "23:30",
      },
    ],
    servesCuisine: [
      "Brunch",
      "Tapas",
      "Mediterranean",
      "Spanish",
      "Breakfast",
    ],
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: cafeConfig.rating,
      reviewCount: cafeConfig.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      cafeConfig.instagramUrl,
      cafeConfig.googleMapsUrl,
    ],
    menu: "https://cafemiranda.es/menu",
    reservations: "https://cafemiranda.es/reservas",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Terraza", value: true },
      { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Merch", value: true },
    ],
    keywords:
      "brunch Formentera, tapas Es Pujols, desayuno Formentera, café Formentera, brunch Es Pujols, restaurante Formentera, Café Miranda",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
