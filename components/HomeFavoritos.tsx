"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { cafeConfig } from "@/config/cafe-miranda";

type Favorito = (typeof cafeConfig.favoritos)[0];

function DishCard({
  item,
  index,
  variant = "square",
}: {
  item: Favorito;
  index: number;
  variant?: "feature" | "square";
}) {
  const isFeature = variant === "feature";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className="group relative overflow-hidden rounded-2xl w-full h-full"
    >
      <Image
        src={item.image}
        alt={item.name}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        sizes={isFeature ? "(max-width: 768px) 100vw, 50vw" : "33vw"}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

      {/* Teal top accent — grows on hover */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-miranda-teal origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
        {isFeature && (
          <p className="font-grotesk text-white/65 text-sm leading-snug mb-2 line-clamp-2">
            {item.description}
          </p>
        )}
        <p
          className={`font-anton uppercase text-white leading-tight line-clamp-2 ${
            isFeature ? "text-2xl mb-1.5" : "text-lg mb-1"
          }`}
        >
          {item.name}
        </p>
        <p className="font-grotesk text-miranda-teal font-medium text-sm">{item.price}</p>
      </div>
    </motion.div>
  );
}

export default function HomeFavoritos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const items = cafeConfig.favoritos;

  return (
    <section className="bg-miranda-cream" ref={ref}>
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 lg:mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="font-grotesk text-[11px] uppercase tracking-[0.28em] text-miranda-gray mb-3"
            >
              Lo que pide todo el mundo
            </motion.p>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.65 }}
                className="font-anton uppercase text-miranda-dark leading-none"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
              >
                NUESTROS
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.07 }}
                className="font-anton uppercase leading-none"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  WebkitTextStroke: "3px #C41E3A",
                  color: "transparent",
                }}
              >
                FAVORITOS.
              </motion.h2>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/menu"
              className="hidden sm:inline-flex items-center gap-1 font-grotesk text-sm text-miranda-dark border-b border-miranda-dark/30 hover:text-miranda-red hover:border-miranda-red transition-colors pb-px"
            >
              Ver carta completa →
            </Link>
          </motion.div>
        </div>

        {/* Editorial grid — dos filas */}

        {/* Fila 1: Feature (50% ancho) + 2 apiladas (50% ancho) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 mb-3 lg:mb-4">

          {/* Feature card — ocupa toda la altura de la fila */}
          <div className="aspect-[4/3] lg:aspect-auto" style={{ minHeight: "clamp(280px, 38vw, 480px)" }}>
            <DishCard item={items[0]} index={0} variant="feature" />
          </div>

          {/* 2 cards apiladas a la derecha */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-4">
            <div className="aspect-square lg:aspect-auto" style={{ minHeight: "clamp(130px, 18vw, 228px)" }}>
              <DishCard item={items[1]} index={1} />
            </div>
            <div className="aspect-square lg:aspect-auto" style={{ minHeight: "clamp(130px, 18vw, 228px)" }}>
              <DishCard item={items[2]} index={2} />
            </div>
          </div>
        </div>

        {/* Fila 2: 2 cards en móvil, 3 en sm+ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4">
          {items.slice(3, 6).map((item, i) => (
            <div
              key={item.name}
              className={`aspect-[4/3] sm:aspect-square ${i === 2 ? "hidden sm:block" : ""}`}
            >
              <DishCard item={item} index={i + 3} />
            </div>
          ))}
        </div>

        {/* CTA solo en móvil */}
        <div className="mt-8 sm:hidden text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-miranda-red text-white font-grotesk font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-miranda-red-dark transition-all"
          >
            Ver carta completa
          </Link>
        </div>

      </div>
    </section>
  );
}
