"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Play } from "lucide-react";
import { cafeConfig } from "@/config/cafe-miranda";

const reels = [
  { src: "/videos/reel-1.mp4", poster: "/images/ambiente-tapas.jpg" },
  { src: "/videos/reel-2.mp4", poster: "/images/pancakes-berries.jpg" },
  { src: "/videos/reel-3.mp4", poster: "/images/tapa-bacalao.jpg" },
];

export default function HomeReels() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-miranda-dark overflow-hidden">

      {/* Header */}
      <div className="container-max px-6 sm:px-10 lg:px-16 pt-14 pb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="font-anton uppercase text-white leading-none"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
            >
              NUESTRA
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="font-anton uppercase leading-none"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 6rem)",
                WebkitTextStroke: "var(--stroke-w) #1DB5AD",
                color: "transparent",
              }}
            >
              VIDA.
            </motion.h2>
          </div>
        </div>

        <motion.a
          href={cafeConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className="flex items-center gap-2 font-grotesk text-sm text-white/60 hover:text-miranda-teal transition-colors group"
        >
          <Instagram className="w-4 h-4" />
          @{cafeConfig.instagram}
        </motion.a>
      </div>

      {/* Video grid */}
      <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 px-4 sm:px-6 lg:px-8 lg:container-max lg:mx-auto snap-x snap-mandatory scrollbar-none">
        {reels.map((reel, i) => (
          <motion.div
            key={reel.src}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            className="relative flex-shrink-0 w-[72vw] sm:w-[45vw] lg:w-0 lg:flex-1 snap-start rounded-2xl overflow-hidden bg-black"
            style={{ aspectRatio: "9/16" }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              poster={reel.poster}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={reel.src} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
                <Play className="w-3 h-3 fill-white text-white" />
                <span className="font-grotesk text-[11px] text-white font-medium">Reel</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="h-10" />
    </section>
  );
}
