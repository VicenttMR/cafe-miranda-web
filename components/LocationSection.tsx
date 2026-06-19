"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Navigation, ExternalLink } from "lucide-react";
import { cafeConfig } from "@/config/cafe-miranda";

const directions = [
  {
    from: "Playa Es Pujols",
    time: "2 min",
    icon: "🏖️",
    how: "A pie",
  },
  {
    from: "Sant Francesc Xavier",
    time: "15 min",
    icon: "🛵",
    how: "En moto/coche",
  },
  {
    from: "Puerto de La Savina",
    time: "10 min",
    icon: "⛴️",
    how: "En coche",
  },
];

export default function LocationSection({ hideHeader = false }: { hideHeader?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  void hideHeader;

  return (
    <section id="ubicacion" className="section-padding bg-white">
      <div className="container-max" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="tag bg-miranda-red/10 text-miranda-red mb-4 inline-block">
            Encuéntranos
          </span>
          <h2 className="section-title mb-4">
            Estamos en{" "}
            <span className="text-miranda-teal font-grotesk italic font-normal">
              Es Pujols
            </span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            En el corazón del pueblo, a dos minutos de la playa. Búscanos, es
            fácil encontrarnos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Address */}
            <div className="card p-6 flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-miranda-red/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-miranda-red" />
                </div>
                <div>
                  <h3 className="font-grotesk font-semibold text-miranda-dark mb-1">
                    Dirección
                  </h3>
                  <p className="font-inter text-miranda-gray text-sm leading-relaxed">
                    {cafeConfig.address}
                  </p>
                  <a
                    href={cafeConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-grotesk font-semibold text-miranda-teal hover:underline"
                  >
                    Abrir en Google Maps
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-miranda-teal/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-miranda-teal" />
                </div>
                <div>
                  <h3 className="font-grotesk font-semibold text-miranda-dark mb-1">
                    Teléfono
                  </h3>
                  <a
                    href={`tel:${cafeConfig.phoneTel}`}
                    className="font-inter text-miranda-red font-medium text-sm hover:underline"
                  >
                    {cafeConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-miranda-red/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-miranda-red" />
                </div>
                <div>
                  <h3 className="font-grotesk font-semibold text-miranda-dark mb-2">
                    Horario
                  </h3>
                  {Object.entries(cafeConfig.hours).map(([day, hours]) => (
                    <div
                      key={day}
                      className="flex justify-between gap-4 text-sm font-inter"
                    >
                      <span className="text-miranda-gray">{day}</span>
                      <span className="font-medium text-miranda-dark">
                        {hours}
                      </span>
                    </div>
                  ))}
                  <p className="text-xs text-miranda-gray/70 mt-2 font-inter">
                    {cafeConfig.hoursNote}
                  </p>
                </div>
              </div>
            </div>

            {/* How to get there */}
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Navigation className="w-5 h-5 text-miranda-teal" />
                <h3 className="font-grotesk font-semibold text-miranda-dark">
                  Cómo llegar
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {directions.map((d) => (
                  <div
                    key={d.from}
                    className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0"
                  >
                    <span className="text-xl w-8">{d.icon}</span>
                    <div className="flex-1">
                      <p className="font-inter text-sm font-medium text-miranda-dark">
                        {d.from}
                      </p>
                      <p className="font-inter text-xs text-miranda-gray">
                        {d.how}
                      </p>
                    </div>
                    <span className="font-grotesk font-bold text-miranda-red text-sm">
                      {d.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 aspect-[4/3] lg:aspect-auto lg:h-[480px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3082.996!2d1.421!3d38.657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12990e4c80f8f44d%3A0x1!2sAv.+Miramar%2C+30%2C+07871+Es+Pujols!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Café Miranda Es Pujols Formentera"
              />
            </div>
            <p className="font-inter text-xs text-miranda-gray mt-2 text-center">
              Av. Miramar, 30 — Es Pujols, Formentera
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
