import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { HowToOrder } from "@/components/site/HowToOrder";
import { Footer } from "@/components/site/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <div aria-hidden className="paper-texture pointer-events-none fixed inset-0 -z-10" />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HowToOrder />
      </main>
      <Footer />
    </div>
  );
}

export default App;
