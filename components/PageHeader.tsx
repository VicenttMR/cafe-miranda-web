"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  label: string;       // pequeño texto arriba
  title: string;       // línea 1 — sólida
  titleOutline?: string; // línea 2 — outline (opcional)
  bg?: "teal" | "red" | "dark";
}

const bgMap = {
  teal: "bg-miranda-teal",
  red: "bg-miranda-red",
  dark: "bg-miranda-dark",
};

export default function PageHeader({
  label,
  title,
  titleOutline,
  bg = "teal",
}: PageHeaderProps) {
  const strokeColor = bg === "dark" ? "#1DB5AD" : "white";

  return (
    <div className={`${bgMap[bg]} pt-24 pb-12 px-6 sm:px-10 lg:px-16 overflow-hidden`}>
      <div className="container-max">
        {/* Back to home */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-grotesk text-sm text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Inicio
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="font-grotesk text-white/60 text-sm uppercase tracking-widest mb-2"
        >
          {label}
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-anton uppercase text-white leading-none"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
          >
            {title}
          </motion.h1>
        </div>

        {titleOutline && (
          <div className="overflow-hidden mt-1">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="font-anton uppercase leading-none"
              style={{
                fontSize: "clamp(3.5rem, 10vw, 9rem)",
                WebkitTextStroke: `var(--stroke-w) ${strokeColor}`,
                color: "transparent",
              }}
            >
              {titleOutline}
            </motion.h1>
          </div>
        )}
      </div>
    </div>
  );
}
