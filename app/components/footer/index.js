import { Col, Row } from "antd";
import React from "react";
import footLogo from "../images/Icon 2 1.png";
import Image from "next/image";
function Footer() {
  return (
    <div className="mt-15 flex justify-center items-center flex-col ">
      <div className="foot-pad ">
        <Row justify="space-between">
          <Col>
            <div className="flex justify-center items-center flex-col">
              <Image src={footLogo} alt="" />
              <p className="text-white text-[1.2rem] text-center font-bold">
                BitLift
              </p>
            </div>
          </Col>
          <Col>
            <div className="flex justify-center items-center flex-col">
              <div>
                <p className="text-white font-bold">Launchpad</p>
                <p className="text-[#5E6077] mt-2">Blog</p>
                <p className="text-[#5E6077] mt-2">Pools</p>
                <p className="text-[#5E6077] mt-2">Staking</p>
                <p className="text-[#5E6077] mt-2">Account</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="flex justify-center items-center flex-col">
              <div>
                <p className="text-white font-bold">Resources</p>
                <p className="text-[#5E6077] mt-2">Documentation</p>
                <p className="text-[#5E6077] mt-2">WhitePaper</p>
                <p className="text-[#5E6077] mt-2">LItePaper</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="flex justify-center items-center flex-col">
              <div>
                <p className="text-white font-bold">Token</p>
                <p className="text-[#5E6077] mt-2">Buy $LIFT</p>
                <p className="text-[#5E6077] mt-2">Stake $LIFT</p>
                <p className="text-[#5E6077] mt-2">Dextool</p>
                <p className="text-[#5E6077] mt-2">Dune Analytics</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="flex justify-center items-center flex-col">
              <div>
                <p className="text-white font-bold">Legal</p>
                <p className="text-[#5E6077] mt-2">Terms of Service</p>
                <p className="text-[#5E6077] mt-2">Privacy Policy</p>
                <p className="text-[#5E6077] mt-2">Cookies Policy</p>
                <p className="text-[#5E6077] mt-2">Disclaimer</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="flex justify-center items-center flex-col">
              <div>
                <p className="text-white font-bold">Support</p>
                <p className="text-[#5E6077] mt-2">Twitter</p>
                <p className="text-[#5E6077] mt-2">Telegram Group</p>
                <p className="text-[#5E6077] mt-2">Telegram Channel</p>
                <p className="text-[#5E6077] mt-2">Discord</p>
                <p className="text-[#5E6077] mt-2">Email</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <hr className="border-[#BABCD2] w-full" />
      <p className="text-center  text-[#BABCD2] mt-4 mb-20">
        © 2024 BitLift.io || All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
