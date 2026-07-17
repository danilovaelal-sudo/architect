import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Author } from "@/components/site/Author";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { HowToOrder } from "@/components/site/HowToOrder";
import { MobileOrderCta } from "@/components/site/MobileOrderCta";
import { Footer } from "@/components/site/Footer";

function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const scrollToTarget = () => {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ block: "start", behavior: "instant" });
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(() => requestAnimationFrame(scrollToTarget));
    } else {
      requestAnimationFrame(scrollToTarget);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <div aria-hidden className="paper-texture pointer-events-none fixed inset-0 -z-10" />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Author />
        <Testimonials />
        <Faq />
        <HowToOrder />
      </main>
      <Footer />
      <MobileOrderCta />
    </div>
  );
}

export default App;
