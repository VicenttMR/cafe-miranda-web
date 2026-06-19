"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import { cafeConfig } from "@/config/cafe-miranda";

const AVATAR_COLORS = ["#C41E3A", "#1DB5AD", "#C41E3A", "#1DB5AD"];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${i < n ? "fill-miranda-red text-miranda-red" : "fill-white/20 text-white/20"}`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  t,
  index,
  isInView,
  mobile = false,
}: {
  t: (typeof cafeConfig.testimonials)[0];
  index: number;
  isInView: boolean;
  mobile?: boolean;
}) {
  return (
    <motion.div
      initial={mobile ? { opacity: 0, x: 20 } : { opacity: 0, y: 24 }}
      animate={isInView ? (mobile ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }) : {}}
      transition={{ duration: 0.55, delay: 0.1 + index * 0.09 }}
      className={`bg-white/5 border border-white/10 rounded-2xl p-5 lg:p-6 flex flex-col gap-4 ${
        mobile ? "flex-shrink-0 w-[80vw] snap-start" : ""
      }`}
    >
      {/* Header row */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: AVATAR_COLORS[index] }}
        >
          <span className="font-anton text-white text-sm leading-none">{t.avatar}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-grotesk text-white text-sm font-medium leading-tight truncate">{t.name}</p>
          <p className="font-grotesk text-white/40 text-xs">{t.origin}</p>
        </div>
        <Stars n={t.rating} />
      </div>

      {/* Quote */}
      <p className="font-grotesk text-white/65 text-sm leading-relaxed flex-1">
        "{t.text}"
      </p>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const testimonials = cafeConfig.testimonials;

  return (
    <section className="bg-miranda-dark" ref={ref}>
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="font-grotesk text-[11px] uppercase tracking-[0.28em] text-white/35 mb-3"
            >
              Lo que dicen — Google Maps
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.65 }}
                className="font-anton uppercase text-white leading-none"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
              >
                LO QUE
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.07 }}
                className="font-anton uppercase leading-none"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  WebkitTextStroke: "var(--stroke-w) #1DB5AD",
                  color: "transparent",
                }}
              >
                DICEN.
              </motion.h2>
            </div>
          </div>

          {/* Rating block */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-end gap-5 flex-shrink-0"
          >
            <p
              className="font-anton text-white leading-none"
              style={{ fontSize: "clamp(4rem, 8vw, 6rem)" }}
            >
              {cafeConfig.rating}
            </p>
            <div className="pb-1.5 flex flex-col gap-1.5">
              <Stars n={4} />
              <p className="font-grotesk text-white/35 text-xs leading-snug">
                {cafeConfig.reviewCount} reseñas en Google Maps
              </p>
              <a
                href={cafeConfig.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="font-grotesk text-xs text-miranda-teal hover:text-white transition-colors"
              >
                Dejar reseña →
              </a>
            </div>
          </motion.div>
        </div>

        {/* Desktop — grid 2×2 */}
        <div className="hidden sm:grid sm:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Mobile — carousel */}
        <div className="sm:hidden -mx-4">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-3 px-4 pb-2">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} t={t} index={i} isInView={isInView} mobile />
            ))}
            <div className="flex-shrink-0 w-4" aria-hidden />
          </div>
        </div>

      </div>
    </section>
  );
}
