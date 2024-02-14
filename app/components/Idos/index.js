import React from "react";
import { Dropdown, Button, Space, Input } from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import "./index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { Search } = Input;
// const onSearch = (value, _e, info) => console.log(info?.source, value);
const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  appendDots: (dots) => (
    <div
      style={{
        backgroundColor: "transparent",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  customPaging: (i) => (
    <div
      className="flex justify-center items-center hover:bg-[#00ACB6]"
      style={{
        width: "30px",
        height: "30px",
        color: "white",
        border: "1px #00ACB6 solid",
        borderRadius: "50%",
        textAlign: "center",
      }}
    >
      {i + 1}
    </div>
  ),
};

function Idos() {
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
    <div className="mt-[5rem] md:mt-[10rem] flex  justify-center items-center flex-col">
      <div>
        <p className="text-white text-center text-2xl pb-8">IDOs</p>
      </div>
      <div className="intial-block div-ido md:flex justify-evenly items-center text-white pb-24">
       
        <button className="flex justify-center items-center w-[9rem] h-[2rem] border rounded-md border-[#00ACB6] hover:bg-[#00ACB6] hover:border-2 mt-4 text-center lg:inline-flex lg:mt-0 text-white   text-xs">
          Live
        </button>
        <button className="flex justify-center items-center w-[9rem] h-[2rem] border rounded-md border-[#00ACB6] hover:bg-[#00ACB6] hover:border-2 mt-4 text-center lg:inline-flex lg:mt-0 text-white   text-xs">
          Upcoming
        </button>
        <button className="flex justify-center items-center w-[9rem] h-[2rem] border rounded-md border-[#00ACB6] hover:bg-[#00ACB6] hover:border-2 mt-4 text-center lg:inline-flex lg:mt-0 text-white   text-xs">
          Finished
        </button>
        <Dropdown
          menu={{
            items,
          }}
          className="flex justify-center w-36 border rounded-md border-[#00ACB6] hover:bg-[#00ACB6] mt-4 text-center lg:inline-flex lg:mt-0 text-white  "
        >
          <Space className="p-1">
            Chains
            <DownOutlined style={{ fontSize: ".7rem", marginLeft: ".5rem" }} />
          </Space>
        </Dropdown>
        <Input
          className="flex justify-center items-center h-[2rem]  search-size  border rounded-md border-[#00ACB6] hover:bg-[#00ACB6] mt-4 text-center lg:inline-flex lg:mt-0 text-white  "
          placeholder="Search By Name"
          style={{
            backgroundColor: "transparent", // Set background to transparent
            paddingRight: "30px", // Adjust the padding to accommodate the search icon
            textAlign: "right",
          }}
          prefix={
            <Space>
              <SearchOutlined />
            </Space>
          </Dropdown>

          <Input
            className="flex justify-center items-center  w-34 border rounded-md border-[#00ACB6] hover:bg-[#00ACB6] mt-4 text-center lg:inline-flex lg:mt-0 text-white ml-10 mr-8"
            placeholder="Search By Name"
            // onSearch={onSearch}
            style={{
              backgroundColor: "transparent", // Set background to transparent
              width: 220,
              paddingRight: "30px", // Adjust the padding to accommodate the search icon
              textAlign: "right",
            }}
            prefix={
              <Space>
                <SearchOutlined />
              </Space>
            }
          />
        </div>
      </Slider>
    </div>
  );
}

export default Idos;
