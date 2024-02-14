import React from "react";
import "./index.css";
import btnLogo from "../images/mdi_unicorn-variant.png";
import LogoOne from "../images/Vector (1).png";
import LogoTwo from "../images/iconoir_telegram.png";
import LogoThree from "../images/mingcute_discord-line.png";
import Bulb from "../images/Vector (2).png";
import bigBulb from "../images/Vector (3).png";
import main from "../images/Main.png";
import Image from "next/image";
import Navbar from "../navbar";
function HeroSection() {
  const text = ' "Build on Bitcoin," ';

  return (
    <div className="pos-main">
      <div className="flex justify-center items-center flex-col   topmar ">
        <h1 className="text-[#F5F5F5] font-size text-enter -mb-5 ">Launch</h1>
        <h1 className="text-[#F5F5F5] font-size text-enter">
          with <a className="text-[#00ACB6]">BitLift</a>
        </h1>
        <p className="text-center text-[#ECECFB]  p-font">
          BitLift is a Bitcoin-centric launchpad, leveraging the robust BRC20
          token standard. Embodying the ethos of {text} it serves as a catalyst
          for advancing blockchain technology within the Bitcoin ecosystem.
        </p>
        <div className="mt-5 md:mt-10 mbl-hero  flex justify-evenly items-center w-[30rem]">
          <button className="rounded-3xl mt-2 mb-2 bg-[#00ACB6] text-center text-white px-4 py-2 p-fontbtn flex items-center">
            <Image src={btnLogo} alt="" className="mr-2" /> Buy $LIFT
          </button>
          <button className="rounded-3xl bg-[#00ACB6] text-center text-white px-4 py-2 p-fontbtn">
            Apply to launch
          </button>
          <div className="flex justify-evenly  w-[10rem] ">
          <Image src={LogoOne} alt="" className="mr-1 w-5 h-5 mt-2 mb-2" />
          <Image src={LogoTwo} alt="" className="mr-1 w-6 h-6 mt-2 mb-2" />
          <Image src={LogoTwo} alt="" className="mr-1 w-6 h-6 mt-2 mb-2" />
          <Image src={LogoThree} alt="" className="mr-1 w-6 h-6 mt-2 mb-2" />
        </div>
        </div>
        <div>
          <Image src={Bulb} alt="" className=" pos-img" />
          <Image src={bigBulb} alt="" className=" pos-imgbig" />
        </div>
      </div>
      <div className="layer"></div>
    </div>
  );
}

export default HeroSection;
