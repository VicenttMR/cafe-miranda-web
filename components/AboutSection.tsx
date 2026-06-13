"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AboutSection({ hideHeader = false }: { hideHeader?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  void hideHeader; // header is in PageHeader when hideHeader=true

  return (
    <section id="nosotros" className="bg-miranda-light overflow-hidden" ref={ref}>

      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8">
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "100%" }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-anton uppercase text-miranda-dark leading-none"
                  style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)" }}
                >
                  SOMOS LOS
                </motion.h2>
              </div>
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "100%" }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.18 }}
                  className="font-anton uppercase leading-none"
                  style={{
                    fontSize: "clamp(3.5rem, 7vw, 6rem)",
                    WebkitTextStroke: "3px #C41E3A",
                    color: "transparent",
                  }}
                >
                  LOCOS DEL BRUNCH.
                </motion.h2>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-grotesk text-lg text-miranda-gray leading-relaxed mb-5"
            >
              Abrimos en Es Pujols porque queríamos el sitio que no existía:
              un lugar donde el desayuno del sábado fuera el evento de la semana.
              Sin prisa, con buena comida y con ganas de quedarse.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-grotesk text-base text-miranda-gray leading-relaxed mb-8"
            >
              Ocho temporadas después seguimos en lo mismo. Producto de mercado,
              recetas con cariño y una carta que cambia cuando el género lo pide.
              Lo que no cambia es el equipo — y las ganas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <div className="bg-white rounded-2xl px-6 py-4 border border-gray-100">
                <p className="font-anton text-miranda-red text-5xl leading-none">8+</p>
                <p className="font-grotesk text-sm text-miranda-gray mt-1">temporadas abiertas</p>
              </div>
              <div className="bg-white rounded-2xl px-6 py-4 border border-gray-100">
                <p className="font-anton text-miranda-teal text-5xl leading-none">100%</p>
                <p className="font-grotesk text-sm text-miranda-gray mt-1">producto local</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Images collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative grid grid-cols-2 gap-3"
          >
            {/* Main large photo */}
            <div className="col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden">
              <Image
                src="/images/clientes-mesa.png"
                alt="Clientes disfrutando en Café Miranda"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Chef en cocina */}
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/chef-cocina.jpg"
                alt="El chef de Café Miranda"
                fill
                className="object-cover object-top"
                sizes="25vw"
              />
            </div>

            {/* Neon sign */}
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/neon-sign.png"
                alt="You are my happy place — Café Miranda"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>

            {/* Teal accent */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-miranda-teal -z-10" />
            <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full bg-miranda-red -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Lifestyle strip — revista Tapas + máquina escribir */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src="/images/ambiente-tapas.jpg"
          alt="Mesa de tapas en Café Miranda — brunch, tapas y amor"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-miranda-dark/60 flex items-center justify-center">
          <p className="font-anton uppercase text-white text-center"
             style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            BRUNCH · TAPAS · AMOR
          </p>
        </div>
      </div>
    </section>
  );
}
