import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import MerchSection from "@/components/MerchSection";
import HomeReservaCTA from "@/components/HomeReservaCTA";

export const metadata: Metadata = {
  title: "Merch",
  description:
    "Shop Miranda: gorras, camisetas y tote bags exclusivos de Café Miranda. Edición limitada, disponible en el local y por encargo.",
};

export default function MerchPage() {
  return (
    <>
      <PageHeader label="Shop Miranda" title="LLÉVATE" titleOutline="MIRANDA." bg="red" />
      <MerchSection hideHeader />
      <HomeReservaCTA />
    </>
  );
}
