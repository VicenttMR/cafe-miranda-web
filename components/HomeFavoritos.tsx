"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { cafeConfig } from "@/config/cafe-miranda";

type Favorito = (typeof cafeConfig.favoritos)[0];

function DishCard({ item, index }: { item: Favorito; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href="/menu"
        className="group relative block overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
      >
        {/* Photo — the composed image with text block + food */}
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Colored accent top bar — slides in on hover */}
        <div
          className="absolute top-0 inset-x-0 h-[4px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10"
          style={{ backgroundColor: item.accentColor }}
        />

        {/* Bottom CTA — slides up on hover */}
        <div className="absolute inset-x-0 bottom-0 z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="bg-gradient-to-t from-black/85 via-black/60 to-transparent pt-16 pb-6 px-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-anton uppercase text-white text-xl leading-tight tracking-wide">
                  {item.name}
                </p>
                {item.subtitle && (
                  <p className="font-grotesk text-white/70 text-xs mt-0.5 leading-snug">
                    {item.subtitle}
                  </p>
                )}
              </div>
              <div
                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center ml-4"
                style={{ backgroundColor: item.accentColor }}
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle dark vignette — always present at bottom edge */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </Link>
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
              transition={{ duration: 0.5 }}
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

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {items.map((item, i) => (
            <DishCard key={item.name} item={item} index={i} />
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
