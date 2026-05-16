import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import UpdatesHero from "@/components/pages/updates/UpdatesHero";
import UpdatesList from "@/components/pages/updates/UpdatesList";

export const metadata = {
  title: "Updates — Join2GetherWork",
  description: "News, product updates, and thinking from the Join2GetherWork team.",
};

export default function UpdatesPage() {
  return (
    <main>
      <Navbar />
      <UpdatesHero />
      <UpdatesList />
      <Footer />
    </main>
  );
}
