import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Author } from "@/components/site/Author";
import { OtherServices } from "@/components/site/OtherServices";
import { Faq } from "@/components/site/Faq";
import { HowToOrder } from "@/components/site/HowToOrder";
import { MobileOrderCta } from "@/components/site/MobileOrderCta";
import { Footer } from "@/components/site/Footer";

const legacySections: Record<string, string> = {
  "direction-book": "services",
  "direction-structure": "other-services",
  "direction-product": "other-services",
  "format-01": "other-services",
  "format-02": "other-services",
  "format-04": "services",
  "format-06": "other-services",
  "format-07": "other-services",
  "format-08": "other-services",
  "self-guided": "other-services",
};

function App() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      const sectionId = Object.hasOwn(legacySections, id) ? legacySections[id] : id;
      const target = document.getElementById(sectionId);
      target?.scrollIntoView({ block: "start", behavior: "instant" });
    };

    // React renders the target elements after the browser's initial fragment lookup.
    let initial = requestAnimationFrame(scrollToHash);
    const onHashChange = () => {
      const id = window.location.hash.slice(1);
      if (Object.hasOwn(legacySections, id)) {
        cancelAnimationFrame(initial);
        initial = requestAnimationFrame(scrollToHash);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => {
      cancelAnimationFrame(initial);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen pb-24 lg:pb-0">
      <div aria-hidden="true" className="paper-texture pointer-events-none fixed inset-0 -z-10" />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-paper focus:p-3"
      >
        Перейти к содержанию
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="scroll-mt-20">
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Author />
        <OtherServices />
        <Faq />
        <HowToOrder />
      </main>
      <Footer />
      <MobileOrderCta />
    </div>
  );
}

export default App;
