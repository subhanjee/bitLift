import React from "react";
import "./index.css";
function HeroSection() {
  return (
    <div className="flex justify-center items-center flex-col padd">
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
      <div className="mt-10 flex justify-evenly items-center w-[40rem]">
        <button className="rounded-3xl bg-[#00ACB6] text-center text-white px-4 py-2 p-font">
          Buy $LIFT
        </button>
        <button className="rounded-3xl bg-[#00ACB6] text-center text-white px-4 py-2 p-font">
          Apply to launch
        </button>
        <div></div>
      </div>
    </div>
  );
}

export default HeroSection;
