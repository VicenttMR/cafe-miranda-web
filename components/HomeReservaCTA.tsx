"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { cafeConfig } from "@/config/cafe-miranda";

export default function HomeReservaCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-miranda-teal overflow-hidden" ref={ref}>
      <div className="container-max px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="font-anton uppercase text-white leading-[0.92]"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              RESERVA<br />TU MESA.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-grotesk text-white/70 text-base mt-4 max-w-xs"
            >
              Abiertos todos los días · Es Pujols, Formentera
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          >
            <Link
              href="/reservas"
              className="bg-miranda-red text-white font-grotesk font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-miranda-red-dark transition-all hover:scale-[1.03] text-center"
            >
              Reservar online
            </Link>
            <a
              href={`https://wa.me/${cafeConfig.whatsapp}?text=${encodeURIComponent(cafeConfig.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-miranda-teal font-grotesk font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-miranda-cream transition-all hover:scale-[1.03] text-center"
            >
              WhatsApp directo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
