import HeroSection from "@/components/HeroSection";
import HomeNav from "@/components/HomeNav";
import HomeFavoritos from "@/components/HomeFavoritos";
import TestimonialsSection from "@/components/TestimonialsSection";
import HomeReservaCTA from "@/components/HomeReservaCTA";

export default function HomePage() {
  return (
    <>
      <h1 className="sr-only">
        Café Miranda — Brunch, Tapas y Desayunos en Es Pujols, Formentera
      </h1>
      <HeroSection />
      <HomeNav />
      <HomeFavoritos />
      <TestimonialsSection />
      <HomeReservaCTA />
    </>
  );
}
