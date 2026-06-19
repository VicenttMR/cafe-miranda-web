"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Mantén las mismas rutas e imágenes que tienes actualmente.
// Solo cambia si quieres actualizar las fotos o los textos.
const pages = [
  {
    href: "/menu",
    image: "/images/ambiente-tapas.jpg",
    tag: "Desayunos · Brunch · Tapas",
    title: "El Menú",
    description: "Carta viva. Producto local. Sin artificios.",
    color: "#C41E3A",
  },
  {
    href: "/nosotros",
    image: "/images/clientes-mesa.png",
    tag: "Desde 2016",
    title: "Nosotros",
    description: "La historia de por qué abrimos — y por qué seguimos.",
    color: "#1DB5AD",
  },
  {
    href: "/merch",
    image: "/images/neon-sign.png",
    tag: "Shop Miranda",
    title: "Merch",
    description: "Gorras, camisetas y tote bags. Edición limitada.",
    color: "#C41E3A",
  },
  {
    href: "/donde-estamos",
    image: "/images/about-interior.png",
    tag: "Es Pujols, Formentera",
    title: "Dónde estamos",
    description: "Av. Miramar, 30. A dos minutos de la playa.",
    color: "#1DB5AD",
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

        {/* Grid de secciones */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {pages.map((page, i) => {
            const isActive = pathname === page.href;
            return (
              <motion.div
                key={page.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link
                  href={page.href}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-square lg:aspect-[3/4] ${
                    isActive ? "ring-2 ring-miranda-teal" : ""
                  }`}
                >
                  {/* Foto */}
                  <Image
                    src={page.image}
                    alt={page.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Colored gradient overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to top, ${page.color}99 0%, ${page.color}44 45%, transparent 72%)`,
                    }}
                  />

                  {/* Contenido */}
                  <div className="relative z-10 flex flex-col justify-end h-full p-4 lg:p-5">

                    {/* Tag pequeño */}
                    <p className="font-grotesk text-[10px] uppercase tracking-wider text-white/55 mb-1.5">
                      {page.tag}
                    </p>

                    {/* Título */}
                    <h3 className="font-anton uppercase text-white leading-tight text-xl lg:text-2xl mb-2">
                      {page.title}
                    </h3>

                    {/* Descripción — solo visible en sm+ */}
                    <p className="font-grotesk text-white/65 text-xs leading-snug mb-3 hidden sm:block">
                      {page.description}
                    </p>

                    {/* Arrow — aparece en hover */}
                    <div className="flex items-center gap-2 overflow-hidden">
                      <div className="h-px bg-white flex-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                      <svg
                        className="w-4 h-4 text-white flex-shrink-0 translate-x-0 group-hover:translate-x-0.5 transition-transform duration-300"
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

                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
