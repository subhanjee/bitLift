import React from "react";
import "./index.css";
import { Col, Row } from "antd";

function Supported() {
  return (
    <div className="div-support">
      <p className="text-white text-center text-[1.5rem]  ">
        Supported Chains
      </p> 
      <div className="flex justify-center">
        {" "}
        <div className="border border-[#00ACB6] rounded-md py-3 mt-8 p-1 pl-10 pr-10 mb-8 py-5">
          {" "} 
          <Row className="flex justify-center gap-[2rem]">
            <Col className="flex items-center justify-center w-[4rem] h-[4rem] bg-[#020415] rounded-full text-white">
              <img
                className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]"
                alt="abc"
                src="../images/bitcoinblue.png"
              />
            </Col>
            <Col className="flex items-center justify-center md:w-[4rem] md:h-[4rem] bg-[#020415] rounded-full text-white">
              <img
                className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]"
                alt="abc"
                src="../images/etheriumblue.png"
              />
            </Col>
            <Col className="flex items-center justify-center w-[4rem] h-[4rem] bg-[#020415] rounded-full text-white">
              <img
                className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]"
                alt="abc"
                src="../images/polygonblue.png"
              />
            </Col>
            <Col className="flex items-center justify-center w-[4rem] h-[4rem] bg-[#020415] rounded-full text-white">
              <img
                className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]"
                alt="abc"
                src="../images/binanceblue.png"
              />
            </Col>
            <Col className="flex items-center justify-center w-[4rem] h-[4rem] bg-[#020415] rounded-full text-white">
              <img
                className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]"
                alt="abc"
                src="../images/avalancheblue.png"
              />
            </Col>
            <Col className="flex items-center justify-center w-[4rem] h-[4rem] bg-[#020415] rounded-full text-white">
              <img
                className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]"
                alt="abc"
                src="../images/arcticblue.png"
              />
            </Col>
            <Col className="flex items-center justify-center w-[4rem] h-[4rem] bg-[#020415] rounded-full text-white">
              <img
                className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]"
                alt="abc"
                src="../images/solanablue.png"
              />
            </Col>
          </Row>
        </div>
      </div>
      <div style={{ marginTop: "5rem" }}>
        <p className="text-white text-[2rem] text-center mb-[1.5rem] ">
          Want To Launch Your Project?
        </p>
        <div className="flex justify-center">
          {" "}
          <button className="flex justify-center items-center w-[10rem] h-[2rem] border rounded-md border-[#00ACB6] bg-[#00ACB6] hover:border-2  text-center lg:inline-flex lg:mt-0 text-white ml-4 mr-4 text-sm font-semibold mb-[18rem]">
            Apply to launch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Supported;
