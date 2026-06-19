"use client";

import { motion } from "framer-motion";

export default function RotatingStamp() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center justify-center w-16 h-16 lg:w-24 lg:h-24">
      {/* Rotating ring with text */}
      <motion.div
        className="absolute inset-0 text-miranda-dark"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 110 110" className="w-full h-full">
          <defs>
            <path
              id="stamp-ring"
              d="M 55,55 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
            />
          </defs>
          <text
            fontSize="6.4"
            letterSpacing="2.2"
            fill="currentColor"
            fontFamily="var(--font-grotesk)"
            fontWeight="600"
          >
            <textPath href="#stamp-ring" startOffset="0%">
              CAFÉ MIRANDA · ES PUJOLS · FORMENTERA · 2016 ·
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Static center */}
      <div className="relative z-10 w-7 h-7 rounded-full bg-miranda-red flex items-center justify-center">
        <span className="font-anton text-white text-[10px] leading-none">M</span>
      </div>
    </div>
  );
}
