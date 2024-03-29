import Idos from "./components/Idos";
import Cards from "./components/cards";
 import FAQ from "./components/faq";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import Launch from "./components/launch";
import Navbar from "./components/navbar";
 import Participate from "./components/participate";
import Supported from "./components/supported";

export default function Home() {
  return (
    <div className=" bg-black px-2">
      <div className="bg-[#010314] ">
      <Navbar />
      <HeroSection />
      </div>
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
