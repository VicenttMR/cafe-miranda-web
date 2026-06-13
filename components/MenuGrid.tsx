"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import {
  menuItems,
  CATEGORIES,
  DIETARY_LABELS,
  type MenuItem,
  type DietaryTag,
  type MenuCategoryId,
} from "@/config/menu-items";

const DIETARY_COLORS: Record<DietaryTag, string> = {
  vegan: "bg-green-100 text-green-700",
  "dairy-free": "bg-sky-100 text-sky-700",
  "sin-gluten": "bg-amber-100 text-amber-700",
};

function DietaryBadge({ tag }: { tag: DietaryTag }) {
  return (
    <span className={`text-[10px] font-grotesk font-semibold px-2 py-0.5 rounded-full ${DIETARY_COLORS[tag]}`}>
      {DIETARY_LABELS[tag]}
    </span>
  );
}

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.3) }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col group"
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-miranda-red/0 group-hover:bg-miranda-red/15 transition-all duration-400" />
        {item.badge && (
          <div className="absolute top-3 left-3">
            <span className="font-grotesk font-semibold text-xs bg-miranda-red text-white px-3 py-1 rounded-full shadow-sm">
              ★ {item.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-anton uppercase text-miranda-red text-lg leading-tight mb-1">
          {item.name}
        </h3>
        <p className="font-grotesk text-gray-500 text-sm leading-snug mb-3 flex-1 line-clamp-2">
          {item.description}
        </p>

        {item.dietary && item.dietary.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {item.dietary.map((tag) => (
              <DietaryBadge key={tag} tag={tag} />
            ))}
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="font-anton text-miranda-red text-xl">
            €{item.price.toFixed(2).replace(".", ",")}
          </span>
          {item.rating && (
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-grotesk text-sm text-gray-500">{item.rating}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function MenuGrid() {
  const [active, setActive] = useState<MenuCategoryId>("todos");

  const filtered =
    active === "todos"
      ? menuItems
      : menuItems.filter((item) => item.category === active);

  return (
    <section className="bg-gray-50 py-12 lg:py-16">
      {/* Sticky filter bar */}
      <div className="sticky top-16 z-30 bg-gray-50/95 backdrop-blur-sm border-b border-gray-200 py-3 mb-10">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-0.5" style={{ scrollbarWidth: "none" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex-shrink-0 font-grotesk font-semibold text-sm px-5 py-2 rounded-full transition-all duration-200 ${
                  active === cat.id
                    ? "bg-miranda-red text-white shadow-sm"
                    : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards grid */}
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dietary legend */}
        <div className="mt-10 pt-8 border-t border-gray-200 flex flex-wrap gap-3 items-center">
          <span className="font-grotesk text-sm text-gray-400">Información dietética:</span>
          {(Object.keys(DIETARY_LABELS) as DietaryTag[]).map((tag) => (
            <DietaryBadge key={tag} tag={tag} />
          ))}
          <span className="font-grotesk text-xs text-gray-400">
            · Consulta con el equipo para alérgenos
          </span>
        </div>
      </div>
    </section>
  );
}
