import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const Slider = () => {
  return (
    <div className="container mx-auto ">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" grid sm:grid-cols-2 grid-col-1">
            <div className="bg-cyan-200 sm:bg-transparent px-5 flex flex-col h-full justify-center">
              <h1 className="text-3xl font-bold">
                Luxury <br />
                Residence here
              </h1>
              <p className="mt-3">
                Whether you’re looking to sell or let your home or want to buy
                or rent a home, we really are the people for you to come to.
              </p>
              <button className="my-3 btn btn-primary w-[120px]">
                Book Now
              </button>
            </div>
            <img
              className=" hidden sm:block"
              src="https://i.ibb.co/0BrGz2c/53-536786-house-image-beautiful-house-png-removebg-preview.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" grid sm:grid-cols-2 grid-col-1">
            <div className="bg-cyan-200 sm:bg-transparent px-5 flex flex-col h-full justify-center">
              <h1 className="text-3xl font-bold">
                Luxury <br />
                Residence here
              </h1>
              <p className="mt-3">
                Whether you’re looking to sell or let your home or want to buy
                or rent a home, we really are the people for you to come to.
              </p>
              <button className="my-3 btn btn-primary w-[120px]">
                Book Now
              </button>
            </div>
            <img
              className=" hidden sm:block"
              src="https://i.ibb.co/0Qcft7N/106a8bdbace0bdc5f17da04932387da8-removebg-preview.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" grid sm:grid-cols-2 grid-col-1">
            <div className="bg-cyan-200 sm:bg-transparent px-5 flex flex-col h-full justify-center">
              <h1 className="text-3xl font-bold">
                Luxury <br />
                Residence here
              </h1>
              <p className="mt-3">
                Whether you’re looking to sell or let your home or want to buy
                or rent a home, we really are the people for you to come to.
              </p>
              <a href="#expensive" className="my-3 btn btn-primary w-[120px]">
                Book Now
              </a>
            </div>
            <img
              className=" hidden sm:block"
              src="https://i.ibb.co/b1HbD0N/png-clipart-window-home-house-building-upside-down-in-americ-surviving-and-righting-the-wrongs-of-th.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
