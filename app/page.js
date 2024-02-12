import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";
import Participate from "./components/participate";

export default function Home() {
  return (
    <div className="bg-black ">
      <Navbar />
      <HeroSection />
      <Participate/>
    </div>
  );
}
