import React from "react";
import { Dropdown, Button, Space, Input } from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import "./index.css";

const { Search } = Input;
// const onSearch = (value, _e, info) => console.log(info?.source, value);

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
          }
        />
      </div>
    </div>
  );
}

export default Idos;
