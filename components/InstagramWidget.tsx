"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react";
import { cafeConfig } from "@/config/cafe-miranda";

// Placeholder posts — en producción usa Instagram Basic Display API
// o un servicio como Embedsocial / Behold
const mockPosts = [
  {
    id: 1,
    emoji: "🥞",
    caption: "Pancakes de domingo. Los que saben, saben. ☀️ #brunch #formentera",
    likes: 234,
    comments: 18,
    bg: "from-orange-400 to-amber-300",
  },
  {
    id: 2,
    emoji: "🥑",
    caption: "Tostada de aguacate con huevo poché. La combinación perfecta para empezar el día.",
    likes: 187,
    comments: 12,
    bg: "from-green-400 to-emerald-300",
  },
  {
    id: 3,
    emoji: "☕",
    caption: "Café de especialidad. Cada taza es una experiencia. #specialty #coffee",
    likes: 312,
    comments: 24,
    bg: "from-amber-700 to-amber-500",
  },
  {
    id: 4,
    emoji: "🏖️",
    caption: "Vibes de Formentera. No hay nada mejor que el brunch con vistas. 🌊",
    likes: 445,
    comments: 31,
    bg: "from-miranda-teal to-cyan-400",
  },
  {
    id: 5,
    emoji: "🧢",
    caption: "Nueva colección de merch disponible. Gorra Miranda ✨ Limited edition.",
    likes: 278,
    comments: 19,
    bg: "from-miranda-red to-rose-400",
  },
  {
    id: 6,
    emoji: "🍷",
    caption: "Tabla de tapas ibéricas para compartir. El aperitivo perfecto. 🫒",
    likes: 195,
    comments: 15,
    bg: "from-purple-500 to-violet-400",
  },
];

export default function InstagramWidget() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  if (!cafeConfig.sections.showInstagram) return null;

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Instagram className="w-6 h-6 text-miranda-red" />
            <span className="tag bg-miranda-red/10 text-miranda-red">
              @{cafeConfig.instagram}
            </span>
          </div>
          <h2 className="section-title mb-4">
            Nuestra vida{" "}
            <span className="text-miranda-red font-playfair italic font-normal">
              en Instagram
            </span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Cada plato, cada atardecer, cada momento. Síguenos para no perderte
            nada.
          </p>
        </motion.div>

        {/* Posts grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
          {mockPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href={cafeConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="relative group aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Colorful placeholder background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${post.bg} opacity-80`}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl sm:text-5xl filter drop-shadow-lg">
                  {post.emoji}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                <div className="flex items-center gap-3 text-white">
                  <span className="flex items-center gap-1 font-inter text-xs font-semibold">
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1 font-inter text-xs font-semibold">
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    {post.comments}
                  </span>
                </div>
                <p className="font-inter text-xs text-white/80 text-center px-2 line-clamp-2">
                  {post.caption}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href={cafeConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-miranda-red to-pink-500 text-white font-poppins font-semibold text-sm px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
            Seguir en Instagram
            <ExternalLink className="w-4 h-4" />
          </a>
          <p className="font-inter text-xs text-miranda-gray mt-3">
            Para ver nuestras fotos reales, visítanos en Instagram o en persona 😉
          </p>
        </motion.div>
      </div>
    </section>
  );
}
