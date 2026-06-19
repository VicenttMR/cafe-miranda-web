import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import HomeNav from "@/components/HomeNav";
import SectionTicker from "@/components/SectionTicker";

// Below-fold sections: loaded as separate JS chunks, reducing initial bundle
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
      <SectionTicker
        words={["COCINA HONESTA", "·", "PRODUCTO LOCAL", "·", "SIN ARTIFICIOS", "·", "TEMPORADA", "·", "ES PUJOLS", "·"]}
        bg="cream"
      />
      <HomeFavoritos />
      <HomeReels />
      <SectionTicker
        words={["RESERVA TU MESA", "·", "LLÁMANOS", "·", "ESTAMOS AQUÍ", "·", "TODOS LOS DÍAS", "·", "FORMENTERA", "·"]}
        bg="teal"
        reverse
      />
      <TestimonialsSection />
      <HomeReservaCTA />
    </>
  );
}
