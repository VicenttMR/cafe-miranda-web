import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Instagram, Star } from "lucide-react";
import { cafeConfig } from "@/config/cafe-miranda";

const footerLinks = [
  { label: "Inicio", href: "/" },
  { label: "Menú", href: "/menu" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Merch", href: "/merch" },
  { label: "Dónde estamos", href: "/donde-estamos" },
  { label: "Reservas", href: "/reservas" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-miranda-dark">

      {/* Teal top stripe */}
      <div className="bg-miranda-teal h-1.5" />

      <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image src="/images/logo-principal.png" alt="Café Miranda" fill className="object-contain" sizes="96px" />
              </div>
              <p className="font-grotesk text-white/40 text-sm">brunch, tapas y amor</p>
            </div>
            <p className="font-grotesk text-sm text-white/50 leading-relaxed max-w-sm mb-6">
              En el corazón de Es Pujols, a dos minutos de la playa. Abiertos todos los días
              para los que saben vivir bien.
            </p>
            <div className="flex flex-col gap-2.5">
              <a href={`tel:${cafeConfig.phoneTel}`}
                className="flex items-center gap-2 font-grotesk text-sm text-white/50 hover:text-miranda-teal transition-colors">
                <Phone className="w-4 h-4" />
                {cafeConfig.phone}
              </a>
              <div className="flex items-start gap-2 font-grotesk text-sm text-white/50">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{cafeConfig.address}</span>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-anton uppercase text-white text-lg mb-5 tracking-wide">Páginas</h3>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((l) => (
                <Link key={l.href} href={l.href}
                  className="font-grotesk text-sm text-white/50 hover:text-miranda-teal transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-anton uppercase text-white text-lg mb-5 tracking-wide">Síguenos</h3>
            <div className="flex flex-col gap-3">
              <a href={cafeConfig.instagramUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-miranda-red to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-grotesk text-sm text-white/70 group-hover:text-white transition-colors">
                    @{cafeConfig.instagram}
                  </p>
                  <p className="font-grotesk text-xs text-white/30">Instagram</p>
                </div>
              </a>
              <a href={cafeConfig.googleReviews} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/20 transition-colors">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                </div>
                <div>
                  <p className="font-grotesk text-sm text-white/70 group-hover:text-white transition-colors">
                    {cafeConfig.rating}★ · {cafeConfig.reviewCount} reseñas
                  </p>
                  <p className="font-grotesk text-xs text-white/30">Google</p>
                </div>
              </a>
              <a
                href={`https://wa.me/${cafeConfig.whatsapp}?text=${encodeURIComponent(cafeConfig.whatsappMessage)}`}
                target="_blank" rel="noopener noreferrer"
                className="mt-2 btn-teal text-center !py-3 !text-xs w-full !justify-center"
              >
                Reservar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-grotesk text-xs text-white/30">
            © {year} Café Miranda · Es Pujols, Formentera
          </p>
          <p className="font-grotesk text-xs text-white/20">
            Diseño web · Vicent Moragues
          </p>
        </div>
      </div>
    </footer>
  );
}
