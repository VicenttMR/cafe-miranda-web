"use client";

import { motion } from "framer-motion";

interface SectionTickerProps {
  words: string[];
  bg?: "cream" | "dark" | "red" | "teal";
  reverse?: boolean;
}

const bgMap = {
  cream: "bg-miranda-cream",
  dark:  "bg-miranda-dark",
  red:   "bg-miranda-red",
  teal:  "bg-miranda-teal",
};

const textMap = {
  cream: "text-miranda-dark/50",
  dark:  "text-white/40",
  red:   "text-white/80",
  teal:  "text-white/80",
};

export default function SectionTicker({
  words,
  bg = "cream",
  reverse = false,
}: SectionTickerProps) {
  const repeated = [...words, ...words, ...words, ...words];

  return (
    <div className={`${bgMap[bg]} py-2.5 overflow-hidden`}>
      <motion.div
        animate={{ x: reverse ? "25%" : "-25%" }}
        initial={{ x: reverse ? "-25%" : "0%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-8 whitespace-nowrap w-max"
      >
        {repeated.map((word, i) => (
          <span
            key={i}
            className={`font-grotesk text-[11px] uppercase tracking-[0.25em] ${textMap[bg]}`}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
