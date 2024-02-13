"use client";
import React from "react";
import { Card } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import eth from "../images/Group 140.png";
import Image from "next/image";
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
const data1 = [
  {
    id: 1,
    image: "../images/Example 1.png",
    imagedown: "../images/lith.png",
    imagesocial: "../images/github.png",
    imagesocial1: "../images/twitter.png",
    imagesocial2: "../images/linkdin.png",
    imagesocial3: "../images/circular.png",
    imagesocial4: "../images/github.png",
    totalraised: "131,258 USDT",
    presaleprice: "0.12$",
    listingtime: "5th Feb 11:30:00 UTC",
    launchprice: "0.22$",
    buttontext: "Register",
    currency: "Ethereum",
    liveorupcoming: "LIVE",
    publicorprivate: "Public",
  },
  {
    id: 2,
    image: "../images/Post 1.png",
    imagedown: "../images/lith.png",
    imagesocial: "../images/github.png",
    imagesocial1: "../images/twitter.png",
    imagesocial2: "../images/linkdin.png",
    imagesocial3: "../images/circular.png",
    imagesocial4: "../images/github.png",
    totalraised: "131,258 USDT",
    presaleprice: "0.12$",
    listingtime: "5th Feb 11:30:00 UTC",
    launchprice: "0.22$",
    buttontext: "Register",
    currency: "Ethereum",
    liveorupcoming: "Upcoming",
    publicorprivate: "Public",
  },
  {
    id: 3,
    image: "../images/Post 1.png",
    imagedown: "../images/lite.png",
    imagesocial: "../images/github.png",
    imagesocial1: "../images/twitter.png",
    imagesocial2: "../images/linkdin.png",
    imagesocial3: "../images/circular.png",
    imagesocial4: "../images/github.png",
    totalraised: "131,258 USDT",
    presaleprice: "0.12$",
    listingtime: "5th Feb 11:30:00 UTC",
    launchprice: "0.22$",
    buttontext: "Register",
    currency: "LiteCoin",
    liveorupcoming: "Upcoming",
    publicorprivate: "Public",
  },
  {
    id: 4,
    image: "../images/Post 1.png",
    imagedown: "../images/lith.png",
    imagesocial: "../images/github.png",
    imagesocial1: "../images/twitter.png",
    imagesocial2: "../images/linkdin.png",
    imagesocial3: "../images/circular.png",
    imagesocial4: "../images/github.png",
    totalraised: "131,258 USDT",
    presaleprice: "0.12$",
    listingtime: "5th Feb 11:30:00 UTC",
    launchprice: "0.22$",
    buttontext: "Register",
    currency: "Ethereum",
    liveorupcoming: "Upcoming",
    publicorprivate: "Public",
  },
  {
    id: 5,
    image: "../images/Post 1.png",
    imagedown: "../images/lite.png",
    imagesocial: "../images/github.png",
    imagesocial1: "../images/twitter.png",
    imagesocial2: "../images/linkdin.png",
    imagesocial3: "../images/circular.png",
    imagesocial4: "../images/github.png",
    totalraised: "131,258 USDT",
    presaleprice: "0.12$",
    listingtime: "5th Feb 11:30:00 UTC",
    launchprice: "0.22$",
    buttontext: "Register",
    currency: "LiteCoin",
    liveorupcoming: "Upcoming",
    publicorprivate: "Public",
  },
  {
    id: 6,
    image: "../images/Post 1.png",
    imagedown: "../images/lite.png",
    imagesocial: "../images/github.png",
    imagesocial1: "../images/twitter.png",
    imagesocial2: "../images/linkdin.png",
    imagesocial3: "../images/circular.png",
    imagesocial4: "../images/github.png",
    totalraised: "131,258 USDT",
    presaleprice: "0.12$",
    listingtime: "5th Feb 11:30:00 UTC",
    launchprice: "0.22$",
    buttontext: "Register",
    currency: "LiteCoin",
    liveorupcoming: "Upcoming",
    publicorprivate: "Public",
  },
  {
    id: 7,
    image: "../images/Post 1.png",
    imagedown: "../images/lite.png",
    imagesocial: "../images/github.png",
    imagesocial1: "../images/twitter.png",
    imagesocial2: "../images/linkdin.png",
    imagesocial3: "../images/circular.png",
    imagesocial4: "../images/github.png",
    totalraised: "131,258 USDT",
    presaleprice: "0.12$",
    listingtime: "5th Feb 11:30:00 UTC",
    launchprice: "0.22$",
    buttontext: "Register",
    currency: "LiteCoin",
    liveorupcoming: "Upcoming",
    publicorprivate: "Public",
  },
  {
    id: 8,
    image: "../images/Post 1.png",
    imagedown: "../images/lite.png",
    imagesocial: "../images/github.png",
    imagesocial1: "../images/twitter.png",
    imagesocial2: "../images/linkdin.png",
    imagesocial3: "../images/circular.png",
    imagesocial4: "../images/github.png",
    totalraised: "131,258 USDT",
    presaleprice: "0.12$",
    listingtime: "5th Feb 11:30:00 UTC",
    launchprice: "0.22$",
    buttontext: "Register",
    currency: "LiteCoin",
    liveorupcoming: "Upcoming",
    publicorprivate: "Public",
  },
  {
    id: 9,
    image: "../images/Post 1.png",
    imagedown: "../images/lite.png",
    imagesocial: "../images/github.png",
    imagesocial1: "../images/twitter.png",
    imagesocial2: "../images/linkdin.png",
    imagesocial3: "../images/circular.png",
    imagesocial4: "../images/github.png",
    totalraised: "131,258 USDT",
    presaleprice: "0.12$",
    listingtime: "5th Feb 11:30:00 UTC",
    launchprice: "0.22$",
    buttontext: "Register",
    currency: "LiteCoin",
    liveorupcoming: "Upcoming",
    publicorprivate: "Public",
  },
];

