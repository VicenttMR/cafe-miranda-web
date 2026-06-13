"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { cafeConfig } from "@/config/cafe-miranda";

interface PlatoDestacadoProps {
  badge: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating?: number;
  cta?: string;
  reverse?: boolean;
}

export default function MenuPlatoDestacado({
  badge,
  name,
  description,
  price,
  image,
  rating,
  cta = "RESERVAR AHORA",
  reverse = false,
}: PlatoDestacadoProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const whatsappMsg = encodeURIComponent(
    `Hola! Me gustaría reservar en Café Miranda. Me interesa: ${name} 🍳`
  );

  return (
    <section ref={ref} className="border-t-4 border-b-4 border-miranda-red">
      <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.65 }}
          className="relative md:w-1/2"
          style={{ minHeight: "clamp(280px, 40vw, 520px)" }}
        >
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="md:w-1/2 flex flex-col justify-center px-8 py-14 lg:px-16 lg:py-20 bg-white"
        >
          <span className="font-grotesk font-bold text-[11px] uppercase tracking-[0.22em] text-miranda-red mb-5">
            {badge}
          </span>

          <h2
            className="font-anton uppercase text-miranda-dark leading-none mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            {name}
          </h2>

          <p className="font-grotesk text-gray-500 text-base leading-relaxed mb-7 max-w-sm">
            {description}
          </p>

          <div className="flex items-center gap-5 mb-9">
            <span
              className="font-anton text-miranda-red leading-none"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
            >
              €{price.toFixed(2).replace(".", ",")}
            </span>
            {rating && (
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(rating)
                        ? "text-amber-400 fill-amber-400"
                        : "text-gray-200 fill-gray-200"
                    }`}
                  />
                ))}
                <span className="font-grotesk text-sm text-gray-400 ml-1.5">({rating})</span>
              </div>
            )}
          </div>

          <a
            href={`https://wa.me/${cafeConfig.whatsapp}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-teal w-fit"
          >
            {cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
