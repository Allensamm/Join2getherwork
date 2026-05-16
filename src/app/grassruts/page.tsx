import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import GrassrutsHero from "@/components/pages/grassruts/GrassrutsHero";
import GrassrutsProblem from "@/components/pages/grassruts/GrassrutsProblem";
import GrassrutsSolution from "@/components/pages/grassruts/GrassrutsSolution";
import GrassrutsFeatures from "@/components/pages/grassruts/GrassrutsFeatures";
import GrassrutsImpact from "@/components/pages/grassruts/GrassrutsImpact";
import GrassrutsSDG from "@/components/pages/grassruts/GrassrutsSDG";
import GrassrutsStatus from "@/components/pages/grassruts/GrassrutsStatus";
import GrassrutsSupport from "@/components/pages/grassruts/GrassrutsSupport";
import GrassrutsWaitlist from "@/components/pages/grassruts/GrassrutsWaitlist";

export const metadata = {
  title: "Grassruts — Join2GetherWork",
  description: "A civic technology platform connecting Nigerian communities directly to their government. Report infrastructure problems. Track real-time progress. Hold institutions accountable.",
};

export default function GrassrutsPage() {
  return (
    <main>
      <Navbar />
      <GrassrutsHero />
      <GrassrutsProblem />
      <GrassrutsSolution />
      <GrassrutsFeatures />
      <GrassrutsImpact />
      <GrassrutsSDG />
      <GrassrutsStatus />
      <GrassrutsSupport />
      <GrassrutsWaitlist />
      <Footer />
    </main>
  );
}
