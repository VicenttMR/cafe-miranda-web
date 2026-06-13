import type { Metadata } from "next";
import MenuHero from "@/components/MenuHero";
import MenuGrid from "@/components/MenuGrid";
import MenuFavorites from "@/components/MenuFavorites";
import HomeReservaCTA from "@/components/HomeReservaCTA";

export const metadata: Metadata = {
  title: "Menú — Café Miranda",
  description:
    "Carta completa de Café Miranda: desayunos, brunch premium, tapas y bebidas en Es Pujols, Formentera. Reserva tu mesa ahora.",
};

export default function MenuPage() {
  return (
    <>
      <MenuHero />
      <MenuGrid />
      <MenuFavorites />
      <HomeReservaCTA />
    </>
  );
}
