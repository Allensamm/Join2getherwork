import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Products from "@/components/sections/Products";
import WhoWeAre from "@/components/sections/WhoWeAre";
import ImpactStats from "@/components/sections/ImpactStats";
import Philosophy from "@/components/sections/Philosophy";
import AgencySection from "@/components/sections/AgencySection";
import AdvancingSection from "@/components/sections/AdvancingSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Manifesto />
      <Products />
      <WhoWeAre />
      <ImpactStats />
      <Philosophy />
      <AgencySection />
      <AdvancingSection />
      <Footer />
    </main>
  );
}
