import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import LocationSection from "@/components/LocationSection";
import HomeReservaCTA from "@/components/HomeReservaCTA";

export const metadata: Metadata = {
  title: "Dónde estamos",
  description:
    "Café Miranda está en Av. Miramar, 30, Es Pujols, Formentera. Abierto todos los días de 08:00 a 23:30. Cómo llegar desde la playa, el puerto y el aeropuerto.",
};

export default function DondeEstamosPage() {
  return (
    <>
      <PageHeader label="Encuéntranos" title="ES PUJOLS," titleOutline="FORMENTERA." bg="teal" />
      <LocationSection hideHeader />
      <HomeReservaCTA />
    </>
  );
}
