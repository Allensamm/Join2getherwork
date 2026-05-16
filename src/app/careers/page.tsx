import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CareersHero from "@/components/pages/careers/CareersHero";
import CareersRoles from "@/components/pages/careers/CareersRoles";
import CareersPerks from "@/components/pages/careers/CareersPerks";

export const metadata = {
  title: "Careers — Join2GetherWork",
  description: "Join the team building products for everyday Nigerians.",
};

export default function CareersPage() {
  return (
    <main>
      <Navbar />
      <CareersHero />
      <CareersPerks />
      <CareersRoles />
      <Footer />
    </main>
  );
}
