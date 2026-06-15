"use client";

import { motion } from "framer-motion";

const WORDS = [
  "BRUNCH", "·", "TAPAS", "·", "AMOR", "·",
  "BRUNCH", "·", "TAPAS", "·", "AMOR", "·",
  "BRUNCH", "·", "TAPAS", "·", "AMOR", "·",
  "BRUNCH", "·", "TAPAS", "·", "AMOR", "·",
];

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-white border-b border-gray-100 h-8 overflow-hidden flex items-center">
      <motion.div
        animate={{ x: "-50%" }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="flex gap-8 whitespace-nowrap w-max"
      >
        {[...WORDS, ...WORDS].map((word, i) => (
          <span
            key={i}
            className="font-grotesk text-[11px] font-medium tracking-[0.2em] uppercase text-miranda-dark"
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
