import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AIFocus from "@/components/AIFocus";
import HowWeWork from "@/components/HowWeWork";
import Industries from "@/components/Industries";
import WhyDevClario from "@/components/WhyDevClario";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AIFocus />
        <HowWeWork />
        <Industries />
        <WhyDevClario />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
