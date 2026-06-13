import type { Metadata } from "next";
import MenuHero from "@/components/MenuHero";
import MenuCategoriesGrid from "@/components/MenuCategoriesGrid";
import MenuPlatoDestacado from "@/components/MenuPlatoDestacado";
import MenuGridMasonry from "@/components/MenuGridMasonry";
import MenuCTA from "@/components/MenuCTA";
import { menuConfig } from "@/config/menu-items";

export const metadata: Metadata = {
  title: "Menú — Café Miranda",
  description:
    "Carta de Café Miranda: desayunos, brunch premium, tapas y bebidas en Es Pujols, Formentera. Reserva tu mesa ahora.",
};

export default function MenuPage() {
  return (
    <>
      <MenuHero />
      <MenuCategoriesGrid />
      <MenuPlatoDestacado {...menuConfig.destacado} />
      <MenuGridMasonry />
      <MenuPlatoDestacado {...menuConfig.secundario} reverse />
      <MenuCTA />
    </>
  );
}
