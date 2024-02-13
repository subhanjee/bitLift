import React from "react";
import "./index.css";
import btnLogo from "../images/mdi_unicorn-variant.png";
import LogoOne from "../images/Vector (1).png";
import LogoTwo from "../images/iconoir_telegram.png";
import LogoThree from "../images/mingcute_discord-line.png";
import Bulb from "../images/Vector (2).png"
import bigBulb from "../images/Vector (3).png"
 
import Image from "next/image";
function HeroSection() {
  return (
    <div className="flex justify-center items-center flex-col padd backgroundimage">
      <h1 className="text-[#F5F5F5] font-size text-enter -mb-5 ">Launch</h1>
      <h1 className="text-[#F5F5F5] font-size text-enter  ">
        with <a className="text-[#00ACB6]">BitLift</a>
      </h1>
      <p className="text-center text-[#ECECFB] md:w-[30rem] w-full p-font">
        BitLift is a Bitcoin-centric launchpad, leveraging the robust BRC20
        token standard. Embodying the ethos of "Build on Bitcoin," it serves as
        a catalyst for advancing blockchain technology within the Bitcoin
        ecosystem.
      </p>
      <div className="mt-10 flex justify-evenly items-center w-[30rem]">
        <button className="rounded-3xl bg-[#00ACB6] text-center text-white px-4 py-2 p-font flex items-center">
          <Image src={btnLogo} alt="" className="mr-2" /> Buy $LIFT
        </button>
        <button className="rounded-3xl bg-[#00ACB6] text-center text-white px-4 py-2 p-font">
          Apply to launch
        </button>
        <Image src={LogoOne} alt="" className="mr-1 w-5 h-5" />
        <Image src={LogoTwo} alt="" className="mr-1 w-6 h-6" />
        <Image src={LogoTwo} alt="" className="mr-1 w-6 h-6" />
        <Image src={LogoThree} alt="" className="mr-1 w-6 h-6" />
      </div>
      <div>
      {/* <Image src={Bulb} alt="" className=" pos-img"/>
      <Image src={bigBulb} alt="" className=" pos-imgbig"/> */}
      <div className="layer"> 
      </div>
      </div>
    </div>
  );
}

export default HeroSection;
