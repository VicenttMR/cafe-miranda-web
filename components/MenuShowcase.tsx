"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cafeConfig } from "@/config/cafe-miranda";

// Fotos reales de Café Miranda
const menuImages = [
  "/images/menu-1.png", // café latte + croissant
  "/images/menu-2.png", // tarta con berries
  "/images/menu-3.png", // tapa en oblea
  "/images/menu-4.png", // tacos de pescado
  "/images/menu-5.png", // postre crema
  "/images/menu-6.png", // vinos
];

export default function MenuShowcase({ hideHeader = false }: { hideHeader?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="menu" className="bg-white overflow-hidden" ref={ref}>

      {/* Header teal — oculto cuando viene de página dedicada */}
      {!hideHeader && <div className="bg-miranda-teal px-6 py-12 sm:py-16">
        <div className="container-max">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                className="font-grotesk text-white/70 text-sm uppercase tracking-widest mb-2"
              >
                Lo que cocinamos
              </motion.p>
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "100%" }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 0.7 }}
                  className="font-anton uppercase text-white leading-none"
                  style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
                >
                  EL MENÚ
                </motion.h2>
              </div>
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "100%" }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.08 }}
                  className="font-anton uppercase leading-none"
                  style={{
                    fontSize: "clamp(3rem, 8vw, 7rem)",
                    WebkitTextStroke: "3px white",
                    color: "transparent",
                  }}
                >
                  MIRANDA
                </motion.h2>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="font-grotesk text-white/70 text-base max-w-xs"
            >
              Carta viva. Producto local. Sin artificios.
            </motion.p>
          </div>
        </div>
      </div>}

      {/* ── EDITORIAL PHOTO GRID ── */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* Row 1: foto grande izquierda + dos apiladas derecha */}
        <div className="grid grid-cols-3 gap-3 lg:gap-4 mb-3 lg:mb-4">

          {/* Grande — café + croissant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.0 }}
            className="col-span-2 relative rounded-2xl overflow-hidden group"
            style={{ aspectRatio: "16/10" }}
          >
            <Image
              src={menuImages[0]}
              alt={cafeConfig.menuItems[0].name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              sizes="(max-width: 1024px) 66vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="font-grotesk font-semibold text-xs uppercase tracking-wider bg-miranda-red text-white px-3 py-1 rounded-full">
                {cafeConfig.menuItems[0].tag}
              </span>
              <p className="font-anton uppercase text-white text-2xl lg:text-3xl leading-none mt-2">
                {cafeConfig.menuItems[0].name}
              </p>
            </div>
          </motion.div>

          {/* Columna derecha: dos fotos apiladas */}
          <div className="col-span-1 flex flex-col gap-3 lg:gap-4">
            {[1, 2].map((idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 * idx }}
                className="relative flex-1 rounded-2xl overflow-hidden group min-h-[120px]"
              >
                <Image
                  src={menuImages[idx]}
                  alt={cafeConfig.menuItems[idx].name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  sizes="(max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="font-grotesk font-semibold text-[10px] uppercase tracking-wider bg-miranda-teal text-white px-2 py-0.5 rounded-full">
                    {cafeConfig.menuItems[idx].tag}
                  </span>
                  <p className="font-anton uppercase text-white text-sm lg:text-base leading-tight mt-1">
                    {cafeConfig.menuItems[idx].name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Row 2: tres fotos iguales */}
        <div className="grid grid-cols-3 gap-3 lg:gap-4">
          {[3, 4, 5].map((idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 * (idx - 2) }}
              className="relative rounded-2xl overflow-hidden group"
              style={{ aspectRatio: "4/5" }}
            >
              <Image
                src={menuImages[idx]}
                alt={cafeConfig.menuItems[idx].name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                sizes="(max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-grotesk font-semibold text-[10px] uppercase tracking-wider bg-miranda-red text-white px-2 py-0.5 rounded-full">
                  {cafeConfig.menuItems[idx].tag}
                </span>
                <p className="font-anton uppercase text-white text-base lg:text-xl leading-tight mt-1.5">
                  {cafeConfig.menuItems[idx].name}
                </p>
                <p className="font-grotesk text-white/60 text-xs mt-0.5 hidden group-hover:block">
                  {cafeConfig.menuItems[idx].description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-12 pt-8 border-t border-gray-100"
        >
          <p className="font-grotesk text-miranda-gray text-sm">
            ¿Alergias o necesidades especiales?
          </p>
          <a
            href={`https://wa.me/${cafeConfig.whatsapp}?text=${encodeURIComponent("Hola! ¿Podéis enviarme la carta completa? Gracias 🙏")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Carta completa por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
