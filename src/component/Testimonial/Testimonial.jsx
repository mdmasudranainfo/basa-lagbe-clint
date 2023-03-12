import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { useQuery } from "@tanstack/react-query";

const Testimonial = () => {
  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/review");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className=" container mx-auto mt-16">
      <h2 className="text-6xl text-primary text-center font-semibold ">
        SOME REVIEWS
      </h2>
      <p className="text-lg text-primary text-center font-semibold mt-3 mb-5">
        SEE OUR VALUABLE'S CUSTOMERS REVIEWS
      </p>
      <>
        <Swiper
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          // automatically
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          //
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper">
          <div className=""></div>
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className=" border-primary border-[2px] mt-8 testimonial text-primary p-4 mb-10 rounded-lg">
                <div className="grid grid-cols-2">
                  <img
                    className="w-[100px] h-[100px] rounded-full"
                    src={review.photo}
                    alt=""
                  />

                  <p>
                    {" "}
                    <span className="font-bold">House Name: </span>
                    {review.title}
                  </p>
                </div>
                <h2 className="text-2xl font-semibold">{review.name}</h2>
                <p className="text-xs mb-1"> {review.email}</p>
                <p className="text-xs mb-2">
                  {" "}
                  <span className="font-bold">Date:</span> {review.timeDate}
                </p>
                <p className="text-base">{review.message}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Testimonial;
