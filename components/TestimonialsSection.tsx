"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import { cafeConfig } from "@/config/cafe-miranda";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${
            i < n ? "fill-miranda-red text-miranda-red" : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const featured = cafeConfig.testimonials[0];
  const rest = cafeConfig.testimonials.slice(1);

  return (
    <section className="bg-white" ref={ref}>
      {/* Red top rule */}
      <div className="h-px bg-miranda-red" />

      <div className="container-max px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="font-grotesk text-[11px] uppercase tracking-[0.28em] text-miranda-gray mb-12 lg:mb-16"
        >
          Lo que dicen — Google Maps
        </motion.p>

        {/* Featured pull-quote */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_180px] gap-10 lg:gap-20 items-start mb-16 lg:mb-20">

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Decorative mark — large but quiet */}
            <div
              className="font-anton leading-none select-none text-miranda-teal/20 mb-2"
              style={{ fontSize: "clamp(5rem, 12vw, 9rem)" }}
              aria-hidden
            >
              "
            </div>

            <blockquote
              className="font-anton uppercase text-miranda-dark leading-tight mb-6"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.75rem)" }}
            >
              {featured.text}
            </blockquote>

            <div className="flex items-center gap-4">
              <Stars n={featured.rating} />
              <span className="font-grotesk text-sm text-miranda-gray">
                {featured.name} · {featured.origin}
              </span>
            </div>
          </motion.div>

          {/* Rating sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-row lg:flex-col items-start gap-5 lg:gap-4 lg:pt-8"
          >
            <div>
              <p className="font-anton text-miranda-dark text-5xl leading-none">
                {cafeConfig.rating}
              </p>
              <Stars n={4} />
            </div>
            <div>
              <p className="font-grotesk text-xs text-miranda-gray leading-relaxed">
                {cafeConfig.reviewCount} reseñas
                <br />
                en Google Maps
              </p>
              <a
                href={cafeConfig.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-grotesk text-xs text-miranda-dark border-b border-miranda-dark/30 hover:text-miranda-red hover:border-miranda-red transition-colors pb-px mt-3"
              >
                Dejar reseña →
              </a>
            </div>
          </motion.div>
        </div>

        {/* Thin divider */}
        <div className="h-px bg-gray-100 mb-14" />

        {/* Secondary quotes — limpio, sin tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {rest.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="flex flex-col gap-3"
            >
              <Stars n={r.rating} />
              <p className="font-grotesk text-miranda-dark text-base leading-relaxed flex-1">
                "{r.text}"
              </p>
              <p className="font-grotesk text-xs text-miranda-gray mt-1">
                {r.name} · {r.origin}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Gray bottom rule */}
      <div className="h-px bg-gray-100" />
    </section>
  );
}
