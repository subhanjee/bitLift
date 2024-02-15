import { Col, Row } from "antd";
import React from "react";
import footLogo from "../images/Icon 2 1.png";
import Image from "next/image";
function Footer() {
  return (
    <div className="mt-[3rem]  py-2 ">
      {/* <div className="foot-pad "> */}
        <Row justify="center">
        <Col xxl={3} xl={4} lg={4} md={4} xs={12}>
            <div className="flex justify-center items-center flex-col ">
              <Image src={footLogo} alt="" />
              <p className="radial-text-gradient-01 text-[2rem] text-center font-bold">
                BitLift 
              </p>
            </div>
          </Col> 
          <Col xxl={3} xl={3} lg={4} md={4} xs={12}>
            <div className="flex justify-center items-center flex-col mt-2 mb-2">
              <div className="text-center md:text-start">
                <p className="text-white font-bold">Launchpad</p>
                <p className="text-[#5E6077] mt-2">Blog</p>
                <p className="text-[#5E6077] mt-2">Pools</p>
                <p className="text-[#5E6077] mt-2">Staking</p>
                <p className="text-[#5E6077] mt-2">Account</p>
              </div>
            </div>
          </Col>
          <Col xxl={3} xl={3} lg={4} md={4} xs={12}>
            <div className="flex justify-center items-center flex-col mt-2 mb-2">
            <div className="text-center md:text-start">

                <p className="text-white font-bold">Resources</p>
                <p className="text-[#5E6077] mt-2">Documentation</p>
                <p className="text-[#5E6077] mt-2">WhitePaper</p>
                <p className="text-[#5E6077] mt-2">LItePaper</p>
              </div>
            </div>
          </Col>
          <Col xxl={3} xl={3} lg={4} md={4} xs={12}>
            <div className="flex justify-center items-center flex-col mt-2 mb-2">
            <div className="text-center md:text-start">

                <p className="text-white font-bold">Token</p>
                <p className="text-[#5E6077] mt-2">Buy $LIFT</p>
                <p className="text-[#5E6077] mt-2">Stake $LIFT</p>
                <p className="text-[#5E6077] mt-2">Dextool</p>
                <p className="text-[#5E6077] mt-2">Dune Analytics</p>
              </div>
            </div>
          </Col>
          <Col xxl={3} xl={3} lg={4} md={4} xs={12}>
            <div className="flex justify-center items-center flex-col mt-2 mb-2">
            <div className="text-center md:text-start">

                <p className="text-white font-bold">Legal</p>
                <p className="text-[#5E6077] mt-2">Terms of Service</p>
                <p className="text-[#5E6077] mt-2">Privacy Policy</p>
                <p className="text-[#5E6077] mt-2">Cookies Policy</p>
                <p className="text-[#5E6077] mt-2">Disclaimer</p>
              </div>
            </div>
          </Col>
          <Col xxl={3} xl={4} lg={4} md={4} xs={12}>
            <div className="flex justify-center items-center flex-col mt-2 mb-2">
            <div className="text-center md:text-start">

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
      {/* </div> */}
      <hr className="border-[#BABCD2]  mt-[5rem]" />
      <p className="text-center  text-[#BABCD2] mt-4 mb-12">
        © 2024 BitLift.io || All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
