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
    <div>
      <div>
        <p className="text-white text-center text-2xl pb-8">IDOs</p>
      </div>
      <div className="flex justify-center text-white pb-24">
        <button className="flex justify-center items-center w-[8rem] border rounded-md border-[#00ACB6] hover:bg-[#00ACB6] hover:border-2 mt-4 text-center lg:inline-flex lg:mt-0 text-white ml-4 mr-4 text-xs">
          Live
        </button>
        <button className="flex justify-center items-center w-[8rem] border rounded-md border-[#00ACB6] hover:bg-[#00ACB6] hover:border-2 mt-4 text-center lg:inline-flex lg:mt-0 text-white ml-4 mr-4 text-xs">
          Upcoming
        </button>
        <button className="flex justify-center items-center w-[8rem] border rounded-md border-[#00ACB6] hover:bg-[#00ACB6] hover:border-2 mt-4 text-center lg:inline-flex lg:mt-0 text-white ml-4 mr-4 text-xs">
          Finished
        </button>

        <Dropdown
          menu={{
            items,
          }}
          className="flex justify-center w-32 border rounded-md border-[#00ACB6] hover:bg-[#00ACB6] mt-4 text-center lg:inline-flex lg:mt-0 text-white ml-4 mr-4"
        >
          <Space className="p-1">
            Chains
            <DownOutlined style={{ fontSize: ".7rem", marginLeft: ".5rem" }} />
          </Space>
        </Dropdown>

        <Input
          className="flex justify-center items-center  w-32 border rounded-md border-[#00ACB6] hover:bg-[#00ACB6] mt-4 text-center lg:inline-flex lg:mt-0 text-white ml-4 mr-4"
          placeholder="Search By Name"
          // onSearch={onSearch}
          style={{
            backgroundColor: "transparent", // Set background to transparent
            width: 200,
            paddingRight: "30px", // Adjust the padding to accommodate the search icon
            textAlign: "right",
          }}
          prefix={
            <Space>
              <SearchOutlined />
            </Space>
          }
        />
        {/* <Search
          placeholder="Search By Name"
          // onSearch={onSearch}
          prefix={
            <Space>
              <SearchOutlined />
            </Space>
          }
          style={{
            width: 200,
          }}
        /> */}
      </div>
    </div>
  );
}

export default Idos;
