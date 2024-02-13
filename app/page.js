import Idos from "./components/Idos";
import Cards from "./components/cards";
import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection />
      <Idos />
      <Cards />
    </div>
  );
}
