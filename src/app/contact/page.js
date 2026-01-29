import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | DevClario",
  description: "Get in touch with DevClario. Let's discuss how we can help transform your business with AI-powered software solutions.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0a0f1a] min-h-screen pt-20">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
