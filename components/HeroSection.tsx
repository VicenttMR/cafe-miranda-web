"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { cafeConfig } from "@/config/cafe-miranda";

const TICKER_WORDS = [
  "BRUNCH", "✦", "TAPAS", "✦", "AMOR", "✦", "ES PUJOLS", "✦",
  "FORMENTERA", "✦", "BRUNCH", "✦", "TAPAS", "✦", "AMOR", "✦",
  "ES PUJOLS", "✦", "FORMENTERA", "✦",
];

export default function HeroSection() {
  return (
    <section className="relative bg-miranda-teal overflow-hidden flex flex-col min-h-screen">

      <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-24 pb-12">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 w-fit mb-10"
        >
          <MapPin className="w-3.5 h-3.5 text-white" />
          <span className="font-grotesk text-sm text-white font-medium">Es Pujols, Formentera</span>
        </motion.div>

        <div className="overflow-hidden mb-1">
          <motion.h2
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-anton uppercase text-white leading-none"
            style={{ fontSize: "clamp(5rem, 16vw, 14rem)" }}
          >
            BRUNCH,
          </motion.h2>
        </div>

        <div className="overflow-hidden mb-1">
          <motion.h2
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-anton uppercase leading-none"
            style={{
              fontSize: "clamp(5rem, 16vw, 14rem)",
              WebkitTextStroke: "4px white",
              color: "transparent",
            }}
          >
            TAPAS
          </motion.h2>
        </div>

        <div className="overflow-hidden mb-12">
          <motion.h2
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-anton uppercase text-white leading-none"
            style={{ fontSize: "clamp(5rem, 16vw, 14rem)" }}
          >
            Y AMOR.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
        >
          <div className="flex flex-wrap gap-3">
            <Link
              href="/menu"
              className="bg-miranda-red text-white font-grotesk font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-miranda-red-dark transition-all hover:scale-[1.03] active:scale-[0.97]"
            >
              Ver Menú
            </Link>
            <Link
              href="/reservas"
              className="bg-white text-miranda-teal font-grotesk font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-miranda-cream transition-all hover:scale-[1.03] active:scale-[0.97]"
            >
              Reservar Mesa
            </Link>
          </div>

          <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
            <Image src="/images/logo-principal.png" alt="Logo Café Miranda" fill className="object-contain" sizes="96px" priority />
          </div>
        </motion.div>
      </div>

      {/* Ticker */}
      <div className="bg-miranda-red py-3 overflow-hidden flex-shrink-0">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap w-max"
        >
          {[...TICKER_WORDS, ...TICKER_WORDS].map((word, i) => (
            <span key={i} className="font-anton uppercase text-white text-lg tracking-wider">{word}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
