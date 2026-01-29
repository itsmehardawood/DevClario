import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AIFocus from "@/components/AIFocus";
import HowWeWork from "@/components/HowWeWork";
import Industries from "@/components/Industries";
import WhyDevClario from "@/components/WhyDevClario";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
           <Stats/>
           <HowWeWork />
        <AIFocus />
     
        
        <Industries />
        <WhyDevClario />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
