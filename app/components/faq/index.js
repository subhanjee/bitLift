import React from "react";
import { Collapse } from "antd";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: "1",
    label: (
      <div className="py-5">
        {" "}
        <p className="text-white ">How to import Prime into Figma?</p>
      </div>
    ),
    children: <p className="text-white">{text}</p>,
  },
  {
    key: "2",
    label: (
      <div className="py-5">
        <p className="text-white">
          Do I need to have paid Figma plan to work with Prime?
        </p>
      </div>
    ),
    children: <p className="text-white">{text}</p>,
  },
  {
    key: "3",
    label: (
      <div className="py-5">
        {" "}
        <p className="text-white">Do I need to be Figma pro?</p>{" "}
      </div>
    ),
    children: <p className="text-white">{text}</p>,
  },
  {
    key: "4",
    label: (
      <div className="py-5">
        {" "}
        <p className="text-white">How do I get an update of the kit? </p>
      </div>
    ),
    children: <p className="text-white">{text}</p>,
  },
  {
    key: "5",
    label: (
      <div className="py-5">
        <p className="text-white">
          Do you offer Purchase Power Parity discounts?
        </p>
      </div>
    ),
    children: <p className="text-white">{text}</p>,
  },
  {
    key: "6",
    label: (
      <div className="py-5">
        <p className="text-white">
          Do you offer discounts for Students & Teachers?
        </p>
      </div>
    ),
    children: <p className="text-white">{text}</p>,
  },
];

function FAQ() {
  return (
    <div className="flex justify-center items-center flex-col  martop">
      <h1 className="font-size-part text-white">Have a question?</h1>
      <h2 className=" text-[#4E616B] font-size-part ">FAQ</h2>
      <hr className="border-[white] collap mt-14" />
      <Collapse
        bordered={false}
        expandIconPosition="end"
        accordion
        items={items}
        className=" collap "
      />
      <hr className="border-[white] collap" />
    </div>
  );
}

export default FAQ;
