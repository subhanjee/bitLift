import Idos from "./components/Idos";
import Cards from "./components/cards";
 import FAQ from "./components/faq";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import Launch from "./components/launch";
 import Participate from "./components/participate";
import Supported from "./components/supported";

export default function Home() {
  return (
    <div className="bg-black px-2">
      <HeroSection />
      <Idos />
      <Cards />
      <Supported />
      <Participate />
      <FAQ />
      <Launch />
      <Footer />
    </div>
  );
}
