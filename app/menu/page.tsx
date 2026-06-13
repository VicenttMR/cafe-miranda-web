import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import MenuShowcase from "@/components/MenuShowcase";
import HomeReservaCTA from "@/components/HomeReservaCTA";

export const metadata: Metadata = {
  title: "Menú",
  description:
    "Carta completa de Café Miranda: brunch, desayunos, tapas, postres y bebidas en Es Pujols, Formentera.",
};

export default function MenuPage() {
  return (
    <>
      <PageHeader label="Lo que cocinamos" title="EL MENÚ" titleOutline="MIRANDA" bg="teal" />
      <MenuShowcase hideHeader />
      <HomeReservaCTA />
    </>
  );
}