function Cards() {
  return (
    <div className="flex justify-center items-center slider-container ">
      <div className=" width-div">
        <Slider {...settings} className="text-white py-5 ">
          {data1.map((item, index) => (
            <div className="flex flex-col ">
              <Card
                key={index}
                className="w-full hovr mt-2 mb-10"
                style={{
                  color: "white",
                  border: "1px solid #00ACB6", // Border color
                }}
                cover={
                  <img
                    className="h-[15rem] w-[25rem] p-[0.1rem]"
                    alt="example"
                    src={item.image}
                  />
                }
              >
                <Image src={eth} alt="" className="eth-img" />
                <div className="flex justify-center items-center gap-4 mt-2">
                  <img alt="example" src={item.imagedown} />
                  <div className="block ">
                    <p className="text-[1.5rem] mb-2">{item.currency}</p>
                    <div className="flex ">
                      {" "}
                      <button className="flex justify-center items-center w-[5rem] border rounded-full border-[#00ACB6] bg-[#00ACB6] mt-4 text-center lg:inline-flex lg:mt-0 text-white  text-[.8rem] ">
                        {item.liveorupcoming}
                      </button>
                      <button className="flex justify-center items-center w-[5rem] border rounded-full border-[#00ACB6] hover:bg-[#00ACB6] hover:border-2 mt-4 text-center lg:inline-flex lg:mt-0 text-white ml-4 mr-4 text-[.8rem] ">
                        {item.publicorprivate}
                      </button>
                    </div>
                    <div className="flex justify-start gap-5 mt-6">
                      <img alt="abc" src={item.imagesocial} />
                      <img alt="abc" src={item.imagesocial1} />
                      <img alt="abc" src={item.imagesocial2} />
                      <img alt="abc" src={item.imagesocial3} />
                      <img alt="abc" src={item.imagesocial4} />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-[5rem] mt-7">
                  <div>
                    <p className="text-lg font-semibold">Total Raised</p>
                    <p className="text-base font-thin">{item.totalraised}</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Presale Price</p>
                    <p className="text-base font-thin">{item.presaleprice}</p>
                  </div>
                </div>
                <div className="flex justify-center gap-10 mt-7">
                  <div>
                    <p className="text-lg font-semibold">Listing Time</p>
                    <p className="text-base font-thin">{item.listingtime}</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Launch Price</p>
                    <p className="text-base font-thin">{item.launchprice}</p>
                  </div>
                </div>
                <div className="flex justify-center mt-8">
                  {" "}
                  <button className="flex justify-center items-center w-[8rem] h-[2rem] border rounded-md border-[#00ACB6] bg-[#00ACB6] hover:border-2 mt-4 text-center lg:inline-flex lg:mt-0 text-white ml-4 mr-4 text-base font-semibold ">
                    {item.buttontext}
                  </button>
                </div>
              </Card>
              <Card
                key={index}
                className="w-full hovr mt-[5rem] mb-2"
                style={{
                  color: "white",
                  border: "1px solid #00ACB6", // Border color
                }}
                cover={
                  <img
                    className="h-[15rem] w-[25rem] p-[0.1rem]"
                    alt="example"
                    src={item.image}
                  />
                }
              >
                <div className="flex justify-center items-center gap-4 mt-2">
                  <img alt="example" src={item.imagedown} />
                  <div className="block ">
                    <p className="text-[1.5rem] mb-2">{item.currency}</p>
                    <div className="flex ">
                      {" "}
                      <button className="flex justify-center items-center w-[5rem] border rounded-full border-[#00ACB6] bg-[#00ACB6] mt-4 text-center lg:inline-flex lg:mt-0 text-white  text-[.8rem] ">
                        {item.liveorupcoming}
                      </button>
                      <button className="flex justify-center items-center w-[5rem] border rounded-full border-[#00ACB6] hover:bg-[#00ACB6] hover:border-2 mt-4 text-center lg:inline-flex lg:mt-0 text-white ml-4 mr-4 text-[.8rem] ">
                        {item.publicorprivate}
                      </button>
                    </div>
                    <div className="flex justify-start gap-5 mt-6">
                      <img alt="abc" src={item.imagesocial} />
                      <img alt="abc" src={item.imagesocial1} />
                      <img alt="abc" src={item.imagesocial2} />
                      <img alt="abc" src={item.imagesocial3} />
                      <img alt="abc" src={item.imagesocial4} />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-[5rem] mt-7">
                  <div>
                    <p className="text-lg font-semibold">Total Raised</p>
                    <p className="text-base font-thin">{item.totalraised}</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Presale Price</p>
                    <p className="text-base font-thin">{item.presaleprice}</p>
                  </div>
                </div>
                <div className="flex justify-center gap-10 mt-7">
                  <div>
                    <p className="text-lg font-semibold">Listing Time</p>
                    <p className="text-base font-thin">{item.listingtime}</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Launch Price</p>
                    <p className="text-base font-thin">{item.launchprice}</p>
                  </div>
                </div>
                <div className="flex justify-center mt-8">
                  {" "}
                  <button className="flex justify-center items-center w-[8rem] h-[2rem] border rounded-md border-[#00ACB6] bg-[#00ACB6] hover:border-2 mt-4 text-center lg:inline-flex lg:mt-0 text-white ml-4 mr-4 text-base font-semibold ">
                    {item.buttontext}
                  </button>
                </div>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Cards;
