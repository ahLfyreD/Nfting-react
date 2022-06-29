import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import image1 from "../../../../../asset/images/banner.png";
import { Card } from "../../../../card/Card";
import Button from "@components/toggleBtn/Button";
// import load from "@asset/images/image2.jpg";
// import world from "@asset/images/image3.jpg";

const TopHome = () => {
  return (
    <>
      {/* <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="h-[450px] w-full bg-black"
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <img
          src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          style={{
            display: "block",
            height: "100%",
            margin: "auto",
            width: "100%",
          }}
        />
        <img
          src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          style={{
            display: "block",
            height: "100%",
            margin: "auto",
            width: "100%",
          }}
        />
        <img
          src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          style={{
            display: "block",
            height: "100%",
            margin: "auto",
            width: "100%",
          }}
        />
        <img
          src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          style={{
            display: "block",
            height: "100%",
            margin: "auto",
            width: "100%",
          }}
        />
        <img
          src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          style={{
            display: "block",
            height: "100%",
            margin: "auto",
            width: "100%",
          }}
        />
      </Carousel> */}
      <Carousel className="mb-10">
        <Card
          className="flex flex-column w-full  rounded-xl font-medium object-cover
                      justify-center p-5"
          height="425px"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <div className="">
            <h1 className="text-5xl font-nunito font-bold text-white">
              The up-and-coming NFT
            </h1>
            <h1 className="text-5xl font-nunito font-bold text-white">
              marketplace
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-nunito font-md my-5 text-white">
              Buy, Sell and discover rare digital items
            </h1>
          </div>
          <div className="flex">
            <Button className="mr-10 text-white bg-yellow h-14 w-[150px] rounded-xl">
              Explore
            </Button>
            <Button className=" text-white border-4 border-white h-14 w-[150px] rounded-xl hover:text-black  hover:bg-white">
              Create
            </Button>
          </div>
        </Card>
      </Carousel>
    </>
  );
};

export default TopHome;
