import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProductShelf from "@/components/ProductShelf";
import RitualSteps from "@/components/RitualSteps";
import Testimonials from "@/components/Testimonials";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ProductShelf />
      <RitualSteps />
      <Testimonials />
      <WhatsAppCTA />
      <Footer />
    </main>
  );
}
