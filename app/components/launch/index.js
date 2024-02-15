import React from "react";

function Launch() {
  return (
    <div className="flex justify-center items-center flex-col mt-5 px-4">
    <div className="bg-rad ">
      <h1 className="radial-text-gradient-01 text-[1.5rem] md:text-[3rem] text-center ">
        Launch with confidence <br />
        on Bitcoin Ecosystem
        <br />
        using BitLift.  
      </h1>
      <div className="flex justify-center items-center">
      <p className=" text-[#BABCD2] text-center use-text mt-2  ">
        Use BitLift to uplift your project. We support to launch
         projects on Bitcoin Ecosystem.
      </p>
      </div>
      <div className="flex justify-center items-center ">
      <div className=" launch-div  mt-8 "> 
      <button className="mt-2 mb-2 px-5 py-2 bg-white rounded-full text-[.8rem] text-black">Apply to launch</button>
      <button className="mt-2 mb-2 px-5 py-2 hover:bg-white rounded-full text-[.8rem]  text-white hover:text-black">Try for free</button>
      </div>
      </div>
    </div>
    
    </div>
  );
}

export default Launch;
