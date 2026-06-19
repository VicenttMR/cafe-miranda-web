"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageSquare, Phone, Calendar, Users, CheckCircle } from "lucide-react";
import { cafeConfig } from "@/config/cafe-miranda";

interface FormData {
  name: string; phone: string; date: string;
  time: string; guests: string; notes: string;
}

const timeSlots = [
  "08:00","09:00","10:00","11:00","12:00","13:00",
  "14:00","15:00","19:00","20:00","21:00","22:00",
];

export default function ReservasSection({ hideHeader = false }: { hideHeader?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  void hideHeader;
  const [form, setForm] = useState<FormData>({ name:"", phone:"", date:"", time:"", guests:"2", notes:"" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [`Hola! Quiero reservar una mesa en Café Miranda 🍳`, ``,
      `👤 ${form.name}`, `📅 ${form.date} a las ${form.time}`,
      `👥 ${form.guests} personas`, form.notes ? `📝 ${form.notes}` : "",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${cafeConfig.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  if (!cafeConfig.sections.showReservas) return null;

  return (
    <section id="reservas" className="bg-miranda-dark overflow-hidden" ref={ref}>

      {/* Top stripe */}
      <div className="bg-miranda-teal h-2" />

      <div className="container-max px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: heading + quick options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="font-grotesk text-white/50 text-sm uppercase tracking-widest mb-4">
              Reservas
            </p>
            <div className="overflow-hidden mb-2">
              <motion.h2
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-anton uppercase text-white leading-none"
                style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
              >
                RESERVA TU
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h2
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.18 }}
                className="font-anton uppercase leading-none"
                style={{
                  fontSize: "clamp(3rem, 7vw, 6rem)",
                  WebkitTextStroke: "var(--stroke-w) #1DB5AD",
                  color: "transparent",
                }}
              >
                MESA.
              </motion.h2>
            </div>

            <p className="font-grotesk text-white/60 text-base leading-relaxed mb-8">
              Rellena el formulario y te redirigimos a WhatsApp para confirmar.
              Simple y rápido.
            </p>

            {/* Direct options */}
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${cafeConfig.phoneTel}`}
                className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl px-5 py-4 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-miranda-teal/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-miranda-teal" />
                </div>
                <div>
                  <p className="font-grotesk font-semibold text-white text-sm">Llamar</p>
                  <p className="font-grotesk text-white/50 text-sm">{cafeConfig.phone}</p>
                </div>
              </a>
              <a
                href={`https://wa.me/${cafeConfig.whatsapp}?text=${encodeURIComponent(cafeConfig.whatsappMessage)}`}
                target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 rounded-2xl px-5 py-4 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="font-grotesk font-semibold text-white text-sm">WhatsApp directo</p>
                  <p className="font-grotesk text-white/50 text-sm">Respuesta inmediata</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="bg-white rounded-3xl p-7 lg:p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <CheckCircle className="w-14 h-14 text-miranda-teal" />
                  <h3 className="font-anton uppercase text-miranda-dark text-3xl">¡Listo!</h3>
                  <p className="font-grotesk text-miranda-gray text-sm">
                    Hemos abierto WhatsApp con tu reserva. Confirmaremos enseguida.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <h3 className="font-anton uppercase text-miranda-dark text-2xl mb-1">Solicitar Mesa</h3>
                    <p className="font-grotesk text-miranda-gray text-sm">Te abrimos WhatsApp con todo rellenado.</p>
                  </div>

                  <div>
                    <label className="block font-grotesk text-sm font-medium text-miranda-dark mb-1.5">Nombre *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required
                      placeholder="Tu nombre"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 font-grotesk text-sm focus:outline-none focus:ring-2 focus:ring-miranda-teal/40 focus:border-miranda-teal transition-all" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-grotesk text-sm font-medium text-miranda-dark mb-1.5">
                        <Calendar className="w-3.5 h-3.5 inline mr-1" />Fecha *
                      </label>
                      <input type="date" name="date" value={form.date} onChange={handleChange} required
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 font-grotesk text-sm focus:outline-none focus:ring-2 focus:ring-miranda-teal/40 focus:border-miranda-teal transition-all" />
                    </div>
                    <div>
                      <label className="block font-grotesk text-sm font-medium text-miranda-dark mb-1.5">Hora *</label>
                      <select name="time" value={form.time} onChange={handleChange} required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 font-grotesk text-sm focus:outline-none focus:ring-2 focus:ring-miranda-teal/40 focus:border-miranda-teal bg-white transition-all">
                        <option value="">Hora</option>
                        {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-grotesk text-sm font-medium text-miranda-dark mb-1.5">
                      <Users className="w-3.5 h-3.5 inline mr-1" />Personas
                    </label>
                    <select name="guests" value={form.guests} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 font-grotesk text-sm focus:outline-none focus:ring-2 focus:ring-miranda-teal/40 focus:border-miranda-teal bg-white transition-all">
                      {["1","2","3","4","5","6","7","8+"].map(n => (
                        <option key={n} value={n}>{n} {n === "1" ? "persona" : "personas"}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-grotesk text-sm font-medium text-miranda-dark mb-1.5">Notas (opcional)</label>
                    <textarea name="notes" value={form.notes} onChange={handleChange} rows={2}
                      placeholder="Alergias, cumpleaños, terraza..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 font-grotesk text-sm focus:outline-none focus:ring-2 focus:ring-miranda-teal/40 focus:border-miranda-teal resize-none transition-all" />
                  </div>

                  <button type="submit" className="btn-teal w-full !justify-center">
                    <MessageSquare className="w-4 h-4" />
                    Reservar por WhatsApp
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
