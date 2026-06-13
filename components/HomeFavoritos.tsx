"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { cafeConfig } from "@/config/cafe-miranda";

export default function HomeFavoritos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="overflow-hidden">

      {/* Header oscuro */}
      <div className="bg-miranda-dark py-14 px-6">
        <div className="container-max flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="font-anton uppercase text-white leading-none"
                style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
              >
                NUESTROS
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.08 }}
                className="font-anton uppercase leading-none"
                style={{
                  fontSize: "clamp(3rem, 8vw, 7rem)",
                  WebkitTextStroke: "3px #1DB5AD",
                  color: "transparent",
                }}
              >
                FAVORITOS
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="font-grotesk text-white/50 max-w-xs text-sm leading-relaxed lg:text-right"
          >
            Los platos que nuestros clientes repiten temporada tras temporada.
            Si no sabes qué pedir, empieza por aquí.
          </motion.p>
        </div>
      </div>

      {/* Grid de cards */}
      <div className="bg-miranda-cream py-12 px-4 sm:px-6 lg:px-8">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cafeConfig.favoritos.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Foto */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-miranda-red text-white font-grotesk text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-5">
                  <h3 className="font-anton uppercase text-miranda-dark text-xl leading-tight mb-1.5">
                    {item.name}
                  </h3>
                  <p className="font-grotesk text-sm text-miranda-gray leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <p className="font-anton text-miranda-red text-2xl">{item.price}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.65 }}
            className="text-center mt-10"
          >
            <Link href="/menu" className="btn-primary">
              Ver carta completa
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
