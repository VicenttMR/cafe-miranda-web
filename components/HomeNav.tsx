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
    title: "El Menú",
    description: "Carta viva. Producto local. Sin artificios.",
    num: "01",
  },
  {
    href: "/nosotros",
    image: "/images/clientes-mesa.png",
    title: "Nosotros",
    description: "La historia de por qué abrimos — y por qué seguimos.",
    num: "02",
  },
  {
    href: "/merch",
    image: "/images/neon-sign.png",
    title: "Merch",
    description: "Llévate un trozo de Formentera a casa.",
    num: "03",
  },
  {
    href: "/donde-estamos",
    image: "/images/about-interior.png",
    title: "Dónde estamos",
    description: "Av. Miramar, 30. A dos minutos de la playa.",
    num: "04",
  },
];

export default function HomeNav() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const pathname = usePathname();

  return (
    <section className="bg-miranda-cream" ref={ref}>
      <div className="h-px bg-miranda-dark/10" />

      <div className="container-max px-4 sm:px-6 lg:px-8 py-14 lg:py-20">

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="font-grotesk text-[11px] uppercase tracking-[0.28em] text-miranda-gray mb-10"
        >
          Explora
        </motion.p>

        <div className="flex flex-col lg:flex-row lg:gap-20 items-start">

          {/* ── Lista tipográfica ── */}
          <div className="w-full lg:flex-1">

            {pages.map((page, i) => {
              const isActive = pathname === page.href;
              return (
                <motion.div
                  key={page.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="h-px bg-miranda-dark/10" />
                  <Link
                    href={page.href}
                    className={`group flex items-center justify-between gap-6 py-5 lg:py-7 transition-opacity ${
                      isActive ? "opacity-30 pointer-events-none" : ""
                    }`}
                  >
                    <div className="flex items-center gap-5 min-w-0">
                      <span className="font-grotesk text-[11px] tracking-widest text-miranda-gray/40 flex-shrink-0 w-6">
                        {page.num}
                      </span>
                      <div className="min-w-0">
                        <h3
                          className="font-anton uppercase leading-none text-miranda-dark group-hover:text-miranda-red transition-colors duration-200"
                          style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
                        >
                          {page.title}
                        </h3>
                        <p className="font-grotesk text-miranda-gray text-sm mt-1.5 leading-snug">
                          {page.description}
                        </p>
                      </div>
                    </div>

                    <svg
                      className="w-5 h-5 flex-shrink-0 text-miranda-dark/25 group-hover:text-miranda-red group-hover:translate-x-1.5 transition-all duration-200"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              );
            })}

            <div className="h-px bg-miranda-dark/10" />
          </div>

          {/* ── Foto — solo desktop ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="hidden lg:block w-[38%] flex-shrink-0 self-start"
          >
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/images/ambiente-tapas.jpg"
                alt="Café Miranda"
                fill
                className="object-cover"
                sizes="38vw"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
