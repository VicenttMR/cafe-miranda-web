"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { menuConfig } from "@/config/menu-items";

// Desktop grid placement for each of the 6 photos:
// ┌──────────┬──────────┬──────────┐
// │  foto 1  │  foto 2  │          │
// │  (tall)  │ (short)  │  foto 3  │
// │          ├──────────┤ (medium) │
// │          │  foto 4  │          │
// │          │ (short)  │          │
// ├──────────┴──────────┼──────────┤
// │     foto 5 (wide)   │  foto 6  │
// │                     │ (large)  │
// └─────────────────────┴──────────┘

const LG_PLACEMENTS: React.CSSProperties[] = [
  { gridColumn: "1", gridRow: "1 / 3" },
  { gridColumn: "2", gridRow: "1" },
  { gridColumn: "3", gridRow: "1 / 3" },
  { gridColumn: "2", gridRow: "2" },
  { gridColumn: "1 / 3", gridRow: "3" },
  { gridColumn: "3", gridRow: "3" },
];

export default function MenuGridMasonry() {
  const photos = menuConfig.masonry;

  return (
    <section className="bg-white py-4 px-4 sm:px-6 lg:px-8">
      <div className="container-max">

        {/* Mobile + tablet: simple 2-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:hidden">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden group"
              style={{ aspectRatio: "4/3" }}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <Image
                src={photo.image}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-miranda-red/0 group-hover:bg-miranda-red/20 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Desktop: asymmetric editorial masonry */}
        <div
          className="hidden lg:grid grid-cols-3 gap-4"
          style={{ gridTemplateRows: "260px 200px 340px" }}
        >
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden group"
              style={LG_PLACEMENTS[i]}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
            >
              <Image
                src={photo.image}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1280px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-miranda-red/0 group-hover:bg-miranda-red/25 transition-all duration-350" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
