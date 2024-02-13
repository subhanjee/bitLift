import React from "react";
import { Card, Row } from "antd";

const data = [
  {
    id: 1,
    image: "../images/Example 1.png",
    imagedown: "../images/logos_bitcoin.png",
    imagesocial: "../images/github.png",
    imagesocial1: "../images/twitter.png",
    imagesocial2: "../images/linkdin.png",
    imagesocial3: "../images/circular.png",
    imagesocial4: "../images/github.png",
    totalraised: "131,258 USDT",
    presaleprice: "0.12$",
    listingtime: "5th Feb 11:30:00 UTC",
    launchprice: "0.22$",
    buttontext: "Participate",
    currency: "Bitcoin",
    liveorupcoming: "Live",
    publicorprivate: "Private",
  },
];
const data1 = [
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
];

function Cards() {
  return (
    <div>
      <Row className="flex justify-center gap-[1rem] pb-4">
        {data.map((item, index) => (
          <Card
            key={item.id}
            className={"w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3"}
            style={{
              width: 340,
              background: "radial-gradient(#02656D, #024578)",
              color: "white",
              border: "1px solid #00ACB6", // Border color
            }}
            cover={
              <img
                className="h-[12rem] w-[26.1875rem] "
                alt="example"
                src={item.image}
              />
            }
          >
            <div className="flex justify-center items-center gap-4 ">
              <img className="w-[5rem] h-[5rem]" alt="example" src={item.imagedown} />
              <div className="block ">
                <p className="text-[1.5rem] mb-2">{item.currency}</p>
                <div className="flex ">
                  {" "}
                  <button className="flex justify-center items-center w-[5rem] border rounded-full border-[#00ACB6] bg-[#00ACB6] mt-4 text-center lg:inline-flex lg:mt-0 text-white  text-sm font-bold">
                    {item.liveorupcoming}
                  </button>
                  <button className="flex justify-center items-center w-[5rem] border rounded-full border-[#00ACB6] hover:bg-[#00ACB6] hover:border-2 mt-4 text-center lg:inline-flex lg:mt-0 text-white ml-4 mr-4 text-sm ">
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
        ))}
        {data1.map((item, index) => (
          <Card
            key={item.id}
            className={"w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3"}
            style={{
              width: 340,
              background: "black",
              color: "white",
              border: "1px solid #00ACB6", // Border color
            }}
            cover={
              <img
                className="h-[12.5rem] w-[25rem] p-[0.1rem]"
                alt="example"
                src={item.image}
              />
            }
          >
            <div className="flex justify-center items-center gap-4 ">
              <img className="w-[5rem] h-[5rem]" alt="example" src={item.imagedown} />
              <div className="block ">
                <p className="text-[1.5rem] mb-2">{item.currency}</p>
                <div className="flex ">
                  {" "}
                  <button className="flex justify-center items-center w-[5rem] border rounded-full border-[#00ACB6] bg-[#00ACB6] mt-4 text-center lg:inline-flex lg:mt-0 text-white  text-sm font-bold">
                    {item.liveorupcoming}
                  </button>
                  <button className="flex justify-center items-center w-[5rem] border rounded-full border-[#00ACB6] hover:bg-[#00ACB6] hover:border-2 mt-4 text-center lg:inline-flex lg:mt-0 text-white ml-4 mr-4 text-sm ">
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
        ))}
      </Row>
    </div>
  );
}

export default Cards;
