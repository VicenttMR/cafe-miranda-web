import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import HomeNav from "@/components/HomeNav";

const HomeFavoritos      = dynamic(() => import("@/components/HomeFavoritos"));
const HomeReels          = dynamic(() => import("@/components/HomeReels"));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"));
const HomeReservaCTA     = dynamic(() => import("@/components/HomeReservaCTA"));

export default function HomePage() {
  return (
    <>
      <h1 className="sr-only">
        Café Miranda — Brunch, Tapas y Desayunos en Es Pujols, Formentera
      </h1>
      <HeroSection />
      <HomeNav />
      <HomeFavoritos />
      <HomeReels />
      <TestimonialsSection />
      <HomeReservaCTA />
    </>
  );
}
