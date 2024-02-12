import Image from "next/image";
import React from "react";
import logo from "../images/FullLogo 1.png";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
function Navbar() {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Doc
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Doc
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Doc
        </a>
      ),
    },
  ];
  return (
    <div className="flex items-center justify-center   ">
      <nav className="flex items-center justify-between flex-wrap container     p-6">
        <div className="flex items-center    ">
          <Image src={logo} alt="abc" />
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow"></div>
          <div>
            <div className="text-sm lg:flex-grow  ">
              <a
                href="#responsive-header"
                className="block mt-4 text-center lg:inline-block lg:mt-0 text-white hover:text-[#00ACB6] ml-4 mr-4"
              >
                IDO
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 text-center lg:inline-block lg:mt-0 text-white hover:text-[#00ACB6] ml-4 mr-4"
              >
                Staking
              </a>
              <a
                href="#responsive-header"
                className="block hover:text-[#00ACB6] mt-4 text-center lg:inline-block lg:mt-0 text-white  ml-4 mr-4"
              >
                Portfolio
              </a>
              
              <Dropdown
                menu={{
                  items,
                }}
                className="flex justify-center hover:text-[#00ACB6] mt-4 text-center lg:inline-flex lg:mt-0 text-white  ml-4 mr-4"
              >
                <Space>
                  Doc
                  <DownOutlined style={{fontSize: ".7rem",marginLeft: ".5rem"}}/>
                </Space>
              </Dropdown>
             
              <Dropdown
                menu={{
                  items,
                }}
                className="flex justify-center hover:text-[#00ACB6] mt-4 text-center lg:inline-flex lg:mt-0 text-white  ml-4 mr-4"
              >
                <Space>
                  Social
                  <DownOutlined style={{fontSize: ".7rem",marginLeft: ".5rem"}}/>
                </Space>
              </Dropdown>

              <Dropdown
                menu={{
                  items,
                }}
                className="flex justify-center hover:text-[#00ACB6] mt-4 text-center lg:inline-flex lg:mt-0 text-white  ml-4 mr-4"
              >
                <Space>
                  $Lift
                  <DownOutlined style={{fontSize: ".7rem",marginLeft: ".5rem"}}/>
                </Space>
              </Dropdown>
               
              <a
                href="#"
                className="inline-block   justify-center items-center text-sm px-6 py-3 leading-none  bg-[#00ACB6] rounded-full text-white  mt-4 lg:mt-0 ml-4 mr-4"
              >
                Connect Wallet
              </a>
            </div>
          </div>
        </div>
      </nav>
      </div>
  );
}

export default Navbar;
