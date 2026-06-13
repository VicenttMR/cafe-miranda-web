"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { favoriteItems } from "@/config/menu-items";

export default function MenuFavorites() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-16 lg:py-20 overflow-hidden">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="font-grotesk text-miranda-teal text-xs uppercase tracking-[0.25em] mb-3"
          >
            Lo que todo el mundo pide
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-anton uppercase leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#1A1A1A" }}
            >
              LOS FAVORITOS
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {favoriteItems.map((item, i) => {
            return (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  x: i === 0 ? -30 : i === 2 ? 30 : 0,
                  y: i === 1 ? 20 : 0,
                }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative rounded-2xl overflow-hidden group"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="font-grotesk font-semibold text-xs bg-miranda-red text-white px-3 py-1.5 rounded-full">
                    ★ Más pedido
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-anton uppercase text-white text-2xl leading-tight mb-1">
                    {item.name}
                  </h3>
                  <p className="font-grotesk text-white/65 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-anton text-white text-xl">
                      €{item.price.toFixed(2).replace(".", ",")}
                    </span>
                    {item.rating && (
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <span className="font-grotesk text-sm text-white/80">{item.rating}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
