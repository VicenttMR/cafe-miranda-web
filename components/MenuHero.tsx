"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { menuConfig } from "@/config/menu-items";

export default function MenuHero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: "clamp(420px, 60vh, 680px)" }}
    >
      <Image
        src={menuConfig.hero.image}
        alt="Café Miranda"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Dark base */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Teal tint */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(29,181,173,0.32)" }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        <h1
          className="font-anton uppercase text-white leading-none mb-4"
          style={{ fontSize: "clamp(3.5rem, 11vw, 8rem)" }}
        >
          {menuConfig.hero.title}
        </h1>
        <p className="font-grotesk text-white/80 text-lg sm:text-xl">
          {menuConfig.hero.subtitle}
        </p>
      </motion.div>
    </section>
  );
}
