"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  {
    href: "/menu",
    image: "/images/ambiente-tapas.jpg",
    tag: "Desayunos · Brunch · Tapas",
    title: "El Menú",
    description: "Carta viva. Producto local. Sin artificios.",
    color: "#C41E3A",
    num: "01",
  },
  {
    href: "/nosotros",
    image: "/images/clientes-mesa.png",
    tag: "Desde 2016",
    title: "Nosotros",
    description: "La historia de por qué abrimos — y por qué seguimos.",
    color: "#1DB5AD",
    num: "02",
  },
  {
    href: "/merch",
    image: "/images/neon-sign.png",
    tag: "Shop Miranda",
    title: "Merch",
    description: "Llévate un trozo de Formentera a casa.",
    color: "#C41E3A",
    num: "03",
  },
  {
    href: "/donde-estamos",
    image: "/images/about-interior.png",
    tag: "Es Pujols, Formentera",
    title: "Dónde estamos",
    description: "Av. Miramar, 30. A dos minutos de la playa.",
    color: "#1DB5AD",
    num: "04",
  },
];

export default function HomeNav() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const pathname = usePathname();

  return (
    <section className="bg-miranda-cream" ref={ref}>
      <div className="h-px bg-miranda-dark/8" />

      <div className="container-max px-4 sm:px-6 lg:px-8 py-14 lg:py-20">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="font-grotesk text-[11px] uppercase tracking-[0.28em] text-miranda-gray mb-8"
        >
          Explora
        </motion.p>

        {/* Grid — 1 col móvil, 2 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
          {pages.map((page, i) => {
            const isActive = pathname === page.href;
            return (
              <motion.div
                key={page.href}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={page.href}
                  className={`group relative flex overflow-hidden rounded-2xl w-full ${
                    isActive ? "ring-2 ring-miranda-teal" : ""
                  }`}
                  style={{ aspectRatio: "16/9" }}
                >
                  {/* Foto */}
                  <Image
                    src={page.image}
                    alt={page.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />

                  {/* Base dark overlay */}
                  <div className="absolute inset-0 bg-miranda-dark/40 group-hover:bg-miranda-dark/30 transition-colors duration-300" />

                  {/* Colored gradient — bottom */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${page.color}cc 0%, ${page.color}55 40%, transparent 70%)`,
                    }}
                  />

                  {/* Número grande — top left, semitransparente */}
                  <span
                    className="absolute top-4 left-5 font-anton text-white/20 leading-none select-none"
                    style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
                  >
                    {page.num}
                  </span>

                  {/* Contenido — siempre visible */}
                  <div className="relative z-10 flex flex-col justify-end w-full p-5 lg:p-6">

                    <p className="font-grotesk text-[10px] uppercase tracking-wider text-white/60 mb-2">
                      {page.tag}
                    </p>

                    <h3
                      className="font-anton uppercase text-white leading-none mb-2"
                      style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}
                    >
                      {page.title}
                    </h3>

                    <div className="flex items-center justify-between gap-4">
                      <p className="font-grotesk text-white/70 text-sm leading-snug">
                        {page.description}
                      </p>

                      {/* Arrow */}
                      <div
                        className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors duration-300"
                      >
                        <svg
                          className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
