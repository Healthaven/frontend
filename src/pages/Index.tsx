import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { TheHealthavenApp } from "@/components/TheHealthavenApp";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <HowItWorks />
      <TheHealthavenApp />
      <Testimonials />
      <FAQ />
      <Waitlist />
      <Footer />
    </main>
  );
};

export default Index;
