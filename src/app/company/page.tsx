import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CompanyHero from "@/components/pages/company/CompanyHero";
import CompanyMission from "@/components/pages/company/CompanyMission";
import CompanyTimeline from "@/components/pages/company/CompanyTimeline";
import CompanyValues from "@/components/pages/company/CompanyValues";

export const metadata = {
  title: "Company — Join2GetherWork",
  description: "Learn about Join2GetherWork, our mission, and the team building for Nigeria.",
};

export default function CompanyPage() {
  return (
    <main>
      <Navbar />
      <CompanyHero />
      <CompanyMission />
      <CompanyTimeline />
      <CompanyValues />
      <Footer />
    </main>
  );
}
