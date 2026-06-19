import HeroSection from "@/components/HeroSection";
import HomeNav from "@/components/HomeNav";
import HomeFavoritos from "@/components/HomeFavoritos";
import HomeReels from "@/components/HomeReels";
import TestimonialsSection from "@/components/TestimonialsSection";
import HomeReservaCTA from "@/components/HomeReservaCTA";
import SectionTicker from "@/components/SectionTicker";

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
