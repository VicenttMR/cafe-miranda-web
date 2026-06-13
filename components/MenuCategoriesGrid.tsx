"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { menuConfig } from "@/config/menu-items";

type Category = typeof menuConfig.categories[0];

function CategoryCard({ category, index }: { category: Category; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className="relative overflow-hidden group cursor-default"
    >
      {/* Background photo — absolute, covers full card height */}
      <Image
        src={category.image}
        alt={category.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Dark base overlay */}
      <div className="absolute inset-0 bg-black/55" />
      {/* Teal overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-80"
        style={{ backgroundColor: "rgba(29,181,173,0.38)" }}
      />

      {/* Red bottom line grows on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-miranda-red origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      {/* Content — in normal flow so card grows to fit items */}
      <div
        className="relative z-10 flex flex-col justify-center px-6 py-10 sm:px-8 sm:py-12"
        style={{ minHeight: "clamp(320px, 38vw, 440px)" }}
      >
        <h2
          className="font-anton uppercase text-white text-center mb-7 leading-none"
          style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
        >
          {category.name}
        </h2>

        <div className="flex flex-col gap-3">
          {category.items.map((item) => (
            <div key={item.name} className="flex items-baseline gap-1">
              <span className="font-grotesk text-white/85 text-sm leading-snug flex-1">
                {item.name}
              </span>
              {item.price !== null && (
                <>
                  <span className="border-b border-dashed border-white/30 w-4 mx-2 mb-0.5 flex-shrink-0" />
                  <span className="font-grotesk font-semibold text-white text-sm leading-none flex-shrink-0">
                    €{item.price.toFixed(2).replace(".", ",")}
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function MenuCategoriesGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {menuConfig.categories.map((cat, i) => (
        <CategoryCard key={cat.name} category={cat} index={i} />
      ))}
    </section>
  );
}
