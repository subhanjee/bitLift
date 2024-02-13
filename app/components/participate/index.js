import React from "react";
import "./index.css";
import { Col, Row } from "antd";
import Image from "next/image";
import video from "../images/div.centered-container.png";
function Participate() {
  return (
    <div className="flex justify-center items-center flex-col paddPart">
      <h1 className="text-center text-white font-size-part">
        How to participate?
      </h1>
      <div className="flex justify-evenly items-center mt-10 w-[33rem]">
        <button className="px-6 py-2 text-white border  rounded-full hover:border part-font ">
          Participate
        </button>
        <button className="px-6 py-2 text-white  rounded-full hover:border  part-font ">
          Buy $LIFT
        </button>
        <button className="px-6 py-2 text-white  rounded-full hover:border  part-font ">
          Stake $LIFT
        </button>
      </div>
      <div className="mt-10">
        <Row justify="center">
          <Col>
            <div className="flex justify-center items-center">
              <div className="bg-[#010314]  bodr mt-5 mb-5 w-[28rem]">
                <p className="text-[#BABCD2]  font-dive">
                  Dive into the future by taking part in your favorite project;
                  our step-by-step video guide simplifies the journey, preparing
                  you for an exhilarating launch. Onboard with us today and
                  unlock the gateway to unparalleled opportunities in the IDO
                  space.
                </p>
                <p className="text-[#BABCD2] mt-3 font-dive">
                  To participate in BitLift IDOs, you must stake 100,000 $LIFT
                  for Tier 2
                </p>
                <div className="flex justify-center  mt-7">
                <button className="px-10 py-2 bg-white text-[#010314] rounded-full ">
                  How to Participate
                </button>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="  flex justify-center items-center   ">
              <Image
                src={video}
                alt=""
                className="w-[40rem] h-[32rem] -mt-9 med-scr"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Participate;
