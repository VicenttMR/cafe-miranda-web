"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MenuHero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ height: "clamp(420px, 60vh, 720px)" }}>
      <Image
        src="/images/hero.png"
        alt="Platos de Café Miranda"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-grotesk text-white/60 text-xs uppercase tracking-[0.3em] mb-6"
        >
          Café Miranda · Es Pujols, Formentera
        </motion.p>

        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-anton uppercase text-white leading-none"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
          >
            NUESTRO MENÚ
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-grotesk text-white text-lg sm:text-xl mb-3"
        >
          Desayunos, Brunch, Tapas y Amor
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="font-grotesk text-white/50 text-sm sm:text-base"
        >
          Cada plato es una historia. Cada sabor es una experiencia.
        </motion.p>
      </div>
    </section>
  );
}
