import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AboutSection from "@/components/AboutSection";
import HomeReservaCTA from "@/components/HomeReservaCTA";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "La historia de Café Miranda. Desde 2016 en Es Pujols, Formentera. Brunch, tapas y producto local con alma.",
};

export default function NosotrosPage() {
  return (
    <>
      <PageHeader label="Nuestra historia" title="MÁS QUE" titleOutline="UN CAFÉ." bg="dark" />
      <AboutSection hideHeader />
      <HomeReservaCTA />
    </>
  );
}
