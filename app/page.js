import FAQ from "./components/faq";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import Launch from "./components/launch";
import Navbar from "./components/navbar";
import Participate from "./components/participate";

export default function Home() {
  return (
    <div className="bg-black px-2">
      <Navbar />
      <HeroSection />
      <Participate/>
      <FAQ/>
      <Launch/>
      <Footer/>
    </div>
  );
}
