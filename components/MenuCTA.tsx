"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { menuConfig } from "@/config/menu-items";

export default function MenuCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const whatsappUrl = `https://wa.me/${menuConfig.cta.whatsappPhone}?text=${encodeURIComponent(
    menuConfig.cta.whatsappMessage
  )}`;

  return (
    <section ref={ref} className="bg-miranda-light py-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center max-w-lg mx-auto"
      >
        <h2
          className="font-anton uppercase text-miranda-dark leading-none mb-3"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
        >
          {menuConfig.cta.headline}
        </h2>
        <p className="font-grotesk text-gray-400 text-base mb-10">
          {menuConfig.cta.subheadline}
        </p>

        <div className="flex justify-center">
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary px-10 py-4 text-base"
          >
            {menuConfig.cta.primaryButton}
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
