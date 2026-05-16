import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ContactHero from "@/components/pages/contact/ContactHero";
import ContactForm from "@/components/pages/contact/ContactForm";

export const metadata = {
  title: "Contact — Join2GetherWork",
  description: "Get in touch with the Join2GetherWork team.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  );
}
