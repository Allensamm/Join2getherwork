import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AgencyHero from "@/components/pages/agency/AgencyHero";
import AgencyIntro from "@/components/pages/agency/AgencyIntro";
import AgencyWhyUs from "@/components/pages/agency/AgencyWhyUs";
import AgencyServices from "@/components/pages/agency/AgencyServices";
import AgencyProcess from "@/components/pages/agency/AgencyProcess";
import AgencyPricing from "@/components/pages/agency/AgencyPricing";
import AgencyPortfolio from "@/components/pages/agency/AgencyPortfolio";
import AgencyTestimonials from "@/components/pages/agency/AgencyTestimonials";
import AgencyFAQ from "@/components/pages/agency/AgencyFAQ";
import AgencyCTA from "@/components/pages/agency/AgencyCTA";

export const metadata = {
  title: "Website Design Agency — Join2GetherWork",
  description: "We design and build websites that help Nigerian startups and businesses grow. Custom solutions. Fair prices. Quality you can trust.",
};

export default function AgencyPage() {
  return (
    <main>
      <Navbar />
      <AgencyHero />
      <AgencyIntro />
      <AgencyWhyUs />
      <AgencyServices />
      <AgencyProcess />
      <AgencyPricing />
      <AgencyPortfolio />
      <AgencyTestimonials />
      <AgencyFAQ />
      <AgencyCTA />
      <Footer />
    </main>
  );
}
