import type { Metadata } from "next";
import { Anton, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { cafeConfig } from "@/config/cafe-miranda";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import AnnouncementBar from "@/components/AnnouncementBar";
import RotatingStamp from "@/components/RotatingStamp";
import PageTransition from "@/components/PageTransition";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cafemiranda.es"),

  title: {
    default: "Café Miranda — Brunch & Tapas en Es Pujols, Formentera",
    template: "%s | Café Miranda Formentera",
  },
  description:
    "Café Miranda: brunch, desayunos y tapas en Es Pujols, Formentera. Abierto todos los días. Producto local, ambiente único. Reserva por WhatsApp.",

  keywords: [
    "brunch Formentera",
    "tapas Es Pujols",
    "desayuno Formentera",
    "café Formentera",
    "brunch Es Pujols",
    "restaurante Es Pujols Formentera",
    "Café Miranda Formentera",
    "donde desayunar Formentera",
    "brunch con vistas Formentera",
    "tapas Formentera",
    "breakfast Formentera",
    "donde comer Es Pujols",
  ],

  authors: [{ name: "Café Miranda" }],
  creator: "Café Miranda",
  publisher: "Café Miranda",

  alternates: {
    canonical: "https://cafemiranda.es",
    languages: {
      "es-ES": "https://cafemiranda.es",
      "en-GB": "https://cafemiranda.es",
    },
  },

  openGraph: {
    title: "Café Miranda — Brunch & Tapas en Es Pujols, Formentera",
    description:
      "Brunch, desayunos y tapas en el corazón de Es Pujols. Ambiente único, producto local. Abierto todos los días.",
    url: "https://cafemiranda.es",
    siteName: "Café Miranda",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Café Miranda — Brunch y Tapas en Es Pujols, Formentera",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Café Miranda — Brunch & Tapas en Formentera",
    description: "Brunch, desayunos y tapas en Es Pujols, Formentera.",
    images: ["/images/hero.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    // Añade aquí el código de verificación de Google Search Console cuando lo tengas:
    // google: "TU_CODIGO_AQUI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <head>
        {/* Schema JSON-LD — le dice a Google que esto es un restaurante local */}
        <LocalBusinessSchema />
      </head>
      <body className="antialiased bg-white">
        <RotatingStamp />
        <AnnouncementBar />
        <Navbar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
