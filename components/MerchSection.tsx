"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { cafeConfig } from "@/config/cafe-miranda";

// Fotos de ambiente Miranda como backdrop del merch hasta tener fotos del producto
const MERCH_IMAGES = [
  "/images/interior.png",      // interior rojo vintage
  "/images/about-interior.png", // interior con osito
  "/images/neon.png",          // neon sign
  "/images/lifestyle.png",     // revista tapas + typewriter
];

export default function MerchSection({ hideHeader = false }: { hideHeader?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  void hideHeader;

  if (!cafeConfig.sections.showMerch) return null;

  return (
    <section id="merch" className="bg-miranda-red overflow-hidden" ref={ref}>
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-3"
          >
            {MERCH_IMAGES.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 + i * 0.1 }}
                className={`relative rounded-2xl overflow-hidden group
                  ${i % 2 === 0 ? "aspect-square" : "aspect-[3/4]"}`}
              >
                <Image
                  src={src}
                  alt={cafeConfig.merch[i]?.name ?? "Merch Miranda"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                {/* White overlay on hover */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="font-grotesk font-bold text-white text-sm drop-shadow-lg">
                    {cafeConfig.merch[i]?.name}
                  </span>
                  <span className="font-anton text-white text-lg block leading-none drop-shadow-lg">
                    {cafeConfig.merch[i]?.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-white"
          >
            <p className="font-grotesk text-white/60 text-sm uppercase tracking-widest mb-4">
              Shop Miranda
            </p>
            <div className="overflow-hidden mb-2">
              <motion.h2
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-anton uppercase text-white leading-none"
                style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
              >
                LLÉVATE
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.28 }}
                className="font-anton uppercase leading-none"
                style={{
                  fontSize: "clamp(3rem, 7vw, 6rem)",
                  WebkitTextStroke: "3px white",
                  color: "transparent",
                }}
              >
                MIRANDA.
              </motion.h2>
            </div>

            <p className="font-grotesk text-white/80 text-lg leading-relaxed mb-8">
              Gorras, camisetas y tote bags diseñados para los que aman
              Formentera. Edición limitada, disponible en el local.
            </p>

            {/* Merch list */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {cafeConfig.merch.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 bg-white/10 rounded-xl p-3"
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <p className="font-grotesk font-semibold text-white text-sm">{item.name}</p>
                    <p className="font-anton text-miranda-teal text-xl leading-none">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${cafeConfig.whatsapp}?text=${encodeURIComponent("Hola! Me interesa el merch de Café Miranda. ¿Qué tenéis disponible? 🧢")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-miranda-red font-grotesk font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-miranda-cream transition-all hover:scale-[1.03]"
            >
              <ShoppingBag className="w-4 h-4" />
              Comprar por WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
