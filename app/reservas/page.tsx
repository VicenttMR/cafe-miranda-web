import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ReservasSection from "@/components/ReservasSection";

export const metadata: Metadata = {
  title: "Reservas",
  description:
    "Reserva tu mesa en Café Miranda, Es Pujols, Formentera. Fácil y rápido por WhatsApp o llamando al 603 31 98 13.",
};

export default function ReservasPage() {
  return (
    <>
      <PageHeader label="Reservas" title="RESERVA TU" titleOutline="MESA." bg="dark" />
      <ReservasSection hideHeader />
    </>
  );
}
