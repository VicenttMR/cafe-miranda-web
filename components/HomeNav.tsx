"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const pages = [
  {
    label: "Menú",
    description: "Brunch, tapas, postres y bebidas",
    href: "/menu",
    image: "/images/menu-1.png",
    accent: "bg-miranda-red",
  },
  {
    label: "Nosotros",
    description: "Quiénes somos y de dónde venimos",
    href: "/nosotros",
    image: "/images/about.png",
    accent: "bg-miranda-teal",
  },
  {
    label: "Merch",
    description: "Gorras, camisetas y tote bags",
    href: "/merch",
    image: "/images/interior.png",
    accent: "bg-miranda-red",
  },
  {
    label: "Dónde estamos",
    description: "Es Pujols, Formentera — cómo llegar",
    href: "/donde-estamos",
    image: "/images/neon.png",
    accent: "bg-miranda-teal",
  },
];

export default function HomeNav() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-miranda-dark" ref={ref}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {pages.map((page, i) => (
          <motion.div
            key={page.href}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: i * 0.08 }}
          >
            <Link
              href={page.href}
              className="group relative flex flex-col overflow-hidden aspect-[4/3] sm:aspect-square lg:aspect-[3/4]"
            >
              {/* Photo background */}
              <Image
                src={page.image}
                alt={page.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500" />

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-6 lg:p-8">
                {/* Number */}
                <span className="font-anton text-white/20 text-4xl sm:text-6xl leading-none mb-auto">
                  0{i + 1}
                </span>

                <div>
                  <p className="font-grotesk text-white/60 text-xs uppercase tracking-widest mb-2">
                    {page.description}
                  </p>
                  <h2 className="font-anton uppercase text-white leading-none mb-4"
                      style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                    {page.label}
                  </h2>

                  <div className={`inline-flex items-center gap-2 ${page.accent} text-white
                                   font-grotesk font-semibold text-xs px-4 py-2 rounded-full
                                   translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0
                                   transition-all duration-300`}>
                    Ver más
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 ${page.accent}
                               scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
