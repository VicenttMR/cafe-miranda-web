"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cafeConfig } from "@/config/cafe-miranda";

const navLinks = [
  { label: "Menú", href: "/menu" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Merch", href: "/merch" },
  { label: "Dónde estamos", href: "/donde-estamos" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100"
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            <Link href="/" className="flex items-center">
              <div className="relative h-14 w-14 flex-shrink-0">
                <Image
                  src="/images/logo-principal.png"
                  alt="Café Miranda"
                  fill
                  className="object-contain"
                  sizes="56px"
                  priority
                />
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 font-grotesk text-sm font-medium rounded-full transition-colors
                      ${isActive
                        ? "bg-miranda-red text-white"
                        : "text-miranda-dark hover:bg-miranda-red hover:text-white"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${cafeConfig.phoneTel}`}
                className="font-grotesk text-sm font-medium text-miranda-gray hover:text-miranda-teal transition-colors"
              >
                {cafeConfig.phone}
              </a>
              <Link href="/reservas" className="btn-primary">
                Reservar
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-miranda-dark"
              aria-label="Menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-miranda-teal pt-16 px-6 flex flex-col"
          >
            <div className="relative w-24 h-24 mx-auto mt-8 mb-8">
              <Image src="/images/logo-principal.png" alt="Café Miranda" fill className="object-contain" sizes="96px" />
            </div>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block font-anton uppercase text-3xl text-white py-3 border-b border-white/20"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`tel:${cafeConfig.phoneTel}`}
                className="border-2 border-white text-white font-grotesk font-semibold text-sm px-7 py-3.5 rounded-full text-center"
              >
                {cafeConfig.phone}
              </a>
              <Link
                href="/reservas"
                onClick={() => setIsOpen(false)}
                className="bg-white text-miranda-teal font-grotesk font-semibold text-sm px-7 py-3.5 rounded-full text-center"
              >
                Reservar Mesa
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
