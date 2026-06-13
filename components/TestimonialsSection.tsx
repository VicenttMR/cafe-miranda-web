"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import { cafeConfig } from "@/config/cafe-miranda";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-3.5 h-3.5 ${i < n ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />
      ))}
    </div>
  );
}

const avatarColors = [
  "bg-miranda-red", "bg-miranda-teal", "bg-miranda-red", "bg-miranda-teal",
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-miranda-cream overflow-hidden" ref={ref}>

      {/* Header band */}
      <div className="bg-miranda-dark py-12 px-6">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "100%" }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 0.7 }}
                  className="font-anton uppercase text-white leading-none"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
                >
                  {cafeConfig.reviewCount}+ PERSONAS
                </motion.h2>
              </div>
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "100%" }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.08 }}
                  className="font-anton uppercase leading-none"
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                    WebkitTextStroke: "3px #1DB5AD",
                    color: "transparent",
                  }}
                >
                  NOS LO DICEN.
                </motion.h2>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <div className="text-center">
                <p className="font-anton text-miranda-teal text-5xl leading-none">{cafeConfig.rating}</p>
                <Stars n={4} />
                <p className="font-grotesk text-white/50 text-xs mt-1">Google Maps</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cafeConfig.testimonials.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 hover:border-miranda-teal/30 hover:shadow-md transition-all duration-300"
            >
              <Stars n={r.rating} />
              <p className="font-grotesk text-sm text-miranda-gray leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className={`w-9 h-9 rounded-full ${avatarColors[i]} flex items-center justify-center font-grotesk font-bold text-xs text-white flex-shrink-0`}>
                  {r.avatar}
                </div>
                <div>
                  <p className="font-grotesk font-semibold text-sm text-miranda-dark">{r.name}</p>
                  <p className="font-grotesk text-xs text-miranda-gray">{r.origin}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href={cafeConfig.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-miranda-dark border-miranda-dark hover:bg-miranda-dark hover:text-white"
          >
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            Dejar reseña en Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
