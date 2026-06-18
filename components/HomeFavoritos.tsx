"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { cafeConfig } from "@/config/cafe-miranda";

type Favorito = (typeof cafeConfig.favoritos)[0];

// ─── Variants ────────────────────────────────────────────────────────────────

const photoVariants: Variants = {
  rest: { scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  hover: { scale: 1.07, transition: { duration: 0.8, ease: "easeOut" } },
};

// Label wipes in top-to-bottom with clipPath
const labelVariants: Variants = {
  rest: {
    clipPath: "inset(0% 0% 100% 0%)",
    transition: { duration: 0.38, ease: [0.7, 0, 0.84, 0] },
  },
  hover: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const dividerVariants: Variants = {
  rest: { scaleX: 0, transition: { duration: 0.2 } },
  hover: { scaleX: 1, transition: { duration: 0.35, delay: 0.38, ease: "easeOut" } },
};

const ctaVariants: Variants = {
  rest: { y: 18, opacity: 0, transition: { duration: 0.2 } },
  hover: { y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.22, ease: [0.16, 1, 0.3, 1] } },
};

const nameFadeVariants: Variants = {
  rest: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  hover: { opacity: 0, y: 6, transition: { duration: 0.18 } },
};

// ─── Card ────────────────────────────────────────────────────────────────────

function DishCard({
  item,
  index,
  isInView,
}: {
  item: Favorito;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.11, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        initial="rest"
        animate="rest"
        whileHover="hover"
        className="group"
      >
        <Link
          href="/menu"
          className="relative block overflow-hidden rounded-2xl aspect-[3/4] select-none"
          aria-label={`Ver ${item.name} en la carta`}
        >

          {/* ── Food photo ── */}
          <motion.div variants={photoVariants} className="absolute inset-0 will-change-transform">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover object-bottom"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority={index < 2}
            />
          </motion.div>

          {/* Permanent gradient — bottom 55% dark vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

          {/* ── Card number (editorial) ── */}
          <div className="absolute top-4 left-4 z-10 font-grotesk text-white/30 text-[10px] tracking-[0.22em] uppercase select-none">
            {String(index + 1).padStart(2, "0")} / 04
          </div>

          {/* ── Rest state: dish name ── */}
          <motion.div
            variants={nameFadeVariants}
            className="absolute bottom-0 inset-x-0 z-10 px-5 pb-5 pt-10"
          >
            <h3
              className="font-anton uppercase text-white leading-tight"
              style={{ fontSize: "clamp(1.15rem, 1.8vw, 1.4rem)" }}
            >
              {item.name}
            </h3>
            {item.subtitle && (
              <p className="font-grotesk text-white/55 text-xs mt-1 leading-snug">
                {item.subtitle}
              </p>
            )}
          </motion.div>

          {/* ── Texto label — wipes down on hover ── */}
          <motion.div
            variants={labelVariants}
            className="absolute top-0 inset-x-0 z-20 overflow-hidden"
            style={{ height: "52%", backgroundColor: item.accentColor }}
          >
            <div className="absolute inset-0 scale-[1.4] origin-top">
              <Image
                src={item.textoImage}
                alt=""
                fill
                className="object-cover object-top"
                aria-hidden
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </motion.div>

          {/* ── Accent divider ── */}
          <motion.div
            variants={dividerVariants}
            className="absolute z-30 inset-x-0 h-[3px] origin-left"
            style={{ top: "52%", backgroundColor: item.accentColor }}
          />

          {/* ── Hover CTA ── */}
          <motion.div
            variants={ctaVariants}
            className="absolute bottom-0 inset-x-0 z-20 px-5 pb-5"
          >
            <div className="flex items-center gap-3">
              <div className="h-px bg-white/35 flex-1" />
              <span className="font-grotesk text-white/90 text-[10px] uppercase tracking-[0.22em] whitespace-nowrap">
                Ver en carta
              </span>
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: item.accentColor }}
              >
                <svg
                  className="w-3.5 h-3.5 text-white"
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
          </motion.div>

        </Link>
      </motion.div>
    </motion.div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function HomeFavoritos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const items = cafeConfig.favoritos;

  return (
    <section className="bg-miranda-cream overflow-hidden" ref={ref}>
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-14">
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

          {/* CTA desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.45 }}
            className="hidden sm:block flex-shrink-0"
          >
            <Link
              href="/menu"
              className="inline-flex items-center gap-1.5 font-grotesk text-sm text-miranda-dark border-b border-miranda-dark/30 hover:text-miranda-red hover:border-miranda-red transition-colors pb-px"
            >
              Ver carta completa →
            </Link>
          </motion.div>
        </div>

        {/* ── Grid: 1 col → 2×2 → 4 cols ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {items.map((item, i) => (
            <DishCard key={item.name} item={item} index={i} isInView={isInView} />
          ))}
        </div>

        {/* CTA móvil */}
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
